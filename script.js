
/* ==========================
PORTFOLIO SCRIPT
Eng. Abubakar Farooq
========================== */

/* NAVBAR */

const navbar =
document.getElementById("navbar");

window.addEventListener(
"scroll",
()=>{

if(
window.scrollY>80
){

navbar.classList.add(
"shrink"
);

}else{

navbar.classList.remove(
"shrink"
);

}

}
);

/* MOBILE MENU */

const burger =
document.querySelector(
".hamburger"
);

const menu =
document.querySelector(
".mobile-menu"
);

burger.addEventListener(
"click",
()=>{

menu.classList.toggle(
"open"
);

}
);

document
.querySelectorAll(
".mobile-menu a"
)
.forEach(link=>{

link.addEventListener(
"click",
()=>{

menu.classList.remove(
"open"
);

});

});

/* ACTIVE NAV */

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

const observer =
new IntersectionObserver(

entries=>{

entries.forEach(
entry=>{

if(
entry.isIntersecting
){

navLinks.forEach(
l=>
l.classList.remove(
"active"
)
);

const active =
document.querySelector(

`.nav-links a[href="#${entry.target.id}"]`

);

if(active){

active.classList.add(
"active"
);

}

}

}
);

},

{

threshold:.5

}

);

sections.forEach(
s=>
observer.observe(s)
);

/* TYPEWRITER */

const roles=[

"Data Analyst",
"Web Developer",
"AI Enthusiast",
"Educator"

];

let role=0;
let char=0;

const writer=
document.getElementById(
"typewriter"
);

function type(){

if(!writer)
return;

writer.innerHTML=
roles[role]
.slice(
0,
char++
);

if(
char>
roles[role].length
){

setTimeout(
()=>{

char=0;

role=
(role+1)
%
roles.length;

},
1000
);

}

setTimeout(
type,
120
);

}

type();

/* SCROLL ANIMATION */

const animated=
document.querySelectorAll(
".timeline-card,.project-card,.cert-card,.info-card,.stats div"
);

const reveal=
new IntersectionObserver(

entries=>{

entries.forEach(
e=>{

if(
e.isIntersecting
){

e.target.style.opacity=1;

e.target.style.transform=
"translateY(0)";

}

}
);

}

);

animated.forEach(
el=>{

el.style.opacity=0;

el.style.transform=
"translateY(60px)";

el.style.transition=
"1s";

reveal.observe(
el
);

}
);

/* COUNTERS */

const counters=
document.querySelectorAll(
".counter"
);

let counted=
false;

function startCounters(){

if(counted)
return;

counters.forEach(
counter=>{

const target=
+counter.dataset.count;

let value=0;

const interval=
setInterval(()=>{

value++;

counter.innerText=
value+"+";

if(
value>=target
){

clearInterval(
interval
);

}

},40);

});

counted=true;

}

const countObserver=
new IntersectionObserver(

entries=>{

if(
entries[0]
.isIntersecting
){

startCounters();

}

}

);

const stats=
document.querySelector(
".stats"
);

if(stats){

countObserver.observe(
stats
);

}

/* SKILL BAR */

const bars=
document.querySelectorAll(
".progress div"
);

const skillObserver=
new IntersectionObserver(

entries=>{

if(
entries[0]
.isIntersecting
){

bars.forEach(
bar=>{

bar.style.width=

bar.style
.getPropertyValue(
"--value"
)

+"%";

}

);

}

}

);

const skill=
document.querySelector(
".skills-layout"
);

if(skill){

skillObserver.observe(
skill
);

}

/* CHARTS */

const radar=
document.getElementById(
"radarChart"
);

if(radar){

new Chart(

radar,

{

type:"radar",

data:{

labels:[

"Web Dev",
"Data Analytics",
"AI / ML",
"Database",
"Teaching",
"Tools"

],

datasets:[{

data:

[88,85,75,72,80,82],

borderColor:

"#64ffda",

backgroundColor:

"rgba(100,255,218,.2)"

}]

},

options:{

responsive:true

}

}

);

}

const bar=
document.getElementById(
"barChart"
);

if(bar){

new Chart(

bar,

{

type:"bar",

data:{

labels:[

"Teaching",

"Freelance",

"Projects",

"Research"

],

datasets:[{

data:

[90,80,88,85],

backgroundColor:

[

"#64ffda",
"#5bc0eb",
"#0a192f",
"#78ffd6"

]

}]

},

options:{

responsive:true

}

}

);

}

/* EMAIL JS */

/*

EMAILJS SETUP

1 Create account

https://emailjs.com

2 Create Email Service

3 Create Template

4 Get:

PUBLIC KEY
SERVICE ID
TEMPLATE ID

5 Replace below values

*/

emailjs.init(
"GpsDXcyrKy4PjEegk"
);

const form=
document.getElementById(
"contactForm"
);

if(form){

form.addEventListener(
"submit",

function(e){

e.preventDefault();

const email=
form.querySelector(
'input[type="email"]'
).value;

const pattern=
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(
!pattern.test(email)
){

alert(
"Enter valid email"
);

return;

}

emailjs.sendForm(

"service_xfnu2dl",

"template_k5b4v3l",

this

)

.then(()=>{

alert(

"Message sent successfully! I'll get back to you soon."

);

form.reset();

})

.catch(()=>{

alert(

"Something went wrong. Please try again or email me directly."

);

});

}

);

}

/* SMOOTH */

document
.querySelectorAll(
'a[href^="#"]'
)

.forEach(
a=>{

a.addEventListener(
"click",

e=>{

e.preventDefault();

document
.querySelector(
a.getAttribute(
"href"
)
)

.scrollIntoView({

behavior:
"smooth"

});

}

);

});

/* CERTIFICATE OVERLAY */

const certBtn=
document.querySelector(
".certificate-btn"
);

if(certBtn){

certBtn.addEventListener(
"mouseenter",

()=>{

certBtn.style.transform=
"translateY(-4px)";

}
);

certBtn.addEventListener(
"mouseleave",

()=>{

certBtn.style.transform=
"translateY(0)";

}
);

}

/* BACK TOP */

document
.querySelector(
'footer a'
)

.addEventListener(
"click",

e=>{

e.preventDefault();

window.scrollTo({

top:0,

behavior:
"smooth"

});

}

);

console.log(
"Portfolio Ready 🚀"
);
