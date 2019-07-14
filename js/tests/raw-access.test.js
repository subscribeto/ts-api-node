"use strict";var __awaiter=this&&this.__awaiter||function(e,t,i,s){return new(i||(i=Promise))(function(n,r){function o(e){try{u(s.next(e))}catch(e){r(e)}}function a(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){e.done?n(e.value):new i(function(t){t(e.value)}).then(o,a)}u((s=s.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const ts_api_1=require("@subscribeto/ts-api");require("../main"),describe("/user - User related methods.",()=>{describe("/auth - User authentication methods.",()=>{describe("/sign-up - User sign-up methods.",()=>{test("/ - Sign-up a new user.",()=>__awaiter(this,void 0,void 0,function*(){let e=yield ts_api_1.S2UserSignUpEndpoint.signUp("trevorsears.main@gmail.com","password");expect(e).toBeDefined(),console.log(e)})),test("/finalize - Finalize user sign-up process.",()=>__awaiter(this,void 0,void 0,function*(){fail("Test has not yet been written.")}))}),describe("/sign-in - User sign-up methods.",()=>{test("/ - Sign-in to a given user account.",()=>__awaiter(this,void 0,void 0,function*(){fail("Test has not yet been written.")})),test("/totp - Verify user sign-in via TOTP.",()=>__awaiter(this,void 0,void 0,function*(){fail("Test has not yet been written.")})),test("/sms - Verify user sign-in via SMS.",()=>__awaiter(this,void 0,void 0,function*(){fail("Test has not yet been written.")}))})}),describe("/me - 'Self' user accessor methods.",()=>{})});