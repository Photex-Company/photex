function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6k0h":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),o=n("fXoL"),a=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t}()},MB3r:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("fXoL"),o=n("/4Yr"),a=n("tk/3"),i=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.globals=e,this.http=n,this.CATALOGUE_API_URL=this.globals.API_URL+"/catalogue",this.IMAGES_API_URL=this.globals.API_URL+"/images"}return _createClass(t,[{key:"getAllCatalogues",value:function(){return this.http.get(this.CATALOGUE_API_URL)}},{key:"getAllImagesFromCatalogue",value:function(t){return this.http.get("".concat(this.IMAGES_API_URL,"/").concat(t))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Wb(o.a),r.Wb(a.b))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);