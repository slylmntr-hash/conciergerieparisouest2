/* Tweaks proportionnels : grille · espacement · hiérarchie (échelle modulaire)
   Branché sur le protocole hôte (Tweaks on/off). Page d'accueil uniquement. */
(function(){
  const DEF={
    identite:"atelier", // identité visuelle : original | manifeste | atelier | nocturne
    // Système hiérarchique (échelle de type modulaire)
    ratio:1.36,        // raison de l'échelle modulaire
    base:18,           // taille du corps (px) — racine de toute la hiérarchie
    // Système d'espacement (rythme vertical proportionnel)
    unit:8,            // unité de base (px) — grille de 8
    rythme:1.0,        // multiplicateur proportionnel du rythme vertical
    margeTitre:1.0,    // marge sous les en-têtes de section
    padBloc:1.0,       // padding interne des blocs (cartes, formulaires, panneaux)
    interParag:1.0,    // espacement entre paragraphes
    padLateral:40,     // gouttière latérale du contenu (px)
    // Système de grille
    gouttiere:1.0,     // multiplicateur proportionnel des gouttières
    colonnes:3,        // colonnes des cartes
    largeur:1280       // largeur max du contenu (px)
  };
  const LS="cpo-systeme-v1";
  let t=Object.assign({},DEF);
  try{const s=JSON.parse(localStorage.getItem(LS));if(s)t=Object.assign(t,s);}catch(e){}

  // panneau
  if(!document.getElementById("tws")){
    document.body.insertAdjacentHTML("beforeend",
      '<div class="tws" id="tws"><div class="tws-hd" id="twsDrag"><span class="dot"></span><b>Tweaks — Systèmes</b><span class="sp"></span><button class="tws-x" id="twsX">×</button></div><div class="tws-bd" id="twsBody"></div></div>');
  }
  const ov=document.createElement("style");ov.id="twsOverride";document.head.appendChild(ov);

  const r=n=>Math.round(n);
  // échelle modulaire : niveau n => base * ratio^n
  const step=(n)=>t.base*Math.pow(t.ratio,n);
  function clampType(maxPx,minFactor,vwBase){
    const min=r(maxPx*minFactor);
    return `clamp(${min}px, ${(vwBase).toFixed(2)}vw, ${r(maxPx)}px)`;
  }

  function apply(){
    const root=document.documentElement.style;
    // identité visuelle
    document.documentElement.setAttribute("data-identite", t.identite&&t.identite!=="original"?t.identite:"");
    const u=t.unit, ry=t.rythme, gut=t.gouttiere;

    // --- largeur du contenu ---
    root.setProperty("--shell", t.largeur+"px");

    // --- niveaux de la hiérarchie (échelle modulaire) ---
    const h1=step(5), h1p=step(4.6), h2=step(3), h3=step(1.8), big=step(4.2);
    const o=[];
    // corps
    o.push(`body{font-size:${t.base}px!important;}`);
    // titres — clamp fluide dérivé de l'échelle
    o.push(`.h1{font-size:${clampType(h1,0.58,h1/13)}!important;}`);
    o.push(`.page-hero h1{font-size:${clampType(h1p,0.58,h1p/13)}!important;}`);
    o.push(`.sec-head h2{font-size:${clampType(h2,0.66,h2/12)}!important;}`);
    o.push(`.card h3,.step-cell h3{font-size:${r(h3)}px!important;}`);
    o.push(`.stat b,.res-range .mid,.ar-annual{font-size:${r(big)}px!important;}`);
    o.push(`.card .rev b{font-size:${r(step(1.7))}px!important;}`);
    o.push(`.lead,.hero-main .lead{font-size:${r(t.base*1.18)}px!important;line-height:1.5!important;}`);

    // --- espacement (rythme vertical proportionnel) ---
    const secPad=r(u*ry*10.5);          // padding vertical des sections
    const headGap=r(u*ry*5*t.margeTitre); // marge sous les en-têtes
    const heroPadTop=r(u*ry*8), heroPadBot=r(u*ry*3);
    o.push(`.sec{padding:${secPad}px 0!important;}`);
    o.push(`.sec-head{margin-bottom:${headGap}px!important;}`);
    o.push(`.hero{padding:${heroPadTop}px 0 ${heroPadBot}px!important;}`);
    o.push(`.stats{margin-top:${r(u*ry*7)}px!important;}`);
    // padding interne des blocs (proportionnel à l'unité)
    const pb=t.padBloc;
    o.push(`.calc-form{padding:${r(u*pb*4.75)}px!important;}`);
    o.push(`.contact-form,.contact-aside{padding:${r(u*pb*5.5)}px!important;}`);
    o.push(`.zone{padding:${r(u*pb*4)}px ${r(u*pb*4.25)}px!important;}`);
    o.push(`.commune-card{padding:${r(u*pb*3)}px ${r(u*pb*3.25)}px!important;}`);
    o.push(`.step-cell{padding:${r(u*pb*4.25)}px ${r(u*pb*4)}px ${r(u*pb*4.75)}px!important;}`);
    o.push(`.cross{padding:${r(u*pb*4)}px ${r(u*pb*4.5)}px!important;}`);
    // espacement entre paragraphes
    o.push(`.market .copy p,.steplist p,.card p{margin-bottom:${r(u*t.interParag*2)}px!important;}`);
    // gouttière latérale du contenu
    o.push(`@media(min-width:601px){.shell,.nav-in,.ticker-in,.final-in,.foot-in,.foot-base{padding-left:${t.padLateral}px!important;padding-right:${t.padLateral}px!important;}}`);

    // --- grille (gouttières proportionnelles + colonnes) ---
    const gCards=r(u*gut*4.5), gZone=r(u*gut*3.5), gHero=r(u*gut*7), gMarket=r(u*gut*6);
    o.push(`.cards{gap:${gCards}px!important;}`);
    o.push(`@media(min-width:901px){.cards{grid-template-columns:repeat(${t.colonnes},1fr)!important;}}`);
    o.push(`@media(min-width:821px){.zone-grid{gap:${gZone}px!important;}}`);
    o.push(`@media(min-width:981px){.hero-grid{gap:${gHero}px!important;}}`);
    o.push(`@media(min-width:881px){.market{gap:${gMarket}px!important;}.directory{gap:${r(u*gut*4)}px!important;}}`);
    o.push(`.related{gap:${r(u*gut*1.3)}px!important;}`);

    ov.textContent=o.join("\n");
  }

  function build(){
    const sl=(k,min,max,st,disp)=>`<div class="tws-row"><div class="tws-lab"><label>${LBL[k]}</label><span class="v" id="tv-${k}">${disp(t[k])}</span></div><input type="range" data-k="${k}" min="${min}" max="${max}" step="${st}" value="${t[k]}"></div>`;
    const seg=(k,opts)=>`<div class="tws-row"><div class="tws-lab"><label>${LBL[k]}</label></div><div class="tws-seg">${opts.map(v=>`<button data-seg="${k}" data-v="${v}" class="${t[k]==v?'on':''}">${v}</button>`).join("")}</div></div>`;
    // aperçu de l'échelle modulaire
    const bars=[1.8,3,4,4.6,5].map(n=>{const h=Math.min(100,Math.pow(t.ratio,n)/Math.pow(1.5,5)*100);return `<i style="height:${h}%"></i>`;}).join("");
    const IDENTS=[["original","Original"],["manifeste","Manifeste"],["atelier","Atelier"],["nocturne","Nocturne"]];
    document.getElementById("twsBody").innerHTML=
      `<div class="tws-sec">Identité visuelle</div>`+
      `<div class="tws-note">3 directions disruptives qui cassent les codes par défaut — polices, couleurs et formes. Réversible à tout moment.</div>`+
      `<div class="tws-ident">`+IDENTS.map(([v,l])=>`<button data-ident="${v}" class="${t.identite===v?'on':''}">${l}</button>`).join("")+`</div>`+
      `<div class="tws-sec">Système hiérarchique</div>`+
      `<div class="tws-note">Échelle modulaire : chaque niveau = corps × raison<sup>n</sup>. Une seule raison gouverne toute la hiérarchie.</div>`+
      `<div class="tws-scale">${bars}</div>`+
      sl("ratio",1.15,1.5,0.01,x=>"×"+x.toFixed(2))+
      sl("base",15,21,1,x=>x+" px")+
      `<div class="tws-sec">Système d'espacement</div>`+
      `<div class="tws-note">Rythme vertical et marges proportionnels à une unité de base (grille de 8).</div>`+
      sl("unit",4,12,1,x=>x+" px")+
      sl("rythme",0.6,1.6,0.05,x=>"×"+x.toFixed(2))+
      sl("margeTitre",0.5,2,0.05,x=>"×"+x.toFixed(2))+
      sl("padBloc",0.6,1.6,0.05,x=>"×"+x.toFixed(2))+
      sl("interParag",0.5,2.2,0.05,x=>"×"+x.toFixed(2))+
      sl("padLateral",16,72,2,x=>x+" px")+
      `<div class="tws-sec">Système de grille</div>`+
      `<div class="tws-note">Gouttières dérivées de l'unité ; largeur et colonnes du contenu.</div>`+
      sl("gouttiere",0.5,2,0.05,x=>"×"+x.toFixed(2))+
      seg("colonnes",[2,3,4])+
      sl("largeur",1040,1760,20,x=>x+" px")+
      `<button class="tws-reset" id="twsReset">Réinitialiser les systèmes</button>`;
    document.querySelectorAll("#twsBody [data-ident]").forEach(b=>b.onclick=()=>{t.identite=b.dataset.ident;apply();persist();build();});
    document.querySelectorAll("#twsBody input[type=range]").forEach(inp=>{
      const k=inp.dataset.k, span=document.getElementById("tv-"+k);
      inp.oninput=()=>{const val=parseFloat(inp.value);t[k]=val;span.textContent=DISP[k](val);apply();persist();
        if(k==="ratio")refreshScale();};
    });
    document.querySelectorAll("#twsBody [data-seg]").forEach(b=>b.onclick=()=>{t[b.dataset.seg]=parseFloat(b.dataset.v);apply();persist();build();});
    document.getElementById("twsReset").onclick=()=>{t=Object.assign({},DEF);apply();persist();build();};
  }
  function refreshScale(){
    const bars=[1.8,3,4,4.6,5].map(n=>{const h=Math.min(100,Math.pow(t.ratio,n)/Math.pow(1.5,5)*100);return h;});
    document.querySelectorAll(".tws-scale i").forEach((el,i)=>el.style.height=bars[i]+"%");
  }
  const LBL={ratio:"Raison de l'échelle",base:"Taille du corps",unit:"Unité de base",rythme:"Rythme vertical",margeTitre:"Marge des titres",padBloc:"Padding des blocs",interParag:"Espace paragraphes",padLateral:"Gouttière latérale",gouttiere:"Gouttières",colonnes:"Colonnes des cartes",largeur:"Largeur du contenu"};
  const DISP={ratio:x=>"×"+x.toFixed(2),base:x=>x+" px",unit:x=>x+" px",rythme:x=>"×"+x.toFixed(2),margeTitre:x=>"×"+x.toFixed(2),padBloc:x=>"×"+x.toFixed(2),interParag:x=>"×"+x.toFixed(2),padLateral:x=>x+" px",gouttiere:x=>"×"+x.toFixed(2),largeur:x=>x+" px"};

  function persist(){
    try{localStorage.setItem(LS,JSON.stringify(t));}catch(e){}
    try{window.parent.postMessage({type:"__edit_mode_set_keys",edits:t},"*");}catch(e){}
  }

  // protocole hôte (toggle Tweaks)
  const panel=document.getElementById("tws");
  window.addEventListener("message",e=>{const ty=e&&e.data&&e.data.type;
    if(ty==="__activate_edit_mode")panel.classList.add("open");
    else if(ty==="__deactivate_edit_mode")panel.classList.remove("open");});
  try{window.parent.postMessage({type:"__edit_mode_available"},"*");}catch(e){}
  document.getElementById("twsX").onclick=()=>{panel.classList.remove("open");
    try{window.parent.postMessage({type:"__edit_mode_dismissed"},"*");}catch(e){}};

  // glisser
  (function(){let dx,dy,drag=false;const h=document.getElementById("twsDrag");
    h.addEventListener("mousedown",e=>{drag=true;const b=panel.getBoundingClientRect();
      dx=e.clientX-b.left;dy=e.clientY-b.top;panel.style.right="auto";panel.style.bottom="auto";
      panel.style.left=b.left+"px";panel.style.top=b.top+"px";e.preventDefault();});
    window.addEventListener("mousemove",e=>{if(!drag)return;
      panel.style.left=Math.max(6,Math.min(innerWidth-60,e.clientX-dx))+"px";
      panel.style.top=Math.max(6,Math.min(innerHeight-40,e.clientY-dy))+"px";});
    window.addEventListener("mouseup",()=>drag=false);})();

  apply();build();
})();
