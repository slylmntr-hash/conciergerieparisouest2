/* Couche GSAP partagée — révélations bidirectionnelles + survol */
(function(){
  const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
  function speed(){const a=window.__cpoAnim||"standard";return ({lente:1.45,standard:1,rapide:0.6,aucune:0})[a];}
  function showAll(){
    document.documentElement.classList.remove("gsap-init");
    document.querySelectorAll(".reveal").forEach(e=>{e.style.opacity="1";e.style.transform="none";});
    document.querySelectorAll(".hero .kicker,.hero .h1,.hero .lead,.hero .cta-row,.feature,.side > *,.page-hero .kicker,.page-hero h1,.page-hero .lead,.page-hero .ph,.page-hero .breadcrumb,.page-hero .hours .slot")
      .forEach(e=>{e.style.opacity="";e.style.transform="";e.style.clipPath="";});
  }
  let booted=false;
  setTimeout(()=>{if(!booted&&!window.gsap)showAll();},1200);
  window.addEventListener("load",()=>{if(!window.gsap)showAll();});

  function boot(){
    booted=true;
    if(!window.gsap||reduce||speed()===0){showAll();return;}
    const g=window.gsap, E="power3.out";
    const m=()=>speed()||1;
    document.documentElement.classList.remove("gsap-init");

    const heroBits=".hero .kicker,.hero .lead,.hero .cta-row";
    const heroAll=".hero .kicker,.hero .h1,.hero .lead,.hero .cta-row,.feature,.side > *";
    const state=new Map();            // el -> 'in' | 'out'
    const origStat=new WeakMap();     // stat <b> -> {end,suf}

    function heroIn(){
      g.timeline({defaults:{ease:E}})
        .fromTo(".hero .h1",{opacity:0,y:28,clipPath:"inset(0 0 100% 0)"},{opacity:1,y:0,clipPath:"inset(0 0 -12% 0)",duration:1.05*m()},0.02)
        .fromTo(g.utils.toArray(heroBits),{opacity:0,y:24},{opacity:1,y:0,duration:0.85*m(),stagger:0.09*m()},0.18)
        .fromTo(".feature .ph",{clipPath:"inset(0 0 100% 0)",scale:1.12},{clipPath:"inset(0 0 0% 0)",scale:1,duration:1.1*m()},0.22)
        .fromTo(".feature .cap",{opacity:0,y:18},{opacity:1,y:0,duration:0.7*m()},0.7)
        .fromTo(".side > *",{opacity:0,y:26},{opacity:1,y:0,duration:0.8*m(),stagger:0.12*m()},0.34);
    }
    function heroReset(){
      g.set(".hero .h1",{opacity:0,y:28,clipPath:"inset(0 0 100% 0)"});
      g.set(".hero .kicker,.hero .lead,.hero .cta-row,.side > *",{opacity:0,y:26});
      g.set(".feature",{opacity:1,y:0,scale:1});
      g.set(".feature .ph",{clipPath:"inset(0 0 100% 0)",scale:1.12});
      g.set(".feature .cap",{opacity:0,y:18});
    }

    // entrée des sous-pages (.page-hero)
    function pheroIn(){
      g.timeline({defaults:{ease:E}})
        .fromTo(".page-hero .breadcrumb",{opacity:0,y:14},{opacity:1,y:0,duration:0.6*m()},0)
        .fromTo(".page-hero .kicker",{opacity:0,y:20},{opacity:1,y:0,duration:0.7*m()},0.08)
        .fromTo(".page-hero h1",{opacity:0,y:26,clipPath:"inset(0 0 100% 0)"},{opacity:1,y:0,clipPath:"inset(0 0 -12% 0)",duration:1.0*m()},0.14)
        .fromTo(".page-hero .lead",{opacity:0,y:22},{opacity:1,y:0,duration:0.8*m()},0.3)
        .fromTo(".page-hero .ph",{clipPath:"inset(0 0 100% 0)",scale:1.1},{clipPath:"inset(0 0 0% 0)",scale:1,duration:1.0*m()},0.24)
        .fromTo(".page-hero .hours .slot",{opacity:0,y:16},{opacity:1,y:0,duration:0.55*m(),stagger:0.07*m()},0.42);
    }
    function pheroReset(){
      g.set(".page-hero h1",{opacity:0,y:26,clipPath:"inset(0 0 100% 0)"});
      g.set(".page-hero .breadcrumb,.page-hero .kicker,.page-hero .lead,.page-hero .hours .slot",{opacity:0,y:22});
      g.set(".page-hero .ph",{clipPath:"inset(0 0 100% 0)",scale:1.1});
    }

    function animateIn(el){
      if(el.dataset.hero){heroIn();return;}
      if(el.dataset.phero){pheroIn();return;}
      const grid=el.getAttribute("data-stagger");
      if(grid){g.fromTo(el.querySelectorAll(grid),{opacity:0,y:26},{opacity:1,y:0,duration:0.62*m(),ease:E,stagger:0.07*m()});}
      else if(el.classList.contains("stats")){
        el.querySelectorAll(".stat b").forEach(b=>{
          let r=origStat.get(b);
          if(!r){const mt=b.textContent.trim().match(/^(\d+)([\s\S]*)$/);if(!mt)return;r={end:+mt[1],suf:mt[2]};origStat.set(b,r);}
          const o={v:0};g.to(o,{v:r.end,duration:1.1*m(),ease:"power2.out",onUpdate:()=>{b.textContent=Math.round(o.v)+r.suf;}});
        });
      }else{g.fromTo(el,{opacity:0,y:34},{opacity:1,y:0,duration:0.85*m(),ease:E});}
    }
    function resetEl(el){
      if(el.dataset.hero){heroReset();return;}
      if(el.dataset.phero){pheroReset();return;}
      const grid=el.getAttribute("data-stagger");
      if(grid){g.set(el.querySelectorAll(grid),{opacity:0,y:26});}
      else if(el.classList.contains("stats")){
        el.querySelectorAll(".stat b").forEach(b=>{const r=origStat.get(b);if(r)b.textContent="0"+r.suf;});
      }else{g.set(el,{opacity:0,y:34});}
    }

    // bidirectional: animate in on enter, reset on full exit → replays in both scroll directions
    const io=new IntersectionObserver((es)=>{
      es.forEach(e=>{
        const el=e.target;
        if(e.isIntersecting&&e.intersectionRatio>=0.06){if(state.get(el)!=='in'){state.set(el,'in');animateIn(el);}}
        else if(e.intersectionRatio<=0.001){if(state.get(el)==='in'){state.set(el,'out');resetEl(el);}}
      });
    },{threshold:[0,0.06,0.14],rootMargin:"0px 0px 0px 0px"});

    const targets=new Set();
    const hero=document.querySelector(".hero");if(hero){hero.dataset.hero="1";targets.add(hero);}
    const phero=document.querySelector(".page-hero");if(phero&&!hero){phero.dataset.phero="1";targets.add(phero);}
    document.querySelectorAll(".reveal").forEach(el=>targets.add(el));
    [[".cards",".card"],[".zone-grid",".zone"],[".commune-grid",".commune-card"],[".related","a"],[".steplist","li"],[".steps-row",".step-cell"]]
      .forEach(([w,c])=>{const el=document.querySelector(w);if(el){el.setAttribute("data-stagger",c);targets.add(el);}});
    document.querySelectorAll(".stats").forEach(el=>targets.add(el));
    targets.forEach(el=>{state.set(el,'out');resetEl(el);io.observe(el);});

    // filet de sécurité : toute cible déjà visible dans la fenêtre est révélée
    // (évite qu'une section en bas de page reste masquée faute de scroll suffisant)
    function revealVisible(){
      const vh=window.innerHeight||document.documentElement.clientHeight;
      targets.forEach(el=>{
        if(state.get(el)==='in')return;
        const r=el.getBoundingClientRect();
        if(r.top<vh*0.96&&r.bottom>0){state.set(el,'in');animateIn(el);}
      });
    }
    let rvTick=false;
    const onScroll=()=>{if(rvTick)return;rvTick=true;requestAnimationFrame(()=>{rvTick=false;revealVisible();});};
    window.addEventListener("scroll",onScroll,{passive:true});
    window.addEventListener("resize",onScroll,{passive:true});
    window.addEventListener("load",()=>setTimeout(revealVisible,80));
    setTimeout(revealVisible,120);

    // --- image clip-wipe (cartes & images hors hero), bidirectionnel ---
    const imgEls=g.utils.toArray(".card .ph, .market .leaflet-map");
    const imgSt=new WeakMap();
    if(imgEls.length){
      const imgIO=new IntersectionObserver((es)=>{
        es.forEach(e=>{const el=e.target;
          if(e.intersectionRatio>=0.18){if(imgSt.get(el)!=='in'){imgSt.set(el,'in');
            g.fromTo(el,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:0.95*m(),ease:E});}}
          else if(e.intersectionRatio<=0.001){if(imgSt.get(el)==='in'){imgSt.set(el,'out');
            g.set(el,{clipPath:"inset(0 0 100% 0)"});}}
        });
      },{threshold:[0,0.18],rootMargin:"0px 0px -5% 0px"});
      imgEls.forEach(el=>{g.set(el,{clipPath:"inset(0 0 100% 0)"});imgIO.observe(el);});
    }

    // --- micro-interactions au survol (boutons, flèches, images) ---
    const D=0.3*m();
    document.querySelectorAll(".btn").forEach(b=>{
      const arr=b.querySelector("span");
      b.addEventListener("mouseenter",()=>{g.to(b,{y:-2,duration:D,ease:"power2.out"});if(arr)g.to(arr,{x:4,duration:D,ease:"power2.out"});});
      b.addEventListener("mouseleave",()=>{g.to(b,{y:0,duration:D,ease:"power2.out"});if(arr)g.to(arr,{x:0,duration:D,ease:"power2.out"});});
    });
    // zoom doux de l'image hero au survol (conteneur en overflow:hidden)
    document.querySelectorAll(".feature").forEach(card=>{
      const ph=card.querySelector(".ph");if(!ph)return;
      card.addEventListener("mouseenter",()=>g.to(ph,{scale:1.04,duration:0.6*m(),ease:"power2.out"}));
      card.addEventListener("mouseleave",()=>g.to(ph,{scale:1,duration:0.6*m(),ease:"power2.out"}));
    });
    // léger soulèvement des cartes / zones / communes au survol
    document.querySelectorAll(".card, .zone, .commune-card").forEach(z=>{
      z.addEventListener("mouseenter",()=>g.to(z,{y:-3,duration:D,ease:"power2.out"}));
      z.addEventListener("mouseleave",()=>g.to(z,{y:0,duration:D,ease:"power2.out"}));
    });
  }
  window.__cpoGsapSpeed=function(){};

  if(document.readyState!=="loading")setTimeout(boot,30);
  else window.addEventListener("DOMContentLoaded",()=>setTimeout(boot,30));
})();
