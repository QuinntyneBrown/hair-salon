describe("photo", () => {

    var photoComponent;
    var $compile;
    var $rootScope;

    class MockActionCreator { }

    beforeEach(() => {
        angular.mock.module("app.photo");
    });

    beforeEach(inject(($controller, _$compile_, _$rootScope_) => {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        photoComponent = $controller("photoComponent", { photoActionCreator: new MockActionCreator() });
    }));

    it("should compile", () => {
        var element = $compile("<photo></photo>")($rootScope);
        expect(element).toBeDefined();
    });

    it("should be defined", () => {
        expect(photoComponent).toBeDefined();
    });
})
