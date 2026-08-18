// CATALOGUE — TROIS NIVEAUX
// -------------------------
// FAMILLE  →  GAMME  →  PRODUIT
//
// Ici une FAMILLE est une MARQUE. Dans la présentation « par marques », la
// gamme ne s'affiche pas : elle ne sert qu'à ranger.

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
        id: "modeles",
        nom: "Modèles",
        etiquette: "",
        sousTitre: "",
        produits: [
          { ref: "NK-TN-NOIRE", nom: "TN Noire", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Noire", chef: true, cadrage: "entier", image: "/produits/tn-noire.jpg",
            images: ["/produits/tn-noire.jpg", "/produits/tn-noire-2.jpg"],
            description: "" },
          { ref: "NK-TN-BLANCHE", nom: "TN Blanche", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Blanche", chef: true,
            description: "" },
          { ref: "NK-TN-BLEUE", nom: "TN Bleue", unite: "la paire", prix: 60, dispo: true, tailles: "38 · 38,5 · 39 · 40 · 40,5 · 41 · 42 · 42,5 · 43 · 44 · 44,5 · 45 · 45,5 · 46 · 47 · 47,5", couleurs: "Bleue", chef: true,
            description: "" },
        ],
      },
    ],
  },
  {
    id: "asics",
    nom: "Asics",
    emoji: "🔷",
    glyphe: "etoile",
    image: "",
    video: "",
    type: "produits",
    couleurs: ["#2E5BFF", "#12277A"],
    gammes: [
      {
        id: "modeles",
        nom: "Modèles",
        etiquette: "",
        sousTitre: "",
        produits: [

        ],
      },
    ],
  },
  {
    id: "saucony",
    nom: "Saucony",
    emoji: "🔶",
    glyphe: "sac",
    image: "",
    video: "",
    type: "produits",
    couleurs: ["#F2994A", "#8A4B10"],
    gammes: [
      {
        id: "modeles",
        nom: "Modèles",
        etiquette: "",
        sousTitre: "",
        produits: [

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
