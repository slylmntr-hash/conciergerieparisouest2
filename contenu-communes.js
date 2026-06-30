/* =====================================================================
   CONTENU ÉDITORIAL PAR COMMUNE — Conciergerie Paris Ouest
   ---------------------------------------------------------------------
   But : donner à CHAQUE fiche ville un texte unique (SEO anti-duplication).
   Tant qu'une commune reste vide ici, le texte généré par défaut s'affiche.

   Pour remplir une commune, décommentez les lignes et écrivez votre texte :
     lead            → chapô affiché sous le titre H1 (1 phrase)
     metaDescription → balise <meta name="description"> (~150 caractères)
     paragraphes     → tableau de paragraphes (section « Le marché à … »)
     points          → tableau de points clés (quartiers, gares, lieux)
     wikipedia       → URL de la page Wikipédia de la ville (ancre SEO ajoutée auto.)
     wikiAnchor      → (optionnel) texte de l'ancre vers Wikipédia
     image           → chemin de la photo (ex. "images/villes/versailles.jpg" — relatif
                       à la racine du site ; déposez le fichier dans images/villes/).
                       Tant que ce champ est vide "", aucune image ne s'affiche.
     imageAlt        → texte ALT optimisé SEO (déjà pré-rempli pour les 60 communes)
     imageCredit     → mention obligatoire si photo Wikimedia Commons,
                       ex. "© Auteur / Wikimedia Commons (CC BY-SA 4.0)"
     titre           → (optionnel) remplace le titre « Le marché à … »

   ⚠ Visez 150–300 mots VRAIMENT spécifiques par commune (quartiers réels,
     gares, points d'intérêt, type de clientèle). C'est ce qui débloque le
     référencement local. 2 exemples complets sont fournis ci-dessous.
===================================================================== */
window.CPO_CONTENT = {

  /* ===== Yvelines · 78 ===== */
  "bougival": {
    image:"images/villes/bougival.jpg", imageAlt:"Rue du Maréchal Joffre à Bougival, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Bougival
    lead: "Conciergerie courte durée à Bougival : village des impressionnistes sur les bords de Seine, aux portes de l'ouest parisien.",
    metaDescription: "Gestion locative courte durée à Bougival (78) : bords de Seine impressionnistes, Machine de Marly, cadre résidentiel prisé. Estimation gratuite.",
    paragraphes: [
      "Célèbre pour avoir inspiré les peintres impressionnistes, Bougival s'étire le long de la Seine dans un cadre résidentiel recherché, entre patrimoine et proximité immédiate de l'ouest parisien.",
      "Des coteaux aux bords de Seine, nous valorisons chaque bien auprès d'une clientèle culturelle, affaires et de séjours nature, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : bords de Seine, coteaux, centre",
      "Accès : Transilien L (Louveciennes à proximité), RER A (Rueil-Malmaison), bords de Seine",
      "Clientèle : tourisme culturel, voyageurs d'affaires, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Bougival",
    wikiAnchor: "Bougival, dans les Yvelines"
  },
  "carrieres-sur-seine": {
    image:"images/villes/carrieres-sur-seine.jpg", imageAlt:"Rue de Verdun à Carrières-sur-Seine, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Carrières-sur-Seine
    lead: "Gestion locative courte durée à Carrières-sur-Seine : village ancien et bords de Seine dans la boucle de Montesson.",
    metaDescription: "Conciergerie courte durée à Carrières-sur-Seine (78) : cœur de village historique, bords de Seine, RER A à proximité. Estimation gratuite.",
    paragraphes: [
      "Dans la boucle de Montesson, Carrières-sur-Seine conserve un cœur de village ancien et d'anciennes carrières, dans un cadre résidentiel paisible au bord de la Seine.",
      "Du vieux village aux abords de la Seine, nous positionnons chaque bien auprès d'une clientèle familiale et affaires, proche de La Défense, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : vieux village, bords de Seine, Les Alouettes",
      "Accès : RER A (Houilles–Carrières-sur-Seine à proximité), bords de Seine",
      "Clientèle : familles, cadres de La Défense, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Carri%C3%A8res-sur-Seine",
    wikiAnchor: "Carrières-sur-Seine, dans les Yvelines"
  },
  "chatou": {
    image:"images/villes/chatou.jpg", imageAlt:"Place Sainte-Marie à Chatou, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Chatou
    lead: "Conciergerie courte durée à Chatou : l'île des Impressionnistes et un cadre résidentiel prisé sur la Seine.",
    metaDescription: "Gestion locative courte durée à Chatou (78) : île des Impressionnistes, Maison Fournaise, RER A direct. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Berceau de l'impressionnisme avec son île et la Maison Fournaise, Chatou allie patrimoine culturel et cadre résidentiel recherché, directement reliée à Paris et à La Défense par le RER A.",
      "Des bords de Seine au centre, nous valorisons chaque bien auprès d'une clientèle culturelle, familiale et affaires, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : île des Impressionnistes, centre, Les Lançons",
      "Accès : RER A (Chatou–Croissy)",
      "Clientèle : tourisme culturel, familles, cadres de La Défense"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Chatou",
    wikiAnchor: "Chatou, dans les Yvelines"
  },
  "conflans-sainte-honorine": {
    image:"images/villes/conflans-sainte-honorine.jpg", imageAlt:"Promenade François-Mitterrand sur les bords de Seine à Conflans-Sainte-Honorine, conciergerie et gestion locative courte durée (78)", imageCredit:"Pierre Poschadel / Wikimedia Commons (CC BY-SA 4.0)",  // Conflans-Sainte-Honorine
    lead: "Conciergerie courte durée à Conflans-Sainte-Honorine : capitale de la batellerie au confluent de la Seine et de l'Oise.",
    metaDescription: "Gestion locative courte durée à Conflans-Sainte-Honorine (78) : confluent Seine-Oise, ville de la batellerie, RER A et Transilien. Estimation gratuite.",
    paragraphes: [
      "Surnommée la capitale de la batellerie, Conflans-Sainte-Honorine s'étend au confluent de la Seine et de l'Oise, avec un centre ancien perché et un patrimoine fluvial unique.",
      "Des quais au centre historique, nous valorisons chaque bien auprès d'une clientèle touristique et affaires, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre ancien, bords de Seine, Chennevières",
      "Accès : RER A (Conflans–Fin d'Oise), Transilien J (Conflans-Sainte-Honorine)",
      "Clientèle : tourisme fluvial, voyageurs d'affaires, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Conflans-Sainte-Honorine",
    wikiAnchor: "Conflans-Sainte-Honorine, dans les Yvelines"
  },
  "croissy-sur-seine": {
    image:"images/villes/croissy-sur-seine.jpg", imageAlt:"Voie cyclable avenue de Verdun à Croissy-sur-Seine, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Croissy-sur-Seine
    lead: "Gestion locative courte durée à Croissy-sur-Seine : ville résidentielle verte de la boucle de Chatou.",
    metaDescription: "Conciergerie courte durée à Croissy-sur-Seine (78) : Grenouillère impressionniste, bords de Seine, RER A direct. Estimation gratuite.",
    paragraphes: [
      "Dans la boucle de la Seine près de Chatou, Croissy-sur-Seine évoque la Grenouillère chère aux impressionnistes et offre un cadre résidentiel calme et verdoyant, directement relié par le RER A.",
      "Des bords de Seine au centre, nous positionnons chaque bien auprès d'une clientèle familiale et affaires proche de La Défense, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre, bords de Seine, Chataigneraie",
      "Accès : RER A (Chatou–Croissy)",
      "Clientèle : familles, cadres de La Défense, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Croissy-sur-Seine",
    wikiAnchor: "Croissy-sur-Seine, dans les Yvelines"
  },
  "guyancourt": {
    image:"images/villes/guyancourt.jpg", imageAlt:"Place des Alpes à Guyancourt, conciergerie et gestion locative courte durée (78)", imageCredit:"Lionel Allorge / Wikimedia Commons (CC BY-SA 3.0)",  // Guyancourt
    lead: "Conciergerie courte durée à Guyancourt : pôle économique majeur de Saint-Quentin-en-Yvelines.",
    metaDescription: "Gestion locative courte durée à Guyancourt (78) : Technocentre, golf national, demande affaires soutenue à Saint-Quentin-en-Yvelines. Estimation gratuite.",
    paragraphes: [
      "Au cœur de Saint-Quentin-en-Yvelines, Guyancourt accueille de grands employeurs, dont le Technocentre, et le Golf national, hôte de compétitions internationales, ce qui génère une forte demande affaires.",
      "Des quartiers d'activité au village historique, nous positionnons chaque bien pour capter cette clientèle professionnelle et événementielle, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : Villaroy, Europe, le Village, Technocentre",
      "Accès : Transilien N/U et RER C à Saint-Quentin-en-Yvelines à proximité, Golf national",
      "Clientèle : voyageurs d'affaires, missions longue durée, public événementiel"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Guyancourt",
    wikiAnchor: "Guyancourt, dans les Yvelines"
  },
  "houilles": {
    image:"images/villes/houilles.jpg", imageAlt:"Boulevard Henri Barbusse à Houilles, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Houilles
    lead: "Gestion locative courte durée à Houilles : ville résidentielle dynamique bien reliée à Paris et La Défense.",
    metaDescription: "Conciergerie courte durée à Houilles (78) : centre commerçant vivant, RER A et Transilien, proximité La Défense. Estimation gratuite.",
    paragraphes: [
      "Ville résidentielle au centre commerçant animé, Houilles bénéficie d'une excellente desserte par le RER A et le Transilien, qui la relient rapidement à Paris et à La Défense.",
      "Du centre autour de la gare aux quartiers pavillonnaires, nous valorisons chaque bien auprès d'une clientèle familiale et affaires, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre (gare), Réaumur, Champ Borgnis",
      "Accès : RER A et Transilien J/L (Houilles–Carrières-sur-Seine)",
      "Clientèle : familles, cadres de La Défense, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Houilles",
    wikiAnchor: "Houilles, dans les Yvelines"
  },
  "jouy-en-josas": {
    image:"images/villes/jouy-en-josas.jpg", imageAlt:"Gare de Jouy-en-Josas, conciergerie et gestion locative courte durée (78)", imageCredit:"VVVCFFrance / Wikimedia Commons (CC BY-SA 4.0)",  // Jouy-en-Josas
    lead: "Conciergerie courte durée à Jouy-en-Josas : village de la vallée de la Bièvre, berceau de la toile de Jouy et campus de renom.",
    metaDescription: "Gestion locative courte durée à Jouy-en-Josas (78) : toile de Jouy, campus HEC, vallée de la Bièvre. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Berceau de la célèbre toile de Jouy, Jouy-en-Josas est un village verdoyant de la vallée de la Bièvre, qui accueille le campus d'HEC Paris et plusieurs centres de recherche.",
      "Du centre-village aux abords du campus, nous positionnons chaque bien auprès d'une clientèle académique, affaires et de séjours nature, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre-village, Les Metz, abords du campus HEC",
      "Accès : Transilien C (Petit Jouy–Les Loges, Jouy-en-Josas), vallée de la Bièvre",
      "Clientèle : public académique et corporate, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Jouy-en-Josas",
    wikiAnchor: "Jouy-en-Josas, dans les Yvelines"
  },
  "la-celle-saint-cloud": {
    image:"images/villes/la-celle-saint-cloud.jpg", imageAlt:"Avenue de la Jonchère à La Celle-Saint-Cloud, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // La Celle-Saint-Cloud
    lead: "Gestion locative courte durée à La Celle-Saint-Cloud : ville résidentielle verte entre forêts et coteaux de l'ouest parisien.",
    metaDescription: "Conciergerie courte durée à La Celle-Saint-Cloud (78) : château, forêt de Fausses-Reposes, Transilien L direct. Estimation gratuite.",
    paragraphes: [
      "Largement boisée, La Celle-Saint-Cloud offre un cadre résidentiel calme entre la forêt de Fausses-Reposes et les coteaux, avec son château et un patrimoine préservé.",
      "Du quartier Beauregard au centre, nous valorisons chaque bien auprès d'une clientèle familiale et affaires, proche de Versailles et de La Défense, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre, Beauregard, Le Petit-Beauregard",
      "Accès : Transilien L (La Celle-Saint-Cloud) vers Saint-Lazare et La Défense",
      "Clientèle : familles, voyageurs d'affaires, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/La_Celle-Saint-Cloud",
    wikiAnchor: "La Celle-Saint-Cloud, dans les Yvelines"
  },
  "le-chesnay-rocquencourt": {
    image:"images/villes/le-chesnay-rocquencourt.jpg", imageAlt:"Maison en meulière avenue de Bellevue au Chesnay-Rocquencourt, conciergerie et gestion locative courte durée (78)", imageCredit:"Lionel Allorge / Wikimedia Commons (CC BY-SA 3.0)",  // Le Chesnay-Rocquencourt
    lead: "Conciergerie courte durée au Chesnay-Rocquencourt : ville résidentielle et commerçante aux portes de Versailles.",
    metaDescription: "Gestion locative courte durée au Chesnay-Rocquencourt (78) : aux portes de Versailles, pôle commercial Parly 2, hôpital Mignot. Estimation gratuite.",
    paragraphes: [
      "Immédiatement voisine de Versailles, la commune nouvelle du Chesnay-Rocquencourt associe un important pôle commercial, le centre Parly 2, et un cadre résidentiel recherché proche du domaine national.",
      "Des abords de Parly 2 au centre, nous positionnons chaque bien auprès d'une clientèle affaires, médicale et touristique liée à Versailles, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre, Parly 2, Rocquencourt, abords de l'hôpital Mignot",
      "Accès : bus vers Versailles-Rive-Droite (Transilien L), proximité A13",
      "Clientèle : tourisme versaillais, voyageurs d'affaires, accompagnants hospitaliers"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Le_Chesnay-Rocquencourt",
    wikiAnchor: "Le Chesnay-Rocquencourt, dans les Yvelines"
  },
  "le-pecq": {
    image:"images/villes/le-pecq.jpg", imageAlt:"Le Pecq vu depuis les bords de Seine, au pied de Saint-Germain-en-Laye, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Le Pecq
    lead: "Gestion locative courte durée au Pecq : ville des bords de Seine au pied de Saint-Germain-en-Laye.",
    metaDescription: "Conciergerie courte durée au Pecq (78) : bords de Seine, RER A, au pied de Saint-Germain-en-Laye. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Étendue le long de la Seine au pied du coteau de Saint-Germain-en-Laye, Le Pecq offre un cadre résidentiel agréable avec des berges aménagées et une desserte directe par le RER A.",
      "Des quais au quartier du Mérantais, nous valorisons chaque bien auprès d'une clientèle familiale et affaires, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre, bords de Seine, Canada, Mérantais",
      "Accès : RER A (Le Pecq, Saint-Germain-en-Laye à proximité)",
      "Clientèle : familles, cadres de La Défense, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Le_Pecq",
    wikiAnchor: "Le Pecq, dans les Yvelines"
  },
  "le-vesinet": {
    image:"images/villes/le-vesinet.jpg", imageAlt:"Avenue Maurice Berteaux au Vésinet, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Le Vésinet
    lead: "Conciergerie courte durée au Vésinet : ville-parc d'exception aux lacs et rivières, joyau résidentiel de l'ouest parisien.",
    metaDescription: "Gestion locative courte durée au Vésinet (78) : ville-parc classée, lacs et villas, RER A direct. Estimation gratuite de vos revenus locatifs.",
    paragraphes: [
      "Conçue au XIXe siècle comme une ville-parc, Le Vésinet déroule lacs, rivières artificielles et villas cossues dans un cadre paysager unique en Île-de-France, directement relié par le RER A.",
      "Des abords des lacs au centre, nous valorisons chaque bien auprès d'une clientèle premium et internationale en quête d'un cadre rare, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : Centre, Les Ibis, Pont de Chatou, abords des lacs",
      "Accès : RER A (Le Vésinet–Centre, Le Vésinet–Le Pecq)",
      "Clientèle : séjours premium, clientèle internationale, cadres de La Défense"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Le_V%C3%A9sinet",
    wikiAnchor: "Le Vésinet, dans les Yvelines"
  },
  "louveciennes": {
    image:"images/villes/louveciennes.jpg", imageAlt:"Côte du Cœur Volant à Louveciennes, conciergerie et gestion locative courte durée (78)", imageCredit:"Wolrfam / Wikimedia Commons (CC BY-SA 4.0)",  // Louveciennes
    lead: "Gestion locative courte durée à Louveciennes : village résidentiel chargé d'histoire royale et impressionniste.",
    metaDescription: "Conciergerie courte durée à Louveciennes (78) : aqueduc de Marly, châteaux, cadre résidentiel prisé sur les coteaux. Estimation gratuite.",
    paragraphes: [
      "Chargée d'histoire avec l'aqueduc de Marly et ses châteaux, Louveciennes a inspiré de nombreux peintres impressionnistes et conserve un cadre résidentiel rare sur les coteaux dominant la Seine.",
      "Du centre-village aux abords des parcs, nous valorisons chaque bien auprès d'une clientèle premium et culturelle, avec un accueil soigné et une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre-village, côteaux, Voisins",
      "Accès : Transilien L (Louveciennes) vers Saint-Lazare et La Défense",
      "Clientèle : séjours premium, tourisme culturel, familles"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Louveciennes",
    wikiAnchor: "Louveciennes, dans les Yvelines"
  },
  "maisons-laffitte": {
    image:"images/villes/maisons-laffitte.jpg", imageAlt:"Château de Maisons-Laffitte, œuvre de François Mansart, conciergerie et gestion locative courte durée (78)", imageCredit:"Moonik / Wikimedia Commons (CC BY-SA 3.0)",  // Maisons-Laffitte
    lead: "Gestion locative courte durée à Maisons-Laffitte : la cité du cheval, parc résidentiel d'exception au bord de Seine.",
    metaDescription: "Conciergerie courte durée à Maisons-Laffitte (78) : hippodrome, château de Mansart et parc résidentiel prisé, RER A. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Réputée pour son hippodrome et son centre d'entraînement équestre, Maisons-Laffitte séduit par son parc résidentiel arboré dessiné autour du château de François Mansart, en bord de Seine.",
      "Ce cadre rare, à courte distance de Paris par le RER A, attire une clientèle de séjours premium et événementiels que nous valorisons par une mise en marché soignée."
    ],
    points: [
      "Quartiers porteurs : le Parc, centre-ville, bords de Seine",
      "Accès : RER A (Maisons-Laffitte), hippodrome et forêt",
      "Clientèle : séjours premium, événements hippiques, familles"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Maisons-Laffitte",
    wikiAnchor: "Maisons-Laffitte, dans les Yvelines"
  },
  "marly-le-roi": {
    image:"images/villes/marly-le-roi.jpg", imageAlt:"Place du Général de Gaulle à Marly-le-Roi, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Marly-le-Roi
    lead: "Conciergerie courte durée à Marly-le-Roi : ville royale au cœur du domaine et de la forêt de Marly.",
    metaDescription: "Gestion locative courte durée à Marly-le-Roi (78) : domaine royal, abreuvoir, forêt de Marly, Transilien L. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Ancienne résidence de Louis XIV, Marly-le-Roi conserve son parc royal, son abreuvoir célèbre et la vaste forêt domaniale de Marly, dans un cadre résidentiel chargé d'histoire.",
      "Du vieux village aux abords du parc, nous positionnons chaque bien auprès d'une clientèle touristique et familiale, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : vieux village, Montval, abords du parc",
      "Accès : Transilien L (Marly-le-Roi) vers Saint-Lazare et La Défense, forêt de Marly",
      "Clientèle : tourisme patrimonial, familles, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Marly-le-Roi",
    wikiAnchor: "Marly-le-Roi, dans les Yvelines"
  },
  "montesson": {
    image:"images/villes/montesson.jpg", imageAlt:"Place de l'Église à Montesson, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Montesson
    lead: "Gestion locative courte durée à Montesson : ville maraîchère et résidentielle de la boucle de la Seine.",
    metaDescription: "Conciergerie courte durée à Montesson (78) : plaine maraîchère, cadre résidentiel, proximité RER A et La Défense. Estimation gratuite.",
    paragraphes: [
      "Connue pour sa plaine maraîchère préservée dans la boucle de Montesson, la ville conjugue espaces cultivés et quartiers résidentiels, à proximité immédiate de La Défense.",
      "Du centre aux quartiers pavillonnaires, nous valorisons chaque bien auprès d'une clientèle familiale et affaires, avec un accueil soigné et une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre, La Borde, Les Rabaux",
      "Accès : RER A (Sartrouville, Houilles à proximité), proximité La Défense",
      "Clientèle : familles, cadres de La Défense, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Montesson",
    wikiAnchor: "Montesson, dans les Yvelines"
  },
  "montigny-le-bretonneux": {
    image:"images/villes/montigny-le-bretonneux.jpg", imageAlt:"Canal et quai Fernand-Pouillon à Montigny-le-Bretonneux, conciergerie et gestion locative courte durée (78)", imageCredit:"VVVCFFrance / Wikimedia Commons (CC BY-SA 4.0)",  // Montigny-le-Bretonneux
    lead: "Conciergerie courte durée à Montigny-le-Bretonneux : cœur urbain et économique de Saint-Quentin-en-Yvelines.",
    metaDescription: "Gestion locative courte durée à Montigny-le-Bretonneux (78) : gare de Saint-Quentin-en-Yvelines, pôle d'affaires, base de loisirs. Estimation gratuite.",
    paragraphes: [
      "Cœur de l'agglomération de Saint-Quentin-en-Yvelines, Montigny-le-Bretonneux concentre la principale gare, de nombreux sièges d'entreprises et la base de loisirs, ce qui soutient une forte demande affaires.",
      "Du quartier de la gare aux abords de l'étang, nous positionnons chaque bien pour capter cette clientèle professionnelle et de loisirs, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : Saint-Quentin (gare), Le Manet, les Prés",
      "Accès : Transilien N/U et RER C (Saint-Quentin-en-Yvelines), base de loisirs",
      "Clientèle : voyageurs d'affaires, missions longue durée, séjours loisirs"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Montigny-le-Bretonneux",
    wikiAnchor: "Montigny-le-Bretonneux, dans les Yvelines"
  },
  "poissy": {
    image:"images/villes/poissy.jpg", imageAlt:"Pont de Poissy sur la Seine, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Poissy
    lead: "Gestion locative courte durée à Poissy : ville d'art et d'industrie sur les bords de Seine, du prieuré à la Villa Savoye.",
    metaDescription: "Conciergerie courte durée à Poissy (78) : Villa Savoye, collégiale, pôle automobile, RER A et Eole. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Riche d'un patrimoine allant de la collégiale médiévale à la Villa Savoye de Le Corbusier, Poissy est aussi un pôle économique majeur, marqué par son site automobile, sur les bords de Seine.",
      "Du centre historique aux abords du parc Meissonier, nous positionnons chaque bien pour une clientèle affaires, industrielle et touristique, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre historique, Beauregard, Saint-Exupéry",
      "Accès : RER A (Poissy) et RER E (Eole), bords de Seine",
      "Clientèle : voyageurs d'affaires, missions industrielles, tourisme culturel"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Poissy",
    wikiAnchor: "Poissy, dans les Yvelines"
  },
  "saint-cyr-l-ecole": {
    image:"images/villes/saint-cyr-l-ecole.jpg", imageAlt:"Lycée militaire de Saint-Cyr, ancienne Maison royale, à Saint-Cyr-l'École, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Saint-Cyr-l'École
    lead: "Conciergerie courte durée à Saint-Cyr-l'École : ville d'histoire militaire aux portes de Versailles.",
    metaDescription: "Gestion locative courte durée à Saint-Cyr-l'École (78) : héritage de la Maison royale et de l'école militaire, proximité Versailles, Transilien. Estimation gratuite.",
    paragraphes: [
      "Marquée par la Maison royale fondée par Madame de Maintenon puis la célèbre école militaire, Saint-Cyr-l'École jouxte Versailles et bénéficie d'une bonne desserte ferroviaire.",
      "Du centre rénové aux abords de l'aérodrome, nous valorisons chaque bien auprès d'une clientèle affaires et touristique liée à Versailles, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre (gare), Épicerie, Charles Renard",
      "Accès : Transilien N/U (Saint-Cyr) et RER C, proximité Versailles",
      "Clientèle : tourisme versaillais, voyageurs d'affaires, familles"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Saint-Cyr-l%27%C3%89cole",
    wikiAnchor: "Saint-Cyr-l'École, dans les Yvelines"
  },
  "saint-germain-en-laye": {
    image:"images/villes/saint-germain-en-laye.jpg", imageAlt:"Place du Marché Neuf à Saint-Germain-en-Laye, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Saint-Germain-en-Laye
    lead: "Conciergerie courte durée à Saint-Germain-en-Laye : cadre résidentiel d'exception et haut lieu patrimonial au terminus du RER A.",
    metaDescription: "Gestion locative courte durée à Saint-Germain-en-Laye (78) : château, forêt domaniale et tourisme patrimonial. Estimation gratuite.",
    paragraphes: [
      "Berceau de Louis XIV, Saint-Germain-en-Laye associe un patrimoine remarquable — château, Musée d'archéologie nationale, terrasse Le Nôtre et vaste forêt domaniale — à un cadre résidentiel parmi les plus prisés de l'ouest francilien.",
      "Cette double attractivité, touristique et résidentielle, soutient une demande premium en courte et moyenne durée que nous captons par un positionnement soigné et une tarification calée sur la saisonnalité."
    ],
    points: [
      "Quartiers porteurs : centre historique, Bel-Air–Schnapper, abords du château",
      "Accès : RER A (terminus Saint-Germain-en-Laye), forêt domaniale",
      "Clientèle : tourisme patrimonial, séjours familiaux et résidentiels"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Saint-Germain-en-Laye",
    wikiAnchor: "Saint-Germain-en-Laye, dans les Yvelines"
  },
  "sartrouville": {
    image:"images/villes/sartrouville.jpg", imageAlt:"Quai du Pecq sur les bords de Seine à Sartrouville, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Sartrouville
    lead: "Gestion locative courte durée à Sartrouville : grande ville des bords de Seine, bien reliée à Paris et La Défense.",
    metaDescription: "Conciergerie courte durée à Sartrouville (78) : bords de Seine, RER A direct, pôle résidentiel dynamique. Estimation gratuite de vos revenus.",
    paragraphes: [
      "L'une des plus grandes villes des Yvelines, Sartrouville s'étire le long de la Seine et bénéficie d'une desserte directe par le RER A, qui la relie rapidement à La Défense et à Paris.",
      "Du centre autour de la gare aux quartiers des bords de Seine, nous positionnons chaque bien auprès d'une clientèle familiale et affaires, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre (gare), Les Indes, bords de Seine, Plateau",
      "Accès : RER A (Sartrouville), Transilien J/L",
      "Clientèle : familles, cadres de La Défense, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Sartrouville",
    wikiAnchor: "Sartrouville, dans les Yvelines"
  },
  "velizy-villacoublay": {
    image:"images/villes/velizy-villacoublay.jpg", imageAlt:"Nouvelle mairie de Vélizy-Villacoublay, conciergerie et gestion locative courte durée (78)", imageCredit:"besopha / Wikimedia Commons (CC BY-SA 2.0)",  // Vélizy-Villacoublay
    lead: "Conciergerie courte durée à Vélizy-Villacoublay : grand pôle économique et technologique du sud-ouest francilien.",
    metaDescription: "Gestion locative courte durée à Vélizy-Villacoublay (78) : Vélizy 2, pôle aéronautique et tech, tramway T6. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Pôle économique majeur, Vélizy-Villacoublay concentre de grands employeurs de l'aéronautique et de la tech, ainsi que le centre commercial Vélizy 2, source d'une demande affaires soutenue toute l'année.",
      "Des parcs d'activité au quartier Louvois, nous positionnons chaque bien pour capter cette clientèle professionnelle et de missions, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : Louvois, Mozart, parcs d'activité, abords de Vélizy 2",
      "Accès : tramway T6 (Vélizy 2, Robert Wagner), proximité A86",
      "Clientèle : voyageurs d'affaires, missions longue durée, pôle tech et aéronautique"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/V%C3%A9lizy-Villacoublay",
    wikiAnchor: "Vélizy-Villacoublay, dans les Yvelines"
  },
  "versailles": {
    image:"images/villes/versailles.jpg", imageAlt:"Vue aérienne du château de Versailles, conciergerie et gestion locative courte durée (78)", imageCredit:"ToucanWings / Wikimedia Commons (CC BY-SA 3.0)",
      "lead": "Confiez votre bien à Versailles à une conciergerie courte durée spécialisée : estimation locale, mise en marché complète et accueil voyageurs au standard hôtelier.",
      "metaDescription": "Conciergerie & gestion locative courte durée à Versailles (78) : forte demande touristique et corporate, mise en marché clé en main, revenus optimisés. Estimation gratuite.",
      "paragraphes": [
          "Portée par le Château et son rayonnement international, Versailles attire une clientèle touristique régulière toute l'année, complétée par une demande affaires liée aux pôles tertiaires de l'ouest francilien.",
          "Nous positionnons chaque bien selon son quartier — du centre Notre-Dame aux abords de Versailles-Chantiers — avec une tarification dynamique calée sur la saisonnalité et les événements locaux, pour un taux d'occupation élevé sans contrainte pour le propriétaire."
      ],
      "points": [
          "Quartiers porteurs : Notre-Dame, Saint-Louis, Montreuil, Chantiers",
          "Accès : gares Versailles-Château Rive Gauche, Chantiers et Rive Droite (RER C, Transilien)",
          "Clientèle : tourisme patrimonial international + séjours affaires"
      ],
      "wikipedia": "https://fr.wikipedia.org/wiki/Versailles",
      "wikiAnchor": "Versailles, préfecture des Yvelines"
  },

  "viroflay": {
    image:"images/villes/viroflay.jpg", imageAlt:"Carrefour de la Fontaine à Viroflay, conciergerie et gestion locative courte durée (78)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Viroflay
    lead: "Gestion locative courte durée à Viroflay : ville résidentielle vallonnée entre Versailles et Paris.",
    metaDescription: "Conciergerie courte durée à Viroflay (78) : entre forêts de Meudon et de Fausses-Reposes, doubles gares, proximité Versailles. Estimation gratuite.",
    paragraphes: [
      "Nichée entre les forêts de Meudon et de Fausses-Reposes, Viroflay offre un cadre résidentiel vallonné à deux pas de Versailles, avec une excellente desserte par ses deux gares.",
      "Du quartier Rive-Droite à Rive-Gauche, nous valorisons chaque bien auprès d'une clientèle familiale et affaires, proche de Versailles et de Paris, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : Viroflay-Rive-Droite, Viroflay-Rive-Gauche, les Arcades",
      "Accès : Transilien U et N (Viroflay-Rive-Droite et Rive-Gauche), tramway T6",
      "Clientèle : familles, tourisme versaillais, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Viroflay",
    wikiAnchor: "Viroflay, dans les Yvelines"
  },

  /* ===== Hauts-de-Seine · 92 ===== */
  "antony": {
    image:"images/villes/antony.jpg", imageAlt:"Avenue de la Division Leclerc à Antony, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Antony
    lead: "Conciergerie courte durée à Antony : pôle résidentiel et étudiant du sud des Hauts-de-Seine, sur l'axe Paris–Massy–Orly.",
    metaDescription: "Gestion locative courte durée à Antony (92) : RER B, proximité Orly et pôle de Massy, demande étudiante et affaires. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Plus grande commune du sud des Hauts-de-Seine, Antony bénéficie d'une position stratégique entre Paris, l'aéroport d'Orly et le pôle scientifique de Massy, qui alimente une demande mixte étudiante, affaires et familiale.",
      "Du quartier résidentiel du parc de Sceaux voisin au centre autour de la Croix de Berny, nous adaptons le positionnement de chaque bien pour une occupation régulière toute l'année."
    ],
    points: [
      "Quartiers porteurs : centre-ville, Croix de Berny, Pajeaud",
      "Accès : RER B (Antony, La Croix de Berny), Orlyval vers Orly, proximité Massy TGV",
      "Clientèle : voyageurs d'affaires, parents d'étudiants, transit aéroportuaire"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Antony_(Hauts-de-Seine)",
    wikiAnchor: "Antony, dans les Hauts-de-Seine"
  },
  "asnieres-sur-seine": {
    image:"images/villes/asnieres-sur-seine.jpg", imageAlt:"Château d'Asnières à Asnières-sur-Seine, conciergerie et gestion locative courte durée (92)", imageCredit:"",  // Asnières-sur-Seine
    lead: "Gestion locative courte durée à Asnières-sur-Seine : ville en bord de Seine au nord-ouest immédiat de Paris.",
    metaDescription: "Conciergerie courte durée à Asnières-sur-Seine (92) : bords de Seine, quartier des Généraux, accès rapide Paris Saint-Lazare. Estimation gratuite.",
    paragraphes: [
      "Aux portes du nord-ouest parisien, Asnières-sur-Seine séduit par ses berges aménagées et son quartier pavillonnaire des Généraux, à quelques minutes de Paris Saint-Lazare.",
      "Cette proximité immédiate de la capitale soutient une demande affaires et touristique que nous captons par une mise en marché complète et un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre, Les Généraux, bords de Seine, Agriculteurs",
      "Accès : Transilien J/L (Asnières-sur-Seine) vers Saint-Lazare, métro 13 (Gabriel Péri à proximité)",
      "Clientèle : voyageurs d'affaires et séjours courts proches de Paris"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Asni%C3%A8res-sur-Seine",
    wikiAnchor: "Asnières-sur-Seine, dans les Hauts-de-Seine"
  },
  "bagneux": {
    image:"images/villes/bagneux.jpg", imageAlt:"Rue résidentielle pavillonnaire à Bagneux, conciergerie et gestion locative courte durée (92)", imageCredit:"GFreihalter / Wikimedia Commons (CC BY-SA 4.0)",  // Bagneux
    lead: "Conciergerie courte durée à Bagneux : ville en pleine mutation du sud des Hauts-de-Seine, nouveau nœud du Grand Paris Express.",
    metaDescription: "Gestion locative courte durée à Bagneux (92) : métro 4 et lignes 15 du Grand Paris Express, demande affaires en hausse. Estimation gratuite.",
    paragraphes: [
      "Aux portes sud de Paris, Bagneux connaît une transformation profonde avec l'arrivée du métro 4 et de la ligne 15 du Grand Paris Express, qui en font un nouveau pôle de connexion du sud francilien.",
      "Des quartiers rénovés autour des nouvelles gares au centre historique, nous positionnons chaque bien pour capter une demande affaires en croissance, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre, abords des nouvelles gares, Les Mathurins",
      "Accès : métro 4 (Bagneux–Lucie Aubrac), future ligne 15 Sud, RER B à proximité",
      "Clientèle : voyageurs d'affaires, séjours connectés au Grand Paris"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Bagneux_(Hauts-de-Seine)",
    wikiAnchor: "Bagneux, dans les Hauts-de-Seine"
  },
  "bois-colombes": {
    image:"images/villes/bois-colombes.jpg", imageAlt:"Place Costes et Bellonte à Bois-Colombes, conciergerie et gestion locative courte durée (92)", imageCredit:"JackyM59 / Wikimedia Commons (CC BY-SA 4.0)",  // Bois-Colombes
    lead: "Gestion locative courte durée à Bois-Colombes : ville résidentielle de charme au nord-ouest de Paris.",
    metaDescription: "Conciergerie courte durée à Bois-Colombes (92) : maisons de ville, accès direct Paris Saint-Lazare, proximité La Défense. Estimation gratuite.",
    paragraphes: [
      "Réputée pour ses rues pavillonnaires et ses maisons de ville Art déco, Bois-Colombes offre un cadre résidentiel calme à quelques minutes de Paris Saint-Lazare et de La Défense.",
      "Du quartier des Bruyères au centre proche de la gare, nous mettons en marché chaque bien auprès d'une clientèle familiale et affaires, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre (gare), Les Bruyères, Petit-Bois",
      "Accès : Transilien J/L (Bois-Colombes) vers Saint-Lazare, proximité La Défense",
      "Clientèle : familles, voyageurs d'affaires, cadres de La Défense"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Bois-Colombes",
    wikiAnchor: "Bois-Colombes, dans les Hauts-de-Seine"
  },
  "boulogne-billancourt": {
    image:"images/villes/boulogne-billancourt.jpg", imageAlt:"Bords de Seine et coteaux de Boulogne-Billancourt, conciergerie et gestion locative courte durée (92)", imageCredit:"JackyM59 / Wikimedia Commons (CC BY-SA 4.0)",  // Boulogne-Billancourt
    lead: "Conciergerie et gestion locative courte durée à Boulogne-Billancourt : première ville des Hauts-de-Seine, aux portes de Paris, gérée de A à Z.",
    metaDescription: "Gestion locative courte durée à Boulogne-Billancourt (92) : forte demande corporate et médias, quartiers prisés du Trapèze à Marcel Sembat. Estimation gratuite.",
    paragraphes: [
      "Ville la plus peuplée des Hauts-de-Seine, Boulogne-Billancourt borde la Seine à l'ouest immédiat de Paris. Pôle majeur de l'audiovisuel et du tertiaire, elle génère une demande corporate continue, complétée par les visiteurs du Trapèze et de l'île Seguin.",
      "Des immeubles Art déco du centre-ville aux résidences récentes de l'éco-quartier du Trapèze, nous adaptons le positionnement de chaque bien et une tarification dynamique pour un taux d'occupation élevé toute l'année."
    ],
    points: [
      "Quartiers porteurs : Le Trapèze, Billancourt, Centre-ville (Marcel Sembat), Les Princes",
      "Accès : métro ligne 9 (Marcel Sembat, Billancourt, Pont de Sèvres) et ligne 10 (Boulogne)",
      "Clientèle : cadres des médias et du tertiaire, séjours affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Boulogne-Billancourt",
    wikiAnchor: "Boulogne-Billancourt, dans les Hauts-de-Seine"
  },
  "bourg-la-reine": {
    image:"images/villes/bourg-la-reine.jpg", imageAlt:"Rue Bièvre à Bourg-la-Reine, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Bourg-la-Reine
    lead: "Gestion locative courte durée à Bourg-la-Reine : ville résidentielle prisée sur l'axe sud du RER B.",
    metaDescription: "Conciergerie courte durée à Bourg-la-Reine (92) : cadre résidentiel recherché, RER B, proximité parc de Sceaux. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Petite ville résidentielle appréciée pour son cadre de vie et ses maisons de caractère, Bourg-la-Reine bénéficie d'une desserte directe par le RER B et de la proximité du parc de Sceaux.",
      "Du centre commerçant aux quartiers pavillonnaires, nous valorisons chaque bien auprès d'une clientèle familiale et affaires, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre (gare), L'Yser, Les Bas-Coquarts",
      "Accès : RER B (Bourg-la-Reine), proximité parc de Sceaux",
      "Clientèle : familles, parents d'étudiants, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Bourg-la-Reine",
    wikiAnchor: "Bourg-la-Reine, dans les Hauts-de-Seine"
  },
  "chatenay-malabry": {
    image:"images/villes/chatenay-malabry.jpg", imageAlt:"Place Lavallée à Châtenay-Malabry, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Châtenay-Malabry
    lead: "Conciergerie courte durée à Châtenay-Malabry : ville verte du sud des Hauts-de-Seine, entre Vallée-aux-Loups et pôle scientifique.",
    metaDescription: "Gestion locative courte durée à Châtenay-Malabry (92) : parc de la Vallée-aux-Loups, éco-quartier LaVallée, tramway T10. Estimation gratuite.",
    paragraphes: [
      "Largement boisée, Châtenay-Malabry abrite le parc de la Vallée-aux-Loups, chère à Chateaubriand, et accueille le nouvel éco-quartier LaVallée desservi par le tramway T10.",
      "Des abords du parc au centre, nous positionnons chaque bien auprès d'une clientèle familiale et universitaire, proche des grandes écoles, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : Centre, LaVallée, Robinson, Vallée-aux-Loups",
      "Accès : tramway T10 (Châtenay-Malabry), RER B Robinson à proximité",
      "Clientèle : familles, public universitaire, séjours nature"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Ch%C3%A2tenay-Malabry",
    wikiAnchor: "Châtenay-Malabry, dans les Hauts-de-Seine"
  },
  "chatillon": {
    image:"images/villes/chatillon.jpg", imageAlt:"Avenue de Verdun à Châtillon, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Châtillon
    lead: "Gestion locative courte durée à Châtillon : ville résidentielle dynamique du sud parisien, bien reliée par le métro 13.",
    metaDescription: "Conciergerie courte durée à Châtillon (92) : métro 13, tramway T6, demande affaires et résidentielle aux portes sud de Paris. Estimation gratuite.",
    paragraphes: [
      "Aux portes sud de Paris, Châtillon associe quartiers pavillonnaires et programmes récents, avec une desserte renforcée par le métro 13 et le tramway T6.",
      "Du centre autour de la mairie au quartier de la Brière, nous valorisons chaque bien auprès d'une clientèle affaires et familiale, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre (mairie), La Brière, Les Sablons",
      "Accès : métro 13 (Châtillon–Montrouge), tramway T6",
      "Clientèle : voyageurs d'affaires, familles, séjours courts"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Ch%C3%A2tillon_(Hauts-de-Seine)",
    wikiAnchor: "Châtillon, dans les Hauts-de-Seine"
  },
  "chaville": {
    image:"images/villes/chaville.jpg", imageAlt:"Rue Anatole France à Chaville, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Chaville
    lead: "Conciergerie courte durée à Chaville : ville boisée entre les forêts de Meudon et de Fausses-Reposes.",
    metaDescription: "Gestion locative courte durée à Chaville (92) : entre deux forêts domaniales, Transilien N/U vers Montparnasse et La Défense. Estimation gratuite.",
    paragraphes: [
      "Nichée entre les forêts de Meudon et de Fausses-Reposes, Chaville offre un cadre résidentiel verdoyant tout en étant directement reliée à Montparnasse et à La Défense.",
      "Du quartier de l'Atrium au centre, nous mettons en marché chaque bien auprès d'une clientèle familiale et affaires en quête de calme proche de Paris."
    ],
    points: [
      "Quartiers porteurs : Chaville-Rive-Droite, Chaville-Rive-Gauche, l'Atrium",
      "Accès : Transilien N (Chaville-Rive-Gauche) et U (Chaville-Rive-Droite vers La Défense)",
      "Clientèle : familles, séjours nature, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Chaville",
    wikiAnchor: "Chaville, dans les Hauts-de-Seine"
  },
  "clamart": {
    image:"images/villes/clamart.jpg", imageAlt:"Allée Dora Maar à Clamart, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Clamart
    lead: "Conciergerie courte durée à Clamart : entre forêt domaniale et nouveaux quartiers du sud-ouest parisien.",
    metaDescription: "Gestion locative courte durée à Clamart (92) : forêt de Meudon, éco-quartier du Panorama, ligne 15 à venir. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Adossée à la forêt domaniale de Meudon, Clamart conjugue cadre verdoyant et dynamique urbaine, portée par l'éco-quartier du Panorama et l'arrivée du Grand Paris Express.",
      "Du Petit-Clamart résidentiel au centre proche de la gare, nous valorisons chaque bien auprès d'une clientèle familiale et affaires avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre (gare), Le Panorama, Petit-Clamart, Jardin Parisien",
      "Accès : Transilien N (Clamart), futur métro 15 Sud, forêt de Meudon",
      "Clientèle : familles, voyageurs d'affaires, séjours nature aux portes de Paris"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Clamart",
    wikiAnchor: "Clamart, dans les Hauts-de-Seine"
  },
  "clichy": {
    image:"images/villes/clichy.jpg", imageAlt:"Allée Gisèle Halimi à Clichy, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Clichy
    lead: "Conciergerie courte durée à Clichy : ville en plein renouveau à la porte nord-ouest de Paris.",
    metaDescription: "Gestion locative courte durée à Clichy (92) : bords de Seine, métro 13 et ligne 14 à venir, demande affaires soutenue. Estimation gratuite.",
    paragraphes: [
      "Aux portes du nord-ouest parisien, Clichy connaît une transformation urbaine marquée, portée par ses bords de Seine réaménagés et l'arrivée prochaine de la ligne 14 du métro.",
      "Du centre autour de la mairie aux quais de Clichy, nous valorisons chaque bien auprès d'une clientèle affaires de plus en plus présente, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre (mairie), Berges de Seine, Entrée de Ville",
      "Accès : métro 13 (Mairie de Clichy), futur prolongement ligne 14, Transilien L (Clichy-Levallois)",
      "Clientèle : voyageurs d'affaires, séjours courts proches de Paris"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Clichy",
    wikiAnchor: "Clichy, dans les Hauts-de-Seine"
  },
  "colombes": {
    image:"images/villes/colombes.jpg", imageAlt:"Boulevard Charles de Gaulle à Colombes, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Colombes
    lead: "Gestion locative courte durée à Colombes : ville sportive et résidentielle du nord-ouest des Hauts-de-Seine.",
    metaDescription: "Conciergerie courte durée à Colombes (92) : stade Yves-du-Manoir, proximité La Défense, demande affaires et événementielle. Estimation gratuite.",
    paragraphes: [
      "Quatrième ville des Hauts-de-Seine, Colombes mêle quartiers pavillonnaires et pôles d'activité, portée par le stade Yves-du-Manoir, site olympique, et la proximité de La Défense.",
      "Des abords de la gare du Stade au centre historique, nous positionnons chaque bien pour capter une demande affaires et événementielle régulière."
    ],
    points: [
      "Quartiers porteurs : centre, Le Stade, Petit-Colombes, Europe",
      "Accès : Transilien J/L (Colombes, Le Stade), proximité La Défense",
      "Clientèle : voyageurs d'affaires, public événementiel et sportif"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Colombes",
    wikiAnchor: "Colombes, dans les Hauts-de-Seine"
  },
  "courbevoie": {
    image:"images/villes/courbevoie.jpg", imageAlt:"Allée Marie Marvingt à Courbevoie, près de La Défense, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Courbevoie
    lead: "Gestion locative courte durée à Courbevoie : commune du quartier d'affaires de La Défense, en bord de Seine.",
    metaDescription: "Conciergerie courte durée à Courbevoie (92) : adossée à La Défense, forte demande corporate, quartiers Bécon et Faubourg de l'Arche. Estimation gratuite.",
    paragraphes: [
      "Intégrée au quartier d'affaires de La Défense, Courbevoie bénéficie d'une demande corporate parmi les plus soutenues de l'ouest parisien, portée par les tours de bureaux et les sièges sociaux voisins.",
      "Du Faubourg de l'Arche au quartier résidentiel de Bécon-les-Bruyères, nous positionnons chaque bien pour capter cette clientèle d'affaires avec un accueil au standard hôtelier."
    ],
    points: [
      "Quartiers porteurs : Faubourg de l'Arche, Bécon-les-Bruyères, centre",
      "Accès : La Défense (RER A, métro 1, Transilien), gare de Bécon-les-Bruyères",
      "Clientèle : cadres et consultants de La Défense, séjours affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Courbevoie",
    wikiAnchor: "Courbevoie, dans les Hauts-de-Seine"
  },
  "fontenay-aux-roses": {
    image:"images/villes/fontenay-aux-roses.jpg", imageAlt:"Place de l'Église à Fontenay-aux-Roses, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Fontenay-aux-Roses
    lead: "Gestion locative courte durée à Fontenay-aux-Roses : ville résidentielle et verte du sud des Hauts-de-Seine.",
    metaDescription: "Conciergerie courte durée à Fontenay-aux-Roses (92) : cadre résidentiel arboré, RER B, proximité des grandes écoles. Estimation gratuite.",
    paragraphes: [
      "Ancienne ville des roses, Fontenay-aux-Roses conserve un caractère résidentiel paisible et verdoyant, à proximité du parc de Sceaux et des grandes écoles du sud parisien.",
      "Du centre commerçant aux Blagis, nous valorisons chaque bien auprès d'une clientèle familiale et universitaire, avec un accueil soigné et une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre (gare), Les Blagis, Scarron",
      "Accès : RER B (Fontenay-aux-Roses), proximité parc de Sceaux",
      "Clientèle : familles, public universitaire, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Fontenay-aux-Roses",
    wikiAnchor: "Fontenay-aux-Roses, dans les Hauts-de-Seine"
  },
  "garches": {
    image:"images/villes/garches.jpg", imageAlt:"Rue Claude Liard à Garches, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Garches
    lead: "Conciergerie courte durée à Garches : ville résidentielle prisée des coteaux de l'ouest parisien.",
    metaDescription: "Gestion locative courte durée à Garches (92) : cadre résidentiel calme, proximité Saint-Cloud et hôpital Raymond-Poincaré, Transilien L. Estimation gratuite.",
    paragraphes: [
      "Sur les hauteurs de l'ouest parisien, Garches séduit par son cadre résidentiel cossu et calme, à proximité du parc de Saint-Cloud et du centre hospitalier Raymond-Poincaré.",
      "Du centre aux quartiers pavillonnaires, nous mettons en marché chaque bien auprès d'une clientèle familiale, médicale et affaires, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre, Le Parc, Vallée-aux-Loups",
      "Accès : Transilien L (Garches–Marnes-la-Coquette) vers Saint-Lazare et La Défense",
      "Clientèle : familles, accompagnants hospitaliers, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Garches",
    wikiAnchor: "Garches, dans les Hauts-de-Seine"
  },
  "gennevilliers": {
    image:"images/villes/gennevilliers.jpg", imageAlt:"Rue d'Ostrowiec à Gennevilliers, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Gennevilliers
    lead: "Gestion locative courte durée à Gennevilliers : pôle portuaire et industriel de la boucle nord de la Seine.",
    metaDescription: "Conciergerie courte durée à Gennevilliers (92) : port autonome, zones d'activités, métro 13 et tramway T1. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Première plateforme portuaire d'Île-de-France, Gennevilliers concentre une intense activité logistique et industrielle dans la boucle nord de la Seine, source d'une demande affaires spécifique.",
      "Des abords du port aux quartiers résidentiels du centre, nous positionnons chaque bien pour capter une clientèle professionnelle et de chantier, avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre (Les Agnettes), Le Luth, abords du port",
      "Accès : métro 13 (Gabriel Péri, Les Agnettes), tramway T1, RER C",
      "Clientèle : voyageurs d'affaires, missions logistiques et industrielles"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Gennevilliers",
    wikiAnchor: "Gennevilliers, dans les Hauts-de-Seine"
  },
  "issy-les-moulineaux": {
    image:"images/villes/issy-les-moulineaux.jpg", imageAlt:"Promenade du Cœur de Ville à Issy-les-Moulineaux, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Issy-les-Moulineaux
    lead: "Gestion locative courte durée à Issy-les-Moulineaux : pôle tech et médias du Val de Seine, aux portes sud-ouest de Paris.",
    metaDescription: "Conciergerie courte durée à Issy-les-Moulineaux (92) : vallée de la communication, sièges tech et médias, demande affaires forte. Estimation gratuite.",
    paragraphes: [
      "Surnommée la vallée de la communication, Issy-les-Moulineaux accueille de nombreux sièges de la tech et des médias le long du Val de Seine, générant un flux constant de voyageurs d'affaires.",
      "De l'île Saint-Germain au centre autour de Corentin Celton, nous mettons en marché chaque bien avec multi-diffusion et accueil hôtelier pour une occupation soutenue."
    ],
    points: [
      "Quartiers porteurs : Val de Seine, Centre (Corentin Celton), Les Épinettes",
      "Accès : métro ligne 12 (Mairie d'Issy, Corentin Celton), RER C, tramway T2",
      "Clientèle : cadres de la tech et des médias, séjours affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Issy-les-Moulineaux",
    wikiAnchor: "Issy-les-Moulineaux, dans les Hauts-de-Seine"
  },
  "la-garenne-colombes": {
    image:"images/villes/la-garenne-colombes.jpg", imageAlt:"Esplanade Jean Navon à La Garenne-Colombes, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // La Garenne-Colombes
    lead: "Conciergerie courte durée à La Garenne-Colombes : ville résidentielle prisée à deux pas de La Défense.",
    metaDescription: "Gestion locative courte durée à La Garenne-Colombes (92) : centre commerçant animé, proximité La Défense, accès Saint-Lazare. Estimation gratuite.",
    paragraphes: [
      "Appréciée pour son centre commerçant vivant et ses rues pavillonnaires, La Garenne-Colombes bénéficie de la proximité immédiate de La Défense, source d'une demande affaires régulière.",
      "Du quartier des Champs-Philippe au centre, nous valorisons chaque bien auprès d'une clientèle de cadres et de familles, avec un accueil au standard hôtelier."
    ],
    points: [
      "Quartiers porteurs : centre (place de Belgique), Champs-Philippe, Les Vallées",
      "Accès : Transilien L (Les Vallées, La Garenne-Colombes), proximité La Défense",
      "Clientèle : cadres de La Défense, familles, séjours affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/La_Garenne-Colombes",
    wikiAnchor: "La Garenne-Colombes, dans les Hauts-de-Seine"
  },
  "le-plessis-robinson": {
    image:"images/villes/le-plessis-robinson.jpg", imageAlt:"Grand-Place du Plessis-Robinson, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Le Plessis-Robinson
    lead: "Gestion locative courte durée au Plessis-Robinson : ville-jardin réinventée du sud des Hauts-de-Seine.",
    metaDescription: "Conciergerie courte durée au Plessis-Robinson (92) : quartier du Coeur de ville, cité-jardin, proximité pôle scientifique. Estimation gratuite.",
    paragraphes: [
      "Célèbre pour sa cité-jardin historique et son centre-ville reconstruit dans un style régionaliste, Le Plessis-Robinson offre un cadre résidentiel verdoyant proche des pôles scientifiques de Saclay et de Velízy.",
      "Du Cœur de ville à la Cité-jardin, nous positionnons chaque bien auprès d'une clientèle familiale et affaires, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : Cœur de ville, Cité-jardin, Le Pierrier",
      "Accès : tramway T6 (Le Plessis-Robinson), proximité RER B Robinson et pôle de Velízy",
      "Clientèle : familles, voyageurs d'affaires des pôles scientifiques"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Le_Plessis-Robinson",
    wikiAnchor: "Le Plessis-Robinson, dans les Hauts-de-Seine"
  },
  "levallois-perret": {
    image:"images/villes/levallois-perret.jpg", imageAlt:"Place du Maréchal Juin à Levallois-Perret, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Levallois-Perret
    lead: "Gestion locative courte durée à Levallois-Perret : ville d'affaires dense aux portes du nord-ouest parisien et de La Défense.",
    metaDescription: "Conciergerie courte durée à Levallois-Perret (92) : sièges d'entreprises, demande affaires soutenue, proximité Paris 17e et La Défense. Estimation gratuite.",
    paragraphes: [
      "Parmi les communes les plus densément peuplées d'Europe, Levallois-Perret concentre de nombreux sièges sociaux et une intense activité tertiaire, source d'une demande affaires régulière tout au long de l'année.",
      "Du Front-de-Seine au centre autour de la mairie, nous valorisons chaque bien auprès d'une clientèle de cadres en mission, avec accueil soigné et gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : Front-de-Seine, Centre (Louise Michel), Eiffel",
      "Accès : métro ligne 3 (Anatole France, Louise Michel, Pont de Levallois–Bécon), Transilien Bécon-les-Bruyères",
      "Clientèle : cadres et consultants en déplacement, proximité La Défense"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Levallois-Perret",
    wikiAnchor: "Levallois-Perret, dans les Hauts-de-Seine"
  },
  "malakoff": {
    image:"images/villes/malakoff.jpg", imageAlt:"Rue Pierre-Valette à Malakoff, conciergerie et gestion locative courte durée (92)", imageCredit:"Thomon / Wikimedia Commons (CC BY-SA 4.0)",  // Malakoff
    lead: "Conciergerie courte durée à Malakoff : ville résidentielle de caractère à la porte sud de Paris.",
    metaDescription: "Gestion locative courte durée à Malakoff (92) : maisons d'artistes, métro 13, ambiance village aux portes de Paris. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Appréciée pour son ambiance village et ses maisons d'artistes, Malakoff jouxte directement Paris et bénéficie d'une desserte rapide par le métro 13, prisee d'une clientèle affaires et culturelle.",
      "Du quartier Barbusse au centre, nous valorisons chaque bien auprès d'une clientèle affaires et de séjours courts, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre (mairie), Barbusse, Stalingrad",
      "Accès : métro 13 (Malakoff–Plateau de Vanves, Malakoff–Rue Étienne Dolet), tramway T3a",
      "Clientèle : voyageurs d'affaires, public culturel, séjours courts"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Malakoff_(Hauts-de-Seine)",
    wikiAnchor: "Malakoff, dans les Hauts-de-Seine"
  },
  "marnes-la-coquette": {
    image:"images/villes/marnes-la-coquette.jpg", imageAlt:"Rue de la Porte Blanche à Marnes-la-Coquette, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Marnes-la-Coquette
    lead: "Gestion locative courte durée à Marnes-la-Coquette : la plus petite commune des Hauts-de-Seine, écrin résidentiel d'exception.",
    metaDescription: "Conciergerie courte durée à Marnes-la-Coquette (92) : cadre résidentiel rare, forêt de Fausses-Reposes, proximité Versailles. Estimation gratuite.",
    paragraphes: [
      "Plus petite commune du département par sa population, Marnes-la-Coquette offre un cadre résidentiel rare, bordé par la forêt de Fausses-Reposes et le parc de Saint-Cloud.",
      "Dans cet écrin verdoyant entre Versailles et La Défense, nous valorisons chaque bien auprès d'une clientèle premium recherchant calme et discrétion, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre-village, abords de la forêt de Fausses-Reposes",
      "Accès : Transilien L (Garches–Marnes-la-Coquette à proximité), routes vers Versailles et La Défense",
      "Clientèle : séjours premium, clientèle internationale en quête de calme"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Marnes-la-Coquette",
    wikiAnchor: "Marnes-la-Coquette, dans les Hauts-de-Seine"
  },
  "meudon": {
    image:"images/villes/meudon.jpg", imageAlt:"Allée des Bassins à Meudon, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Meudon
    lead: "Conciergerie courte durée à Meudon : terrasse panoramique, forêt et observatoire au sud-ouest de Paris.",
    metaDescription: "Gestion locative courte durée à Meudon (92) : forêt domaniale, terrasse de l'Observatoire, quartier Meudon-sur-Seine. Estimation gratuite.",
    paragraphes: [
      "Étagée entre Seine et forêt, Meudon offre l'un des plus beaux panoramas sur Paris depuis sa terrasse et son Observatoire, dans un cadre résidentiel verdoyant très recherché.",
      "Du quartier de Meudon-sur-Seine à Bellevue, nous mettons en marché chaque bien auprès d'une clientèle familiale et affaires en quête de calme à proximité de Paris."
    ],
    points: [
      "Quartiers porteurs : Bellevue, Meudon-sur-Seine, centre, Val Fleury",
      "Accès : Transilien N (Meudon, Bellevue), RER C (Meudon-sur-Seine), tramway T2",
      "Clientèle : familles, séjours nature et affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Meudon",
    wikiAnchor: "Meudon, dans les Hauts-de-Seine"
  },
  "montrouge": {
    image:"images/villes/montrouge.jpg", imageAlt:"Allée Cécile et Henri Rol-Tanguy à Montrouge, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Montrouge
    lead: "Gestion locative courte durée à Montrouge : ville dense et dynamique à la porte sud de Paris.",
    metaDescription: "Conciergerie courte durée à Montrouge (92) : terminus métro 4, sièges d'entreprises, demande affaires forte aux portes de Paris. Estimation gratuite.",
    paragraphes: [
      "Deuxième ville la plus dense de France, Montrouge accueille de nombreux sièges sociaux et bénéficie du prolongement du métro 4, qui la relie directement au cœur de Paris, soutenant une forte demande affaires.",
      "Du centre autour de la mairie au quartier Jean-Jaurès, nous positionnons chaque bien pour capter cette clientèle professionnelle avec une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : centre (mairie), Jean-Jaurès, Porte de Montrouge",
      "Accès : métro 4 (Mairie de Montrouge, Barbès–Verlaine), proximité porte d'Orléans",
      "Clientèle : voyageurs d'affaires, séjours courts proches de Paris"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Montrouge",
    wikiAnchor: "Montrouge, dans les Hauts-de-Seine"
  },
  "nanterre": {
    image:"images/villes/nanterre.jpg", imageAlt:"Gare de Nanterre-la-Folie (RER E) à Nanterre, conciergerie et gestion locative courte durée (92)", imageCredit:"© Idris2000 / Wikimedia Commons (CC BY 4.0)",  // Nanterre
    lead: "Gestion locative courte durée à Nanterre : préfecture des Hauts-de-Seine, adossée à La Défense.",
    metaDescription: "Conciergerie courte durée à Nanterre (92) : extension de La Défense, U Arena, université et RER A/E. Estimation gratuite de vos revenus locatifs.",
    paragraphes: [
      "Préfecture du département, Nanterre prolonge le quartier d'affaires de La Défense et accueille la Paris La Défense Arena ainsi qu'un important pôle universitaire, sources d'une demande affaires et événementielle soutenue.",
      "Du quartier du Parc aux abords de l'Arena, nous positionnons chaque bien pour capter ces flux avec un accueil au standard hôtelier et une gestion clé en main."
    ],
    points: [
      "Quartiers porteurs : Le Parc, Université, cœur de quartier La Défense",
      "Accès : RER A (Nanterre-Ville, Préfecture, Université), RER E, Paris La Défense Arena",
      "Clientèle : cadres de La Défense, public événementiel et universitaire"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Nanterre",
    wikiAnchor: "Nanterre, dans les Hauts-de-Seine"
  },
  "neuilly-sur-seine": {
    image:"images/villes/neuilly-sur-seine.jpg", imageAlt:"Rue Angélique Vérien à Neuilly-sur-Seine, immeubles haussmanniens, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",
      "lead": "Gestion locative courte durée à Neuilly-sur-Seine : adresse prime aux portes de Paris et de La Défense, gérée de A à Z.",
      "metaDescription": "Conciergerie courte durée à Neuilly-sur-Seine (92) : demande corporate soutenue, séjours premium, gestion clé en main. Estimation gratuite de vos revenus locatifs.",
      "paragraphes": [
          "Première adresse résidentielle des Hauts-de-Seine, Neuilly-sur-Seine bénéficie d'une demande corporate continue, alimentée par la proximité immédiate de La Défense et du quartier d'affaires de l'ouest parisien.",
          "Des appartements haussmanniens de l'avenue Charles-de-Gaulle aux résidences proches du bois de Boulogne, nous valorisons chaque bien auprès d'une clientèle premium en séjour moyen et long."
      ],
      "points": [
          "Quartiers porteurs : Sablons, Saint-James, Bagatelle, Château",
          "Accès : métro ligne 1 (Les Sablons, Pont de Neuilly), proximité La Défense",
          "Clientèle : cadres en mission, expatriés, séjours premium"
      ],
      "wikipedia": "https://fr.wikipedia.org/wiki/Neuilly-sur-Seine",
      "wikiAnchor": "Neuilly-sur-Seine, dans les Hauts-de-Seine"
  },

  "puteaux": {
    image:"images/villes/puteaux.jpg", imageAlt:"Place Basse de Puteaux, à La Défense, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Puteaux
    lead: "Conciergerie courte durée à Puteaux : au cœur de La Défense, entre tours d'affaires et île de Puteaux.",
    metaDescription: "Gestion locative courte durée à Puteaux (92) : quartier de La Défense, demande corporate continue, accès tramway T2 et RER A. Estimation gratuite.",
    paragraphes: [
      "Adossée au premier quartier d'affaires européen, Puteaux capte une demande corporate continue, alimentée par les sièges de La Défense et les déplacements professionnels.",
      "Des immeubles proches de l'esplanade aux quartiers résidentiels bordant l'île de Puteaux, nous gérons chaque bien de bout en bout pour une occupation régulière."
    ],
    points: [
      "Quartiers porteurs : La Défense, centre-ville, île de Puteaux",
      "Accès : tramway T2, RER A et Transilien (La Défense)",
      "Clientèle : cadres et expatriés de La Défense, séjours affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Puteaux",
    wikiAnchor: "Puteaux, dans les Hauts-de-Seine"
  },
  "rueil-malmaison": {
    image:"images/villes/rueil-malmaison.jpg", imageAlt:"Rue du Château à Rueil-Malmaison, commerces de centre-ville, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Rueil-Malmaison
    lead: "Conciergerie courte durée à Rueil-Malmaison : la plus vaste commune des Hauts-de-Seine, entre patrimoine impérial et pôles d'affaires.",
    metaDescription: "Gestion locative courte durée à Rueil-Malmaison (92) : château de Malmaison, bords de Seine et parc d'affaires, demande mixte. Estimation gratuite.",
    paragraphes: [
      "Marquée par le château de Malmaison et le souvenir de l'impératrice Joséphine, Rueil-Malmaison conjugue cadre verdoyant en bord de Seine et activité tertiaire autour du quartier Rueil-sur-Seine.",
      "Cette mixité nourrit une demande à la fois affaires et loisirs, que nous optimisons par un positionnement adapté à chaque quartier et une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre-ville, Rueil-sur-Seine, Bois-Préau, Buzenval",
      "Accès : RER A (Rueil-Malmaison), bords de Seine",
      "Clientèle : voyageurs d'affaires et séjours patrimoniaux"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Rueil-Malmaison",
    wikiAnchor: "Rueil-Malmaison, dans les Hauts-de-Seine"
  },
  "saint-cloud": {
    image:"images/villes/saint-cloud.jpg", imageAlt:"Square Île-de-France à Saint-Cloud, résidences et jardins, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Saint-Cloud
    lead: "Conciergerie courte durée à Saint-Cloud : domaine national, hippodrome et coteaux résidentiels face à Paris.",
    metaDescription: "Gestion locative courte durée à Saint-Cloud (92) : parc de Saint-Cloud, hippodrome ParisLongchamp à proximité, cadre résidentiel prisé. Estimation gratuite.",
    paragraphes: [
      "Dominée par son domaine national et son parc dessiné par Le Nôtre, Saint-Cloud offre un cadre résidentiel d'exception sur les coteaux face à Paris, à deux pas de La Défense et du bois de Boulogne.",
      "Du Montretout aux abords du parc, nous valorisons chaque bien auprès d'une clientèle premium, affaires et événementielle, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : Montretout, centre, Coteaux, Val d'Or",
      "Accès : tramway T2 (Parc de Saint-Cloud, Val d'Or), Transilien L (Saint-Cloud)",
      "Clientèle : séjours premium, cadres de La Défense, public événementiel"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Saint-Cloud",
    wikiAnchor: "Saint-Cloud, dans les Hauts-de-Seine"
  },
  "sceaux": {
    image:"images/villes/sceaux.jpg", imageAlt:"Rue du Docteur Berger à Sceaux, commerces de centre-ville, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Sceaux
    lead: "Gestion locative courte durée à Sceaux : ville-jardin du sud des Hauts-de-Seine, autour de son parc et de son château.",
    metaDescription: "Conciergerie courte durée à Sceaux (92) : parc de Sceaux, château, RER B et cadre résidentiel étudiant très prisé. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Réputée pour son parc et son château abritant le musée du Domaine départemental, Sceaux est une ville-jardin recherchée, animée par la proximité des grandes écoles et de la faculté.",
      "Du centre commerçant aux abords du parc, nous positionnons chaque bien auprès d'une clientèle familiale, universitaire et affaires, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre-ville, Robinson, Charaire, abords du parc",
      "Accès : RER B (Sceaux, Robinson), parc de Sceaux",
      "Clientèle : familles, parents d'étudiants, voyageurs d'affaires"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Sceaux_(Hauts-de-Seine)",
    wikiAnchor: "Sceaux, dans les Hauts-de-Seine"
  },
  "sevres": {
    image:"images/villes/sevres.jpg", imageAlt:"Place Marivel à Sèvres, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Sèvres
    lead: "Conciergerie courte durée à Sèvres : ville de la porcelaine, entre Seine et forêt au sud-ouest de Paris.",
    metaDescription: "Gestion locative courte durée à Sèvres (92) : Cité de la céramique, domaine national, tramway T2. Estimation gratuite de vos revenus locatifs.",
    paragraphes: [
      "Mondialement connue pour sa manufacture de porcelaine, Sèvres associe patrimoine, bords de Seine et proximité du domaine de Saint-Cloud, dans un cadre résidentiel prisé.",
      "Du centre proche du pont de Sèvres aux Brétigny, nous valorisons chaque bien auprès d'une clientèle culturelle et affaires, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre-ville, Brétigny, Beau Site",
      "Accès : tramway T2 (Brétigny, Musée de Sèvres), Transilien N (Sèvres-Rive-Gauche)",
      "Clientèle : tourisme culturel, voyageurs d'affaires, séjours familiaux"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/S%C3%A8vres",
    wikiAnchor: "Sèvres, dans les Hauts-de-Seine"
  },
  "suresnes": {
    image:"images/villes/suresnes.jpg", imageAlt:"Rue Berthelot à Suresnes, commerces de centre-ville, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Suresnes
    lead: "Gestion locative courte durée à Suresnes : coteaux du Mont-Valérien et bords de Seine face à La Défense.",
    metaDescription: "Conciergerie courte durée à Suresnes (92) : Mont-Valérien, vignoble, terrasses sur la Seine et proximité La Défense. Estimation gratuite.",
    paragraphes: [
      "Étagée sur les coteaux du Mont-Valérien, Suresnes domine la Seine face à La Défense et conserve un vignoble urbain rare, dans un cadre à la fois résidentiel et animé.",
      "Des bords de Seine au centre historique, nous positionnons chaque bien pour capter une demande affaires, portée par la proximité immédiate du quartier d'affaires."
    ],
    points: [
      "Quartiers porteurs : centre, bords de Seine, Mont-Valérien, Liberté",
      "Accès : tramway T2 (Suresnes-Longchamp, Belvédère), Transilien L (Suresnes-Mont-Valérien)",
      "Clientèle : cadres de La Défense, séjours affaires et loisirs"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Suresnes",
    wikiAnchor: "Suresnes, dans les Hauts-de-Seine"
  },
  "vanves": {
    image:"images/villes/vanves.jpg", imageAlt:"Carrefour Albert Legris à Vanves, conciergerie et gestion locative courte durée (92)", imageCredit:"Alt0160 / Wikimedia Commons (CC BY-SA 3.0)",  // Vanves
    lead: "Conciergerie courte durée à Vanves : ville résidentielle compacte à la porte sud de Paris.",
    metaDescription: "Gestion locative courte durée à Vanves (92) : porte de Paris, parc des expositions à proximité, métro 13 et Transilien N. Estimation gratuite.",
    paragraphes: [
      "Petite par la taille mais idéalement placée, Vanves jouxte la porte de Vanves et le parc des expositions de la porte de Versailles, ce qui lui assure une demande affaires et salons soutenue.",
      "Du quartier du Plateau au centre proche de la gare, nous mettons en marché chaque bien avec multi-diffusion et accueil hôtelier pour une occupation régulière."
    ],
    points: [
      "Quartiers porteurs : centre, Le Plateau, Saint-Remy",
      "Accès : métro 13 (Malakoff–Plateau de Vanves), Transilien N (Vanves-Malakoff), tramway T3a",
      "Clientèle : visiteurs de salons, voyageurs d'affaires, séjours courts"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Vanves",
    wikiAnchor: "Vanves, dans les Hauts-de-Seine"
  },
  "vaucresson": {
    image:"images/villes/vaucresson.jpg", imageAlt:"Avenue Jean Salmon Legagneur à Vaucresson, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Vaucresson
    lead: "Conciergerie courte durée à Vaucresson : ville résidentielle boisée à la limite des Yvelines.",
    metaDescription: "Gestion locative courte durée à Vaucresson (92) : cadre pavillonnaire cossu, forêt de Fausses-Reposes, Transilien L vers La Défense. Estimation gratuite.",
    paragraphes: [
      "À la lisière des Yvelines, Vaucresson est une commune résidentielle cossue, largement boisée, appréciée pour son calme et sa proximité avec Versailles et La Défense.",
      "Des abords de la Maréchaucherie au centre, nous mettons en marché chaque bien auprès d'une clientèle familiale et affaires, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre, La Maréchaucherie, Les Bergonnés",
      "Accès : Transilien L (Vaucresson) vers Saint-Lazare et La Défense",
      "Clientèle : familles, voyageurs d'affaires, séjours résidentiels"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Vaucresson",
    wikiAnchor: "Vaucresson, dans les Hauts-de-Seine"
  },
  "ville-d-avray": {
    image:"images/villes/ville-d-avray.jpg", imageAlt:"Allée Alboni à Ville-d'Avray, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Ville-d'Avray
    lead: "Gestion locative courte durée à Ville-d'Avray : ville des étangs et des peintres, entre Paris et Versailles.",
    metaDescription: "Conciergerie courte durée à Ville-d'Avray (92) : étangs de Corot, forêt de Fausses-Reposes, cadre résidentiel prisé. Estimation gratuite.",
    paragraphes: [
      "Immortalisée par le peintre Corot, Ville-d'Avray séduit par ses étangs et ses bois, dans un cadre résidentiel verdoyant idéalement situé entre Paris et Versailles.",
      "Des abords des étangs au centre, nous valorisons chaque bien auprès d'une clientèle familiale et de séjours nature, avec une gestion entièrement déléguée."
    ],
    points: [
      "Quartiers porteurs : centre, les Étangs, Le Colombier",
      "Accès : Transilien L (Ville-d'Avray) vers Saint-Lazare et La Défense",
      "Clientèle : familles, séjours nature et culturels"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Ville-d%27Avray",
    wikiAnchor: "Ville-d'Avray, dans les Hauts-de-Seine"
  },
  "villeneuve-la-garenne": {
    image:"images/villes/villeneuve-la-garenne.jpg", imageAlt:"Place Berry à Villeneuve-la-Garenne, conciergerie et gestion locative courte durée (92)", imageCredit:"Chabe01 / Wikimedia Commons (CC BY-SA 4.0)",  // Villeneuve-la-Garenne
    lead: "Conciergerie courte durée à Villeneuve-la-Garenne : ville en plein essor sur les bords de Seine au nord du département.",
    metaDescription: "Gestion locative courte durée à Villeneuve-la-Garenne (92) : bords de Seine, centre commercial, tramway T1. Estimation gratuite de vos revenus.",
    paragraphes: [
      "Bordée par la Seine au nord des Hauts-de-Seine, Villeneuve-la-Garenne connaît un développement soutenu autour de ses quais réaménagés et de son pôle commercial.",
      "Des abords du parc des Chanteraines au centre, nous positionnons chaque bien pour capter une demande affaires et de séjours courts, avec un accueil soigné."
    ],
    points: [
      "Quartiers porteurs : centre, bords de Seine, Chanteraines",
      "Accès : tramway T1 (Villeneuve-la-Garenne), proximité A86",
      "Clientèle : voyageurs d'affaires, missions, séjours courts"
    ],
    wikipedia: "https://fr.wikipedia.org/wiki/Villeneuve-la-Garenne",
    wikiAnchor: "Villeneuve-la-Garenne, dans les Hauts-de-Seine"
  },
};
