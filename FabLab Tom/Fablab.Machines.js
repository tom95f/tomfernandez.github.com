// Les données des machines (images et descriptions)
const machines = [
    {
        image: "Découpeuse Laser.webp",
        title: "Découpeuse Laser",
        description: " &#x2022; Fonction : Découpe et gravure précises de matériaux comme le bois, le plastique, le cuir ou l’acrylique à l'aide d'un faisceau laser.<br>&#x2022; Compétences nécessaires : Connaissance des logiciels de conception vectorielle (ex. : Illustrator).<br>&#x2022; Matières premières requises : Bois, acrylique, cuir, carton, plexiglas, etc.<br>&#x2022; Équipement utilisé : Logiciels de design vectoriel, système d’aspiration pour les fumées."
    },
    {
        image: "brodeuse numérique.webp",
        title: "Brodeuse numérique",
        description: "&#x2022; Fonction : Broderie automatisée pour personnaliser tissus et vêtements avec des motifs complexes et précis.<br>&#x2022; Compétences nécessaires : Maîtrise des logiciels de broderie numérique, connaissance de la manipulation textile.<br>&#x2022; Matières premières requises : Fils, tissus divers (coton, polyester, lin, etc.).<br>&#x2022; Équipement utilisé : Fils de broderie, cadres de maintien pour le tissu."
    },
    {
        image: "machine a coudre.jpg",
        title: "Machine à coudre",
        description: "&#x2022; Fonction : Assemblage de textiles pour la confection de vêtements, d'accessoires ou de prototypes textiles.<br>&#x2022; Compétences nécessaires : Savoir-faire en couture, réglage de la tension des fils, manipulation de la machine.<br>&#x2022; Matières premières requises : Tissus, fils, fermetures éclair, boutons.<br>&#x2022; Équipement utilisé : Aiguilles adaptées, pédale de commande."
    },
    {
        image: "scanner 3D.jpeg",
        title: "Scanner 3D",
        description: "&#x2022; Fonction : Capture d’objets physiques pour créer des modèles numériques en trois dimensions.<br>&#x2022; Compétences nécessaires : Maîtrise des logiciels de modélisation 3D, calibration du scanner.<br>&#x2022; Matières premières requises : Objets physiques à numériser.<br>&#x2022; Équipement utilisé : Logiciels de traitement des données 3D, ordinateur."
    },
    {
        image: "imprimante 3D.jpg",
        title: "Imprimante 3D",
        description: "&#x2022; Fonction : Fabrication d'objets tridimensionnels en superposant des couches de matériaux.<br>&#x2022; Compétences nécessaires : Connaissance des logiciels de modélisation 3D, paramétrage des impressions.<br>&#x2022; Matières premières requises : Filament (PLA, ABS, PETG, etc.).<br>&#x2022; Équipement utilisé : Logiciel de slicing pour préparer les fichiers d’impression, plateau chauffant."
    },
    {
        image: "palette graphique.webp",
        title: "Palette graphique",
        description: "&#x2022; Fonction : Outil de dessin numérique pour réaliser des créations artistiques ou des prototypes sur ordinateur.<br>&#x2022; Compétences nécessaires : Maîtrise des logiciels de création graphique (Photoshop, Illustrator, etc.), dessin manuel.<br>&#x2022; Matières premières requises : Aucune (outil numérique).Équipement utilisé : Stylet, écran d’ordinateur."
    },
    {
        image: "Thermophormeuse.jpeg",
        title: "Thermoformeuse",
        description: "&#x2022; Fonction : Moulage de feuilles de plastique chauffées pour créer des objets ou des emballages en relief.<br>&#x2022; Compétences nécessaires : Compréhension des matériaux plastiques, manipulation de la machine.<br>&#x2022; Matières premières requises : Feuilles de plastique (ABS, PVC, PET).<br>&#x2022; Équipement utilisé : Feuilles de plastique, moules pour le formage."
    },
    {
        image: "massicot électrique.jpg",
        title: "Massicot électrique",
        description: "&#x2022;Fonction : Coupe précise de grandes piles de papier, de carton ou d'autres matériaux en une seule action.<br>&#x2022; Compétences nécessaires : Connaissance de la manipulation de la machine, réglage des dimensions de coupe et ajustement de la pression.<br>&#x2022; Matières premières requises : Papier, carton, matériaux fins à découper.<br>&#x2022; Équipement utilisé : Lames de massicot, guides de coupe pour la précision."
    },
    {
        image: "plotter de découpe.webp",
        title: "Plotter de découpe",
        description: "&#x2022; Fonction : Découpe automatisée de vinyles, autocollants, textiles thermocollants et autres matériaux souples pour réaliser des lettrages, motifs ou impressions.<br>&#x2022; Compétences nécessaires : Maîtrise des logiciels de design vectoriel (CorelDRAW, FlexiSign), paramétrage précis des réglages de découpe.<br>&#x2022; Matières premières requises : Vinyle adhésif, film thermocollant, papier autocollant, etc.<br>&#x2022; Équipement utilisé : Lames de découpe adaptées, système de reconnaissance optique pour un alignement précis des impressions."
    }
];

let currentMachine = 0;

// Fonction pour passer à la machine suivante
function nextMachine() {
    // Incrémente l'index de la machine actuelle et revient au début si nécessaire
    currentMachine = (currentMachine + 1) % machines.length;

    // Mise à jour de l'image de la machine
    document.getElementById('machinePhoto').src = machines[currentMachine].image;

    // Mise à jour de la description de la machine
    document.getElementById('machineDescription').innerHTML = `
        <h3>${machines[currentMachine].title}</h3>
        <p>${machines[currentMachine].description}</p>
    `;
}