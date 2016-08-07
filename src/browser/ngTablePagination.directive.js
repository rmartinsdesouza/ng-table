/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var ng1 = require('angular');
/**
 * @ngdoc directive
 * @name ngTablePagination
 * @module ngTable
 * @restrict A
 */
ngTablePagination.$inject = ['$compile', '$document', 'ngTableEventsChannel'];
function ngTablePagination($compile, $document, ngTableEventsChannel) {
    return {
        restrict: 'A',
        scope: {
            'params': '=ngTablePagination',
            'templateUrl': '='
        },
        replace: false,
        link: function (scope, element /*, attrs*/) {
            ngTableEventsChannel.onAfterReloadData(function (pubParams) {
                scope.pages = pubParams.generatePagesArray();
            }, scope, function (pubParams) {
                return pubParams === scope.params;
            });
            scope.$watch('templateUrl', function (templateUrl) {
                if (templateUrl === undefined) {
                    return;
                }
                var template = ng1.element('<div ng-include="templateUrl"></div>', $document);
                element.append(template);
                $compile(template)(scope);
            });
        }
    };
}
exports.ngTablePagination = ngTablePagination;
