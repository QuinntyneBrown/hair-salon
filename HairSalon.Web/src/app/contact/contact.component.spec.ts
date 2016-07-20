describe("contact", () => {

    var contactComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.contact");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        contactComponent = $controller("contactComponent", { contactActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<contact></contact>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(contactComponent).toBeDefined();
    });
})
