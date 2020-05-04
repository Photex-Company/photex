(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{VrUD:function(r,o,n){"use strict";n.r(o);var i=n("ofXK"),t=n("KZX/"),e=n("tyNb"),s=n("WHNi"),d=n("3Pt+");class a{static MatchPassword(r){if(r.get("password").value===r.get("confirmedPassword").value)return null;r.get("confirmedPassword").setErrors({repeatedPassword:!0})}}var c=n("fXoL"),l=n("ktgG"),u=n("eAdx"),f=n("PTQd"),g=n("bTqV");function p(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"Email is required!"),c.Rb())}function m(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"You must provide email"),c.Rb())}function b(r,o){if(1&r&&(c.Sb(0,"div",11),c.vc(1,p,2,0,"div",12),c.vc(2,m,2,0,"div",12),c.Rb()),2&r){const r=c.dc();c.Bb(1),c.ic("ngIf",null==r.f.login.errors?null:r.f.login.errors.required),c.Bb(1),c.ic("ngIf",null==r.f.login.errors?null:r.f.login.errors.pattern)}}function w(r,o){1&r&&c.Nb(0,"div",13)}function h(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"Password is required!"),c.Rb())}function v(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"Password must contain at least 8 characters"),c.Rb())}function x(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"Must contain special character, number, upper and lower case letter"),c.Rb())}function P(r,o){if(1&r&&(c.Sb(0,"div",11),c.vc(1,h,2,0,"div",12),c.vc(2,v,2,0,"div",12),c.vc(3,x,2,0,"div",12),c.Rb()),2&r){const r=c.dc();c.Bb(1),c.ic("ngIf",null==r.f.password.errors?null:r.f.password.errors.required),c.Bb(1),c.ic("ngIf",null==r.f.password.errors?null:r.f.password.errors.minlength),c.Bb(1),c.ic("ngIf",null==r.f.password.errors?null:r.f.password.errors.pattern)}}function C(r,o){1&r&&c.Nb(0,"div",13)}function M(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"Confirmed password is required!"),c.Rb())}function S(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"Password must contain at least 8 characters"),c.Rb())}function k(r,o){1&r&&(c.Sb(0,"div"),c.wc(1,"Not matching passwords"),c.Rb())}function R(r,o){if(1&r&&(c.Sb(0,"div",11),c.vc(1,M,2,0,"div",12),c.vc(2,S,2,0,"div",12),c.vc(3,k,2,0,"div",12),c.Rb()),2&r){const r=c.dc();c.Bb(1),c.ic("ngIf",null==r.f.confirmedPassword.errors?null:r.f.confirmedPassword.errors.required),c.Bb(1),c.ic("ngIf",null==r.f.confirmedPassword.errors?null:r.f.confirmedPassword.errors.minlength),c.Bb(1),c.ic("ngIf",null==r.f.confirmedPassword.errors?null:r.f.confirmedPassword.errors.repeatedPassword)}}function O(r,o){1&r&&c.Nb(0,"div",13)}const _=function(r){return{"is-invalid":r}},y=[{path:"",component:(()=>{class r{constructor(r,o,n,i){this.formBuilder=r,this.authService=o,this.routerExt=n,this.router=i,this.validForm=!1,this.submitted=!1,this.loginPlaceholder="Enter email",this.passwordPlaceholder="Password",this.confirmPasswordPlaceholder="Confirm password"}ngOnInit(){this.routerExt.passedUrl=this.router.url,this.registerForm=this.formBuilder.group({login:["",[d.l.required,d.l.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{1,}$")]],password:["",[d.l.required,d.l.minLength(8),d.l.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$")]],confirmedPassword:["",[d.l.required,d.l.minLength(8)]]},{validator:a.MatchPassword})}register(r,o){this.authService.register(r,o)}registerUser(){this.submitted=!0,this.registerForm.valid?(this.validForm=!0,this.register(this.registerForm.value.login,this.registerForm.value.password)):this.validForm=!1}get f(){return this.registerForm.controls}}return r.\u0275fac=function(o){return new(o||r)(c.Mb(d.b),c.Mb(l.a),c.Mb(u.a),c.Mb(e.c))},r.\u0275cmp=c.Gb({type:r,selectors:[["app-registration-form"]],decls:18,vars:19,consts:[[3,"formGroup","ngSubmit"],[1,"login-container"],[1,"input-container"],[1,"form-group"],["type","text","formControlName","login",1,"form-control",3,"placeholder","ngClass"],["class","invalid-feedback",4,"ngIf"],["class","valid-spacer",4,"ngIf"],["type","password","formControlName","password","appAppPassword","",1,"password-control","form-control",3,"placeholder","ngClass"],["type","password","formControlName","confirmedPassword","appAppPassword","",1,"password-control","form-control",3,"placeholder","ngClass"],[1,"button-container","text-center"],["type","submit","mat-button","",1,"btn"],[1,"invalid-feedback"],[4,"ngIf"],[1,"valid-spacer"]],template:function(r,o){1&r&&(c.Sb(0,"form",0),c.ac("ngSubmit",(function(){return o.registerUser()})),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"div",3),c.Nb(4,"input",4),c.vc(5,b,3,2,"div",5),c.vc(6,w,1,0,"div",6),c.Rb(),c.Sb(7,"div",3),c.Nb(8,"input",7),c.vc(9,P,4,3,"div",5),c.vc(10,C,1,0,"div",6),c.Rb(),c.Sb(11,"div",3),c.Nb(12,"input",8),c.vc(13,R,4,3,"div",5),c.vc(14,O,1,0,"div",6),c.Rb(),c.Rb(),c.Sb(15,"div",9),c.Sb(16,"button",10),c.wc(17,"Register"),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&r&&(c.ic("formGroup",o.registerForm),c.Bb(4),c.ic("placeholder",o.loginPlaceholder)("ngClass",c.kc(13,_,o.submitted&&o.f.login.errors)),c.Bb(1),c.ic("ngIf",o.submitted&&o.f.login.errors),c.Bb(1),c.ic("ngIf",!o.submitted||!o.f.login.errors),c.Bb(2),c.ic("placeholder",o.passwordPlaceholder)("ngClass",c.kc(15,_,o.submitted&&o.f.password.errors)),c.Bb(1),c.ic("ngIf",o.submitted&&o.f.password.errors),c.Bb(1),c.ic("ngIf",!o.submitted||!o.f.password.errors),c.Bb(2),c.ic("placeholder",o.confirmPasswordPlaceholder)("ngClass",c.kc(17,_,o.submitted&&o.f.confirmedPassword.errors)),c.Bb(1),c.ic("ngIf",o.submitted&&o.f.confirmedPassword.errors),c.Bb(1),c.ic("ngIf",!o.submitted||!o.f.confirmedPassword.errors))},directives:[d.m,d.i,d.d,d.a,d.h,d.c,i.i,i.k,f.a,g.a],styles:["[_nghost-%COMP%]{flex-grow:1;display:flex;justify-content:center;align-items:center;margin-top:8vh}.login-failed[_ngcontent-%COMP%]{color:#354f35}.hide[_ngcontent-%COMP%]{display:none}.btn[_ngcontent-%COMP%]{background-color:#354f35;color:#f1f6f6;border-radius:4px;border:2px solid #354f35;margin:0 5px}input[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:hover{border-color:#354f35;-webkit-text-fill-color:#000;-webkit-box-shadow:0 0 0 1000px #fff inset;-webkit-transition:#fff 5000s ease-in-out 0s;transition:#fff 5000s ease-in-out 0s}.login-container[_ngcontent-%COMP%]{display:grid;-ms-grid-columns:75px 300px 75px;-ms-grid-rows:44px 54px 56px 80px 40px 71px;grid-template-columns:75px 300px 75px;grid-template-rows:44px 54px 56px 80px 40px 91px;background-color:#fff;border-radius:1;border:1px solid #020;width:450px;height:430px}.login-logo[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:3;margin:0 auto;-ms-grid-row:2;-ms-grid-column:2;-ms-grid-column-align:center}.input-container[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:2;grid-row-end:6;-ms-grid-row:4;-ms-grid-row-span:3;-ms-grid-column:1;-ms-grid-column-span:3}.form-group[_ngcontent-%COMP%]{display:-ms-flexbox;width:425px;margin-top:20px}.password-control[_ngcontent-%COMP%]{vertical-align:middle}.form-control[_ngcontent-%COMP%]{display:inline-block;margin:0 auto;border-radius:1;height:45px;width:300px}.button-container[_ngcontent-%COMP%]{grid-column-start:2;grid-column-end:3;grid-row-start:7;grid-row-end:8;-ms-grid-row:7;-ms-grid-row-span:2;-ms-grid-column:1;-ms-grid-column-span:3}.btn[_ngcontent-%COMP%]{border-radius:1;width:210px;height:45px}.form-group-link[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:8px;display:flex;flex-wrap:wrap;flex-direction:column;justify-content:center}[_nghost-%COMP%]  .a-show-password{vertical-align:middle;line-height:1.5;padding:.6rem .75rem 0;height:45px}.supportLink[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:6px;text-align:center}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.form-control[_ngcontent-%COMP%]{margin-left:75px}}"]}),r})(),canActivate:[s.a]}];let B=(()=>{class r{}return r.\u0275mod=c.Kb({type:r}),r.\u0275inj=c.Jb({factory:function(o){return new(o||r)},imports:[[e.e.forChild(y)],e.e]}),r})();n.d(o,"RegistrationFormModule",(function(){return I}));let I=(()=>{class r{}return r.\u0275mod=c.Kb({type:r}),r.\u0275inj=c.Jb({factory:function(o){return new(o||r)},imports:[[i.c,t.a,B,d.e,d.k]]}),r})()}}]);