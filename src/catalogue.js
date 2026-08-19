// CATALOGUE — TROIS NIVEAUX
// -------------------------
// FAMILLE  →  GAMME  →  PRODUIT
// Fichier produit par l'atelier : file://

export const FAMILLES = [
  {
    id: "nike",
    nom: "Nike",
    emoji: "👟",
    glyphe: "boite",
    image: "",
    video: "/videos/video-nike.mp4",
    type: "produits",
    couleurs: ["#11998E", "#0B5E4F"],
    gammes: [
      {
        id: "https-www-youtube-com-watch-v-cjmdx1js1x",
        nom: "https://www.youtube.com/watch?v=CJMdx1jS1xY",
        etiquette: "",
        sousTitre: "",
        produits: [
          { ref: "NK-TN-NOIRE", nom: "TN Noire", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Noire", chef: true, cadrage: "entier", image: "/produits/tn-noire.jpg", 
            images: ["/produits/tn-noire.jpg", "/produits/tn-noire-2.jpg"], 
            description: "Le TN en triple noir, du talon à la semelle. Maille et empiècements thermosoudés, semelle Air visible sur toute la longueur. Taille petit : prendre une demi-pointure au-dessus." },
          { ref: "NK-TN-BLANCHE", nom: "TN Blanche", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Blanche", chef: true, image: "/produits/tn-blanche.jpg", 
            images: ["/produits/tn-blanche.jpg", "/produits/tn-blanche-2.jpg"], 
            description: "Le TN en blanc intégral, virgule blanche sur blanc. Maille et empiècements thermosoudés, semelle Air visible sur toute la longueur. Taille petit : prendre une demi-pointure au-dessus." },
          { ref: "NK-TN-BLEUE", nom: "TN Bleue", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Bleue", chef: true, image: "/produits/tn-bleue.jpg", 
            images: ["/produits/tn-bleue.jpg", "/produits/tn-bleue-2.jpg"], 
            description: "Le TN en dégradé bleu, virgule noire et jaune. Maille et empiècements thermosoudés, semelle Air visible sur toute la longueur. Taille petit : prendre une demi-pointure au-dessus." },
        ],
      },
    ],
  },
  {
    id: "asics",
    nom: "Asics",
    emoji: "👟",
    glyphe: "etoile",
    image: "",
    video: "/videos/asics-running.mp4",
    type: "produits",
    couleurs: ["#2E5BFF", "#12277A"],
    gammes: [
      {
        id: "modele",
        nom: "Modèle ",
        etiquette: "",
        sousTitre: "",
        produits: [
          { ref: "REF-001", nom: "Gel-Nimbus Grise", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Gris et noir", cadrage: "entier", image: "/produits/gris-noire.jpg", 
            images: ["/produits/gris-noire.jpg", "/produits/nouveau-produit-2.jpg"], 
            description: "La Gel-Nimbus en gris et noir, semelle crème et gel doré au talon. Maille respirante et empiècements argentés thermosoudés, semelle à amorti GEL et renfort Trusstic sous le pied. Chausse juste : prendre sa pointure habituelle." },
          { ref: "REF-002", nom: "Gel-Nimbus Blanche", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Blanc et gris", image: "/produits/nouveau-produit.jpg", 
            images: ["/produits/nouveau-produit.jpg", "/produits/blanc-gris.jpg"], 
            description: "La Gel-Nimbus en blanc et argent, bandes noires et gel noir au talon. Maille respirante et empiècements argentés thermosoudés, semelle à amorti GEL et renfort Trusstic sous le pied. Chausse juste : prendre sa pointure habituelle." },
          { ref: "REF-003", nom: "Gel-Nimbus Bleue", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Blanc et bleu", image: "/produits/blanc-bleue-2.jpg", 
            images: ["/produits/blanc-bleue-2.jpg", "/produits/blanc-bleue.jpg"], 
            description: "La Gel-Nimbus en blanc et argent, bandes bleu profond, col et gel bleu vif. Maille respirante et empiècements argentés thermosoudés, semelle à amorti GEL et renfort Trusstic sous le pied. Chausse juste : prendre sa pointure habituelle." },
        ],
      },
    ],
  },
  {
    id: "saucony",
    nom: "Saucony",
    emoji: "👟",
    glyphe: "sac",
    image: "",
    video: "/videos/saucony-video.mp4",
    type: "produits",
    couleurs: ["#F2994A", "#8A4B10"],
    gammes: [
      {
        id: "modele",
        nom: "Modèle ",
        etiquette: "",
        sousTitre: "",
        produits: [
          { ref: "SA-OMNI-BLEUE", nom: "Omni 9 Bleu ciel", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Bleu ciel et crème", cadrage: "entier", image: "/produits/omni-9-bleu-ciel.jpg", 
            images: ["/produits/omni-9-bleu-ciel.jpg", "/produits/omni-9-bleu-ciel-2.jpg"], 
            description: "L'Omni 9 en bleu ciel, empiècements crème nacrés, semelle blanche et lacets assortis. Mesh aéré et empiècements brillants thermosoudés, amorti ProGrid et zone d'impact SRC sous le talon. Chausse juste : prendre sa pointure habituelle." },
          { ref: "SA-OMNI-VIOLETTE", nom: "Omni 9 Violette", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Blanc et violet", image: "/produits/omni-9-violette.jpg", 
            images: ["/produits/omni-9-violette.jpg", "/produits/omni-9-violette-2.jpg"], 
            description: "L'Omni 9 en blanc moucheté de noir, empiècements argentés, semelle et talon violets. Mesh aéré et empiècements brillants thermosoudés, amorti ProGrid et zone d'impact SRC sous le talon. Chausse juste : prendre sa pointure habituelle." },
          { ref: "SA-OMNI-GRISE", nom: "Omni 9 Grise Bleu", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Gris et turquoise", image: "/produits/omni-9-grise-bleu.jpg", 
            images: ["/produits/omni-9-grise-bleu.jpg", "/produits/saucony.jpg"], 
            description: "L'Omni 9 en gris et argent, liseré turquoise le long du logo et semelle noire. Mesh aéré et empiècements brillants thermosoudés, amorti ProGrid et zone d'impact SRC sous le talon. Chausse juste : prendre sa pointure habituelle." },
        ],
      },
    ],
  },
];

// Raccourcis pratiques, calculés une fois au démarrage.
export const TOUS_PRODUITS = FAMILLES.flatMap((f) =>
  f.gammes.flatMap((g) => g.produits.map((p) => ({ ...p, famille: f, gamme: g })))
);

export const SELECTION_CHEF = TOUS_PRODUITS.filter((p) => p.chef);
