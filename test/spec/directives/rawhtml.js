'use strict';

describe('Directive: rawHtml', function () {

  // load the directive's module
  beforeEach(module('bootstrapAccordianGeneratorApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<raw-html></raw-html>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the rawHtml directive');
  }));
});
