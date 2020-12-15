describe("Unit tests: swApiWidget", () => {
  const widgetId = "widgetId";
  let widget;
  beforeEach(() => {
    spyOn(window.parent, "postMessage");
    spyOn(console, "error");
    widget = new Semaphore.WorkbenchWidgetApi(widgetId);
  });

  it("getStateParams", function () {
    window.parent.postMessage.calls.reset();
    widget.getStateParams();
    expect(window.parent.postMessage.calls.argsFor(0)[0]["type"]).toBe(
      "action"
    );
    expect(window.parent.postMessage.calls.argsFor(0)[0]["key"]).toBe(
      "getStateParams"
    );
    expect(
      window.parent.postMessage.calls.argsFor(0)[0]["data"]["widgetId"]
    ).toBe(widgetId);
  });
});
