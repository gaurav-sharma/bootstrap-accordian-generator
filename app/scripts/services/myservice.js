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
	  
	  this.rawHtml = function(objArray, options) {
		  
		  var html = '<div class="panel-group" id="accordion">';
		  
		  var inClass = '';
		  
		  for(var i = 0; i < objArray.length; i++) {
			  
			  if((options[0].defaultValue && i === 0) || options[1].defaultValue) {
				  inClass = ' in'; 
			  } else {
				  inClass = '';
			  }
			  
			  html += '<div class="panel panel-default">' +
						'<div class="panel-heading">' + 
							'<h4 class="panel-title">' + 
								'<a data-toggle="collapse" href="#collapse' + i + '">' + objArray[i].header + '</a>' +						 
							'</h4>' + 
						'</div>' + 				
						'<div id="collapse' + i + '" class="panel-collapse collapse ' + inClass +'">' + 
							'<div class="panel-body">' + objArray[i].content + '</div>' + 
						'</div>' + 
					'</div>';
		  }
		  
		  html += '</div>';
		  
		  return html;
	  };
  });
