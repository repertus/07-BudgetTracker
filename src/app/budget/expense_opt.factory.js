(function() {
    'use strict';

    angular
    	.module('myApp')
    	.factory('slctListService', slctListService);

    // Calls the array to be used in the budget_controller
	function slctListService() {
		var service = {
			getList: getList
		};

		return service;

		// JSON array for the expense drop down menu
		function getList() {
			return [
		    {
		      "cat": "Housing",
		      "value": "1",
		      "name": "Rent"
		    },
		    {
		      "cat": "Housing",
		      "value": "2",
		      "name": "Telephone"
		    },
		    {
		      "cat": "Housing",
		      "value": "3",
		      "name": "Utilities"
		    },
		    {
		      "cat": "Housing",
		      "value": "4",
		      "name": "Maintenance & Repair"
		    },
		    {
		      "cat": "Housing",
		      "value": "5",
		      "name": "Furnishings"
		    },
		    {
		      "cat": "Housing",
		      "value": "6",
		      "name": "Improvements"
		    },
		    {
		      "cat": "Housing",
		      "value": "7",
		      "name": "Household Help"
		    },
		    {
		      "cat": "Housing",
		      "value": "8",
		      "name": "Other"
		    },
		    {		
		      "cat": "Family",
		      "value": "9",
		      "name": "Food & Grocery"
		    },
		    {
		      "cat": "Family",
		      "value": "10",
		      "name": "Clothing"
		    },
		    {
		      "cat": "Family",
		      "value": "11",
		      "name": "Medical & Dental Expenses"
		    },
		    {
		      "cat": "Family",
		      "value": "12",
		      "name": "Laundry & Dry Cleaning"
		    },
		    {
		      "cat": "Family",
		      "value": "13",
		      "name": "Child Care"
		    },
		    {
		      "cat": "Family",
		      "value": "14",
		      "name": "Education Expenses"
		    },
		    {
		      "cat": "Family",
		      "value": "15",
		      "name": "Legal Expenses"
		    },
		    {
		      "cat": "Family",
		      "value": "16",
		      "name": "Other (alimony,child support, etc.)"
		    },
		    {
 				"cat": "Transportation",
  				"value": "17",
  				"name": "Gas & Oil"
			},
			{
 				"cat": "Transportation",
  				"value": "18",
  				"name": "Maintenance & Repair"
			},
			{
 				"cat": "Transportation",
  				"value": "19",
  				"name": "Other (travel, etc.)"
			},
			{
				"cat": "Giving",
				"value": "20",
				"name": "Charitable"
			},
			{
				"cat": "Giving",
				"value": "21",
				"name": "Non-Charitable"
			},
			{
				"cat": "Leisure",
				"value": "22",
				"name": "Hobbies (club memberships, etc.)"
			},
			{
				"cat": "Leisure",
				"value": "23",
				"name": "Entertainment (restaurants, cable, movies, etc.)"
			},
			{
				"cat": "Debt",
				"value": "24",
				"name": "Mortgage"
			},
			{
				"cat": "Debt",
				"value": "25",
				"name": "Credit Card"
			},
			{
				"cat": "Debt",
				"value": "26",
				"name": "Loans"
			},
			{
				"cat": "Insurance",
				"value": "27",
				"name": "Individual Life"
			},
			{
				"cat": "Insurance",
				"value": "28",
				"name": "Auto"
			},
			{
				"cat": "Insurance",
				"value": "29",
				"name": "Home"
			}		
		  ]
		}
	}    	

})();


