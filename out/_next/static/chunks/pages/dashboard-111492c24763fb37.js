(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1976:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(788)}])},7484:function(e,r,n){"use strict";var t=n(5893),a=(n(7294),n(8682)),o=n.n(a),i=n(1664);r.Z=function(e){var r=e.children,n=e.title;return(0,t.jsxs)("div",{id:o().dashMenuWrap,children:[(0,t.jsxs)("div",{className:o().dashLeft,children:[(0,t.jsx)("div",{className:o().logo,children:(0,t.jsx)(i.default,{href:"/dashboard",children:(0,t.jsx)("a",{children:(0,t.jsx)("img",{src:"/logo.png"})})})}),(0,t.jsx)("div",{className:o().menuList,children:(0,t.jsxs)("ul",{className:o().menu,children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/dashboard/slideroption",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"icon-plus"}),"Add Slider"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/dashboard/sliderall",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"icon-plus"}),"All Slider"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/dashboard/themeoption",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"icon-plus"}),"Theme Option"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/dashboard/weare",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"icon-plus"}),"We Are"]})})})]})})]}),(0,t.jsxs)("div",{className:o().dashRight,children:[(0,t.jsx)("div",{className:o().heading,children:(0,t.jsx)("h3",{children:n})}),(0,t.jsx)("div",{className:o().dashContWrap,children:(0,t.jsx)("div",{className:o().dashForm,children:r})})]})]})}},1551:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},l=n(1003),s=n(880),c=n(9246);var u={};function f(e,r,n,t){if(e&&l.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,t=s.useRouter(),o=i.default.useMemo((function(){var r=a(l.resolveHref(t,e.href,!0),2),n=r[0],o=r[1];return{href:n,as:e.as?l.resolveHref(t,e.as):o||n}}),[t,e.href,e.as]),d=o.href,h=o.as,p=e.children,m=e.replace,v=e.shallow,b=e.scroll,y=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(r=i.default.Children.only(p))&&"object"===typeof r&&r.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),_=j[0],x=j[1],N=i.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);i.default.useEffect((function(){var e=x&&n&&l.isLocalURL(d),r="undefined"!==typeof y?y:t&&t.locale,a=u[d+"%"+h+(r?"%"+r:"")];e&&!a&&f(t,d,h,{locale:r})}),[h,d,x,y,n,t]);var w={ref:N,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,o,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),r[a?"replace":"push"](n,t,{shallow:o,locale:s,scroll:i}))}(e,t,d,h,m,v,b,y)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(t,d,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var M="undefined"!==typeof y?y:t&&t.locale,E=t&&t.isLocaleDomain&&l.getDomainLocale(h,M,t&&t.locales,t&&t.domainLocales);w.href=E||l.addBasePath(l.addLocale(h,M,t&&t.defaultLocale))}return i.default.cloneElement(r,w)};r.default=d},9246:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!l,u=o.useRef(),f=a(o.useState(!1),2),d=f[0],h=f[1],p=a(o.useState(r?r.current:null),2),m=p[0],v=p[1],b=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||d||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=s.get(t):(r=s.get(n),c.push(n));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return s.set(n,r={id:n,observer:o,elements:a}),r}(n),a=t.id,o=t.observer,i=t.elements;return i.set(e,r),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),s.delete(a);var r=c.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[t,m,n,d]);return o.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){r&&v(r.current)}),[r]),[b,d]};var o=n(7294),i=n(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},788:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var t=n(5893),a=(n(7294),n(7484));function o(e){e.children;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.Z,{children:(0,t.jsxs)("form",{className:"formDash",children:[(0,t.jsx)("input",{placeholder:"title"}),(0,t.jsx)("textarea",{placeholder:"Description"}),(0,t.jsx)("button",{className:"button_submit",children:"Submit"})]})})})}},8682:function(e){e.exports={dashMenuWrap:"Dashboard_dashMenuWrap__6HR6q",dashLeft:"Dashboard_dashLeft__hkgUv",logo:"Dashboard_logo__IpdcN",menu:"Dashboard_menu__tj1RL",dashRight:"Dashboard_dashRight__QN8HM",heading:"Dashboard_heading__h34SZ",dashContWrap:"Dashboard_dashContWrap__MXocW",dashForm:"Dashboard_dashForm__2u7G_"}},1664:function(e,r,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],(function(){return r=1976,e(e.s=r);var r}));var r=e.O();_N_E=r}]);