angular.module('productCatalogApp', [])

.controller('ProductCatalogController', function() {
    var vm = this;

    vm.products = [
        { name: 'iphone', category: 'Category A', features: ['Feature 1', 'Feature 2'] },
        { name: 'redmi', category: 'Category B', features: ['Feature 1', 'Feature 3'] },
        { name: 'oppo', category: 'Category A', features: ['Feature 2', 'Feature 3'] },
        { name: 'realme', category: 'Category C', features: ['Feature 1'] },
        // Add more products here
    ];

    vm.categories = ['Category A', 'Category B', 'Category C'];
    vm.features = ['Feature 1', 'Feature 2', 'Feature 3'];

    vm.selectedCategory = '';
    vm.selectedFeature = '';
    vm.filteredProducts = vm.products;

    vm.filterProducts = function() {
        vm.filteredProducts = vm.products.filter(function(product) {
            var categoryMatch = vm.selectedCategory === '' || product.category === vm.selectedCategory;
            var featureMatch = vm.selectedFeature === '' || product.features.includes(vm.selectedFeature);
            return categoryMatch && featureMatch;
        });
    };
});
