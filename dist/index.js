"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=s(function(F,a){
var i=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-pow/dist');function N(e,r,t){return i(e)||i(r)||i(t)||r<=0||t<=0?NaN:e<=0||e>=1?0:r*t*u(e,r-1)*u(1-u(e,r),t-1)}a.exports=N
});var v=s(function(O,q){
var y=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-pow/dist');function d(e,r){if(f(e)||f(r)||e<=0||r<=0)return y(NaN);return t;function t(n){return f(n)?NaN:n<=0||n>=1?0:e*r*o(n,e-1)*o(1-o(n,e),r-1)}}q.exports=d
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),l=v();w(p,"factory",l);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
