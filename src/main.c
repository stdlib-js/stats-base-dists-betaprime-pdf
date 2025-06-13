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

#include "stdlib/stats/base/dists/betaprime/pdf.h"
#include "stdlib/stats/base/dists/betaprime/logpdf.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/special/exp.h"

/*
* Evaluates the probability density function (PDF) for a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta`.
*
* @param x        input value
* @param alpha    first shape parameter
* @param beta     second shape parameter
* @return         evaluated PDF
*
* @example
* double y = stdlib_base_dists_betaprime_pdf( 0.5, 1.0, 1.0 );
* // returns ~0.444
*/
double stdlib_base_dists_betaprime_pdf( const double x, const double alpha, const double beta ) {
	if (
		stdlib_base_is_nan( x ) ||
		stdlib_base_is_nan( alpha ) ||
		stdlib_base_is_nan( beta ) ||
		alpha <= 0.0 ||
		beta <= 0.0
	) {
		return 0.0 / 0.0; // NaN
	}

	return stdlib_base_exp( stdlib_base_dists_betaprime_logpdf( x, alpha, beta ) ); // eslint-disable-line max-len
}
