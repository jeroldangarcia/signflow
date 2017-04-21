import mobx from 'mobx';
import { observable, computed, action} from 'mobx';

class CampaignStore {

  @observable _campaigns = [];
  @observable _campaign = {};

  @computed get campaigns() {
    return this._campaigns;
  }

  _cias = [
    { label: 'EL CORTE INGLÉS', value: 'ECI' },
    { label: 'HIPERCOR', value: 'Hipercor' },
    { label: 'SFERA', value: 'sfera' },
  ]

  _periods = [
    { label: 'Ejercicio Actual', value: 'ACTUAL' },
    { label: 'Ej. 2016-2017', value: 'PREV' },
    { label: 'Ej. 2015-2016', value: 'THISYEAR' },
    { label: 'Todos los Ejercicios', value: 'ALL' },
  ]

  _seasons = [
    { label: 'Primavera-Verano', value: 'PRIM-VER'},
    { label: 'Otoño-Invierno', value: 'OT-INV'}
  ]

  _states = [
    { label: 'En Curso', value: 'OPEN' },
    { label: 'Futuras', value: 'FUTURE' },
    { label: 'Terminadas', value: 'CLOSED' },
    { label: 'Todas', value: 'ALL' },
  ]
}

const singleton = new CampaignStore();
export default singleton;
