function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FkkA:function(t,e,n){"use strict";n.r(e);var a=n("ofXK"),i=n("tyNb"),o=n("EGQa"),c=n("fXoL"),r=n("MB3r");function l(t,e){if(1&t){var n=c.Tb();c.Sb(0,"div",6),c.Sb(1,"label",7),c.vc(2),c.Rb(),c.Sb(3,"img",8),c.ac("click",(function(){c.oc(n);var t=e.$implicit;return c.cc().goToCalogue(t)})),c.Rb(),c.Rb()}if(2&t){var a=e.$implicit;c.Bb(2),c.wc(a.Name),c.Bb(1),c.ic("src",a.CoverImageUrl,c.pc)}}var s,u,b=[{path:"",component:(s=function(){function t(e,n){_classCallCheck(this,t),this.catalogueService=e,this.router=n,this.cataloguesInRowNo=4}return _createClass(t,[{key:"ngOnInit",value:function(){this.initCatalogues()}},{key:"initCatalogues",value:function(){var t=this;this.catalogueService.getAllCatalogues().subscribe((function(e){t.catalogues=e}))}},{key:"goToCalogue",value:function(t){this.router.navigate([o.a.CATALOGUE,o.a.CATALOGUE,t.Id])}}]),t}(),s.\u0275fac=function(t){return new(t||s)(c.Mb(r.a),c.Mb(i.c))},s.\u0275cmp=c.Gb({type:s,selectors:[["app-dashboard-page"]],decls:11,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-2"],[1,"col-md-8"],[1,"add-button","right"],["ngFor","",3,"ngForOf"],[1,"col-md-3","img-container"],[1,"img-label"],["onerror","this.src='../../../../assets/img/catalogue.png'","alt","Catalogue img",1,"catalog-image",3,"src","click"]],template:function(t,e){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"h1"),c.vc(4,"Dashboard"),c.Rb(),c.Rb(),c.Nb(5,"div",3),c.Sb(6,"div",2),c.Sb(7,"button",4),c.vc(8," Add catalogue "),c.Rb(),c.Rb(),c.Rb(),c.Sb(9,"div",1),c.uc(10,l,4,2,"ng-template",5),c.Rb(),c.Rb()),2&t&&(c.Bb(10),c.hc("ngForOf",e.catalogues))},directives:[a.j],styles:[".catalog-image[_ngcontent-%COMP%]{width:160px;height:160px;cursor:pointer}.img-container[_ngcontent-%COMP%]{display:inline;margin-bottom:20px;padding:10px}label[_ngcontent-%COMP%]{display:block}.right[_ngcontent-%COMP%]{float:right}"]}),s)}],g=((u=function t(){_classCallCheck(this,t)}).\u0275mod=c.Kb({type:u}),u.\u0275inj=c.Jb({factory:function(t){return new(t||u)},imports:[[i.e.forChild(b)],i.e]}),u),f=n("6k0h"),d=n("KZX/");n.d(e,"DashboardModule",(function(){return h}));var p,h=((p=function t(){_classCallCheck(this,t)}).\u0275mod=c.Kb({type:p}),p.\u0275inj=c.Jb({factory:function(t){return new(t||p)},imports:[[a.c,d.a,f.a,g]]}),p)}}]);