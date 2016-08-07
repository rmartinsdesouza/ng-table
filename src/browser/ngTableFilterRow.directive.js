/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
"use strict";
var templateUrl = require('./filterRow.html');
ngTableFilterRow.$inject = [];
function ngTableFilterRow() {
    var directive = {
        restrict: 'E',
        replace: true,
        templateUrl: templateUrl,
        scope: true,
        controller: 'ngTableFilterRowController'
    };
    return directive;
}
exports.ngTableFilterRow = ngTableFilterRow;
