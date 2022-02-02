(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),o=document.getElementById("timer-hours"),c=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),n=()=>{let e=(new Date("31 january 2022 23:16:00").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}};let l=setInterval((()=>{let e=n();e.timeRemaining>0?(()=>{let e=n();t.textContent=("0"+e.days).slice(-2),o.textContent=("0"+e.hours).slice(-2),c.textContent=("0"+e.minutes).slice(-2),a.textContent=("0"+e.seconds).slice(-2)})():e.timeRemaining<=0&&clearInterval(l)}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};t.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||"A"===e.target.tagName)&&o()})),e.addEventListener("click",o)})(),(()=>{const e=document.querySelector(".popup");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block",e.animate([{opacity:"0"},{opacity:"1"}],100)}))})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelectorAll(".dot");let c,a=0;const n=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},r=()=>{n(t,a,"portfolio-item-active"),n(o,a,"dot-active"),a++,a>=t.length&&(a=0),l(t,a,"portfolio-item-active"),l(o,a,"dot-active")},s=(e=1500)=>{c=setInterval(r,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,a,"portfolio-item-active"),n(o,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),l(t,a,"portfolio-item-active"),l(o,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),s(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==c&&t.target!==a&&t.target!==n||(()=>{const t=+o.options[o.selectedIndex].value,r=+c.value;let s=0,i=1,d=1;a.value>1&&(i+=+a.value/10),n.value&&n.value<5?d=2:n.value&&n.value<10&&(d=1.5),s=o.value&&c.value?e*t*r*i*d:0,l.textContent=s})()}))})(100)})();