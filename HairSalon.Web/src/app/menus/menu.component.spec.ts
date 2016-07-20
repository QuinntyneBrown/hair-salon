describe("menu", () => {

    var menuComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.menu");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        menuComponent = $controller("menuComponent", { menuActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<menu></menu>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(menuComponent).toBeDefined();
    });
})
