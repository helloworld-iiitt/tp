import{r as Z}from"./index-CEBZ_yEH.js";var j={};function G(r){if(typeof window>"u")return;const l=document.createElement("style");return l.setAttribute("type","text/css"),l.innerHTML=r,document.head.appendChild(l),r}Object.defineProperty(j,"__esModule",{value:!0});var e=Z;function J(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var a=J(e);G(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const K=e.forwardRef(function({style:l={},className:z="",autoFill:u=!1,play:f=!0,pauseOnHover:g=!1,pauseOnClick:w=!1,direction:n="left",speed:d=50,delay:R=0,loop:b=0,gradient:A=!1,gradientColor:_="white",gradientWidth:v=200,onFinish:W,onCycleComplete:B,onMount:S,children:h},I){const[q,L]=e.useState(0),[y,X]=e.useState(0),[p,N]=e.useState(1),[x,D]=e.useState(!1),O=e.useRef(null),i=I||O,c=e.useRef(null),m=e.useCallback(()=>{if(c.current&&i.current){const t=i.current.getBoundingClientRect(),M=c.current.getBoundingClientRect();let o=t.width,s=M.width;(n==="up"||n==="down")&&(o=t.height,s=M.height),N(u&&o&&s&&s<o?Math.ceil(o/s):1),L(o),X(s)}},[u,i,n]);e.useEffect(()=>{if(x&&(m(),c.current&&i.current)){const t=new ResizeObserver(()=>m());return t.observe(i.current),t.observe(c.current),()=>{t&&t.disconnect()}}},[m,i,x]),e.useEffect(()=>{m()},[m,h]),e.useEffect(()=>{D(!0)},[]),e.useEffect(()=>{typeof S=="function"&&S()},[]);const C=e.useMemo(()=>u?y*p/d:y<q?q/d:y/d,[u,q,y,p,d]),P=e.useMemo(()=>Object.assign(Object.assign({},l),{"--pause-on-hover":!f||g?"paused":"running","--pause-on-click":!f||g&&!w||w?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[l,f,g,w,n]),T=e.useMemo(()=>({"--gradient-color":_,"--gradient-width":typeof v=="number"?`${v}px`:v}),[_,v]),k=e.useMemo(()=>({"--play":f?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${C}s`,"--delay":`${R}s`,"--iteration-count":b?`${b}`:"infinite","--min-width":u?"auto":"100%"}),[f,n,C,R,b,u]),E=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),$=e.useCallback(t=>[...Array(Number.isFinite(t)&&t>=0?t:0)].map((M,o)=>a.default.createElement(e.Fragment,{key:o},e.Children.map(h,s=>a.default.createElement("div",{style:E,className:"rfm-child"},s)))),[E,h]);return x?a.default.createElement("div",{ref:i,style:P,className:"rfm-marquee-container "+z},A&&a.default.createElement("div",{style:T,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:k,onAnimationIteration:B,onAnimationEnd:W},a.default.createElement("div",{className:"rfm-initial-child-container",ref:c},e.Children.map(h,t=>a.default.createElement("div",{style:E,className:"rfm-child"},t))),$(p-1)),a.default.createElement("div",{className:"rfm-marquee",style:k},$(p))):null});var U=j.default=K;export{U as _};
