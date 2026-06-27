/* =====================================================================
   Conciergerie Paris Ouest — données + chrome partagés
   PFX : préfixe de chemin ("" à la racine, "../" dans /villes)
===================================================================== */
window.PFX = window.PFX || "";
(function(){
  const PFX = window.PFX;

  const slug = s => s.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

  const RAW = [
    ["Neuilly-sur-Seine",92,48.8846,2.2685,1.42],["Levallois-Perret",92,48.8939,2.2879,1.40],["Boulogne-Billancourt",92,48.8350,2.2400,1.38],
    ["Villeneuve-la-Garenne",92,48.9367,2.3275,0.92],["Rueil-Malmaison",92,48.8780,2.1810,1.22],["Saint-Cloud",92,48.8460,2.2080,1.30],
    ["Issy-les-Moulineaux",92,48.8240,2.2730,1.26],["Nanterre",92,48.8924,2.2070,1.05],["Puteaux",92,48.8847,2.2390,1.24],["Courbevoie",92,48.8970,2.2560,1.20],
    ["Suresnes",92,48.8700,2.2290,1.14],["Garches",92,48.8460,2.1880,1.18],["La Garenne-Colombes",92,48.9050,2.2440,1.10],["Vaucresson",92,48.8400,2.1590,1.20],
    ["Montrouge",92,48.8180,2.3120,1.12],["Malakoff",92,48.8160,2.2990,1.02],["Asnières-sur-Seine",92,48.9110,2.2870,1.06],["Colombes",92,48.9230,2.2540,1.00],
    ["Clichy",92,48.9040,2.3060,1.04],["Gennevilliers",92,48.9320,2.2950,0.94],["Bois-Colombes",92,48.9170,2.2680,1.08],["Châtillon",92,48.8020,2.2920,1.02],
    ["Clamart",92,48.8010,2.2660,1.06],["Antony",92,48.7540,2.2970,1.08],["Châtenay-Malabry",92,48.7650,2.2780,1.04],["Vanves",92,48.8210,2.2900,1.08],
    ["Meudon",92,48.8140,2.2350,1.12],["Sèvres",92,48.8230,2.2110,1.16],["Chaville",92,48.8090,2.1900,1.10],["Marnes-la-Coquette",92,48.8300,2.1720,1.24],
    ["Ville-d'Avray",92,48.8230,2.1930,1.18],["Bagneux",92,48.7980,2.3080,0.96],["Fontenay-aux-Roses",92,48.7880,2.2920,1.06],
    ["Le Plessis-Robinson",92,48.7810,2.2660,1.08],["Sceaux",92,48.7780,2.2900,1.20],["Bourg-la-Reine",92,48.7800,2.3160,1.12],
    ["Versailles",78,48.8049,2.1204,1.40],["Le Chesnay-Rocquencourt",78,48.8230,2.1230,1.20],["Viroflay",78,48.8010,2.1690,1.12],
    ["Vélizy-Villacoublay",78,48.7830,2.1940,1.14],["La Celle-Saint-Cloud",78,48.8400,2.1450,1.18],["Bougival",78,48.8620,2.1380,1.22],
    ["Jouy-en-Josas",78,48.7610,2.1670,1.10],["Saint-Germain-en-Laye",78,48.8990,2.0940,1.38],["Poissy",78,48.9290,2.0490,1.02],
    ["Maisons-Laffitte",78,48.9480,2.1460,1.30],["Conflans-Sainte-Honorine",78,48.9990,2.1010,0.98],["Louveciennes",78,48.8580,2.1130,1.24],
    ["Marly-le-Roi",78,48.8690,2.0950,1.20],["Le Pecq",78,48.8970,2.1080,1.16],["Chatou",78,48.8896,2.1556,1.22],["Croissy-sur-Seine",78,48.8767,2.1340,1.24],
    ["Le Vésinet",78,48.8920,2.1297,1.30],["Montesson",78,48.9080,2.1440,1.10],["Sartrouville",78,48.9470,2.1620,1.00],["Houilles",78,48.9280,2.1870,1.06],
    ["Carrières-sur-Seine",78,48.9130,2.1810,1.08],["Montigny-le-Bretonneux",78,48.7700,2.0420,1.05],["Guyancourt",78,48.7720,2.0730,1.02],
    ["Saint-Cyr-l'École",78,48.7990,2.0680,1.04]
  ];
  const COMMUNES = RAW.map(([name,dept,lat,lng,idx])=>({name,dept,lat,lng,idx,slug:slug(name)}));
  const TYPES = [
    {key:"studio",label:"Studio",nightly:78},{key:"t1",label:"T1",nightly:92},
    {key:"t2",label:"T2",nightly:124},{key:"t3",label:"T3",nightly:168},
    {key:"t4",label:"T4",nightly:222},{key:"t5",label:"T5 +",nightly:290}
  ];
  const OCC=0.72;
  const fmt=n=>n.toLocaleString("fr-FR")+" €";
  function estimate(name,key){
    const c=COMMUNES.find(x=>x.name===name), t=TYPES.find(x=>x.key===key);
    if(!c||!t)return null;
    const m=t.nightly*c.idx*OCC*30, r=n=>Math.round(n/50)*50;
    return{commune:c,type:t,low:r(m*0.88),mid:r(m),high:r(m*1.14),nightly:Math.round(t.nightly*c.idx),occ:Math.round(OCC*100)};
  }
  const L92=COMMUNES.filter(c=>c.dept===92).sort((a,b)=>a.name.localeCompare(b.name,"fr"));
  const L78=COMMUNES.filter(c=>c.dept===78).sort((a,b)=>a.name.localeCompare(b.name,"fr"));
  const deptName=d=>d===92?"Hauts-de-Seine":"Yvelines";

  /* ---- liens ---- */
  const HOME=PFX+"index.html";
  const P92=PFX+"Hauts-de-Seine.html";
  const P78=PFX+"Yvelines.html";
  const CONTACT=PFX+"Contact.html";
  const LEGAL=PFX+"Mentions-legales.html";
  const PRIVACY=PFX+"Confidentialite.html";
  const cityHref=s=>PFX+"villes/"+s+".html";

  /* ---- copy générée par commune (marché) ---- */
  function tier(idx){return idx>=1.30?"prime":idx>=1.12?"haut":idx>=1.0?"soutenu":"émergent";}
  function marketCopy(c){
    const t=tier(c.idx), dn=deptName(c.dept);
    const intro={
      prime:`${c.name} figure parmi les adresses les plus recherchées de notre portefeuille Paris Ouest.`,
      haut:`${c.name} s'impose comme une valeur sûre de la location courte durée dans le ${dn}.`,
      soutenu:`${c.name} bénéficie d'une demande régulière, portée par sa proximité avec Paris.`,
      "émergent":`${c.name} est un marché en développement, avec un bon potentiel d'optimisation.`
    }[t];
    const body={
      prime:`Demande corporate, tourisme d'affaires et séjours premium structurent un taux d'occupation élevé toute l'année.`,
      haut:`Clientèle affaires et moyenne durée assurent une occupation stable et des revenus réguliers.`,
      soutenu:`Voyageurs professionnels et séjours moyenne durée soutiennent l'activité sur l'ensemble de l'année.`,
      "émergent":`Une tarification dynamique et un positionnement soigné permettent d'y maximiser le rendement.`
    }[t];
    return [intro,body];
  }

  /* ---- chrome : nav + footer ---- */
  function navHTML(active){
    const a=k=>active===k?' class="active"':'';
    return `<div class="nav-in">
      <a href="${HOME}" class="brand"><span class="bk">Conciergerie</span><span class="bp">Paris Ouest</span></a>
      <nav class="nav-links" id="navLinks">
        <a href="${HOME}"${a("home")}>Accueil</a>
        <a href="${P92}"${a("92")}>Hauts-de-Seine</a>
        <a href="${P78}"${a("78")}>Yvelines</a>
        <a href="${CONTACT}"${a("apropos")}>Contact</a>
      </nav>
      <span class="nav-spacer"></span>
      <a href="${CONTACT}" class="btn btn-solid">Contactez-nous</a>
      <button class="menu-toggle" id="menuToggle">Menu</button>
    </div>`;
  }
  function footerHTML(){
    const col=list=>list.map(c=>`<a href="${cityHref(c.slug)}">${c.name}</a>`).join("");
    return `<div class="foot-in">
      <div class="foot-brand">
        <div class="fb">Conciergerie<br>Paris Ouest</div>
        <p>Gestion locative courte durée sur les Hauts-de-Seine et les Yvelines. Estimation et prise en charge complète de votre bien.</p>
        <a href="${CONTACT}" class="btn btn-ghost">Contactez-nous <span>→</span></a>
      </div>
      <div class="foot-col">
        <h4>Le site</h4>
        <a href="${HOME}">Accueil</a>
        <a href="${P92}">Hauts-de-Seine · 92</a>
        <a href="${P78}">Yvelines · 78</a>
        <a href="${CONTACT}">Contact</a>
        <a href="${PRIVACY}">Confidentialité</a>
      </div>
      <div class="foot-col communes-col">
        <div class="cd-head"><span class="cd-dept">Hauts-de-Seine</span><span class="cd-code">92</span></div>
        <div class="cd-links">${col(L92)}</div>
      </div>
      <div class="foot-col communes-col">
        <div class="cd-head"><span class="cd-dept">Yvelines</span><span class="cd-code">78</span></div>
        <div class="cd-links">${col(L78)}</div>
      </div>
    </div>
    <div class="foot-base">
      <span>© 2026 Conciergerie Paris Ouest — Gestion locative 92 &amp; 78</span>
      <span class="spacer"></span>
      <a href="${HOME}Plan-du-site.html">Plan du site</a>
      <a href="${PRIVACY}">Confidentialité</a>
    </div>`;
  }
  function buildChrome(active){
    const nav=document.getElementById("siteNav");
    if(nav){nav.className="nav";nav.innerHTML=navHTML(active);}
    const foot=document.getElementById("siteFooter");
    if(foot)foot.innerHTML=footerHTML();
    const mt=document.getElementById("menuToggle");
    if(mt)mt.onclick=()=>document.getElementById("navLinks").classList.toggle("open");
  }
  /* ---- calculateur réutilisable ---- */
  function resultHTML(r,cta){
    const c=cta||{href:cityHref(r.commune.slug),label:"Page dédiée à "+r.commune.name};
    return `<div class="res-eyebrow">Revenu mensuel estimé · <b>${r.commune.name}</b></div>
      <div class="res-range"><span class="mid">${fmt(r.mid)}</span><span class="per">/ mois</span></div>
      <div class="res-band">Fourchette <b>${fmt(r.low)}</b> – <b>${fmt(r.high)}</b> · ${r.type.label}</div>
      <div class="res-meta"><div><b>${r.nightly} €</b><span>nuitée moyenne</span></div><div><b>${r.occ} %</b><span>occupation</span></div></div>
      <a class="btn btn-gold res-cta" href="${c.href}">${c.label} <span>→</span></a>`;
  }
  function makeChips(tg,cur,onPick){
    TYPES.forEach(t=>{const b=document.createElement("button");
      b.className="type-chip"+(t.key===cur?" on":"");b.textContent=t.label;b.dataset.key=t.key;
      b.onclick=()=>{[...tg.children].forEach(x=>x.classList.toggle("on",x.dataset.key===t.key));onPick(t.key);};
      tg.appendChild(b);});
  }
  /* page commune : commune fixe, choix du type */
  function initCityCalc(name){
    let cur="t2";const tg=document.getElementById("typeGrid"),out=document.getElementById("calcOut");
    const draw=()=>{out.innerHTML=resultHTML(estimate(name,cur),{href:CONTACT,label:"Demander mon estimation"});};
    makeChips(tg,cur,k=>{cur=k;draw();});draw();
  }
  /* page zone : sélecteur de commune (filtré) + type */
  function initZoneCalc(dept){
    const sel=document.getElementById("communeSel"),tg=document.getElementById("typeGrid"),out=document.getElementById("calcOut");
    let cur="t2";const list=(dept===92?L92:L78);
    list.forEach(c=>{const o=document.createElement("option");o.value=c.name;o.textContent=c.name;sel.appendChild(o);});
    makeChips(tg,cur,k=>{cur=k;if(sel.value)out.innerHTML=resultHTML(estimate(sel.value,cur));});
    const btn=document.getElementById("calcBtn");
    const go=()=>{if(!sel.value){out.innerHTML='<div class="empty">⚠ Choisissez d\'abord une commune.</div>';return;}out.innerHTML=resultHTML(estimate(sel.value,cur));};
    if(btn)btn.onclick=go;sel.onchange=()=>{if(sel.value)out.innerHTML=resultHTML(estimate(sel.value,cur));};
  }
  /* ====== géocodage par adresse (Nominatim, sans clé) ====== */
  function haversine(la1,lo1,la2,lo2){const R=6371,toR=x=>x*Math.PI/180;
    const dLa=toR(la2-la1),dLo=toR(lo2-lo1);
    const x=Math.sin(dLa/2)**2+Math.cos(toR(la1))*Math.cos(toR(la2))*Math.sin(dLo/2)**2;
    return 2*R*Math.asin(Math.sqrt(x));}
  function nearestCommune(lat,lng){let best=null,bd=1e9;
    COMMUNES.forEach(c=>{const d=haversine(lat,lng,c.lat,c.lng);if(d<bd){bd=d;best=c;}});return{commune:best,dist:bd};}
  function matchCommune(name){if(!name)return null;const n=slug(name);
    let c=COMMUNES.find(x=>x.slug===n);if(c)return c.name;
    c=COMMUNES.find(x=>n.indexOf(x.slug)>=0||x.slug.indexOf(n)>=0);return c?c.name:null;}
  /* estimation affinée à une position précise (micro-ajustement selon la proximité du centre) */
  function estimateAt(lat,lng,key,communeName){
    let c=communeName?COMMUNES.find(x=>x.name===communeName):null, dist;
    if(!c){const n=nearestCommune(lat,lng);c=n.commune;dist=n.dist;}else dist=haversine(lat,lng,c.lat,c.lng);
    const t=TYPES.find(x=>x.key===key);
    const prox=Math.max(0,1-Math.min(dist,3)/3);            // 1 au centre → 0 à 3 km
    const micro=1+prox*0.05-(dist>3?0.03:0);                 // jusqu'à +5 % / -3 %
    const idx=c.idx*micro, m=t.nightly*idx*OCC*30, r=n=>Math.round(n/50)*50;
    return{commune:c,type:t,dist,micro,idxAdj:idx,low:r(m*0.88),mid:r(m),high:r(m*1.14),nightly:Math.round(t.nightly*idx),occ:Math.round(OCC*100)};
  }
  async function geoSuggest(q,dept){
    const vb=dept===92?"2.16,48.96,2.35,48.74":dept===78?"1.93,49.03,2.24,48.74":"1.92,49.06,2.42,48.72";
    const url="https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=6&countrycodes=fr&accept-language=fr&bounded=1&viewbox="+vb+"&q="+encodeURIComponent(q);
    const res=await fetch(url,{headers:{Accept:"application/json"}});
    if(!res.ok)throw new Error("geo "+res.status);
    return (await res.json()).map(d=>{const a=d.address||{};
      const road=[a.house_number,a.road].filter(Boolean).join(" ")||String(d.display_name).split(",")[0];
      const city=a.city||a.town||a.village||a.municipality||a.suburb||"";
      const commune=matchCommune(city)||matchCommune(a.suburb)||matchCommune(a.county)||null;
      return{lat:+d.lat,lng:+d.lon,short:road+(city?(", "+city):""),context:commune||city||"Île-de-France",commune};});
  }
  function resultAddrHTML(r,addrLabel,cta){
    const c=cta||{href:cityHref(r.commune.slug),label:"Page dédiée à "+r.commune.name};
    const pos=r.micro>=1.035?"Emplacement premium":r.micro>=1.0?"Bon emplacement":"Emplacement périphérique";
    return `<div class="res-eyebrow">Revenu mensuel estimé · <b>${r.commune.name}</b></div>
      <div class="res-range"><span class="mid">${fmt(r.mid)}</span><span class="per">/ mois</span></div>
      <div class="res-band">Fourchette <b>${fmt(r.low)}</b> – <b>${fmt(r.high)}</b> · ${r.type.label}</div>
      ${addrLabel?`<div class="res-addr"><span>⌖</span> ${addrLabel} · ${pos}</div>`:""}
      <div class="res-meta"><div><b>${r.nightly} €</b><span>nuitée moyenne</span></div><div><b>${r.occ} %</b><span>occupation</span></div><div><b>×${r.idxAdj.toFixed(2)}</b><span>indice ajusté</span></div></div>
      <a class="btn btn-gold res-cta" href="${c.href}">${c.label} <span>→</span></a>`;
  }
  /* calculateur avancé : saisie d'adresse + autocomplétion + type */
  function initAddressCalc(opts){
    opts=opts||{};const dept=opts.dept||null, fixed=opts.fixedCommune||null;
    const input=document.getElementById("addrInput"),sug=document.getElementById("addrSuggest"),
      tg=document.getElementById("typeGrid"),out=document.getElementById("calcOut"),note=document.getElementById("addrNote");
    if(!input||!tg||!out)return;
    let cur="t2",sel=null,timer=null,items=[],active=-1,lastReq=0;
    makeChips(tg,cur,k=>{cur=k;draw();});
    function draw(){
      if(!sel){out.innerHTML='<div class="empty">Saisissez une adresse pour estimer vos revenus.</div>';return;}
      const r=estimateAt(sel.lat,sel.lng,cur,fixed||sel.commune);
      out.innerHTML=resultAddrHTML(r,sel.short,fixed?{href:CONTACT,label:"Demander mon estimation"}:undefined);
    }
    draw();
    function closeSug(){sug.style.display="none";sug.innerHTML="";active=-1;}
    function renderSug(){
      if(!items.length){closeSug();return;}
      sug.innerHTML=items.map((it,i)=>`<button type="button" class="addr-opt${i===active?' on':''}" data-i="${i}"><span class="ao-t">${it.short}</span><span class="ao-c">${it.context}</span></button>`).join("");
      sug.style.display="block";
      sug.querySelectorAll(".addr-opt").forEach(b=>b.onclick=()=>pick(+b.dataset.i));
    }
    function pick(i){const it=items[i];if(!it)return;sel=it;input.value=it.short;closeSug();draw();}
    async function query(q){const my=++lastReq;
      if(note)note.innerHTML='<span class="addr-load">Recherche…</span>';
      try{const res=await geoSuggest(fixed?(q+", "+fixed):q,dept);if(my!==lastReq)return;
        items=res;active=-1;renderSug();if(note)note.textContent="";
        if(!res.length&&note)note.textContent="Aucune adresse trouvée.";
      }catch(e){if(my!==lastReq)return;closeSug();
        if(note){note.innerHTML='Géocodage indisponible — <button type="button" id="addrFallback" class="addr-fb">choisir une commune</button>.';
          const fb=document.getElementById("addrFallback");if(fb)fb.onclick=showFallback;}}
    }
    input.addEventListener("input",()=>{const q=input.value.trim();clearTimeout(timer);
      sel=null;if(q.length<3){closeSug();if(note)note.textContent="";return;}timer=setTimeout(()=>query(q),360);});
    input.addEventListener("keydown",e=>{if(sug.style.display!=="block")return;
      if(e.key==="ArrowDown"){active=Math.min(items.length-1,active+1);renderSug();e.preventDefault();}
      else if(e.key==="ArrowUp"){active=Math.max(0,active-1);renderSug();e.preventDefault();}
      else if(e.key==="Enter"){if(active>=0){pick(active);e.preventDefault();}}
      else if(e.key==="Escape")closeSug();});
    document.addEventListener("click",e=>{if(!sug.contains(e.target)&&e.target!==input)closeSug();});
    function showFallback(){out.innerHTML="";
      const wrap=document.createElement("div");wrap.className="fld";wrap.innerHTML='<label>Votre commune</label>';
      const s=document.createElement("select");s.className="ctrl";s.innerHTML='<option value="">Choisissez…</option>';
      const list=dept===92?L92:dept===78?L78:COMMUNES.slice().sort((a,b)=>a.name.localeCompare(b.name,"fr"));
      list.forEach(c=>{const o=document.createElement("option");o.value=c.name;o.textContent=c.name;s.appendChild(o);});
      wrap.appendChild(s);out.appendChild(wrap);
      s.onchange=()=>{if(s.value)out.innerHTML=resultHTML(estimate(fixed||s.value,cur),fixed?{href:CONTACT,label:"Demander mon estimation"}:undefined);};
      if(fixed){s.value=fixed;s.dispatchEvent(new Event("change"));}
    }
  }

  /* ============================================================
     CALCULATEUR AVANCÉ — autocomplétion BAN + ADR/occ/RevPAR +
     saisonnalité 12 mois + jauge de confiance + note réglementaire
  ============================================================ */
  const MONTHS=["J","F","M","A","M","J","J","A","S","O","N","D"];
  const MONTHS_FULL=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const _S=[0.80,0.78,0.90,1.00,1.09,1.14,1.22,1.20,1.10,0.99,0.85,0.93];
  const _Sm=_S.reduce((a,b)=>a+b,0)/12; const SEASON=_S.map(s=>s/_Sm); // moyenne = 1
  const TYPE_BASE={studio:{beds:0,guests:2},t1:{beds:1,guests:2},t2:{beds:1,guests:3},t3:{beds:2,guests:5},t4:{beds:3,guests:7},t5:{beds:4,guests:9}};
  const LOAD_STEPS=["Géolocalisation de l'adresse…","Analyse du quartier…","Relevé des biens comparables…","Calcul du tarif moyen (ADR)…","Estimation du taux d'occupation…","Modélisation de la saisonnalité…","Calcul du RevPAR…","Projection annuelle…","Indice de confiance…"];
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

  function banEstimate(o){ // {lat,lng,typeKey,beds,guests,communeName,precise}
    let c=o.communeName?COMMUNES.find(x=>x.name===o.communeName):null, dist;
    if(!c){const n=nearestCommune(o.lat,o.lng);c=n.commune;dist=n.dist;}else dist=haversine(o.lat,o.lng,c.lat,c.lng);
    const t=TYPES.find(x=>x.key===o.typeKey)||TYPES[2], base=TYPE_BASE[t.key];
    const prox=Math.max(0,1-Math.min(dist,3)/3), micro=1+prox*0.05-(dist>3?0.03:0);
    const idxAdj=c.idx*micro;
    const bedF=clamp(1+((o.beds??base.beds)-base.beds)*0.05,0.85,1.3);
    const guestF=clamp(1+((o.guests??base.guests)-base.guests)*0.03,0.85,1.3);
    const adr=Math.round(t.nightly*idxAdj*bedF*guestF);
    const occ=clamp(0.66+(c.idx-1)*0.13,0.55,0.86);
    const revpar=adr*occ;
    const monthly=SEASON.map(s=>Math.round(revpar*30.4*s/10)*10);
    const annual=monthly.reduce((a,b)=>a+b,0);
    const r=n=>Math.round(n/50)*50;
    const matched=!!o.communeName||dist<0.8;
    let conf=matched?0.84:dist<1.6?0.7:0.56; if(o.precise)conf=Math.min(0.95,conf+0.07);
    return{commune:c,type:t,dist,adr,occ:Math.round(occ*100),revpar:Math.round(revpar),
      monthlyAvg:r(annual/12),annual:r(annual),annualLow:r(annual*0.91),annualHigh:r(annual*1.09),
      monthly,conf:Math.round(conf*100),beds:o.beds??base.beds,guests:o.guests??base.guests};
  }

  async function banSuggest(q,dept){
    const url="https://api-adresse.data.gouv.fr/search/?limit=8&autocomplete=1&q="+encodeURIComponent(q);
    const res=await fetch(url);if(!res.ok)throw new Error("ban "+res.status);
    const data=await res.json();
    const IDF=["75","77","78","91","92","93","94","95"];
    let feats=(data.features||[]).filter(f=>IDF.includes(String(f.properties.postcode||"").slice(0,2)));
    const rank=f=>{const d=String(f.properties.postcode||"").slice(0,2);
      if(dept&&d===String(dept))return 0; if(d==="92"||d==="78")return 1; return 2;};
    feats.sort((a,b)=>rank(a)-rank(b)||(b.properties.score||0)-(a.properties.score||0));
    return feats.slice(0,6).map(f=>{const p=f.properties,g=f.geometry.coordinates;
      const commune=matchCommune(p.city)||matchCommune(p.name)||null;
      return{lat:g[1],lng:g[0],short:p.label,context:(p.postcode||"")+" "+(p.city||""),
        commune,precise:p.type==="housenumber"};});
  }

  function gaugeSVG(pct){const R=22,C=2*Math.PI*R,off=C*(1-pct/100);
    const col=pct>=78?"var(--gold)":pct>=66?"#b5894e":"#9a8f78";
    return `<svg viewBox="0 0 56 56" class="conf-svg"><circle cx="28" cy="28" r="${R}" fill="none" stroke="var(--line)" stroke-width="5"/>
      <circle cx="28" cy="28" r="${R}" fill="none" stroke="${col}" stroke-width="5" stroke-linecap="round"
      stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}" transform="rotate(-90 28 28)"
      style="transition:stroke-dashoffset 1s ease"/><text x="28" y="32" text-anchor="middle" class="conf-num">${pct}</text></svg>`;
  }
  /* ==== Capture de lead (Formspree) sur le rapport d'estimation ====
     Même destination que le formulaire de contact (boîte Gmail). */
  const LEAD_ENDPOINT="https://formspree.io/f/xjgqbyzp";
  function bindLead(r,addr){
    const f=document.getElementById("arLead");if(!f)return;
    f.addEventListener("submit",async e=>{
      e.preventDefault();
      const em=document.getElementById("arLeadEmail");
      if(!em.value.trim()||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value.trim())){em.classList.add("err");em.focus();return;}
      em.classList.remove("err");
      const b=f.querySelector("button"),lbl=b.innerHTML;b.disabled=true;b.textContent="Envoi…";
      const fd=new FormData();
      fd.append("email",em.value.trim());
      fd.append("_subject","Lead estimation — "+r.commune.name+" ("+fmt(r.annual)+"/an)");
      fd.append("commune",r.commune.name);
      fd.append("adresse",addr||"");
      fd.append("type",r.type.label);
      fd.append("chambres",r.beds);
      fd.append("voyageurs",r.guests);
      fd.append("revenu_annuel_estime",fmt(r.annual));
      fd.append("page",location.pathname);
      const done=()=>{f.innerHTML='<div class="ar-lead-done">✓ C\'est noté — votre rapport arrive par e-mail. Un conseiller peut aussi vous rappeler sous 48 h.</div>';};
      const fail=()=>{b.disabled=false;b.innerHTML=lbl;em.classList.add("err");
        const n=f.querySelector(".ar-lead-note");if(n)n.textContent="Envoi impossible. Écrivez-nous à conciergerieparisouest@gmail.com.";};
      try{const res=await fetch(LEAD_ENDPOINT,{method:"POST",headers:{Accept:"application/json"},body:fd});res.ok?done():fail();}catch(_){fail();}
    });
  }
  function advResultHTML(r,addr){
    const maxM=Math.max(...r.monthly);
    const bars=r.monthly.map((v,i)=>`<div class="sb-col"><div class="sb-track"><div class="sb-fill" style="height:0" data-h="${Math.round(v/maxM*100)}"></div></div><span class="sb-m">${MONTHS[i]}</span></div>`).join("");
    return `<div class="adv-res">
      <div class="ar-head"><div class="res-eyebrow">Revenu annuel estimé · <b>${r.commune.name}</b></div>
        <div class="ar-conf"><div class="conf-ring">${gaugeSVG(r.conf)}</div><span class="conf-lbl">Indice de<br>confiance</span></div></div>
      <div class="ar-hero"><span class="ar-annual">${fmt(r.annual)}</span><span class="ar-per">/ an</span></div>
      <div class="ar-range">Fourchette <b>${fmt(r.annualLow)}</b> – <b>${fmt(r.annualHigh)}</b> · ${r.type.label} · ${r.beds>0?r.beds+" ch.":"studio"} · ${r.guests} voy.</div>
      ${addr?`<div class="res-addr"><span>⌖</span> ${addr}</div>`:""}
      <div class="ar-kpis">
        <div class="kpi"><b>${r.adr} €</b><span>ADR · tarif/nuit</span></div>
        <div class="kpi"><b>${r.occ} %</b><span>Occupation</span></div>
        <div class="kpi"><b>${r.revpar} €</b><span>RevPAR</span></div>
        <div class="kpi"><b>${fmt(r.monthlyAvg)}</b><span>Moy. / mois</span></div>
      </div>
      <div class="ar-season"><div class="ar-season-h">Saisonnalité des revenus · 12 mois</div><div class="season-bars">${bars}</div></div>
      <div class="ar-note"><span class="arn-i">§</span> Location courte durée : changement d'usage requis dans le 92 et certaines communes du 78 ; plafond de 120 nuits/an pour une résidence principale.</div>
      <form class="ar-lead" id="arLead" novalidate>
        <div class="ar-lead-h">Recevez ce rapport détaillé par e-mail</div>
        <div class="ar-lead-row">
          <input class="ctrl" id="arLeadEmail" type="email" placeholder="vous@exemple.fr" autocomplete="email" required>
          <button type="submit" class="btn btn-gold">Recevoir <span>→</span></button>
        </div>
        <p class="ar-lead-note">Sans engagement · vos données restent strictement confidentielles.</p>
      </form>
      <a class="btn btn-ghost ar-cta" href="${CONTACT}">Affiner avec un conseiller <span>→</span></a>
    </div>`;
  }

  function stepper(label,id,val,min,max){
    return `<div class="stepper"><span class="st-l">${label}</span>
      <div class="st-ctl"><button type="button" class="st-btn" data-step="${id}" data-d="-1">–</button>
      <span class="st-v" id="st-${id}">${val}</span>
      <button type="button" class="st-btn" data-step="${id}" data-d="1">+</button></div></div>`;
  }

  function initBanCalc(opts){
    opts=opts||{};const dept=opts.dept||null, fixed=opts.fixedCommune||null;
    const input=document.getElementById("addrInput"),sug=document.getElementById("addrSuggest"),
      tg=document.getElementById("typeGrid"),out=document.getElementById("calcOut"),note=document.getElementById("addrNote");
    if(!input||!tg||!out)return;
    const form=tg.closest(".calc-form")||input.closest(".calc-form");
    let cur="t2",sel=null,timer=null,items=[],active=-1,lastReq=0;
    let beds=TYPE_BASE[cur].beds, guests=TYPE_BASE[cur].guests, busy=false;

    // chips
    TYPES.forEach(t=>{const b=document.createElement("button");
      b.className="type-chip"+(t.key===cur?" on":"");b.textContent=t.label;b.dataset.key=t.key;
      b.onclick=()=>{cur=t.key;beds=TYPE_BASE[cur].beds;guests=TYPE_BASE[cur].guests;
        document.getElementById("st-beds").textContent=beds;document.getElementById("st-guests").textContent=guests;
        [...tg.children].forEach(x=>x.classList.toggle("on",x.dataset.key===cur));if(sel)compute();};
      tg.appendChild(b);});

    // steppers + bouton (injectés)
    const extra=document.createElement("div");extra.className="fld";
    extra.innerHTML=`<label>Chambres &amp; voyageurs</label><div class="stepper-row">${stepper("Chambres","beds",beds,0,8)}${stepper("Voyageurs","guests",guests,1,16)}</div>`;
    const btn=document.createElement("button");btn.type="button";btn.className="btn btn-solid calc-btn";btn.id="banBtn";
    btn.innerHTML='Estimer mes revenus <span>→</span>';
    if(form){form.appendChild(extra);form.appendChild(btn);}
    extra.querySelectorAll(".st-btn").forEach(b=>b.onclick=()=>{
      const id=b.dataset.step,d=+b.dataset.d;
      if(id==="beds")beds=clamp(beds+d,0,8);else guests=clamp(guests+d,1,16);
      document.getElementById("st-"+id).textContent=id==="beds"?beds:guests;
      if(sel&&!busy)compute();});

    function empty(){out.innerHTML='<div class="empty">Saisissez une adresse pour lancer l\'estimation.</div>';}
    empty();

    function closeSug(){sug.style.display="none";sug.innerHTML="";active=-1;}
    function renderSug(){if(!items.length){closeSug();return;}
      sug.innerHTML=items.map((it,i)=>`<button type="button" class="addr-opt${i===active?' on':''}" data-i="${i}"><span class="ao-t">${it.short}</span><span class="ao-c">${it.context}${it.precise?' · n° exact':''}</span></button>`).join("");
      sug.style.display="block";sug.querySelectorAll(".addr-opt").forEach(b=>b.onclick=()=>pick(+b.dataset.i));}
    function pick(i){const it=items[i];if(!it)return;sel=it;input.value=it.short;closeSug();if(note)note.textContent="";compute();}

    async function query(q){const my=++lastReq;if(note)note.innerHTML='<span class="addr-load">Recherche…</span>';
      try{const res=await banSuggest(fixed?(q+" "+fixed):q,dept||(fixed?(COMMUNES.find(x=>x.name===fixed)||{}).dept:null));
        if(my!==lastReq)return;items=res;active=-1;renderSug();
        if(note)note.textContent=res.length?"":"Aucune adresse trouvée en Île-de-France.";
      }catch(e){if(my!==lastReq)return;closeSug();
        if(note){note.innerHTML='Géocodage indisponible — <button type="button" id="banFb" class="addr-fb">choisir une commune</button>.';
          const fb=document.getElementById("banFb");if(fb)fb.onclick=fallback;}}
    }
    input.addEventListener("input",()=>{const q=input.value.trim();clearTimeout(timer);sel=null;
      if(q.length<3){closeSug();if(note)note.textContent="";return;}timer=setTimeout(()=>query(q),300);});
    input.addEventListener("keydown",e=>{if(sug.style.display!=="block")return;
      if(e.key==="ArrowDown"){active=Math.min(items.length-1,active+1);renderSug();e.preventDefault();}
      else if(e.key==="ArrowUp"){active=Math.max(0,active-1);renderSug();e.preventDefault();}
      else if(e.key==="Enter"){if(active>=0){pick(active);e.preventDefault();}}
      else if(e.key==="Escape")closeSug();});
    document.addEventListener("click",e=>{if(!sug.contains(e.target)&&e.target!==input)closeSug();});
    btn.onclick=()=>{if(sel)compute();else{input.focus();if(note)note.innerHTML='<span class="addr-load">Saisissez d\'abord une adresse.</span>';}};

    function animateBars(){out.querySelectorAll(".sb-fill").forEach((el,i)=>{
      setTimeout(()=>{el.style.height=el.dataset.h+"%";},120+i*55);});}

    function compute(){
      if(busy)return;busy=true;
      let i=0;out.innerHTML=`<div class="adv-load"><div class="al-spin"></div><div class="al-step" id="alStep">${LOAD_STEPS[0]}</div><div class="al-bar"><div class="al-bar-fill" id="alBar"></div></div></div>`;
      const stepEl=()=>document.getElementById("alStep"),barEl=()=>document.getElementById("alBar");
      const iv=setInterval(()=>{i++;
        if(i<LOAD_STEPS.length){const s=stepEl();if(s)s.textContent=LOAD_STEPS[i];const b=barEl();if(b)b.style.width=Math.round((i+1)/LOAD_STEPS.length*100)+"%";}
        else{clearInterval(iv);
          const r=banEstimate({lat:sel.lat,lng:sel.lng,typeKey:cur,beds,guests,communeName:fixed||sel.commune,precise:sel.precise});
          out.innerHTML=advResultHTML(r,sel.short);animateBars();bindLead(r,sel.short);busy=false;}
      },170);
    }
    function fallback(){out.innerHTML="";const wrap=document.createElement("div");wrap.className="fld";wrap.innerHTML='<label>Votre commune</label>';
      const s=document.createElement("select");s.className="ctrl";s.innerHTML='<option value="">Choisissez…</option>';
      const list=dept===92?L92:dept===78?L78:COMMUNES.slice().sort((a,b)=>a.name.localeCompare(b.name,"fr"));
      list.forEach(c=>{const o=document.createElement("option");o.value=c.name;o.textContent=c.name;s.appendChild(o);});
      wrap.appendChild(s);out.appendChild(wrap);
      s.onchange=()=>{if(!s.value)return;const c=COMMUNES.find(x=>x.name===s.value);
        sel={lat:c.lat,lng:c.lng,short:c.name,commune:c.name,precise:false};compute();};
      if(fixed){s.value=fixed;s.dispatchEvent(new Event("change"));}
    }
  }

  function initReveal(){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}}),{threshold:.08,rootMargin:"0px 0px -8% 0px"});
    document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
  }

  /* ---- cartes interactives (Leaflet + CARTO) ---- */
  let _lf=null;
  function ensureLeaflet(cb){
    if(window.L){cb();return;}
    if(!_lf){_lf=new Promise(res=>{
      const css=document.createElement("link");css.rel="stylesheet";css.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";document.head.appendChild(css);
      const s=document.createElement("script");s.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";s.onload=res;document.body.appendChild(s);
    });}
    _lf.then(cb);
  }
  const TILE="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const TATTR='&copy; OpenStreetMap contributors';
  function pin(active){return L.divIcon({className:"",html:'<div class="cpo-pin'+(active?" active":"")+'"></div>',iconSize:[16,16],iconAnchor:[8,8]});}
  function popHTML(c){return '<div class="map-pop"><div class="mi">'+deptName(c.dept)+' · indice ×'+c.idx.toFixed(2)+'</div><b>'+c.name+'</b><br><a href="'+cityHref(c.slug)+'">La ville en détail →</a></div>';}
  function tile(map){L.tileLayer(TILE,{attribution:TATTR,subdomains:"abc",maxZoom:19}).addTo(map);}
  function initCityMap(name,id){ensureLeaflet(()=>{
    const c=COMMUNES.find(x=>x.name===name);if(!c||!document.getElementById(id))return;
    const map=L.map(id,{scrollWheelZoom:false}).setView([c.lat,c.lng],14);tile(map);
    L.marker([c.lat,c.lng],{icon:pin(true)}).addTo(map).bindPopup(popHTML(c));
    setTimeout(()=>map.invalidateSize(),250);
  });}
  function initOverviewMap(id){ensureLeaflet(()=>{
    if(!document.getElementById(id))return;
    const map=L.map(id,{scrollWheelZoom:false}).setView([48.86,2.18],11);tile(map);
    COMMUNES.forEach(c=>L.marker([c.lat,c.lng],{icon:pin(false)}).addTo(map).bindPopup(popHTML(c)));
    map.fitBounds(COMMUNES.map(c=>[c.lat,c.lng]),{padding:[28,28]});
    setTimeout(()=>map.invalidateSize(),250);
  });}
  function initDirectoryMap(dept,id){ensureLeaflet(()=>{
    if(!document.getElementById(id))return;
    const list=dept===92?L92:L78;
    const map=L.map(id,{scrollWheelZoom:false}).setView([48.85,2.2],11);tile(map);
    const mk={};list.forEach(c=>{mk[c.slug]=L.marker([c.lat,c.lng],{icon:pin(false)}).addTo(map).bindPopup(popHTML(c));});
    map.fitBounds(list.map(c=>[c.lat,c.lng]),{padding:[28,28]});
    document.querySelectorAll("[data-map-slug]").forEach(btn=>{
      btn.addEventListener("click",e=>{e.preventDefault();
        const s=btn.dataset.mapSlug,c=COMMUNES.find(x=>x.slug===s);if(!c)return;
        Object.values(mk).forEach(m=>m.setIcon(pin(false)));mk[s].setIcon(pin(true));
        map.flyTo([c.lat,c.lng],14,{duration:.8});setTimeout(()=>mk[s].openPopup(),700);
        document.querySelectorAll(".dir-row.on").forEach(r=>r.classList.remove("on"));
        const row=btn.closest(".dir-row");if(row)row.classList.add("on");
      });
    });
    setTimeout(()=>map.invalidateSize(),250);
  });}
  /* ---- contenu éditorial unique par commune (anti-duplication SEO) ----
     Les textes sont saisis dans villes/contenu-communes.js (window.CPO_CONTENT).
     Si une commune n'y figure pas encore, le texte généré par défaut reste affiché. */
  function applyCityContent(name){
    const data=(window.CPO_CONTENT||{})[slug(name)];
    if(!data)return;
    if(data.lead){const l=document.querySelector(".page-hero .lead");if(l)l.textContent=data.lead;}
    if(data.metaDescription){const m=document.querySelector('meta[name="description"]');if(m)m.setAttribute("content",data.metaDescription);}
    if(data.image){
      const ph=document.querySelector(".page-hero .ph");
      if(ph){
        const alt=(data.imageAlt||(name+", gestion locative courte durée")).replace(/"/g,"&quot;");
        const src=/^(https?:)?\//.test(data.image)?data.image:"../"+data.image;
        ph.classList.add("has-img");
        ph.innerHTML='<img src="'+src+'" alt="'+alt+'" decoding="async" fetchpriority="high">'+
          (data.imageCredit?'<span class="ph-credit">'+data.imageCredit+"</span>":"");
      }
    }
    const copy=document.querySelector(".market .copy");
    if(copy){
      let html="";
      (data.paragraphes||[]).forEach(p=>html+="<p>"+p+"</p>");
      if(data.points&&data.points.length)html+='<ul class="city-points">'+data.points.map(pt=>"<li>"+pt+"</li>").join("")+"</ul>";
      if(data.wikipedia){
        const c=COMMUNES.find(x=>x.name===name);
        const an=data.wikiAnchor||(name+", commune des "+deptName(c?c.dept:92));
        html+='<p class="city-wiki">En savoir plus sur <a href="'+data.wikipedia+'" target="_blank" rel="noopener">'+an+'</a>.</p>';
      }
      if(html)copy.innerHTML=html;
    }
    if(data.titre){const h=document.querySelector(".market");const head=h&&h.closest(".sec")&&h.closest(".sec").querySelector(".sec-head h2");if(head)head.textContent=data.titre;}
  }

  /* ---- « Comment ça marche » : panneaux interactifs (auto-init) ---- */
  function initProcess(){
    const proc=document.getElementById("proc");if(!proc||proc.dataset.init)return;
    proc.dataset.init="1";
    const cards=[...proc.querySelectorAll(".proc-card")];if(!cards.length)return;
    const fine=window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timer=null,demoDone=false;
    const activate=i=>{const n=cards.length;i=((i%n)+n)%n;cards.forEach((c,k)=>c.classList.toggle("on",k===i));};
    const stopDemo=()=>{demoDone=true;if(timer){clearTimeout(timer);timer=null;}};

    // interaction utilisateur : survol (desktop) ou clic (tactile) — prioritaire
    cards.forEach((c,i)=>{
      if(fine)c.addEventListener("mouseenter",()=>{stopDemo();activate(i);});
      c.addEventListener("click",()=>{stopDemo();activate(i);});
    });
    // toute entrée dans la zone stoppe la démo (évite les conflits)
    proc.addEventListener("pointerenter",stopDemo,{once:true});

    // démo : un seul passage 0→1→2 puis repos sur la 1re étape, déclenché à l'apparition
    function runDemo(){
      if(demoDone)return;
      let i=0;activate(0);
      const tick=()=>{
        if(demoDone)return;
        i++;
        if(i<cards.length){activate(i);timer=setTimeout(tick,1700);}
        else{timer=setTimeout(()=>{if(!demoDone)activate(0);demoDone=true;},1700);}
      };
      timer=setTimeout(tick,1700);
    }
    if(reduce){activate(0);demoDone=true;return;}
    const io=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting){runDemo();io.disconnect();}
    }),{threshold:0.45});
    io.observe(proc);
  }

  window.CPO={COMMUNES,TYPES,OCC,estimate,fmt,slug,L92,L78,deptName,
    HOME,P92,P78,CONTACT,cityHref,marketCopy,buildChrome,initReveal,applyCityContent,initProcess,
    resultHTML,initCityCalc,initZoneCalc,ensureLeaflet,initCityMap,initOverviewMap,initDirectoryMap,
    estimateAt,geoSuggest,initAddressCalc,resultAddrHTML,nearestCommune,matchCommune,
    banEstimate,banSuggest,initBanCalc};

  if(document.readyState!=="loading")initProcess();
  else document.addEventListener("DOMContentLoaded",initProcess);
})();
