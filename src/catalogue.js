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
        id: "premiere-gamme",
        nom: "PREMIÈRE GAMME",
        etiquette: "",
        sousTitre: "",
        produits: [
          { ref: "REF-001", nom: "Premier produit", unite: "la pièce", prix: 0, dispo: true },
        ],
      },
      {
        id: "tn",
        nom: "TN",
        etiquette: "FR",
        sousTitre: "",
        produits: [
          { ref: "REF-001", nom: "TN Noire", unite: "la pièce", prix: 60, dispo: true, tailles: "39. 40. 42. 43", couleurs: "Noire", cadrage: "entier", image: "/produits/tn-noire.jpg", 
            images: ["/produits/tn-noire.jpg", "/produits/tn-noire-2.jpg"] },
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
