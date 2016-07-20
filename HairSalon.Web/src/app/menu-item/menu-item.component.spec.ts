describe("menuItem", () => {

    var menuItemComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.menuItem");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        menuItemComponent = $controller("menuItemComponent", { menuItemActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<menu-item></menu-item>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(menuItemComponent).toBeDefined();
    });
})
