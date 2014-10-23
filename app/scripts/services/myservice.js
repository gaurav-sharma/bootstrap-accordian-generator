'use strict';

/**
 * @ngdoc service
 * @name bootstrapAccordianGeneratorApp.myService
 * @description
 * # myService
 * Service in the bootstrapAccordianGeneratorApp.
 */
angular.module('bootstrapAccordianGeneratorApp')
  .service('myService', function myService() {
	  
	  this.rawHtml = function(objArray) {
		  
		  var html = '<div class="panel-group" id="accordion">';
		  
		  for(var i = 0; i < objArray.length; i++) {
			  
			  html += '<div class="panel panel-default">' +
						'<div class="panel-heading">' + 
							'<h4 class="panel-title">' + 
								'<a data-toggle="collapse" data-parent="#accordion" href="#collapse' + i + '">' + objArray[i].header + '</a>' +						 
							'</h4>' + 
						'</div>' + 				
						'<div id="collapse' + i + '" class="panel-collapse collapse">' + 
							'<div class="panel-body">' + objArray[i].content + '</div>' + 
						'</div>' + 
					'</div>';
		  }
		  
		  html += '</div>';
		  
		  return html;
	  };
  });
