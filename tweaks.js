/* Panneau Tweaks partagé — injecté sur toutes les pages */
(function(){
  if(!document.getElementById('twk')){
    document.body.insertAdjacentHTML('beforeend', "<div class=\"twk\" id=\"twk\">\n  <div class=\"twk-hd\" id=\"twkDrag\"><span class=\"dot\"></span><b>Tweaks</b><span class=\"sp\"></span><button class=\"twk-x\" id=\"twkClose\">×</button></div>\n  <div class=\"twk-bd\" id=\"twkBody\"></div>\n</div>");
  }
})();
(function(){
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "sable",
    "accent": "#9c7c3c",
    "radius": "rond",
    "shadow": "fort",
    "titres": "serif",
    "densite": "aere",
    "contraste": "standard",
    "ticker": "masque",
    "nav": "verre",
    "navCase": "normale",
    "surfaces": "sombre",
    "heroBg": "papier",
    "finalBg": "sombre",
    "texture": "points",
    "grain": "on",
    "corps": "sans",
    "graisse": "leger",
    "italique": "on",
    "casse": "normale",
    "kicker": "masque",
    "echelleTitre": 115,
    "tailleTexte": 18,
    "interligne": 190,
    "interlettre": 3,
    "filets": "moyen",
    "filetStyle": "plein",
    "boutons": "plein",
    "cartes": "plates",
    "ratio": "large",
    "separateur": "aucun",
    "largeur": "pleine",
    "espaceGrille": "serre",
    "alignTitres": "centre",
    "stats": "filets",
    "puces": "plein",
    "anim": "standard"
  }/*EDITMODE-END*/;

  // [paper, paperRaise, ink, ink2, panel, line, line2]
  const PALETTES={
    creme:   {label:"Crème",  sw:["#f4f1ea","#22252a","#9c7c3c"], v:["#f4f1ea","#fbfaf6","#22252a","#5c5f64","#1b2026","#e2dccf","#cec7b6"]},
    ardoise: {label:"Ardoise",sw:["#eceef0","#1d2126","#6f7378"], v:["#eceef0","#f6f7f8","#1d2126","#565b61","#171b20","#dadde0","#c3c7cc"]},
    sable:   {label:"Sable",  sw:["#f6f1e8","#2a2320","#8a6a4a"], v:["#f6f1e8","#fdfaf4","#2a2320","#5f574f","#221b15","#e6ddcd","#d4c8b2"]},
    nuit:    {label:"Nuit",   sw:["#eef1f5","#19202e","#2f5d8c"], v:["#eef1f5","#f7f9fc","#19202e","#525a68","#141a26","#dde2ea","#c5cdd9"]},
    sauge:   {label:"Sauge",  sw:["#eef1ea","#1f251d","#5a7355"], v:["#eef1ea","#f7f9f3","#1f251d","#545a50","#1a201a","#dde2d6","#c8cfbf"]},
    encre:   {label:"Encre",  sw:["#f5f5f4","#161618","#3a3a3c"], v:["#f5f5f4","#fcfcfb","#161618","#55555a","#161618","#e4e4e2","#cfcfcc"]}
  };
  const ACCENTS=["#9c7c3c","#b5623f","#2f5d8c","#5a7355","#6d4a6b","#1c1c1e"];
  const RADII={net:0,doux:3,arrondi:11,rond:18};
  const SHADOWS={plat:"none",subtil:"0 24px 50px -32px rgba(20,24,28,.5)",fort:"0 34px 64px -22px rgba(20,24,28,.62)"};
  const DENS={compact:52,standard:84,aere:120};
  const FONTS={serif:'"Instrument Serif",Georgia,serif',sans:'"Archivo",sans-serif',mono:'"JetBrains Mono",monospace'};

  const LS="cpo-tweaks-v1";
  let t=Object.assign({},TWEAK_DEFAULTS);
  try{const s=JSON.parse(localStorage.getItem(LS));if(s)t=Object.assign(t,s);}catch(e){}

  const mix=(hex,pct)=>`color-mix(in srgb, ${hex} ${pct}%, #ffffff)`;

  const dk=(hex,pct)=>`color-mix(in srgb, ${hex} ${100-pct}%, #000)`;
  function apply(){
    const root=document.documentElement.style;
    const p=PALETTES[t.palette]||PALETTES.creme, v=p.v;
    let ink=v[2],ink2=v[3],line=v[5];
    if(t.contraste==='eleve'){ink=dk(ink,16);ink2=dk(ink2,12);line=dk(line,24);}
    else if(t.contraste==='doux'){ink=mix(ink,16);ink2=mix(ink2,12);line=mix(line,30);}
    root.setProperty("--paper",v[0]);root.setProperty("--cream",v[0]);
    root.setProperty("--paper-raise",v[1]);
    root.setProperty("--ink",ink);root.setProperty("--ink-2",ink2);root.setProperty("--ink-3",mix(ink2,55));
    root.setProperty("--panel",v[4]);root.setProperty("--panel-2",mix(v[4],14));
    root.setProperty("--line",line);root.setProperty("--line-2",v[6]);
    root.setProperty("--gold",t.accent);root.setProperty("--gold-soft",mix(t.accent,46));

    const R=RADII[t.radius], Rs=Math.min(R,Math.round(R*0.55)||(R?2:0));
    const sh=SHADOWS[t.shadow], pad=DENS[t.densite];
    const hf=FONTS[t.titres], bf=FONTS[t.corps==='sans'?'sans':'serif'];
    const o=[];
    o.push(`.feature,.panel-tonal,.panel-dark,.calc,.zone,.commune-grid,.leaflet-map,.card .ph,.market .ph,.page-hero .ph,.contact-grid,.dir-list,.feature .ph{border-radius:${R}px!important}`);
    o.push(`.btn,.btn-solid,.btn-gold,.btn-ghost,.chip,.type-chip,.dir-btn,.related a,.calc .ctrl{border-radius:${Rs}px!important}`);
    o.push(`.feature,.calc,.panel-dark,.commune-grid,.contact-grid{box-shadow:${sh}!important}`);
    o.push(`.sec{padding:${pad}px 0!important}`);
    o.push(`body{font-family:${bf}!important;font-size:${t.tailleTexte}px!important;line-height:${(t.interligne/100).toFixed(2)}!important}`);

    const headSel=".h1,.hero-main h1,.page-hero h1,.sec-head h2,.card h3,.zn,.dir-name,.commune-card .cn,.final h2,.steplist h4,.panel-dark h3,.calc-form h3,.contact-aside h3,.foot-brand .fb,.res-range .mid,.stat b";
    let hr=`font-family:${hf}!important;font-weight:${({leger:500,normal:600,gras:800})[t.graisse]}!important;letter-spacing:${(t.interlettre/100).toFixed(2)}em!important;`;
    if(t.casse==='haut')hr+="text-transform:uppercase!important;";
    o.push(`${headSel}{${hr}}`);
    if(t.italique==='on')o.push(`.h1,.page-hero h1,.final h2{font-style:italic!important}`);
    if(t.echelleTitre!==100){const s=t.echelleTitre/100;
      o.push(`.h1{font-size:clamp(${(46*s)|0}px,${(6.2*s).toFixed(1)}vw,${(84*s)|0}px)!important}`);
      o.push(`.page-hero h1{font-size:clamp(${(42*s)|0}px,${(5.4*s).toFixed(1)}vw,${(76*s)|0}px)!important}`);
      o.push(`.sec-head h2{font-size:clamp(${(28*s)|0}px,${(3.6*s).toFixed(1)}vw,${(42*s)|0}px)!important}`);}
    if(t.kicker==='masque')o.push(`.kicker{display:none!important}`);
    else o.push(`.kicker{font-family:${t.kicker==='sans'?'var(--sans)':'var(--mono)'}!important}`);

    if(t.ticker==='masque')o.push(`.ticker{display:none!important}`);
    else{const tk={sombre:['var(--panel)','#d8d2c4'],or:['var(--gold)','#fff'],clair:['var(--paper-raise)','var(--ink-2)']}[t.ticker];o.push(`.ticker{background:${tk[0]}!important;color:${tk[1]}!important}`);}
    if(t.nav==='plein')o.push(`.nav{background:var(--paper-raise)!important;backdrop-filter:none!important}`);
    else if(t.nav==='sombre')o.push(`.nav{background:var(--panel)!important;backdrop-filter:none!important}.nav .brand,.nav-links a,.menu-toggle{color:#e7e2d5!important}.nav-links a.active{color:#fff!important}`);
    else if(t.nav==='borde')o.push(`.nav{background:var(--paper)!important;backdrop-filter:none!important;border-bottom:2px solid var(--ink)!important}`);
    if(t.navCase==='haut')o.push(`.nav-links a{text-transform:uppercase!important;letter-spacing:.08em!important;font-size:12px!important}`);

    if(t.heroBg==='teinte')o.push(`.hero{background:var(--paper-raise)!important}`);
    else if(t.heroBg==='sombre')o.push(`.hero{background:var(--panel)!important;padding-left:40px!important;padding-right:40px!important;border-radius:0}.hero .h1,.hero .kicker{color:#ece7da!important}.hero .lead{color:#b6b1a4!important}`);
    if(t.finalBg==='or')o.push(`.final{background:var(--gold)!important}.final h2,.final .ek{color:#fff!important}`);
    else if(t.finalBg==='clair')o.push(`.final{background:var(--paper-raise)!important;border-top:1px solid var(--line)}.final h2{color:var(--ink)!important}.final .ek{color:var(--gold)!important}`);
    if(t.surfaces==='sombre')o.push(`.panel-tonal{background:var(--panel)!important;border-color:transparent!important}.panel-tonal .side-head .t,.steplist h4{color:#ece7da!important}.steplist p{color:#b6b1a4!important}.steplist li{border-color:rgba(255,255,255,.12)!important}.panel-tonal .side-head{border-color:#fff!important}`);
    if(t.texture==='uni')o.push(`.ph{background:linear-gradient(160deg,#21262c,#2f353d)!important}`);
    else if(t.texture==='points')o.push(`.ph{background:radial-gradient(rgba(207,200,184,.3) 1px,transparent 1px) 0 0/13px 13px,linear-gradient(160deg,#21262c,#2f353d)!important}`);
    document.body.classList.toggle('twk-grain',t.grain==='on');

    const bw={fin:1,moyen:1.5,epais:2.5}[t.filets];
    const bsel=".panel-tonal,.zone,.commune-card,.chip,.type-chip,.dir-btn,.related a,.btn-ghost,.calc,.commune-grid,.contact-grid,.dir-list";
    o.push(`${bsel}{border-width:${bw}px!important}`);
    if(t.filetStyle==='pointille')o.push(`${bsel}{border-style:dashed!important}`);
    if(t.boutons==='contour')o.push(`.btn-solid,.btn-gold{background:transparent!important;color:var(--ink)!important;border:${bw}px solid var(--ink)!important}`);
    else if(t.boutons==='souligne')o.push(`.btn-solid,.btn-gold,.btn-ghost{background:transparent!important;color:var(--ink)!important;border:0!important;border-bottom:2px solid var(--gold)!important;border-radius:0!important;padding:6px 2px!important}`);
    else if(t.boutons==='pilule')o.push(`.btn,.btn-solid,.btn-gold,.btn-ghost{border-radius:999px!important;padding-left:24px!important;padding-right:24px!important}`);
    if(t.cartes==='sureleve')o.push(`.card{background:var(--paper-raise)!important;padding:18px!important;border:1px solid var(--line)!important;box-shadow:${SHADOWS.subtil}!important;border-radius:${R}px!important}.card .ph{margin:-18px -18px 16px!important;border-radius:${R}px ${R}px 0 0!important}`);
    else if(t.cartes==='plates')o.push(`.card .ph{box-shadow:none!important}`);
    const ar={large:'16/10',carre:'1/1',portrait:'3/4'}[t.ratio],arc={large:'4/3',carre:'1/1',portrait:'3/4'}[t.ratio];
    o.push(`.feature .ph,.page-hero .ph{aspect-ratio:${ar}!important}.card .ph{aspect-ratio:${arc}!important}.market .ph,.market .leaflet-map{aspect-ratio:${arc}!important}`);
    if(t.separateur==='epais')o.push(`.divider{height:3px!important;background:var(--ink)!important}`);
    else if(t.separateur==='pointille')o.push(`.divider{height:0!important;border-top:2px dashed var(--line-2)!important}`);
    else if(t.separateur==='aucun')o.push(`.divider{display:none!important}`);
    root.setProperty('--shell',({etroit:1040,standard:1280,large:1440,pleine:1760})[t.largeur]+'px');
    const gg={serre:18,standard:36,aere:56}[t.espaceGrille];
    o.push(`.cards{gap:${gg}px!important}.zone-grid{gap:${Math.round(gg*0.8)}px!important}.related{gap:${Math.round(gg*0.3)}px!important}`);
    if(t.alignTitres==='centre')o.push(`.sec-head{flex-direction:column!important;align-items:center!important;text-align:center!important;gap:10px}`);
    if(t.stats==='cartes')o.push(`.stats{border:0!important;gap:14px}.stat{background:var(--paper-raise)!important;border:1px solid var(--line)!important;border-radius:${R}px!important;padding:24px!important}.stat+.stat{border-left:1px solid var(--line)!important;padding-left:24px!important}`);
    else if(t.stats==='minimal')o.push(`.stats{border:0!important}.stat+.stat{border-left:0!important;padding-left:0!important}.stat b{font-size:34px!important}`);
    if(t.puces==='plein')o.push(`.chip{background:var(--ink)!important;color:var(--cream)!important;border-color:var(--ink)!important}`);
    else if(t.puces==='souligne')o.push(`.chip{border:0!important;border-bottom:2px solid var(--gold)!important;border-radius:0!important;background:transparent!important;padding:6px 2px!important}`);
    const sp={lente:1.1,standard:0.7,rapide:0.35,aucune:0}[t.anim];
    window.__cpoAnim=t.anim;
    if(window.__cpoGsapSpeed)window.__cpoGsapSpeed();
    o.push(`.reveal{transition:opacity ${sp}s ease,transform ${sp}s ease!important}`);
    if(t.anim==='aucune')o.push(`.reveal{opacity:1!important;transform:none!important}`);

    document.getElementById("twkOverride").textContent=o.join("\n");
  }

  function persist(){
    try{localStorage.setItem(LS,JSON.stringify(t));}catch(e){}
    try{window.parent.postMessage({type:'__edit_mode_set_keys',edits:t},'*');}catch(e){}
  }
  function set(k,val){t[k]=val;apply();persist();build();}
  function setLive(k,val){t[k]=val;apply();persist();}

  function build(){
    const seg=(k,opts,wrap)=>`<div class="twk-seg${wrap?' wrap':''}">${opts.map(([val,lab])=>`<button data-k="${k}" data-v="${val}" class="${t[k]===val?'on':''}">${lab}</button>`).join("")}</div>`;
    const row=(lab,inner)=>`<div class="twk-row"><label>${lab}</label>${inner}</div>`;
    const sl=(k,min,max,step,disp)=>`<div class="twk-sl"><input type="range" data-sl="${k}" min="${min}" max="${max}" step="${step}" value="${t[k]}"><span class="twk-val" id="val-${k}">${disp(t[k])}</span></div>`;
    document.getElementById("twkBody").innerHTML=`
      <div class="twk-sec">Couleurs</div>
      ${row("Palette",`<div class="twk-sw">${Object.entries(PALETTES).map(([k,p])=>`<div class="twk-pal pal ${t.palette===k?'on':''}" data-pal="${k}" title="${p.label}">${p.sw.map(c=>`<i style="background:${c}"></i>`).join("")}</div>`).join("")}</div>`)}
      ${row("Accent",`<div class="twk-sw">${ACCENTS.map(c=>`<div class="twk-chip acc ${t.accent===c?'on':''}" data-acc="${c}" style="background:${c}"></div>`).join("")}</div>`)}
      ${row("Contraste",seg("contraste",[["doux","Doux"],["standard","Standard"],["eleve","Élevé"]]))}

      <div class="twk-sec">Surfaces & fonds</div>
      ${row("Bandeau haut",seg("ticker",[["sombre","Sombre"],["or","Or"],["clair","Clair"],["masque","Masqué"]],1))}
      ${row("Barre de nav",seg("nav",[["verre","Verre"],["plein","Plein"],["sombre","Sombre"],["borde","Bordé"]],1))}
      ${row("Nav majuscules",seg("navCase",[["normale","Normale"],["haut","Majuscules"]]))}
      ${row("Fond du hero",seg("heroBg",[["papier","Papier"],["teinte","Teinté"],["sombre","Sombre"]]))}
      ${row("Bandeau final",seg("finalBg",[["sombre","Sombre"],["or","Or"],["clair","Clair"]]))}
      ${row("Panneaux latéraux",seg("surfaces",[["clair","Clairs"],["sombre","Sombres"]]))}
      ${row("Texture des images",seg("texture",[["lignes","Lignes"],["uni","Uni"],["points","Points"]]))}
      ${row("Grain de fond",seg("grain",[["off","Off"],["on","On"]]))}

      <div class="twk-sec">Typographie</div>
      ${row("Police des titres",seg("titres",[["serif","Serif"],["sans","Sans"],["mono","Mono"]]))}
      ${row("Police du corps",seg("corps",[["serif","Serif"],["sans","Sans"]]))}
      ${row("Graisse des titres",seg("graisse",[["leger","Léger"],["normal","Normal"],["gras","Gras"]]))}
      ${row("Italique des titres",seg("italique",[["off","Off"],["on","On"]]))}
      ${row("Casse des titres",seg("casse",[["normale","Normale"],["haut","Majuscules"]]))}
      ${row("Sur-titres",seg("kicker",[["mono","Mono"],["sans","Sans"],["masque","Masqués"]]))}
      ${row("Échelle des titres",sl("echelleTitre",80,135,5,x=>x+" %"))}
      ${row("Taille du texte",sl("tailleTexte",15,21,1,x=>x+" px"))}
      ${row("Interligne",sl("interligne",135,190,5,x=>(x/100).toFixed(2)))}
      ${row("Interlettrage titres",sl("interlettre",-5,3,1,x=>(x/100).toFixed(2)+"em"))}

      <div class="twk-sec">Formes</div>
      ${row("Arrondi des angles",seg("radius",[["net","Net"],["doux","Doux"],["arrondi","Arr."],["rond","Rond"]]))}
      ${row("Profondeur des ombres",seg("shadow",[["plat","Plat"],["subtil","Subtil"],["fort","Prononcé"]]))}
      ${row("Épaisseur des filets",seg("filets",[["fin","Fin"],["moyen","Moyen"],["epais","Épais"]]))}
      ${row("Style des filets",seg("filetStyle",[["plein","Plein"],["pointille","Pointillé"]]))}
      ${row("Séparateurs",seg("separateur",[["filet","Filet"],["epais","Épais"],["pointille","Points"],["aucun","Aucun"]],1))}
      ${row("Ratio des images",seg("ratio",[["large","Large"],["carre","Carré"],["portrait","Portrait"]]))}

      <div class="twk-sec">Composants</div>
      ${row("Boutons",seg("boutons",[["plein","Plein"],["contour","Contour"],["souligne","Souligné"],["pilule","Pilule"]],1))}
      ${row("Cartes",seg("cartes",[["bordees","Bordées"],["sureleve","Surélevé"],["plates","Plates"]]))}
      ${row("Statistiques",seg("stats",[["filets","Filets"],["cartes","Cartes"],["minimal","Minimal"]]))}
      ${row("Puces communes",seg("puces",[["contour","Contour"],["plein","Plein"],["souligne","Souligné"]]))}

      <div class="twk-sec">Mise en page</div>
      ${row("Largeur du contenu",seg("largeur",[["etroit","Étroit"],["standard","Std"],["large","Large"],["pleine","Pleine"]],1))}
      ${row("Espacement des grilles",seg("espaceGrille",[["serre","Serré"],["standard","Standard"],["aere","Aéré"]]))}
      ${row("Densité verticale",seg("densite",[["compact","Compact"],["standard","Standard"],["aere","Aéré"]]))}
      ${row("Alignement des titres",seg("alignTitres",[["gauche","Gauche"],["centre","Centré"]]))}
      ${row("Vitesse des animations",seg("anim",[["lente","Lente"],["standard","Std"],["rapide","Rapide"],["aucune","Aucune"]],1))}

      <button class="twk-reset" id="twkReset">Réinitialiser tout</button>`;
    document.querySelectorAll(".pal").forEach(el=>el.onclick=()=>set("palette",el.dataset.pal));
    document.querySelectorAll(".acc").forEach(el=>el.onclick=()=>set("accent",el.dataset.acc));
    document.querySelectorAll(".twk-seg button").forEach(b=>b.onclick=()=>set(b.dataset.k,b.dataset.v));
    document.querySelectorAll("input[data-sl]").forEach(inp=>{
      const k=inp.dataset.sl, span=document.getElementById("val-"+k);
      const disp={echelleTitre:x=>x+" %",tailleTexte:x=>x+" px",interligne:x=>(x/100).toFixed(2),interlettre:x=>(x/100).toFixed(2)+"em"}[k];
      inp.oninput=()=>{const val=parseInt(inp.value,10);span.textContent=disp(val);setLive(k,val);};
    });
    document.getElementById("twkReset").onclick=()=>{t=Object.assign({},TWEAK_DEFAULTS);apply();persist();build();};
  }

  // override style tag
  const ov=document.createElement("style");ov.id="twkOverride";document.head.appendChild(ov);

  // host protocol
  const panel=document.getElementById("twk");
  window.addEventListener("message",e=>{const ty=e&&e.data&&e.data.type;
    if(ty==="__activate_edit_mode")panel.classList.add("open");
    else if(ty==="__deactivate_edit_mode")panel.classList.remove("open");});
  try{window.parent.postMessage({type:'__edit_mode_available'},'*');}catch(e){}
  document.getElementById("twkClose").onclick=()=>{panel.classList.remove("open");
    try{window.parent.postMessage({type:'__edit_mode_dismissed'},'*');}catch(e){}};

  // drag
  (function(){let dx,dy,drag=false;const h=document.getElementById("twkDrag");
    h.addEventListener("mousedown",e=>{drag=true;const r=panel.getBoundingClientRect();
      dx=e.clientX-r.left;dy=e.clientY-r.top;panel.style.right="auto";panel.style.bottom="auto";
      panel.style.left=r.left+"px";panel.style.top=r.top+"px";e.preventDefault();});
    window.addEventListener("mousemove",e=>{if(!drag)return;
      panel.style.left=Math.max(6,Math.min(window.innerWidth-60,e.clientX-dx))+"px";
      panel.style.top=Math.max(6,Math.min(window.innerHeight-40,e.clientY-dy))+"px";});
    window.addEventListener("mouseup",()=>drag=false);})();

  apply();build();
})();
