import mobx from 'mobx';
import { observable, computed } from 'mobx';

const DummyBudget = {
  info: {
    company:     { code: '001'  , name: 'El Corte Inglés'},
    group:       { code: '00001', name: 'ECI/FV Verticales'},
    campaign:    { code: '00001', name: 'Black Friday'},
    subcampaign: { code: '00001', name: 'Lonas'},
    bearer:      { code: '00001', name: 'Fuerza de Venta Mixta'},
  },
  materials: [
    { img: '/img/carton.jpg'   , code: '#0001', name: 'Carton Compacto 20x20', detail: "Nike"},
    { img: '/img/carton.jpg'   , code: '#0002', name: 'Carton Compacto 20x20', detail: "Adidas"},
    { img: '/img/cartulina.jpg', code: '#0004', name: 'Cartulina 12cm', detail: "Adidas"},
    { img: '/img/lonas.jpg'    , code: '#0005', name: 'Lona 10m', detail: "Puma"},
    { img: '/img/glasspack.jpg', code: '#0006', name: 'Banderola Glasspack 60x140', detail: "Nike"},

  ]
}

class BudgetStore {
  @observable _budgets = [];
  @observable _budget = DummyBudget;
  @computed get budgets() {
    return this._budgets;
  }
  @computed get budget() {
    return DummyBudget;
  }
}

const singleton = new BudgetStore();
export default singleton;
