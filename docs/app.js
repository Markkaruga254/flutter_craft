const PROGRAM = [
 {week:1,name:"Pocket Finance",icon:"◈",focus:"Dart foundations, widgets, layouts and responsive UI.",outcome:"Build a clean finance dashboard with accounts, transactions and categories.",days:[1,2,3,4,5,6,7],folder:"week-01",app:"01-pocket-finance"},
 {week:2,name:"TasteMap",icon:"⌖",focus:"Images, scrolling, reusable cards, search and filters.",outcome:"Create a discovery app with searchable places and detailed views.",days:[8,9,10,11,12,13,14],folder:"week-02",app:"02-tastemap"},
 {week:3,name:"HabitFlow",icon:"✓",focus:"State, forms, validation, input and local persistence.",outcome:"Build a habit tracker that creates, edits and saves habits.",days:[15,16,17,18,19,20,21],folder:"week-03",app:"03-habitflow"},
 {week:4,name:"Roam",icon:"✧",focus:"Editorial layouts, visual hierarchy, transitions and map UI.",outcome:"Design a polished travel discovery experience.",days:[22,23,24],folder:"week-04",app:"04-roam"},
 {week:5,name:"Forma",icon:"▦",focus:"Catalogues, product variants, cart state and reusable design systems.",outcome:"Build a shopping flow with mock products and a local cart.",days:[25,26,27,28,29,30,31],folder:"week-05",app:"05-forma"},
 {week:6,name:"Connect",icon:"⌁",focus:"Messaging UI, gestures, keyboard-aware layouts and conversation state.",outcome:"Create a convincing messaging experience with mock or local data.",days:[32,33,34,35,36,37,38,39,40],folder:"week-06",app:"06-connect"},
 {week:7,name:"Pulse",icon:"∿",focus:"Animation, charts, CustomPainter, accessibility and performance.",outcome:"Build a data-rich experience with deliberate motion and readable visualisations.",days:[41,42,43,44,45,46,47],folder:"week-07",app:"07-pulse"},
 {week:8,name:"Capstone",icon:"✳",focus:"Product definition, architecture, APIs, persistence, tests and polish.",outcome:"Ship an original mobile product from idea to documented demo.",days:[48,49,50,51,52,53,54,55,56],folder:"week-08",app:"08-capstone"}
];
const TOTAL = PROGRAM.reduce((sum,w)=>sum+w.days.length,0);
const STORAGE_KEY = "flutter-craft-progress-v1";
const completed = new Set(readProgress());
function readProgress(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]").filter(n=>Number.isInteger(n)&&n>=1&&n<=56)}catch{return[]}}
function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify([...completed]));renderProgress();renderChallenges()}
function dayPath(week,day){return `../challenges/${week.folder}/day-${String(day).padStart(2,"0")}.md`}
function renderJourney(){
 const root=document.querySelector("#journey-grid");
 root.innerHTML=PROGRAM.map(w=>`<a class="week-card" href="#challenges" data-week-jump="${w.week}"><div class="week-top"><span class="week-index">WEEK 0${w.week}</span><span class="week-icon">${w.icon}</span></div><h3>${w.name}</h3><p>${w.focus}</p><div class="week-meta"><span>${w.days.length} DAILY BRIEFS</span><b>Explore ↗</b></div></a>`).join("");
 root.querySelectorAll("[data-week-jump]").forEach(el=>el.addEventListener("click",()=>{document.querySelector("#week-filter").value=el.dataset.weekJump;renderChallenges()}));
}
function renderProjects(){
 document.querySelector("#project-grid").innerHTML=PROGRAM.map(w=>`<article class="project-card"><span class="project-number">BUILD 0${w.week} / 08</span><h3>${w.name}</h3><p>${w.outcome}</p><a href="https://github.com/Markkaruga254/flutter_craft/tree/main/apps/${w.app}" target="_blank" rel="noreferrer">Explore project ↗</a></article>`).join("");
}
function setupFilters(){
 const week=document.querySelector("#week-filter");
 week.innerHTML+ = "";
 PROGRAM.forEach(w=>{const option=document.createElement("option");option.value=String(w.week);option.textContent=`Week 0${w.week} · ${w.name}`;week.append(option)});
 ["#challenge-search","#week-filter","#status-filter"].forEach(sel=>document.querySelector(sel).addEventListener(sel==="#challenge-search"?"input":"change",renderChallenges));
}
function allChallenges(){return PROGRAM.flatMap(w=>w.days.map(day=>({day,week:w.week,name:w.name,folder:w.folder,focus:w.focus,path:dayPath(w,day)})))}
function renderChallenges(){
 const query=document.querySelector("#challenge-search").value.trim().toLowerCase();
 const week=document.querySelector("#week-filter").value;
 const status=document.querySelector("#status-filter").value;
 const rows=allChallenges().filter(c=>(week==="all"||String(c.week)===week)&&(!query||(`day ${c.day} week ${c.week} ${c.name} ${c.focus}`).toLowerCase().includes(query))&&(status==="all"||(status==="done"?completed.has(c.day):!completed.has(c.day))));
 const list=document.querySelector("#challenge-list");
 document.querySelector("#challenge-count").textContent=`${rows.length} challenge${rows.length===1?"":"s"} shown`;
 document.querySelector("#challenge-completed").textContent=`${completed.size} / ${TOTAL} completed`;
 list.innerHTML=rows.length?rows.map(c=>`<article class="challenge-item ${completed.has(c.day)?"is-done":""}"><span class="day-number">${String(c.day).padStart(2,"0")}</span><div class="challenge-info"><b>Day ${String(c.day).padStart(2,"0")} · ${c.name}</b><span>WEEK 0${c.week} · DAILY CHALLENGE</span></div><a class="challenge-open" href="${c.path}" target="_blank" rel="noreferrer" aria-label="Open day ${c.day} challenge brief">↗</a><input class="challenge-check" type="checkbox" data-day="${c.day}" ${completed.has(c.day)?"checked":""} aria-label="Mark day ${c.day} complete"></article>`).join(""):`<div class="empty-state">No challenges match those filters. Try another search or week.</div>`;
 list.querySelectorAll(".challenge-check").forEach(input=>input.addEventListener("change",()=>{const day=Number(input.dataset.day);input.checked?completed.add(day):completed.delete(day);saveProgress()}));
}
function renderProgress(){
 const count=completed.size,pct=Math.round(count/TOTAL*100),degrees=pct*3.6;
 document.querySelector("#hero-progress-label").textContent=`${count} / ${TOTAL}`;
 document.querySelector("#hero-progress-bar").style.width=`${pct}%`;
 document.querySelector("#progress-percent").textContent=`${pct}%`;
 document.querySelector("#progress-total").textContent=`${count} of ${TOTAL}`;
 document.querySelector("#progress-ring").style.background=`conic-gradient(var(--green) ${degrees}deg,#384436 ${degrees}deg)`;
}
function setupNavigation(){
 const button=document.querySelector("#menu-toggle"),nav=document.querySelector("#nav-links");
 button.addEventListener("click",()=>{const open=nav.classList.toggle("open");button.setAttribute("aria-expanded",String(open));button.textContent=open?"×":"☰"});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");button.setAttribute("aria-expanded","false");button.textContent="☰"}));
}
function setupReset(){
 document.querySelector("#reset-progress").addEventListener("click",()=>{if(!completed.size)return;if(!confirm("Reset all 56 challenge completion marks on this browser?"))return;completed.clear();saveProgress()});
}
renderJourney();renderProjects();setupFilters();setupNavigation();setupReset();renderProgress();renderChallenges();