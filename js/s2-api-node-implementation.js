"use strict";var __awaiter=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))(function(o,r){function s(e){try{u(n.next(e))}catch(e){r(e)}}function a(e){try{u(n.throw(e))}catch(e){r(e)}}function u(e){e.done?o(e.value):new i(function(t){t(e.value)}).then(s,a)}u((n=n.apply(e,t||[])).next())})},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const ts_api_1=require("@subscribeto/ts-api"),request_1=__importDefault(require("request"));class S2APINodeImplementation extends ts_api_1.S2API{static use(){ts_api_1.S2API.setNetworkImplementation((e,t,i,n)=>__awaiter(this,void 0,void 0,function*(){return new Promise((o,r)=>{let s={url:t,method:e};void 0!==i&&(s.json=!0,s.body=i),void 0!==n&&(s.headers={Authorization:"Bearer "+n}),request_1.default(s,(e,t,i)=>{o(new ts_api_1.S2APIResponse(i,t.statusCode))})})}))}}exports.S2APINodeImplementation=S2APINodeImplementation;