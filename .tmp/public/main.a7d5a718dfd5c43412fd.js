(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{4:function(t,e,n){t.exports=n("zUnb")},ADsi:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){}},OTVi:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=new(n("EThc").a),a=function(){function t(t,e){this.jwtHelper=t,this.router=e}return t.prototype.canActivate=function(){return this.checkLogin()},t.prototype.checkLogin=function(){var t=localStorage.getItem("token");if(null!=t){var e=o.decodeToken(t);o.getTokenExpirationDate(t);var n=o.isTokenExpired(t);return"admin"===e.type&&!n||(this.router.navigate(["/login"]),!1)}return this.router.navigate(["/login"]),!1},t}()},S5FQ:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n("Vx+w"),a=n("XlPw"),i=n("9Z1F"),r=n("s4kO"),p=n("yGWI"),d=n("CcnG"),s=n("t/Na"),c=function(){function t(t){this.http=t}return t.prototype.handleError=function(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error("Backend returned code "+t.status+", body was: "+t.error),Object(a.a)(t.error)},t.prototype.doLogin=function(t){return this.http.post(o.a.api_endpoint+"/login",t).pipe(Object(i.a)(this.handleError))},t.prototype.getCategory=function(){return this.http.get(o.a.api_endpoint+"/get-category").pipe(Object(i.a)(this.handleError),Object(r.a)(1),Object(p.a)())},t.prototype.addQuestion=function(t,e){return this.http.post(o.a.api_endpoint+"/"+e+"-question",t).pipe(Object(i.a)(this.handleError))},t.prototype.getQuestionListing=function(t){return this.http.get(o.a.api_endpoint+"/get-question?skill="+t.skill).pipe(Object(i.a)(this.handleError))},t.prototype.getQuestion=function(t){return this.http.get(o.a.api_endpoint+"/get-question-by-id?id="+t.id).pipe(Object(i.a)(this.handleError))},t.prototype.clearCache=function(){this.category=null},t.prototype.deleteQuestion=function(t){return this.http.post(o.a.api_endpoint+"/delete-question",t).pipe(Object(i.a)(this.handleError))},t.prototype.verifyExamCode=function(t){return this.http.post(o.a.api_endpoint+"/verify-exam-code",t).pipe(Object(i.a)(this.handleError))},t.prototype.submitExam=function(t,e){return this.http.post(o.a.api_endpoint+"/submit-exam?exam_finished="+e,t).pipe(Object(i.a)(this.handleError))},t.prototype.getCandidate=function(){return this.http.get(o.a.api_endpoint+"/get-candidate").pipe(Object(i.a)(this.handleError))},t.prototype.getResult=function(t){return this.http.get(o.a.api_endpoint+"/get-candidate-result?id="+t).pipe(Object(i.a)(this.handleError))},t.prototype.getCandidateScore=function(t){return this.http.get(o.a.api_endpoint+"/get-candidate-score?skill_id="+t.skill_id.id+"&examination_code="+t.examination_code).pipe(Object(i.a)(this.handleError))},t.prototype.generateExamCode=function(t){return this.http.post(o.a.api_endpoint+"/assign-exam-candidate",t).pipe(Object(i.a)(this.handleError))},t.prototype.getQuizQuestionListing=function(t){return this.http.get(o.a.api_endpoint+"/get-quiz-question?skill="+t.skill+"&difficulty="+t.difficulty+"&easy="+t.easy+"&medium="+t.medium).pipe(Object(i.a)(this.handleError))},t.prototype.updateStatusQuestion=function(t){return this.http.post(o.a.api_endpoint+"/deactive-question",t).pipe(Object(i.a)(this.handleError))},t.prototype.addCandidate=function(t,e){return"update"===e.type?(t.id=e.id,this.http.post(o.a.api_endpoint+"/update-candidate",t).pipe(Object(i.a)(this.handleError))):this.http.post(o.a.api_endpoint+"/add-candidate",t).pipe(Object(i.a)(this.handleError))},t.prototype.deleteCandidate=function(t){return this.http.post(o.a.api_endpoint+"/delete-candidate",t).pipe(Object(i.a)(this.handleError))},t.prototype.getCandidateById=function(t){return this.http.get(o.a.api_endpoint+"/get-candidate-byid?id="+t.id).pipe(Object(i.a)(this.handleError))},t.prototype.uploadResumeImage=function(t){return this.http.post(o.a.api_endpoint+"/add-candidate-resume",t).pipe(Object(i.a)(this.handleError))},t.prototype.uploadQuestionImage=function(t){return this.http.post(o.a.api_endpoint+"/update-question-image",t).pipe(Object(i.a)(this.handleError))},t.ngInjectableDef=d.defineInjectable({factory:function(){return new t(d.inject(s.c))},token:t,providedIn:"root"}),t}()},"Vx+w":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={api_endpoint:"https://ptsexamportal.azurewebsites.net/api",cv_endpoint:"https://ptsexamportal.azurewebsites.net"}},crnd:function(t,e,n){var o={"./candidate/candidate.module.ngfactory":["U9Kh",1,2,3,0,4],"./dashboard/dashboard.module.ngfactory":["uP/6",1,2,0,9],"./instruction/instruction.module.ngfactory":["qksU",0,5],"./login/login.module.ngfactory":["f+ep",1,0,10],"./questionlisting/questionlisting.module.ngfactory":["UBId",1,2,3,0,8],"./quiz/quiz.module.ngfactory":["cyWF",1,0,7],"./result/result.module.ngfactory":["aBKi",2,0,6]};function a(t){var e=o[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(o)},a.id="crnd",t.exports=a},uwVJ:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var o=n("26FU"),a=function(){function t(t){this.snackBar=t,this.messageSource=new o.a("default message"),this.currentMessage=this.messageSource.asObservable()}return t.prototype.changeMessage=function(t){this.messageSource.next(t)},t.prototype.openSnackBar=function(t){this.snackBar.open(t,"Ok",{duration:1500})},t}()},vvyD:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){}},zUnb:function(t,e,n){"use strict";n.r(e);var o=n("CcnG");function a(){return localStorage.getItem("token")}n("yLV6");var i=function(){};Object(o.enableProdMode)();var r=function(){},p=n("NcP4"),d=n("t68o"),s=n("xYTU"),c=n("pMnS"),u=n("ZYCi"),l=o["\u0275crt"]({encapsulation:0,styles:[[".example-icon[_ngcontent-%COMP%]{padding:0 14px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]],data:{animation:[{type:7,name:"fadeAnimation",definitions:[{type:1,expr:"* <=> *",animation:[{type:11,selector:":enter, :leave",animation:{type:6,styles:{position:"fixed",width:"100%"},offset:null},options:{optional:!0}},{type:3,steps:[{type:11,selector:":enter",animation:[{type:6,styles:{transform:"translateX(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:{optional:!0}},{type:11,selector:":leave",animation:[{type:6,styles:{transform:"translateX(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:{optional:!0}}],options:null}],options:null}],options:{}}]}});function m(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,2,"main",[],[[24,"@fadeAnimation",0]],null,null,null,null)),(t()(),o["\u0275eld"](1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),o["\u0275did"](2,212992,[["o",4]],0,u.n,[u.b,o.ViewContainerRef,o.ComponentFactoryResolver,[8,null],o.ChangeDetectorRef],null,null)],function(t,e){t(e,2,0)},function(t,e){t(e,0,0,o["\u0275nov"](e,2).isActivated?o["\u0275nov"](e,2).activatedRoute:"")})}var h=o["\u0275ccf"]("app-root",r,function(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-root",[],null,null,null,m,l)),o["\u0275did"](1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),g=n("t/Na"),f=n("Ip0R"),y=n("gFH1"),b=n("cTjZ"),_=n("S5FQ"),E=n("uwVJ"),O=n("vARd"),C=n("HKou"),M=n("XlPw"),v=n("xMyE"),k=n("9Z1F"),S=n("2WpN"),j=function(){function t(t,e){this.authService=t,this.msg=e}return t.prototype.intercept=function(t,e){var n=this;return this.msg.changeMessage("indeterminate"),Date.now(),t=t.clone({setHeaders:{Authorization:"Bearer "+localStorage.getItem("token")}}),e.handle(t).pipe(Object(v.a)(function(t){t instanceof g.h&&n.msg.openSnackBar(t.body.response.message)}),Object(k.a)(function(t){return t instanceof g.f&&n.msg.openSnackBar(t.error.response.message),Object(M.a)(t)}),Object(S.a)(function(){n.msg.changeMessage("determinate"),Date.now()}))},t}(),w=n("M2Lx"),N=n("eDkP"),A=n("Fzqc"),I=n("v9Dh"),D=n("4tE/"),L=n("uGex"),R=n("4epT"),T=n("Wf4p"),P=n("ZYjt"),F=n("mVsa"),x=n("o3x0"),q=n("NSYL"),z=n("wFw1"),U=n("gIcY"),B=n("ihYY"),H=n("OTVi"),G=n("EThc"),Z=n("dWZg"),V=n("lLAP"),Q=n("4c35"),X=n("qAlS"),Y=n("UodH"),K=n("seP3"),J=n("y4qS"),W=n("BHnd"),$=n("YhbO"),tt=n("jlZm"),et=n("de3e"),nt=n("8mMr"),ot=n("/dO6"),at=n("r43C"),it=n("Z+uX"),rt=n("w+lc"),pt=n("kWGw"),dt=n("/VYK"),st=n("b716"),ct=n("Nsh5"),ut=n("FVSy"),lt=n("SMsm"),mt=n("9It4"),ht=n("Blfk"),gt=n("La40"),ft=n("LC5p"),yt=n("0/Q6"),bt=n("vvyD"),_t=n("ADsi"),Et=function(){},Ot=n("YSh2"),Ct=o["\u0275cmf"](i,[r],function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[p.a,d.a,s.a,s.b,c.a,h]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,g.j,g.p,[f.DOCUMENT,o.PLATFORM_ID,g.n]),o["\u0275mpd"](4608,g.q,g.q,[g.j,g.o]),o["\u0275mpd"](4608,y.a,y.a,[b.a]),o["\u0275mpd"](4608,g.m,g.m,[]),o["\u0275mpd"](6144,g.k,null,[g.m]),o["\u0275mpd"](4608,g.i,g.i,[g.k]),o["\u0275mpd"](6144,g.b,null,[g.i]),o["\u0275mpd"](4608,g.g,g.l,[g.b,o.Injector]),o["\u0275mpd"](4608,g.c,g.c,[g.g]),o["\u0275mpd"](4608,_.a,_.a,[g.c]),o["\u0275mpd"](4608,E.a,E.a,[O.b]),o["\u0275mpd"](5120,g.a,function(t,e,n,o,a){return[t,new C.a(e,n),new j(o,a)]},[g.q,b.a,y.a,_.a,E.a]),o["\u0275mpd"](5120,o.LOCALE_ID,o["\u0275angular_packages_core_core_k"],[[3,o.LOCALE_ID]]),o["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[o.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,w.c,w.c,[]),o["\u0275mpd"](4608,N.c,N.c,[N.i,N.e,o.ComponentFactoryResolver,N.h,N.f,o.Injector,o.NgZone,f.DOCUMENT,A.b]),o["\u0275mpd"](5120,N.j,N.k,[N.c]),o["\u0275mpd"](5120,I.b,I.c,[N.c]),o["\u0275mpd"](5120,D.a,D.b,[N.c]),o["\u0275mpd"](5120,L.a,L.b,[N.c]),o["\u0275mpd"](5120,R.c,R.a,[[3,R.c]]),o["\u0275mpd"](4608,T.d,T.d,[]),o["\u0275mpd"](4608,P.HAMMER_GESTURE_CONFIG,P.HammerGestureConfig,[]),o["\u0275mpd"](5120,F.a,F.c,[N.c]),o["\u0275mpd"](5120,x.b,x.c,[N.c]),o["\u0275mpd"](4608,x.d,x.d,[N.c,o.Injector,[2,f.Location],[2,x.a],x.b,[3,x.d],N.e]),o["\u0275mpd"](5120,o.APP_ID,o["\u0275angular_packages_core_core_f"],[]),o["\u0275mpd"](5120,o.IterableDiffers,o["\u0275angular_packages_core_core_i"],[]),o["\u0275mpd"](5120,o.KeyValueDiffers,o["\u0275angular_packages_core_core_j"],[]),o["\u0275mpd"](4608,P.DomSanitizer,P["\u0275DomSanitizerImpl"],[f.DOCUMENT]),o["\u0275mpd"](6144,o.Sanitizer,null,[P.DomSanitizer]),o["\u0275mpd"](5120,P.EVENT_MANAGER_PLUGINS,function(t,e,n,o,a,i,r,p){return[new P["\u0275DomEventsPlugin"](t,e,n),new P["\u0275KeyEventsPlugin"](o),new P["\u0275HammerGesturesPlugin"](a,i,r,p)]},[f.DOCUMENT,o.NgZone,o.PLATFORM_ID,f.DOCUMENT,f.DOCUMENT,P.HAMMER_GESTURE_CONFIG,o["\u0275Console"],[2,P.HAMMER_LOADER]]),o["\u0275mpd"](4608,P.EventManager,P.EventManager,[P.EVENT_MANAGER_PLUGINS,o.NgZone]),o["\u0275mpd"](135680,P["\u0275DomSharedStylesHost"],P["\u0275DomSharedStylesHost"],[f.DOCUMENT]),o["\u0275mpd"](4608,P["\u0275DomRendererFactory2"],P["\u0275DomRendererFactory2"],[P.EventManager,P["\u0275DomSharedStylesHost"]]),o["\u0275mpd"](5120,q.a,z.e,[]),o["\u0275mpd"](5120,q.c,z.f,[]),o["\u0275mpd"](4608,q.b,z.d,[f.DOCUMENT,q.a,q.c]),o["\u0275mpd"](5120,o.RendererFactory2,z.g,[P["\u0275DomRendererFactory2"],q.b,o.NgZone]),o["\u0275mpd"](6144,P["\u0275SharedStylesHost"],null,[P["\u0275DomSharedStylesHost"]]),o["\u0275mpd"](4608,o.Testability,o.Testability,[o.NgZone]),o["\u0275mpd"](4608,U.u,U.u,[]),o["\u0275mpd"](5120,u.a,u.y,[u.k]),o["\u0275mpd"](4608,u.d,u.d,[]),o["\u0275mpd"](6144,u.f,null,[u.d]),o["\u0275mpd"](135680,u.o,u.o,[u.k,o.NgModuleFactoryLoader,o.Compiler,o.Injector,u.f]),o["\u0275mpd"](4608,u.e,u.e,[]),o["\u0275mpd"](5120,u.C,u.u,[u.k,f.ViewportScroller,u.g]),o["\u0275mpd"](5120,u.h,u.B,[u.z]),o["\u0275mpd"](5120,o.APP_BOOTSTRAP_LISTENER,function(t){return[t]},[u.h]),o["\u0275mpd"](4608,B.AnimationBuilder,z.c,[o.RendererFactory2,P.DOCUMENT]),o["\u0275mpd"](4608,H.a,H.a,[y.a,u.k]),o["\u0275mpd"](4608,j,j,[_.a,E.a]),o["\u0275mpd"](1073742336,g.e,g.e,[]),o["\u0275mpd"](1073742336,g.d,g.d,[]),o["\u0275mpd"](1073742336,G.b,G.b,[[3,G.b]]),o["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),o["\u0275mpd"](1073742336,Z.b,Z.b,[]),o["\u0275mpd"](1073742336,w.d,w.d,[]),o["\u0275mpd"](1073742336,V.a,V.a,[]),o["\u0275mpd"](1073742336,A.a,A.a,[]),o["\u0275mpd"](1073742336,Q.g,Q.g,[]),o["\u0275mpd"](1073742336,X.a,X.a,[]),o["\u0275mpd"](1073742336,N.g,N.g,[]),o["\u0275mpd"](1073742336,T.n,T.n,[[2,T.f]]),o["\u0275mpd"](1073742336,I.e,I.e,[]),o["\u0275mpd"](1073742336,T.y,T.y,[]),o["\u0275mpd"](1073742336,T.w,T.w,[]),o["\u0275mpd"](1073742336,T.t,T.t,[]),o["\u0275mpd"](1073742336,D.c,D.c,[]),o["\u0275mpd"](1073742336,Y.c,Y.c,[]),o["\u0275mpd"](1073742336,K.e,K.e,[]),o["\u0275mpd"](1073742336,L.d,L.d,[]),o["\u0275mpd"](1073742336,R.d,R.d,[]),o["\u0275mpd"](1073742336,J.p,J.p,[]),o["\u0275mpd"](1073742336,W.m,W.m,[]),o["\u0275mpd"](1073742336,$.c,$.c,[]),o["\u0275mpd"](1073742336,tt.c,tt.c,[]),o["\u0275mpd"](1073742336,et.c,et.c,[]),o["\u0275mpd"](1073742336,nt.b,nt.b,[]),o["\u0275mpd"](1073742336,ot.f,ot.f,[]),o["\u0275mpd"](1073742336,T.o,T.o,[]),o["\u0275mpd"](1073742336,at.a,at.a,[]),o["\u0275mpd"](1073742336,it.c,it.c,[]),o["\u0275mpd"](1073742336,rt.a,rt.a,[]),o["\u0275mpd"](1073742336,pt.c,pt.c,[]),o["\u0275mpd"](1073742336,F.b,F.b,[]),o["\u0275mpd"](1073742336,x.g,x.g,[]),o["\u0275mpd"](1073742336,O.e,O.e,[]),o["\u0275mpd"](1073742336,dt.c,dt.c,[]),o["\u0275mpd"](1073742336,st.b,st.b,[]),o["\u0275mpd"](1073742336,ct.a,ct.a,[]),o["\u0275mpd"](1073742336,ut.d,ut.d,[]),o["\u0275mpd"](1073742336,lt.b,lt.b,[]),o["\u0275mpd"](1073742336,mt.c,mt.c,[]),o["\u0275mpd"](1073742336,ht.a,ht.a,[]),o["\u0275mpd"](1073742336,gt.i,gt.i,[]),o["\u0275mpd"](1073742336,ft.b,ft.b,[]),o["\u0275mpd"](1073742336,yt.c,yt.c,[]),o["\u0275mpd"](1073742336,bt.a,bt.a,[]),o["\u0275mpd"](1073742336,_t.a,_t.a,[]),o["\u0275mpd"](1024,o.ErrorHandler,P["\u0275angular_packages_platform_browser_platform_browser_a"],[]),o["\u0275mpd"](1024,o.NgProbeToken,function(){return[u.t()]},[]),o["\u0275mpd"](512,u.z,u.z,[o.Injector]),o["\u0275mpd"](1024,o.APP_INITIALIZER,function(t,e){return[P["\u0275angular_packages_platform_browser_platform_browser_j"](t),u.A(e)]},[[2,o.NgProbeToken],u.z]),o["\u0275mpd"](512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o["\u0275mpd"](131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o["\u0275Console"],o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o["\u0275mpd"](1073742336,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o["\u0275mpd"](1073742336,P.BrowserModule,P.BrowserModule,[[3,P.BrowserModule]]),o["\u0275mpd"](1073742336,U.s,U.s,[]),o["\u0275mpd"](1073742336,U.h,U.h,[]),o["\u0275mpd"](1024,u.s,u.w,[[3,u.k]]),o["\u0275mpd"](512,u.q,u.c,[]),o["\u0275mpd"](512,u.b,u.b,[]),o["\u0275mpd"](256,u.g,{initialNavigation:"enabled"},[]),o["\u0275mpd"](1024,f.LocationStrategy,u.v,[f.PlatformLocation,[2,f.APP_BASE_HREF],u.g]),o["\u0275mpd"](512,f.Location,f.Location,[f.LocationStrategy]),o["\u0275mpd"](512,o.Compiler,o.Compiler,[]),o["\u0275mpd"](512,o.NgModuleFactoryLoader,o.SystemJsNgModuleLoader,[o.Compiler,[2,o.SystemJsNgModuleLoaderConfig]]),o["\u0275mpd"](1024,u.i,function(){return[[{path:"login",loadChildren:"./login/login.module#LoginModule"},{path:"add-question",loadChildren:"./dashboard/dashboard.module#DashboardModule"},{path:"question-listing",loadChildren:"./questionlisting/questionlisting.module#QuestionlistingModule"},{path:"quiz",loadChildren:"./quiz/quiz.module#QuizModule"},{path:"result",loadChildren:"./result/result.module#ResultModule"},{path:"instruction",loadChildren:"./instruction/instruction.module#InstructionModule"},{path:"candidate",loadChildren:"./candidate/candidate.module#CandidateModule"},{path:"",redirectTo:"instruction",pathMatch:"full"}]]},[]),o["\u0275mpd"](1024,u.k,u.x,[o.ApplicationRef,u.q,u.b,f.Location,o.Injector,o.NgModuleFactoryLoader,o.Compiler,u.i,u.g,[2,u.p],[2,u.j]]),o["\u0275mpd"](1073742336,u.m,u.m,[[2,u.s],[2,u.k]]),o["\u0275mpd"](1073742336,Et,Et,[]),o["\u0275mpd"](1073742336,z.b,z.b,[]),o["\u0275mpd"](1073742336,i,i,[]),o["\u0275mpd"](256,g.n,"XSRF-TOKEN",[]),o["\u0275mpd"](256,g.o,"X-XSRF-TOKEN",[]),o["\u0275mpd"](256,b.a,{tokenGetter:a},[]),o["\u0275mpd"](256,ot.a,{separatorKeyCodes:[Ot.g]},[]),o["\u0275mpd"](256,o["\u0275APP_ROOT"],!0,[]),o["\u0275mpd"](256,z.a,"BrowserAnimations",[])])});Object(o.enableProdMode)(),P.platformBrowser().bootstrapModuleFactory(Ct).catch(function(t){return console.log(t)})}},[[4,11,12]]]);