import mobx from 'mobx';
import { observable, computed } from 'mobx';

const DummyBudgets = [
  { id: '#00000-00000-00000-000', name: 'Cartelería Rebajas Enero 2016', state:'closed', img: '/img/rebajas_enero.jpg' },
  { id: '#00000-00000-00000-000', name: 'Cartelería Rebajas Enero 2017', state:'open', img: '/img/rebajas_enero2.jpg' },
]

const DummyBudget = {
  info: {
    company:     { code: '001'  , name: 'El Corte Inglés'},
    group:       { code: '00001', name: 'ECI/FV Verticales'},
    campaign:    { code: '00001', name: 'Black Friday'},
    subcampaign: { code: '00001', name: 'Lonas'},
    bearer:      { code: '00001', name: 'Fuerza de Venta Mixta'},
  },
  materials: [
    { distribution: { 'A':30, 'B':20, 'C':0 }, img: '/img/40x40_10porciento_nike.jpg'   , code: '#0001', name: 'Carton Compacto 20x20'     , detail: "30% Nike"       },
    { distribution: { 'A':30, 'B':20, 'C':0 }, img: '/img/40x40_10porciento_adidas.jpg' , code: '#0002', name: 'Carton Compacto 20x20'     , detail: "30% Adidas"     },
    { distribution: { 'A':30, 'B':20, 'C':0 }, img: '/img/40x40_10porciento_adidas.jpg' , code: '#0004', name: 'Cartulina 12cm'            , detail: "Adidas"         },
    { distribution: { 'A':30, 'B':20, 'C':0 }, img: '/img/40x40_10porciento_adidas.jpg' , code: '#0005', name: 'Lona 10m'                  , detail: "Lona Adidas"    },
    { distribution: { 'A':30, 'B':20, 'C':0 }, img: '/img/40x40_10porciento_nike.jpg'   , code: '#0006', name: 'Banderola Glasspack 60x140', detail: "Banderola Nike" },
    { distribution: { 'A':30, 'B':20, 'C':0 }, img: '/img/vinilo.jpg'                   , code: '#0007', name: 'Vinilo 30cm'               , detail: "Empty"          },
  ]
}

const DummyDistribution = [
  {
     name: 'Distribution 1',
     centers: [
       {
         id: '002',
         name: 'Plaza Cataluña',
         type: 'A',
         langs: [ 'ES/es', 'ES/cat']
       },
       {
         id: '005',
         name: 'Bilbao',
         type: 'A',
         langs: [ 'ES/es', 'ES/eu']
       },
     ]
  }
]

class BudgetStore {
  @observable _budgets = DummyBudgets;
  @observable _budget = DummyBudget;
  @observable _distribution = DummyDistribution;
  @computed get budgets() {
    return this._budgets;
  }
  @computed get budget() {
    return DummyBudget;
  }
  @computed get distribution() {
    return DummyDistribution;
  }
}

const singleton = new BudgetStore();
export default singleton;
