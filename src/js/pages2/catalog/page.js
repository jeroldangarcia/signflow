import React from 'react';
import { observer } from 'mobx-react';
import { Page, Toolbar, ConfirmDialog } from 'tatami';
import { FAB, FAM, Icon2, Micon, Menu, Badge2, Card, Header, Tabs, Tab, Stack, SearchBox, Lane, Field } from 'seito';
import LaneItem from './laneItem';

import './page.scss';
import store from './store';
import controller from './controller';

const Product = ({id, name}) => {
  return (
    <Card className="catalog-product-card" style={{ display: 'flex',  padding: '0 0 0 1rem'}}>
        <div className="title">{name}</div>
        <div className="lot-price">1 uds  <span>1,6€</span></div>
        <div className="lot-price">10 uds  <span>1,3€</span></div>
        <div className="lot-price">100 uds  <span>1,0€</span></div>
    </Card>
  )
}

@observer
class CategoryLane extends React.Component {

  handleEditCategoryDialog = (material = { name: 'Banderola 1'}) => {
    const onClose = () => { this.props.toggleDialog(null);}
    this.props.toggleDialog(
      <ConfirmDialog title="Editar Material" onCancel={onClose} onClose={onClose} >
        <Field id="name" label="Nombre" value={material.name} required={true} />
        <Field id="description" label="Descripcion" value={material.description} />
        <Field id="thumbnail" label="Icono" value={material.thumbnail} />
      </ConfirmDialog>
    )
  }

  handleAddProductDialog = () => {
    const onClose = () => { this.props.toggleDialog(null);}
    this.props.toggleDialog(
      <ConfirmDialog title="Nuevo Formato" onCancel={onClose} onClose={onClose} >
        <Field id="root" label="Familia" value="GlassPack" readOnly={true} />
        <Field id="parent" label="Material" value="Banderola 1" readOnly={true} />
        <Field id="name" label="Nombre" value="" required={true}/>
      </ConfirmDialog>
    )
  }

  products = store.contents.filter( content => {
    return content.category === this.props.category.id
  });

  actions = [
    <h4>Nivel</h4>,
    <Tabs>
      <Tab label="1" />
      <Tab label="2" />
      <Tab label="3" />
      <Tab label="4" />
      <Tab label="5" />
    </Tabs>
  ]

  render() {
    return (
      <div style={{ flex:1, display: 'flex', flexDirection: 'column', position: 'relative', margin: '1rem'}}>
        <Header icon="burst_mode" title={this.props.category.name} >
          <Micon icon="more_vert" clickable >
            <Menu title="Material" options={[
              { icon:'edit', label:'Editar Material', action: this.handleEditCategoryDialog },
              { icon:'add', label:'Nuevo Formato', action: this.handleAddProductDialog },
            ]} />
          </Micon>
        </Header>
        <Lane actions={this.actions} image={this.props.category.thumb}>
          {this.products.map( product => <Product key={product.id} {...product}/> )}
        </Lane>
      </div>
    )
  }
}

@observer
class CatalogList extends React.Component {

  handleSelection = (id) => {
    this.props.goto("PRODUCT");
  }

  categories = this.props.parent ? store.categories.filter( category => {
    return category.parent === this.props.parent;
  }) : store.categories;

  render() {
    return (
      <div>
        {this.categories.map( category => <CategoryLane category={category} {...this.props}/>)}
      </div>
    )
  }
}

@observer
class CatalogPage extends React.Component {

  componentWillMount() {
    controller.getAll();
  }

  state = {
    tab: 0
  }

  handleChangeTab = (tab) => {
    this.setState({ tab });
  }

  handleAddFamilyDialog = () => {
    const onClose = () => { this.props.toggleDialog(null);}
    this.props.toggleDialog(
      <ConfirmDialog title="Nueva Familia" onCancel={onClose} onClose={onClose} >
        <Field id="name" label="Nombre" required={true}/>
        <Field id="description" label="description" />
        <Field id="thumbnail" label="Icono" />
      </ConfirmDialog>
    )
  }

  handleEditFamilyDialog = (family = { name: 'GlassPack'}) => {
    const onClose = () => { this.props.toggleDialog(null);}
    this.props.toggleDialog(
      <ConfirmDialog title="Editar Familia" onCancel={onClose} onClose={onClose} >
        <Field id="name" label="Nombre" value={family.name} required={true} />
        <Field id="description" label="Descripcion" value={family.description} />
        <Field id="thumbnail" label="Icono" value="" />
      </ConfirmDialog>
    )
  }

  handleAddMaterialDialog = () => {
    const onClose = () => { this.props.toggleDialog(null);}
    this.props.toggleDialog(
      <ConfirmDialog title="Nuevo Material" onCancel={onClose} onClose={onClose} >
        <Field id="name" label="Nombre" value="" required={true} />
        <Field id="description" label="Descripcion" value="" />
        <Field id="thumbnail" label="Icono" value="" />
      </ConfirmDialog>
    )
  }

  header = (
    <Toolbar className="appBar" icon="store" title="Catálogo" menu={[
      { icon: 'add', label: 'Nueva Familia', action: this.handleAddFamilyDialog},
      { icon: 'edit', label: 'Editar Familia', action: this.handleEditFamilyDialog}
    ]}>
    </Toolbar>
  );

  stickyHeader = () => {
    return (
      <Tabs className="appBar" selected={this.state.tab} onChange={this.handleChangeTab}>
        {store.categoryRoot.map( category => { return <Tab label={category.name} />})}
      </Tabs>
    )
  }

  render() {
    return (
      <Page
        threshold= {0}
        className="catalog-page leaf"
        fixedHeader={this.header}
        stickyHeader={this.stickyHeader()}>

        <Stack selected={this.state.tab}>
          {store.categoryRoot.map( category => {
            return <CatalogList key={category.id} parent={category.id} onEdit={this.handleEditMaterialDialog} onAdd={this.handleAddFormatDialog} {...this.props}/>
          })}
        </Stack>

        <footer style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', height: '5rem', display: 'flex', borderTop: 'solid 1px #ccc', padding: '1rem', alignItems: 'center'}}>
          <Icon2 icon="search" /><SearchBox icon="search" className="flex100"/>
        </footer>

        <FAB icon="add" action={this.handleAddMaterialDialog}/>
      </Page>
    )
  }
}

export { CatalogPage, CatalogList };
