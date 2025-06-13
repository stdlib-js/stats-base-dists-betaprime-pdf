/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the probability density function (PDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {PositiveNumber} alpha - first shape parameter
* @param {PositiveNumber} beta - second shape parameter
* @returns {number} evaluated PDF
*
* @example
* var y = pdf( 0.5, 1.0, 1.0 );
* // returns ~0.444
*
* @example
* var y = pdf( 0.5, 2.0, 4.0 );
* // returns ~0.878
*
* @example
* var y = pdf( 0.2, 2.0, 2.0 );
* // returns ~0.579
*
* @example
* var y = pdf( 0.8, 4.0, 4.0 );
* // returns ~0.65
*
* @example
* var y = pdf( -0.5, 4.0, 2.0 );
* // returns 0.0
*
* @example
* var y = pdf( 0.5, -1.0, 0.5 );
* // returns NaN
*
* @example
* var y = pdf( 0.5, 0.5, -1.0 );
* // returns NaN
*
* @example
* var y = pdf( NaN, 1.0, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.5, NaN, 1.0 );
* // returns NaN
*
* @example
* var y = pdf( 0.5, 1.0, NaN );
* // returns NaN
*/
function pdf( x, alpha, beta ) {
	return addon( x, alpha, beta );
}


// EXPORTS //

module.exports = pdf;
