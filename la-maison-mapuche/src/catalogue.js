// CATALOGUE — TROIS NIVEAUX
// -------------------------
// FAMILLE  →  GAMME  →  PRODUIT
// Fichier produit par l'atelier : file://

export const FAMILLES = [
  {
    id: "premiere-famille",
    nom: "PREMIÈRE FAMILLE",
    emoji: "📦",
    glyphe: "boite",
    image: "",
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
    ],
  },
];

// Raccourcis pratiques, calculés une fois au démarrage.
export const TOUS_PRODUITS = FAMILLES.flatMap((f) =>
  f.gammes.flatMap((g) => g.produits.map((p) => ({ ...p, famille: f, gamme: g })))
);

export const SELECTION_CHEF = TOUS_PRODUITS.filter((p) => p.chef);
