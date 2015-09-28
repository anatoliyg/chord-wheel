/*!
 * VERSION: 0.9.6
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.ThrowPropsPlugin",["plugins.TweenPlugin","TweenLite","easing.Ease","utils.VelocityTracker"],function(t,e,i,s){var r,n,o,a,l=function(){t.call(this,"throwProps"),this._overwriteProps.length=0},h=999999999999999,u=1e-10,p=!1,f={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1},c=function(t,e,i,s){for(var r,n,o=e.length,a=0,l=h;--o>-1;)r=e[o],n=r-t,0>n&&(n=-n),l>n&&r>=s&&i>=r&&(a=o,l=n);return e[a]},_=function(t,e,i,s){if("auto"===t.end)return t;i=isNaN(i)?h:i,s=isNaN(s)?-h:s;var r="function"==typeof t.end?t.end(e):t.end instanceof Array?c(e,t.end,i,s):Number(t.end);return r>i?r=i:s>r&&(r=s),{max:r,min:r,unitFactor:t.unitFactor}},d=function(t,e,i){for(var s in e)void 0===t[s]&&s!==i&&(t[s]=e[s]);return t},m=l.calculateChange=function(t,s,r,n){null==n&&(n=.05);var o=s instanceof i?s:s?new i(s):e.defaultEase;return r*n*t/o.getRatio(n)},g=l.calculateDuration=function(t,s,r,n,o){o=o||.05;var a=n instanceof i?n:n?new i(n):e.defaultEase;return Math.abs((s-t)*a.getRatio(o)/r/o)},v=l.calculateTweenDuration=function(t,r,n,o,a,h){if("string"==typeof t&&(t=e.selector(t)),!t)return 0;null==n&&(n=10),null==o&&(o=.2),null==a&&(a=1),t.length&&(t=t[0]||t);var f,c,v,y,x,T,w,b,P,S,k=0,C=9999999999,R=r.throwProps||r,A=r.ease instanceof i?r.ease:r.ease?new i(r.ease):e.defaultEase,O=isNaN(R.checkpoint)?.05:Number(R.checkpoint),M=isNaN(R.resistance)?l.defaultResistance:Number(R.resistance);for(f in R)"resistance"!==f&&"checkpoint"!==f&&"preventOvershoot"!==f&&(c=R[f],"object"!=typeof c&&(P=P||s.getByTarget(t),P&&P.isTrackingProp(f)?c="number"==typeof c?{velocity:c}:{velocity:P.getVelocity(f)}:(y=Number(c)||0,v=y*M>0?y/M:y/-M)),"object"==typeof c&&(void 0!==c.velocity&&"number"==typeof c.velocity?y=Number(c.velocity)||0:(P=P||s.getByTarget(t),y=P&&P.isTrackingProp(f)?P.getVelocity(f):0),x=isNaN(c.resistance)?M:Number(c.resistance),v=y*x>0?y/x:y/-x,T="function"==typeof t[f]?t[f.indexOf("set")||"function"!=typeof t["get"+f.substr(3)]?f:"get"+f.substr(3)]():t[f]||0,w=T+m(y,A,v,O),void 0!==c.end&&(c=_(c,w,c.max,c.min),(h||p)&&(R[f]=d(c,R[f],"end"))),void 0!==c.max&&w>Number(c.max)+u?(S=c.unitFactor||l.defaultUnitFactors[f]||1,b=T>c.max&&c.min!==c.max||y*S>-15&&45>y*S?o+.1*(n-o):g(T,c.max,y,A,O),C>b+a&&(C=b+a)):void 0!==c.min&&Number(c.min)-u>w&&(S=c.unitFactor||l.defaultUnitFactors[f]||1,b=c.min>T&&c.min!==c.max||y*S>-45&&15>y*S?o+.1*(n-o):g(T,c.min,y,A,O),C>b+a&&(C=b+a)),b>k&&(k=b)),v>k&&(k=v));return k>C&&(k=C),k>n?n:o>k?o:k},y=l.prototype=new t("throwProps");return y.constructor=l,l.version="0.9.6",l.API=2,l._autoCSS=!0,l.defaultResistance=100,l.defaultUnitFactors={time:1e3,totalTime:1e3},l.track=function(t,e,i){return s.track(t,e,i)},l.untrack=function(t,e){s.untrack(t,e)},l.isTracking=function(t,e){return s.isTracking(t,e)},l.getVelocity=function(t,e){var i=s.getByTarget(t);return i?i.getVelocity(e):0/0},l._cssRegister=function(){var t=(_gsScope.GreenSockGlobals||_gsScope).com.greensock.plugins.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,o=e._setPluginRatio,a=e.CSSPropTween;e._registerComplexSpecialProp("throwProps",{parser:function(t,e,h,u,p,c){c=new l;var _,d,m,g,v,y={},x={},T={},w={},b={},P={};n={};for(m in e)"resistance"!==m&&"preventOvershoot"!==m&&(d=e[m],"object"==typeof d?(void 0!==d.velocity&&"number"==typeof d.velocity?y[m]=Number(d.velocity)||0:(v=v||s.getByTarget(t),y[m]=v&&v.isTrackingProp(m)?v.getVelocity(m):0),void 0!==d.end&&(w[m]=d.end),void 0!==d.min&&(x[m]=d.min),void 0!==d.max&&(T[m]=d.max),d.preventOvershoot&&(P[m]=!0),void 0!==d.resistance&&(_=!0,b[m]=d.resistance)):"number"==typeof d?y[m]=d:(v=v||s.getByTarget(t),y[m]=v&&v.isTrackingProp(m)?v.getVelocity(m):d||0),f[m]&&u._enableTransforms(2===f[m]));g=i(t,y,u,p,c),r=g.proxy,y=g.end;for(m in r)n[m]={velocity:y[m],min:x[m],max:T[m],end:w[m],resistance:b[m],preventOvershoot:P[m]};return null!=e.resistance&&(n.resistance=e.resistance),e.preventOvershoot&&(n.preventOvershoot=!0),p=new a(t,"throwProps",0,0,g.pt,2),p.plugin=c,p.setRatio=o,p.data=g,c._onInitTween(r,n,u._tween),p}})}},l.to=function(t,i,s,l,h){i.throwProps||(i={throwProps:i}),0===h&&(i.throwProps.preventOvershoot=!0),p=!0;var u=new e(t,1,i);return u.render(0,!0,!0),u.vars.css?(u.duration(v(r,{throwProps:n,ease:i.ease},s,l,h)),u._delay&&!u.vars.immediateRender?u.invalidate():o._onInitTween(r,a,u),p=!1,u):(u.kill(),u=new e(t,v(t,i,s,l,h),i),p=!1,u)},y._onInitTween=function(t,e,i){this.target=t,this._props=[],o=this,a=e;var r,n,l,h,u,f,c,g,v,y=i._ease,x=isNaN(e.checkpoint)?.05:Number(e.checkpoint),T=i._duration,w=e.preventOvershoot,b=0;for(r in e)if("resistance"!==r&&"checkpoint"!==r&&"preventOvershoot"!==r){if(n=e[r],"number"==typeof n)u=Number(n)||0;else if("object"!=typeof n||isNaN(n.velocity)){if(v=v||s.getByTarget(t),!v||!v.isTrackingProp(r))throw"ERROR: No velocity was defined in the throwProps tween of "+t+" property: "+r;u=v.getVelocity(r)}else u=Number(n.velocity);f=m(u,y,T,x),g=0,h="function"==typeof t[r],l=h?t[r.indexOf("set")||"function"!=typeof t["get"+r.substr(3)]?r:"get"+r.substr(3)]():t[r],"object"==typeof n&&(c=l+f,void 0!==n.end&&(n=_(n,c,n.max,n.min),p&&(e[r]=d(n,e[r],"end"))),void 0!==n.max&&c>Number(n.max)?w||n.preventOvershoot?f=n.max-l:g=n.max-l-f:void 0!==n.min&&Number(n.min)>c&&(w||n.preventOvershoot?f=n.min-l:g=n.min-l-f)),this._props[b++]={p:r,s:l,c1:f,c2:g,f:h,r:!1},this._overwriteProps[b]=r}return!0},y._kill=function(e){for(var i=this._props.length;--i>-1;)null!=e[this._props[i].p]&&this._props.splice(i,1);return t.prototype._kill.call(this,e)},y._roundProps=function(t,e){for(var i=this._props,s=i.length;--s>-1;)(t[i[s]]||t.throwProps)&&(i[s].r=e)},y.setRatio=function(t){for(var e,i,s=this._props.length;--s>-1;)e=this._props[s],i=e.s+e.c1*t+e.c2*t*t,e.r&&(i=Math.round(i)),e.f?this.target[e.p](i):this.target[e.p]=i},t.activate([l]),l},!0),_gsScope._gsDefine("utils.VelocityTracker",["TweenLite"],function(t){var e,i,s,r,n=/([A-Z])/g,o={},a={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1},l=document.defaultView?document.defaultView.getComputedStyle:function(){},h=function(t,e,i){var s=(t._gsTransform||o)[e];return s||0===s?s:(t.style[e]?s=t.style[e]:(i=i||l(t,null))?(t=i.getPropertyValue(e.replace(n,"-$1").toLowerCase()),s=t||i.length?t:i[e]):t.currentStyle&&(i=t.currentStyle,s=i[e]),parseFloat(s)||0)},u=t.ticker,p=function(t,e,i){this.p=t,this.f=e,this.v1=this.v2=0,this.t1=this.t2=u.time,this.css=!1,this.type="",this._prev=null,i&&(this._next=i,i._prev=this)},f=function(){var t,i,n=e,o=u.time;if(o-s>=.03)for(r=s,s=o;n;){for(i=n._firstVP;i;)t=i.css?h(n.target,i.p):i.f?n.target[i.p]():n.target[i.p],(t!==i.v1||o-i.t1>.15)&&(i.v2=i.v1,i.v1=t,i.t2=i.t1,i.t1=o),i=i._next;n=n._next}},c=function(t){this._lookup={},this.target=t,this.elem=t.style&&t.nodeType?!0:!1,i||(u.addEventListener("tick",f,null,!1,-100),s=r=u.time,i=!0),e&&(this._next=e,e._prev=this),e=this},_=c.getByTarget=function(t){for(var i=e;i;){if(i.target===t)return i;i=i._next}},d=c.prototype;return d.addProp=function(e,i){if(!this._lookup[e]){var s=this.target,r="function"==typeof s[e],n=r?this._altProp(e):e,o=this._firstVP;this._firstVP=this._lookup[e]=this._lookup[n]=o=new p(n!==e&&0===e.indexOf("set")?n:e,r,o),o.css=this.elem&&(void 0!==this.target.style[o.p]||a[o.p]),o.css&&a[o.p]&&!s._gsTransform&&t.set(s,{x:"+=0"}),o.type=i||o.css&&0===e.indexOf("rotation")?"deg":"",o.v1=o.v2=o.css?h(s,o.p):r?s[o.p]():s[o.p]}},d.removeProp=function(t){var e=this._lookup[t];e&&(e._prev?e._prev._next=e._next:e===this._firstVP&&(this._firstVP=e._next),e._next&&(e._next._prev=e._prev),this._lookup[t]=0,e.f&&(this._lookup[this._altProp(t)]=0))},d.isTrackingProp=function(t){return this._lookup[t]instanceof p},d.getVelocity=function(t){var e,i,s,r=this._lookup[t],n=this.target;if(!r)throw"The velocity of "+t+" is not being tracked.";return e=r.css?h(n,r.p):r.f?n[r.p]():n[r.p],i=e-r.v2,("rad"===r.type||"deg"===r.type)&&(s="rad"===r.type?2*Math.PI:360,i%=s,i!==i%(s/2)&&(i=0>i?i+s:i-s)),i/(u.time-r.t2)},d._altProp=function(t){var e=t.substr(0,3),i=("get"===e?"set":"set"===e?"get":e)+t.substr(3);return"function"==typeof this.target[i]?i:t},c.getByTarget=function(i){var s=e;for("string"==typeof i&&(i=t.selector(i)),i.length&&i!==window&&i[0]&&i[0].style&&!i.nodeType&&(i=i[0]);s;){if(s.target===i)return s;s=s._next}},c.track=function(t,e,i){var s=_(t),r=e.split(","),n=r.length;for(i=(i||"").split(","),s||(s=new c(t));--n>-1;)s.addProp(r[n],i[n]||i[0]);return s},c.untrack=function(t,i){var s=_(t),r=(i||"").split(","),n=r.length;if(s){for(;--n>-1;)s.removeProp(r[n]);s._firstVP&&i||(s._prev?s._prev._next=s._next:s===e&&(e=s._next),s._next&&(s._next._prev=s._prev))}},c.isTracking=function(t,e){var i=_(t);return i?!e&&i._firstVP?!0:i.isTrackingProp(e):!1},c},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("ThrowPropsPlugin");