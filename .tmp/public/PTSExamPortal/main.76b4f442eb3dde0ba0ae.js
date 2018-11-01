(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{4:function(e,t,n){e.exports=n("zUnb")},ADsi:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(){}},OTVi:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=new(n("EThc").a),a=function(){function e(e,t){this.jwtHelper=e,this.router=t}return e.prototype.canActivate=function(){return this.checkLogin()},e.prototype.checkLogin=function(){var e=localStorage.getItem("token");if(null!=e){var t=o.decodeToken(e);o.getTokenExpirationDate(e);var n=o.isTokenExpired(e);return"admin"===t.type&&!n||(this.router.navigate(["/login"]),!1)}return this.router.navigate(["/login"]),!1},e}()},S5FQ:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o=n("Vx+w"),a=n("XlPw"),r=n("9Z1F"),i=n("s4kO"),p=n("yGWI"),d=n("CcnG"),c=n("t/Na"),u=function(){function e(e){this.http=e}return e.prototype.handleError=function(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error("Backend returned code "+e.status+", body was: "+e.error),Object(a.a)(e.error)},e.prototype.doLogin=function(e){return this.http.post(o.a.api_endpoint+"/login",e).pipe(Object(r.a)(this.handleError))},e.prototype.getCategory=function(){return this.http.get(o.a.api_endpoint+"/get-category").pipe(Object(r.a)(this.handleError),Object(i.a)(1),Object(p.a)())},e.prototype.addQuestion=function(e,t){return this.http.post(o.a.api_endpoint+"/"+t+"-question",e).pipe(Object(r.a)(this.handleError))},e.prototype.getQuestionListing=function(e){return this.http.get(o.a.api_endpoint+"/get-question?skill="+e.skill).pipe(Object(r.a)(this.handleError))},e.prototype.getQuestion=function(e){return this.http.get(o.a.api_endpoint+"/get-question-by-id?id="+e.id).pipe(Object(r.a)(this.handleError))},e.prototype.clearCache=function(){this.category=null},e.prototype.deleteQuestion=function(e){return this.http.post(o.a.api_endpoint+"/delete-question",e).pipe(Object(r.a)(this.handleError))},e.prototype.verifyExamCode=function(e){return this.http.post(o.a.api_endpoint+"/verify-exam-code",e).pipe(Object(r.a)(this.handleError))},e.prototype.submitExam=function(e,t){return this.http.post(o.a.api_endpoint+"/submit-exam?exam_finished="+t,e).pipe(Object(r.a)(this.handleError))},e.prototype.getCandidate=function(){return this.http.get(o.a.api_endpoint+"/get-candidate").pipe(Object(r.a)(this.handleError))},e.prototype.getCandidatelisting=function(){return this.http.get(o.a.api_endpoint+"/get-candidate-listing").pipe(Object(r.a)(this.handleError))},e.prototype.getResult=function(e){return this.http.get(o.a.api_endpoint+"/get-candidate-result?id="+e).pipe(Object(r.a)(this.handleError))},e.prototype.getCandidateScore=function(e){return this.http.get(o.a.api_endpoint+"/get-candidate-score?skill_id="+e.skill_id.id+"&examination_code="+e.examination_code).pipe(Object(r.a)(this.handleError))},e.prototype.generateExamCode=function(e){return this.http.post(o.a.api_endpoint+"/assign-exam-candidate",e).pipe(Object(r.a)(this.handleError))},e.prototype.getQuizQuestionListing=function(e){return this.http.get(o.a.api_endpoint+"/get-quiz-question?skill="+e.skill+"&difficulty="+e.difficulty+"&easy="+e.easy+"&medium="+e.medium).pipe(Object(r.a)(this.handleError))},e.prototype.updateStatusQuestion=function(e){return this.http.post(o.a.api_endpoint+"/deactive-question",e).pipe(Object(r.a)(this.handleError))},e.prototype.addCandidate=function(e,t){return"update"===t.type?(e.id=t.id,this.http.post(o.a.api_endpoint+"/update-candidate",e).pipe(Object(r.a)(this.handleError))):this.http.post(o.a.api_endpoint+"/add-candidate",e).pipe(Object(r.a)(this.handleError))},e.prototype.deleteCandidate=function(e){return this.http.post(o.a.api_endpoint+"/delete-candidate",e).pipe(Object(r.a)(this.handleError))},e.prototype.getCandidateById=function(e){return this.http.get(o.a.api_endpoint+"/get-candidate-byid?id="+e.id).pipe(Object(r.a)(this.handleError))},e.prototype.uploadResumeImage=function(e){return this.http.post(o.a.api_endpoint+"/add-candidate-resume",e).pipe(Object(r.a)(this.handleError))},e.prototype.uploadQuestionImage=function(e){return this.http.post(o.a.api_endpoint+"/update-question-image",e).pipe(Object(r.a)(this.handleError))},e.ngInjectableDef=d.defineInjectable({factory:function(){return new e(d.inject(c.c))},token:e,providedIn:"root"}),e}()},"Vx+w":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={api_endpoint:"http://localhost:1337/api",cv_endpoint:"http://localhost:1337"}},crnd:function(e,t,n){var o={"../candidate/candidate.module.ngfactory":["U9Kh",1,2,3,0,5],"../dashboard/dashboard.module.ngfactory":["uP/6",1,0,7],"../questionlisting/questionlisting.module.ngfactory":["UBId",1,3,0,6],"../result/result.module.ngfactory":["aBKi",2,4,0,8],"./admin-layout/admin-layout.module.ngfactory":["pqxP",2,0,12],"./instruction/instruction.module.ngfactory":["qksU",0,11],"./login/login.module.ngfactory":["f+ep",1,0,9],"./quiz/quiz.module.ngfactory":["cyWF",1,2,4,0,10]};function a(e){var t=o[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}a.keys=function(){return Object.keys(o)},a.id="crnd",e.exports=a},uwVJ:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("26FU"),a=function(){function e(e){this.snackBar=e,this.messageSource=new o.a("default message"),this.currentMessage=this.messageSource.asObservable()}return e.prototype.changeMessage=function(e){this.messageSource.next(e)},e.prototype.openSnackBar=function(e){this.snackBar.open(e,"Ok",{duration:1500})},e}()},vvyD:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(){}},zUnb:function(e,t,n){"use strict";n.r(t);var o=n("CcnG");function a(){return localStorage.getItem("token")}n("yLV6");var r=function(){};Object(o.enableProdMode)();var i=function(){},p=n("NcP4"),d=n("t68o"),c=n("xYTU"),u=n("pMnS"),l=n("ZYCi"),s=o["\u0275crt"]({encapsulation:0,styles:[[".example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]],data:{}});function m(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o["\u0275did"](1,212992,null,0,l.p,[l.b,o.ViewContainerRef,o.ComponentFactoryResolver,[8,null],o.ChangeDetectorRef],null,null)],function(e,t){e(t,1,0)},null)}var h=o["\u0275ccf"]("app-root",i,function(e){return o["\u0275vid"](0,[(e()(),o["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,m,s)),o["\u0275did"](1,49152,null,0,i,[],null,null)],null,null)},{},{},[]),g=n("t/Na"),f=n("Ip0R"),y=n("gFH1"),b=n("cTjZ"),_=n("S5FQ"),E=n("uwVJ"),O=n("vARd"),C=n("HKou"),M=n("XlPw"),j=n("xMyE"),v=n("9Z1F"),S=n("2WpN"),I=function(){function e(e,t,n){this.authService=e,this.router=t,this.msg=n}return e.prototype.intercept=function(e,t){var n=this;return this.msg.changeMessage("indeterminate"),Date.now(),e=e.clone({setHeaders:{Authorization:"Bearer "+localStorage.getItem("token")}}),t.handle(e).pipe(Object(j.a)(function(e){e instanceof g.h&&n.msg.openSnackBar(e.body.response.message)}),Object(v.a)(function(e){if(e instanceof g.f){var t=e.error.response;n.msg.openSnackBar(t.message),"Invalid Token!"==t.message&&n.router.navigate(["/login"])}return Object(M.a)(e)}),Object(S.a)(function(){n.msg.changeMessage("determinate"),Date.now()}))},e}(),k=n("M2Lx"),A=n("eDkP"),N=n("Fzqc"),w=n("v9Dh"),L=n("4tE/"),D=n("uGex"),R=n("4epT"),T=n("Wf4p"),P=n("ZYjt"),F=n("mVsa"),x=n("o3x0"),q=n("NSYL"),B=n("wFw1"),U=n("gIcY"),z=n("ihYY"),H=n("AtLt"),G=n("OTVi"),Z=n("EThc"),V=n("dWZg"),Q=n("lLAP"),Y=n("4c35"),K=n("qAlS"),J=n("UodH"),W=n("seP3"),X=n("y4qS"),$=n("BHnd"),ee=n("YhbO"),te=n("jlZm"),ne=n("de3e"),oe=n("8mMr"),ae=n("/dO6"),re=n("r43C"),ie=n("Z+uX"),pe=n("w+lc"),de=n("kWGw"),ce=n("/VYK"),ue=n("b716"),le=n("Nsh5"),se=n("FVSy"),me=n("SMsm"),he=n("9It4"),ge=n("Blfk"),fe=n("La40"),ye=n("LC5p"),be=n("0/Q6"),_e=n("vvyD"),Ee=n("ADsi"),Oe=function(){},Ce=n("YSh2"),Me=o["\u0275cmf"](r,[i],function(e){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,d.a,c.a,c.b,u.a,h]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,g.j,g.p,[f.DOCUMENT,o.PLATFORM_ID,g.n]),o["\u0275mpd"](4608,g.q,g.q,[g.j,g.o]),o["\u0275mpd"](4608,y.a,y.a,[b.a]),o["\u0275mpd"](4608,g.m,g.m,[]),o["\u0275mpd"](6144,g.k,null,[g.m]),o["\u0275mpd"](4608,g.i,g.i,[g.k]),o["\u0275mpd"](6144,g.b,null,[g.i]),o["\u0275mpd"](4608,g.g,g.l,[g.b,o.Injector]),o["\u0275mpd"](4608,g.c,g.c,[g.g]),o["\u0275mpd"](4608,_.a,_.a,[g.c]),o["\u0275mpd"](4608,E.a,E.a,[O.b]),o["\u0275mpd"](5120,g.a,function(e,t,n,o,a,r){return[e,new C.a(t,n),new I(o,a,r)]},[g.q,b.a,y.a,_.a,l.l,E.a]),o["\u0275mpd"](5120,o.LOCALE_ID,o["\u0275angular_packages_core_core_k"],[[3,o.LOCALE_ID]]),o["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[o.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,k.c,k.c,[]),o["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,o.ComponentFactoryResolver,A.h,A.f,o.Injector,o.NgZone,f.DOCUMENT,N.b]),o["\u0275mpd"](5120,A.j,A.k,[A.c]),o["\u0275mpd"](5120,w.b,w.c,[A.c]),o["\u0275mpd"](5120,L.a,L.b,[A.c]),o["\u0275mpd"](5120,D.a,D.b,[A.c]),o["\u0275mpd"](5120,R.c,R.a,[[3,R.c]]),o["\u0275mpd"](4608,T.d,T.d,[]),o["\u0275mpd"](4608,P.HAMMER_GESTURE_CONFIG,P.HammerGestureConfig,[]),o["\u0275mpd"](5120,F.a,F.c,[A.c]),o["\u0275mpd"](5120,x.c,x.d,[A.c]),o["\u0275mpd"](4608,x.e,x.e,[A.c,o.Injector,[2,f.Location],[2,x.b],x.c,[3,x.e],A.e]),o["\u0275mpd"](5120,o.APP_ID,o["\u0275angular_packages_core_core_f"],[]),o["\u0275mpd"](5120,o.IterableDiffers,o["\u0275angular_packages_core_core_i"],[]),o["\u0275mpd"](5120,o.KeyValueDiffers,o["\u0275angular_packages_core_core_j"],[]),o["\u0275mpd"](4608,P.DomSanitizer,P["\u0275DomSanitizerImpl"],[f.DOCUMENT]),o["\u0275mpd"](6144,o.Sanitizer,null,[P.DomSanitizer]),o["\u0275mpd"](5120,P.EVENT_MANAGER_PLUGINS,function(e,t,n,o,a,r,i,p){return[new P["\u0275DomEventsPlugin"](e,t,n),new P["\u0275KeyEventsPlugin"](o),new P["\u0275HammerGesturesPlugin"](a,r,i,p)]},[f.DOCUMENT,o.NgZone,o.PLATFORM_ID,f.DOCUMENT,f.DOCUMENT,P.HAMMER_GESTURE_CONFIG,o["\u0275Console"],[2,P.HAMMER_LOADER]]),o["\u0275mpd"](4608,P.EventManager,P.EventManager,[P.EVENT_MANAGER_PLUGINS,o.NgZone]),o["\u0275mpd"](135680,P["\u0275DomSharedStylesHost"],P["\u0275DomSharedStylesHost"],[f.DOCUMENT]),o["\u0275mpd"](4608,P["\u0275DomRendererFactory2"],P["\u0275DomRendererFactory2"],[P.EventManager,P["\u0275DomSharedStylesHost"]]),o["\u0275mpd"](5120,q.a,B.e,[]),o["\u0275mpd"](5120,q.c,B.f,[]),o["\u0275mpd"](4608,q.b,B.d,[f.DOCUMENT,q.a,q.c]),o["\u0275mpd"](5120,o.RendererFactory2,B.g,[P["\u0275DomRendererFactory2"],q.b,o.NgZone]),o["\u0275mpd"](6144,P["\u0275SharedStylesHost"],null,[P["\u0275DomSharedStylesHost"]]),o["\u0275mpd"](4608,o.Testability,o.Testability,[o.NgZone]),o["\u0275mpd"](4608,U.u,U.u,[]),o["\u0275mpd"](5120,l.a,l.A,[l.l]),o["\u0275mpd"](4608,l.e,l.e,[]),o["\u0275mpd"](6144,l.g,null,[l.e]),o["\u0275mpd"](135680,l.q,l.q,[l.l,o.NgModuleFactoryLoader,o.Compiler,o.Injector,l.g]),o["\u0275mpd"](4608,l.f,l.f,[]),o["\u0275mpd"](5120,l.E,l.w,[l.l,f.ViewportScroller,l.h]),o["\u0275mpd"](5120,l.i,l.D,[l.B]),o["\u0275mpd"](5120,o.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[l.i]),o["\u0275mpd"](4608,z.AnimationBuilder,B.c,[o.RendererFactory2,P.DOCUMENT]),o["\u0275mpd"](5120,H.d,H.h,[H.e,o.PLATFORM_ID]),o["\u0275mpd"](4608,H.b,H.b,[H.d]),o["\u0275mpd"](4608,H.c,H.c,[H.d]),o["\u0275mpd"](4608,G.a,G.a,[y.a,l.l]),o["\u0275mpd"](4608,I,I,[_.a,l.l,E.a]),o["\u0275mpd"](1073742336,g.e,g.e,[]),o["\u0275mpd"](1073742336,g.d,g.d,[]),o["\u0275mpd"](1073742336,Z.b,Z.b,[[3,Z.b]]),o["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),o["\u0275mpd"](1073742336,V.b,V.b,[]),o["\u0275mpd"](1073742336,k.d,k.d,[]),o["\u0275mpd"](1073742336,Q.a,Q.a,[]),o["\u0275mpd"](1073742336,N.a,N.a,[]),o["\u0275mpd"](1073742336,Y.g,Y.g,[]),o["\u0275mpd"](1073742336,K.b,K.b,[]),o["\u0275mpd"](1073742336,A.g,A.g,[]),o["\u0275mpd"](1073742336,T.n,T.n,[[2,T.f]]),o["\u0275mpd"](1073742336,w.e,w.e,[]),o["\u0275mpd"](1073742336,T.y,T.y,[]),o["\u0275mpd"](1073742336,T.w,T.w,[]),o["\u0275mpd"](1073742336,T.t,T.t,[]),o["\u0275mpd"](1073742336,L.c,L.c,[]),o["\u0275mpd"](1073742336,J.c,J.c,[]),o["\u0275mpd"](1073742336,W.e,W.e,[]),o["\u0275mpd"](1073742336,D.d,D.d,[]),o["\u0275mpd"](1073742336,R.d,R.d,[]),o["\u0275mpd"](1073742336,X.p,X.p,[]),o["\u0275mpd"](1073742336,$.m,$.m,[]),o["\u0275mpd"](1073742336,ee.c,ee.c,[]),o["\u0275mpd"](1073742336,te.c,te.c,[]),o["\u0275mpd"](1073742336,ne.c,ne.c,[]),o["\u0275mpd"](1073742336,oe.b,oe.b,[]),o["\u0275mpd"](1073742336,ae.f,ae.f,[]),o["\u0275mpd"](1073742336,T.o,T.o,[]),o["\u0275mpd"](1073742336,re.a,re.a,[]),o["\u0275mpd"](1073742336,ie.c,ie.c,[]),o["\u0275mpd"](1073742336,pe.a,pe.a,[]),o["\u0275mpd"](1073742336,de.c,de.c,[]),o["\u0275mpd"](1073742336,F.b,F.b,[]),o["\u0275mpd"](1073742336,x.h,x.h,[]),o["\u0275mpd"](1073742336,O.e,O.e,[]),o["\u0275mpd"](1073742336,ce.c,ce.c,[]),o["\u0275mpd"](1073742336,ue.b,ue.b,[]),o["\u0275mpd"](1073742336,le.h,le.h,[]),o["\u0275mpd"](1073742336,se.d,se.d,[]),o["\u0275mpd"](1073742336,me.b,me.b,[]),o["\u0275mpd"](1073742336,he.c,he.c,[]),o["\u0275mpd"](1073742336,ge.a,ge.a,[]),o["\u0275mpd"](1073742336,fe.i,fe.i,[]),o["\u0275mpd"](1073742336,ye.b,ye.b,[]),o["\u0275mpd"](1073742336,be.c,be.c,[]),o["\u0275mpd"](1073742336,_e.a,_e.a,[]),o["\u0275mpd"](1073742336,Ee.a,Ee.a,[]),o["\u0275mpd"](1024,o.ErrorHandler,P["\u0275angular_packages_platform_browser_platform_browser_a"],[]),o["\u0275mpd"](1024,o.NgProbeToken,function(){return[l.v()]},[]),o["\u0275mpd"](512,l.B,l.B,[o.Injector]),o["\u0275mpd"](256,H.f,"ngsw-worker.js",[]),o["\u0275mpd"](256,H.e,{enabled:!0},[]),o["\u0275mpd"](1024,o.APP_INITIALIZER,function(e,t,n,o,a,r){return[P["\u0275angular_packages_platform_browser_platform_browser_j"](e),l.C(t),H.g(n,o,a,r)]},[[2,o.NgProbeToken],l.B,o.Injector,H.f,H.e,o.PLATFORM_ID]),o["\u0275mpd"](512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o["\u0275mpd"](131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o["\u0275Console"],o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o["\u0275mpd"](1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o["\u0275mpd"](1073742336,P.BrowserModule,P.BrowserModule,[[3,P.BrowserModule]]),o["\u0275mpd"](1073742336,U.s,U.s,[]),o["\u0275mpd"](1073742336,U.h,U.h,[]),o["\u0275mpd"](1024,l.u,l.y,[[3,l.l]]),o["\u0275mpd"](512,l.s,l.c,[]),o["\u0275mpd"](512,l.b,l.b,[]),o["\u0275mpd"](256,l.h,{initialNavigation:"enabled"},[]),o["\u0275mpd"](1024,f.LocationStrategy,l.x,[f.PlatformLocation,[2,f.APP_BASE_HREF],l.h]),o["\u0275mpd"](512,f.Location,f.Location,[f.LocationStrategy]),o["\u0275mpd"](512,o.Compiler,o.Compiler,[]),o["\u0275mpd"](512,o.NgModuleFactoryLoader,o.SystemJsNgModuleLoader,[o.Compiler,[2,o.SystemJsNgModuleLoaderConfig]]),o["\u0275mpd"](1024,l.j,function(){return[[{path:"",loadChildren:"./admin-layout/admin-layout.module#AdminLayoutModule",canActivate:[G.a]},{path:"exam",loadChildren:"./instruction/instruction.module#InstructionModule"},{path:"quiz",loadChildren:"./quiz/quiz.module#QuizModule"},{path:"login",loadChildren:"./login/login.module#LoginModule"}]]},[]),o["\u0275mpd"](1024,l.l,l.z,[o.ApplicationRef,l.s,l.b,f.Location,o.Injector,o.NgModuleFactoryLoader,o.Compiler,l.j,l.h,[2,l.r],[2,l.k]]),o["\u0275mpd"](1073742336,l.o,l.o,[[2,l.u],[2,l.l]]),o["\u0275mpd"](1073742336,Oe,Oe,[]),o["\u0275mpd"](1073742336,B.b,B.b,[]),o["\u0275mpd"](1073742336,H.a,H.a,[]),o["\u0275mpd"](1073742336,r,r,[]),o["\u0275mpd"](256,g.n,"XSRF-TOKEN",[]),o["\u0275mpd"](256,g.o,"X-XSRF-TOKEN",[]),o["\u0275mpd"](256,b.a,{tokenGetter:a},[]),o["\u0275mpd"](256,ae.a,{separatorKeyCodes:[Ce.g]},[]),o["\u0275mpd"](256,o["\u0275APP_ROOT"],!0,[]),o["\u0275mpd"](256,B.a,"BrowserAnimations",[])])});Object(o.enableProdMode)(),P.platformBrowser().bootstrapModuleFactory(Me).catch(function(e){return console.log(e)})}},[[4,13,14]]]);