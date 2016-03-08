describe("Unit tests: swApiWidget", function () {

  "use strict";
  var widgetId = "widgetId",
    widget;
  beforeEach(function(){
    spyOn(window.top,'postMessage');
    spyOn(console,'error');
    widget = new WorkbenchWidgetApi(widgetId);

  });


  it("getStateParams",
    function () {
      window.top.postMessage.calls.reset();
      widget.getStateParams();
      expect(window.top.postMessage.calls.argsFor(0)[0]["type"]).toBe("action");
      expect(window.top.postMessage.calls.argsFor(0)[0]["key"]).toBe("getStateParams");
      expect(window.top.postMessage.calls.argsFor(0)[0]["data"]["widgetId"]).toBe(widgetId);
    });

  it("navigateToItem with no params",
    function () {
      var error = "Api function 'navigateToItem' arguments list is invalid.\n" +
        "Argument 'item' needs to be of 'Object' type.";
      expect( function(){ widget.navigateToItem(); } ).toThrow(new Error(error));
    });

  it("navigateToItem with no proper param",
    function () {
      var promise = widget.navigateToItem({});
      expect(console.error).not.toHaveBeenCalled();
      expect(promise.then).toBeDefined();
    });
});
