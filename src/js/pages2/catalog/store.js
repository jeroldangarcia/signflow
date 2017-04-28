import mobx from 'mobx';
import { observable, computed, action} from 'mobx';

class MaterialStore {

  @observable _materials = example1;

  @observable _material = {};

  @computed get materials() {
    return this._materials;
  }

}

const singleton = new MaterialStore();
export default singleton;


const example1 = [
  {
    "id": "00001",
    "family": "Hosteleria",
    "mounting": "Posavasos",
    "formats": [
        { "img": "/glasspack.jpg", "name": "Tipo1" },
        { "img": "/glasspack.jpg", "name": "Tipo2" }
    ],
    "providers" : [
      { "id": "00001", "name": "Imprentas Alcantara", "workload": "60%"}
    ]
  },
  {
    "id": "00002",
    "family": "Hosteleria",
    "mounting": "Manteles",
    "formats": [
        { "img": "/vinilo.jpg", "name": "Tipo1" },
        { "img": "/vinilo.jpg", "name": "Tipo2" }
    ],
    "providers" : [
      { "id": "00001", "name": "Imprentas Alcantara", "workload": "60%"}
    ]
  },
  {
    "id": "00003",
    "family": "Lonas",
    "mounting": "Lonas Tipo1",
    "formats": [
        { "img": "/lonas.jpg", "name": "500cm" },
        { "img": "/lonas.jpg", "name": "800cm" }
    ],
    "providers" : [
      { "id": "00001", "name": "Imprentas Alcantara", "workload": "60%"}
    ]
  },
  {
    "id": "00003",
    "family": "Lonas",
    "mounting": "Lonas Gran Formato",
    "formats": [
        { "img": "/lonas.jpg", "name": "5m" },
        { "img": "/lonas.jpg", "name": "10m " },
        { "img": "/lonas.jpg", "name": "20m" }
    ],
    "providers" : [
      { "id": "00001", "name": "Imprentas Alcantara", "workload": "60%"}
    ]
  },
  {
    "id": "00003",
    "family": "Vinilos",
    "mounting": "Vinilos Tipo1",
    "formats": [
        { "img": "/vinilo.jpg", "name": "500cm" },
        { "img": "/vinilo.jpg", "name": "800cm" }
    ],
    "providers" : [
      { "id": "00001", "name": "Imprentas Alcantara", "workload": "60%"}
    ]
  },
];
