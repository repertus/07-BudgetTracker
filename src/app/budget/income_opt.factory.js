(function() {
    'use strict';

    angular
    	.module('myApp')
    	.factory('incomeListService', incomeListService);

    // Calls the array that will be used in the budget controller
	function incomeListService() {
		var service = {
			getList: getList
		};

		return service;

		// JSON array of the income drop down options
		function getList() {
			return [
		    {
		      "cat": "Income",
		      "value": "1",
		      "name": "Employment Net Income"
		    },
		    {
		      "cat": "Income",
		      "value": "2",
		      "name": "Current Pension"
		    },
		    {
		      "cat": "Income",
		      "value": "3",
		      "name": "Other Income"
		    }		
		  ]
		}
	}    	

})();


