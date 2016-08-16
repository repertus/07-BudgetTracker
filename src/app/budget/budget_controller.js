// Angular set-up per the John Papa AngularJS formatting guidelines
(function() {
    'use strict';

	angular
		.module('myApp')
		.controller('optionCtrl', optionCtrl);

	optionCtrl.$inject = ['slctListService', 'incomeListService'];

	function optionCtrl(slctListService, incomeListService) { 
		var vm = this;
		vm.expenses = [];
		vm.slctOptions = [];
		vm.incomes = [];
		vm.incomeOptions = [];

		// Calls factory for the housing expense select options
		vm.slctOptions = slctListService.getList();
		vm.incomeOptions = incomeListService.getList();

		// Adds the user expense input to the expense table and pushes the housing cost to 
		// be used for 25% comparison
		vm.addNew = function() {
			var type = vm.slctItem;
			var housingCost = 0
			if (type.name === 'Rent' || type.name === 'Mortgage') {
				vm.expenses.push({ 'cat' : type.cat, 'type' : type.name, 'amount' : vm.amount, 'housingCost' : vm.amount});
   			} else if (type.name != 'Rent') {
   				vm.expenses.push({ 'cat' : type.cat, 'type' : type.name, 'amount' : vm.amount});
   			}
   			vm.amount = null;
		};

		// Adds the user income input to the income table and resets
		vm.addNewIncome = function() {
			var type = vm.incomeItem;
			var housingIncome = 0;
			console.log(type);
			console.log(vm.incomeAmount)
			vm.incomes.push({ 'cat' : type.cat, 'type' : type.name, 'amount' : vm.incomeAmount});
   			vm.incomeAmount = null;
		};

		// Removes the user input from the table
		vm.removeRow = function(type){				
			// if ('income' = 'income')
			var index = -1;		
			var expenseArr = eval( vm.expenses );
			for( var i = 0; i < expenseArr.length; i++ ) {
				if( expenseArr[i].type === type ) {
					index = i;
					break;
				}
			}
			vm.expenses.splice( index, 1 );		
		};
	};
})();
