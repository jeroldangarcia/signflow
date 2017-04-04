import React from 'react'
import { Icon, Select, Panel } from 'seito';
import { Line, Doughnut } from 'react-chartjs-2';


const Shortcut = ({icon, label, text}) => {
  return (
    <div style={{ display:  'flex', flexDirection: 'column', alignItems:'center'}}>
      <Icon icon={icon} />
      <label>{label}</label>
      <span>{text}</span>
    </div>
  )
}

const CampaignCost = (props) => {

  const data = {
    labels: [ 'Medios', 'Prod. Gráfica', 'Otros' ],
    datasets: [
      {
        data:                 [200, 100, 900],
        backgroundColor:      ['#FF6384','#36A2EB','#FFCE56'],
      	hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
      }
    ]
  };

  const budgetActions = [
    <span style={{ margin: '0', fontSize: '1.4rem'}}>Total: 905.750,67€</span>
  ]

  return (

    <Panel title="Gastos Campaña" collapsable={true} collapsed={false} actions={budgetActions}>
      <div style={{ display: 'flex'}}>
        <div style={{ flex: '1.3'}}>
              <Panel className="infopanel" icon="attach_money" title="Medios" actions={<span>813.098,58€</span>} collapsable={true} collapsed={true}>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                <Shortcut icon="tv" label="TV" text="350.652,76"/>
                <Shortcut icon="devices_other" label="Internet" text="167.087,15"/>
                <Shortcut icon="store" label="Exterior" text="145.724,62"/>
                <Shortcut icon="print" label="Prensa" text="105.798,60"/>
                <Shortcut icon="import_contacts" label="Revista" text="0.00"/>
                <Shortcut icon="radio" label="Radio" text="40.127,82"/>
                <Shortcut icon="movie" label="Cine" text="0.00"/>
                <Shortcut icon="video_call" label="Producción" text="3.707,63"/>
              </div>
              </Panel>
              <Panel className="infopanel" icon="attach_money" title="Prod. Gráfica y Realización" actions={<span>31.034,48€</span>} collapsable={true} collapsed={true}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                  <Shortcut icon="import_contacts" label="Directa" text="0.00"/>
                  <Shortcut icon="photo_camera" label="Fotografía" text="12.865,23"/>
                  <Shortcut icon="tv" label="TV" text="14.235,98"/>
                  <Shortcut icon="headset" label="Estudio Grabación" text="3.735,87"/>
                  <Shortcut icon="more_vertical" label="Otros" text="197,40"/>
                </div>
              </Panel>
              <Panel className="infopanel" icon="attach_money" title="Resto" actions={<span>61.617,61€</span>} collapsable={true} collapsed={true}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'space-around'}}>
                  <Shortcut icon="more_vertical" label="Aportaciones" text="0,00"/>
                  <Shortcut icon="more_vertical" label="PPV" text="61.617,61"/>
                </div>
              </Panel>
        </div>
        <div style={{ flex: '.7', }}>
          <Doughnut data={data} options={{ legend: { position: 'bottom' }}}/>
        </div>
      </div>
    </Panel>

  )
}

export default CampaignCost;
