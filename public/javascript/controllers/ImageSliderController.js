(function() {
	angular.module('app').controller("ImageSliderController", ImageSliderController);
	ImageSliderController.$inject = [];

	function ImageSliderController() {
		var vm = this;

		vm.myInterval  = 3000;
		vm.noWrapSlides = false;
		vm.slides = [{image: 'https://coreonnewenergyenglish.files.wordpress.com/2012/01/shutterstock_64108582.jpg'},
		{image: 'http://i.ytimg.com/vi/Cnfj6QCGLyA/maxresdefault.jpg'},
		{image: 'http://pre15.deviantart.net/7514/th/pre/i/2012/301/6/4/relaxing_landscape_by_glorin26-d5j9aub.jpg'},
		{image: 'http://snaphotos.com/photos/1/19354.jpg'}];

	}
})();
