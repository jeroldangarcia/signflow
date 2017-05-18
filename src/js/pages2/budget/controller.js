import store from './store';
import API from './api';

const BudgetController = {

  budgets() {
    API.budgets( data => {
      store.budgets = data;
    }, console.log);
  },

  removeDistributionCenter(distributionID, centerID) {
    alert('TODO: removeDistributioncenter API');
  }

}

export default BudgetController;
