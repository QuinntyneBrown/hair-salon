describe("simpleCarousel", function () {
    var simpleCarouselComponent;
    var $compile;
    var $rootScope;
    var MockActionCreator = (function () {
        function MockActionCreator() {
        }
        return MockActionCreator;
    }());
    beforeEach(function () {
        angular.mock.module("app.simpleCarousel");
    });
    beforeEach(inject(function ($controller, _$compile_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        simpleCarouselComponent = $controller("simpleCarouselComponent", { simpleCarouselActionCreator: new MockActionCreator() });
    }));
    it("should compile", function () {
        var element = $compile("<simple-carousel></simple-carousel>")($rootScope);
        expect(element).toBeDefined();
    });
    it("should be defined", function () {
        expect(simpleCarouselComponent).toBeDefined();
    });
});
