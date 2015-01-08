var AppDispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {
  filterData: function(categoryOrMerchant) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.FILTER_DATA,
      filter: categoryOrMerchant
    });
  },
};