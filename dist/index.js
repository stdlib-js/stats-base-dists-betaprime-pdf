"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=o(function(j,f){
var d=require('@stdlib/stats-base-dists-betaprime-logpdf/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-exp/dist');function y(e,r,i){return t(e)||t(r)||t(i)||r<=0||i<=0?NaN:p(d(e,r,i))}f.exports=y
});var a=o(function(k,s){
var N=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/stats-base-dists-betaprime-logpdf/dist').factory,u=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-exp/dist');function F(e,r){var i;if(u(e)||u(r)||e<=0||r<=0)return N(NaN);return i=g(e,r),q;function q(n){return u(n)?NaN:x(i(n))}}s.exports=F
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=c(),O=a();m(v,"factory",O);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
