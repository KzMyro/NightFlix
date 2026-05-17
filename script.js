const poster = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=75`;

// Grande base de films: les notes sont volontairement fictives pour le projet NSI.
const movies = [
  { title: "Sinister", category: "Horreur", rating: 7.4, year: 2012, image: poster("photo-1509248961158-e54f6934749c"), description: "Un auteur de romans policiers emmenage avec sa famille dans une maison marquee par un meurtre. En decouvrant de vieux films, il comprend qu'une entite nommee Bughuul pourrait etre liee a plusieurs disparitions d'enfants." },
  { title: "Insidious", category: "Paranormal", rating: 7.1, year: 2010, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Apres l'accident de leur fils Dalton, une famille est confrontee a des phenomenes paranormaux. Ils decouvrent que l'enfant est piege dans une dimension appelee The Further, convoitee par des esprits dangereux." },
  { title: "The Conjuring", category: "Paranormal", rating: 7.8, year: 2013, image: poster("photo-1516410529446-2c777cb7366d"), description: "Ed et Lorraine Warren enquetent sur la maison des Perron, une famille terrorisee par une presence surnaturelle. Leur affaire les amene face a une force demoniaque particulierement violente." },
  { title: "Annabelle", category: "Horreur", rating: 6.5, year: 2014, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Un jeune couple garde chez lui une poupee ancienne qui devient le point d'ancrage d'evenements demoniaques. L'objet attire une presence qui menace leur bebe et leur foyer." },
  { title: "Smile", category: "Psychologique", rating: 7.0, year: 2022, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Apres avoir vu une patiente mourir sous ses yeux, une psychiatre est poursuivie par une malediction qui se transmet par traumatisme. Les victimes affichent un sourire terrifiant avant de mourir." },
  { title: "Hereditary", category: "Psychologique", rating: 7.7, year: 2018, image: poster("photo-1519608487953-e999c86e7455"), description: "Apres la mort de sa mere, Annie Graham voit sa famille se dechirer dans le deuil. Des secrets familiaux et une menace occulte transforment peu a peu leur maison en piege." },
  { title: "Midsommar", category: "Mystere", rating: 7.3, year: 2019, image: poster("photo-1493246507139-91e8fad9978e"), description: "Dani accompagne des amis dans un festival suedois qui n'a lieu que tous les 90 ans. Sous la lumiere permanente de l'ete, les traditions de la communaute deviennent de plus en plus inquietantes." },
  { title: "Evil Dead Rise", category: "Horreur", rating: 6.9, year: 2023, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Deux soeurs se retrouvent dans un immeuble de Los Angeles lorsqu'un livre maudit libere des Deadites. La famille doit survivre a une possession brutale au coeur de l'appartement." },
  { title: "The Nun", category: "Paranormal", rating: 6.2, year: 2018, image: poster("photo-1509248961158-e54f6934749c"), description: "Un pretre et une novice sont envoyes dans une abbaye de Roumanie apres le suicide d'une religieuse. Ils y affrontent Valak, une force demoniaque prenant l'apparence d'une nonne." },
  { title: "It", category: "Horreur", rating: 7.6, year: 2017, image: poster("photo-1519681393784-d120267933ba"), description: "Un groupe d'enfants vivant a Derry decouvre qu'une creature malefique terrorise la ville depuis des annees. Cette entite prend souvent l'apparence du clown Pennywise et se nourrit de la peur de ses victimes." },
  { title: "Carrie", category: "Fantastique", rating: 7.0, year: 1976, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Carrie White, adolescente humiliee par ses camarades et dominee par sa mere fanatique, decouvre des pouvoirs telekinetiques. Le bal de promo devient le declencheur d'une vengeance tragique." },
  { title: "Fear Street", category: "Horreur", rating: 6.8, year: 2021, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "A Shadyside, une bande d'adolescents comprend que les meurtres qui frappent la ville sont lies a une ancienne malediction. Ils doivent affronter des tueurs revenus du passe." },
  { title: "The Strangers", category: "Suspense", rating: 6.6, year: 2008, image: poster("photo-1516410529446-2c777cb7366d"), description: "Un couple passe la nuit dans une maison isolee lorsqu'il est harcele par trois inconnus masques. Leur seul objectif semble etre de semer la peur sans raison apparente." },
  { title: "Countdown", category: "Suspense", rating: 6.1, year: 2019, image: poster("photo-1519608487953-e999c86e7455"), description: "Une infirmiere telecharge une application qui annonce l'heure exacte de sa mort. Quand le compte a rebours devient credible, elle cherche a briser la malediction avant qu'il ne soit trop tard." },
  { title: "Truth or Dare", category: "Horreur", rating: 6.0, year: 2018, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Des amis commencent une partie d'action ou verite qui devient mortelle. Une force surnaturelle les oblige a jouer, et mentir ou refuser une action peut leur couter la vie." },
  { title: "Shutter Island", category: "Psychologique", rating: 8.2, year: 2010, image: poster("photo-1500534314209-a25ddb2bd429"), description: "En 1954, le marshal Teddy Daniels enquete sur la disparition d'une patiente dans un hopital psychiatrique isole. Plus il avance, plus la frontiere entre complot, trauma et realite se brouille." },
  { title: "Gone Girl", category: "Mystere", rating: 8.0, year: 2014, image: poster("photo-1516410529446-2c777cb7366d"), description: "Quand Amy Dunne disparait le jour de son anniversaire de mariage, son mari Nick devient rapidement suspect. L'enquete revele un couple construit sur les mensonges et la manipulation." },
  { title: "Se7en", category: "Crime", rating: 8.5, year: 1995, image: poster("photo-1519608487953-e999c86e7455"), description: "Deux detectives traquent un tueur en serie qui met en scene ses crimes autour des sept peches capitaux. Leur enquete les conduit vers un final sombre et implacable." },
  { title: "Prisoners", category: "Crime", rating: 8.1, year: 2013, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Apres la disparition de deux petites filles, un pere desespere decide de mener sa propre enquete. Pendant que la police cherche des preuves, sa colere le pousse vers des choix extremes." },
  { title: "Fight Club", category: "Psychologique", rating: 8.4, year: 1999, image: poster("photo-1519681393784-d120267933ba"), description: "Un narrateur insomniaque rencontre Tyler Durden et fonde un club de combat clandestin. Ce mouvement devient peu a peu une organisation anarchique qui remet son identite en question." },
  { title: "Black Swan", category: "Psychologique", rating: 7.9, year: 2010, image: poster("photo-1535223289827-42f1e9919769"), description: "Nina, danseuse perfectionniste, obtient le role principal du Lac des cygnes. La pression, la rivalite et son obsession de la perfection la font glisser dans une spirale mentale." },
  { title: "Split", category: "Thriller", rating: 7.3, year: 2016, image: poster("photo-1493246507139-91e8fad9978e"), description: "Trois jeunes femmes sont enlevees par Kevin, un homme vivant avec de multiples personnalites. L'une de ces identites annonce l'arrivee d'une presence beaucoup plus dangereuse." },
  { title: "John Wick", category: "Action", rating: 7.8, year: 2014, image: poster("photo-1519681393784-d120267933ba"), description: "Ancien tueur a gages, John Wick reprend les armes apres une attaque qui lui retire le dernier souvenir de sa femme. Il affronte alors tout un reseau criminel." },
  { title: "Extraction", category: "Action", rating: 7.0, year: 2020, image: poster("photo-1493246507139-91e8fad9978e"), description: "Tyler Rake, mercenaire marque par son passe, doit sauver le fils d'un baron de la drogue kidnappe a Dacca. La mission devient une fuite intense dans une ville verrouillee." },
  { title: "Nobody", category: "Action", rating: 7.4, year: 2021, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Hutch Mansell semble mener une vie banale, jusqu'a ce qu'une agression reveille son passe violent. Il devient la cible d'un dangereux clan criminel russe." },
  { title: "Mad Max: Fury Road", category: "Action", rating: 8.3, year: 2015, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Dans un desert post-apocalyptique, Max s'allie a Furiosa pour fuir le tyran Immortan Joe. Leur course-poursuite devient une lutte pour la liberte." },
  { title: "The Dark Knight", category: "Action", rating: 8.6, year: 2008, image: poster("photo-1519608487953-e999c86e7455"), description: "Batman, Gordon et Harvey Dent tentent de demanteler le crime organise a Gotham. Le Joker plonge la ville dans le chaos pour tester leurs limites morales." },
  { title: "Bullet Train", category: "Action", rating: 7.2, year: 2022, image: poster("photo-1535223289827-42f1e9919769"), description: "Ladybug, tueur a gages malchanceux, monte dans un train japonais pour recuperer une mallette. Il decouvre que plusieurs assassins sont lies a la meme mission." },
  { title: "Tyler Rake 2", category: "Action", rating: 7.3, year: 2023, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Apres avoir survecu a sa derniere mission, Tyler Rake doit extraire une famille enfermee dans une prison georgienne. L'operation declenche une vengeance violente." },
  { title: "Interstellar", category: "Science-fiction", rating: 8.7, year: 2014, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Alors que la Terre devient inhabitable, Cooper rejoint une mission spatiale pour trouver une nouvelle planete. Le voyage explore le temps, l'amour et la survie de l'humanite." },
  { title: "Inception", category: "Science-fiction", rating: 8.5, year: 2010, image: poster("photo-1535223289827-42f1e9919769"), description: "Dom Cobb vole des secrets en infiltrant les reves. Pour retrouver sa famille, il accepte une mission inverse: implanter une idee dans l'esprit d'un heritier." },
  { title: "Blade Runner 2049", category: "Science-fiction", rating: 8.1, year: 2017, image: poster("photo-1519608487953-e999c86e7455"), description: "K, un blade runner charge de traquer des replicants, decouvre un secret capable de bouleverser l'ordre du monde. Sa quete le mene vers Rick Deckard." },
  { title: "The Matrix", category: "Science-fiction", rating: 8.7, year: 1999, image: poster("photo-1519681393784-d120267933ba"), description: "Neo decouvre que le monde qu'il connait est une simulation controlee par des machines. Guide par Morpheus et Trinity, il rejoint la resistance humaine." },
  { title: "Dune", category: "Aventure", rating: 8.0, year: 2021, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Paul Atreides arrive sur Arrakis, planete desertique essentielle pour l'epice. Entre complots politiques et visions mystiques, son destin prend une dimension immense." },
  { title: "Ready Player One", category: "Aventure", rating: 7.5, year: 2018, image: poster("photo-1535223289827-42f1e9919769"), description: "Dans un futur sombre, Wade Watts participe a une chasse au tresor dans l'OASIS, un univers virtuel geant. La victoire pourrait lui donner le controle de ce monde numerique." },
  { title: "Oblivion", category: "Science-fiction", rating: 7.1, year: 2013, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Jack Harper repare des drones sur une Terre ravagee apres une guerre contre des aliens. Une rencontre inattendue remet en cause sa mission et ses souvenirs." },
  { title: "Bird Box", category: "Apocalypse", rating: 6.8, year: 2018, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Dans un monde ou regarder des creatures invisibles pousse les gens au suicide, Malorie tente de proteger deux enfants. Leur survie depend d'un voyage les yeux bandes." },
  { title: "A Quiet Place", category: "Survival", rating: 7.6, year: 2018, image: poster("photo-1509248961158-e54f6934749c"), description: "Une famille vit en silence pour echapper a des creatures aveugles qui chassent au son. Le moindre bruit peut transformer leur refuge en piege mortel." },
  { title: "World War Z", category: "Apocalypse", rating: 7.0, year: 2013, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Gerry Lane parcourt le monde pour trouver l'origine d'une pandemie zombie fulgurante. Ses recherches sont la cle d'une possible strategie de survie globale." },
  { title: "Train to Busan", category: "Survival", rating: 7.9, year: 2016, image: poster("photo-1516410529446-2c777cb7366d"), description: "Dans un train reliant Seoul a Busan, des passagers sont pris au piege pendant une infection zombie. Un pere tente de sauver sa fille au milieu du chaos." },
  { title: "I Am Legend", category: "Apocalypse", rating: 7.4, year: 2007, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Robert Neville semble etre le dernier humain sain de New York apres un virus mondial. Scientifique isole, il cherche un remede tout en survivant aux infectes nocturnes." },
  { title: "The Platform", category: "Survival", rating: 7.2, year: 2019, image: poster("photo-1519608487953-e999c86e7455"), description: "Dans une prison verticale, une plateforme de nourriture descend d'etage en etage. Les prisonniers doivent affronter la faim, l'egoisme et la violence d'un systeme cruel." }
];

const extraMovies = [
  { title: "The Exorcist", category: "Horreur", rating: 8.1, year: 1973, image: poster("photo-1509248961158-e54f6934749c"), description: "Une jeune fille est possedee par une entite demoniaque. Sa mere demande l'aide de deux pretres pour tenter un exorcisme qui met leur foi et leur vie en danger." },
  { title: "The Ring", category: "Horreur", rating: 7.3, year: 2002, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Une journaliste enquete sur une cassette video maudite qui condamne ceux qui la regardent a mourir sept jours plus tard." },
  { title: "The Grudge", category: "Paranormal", rating: 6.4, year: 2004, image: poster("photo-1500534314209-a25ddb2bd429"), description: "A Tokyo, une maison garde la colere d'une mort violente. Toute personne qui y entre devient la cible d'une malediction implacable." },
  { title: "Saw", category: "Horreur", rating: 7.6, year: 2004, image: poster("photo-1516410529446-2c777cb7366d"), description: "Deux hommes se reveillent enchaines dans une salle de bain et doivent suivre les regles d'un tueur surnomme Jigsaw pour esperer survivre." },
  { title: "Scream", category: "Horreur", rating: 7.5, year: 1996, image: poster("photo-1519608487953-e999c86e7455"), description: "A Woodsboro, un tueur masque attaque des adolescents en utilisant les codes des films d'horreur contre eux." },
  { title: "Halloween", category: "Horreur", rating: 7.7, year: 1978, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Michael Myers s'echappe d'un hopital psychiatrique et retourne a Haddonfield pour traquer Laurie Strode la nuit d'Halloween." },
  { title: "The Texas Chain Saw Massacre", category: "Horreur", rating: 7.4, year: 1974, image: poster("photo-1493246507139-91e8fad9978e"), description: "Un groupe de jeunes voyageurs tombe sur une famille meurtriere au Texas, dont le terrifiant Leatherface." },
  { title: "Paranormal Activity", category: "Paranormal", rating: 6.5, year: 2007, image: poster("photo-1509248961158-e54f6934749c"), description: "Un couple installe des cameras dans sa maison pour comprendre des phenomenes nocturnes. Les images revelent une presence de plus en plus agressive." },
  { title: "The Babadook", category: "Psychologique", rating: 7.0, year: 2014, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Une mere veuve et son fils sont hantes par une creature sortie d'un livre pour enfants, symbole d'un deuil impossible a contenir." },
  { title: "REC", category: "Horreur", rating: 7.5, year: 2007, image: poster("photo-1516410529446-2c777cb7366d"), description: "Une journaliste et son cameraman suivent des pompiers dans un immeuble mis en quarantaine, ou une infection transforme les habitants." },
  { title: "Us", category: "Psychologique", rating: 7.1, year: 2019, image: poster("photo-1519608487953-e999c86e7455"), description: "Une famille en vacances est attaquee par ses doubles, des versions terrifiantes d'eux-memes qui semblent venir d'un monde cache." },
  { title: "Get Out", category: "Psychologique", rating: 8.0, year: 2017, image: poster("photo-1535223289827-42f1e9919769"), description: "Chris rend visite a la famille de sa petite amie et decouvre peu a peu un secret inquietant derriere leur accueil trop parfait." },
  { title: "The Visit", category: "Horreur", rating: 6.3, year: 2015, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Deux enfants passent une semaine chez leurs grands-parents et filment des comportements de plus en plus etranges et dangereux." },
  { title: "Lights Out", category: "Paranormal", rating: 6.6, year: 2016, image: poster("photo-1509248961158-e54f6934749c"), description: "Une creature liee a l'obscurite poursuit une famille. Elle n'apparait que quand les lumieres s'eteignent." },
  { title: "The Black Phone", category: "Horreur", rating: 7.0, year: 2021, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Un enfant kidnappe par un tueur masque recoit des appels sur un telephone debranche, transmis par les anciennes victimes." },
  { title: "Talk to Me", category: "Horreur", rating: 7.2, year: 2022, image: poster("photo-1516410529446-2c777cb7366d"), description: "Des adolescents utilisent une main empaillee pour communiquer avec les morts, jusqu'a ouvrir une porte qu'ils ne controlent plus." },
  { title: "The Autopsy of Jane Doe", category: "Mystere", rating: 6.9, year: 2016, image: poster("photo-1519608487953-e999c86e7455"), description: "Deux medecins legistes examinent le corps intact d'une inconnue et decouvrent des signes impossibles d'une force ancienne." },
  { title: "The Witch", category: "Horreur", rating: 7.2, year: 2015, image: poster("photo-1493246507139-91e8fad9978e"), description: "Dans la Nouvelle-Angleterre du XVIIe siecle, une famille bannie s'installe pres d'une foret ou la foi, la peur et la sorcellerie s'entremelent." },
  { title: "Ouija", category: "Paranormal", rating: 5.8, year: 2014, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Des amis utilisent une planche de Ouija pour contacter une disparue, mais reveillent une presence qui les traque un par un." },
  { title: "Jeepers Creepers", category: "Horreur", rating: 6.4, year: 2001, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Deux etudiants sont poursuivis par une creature qui se reveille tous les 23 ans pour se nourrir de parties humaines." },
  { title: "Nightcrawler", category: "Thriller", rating: 7.9, year: 2014, image: poster("photo-1519608487953-e999c86e7455"), description: "Lou Bloom filme des scenes de crime a Los Angeles pour les vendre aux chaines d'info, jusqu'a manipuler lui-meme la realite." },
  { title: "Zodiac", category: "Crime", rating: 7.8, year: 2007, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Des journalistes et policiers de San Francisco traquent le tueur du Zodiac, dont les lettres codees obsedent toute une ville." },
  { title: "The Girl with the Dragon Tattoo", category: "Thriller", rating: 7.8, year: 2011, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Un journaliste et une hackeuse enquetent sur une disparition vieille de plusieurs decennies au sein d'une famille puissante." },
  { title: "The Silence of the Lambs", category: "Crime", rating: 8.6, year: 1991, image: poster("photo-1516410529446-2c777cb7366d"), description: "Clarice Starling, jeune agente du FBI, consulte Hannibal Lecter pour comprendre et capturer un tueur en serie nomme Buffalo Bill." },
  { title: "Enemy", category: "Psychologique", rating: 6.9, year: 2013, image: poster("photo-1535223289827-42f1e9919769"), description: "Un professeur decouvre son double parfait dans un film. Leur rencontre fait basculer sa vie dans une spirale d'identite et de paranoia." },
  { title: "Oldboy", category: "Thriller", rating: 8.4, year: 2003, image: poster("photo-1519681393784-d120267933ba"), description: "Un homme est enferme pendant quinze ans sans explication, puis libere pour decouvrir qui l'a piege et pourquoi." },
  { title: "Source Code", category: "Science-fiction", rating: 7.5, year: 2011, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Un soldat revit les huit dernieres minutes d'un passager de train pour identifier un terroriste et empecher une nouvelle attaque." },
  { title: "Memento", category: "Psychologique", rating: 8.4, year: 2000, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Leonard cherche l'assassin de sa femme malgre une memoire immediate defaillante. Il s'aide de notes, de photos et de tatouages." },
  { title: "No Country for Old Men", category: "Crime", rating: 8.2, year: 2007, image: poster("photo-1493246507139-91e8fad9978e"), description: "Un homme trouve une mallette d'argent apres un deal rate et devient la cible d'un tueur implacable dans le Texas des annees 1980." },
  { title: "The Game", category: "Thriller", rating: 7.7, year: 1997, image: poster("photo-1519608487953-e999c86e7455"), description: "Un banquier solitaire accepte de participer a un jeu mysterieux qui envahit sa vie et brouille toute frontiere entre mise en scene et danger." },
  { title: "Mission: Impossible - Fallout", category: "Action", rating: 8.0, year: 2018, image: poster("photo-1519681393784-d120267933ba"), description: "Ethan Hunt et son equipe doivent recuperer du plutonium vole avant qu'une organisation terroriste ne provoque une catastrophe mondiale." },
  { title: "Gladiator", category: "Action", rating: 8.5, year: 2000, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Maximus, general romain trahi, devient gladiateur et cherche a venger sa famille tout en defiant l'empereur Commode." },
  { title: "300", category: "Action", rating: 7.6, year: 2006, image: poster("photo-1493246507139-91e8fad9978e"), description: "Le roi Leonidas et 300 Spartiates affrontent l'immense armee perse aux Thermopyles dans une bataille devenue legendaire." },
  { title: "The Raid", category: "Action", rating: 7.6, year: 2011, image: poster("photo-1519681393784-d120267933ba"), description: "Une unite d'elite prend d'assaut un immeuble controle par un baron du crime et doit survivre etage apres etage." },
  { title: "Top Gun: Maverick", category: "Action", rating: 8.3, year: 2022, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Pete Maverick Mitchell forme une nouvelle generation de pilotes pour une mission aerienne presque impossible." },
  { title: "Deadpool", category: "Action", rating: 8.0, year: 2016, image: poster("photo-1535223289827-42f1e9919769"), description: "Wade Wilson devient Deadpool apres une experience qui lui donne un pouvoir de regeneration et part se venger avec un humour ravageur." },
  { title: "Avengers: Endgame", category: "Action", rating: 8.4, year: 2019, image: poster("photo-1519681393784-d120267933ba"), description: "Apres la victoire de Thanos, les Avengers survivants tentent une derniere mission pour restaurer l'univers." },
  { title: "Casino Royale", category: "Action", rating: 8.0, year: 2006, image: poster("photo-1500534314209-a25ddb2bd429"), description: "James Bond affronte Le Chiffre lors d'une partie de poker a haut risque qui peut financer le terrorisme international." },
  { title: "Fast & Furious 7", category: "Action", rating: 7.1, year: 2015, image: poster("photo-1493246507139-91e8fad9978e"), description: "Dom Toretto et son equipe sont traques par Deckard Shaw, venu venger son frere, dans une aventure explosive autour du monde." },
  { title: "The Equalizer", category: "Action", rating: 7.3, year: 2014, image: poster("photo-1516410529446-2c777cb7366d"), description: "Robert McCall, ancien agent discret, reprend ses reflexes meurtriers pour proteger une jeune femme et affronter la mafia russe." },
  { title: "Alien", category: "Science-fiction", rating: 8.5, year: 1979, image: poster("photo-1446776811953-b23d57bd21aa"), description: "L'equipage du Nostromo repond a un signal inconnu et ramene a bord une creature extraterrestre mortelle." },
  { title: "Arrival", category: "Science-fiction", rating: 7.9, year: 2016, image: poster("photo-1535223289827-42f1e9919769"), description: "Une linguiste tente de communiquer avec des visiteurs extraterrestres dont le langage pourrait transformer notre perception du temps." },
  { title: "Edge of Tomorrow", category: "Science-fiction", rating: 7.9, year: 2014, image: poster("photo-1519681393784-d120267933ba"), description: "Un soldat revit sans cesse la meme bataille contre des aliens et apprend a combattre avec l'aide d'une guerriere experimentee." },
  { title: "Moon", category: "Science-fiction", rating: 7.8, year: 2009, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Un employe isole sur une base lunaire approche de la fin de son contrat lorsqu'il decouvre une verite troublante sur son identite." },
  { title: "Looper", category: "Science-fiction", rating: 7.4, year: 2012, image: poster("photo-1519608487953-e999c86e7455"), description: "Un tueur charge d'eliminer des cibles envoyees du futur doit affronter sa propre version plus agee." },
  { title: "Gravity", category: "Science-fiction", rating: 7.7, year: 2013, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Apres un accident en orbite, une astronaute lutte seule pour survivre et trouver un moyen de revenir sur Terre." },
  { title: "District 9", category: "Science-fiction", rating: 7.9, year: 2009, image: poster("photo-1535223289827-42f1e9919769"), description: "Des extraterrestres refugies vivent dans un camp en Afrique du Sud, jusqu'a ce qu'un agent humain soit transforme par leur technologie." },
  { title: "Tenet", category: "Science-fiction", rating: 7.4, year: 2020, image: poster("photo-1519681393784-d120267933ba"), description: "Un agent secret decouvre l'inversion du temps et tente d'empecher une menace capable de detruire le monde." },
  { title: "Passengers", category: "Science-fiction", rating: 7.0, year: 2016, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Deux passagers d'un vaisseau vers une colonie lointaine se reveillent trop tot et doivent affronter l'isolement et un danger technique." },
  { title: "Annihilation", category: "Science-fiction", rating: 7.1, year: 2018, image: poster("photo-1535223289827-42f1e9919769"), description: "Une biologiste rejoint une expedition dans une zone mysterieuse ou la nature mute et ou les lois du vivant semblent se transformer." },
  { title: "The Road", category: "Apocalypse", rating: 7.3, year: 2009, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Dans un monde devaste, un pere et son fils marchent vers le sud en evitant la faim, le froid et les survivants les plus dangereux." },
  { title: "28 Days Later", category: "Apocalypse", rating: 7.6, year: 2002, image: poster("photo-1509248961158-e54f6934749c"), description: "Un homme se reveille dans un Londres desert apres la propagation d'un virus de rage qui a transforme la population." },
  { title: "The Maze Runner", category: "Survival", rating: 6.9, year: 2014, image: poster("photo-1493246507139-91e8fad9978e"), description: "Thomas se reveille sans memoire dans une communaute entouree d'un labyrinthe mortel dont les portes changent chaque nuit." },
  { title: "Snowpiercer", category: "Apocalypse", rating: 7.1, year: 2013, image: poster("photo-1519608487953-e999c86e7455"), description: "Les derniers humains vivent dans un train en mouvement perpetuel, separes par classes sociales, jusqu'a une revolte venue de l'arriere." },
  { title: "Children of Men", category: "Apocalypse", rating: 7.9, year: 2006, image: poster("photo-1478760329108-5c3ed9d495a0"), description: "Dans un futur ou l'humanite est devenue sterile, un ancien militant doit proteger une femme enceinte qui represente un espoir unique." },
  { title: "Alive", category: "Survival", rating: 7.1, year: 1993, image: poster("photo-1493246507139-91e8fad9978e"), description: "Apres un crash dans les Andes, une equipe de rugby doit survivre au froid, a la faim et a l'isolement en attendant un secours improbable." },
  { title: "The Book of Eli", category: "Apocalypse", rating: 6.9, year: 2010, image: poster("photo-1500530855697-b586d89ba3ee"), description: "Dans une Amerique ravagee, Eli traverse le pays avec un livre sacre que convoite un chef violent." },
  { title: "2012", category: "Apocalypse", rating: 6.2, year: 2009, image: poster("photo-1500534314209-a25ddb2bd429"), description: "Alors que des catastrophes planetaires menacent l'humanite, une famille tente d'atteindre les arches construites pour sauver quelques survivants." },
  { title: "War of the Worlds", category: "Apocalypse", rating: 6.8, year: 2005, image: poster("photo-1446776811953-b23d57bd21aa"), description: "Un pere tente de proteger ses enfants lorsqu'une invasion extraterrestre detruit les villes et bouleverse le monde." },
  { title: "Life", category: "Science-fiction", rating: 6.7, year: 2017, image: poster("photo-1535223289827-42f1e9919769"), description: "A bord de la Station spatiale internationale, des scientifiques decouvrent une forme de vie martienne qui devient rapidement hostile." }
];

movies.push(...extraMovies);

const officialPosters = {
  "Sinister": "https://upload.wikimedia.org/wikipedia/en/f/f8/SinisterMoviePoster2012.jpg",
  "Insidious": "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg",
  "The Conjuring": "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
  "Annabelle": "https://upload.wikimedia.org/wikipedia/en/9/90/Annabelle_film_poster.jpg",
  "Smile": "https://upload.wikimedia.org/wikipedia/en/7/7f/Smile_%282022_film%29.jpg",
  "Hereditary": "https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png",
  "Midsommar": "https://upload.wikimedia.org/wikipedia/en/4/47/Midsommar_%282019_film_poster%29.png",
  "Evil Dead Rise": "https://upload.wikimedia.org/wikipedia/en/9/98/EvilDeadRiseTeaser.jpg",
  "The Nun": "https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg",
  "It": "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
  "Carrie": "https://upload.wikimedia.org/wikipedia/en/d/d7/Carrieposter.jpg",
  "Fear Street": "https://upload.wikimedia.org/wikipedia/en/5/5a/Fear_Street_Part_One_-_1994_%282021_film%29.png",
  "The Strangers": "https://upload.wikimedia.org/wikipedia/en/4/4a/Strangersposter.jpg",
  "Countdown": "https://upload.wikimedia.org/wikipedia/en/a/a8/Countdown2019MoviePoster.jpg",
  "Truth or Dare": "https://upload.wikimedia.org/wikipedia/en/4/4d/TruthorDarePoster.jpg",
  "Shutter Island": "https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg",
  "Gone Girl": "https://upload.wikimedia.org/wikipedia/en/0/05/Gone_Girl_Poster.jpg",
  "Se7en": "https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg",
  "Prisoners": "https://upload.wikimedia.org/wikipedia/en/6/63/Prisoners2013Poster.jpg",
  "Fight Club": "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
  "Black Swan": "https://upload.wikimedia.org/wikipedia/en/6/68/Black_Swan_poster.jpg",
  "Split": "https://upload.wikimedia.org/wikipedia/en/3/31/Split_%282017_film%29.jpg",
  "John Wick": "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
  "Extraction": "https://upload.wikimedia.org/wikipedia/en/8/89/Extraction_%282020_film%29.png",
  "Nobody": "https://upload.wikimedia.org/wikipedia/en/c/c7/Nobody_2021_Film_Poster.jpeg",
  "Mad Max: Fury Road": "https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg",
  "The Dark Knight": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
  "Bullet Train": "https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg",
  "Tyler Rake 2": "https://upload.wikimedia.org/wikipedia/en/0/02/Extraction_2_poster.jpg",
  "Interstellar": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
  "Inception": "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  "Blade Runner 2049": "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
  "The Matrix": "https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png",
  "Dune": "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  "Ready Player One": "https://upload.wikimedia.org/wikipedia/en/7/74/Ready_Player_One_%28film%29.png",
  "Oblivion": "https://upload.wikimedia.org/wikipedia/en/2/2e/Oblivion2013Poster.jpg",
  "Bird Box": "https://upload.wikimedia.org/wikipedia/en/b/bd/Bird_Box_%28film%29.png",
  "A Quiet Place": "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
  "World War Z": "https://upload.wikimedia.org/wikipedia/en/d/dc/World_War_Z_poster.jpg",
  "Train to Busan": "https://upload.wikimedia.org/wikipedia/en/9/95/Train_to_Busan.jpg",
  "I Am Legend": "https://upload.wikimedia.org/wikipedia/en/d/df/I_am_legend_teaser.jpg",
  "The Platform": "https://upload.wikimedia.org/wikipedia/en/5/54/The_Platform_poster.jpg"
};

Object.assign(officialPosters, {
  "The Exorcist": "https://upload.wikimedia.org/wikipedia/en/7/7b/Exorcist_ver2.jpg",
  "The Ring": "https://upload.wikimedia.org/wikipedia/en/3/37/Theringpostere.jpg",
  "The Grudge": "https://upload.wikimedia.org/wikipedia/en/9/91/The_Grudge_movie.jpg",
  "Saw": "https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg",
  "Scream": "https://upload.wikimedia.org/wikipedia/en/8/86/Scream_%281996_film%29_poster.jpg",
  "Halloween": "https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg",
  "The Texas Chain Saw Massacre": "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Texas_Chain_Saw_Massacre_%281974%29_theatrical_poster.jpg",
  "Paranormal Activity": "https://upload.wikimedia.org/wikipedia/en/5/54/Paranormal_Activity_poster.jpg",
  "The Babadook": "https://upload.wikimedia.org/wikipedia/en/d/d7/The-Babadook-Poster.jpg",
  "REC": "https://upload.wikimedia.org/wikipedia/en/4/4b/Rec_poster.jpg",
  "Us": "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png",
  "Get Out": "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
  "The Visit": "https://upload.wikimedia.org/wikipedia/en/b/ba/The_Visit_%282015_film%29_poster.jpg",
  "Lights Out": "https://upload.wikimedia.org/wikipedia/en/d/dc/Lights_Out_2016_poster.jpg",
  "The Black Phone": "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Black_Phone.jpg",
  "Talk to Me": "https://upload.wikimedia.org/wikipedia/en/e/ef/TalkToMe2022poster.jpg",
  "The Autopsy of Jane Doe": "https://upload.wikimedia.org/wikipedia/en/4/47/The_Autopsy_of_Jane_Doe.jpeg",
  "The Witch": "https://upload.wikimedia.org/wikipedia/en/b/bf/The_Witch_poster.png",
  "Ouija": "https://upload.wikimedia.org/wikipedia/en/5/54/Ouija_2014_poster.jpg",
  "Jeepers Creepers": "https://upload.wikimedia.org/wikipedia/en/6/60/Jeepers_Creepers_%282001_film%29_poster.jpg",
  "Nightcrawler": "https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg",
  "Zodiac": "https://upload.wikimedia.org/wikipedia/en/3/3a/Zodiac2007Poster.jpg",
  "The Girl with the Dragon Tattoo": "https://upload.wikimedia.org/wikipedia/en/8/80/The_Girl_with_the_Dragon_Tattoo_Poster.jpg",
  "The Silence of the Lambs": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg",
  "Enemy": "https://upload.wikimedia.org/wikipedia/en/0/0d/Enemy_poster.jpg",
  "Oldboy": "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg",
  "Source Code": "https://upload.wikimedia.org/wikipedia/en/e/e5/Source_Code_Poster.jpg",
  "Memento": "https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg",
  "No Country for Old Men": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  "The Game": "https://upload.wikimedia.org/wikipedia/en/2/22/The_Game_film_poster.jpg",
  "Mission: Impossible - Fallout": "https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg",
  "Gladiator": "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png",
  "300": "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg",
  "The Raid": "https://upload.wikimedia.org/wikipedia/en/9/9a/The_Raid_2011_poster.jpg",
  "Top Gun: Maverick": "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
  "Deadpool": "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png",
  "Avengers: Endgame": "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
  "Casino Royale": "https://upload.wikimedia.org/wikipedia/en/8/82/Casino_Royale_%282006_film_poster%29.jpg",
  "Fast & Furious 7": "https://upload.wikimedia.org/wikipedia/en/b/b8/Furious_7_poster.jpg",
  "The Equalizer": "https://upload.wikimedia.org/wikipedia/en/8/81/The_Equalizer_poster.jpg",
  "Alien": "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
  "Arrival": "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival%2C_Movie_Poster.jpg",
  "Edge of Tomorrow": "https://upload.wikimedia.org/wikipedia/en/f/f9/Edge_of_Tomorrow_Poster.jpg",
  "Moon": "https://upload.wikimedia.org/wikipedia/en/a/af/Moon_%282009_film%29.jpg",
  "Looper": "https://upload.wikimedia.org/wikipedia/en/0/0a/Looper_poster.jpg",
  "Gravity": "https://upload.wikimedia.org/wikipedia/en/f/f6/Gravity_Poster.jpg",
  "District 9": "https://upload.wikimedia.org/wikipedia/en/d/d7/District_nine_ver2.jpg",
  "Tenet": "https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg",
  "Passengers": "https://upload.wikimedia.org/wikipedia/en/8/8e/Passengers_2016_film_poster.jpg",
  "Annihilation": "https://upload.wikimedia.org/wikipedia/en/f/f6/Annihilation_%28film%29.png",
  "The Road": "https://upload.wikimedia.org/wikipedia/en/a/a7/The_Road_movie_poster.jpg",
  "28 Days Later": "https://upload.wikimedia.org/wikipedia/en/e/e4/28_days_later.jpg",
  "The Maze Runner": "https://upload.wikimedia.org/wikipedia/en/b/be/The_Maze_Runner_poster.jpg",
  "Snowpiercer": "https://upload.wikimedia.org/wikipedia/en/b/b4/Snowpiercer_poster.jpg",
  "Children of Men": "https://upload.wikimedia.org/wikipedia/en/f/fc/Children_of_men_ver4.jpg",
  "Alive": "https://upload.wikimedia.org/wikipedia/en/8/8b/Alive92poster.jpg",
  "The Book of Eli": "https://upload.wikimedia.org/wikipedia/en/e/e3/Book_of_eli_poster.jpg",
  "2012": "https://upload.wikimedia.org/wikipedia/en/d/dd/2012_Poster.jpg",
  "War of the Worlds": "https://upload.wikimedia.org/wikipedia/en/8/83/War_of_the_Worlds_2005_poster.jpg",
  "Life": "https://upload.wikimedia.org/wikipedia/en/c/c4/Life_%282017_film%29.png"
});

let carouselIndex = 0;
let activeCategory = "Tous";

const recommendationMap = {
  "It": ["Sinister", "The Conjuring", "Annabelle", "Smile"],
  "The Conjuring": ["Insidious", "Annabelle", "The Nun", "Sinister"],
  "Interstellar": ["Inception", "Arrival", "Gravity", "Blade Runner 2049"],
  "John Wick": ["Nobody", "The Equalizer", "The Raid", "Extraction"],
  "A Quiet Place": ["Bird Box", "The Road", "28 Days Later", "Train to Busan"]
};

const quizQuestions = [
  {
    question: "Quel type d'ambiance preferes-tu ?",
    options: [
      { label: "Paranormal", tags: ["Paranormal", "Horreur"] },
      { label: "Psychologique", tags: ["Psychologique", "Mystere"] },
      { label: "Gore", tags: ["Horreur", "Survival"] },
      { label: "Survival", tags: ["Survival", "Apocalypse"] },
      { label: "Mystere", tags: ["Mystere", "Crime"] }
    ]
  },
  {
    question: "Tu preferes :",
    options: [
      { label: "Des monstres", tags: ["Horreur", "Science-fiction"] },
      { label: "Des fantomes", tags: ["Paranormal"] },
      { label: "Des tueurs", tags: ["Crime", "Thriller"] },
      { label: "Des creatures", tags: ["Science-fiction", "Horreur"] },
      { label: "Des experiences scientifiques", tags: ["Science-fiction", "Psychologique"] }
    ]
  },
  {
    question: "Quel rythme preferes-tu ?",
    options: [
      { label: "Lent et stressant", tags: ["Psychologique", "Suspense"] },
      { label: "Rapide et violent", tags: ["Action", "Survival"] },
      { label: "Mysterieux", tags: ["Mystere", "Thriller"] },
      { label: "Plein de suspense", tags: ["Suspense", "Thriller"] }
    ]
  },
  {
    question: "Tu preferes :",
    options: [
      { label: "Les films recents", tags: ["recent"] },
      { label: "Les classiques", tags: ["classic"] },
      { label: "Les films tres connus", tags: ["popular"] },
      { label: "Les films sous-cotes", tags: ["underrated"] }
    ]
  },
  {
    question: "Tu regardes surtout des films :",
    options: [
      { label: "Seul", tags: ["Psychologique", "Mystere"] },
      { label: "Entre amis", tags: ["Horreur", "Action"] },
      { label: "La nuit", tags: ["Paranormal", "Horreur"] },
      { label: "Pour avoir peur", tags: ["Horreur", "Survival"] },
      { label: "Pour reflechir", tags: ["Psychologique", "Science-fiction"] }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNavigation();
  initScrollEffects();
  initCounters();
  initBackTop();
  updateNavListCount();

  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "films") initFilms();
  if (page === "trends") initTrends();
  if (page === "quiz") initQuiz();
  if (page === "list") initMyList();
  if (page === "contact") initContact();
});

function createMovieCard(movie) {
  const article = document.createElement("article");
  article.className = "movie-card";
  article.tabIndex = 0;
  const badge = movie.rating >= 8.2 ? "TOP" : movie.year >= 2022 ? "NEW" : "";
  article.innerHTML = `
    <div class="poster-wrap">
      ${badge ? `<span class="movie-badge ${badge.toLowerCase()}">${badge}</span>` : ""}
      <button class="bookmark-btn ${isInMyList(movie.title) ? "saved" : ""}" data-quick-list="${movie.title}" aria-label="Ajouter ${movie.title} a ma liste">${isInMyList(movie.title) ? "♥" : "♡"}</button>
      <img src="${getMovieImage(movie)}" alt="Affiche du film ${movie.title}" loading="lazy">
    </div>
    <div class="movie-info">
      <h3>${movie.title}</h3>
      <div class="movie-meta">
        <span>${movie.category}</span>
        <span>${movie.year}</span>
      </div>
      <div class="movie-meta">
        <span>IMDb fictif</span>
        <span class="rating">${movie.rating}/10</span>
      </div>
    </div>
  `;
  const bookmark = article.querySelector("[data-quick-list]");
  bookmark.addEventListener("click", (event) => {
    event.stopPropagation();
    addMovieTitleToMyList(movie.title);
    bookmark.classList.add("saved", "pulse");
    bookmark.textContent = "♥";
    setTimeout(() => bookmark.classList.remove("pulse"), 420);
  });
  article.addEventListener("click", (event) => {
    if (!event.target.closest("[data-quick-list]")) openModal(movie);
  });
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter") openModal(movie);
  });
  return article;
}

function getMovieImage(movie) {
  return officialPosters[movie.title] || movie.image;
}

function initLoader() {
  const loader = document.createElement("div");
  loader.className = "page-loader";
  loader.innerHTML = `<div><strong>Night<span>Flix</span></strong><i></i></div>`;
  document.body.appendChild(loader);
  const hideLoader = () => loader.classList.add("hide");
  window.addEventListener("load", hideLoader, { once: true });
  setTimeout(hideLoader, 900);
  setTimeout(() => loader.remove(), 1400);
}

function initNavigation() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const header = document.querySelector("[data-header]");

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // La classe scrolled rend la barre plus lisible quand on descend.
  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 20);
  updateHeader();
  window.addEventListener("scroll", updateHeader);
}

function initHome() {
  const carousel = document.querySelector("[data-carousel]");
  const prev = document.querySelector("[data-carousel-prev]");
  const next = document.querySelector("[data-carousel-next]");
  if (!carousel) return;

  const renderCarousel = () => {
    carousel.innerHTML = "";
    const visible = getVisibleMovies();
    visible.forEach((movie) => carousel.appendChild(createMovieCard(movie)));
  };

  const move = (direction) => {
    carouselIndex = (carouselIndex + direction + movies.length) % movies.length;
    renderCarousel();
  };

  prev?.addEventListener("click", () => move(-1));
  next?.addEventListener("click", () => move(1));
  renderCarousel();
  renderHomeRows();
  initRandomPicker();
  setInterval(() => move(1), 4200);
  window.addEventListener("resize", renderCarousel);
}

function initRandomPicker() {
  const button = document.querySelector("[data-random-pick]");
  const select = document.querySelector("[data-random-category]");
  const result = document.querySelector("[data-random-result]");
  if (!button || !result) return;

  button.addEventListener("click", () => {
    const category = select.value;
    const pool = category === "Tous" ? movies : movies.filter((movie) => movie.category === category);
    const choice = pool[Math.floor(Math.random() * pool.length)];
    result.classList.remove("chosen");
    result.classList.add("spinning");

    setTimeout(() => {
      result.querySelector("[data-random-img]").src = getMovieImage(choice);
      result.querySelector("[data-random-img]").alt = `Affiche du film ${choice.title}`;
      result.querySelector("[data-random-img]").hidden = false;
      result.querySelector("[data-random-category-label]").textContent = `${choice.category} - ${choice.year}`;
      result.querySelector("[data-random-title]").textContent = choice.title;
      result.querySelector("[data-random-description]").textContent = choice.description;
      result.querySelector("[data-random-rating]").textContent = `IMDb fictif ${choice.rating}/10`;
      result.onclick = () => openModal(choice);
      result.classList.remove("spinning");
      result.classList.add("chosen");
    }, 360);
  });
}

function renderHomeRows() {
  const rows = {
    top: [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6),
    recommended: movies.filter((movie) => ["Psychologique", "Mystere", "Paranormal", "Suspense"].includes(movie.category)).slice(0, 6),
    new: [...movies].sort((a, b) => b.year - a.year).slice(0, 6),
    watched: movies.filter((movie) => ["Action", "Apocalypse", "Survival", "Science-fiction"].includes(movie.category)).slice(0, 6)
  };

  document.querySelectorAll("[data-home-row]").forEach((row) => {
    row.innerHTML = "";
    rows[row.dataset.homeRow].forEach((movie) => row.appendChild(createMovieCard(movie)));
  });
}

function getVisibleMovies() {
  const count = window.innerWidth < 721 ? 1 : window.innerWidth < 981 ? 2 : 4;
  return Array.from({ length: count }, (_, index) => movies[(carouselIndex + index) % movies.length]);
}

function initFilms() {
  const grid = document.querySelector("[data-movie-grid]");
  const search = document.querySelector("[data-search]");
  const suggestions = document.querySelector("[data-search-suggestions]");
  const filters = document.querySelectorAll("[data-category]");
  const empty = document.querySelector("[data-empty]");
  if (!grid) return;
  activeCategory = "Tous";
  search.value = "";
  filters.forEach((item) => item.classList.toggle("active", item.dataset.category === "Tous"));

  const findMatches = () => {
    const query = search.value.trim().toLowerCase();
    return movies.filter((movie) => {
      const matchesCategory = activeCategory === "Tous" || movie.category === activeCategory;
      const searchable = `${movie.title} ${movie.category} ${movie.year} ${movie.description}`.toLowerCase();
      const matchesSearch = searchable.includes(query);
      return matchesCategory && matchesSearch;
    });
  };

  const renderSuggestions = (matches) => {
    if (!suggestions) return;
    const query = search.value.trim();
    suggestions.innerHTML = "";
    if (query.length < 2) {
      suggestions.classList.remove("open");
      return;
    }

    matches.slice(0, 7).forEach((movie) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "suggestion-item";
      button.innerHTML = `
        <img src="${getMovieImage(movie)}" alt="${movie.title}">
        <span><strong>${movie.title}</strong><small>${movie.category} - ${movie.year}</small></span>
      `;
      button.addEventListener("click", () => {
        suggestions.classList.remove("open");
        openModal(movie);
      });
      suggestions.appendChild(button);
    });
    suggestions.classList.toggle("open", matches.length > 0);
  };

  const render = () => {
    const filtered = findMatches();

    grid.innerHTML = "";
    filtered.forEach((movie) => grid.appendChild(createMovieCard(movie)));
    grid.classList.add("visible");
    empty.hidden = filtered.length !== 0;
    renderSuggestions(filtered);
  };

  search?.addEventListener("input", render);
  search?.addEventListener("blur", () => setTimeout(() => suggestions?.classList.remove("open"), 180));
  search?.addEventListener("focus", render);
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeCategory = button.dataset.category;
      render();
    });
  });
  render();
}

function openModal(movie) {
  const modal = ensureModal();
  modal.querySelector("[data-modal-img]").src = getMovieImage(movie);
  modal.querySelector("[data-modal-img]").alt = `Affiche du film ${movie.title}`;
  modal.querySelector("[data-modal-title]").textContent = movie.title;
  modal.querySelector("[data-modal-category]").textContent = movie.category;
  modal.querySelector("[data-modal-description]").textContent = movie.description;
  modal.querySelector("[data-modal-rating]").textContent = `${movie.year} - Note IMDb fictive: ${movie.rating}/10`;
  modal.querySelector("[data-add-list]").textContent = isInMyList(movie.title) ? "Ajoute a ma liste" : "Ajouter a ma liste";
  modal.querySelector("[data-add-list]").dataset.movieTitle = movie.title;
  modal.querySelector("[data-list-feedback]").textContent = "";
  renderSimilarMovies(movie, modal);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-lock");
}

function ensureModal() {
  let modal = document.querySelector("[data-modal]");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "modal";
    modal.dataset.modal = "";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = `
      <div class="modal-overlay" data-close-modal></div>
      <article class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button class="modal-close" data-close-modal aria-label="Fermer la popup">&times;</button>
        <img data-modal-img alt="">
        <div class="modal-content">
          <span data-modal-category></span>
          <h2 id="modal-title" data-modal-title></h2>
          <p data-modal-description></p>
          <strong data-modal-rating></strong>
          <div class="modal-actions">
            <button class="btn primary" data-add-list type="button">Ajouter a ma liste</button>
            <button class="btn ghost" data-close-modal type="button">Fermer</button>
          </div>
          <small class="list-feedback" data-list-feedback></small>
          <div class="similar-section">
            <h3>Films similaires - Vous pourriez aimer</h3>
            <div class="similar-grid" data-similar-grid></div>
          </div>
        </div>
      </article>
    `;
    document.body.appendChild(modal);
  }

  if (!modal.querySelector("[data-add-list]")) {
    const content = modal.querySelector(".modal-content");
    const actions = document.createElement("div");
    actions.className = "modal-actions";
    actions.innerHTML = `
      <button class="btn primary" data-add-list type="button">Ajouter a ma liste</button>
      <button class="btn ghost" data-close-modal type="button">Fermer</button>
    `;
    const feedback = document.createElement("small");
    feedback.className = "list-feedback";
    feedback.dataset.listFeedback = "";
    const similar = document.createElement("div");
    similar.className = "similar-section";
    similar.innerHTML = `<h3>Films similaires - Vous pourriez aimer</h3><div class="similar-grid" data-similar-grid></div>`;
    content.append(actions, feedback, similar);
  }

  return modal;
}

function renderSimilarMovies(movie, modal) {
  const grid = modal.querySelector("[data-similar-grid]");
  if (!grid) return;
  const mapped = (recommendationMap[movie.title] || [])
    .map((title) => movies.find((item) => item.title === title))
    .filter(Boolean);
  const automatic = movies
    .filter((item) => item.title !== movie.title && (item.category === movie.category || item.rating >= 8.0))
    .slice(0, 4);
  const similar = [...mapped, ...automatic]
    .filter((item, index, list) => list.findIndex((match) => match.title === item.title) === index)
    .slice(0, 4);

  grid.innerHTML = "";
  similar.forEach((item) => {
    const button = document.createElement("button");
    button.className = "similar-card";
    button.type = "button";
    button.innerHTML = `
      <img src="${getMovieImage(item)}" alt="${item.title}">
      <span>${item.title}</span>
    `;
    button.addEventListener("click", () => openModal(item));
    grid.appendChild(button);
  });
}

document.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) closeModal();
  if (event.target.matches("[data-add-list]")) addToMyList(event.target);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

function closeModal() {
  const modal = document.querySelector("[data-modal]");
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-lock");
}

function addToMyList(button) {
  const title = button.dataset.movieTitle;
  addMovieTitleToMyList(title);
  button.textContent = "Ajoute a ma liste";
  button.classList.add("added-pop");
  setTimeout(() => button.classList.remove("added-pop"), 450);
  const feedback = document.querySelector("[data-list-feedback]");
  if (feedback) feedback.textContent = `${title} est maintenant dans votre liste.`;
}

function addMovieTitleToMyList(title) {
  const list = getMyList();
  if (!list.includes(title)) list.push(title);
  localStorage.setItem("nightflix-list", JSON.stringify(list));
  updateNavListCount();
  showToast(`${title} ajoute a votre liste.`);
}

function getMyList() {
  try {
    return JSON.parse(localStorage.getItem("nightflix-list") || "[]");
  } catch {
    return [];
  }
}

function isInMyList(title) {
  return getMyList().includes(title);
}

function removeFromMyList(title) {
  const nextList = getMyList().filter((item) => item !== title);
  localStorage.setItem("nightflix-list", JSON.stringify(nextList));
  updateNavListCount();
  if (document.body.dataset.page === "list") initMyList();
}

function updateNavListCount() {
  document.querySelectorAll("[data-nav-list-count]").forEach((count) => {
    count.textContent = getMyList().length;
  });
}

function showToast(message) {
  let toast = document.querySelector("[data-toast]");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.dataset.toast = "";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function initMyList() {
  const grid = document.querySelector("[data-my-list-grid]");
  const empty = document.querySelector("[data-list-empty]");
  const total = document.querySelector("[data-list-total]");
  if (!grid) return;

  const savedTitles = getMyList();
  const savedMovies = savedTitles
    .map((title) => movies.find((movie) => movie.title === title))
    .filter(Boolean);

  grid.innerHTML = "";
  savedMovies.forEach((movie) => {
    const card = createMovieCard(movie);
    card.classList.add("saved-card");
    const remove = document.createElement("button");
    remove.className = "remove-list-btn";
    remove.type = "button";
    remove.textContent = "Retirer de ma liste";
    remove.addEventListener("click", (event) => {
      event.stopPropagation();
      removeFromMyList(movie.title);
    });
    card.querySelector(".movie-info").appendChild(remove);
    grid.appendChild(card);
  });

  if (total) total.textContent = savedMovies.length;
  empty.hidden = savedMovies.length !== 0;
}

function initQuiz() {
  const questionTitle = document.querySelector("[data-quiz-question]");
  const optionsBox = document.querySelector("[data-quiz-options]");
  const stepLabel = document.querySelector("[data-quiz-step]");
  const progress = document.querySelector("[data-quiz-progress]");
  const result = document.querySelector("[data-quiz-result]");
  if (!questionTitle || !optionsBox) return;

  let index = 0;
  const score = {};

  const renderQuestion = () => {
    const item = quizQuestions[index];
    result.hidden = true;
    questionTitle.textContent = item.question;
    stepLabel.textContent = `Question ${index + 1} / ${quizQuestions.length}`;
    progress.style.width = `${(index / quizQuestions.length) * 100}%`;
    optionsBox.innerHTML = "";
    optionsBox.classList.remove("swap");
    setTimeout(() => optionsBox.classList.add("swap"), 20);

    item.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option.label;
      button.addEventListener("click", () => {
        option.tags.forEach((tag) => {
          score[tag] = (score[tag] || 0) + 1;
        });
        index += 1;
        if (index < quizQuestions.length) renderQuestion();
        else renderQuizResult(score);
      });
      optionsBox.appendChild(button);
    });
  };

  renderQuestion();
}

function renderQuizResult(score) {
  const questionTitle = document.querySelector("[data-quiz-question]");
  const optionsBox = document.querySelector("[data-quiz-options]");
  const stepLabel = document.querySelector("[data-quiz-step]");
  const progress = document.querySelector("[data-quiz-progress]");
  const result = document.querySelector("[data-quiz-result]");
  const bestTag = Object.entries(score).sort((a, b) => b[1] - a[1])[0]?.[0] || "Horreur";

  let candidates = movies.filter((movie) => movie.category === bestTag);
  if (bestTag === "recent") candidates = movies.filter((movie) => movie.year >= 2018);
  if (bestTag === "classic") candidates = movies.filter((movie) => movie.year <= 2005);
  if (bestTag === "popular") candidates = movies.filter((movie) => movie.rating >= 8);
  if (bestTag === "underrated") candidates = movies.filter((movie) => movie.rating >= 6.7 && movie.rating < 7.5);
  if (!candidates.length) candidates = movies.filter((movie) => ["Horreur", "Paranormal", "Psychologique", "Survival"].includes(movie.category));

  const recommended = candidates.sort((a, b) => b.rating - a.rating)[0];
  progress.style.width = "100%";
  stepLabel.textContent = "Resultat";
  questionTitle.textContent = "NightFlix te recommande :";
  optionsBox.innerHTML = "";
  result.hidden = false;
  result.innerHTML = `
    <img src="${getMovieImage(recommended)}" alt="Affiche du film ${recommended.title}">
    <div>
      <span>${recommended.category} - ${recommended.year}</span>
      <h3>${recommended.title}</h3>
      <p>${recommended.description}</p>
      <strong>IMDb fictif ${recommended.rating}/10</strong>
      <div class="modal-actions">
        <button class="btn primary" data-quiz-open type="button">Voir le film</button>
        <button class="btn ghost" data-quiz-restart type="button">Recommencer</button>
      </div>
    </div>
  `;
  result.querySelector("[data-quiz-open]").addEventListener("click", () => openModal(recommended));
  result.querySelector("[data-quiz-restart]").addEventListener("click", initQuiz);
}

function initTrends() {
  const ranking = document.querySelector("[data-ranking]");
  if (!ranking) return;
  const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
  ranking.innerHTML = "";
  topMovies.forEach((movie, index) => {
    const card = document.createElement("article");
    card.className = "rank-card";
    card.innerHTML = `
      <div class="rank-number">${String(index + 1).padStart(2, "0")}</div>
      <img src="${getMovieImage(movie)}" alt="${movie.title}" loading="lazy">
      <div>
        <h3>${movie.title}</h3>
        <p>${movie.category} - ${movie.description}</p>
      </div>
      <div class="score">${movie.rating}/10</div>
    `;
    card.tabIndex = 0;
    card.addEventListener("click", () => openModal(movie));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter") openModal(movie);
    });
    ranking.appendChild(card);
  });
}

function initContact() {
  const form = document.querySelector("[data-contact-form]");
  const success = document.querySelector("[data-form-success]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const errors = validateForm(values);

    form.querySelectorAll("small[data-error-for]").forEach((node) => {
      node.textContent = errors[node.dataset.errorFor] || "";
    });

    if (Object.keys(errors).length === 0) {
      success.hidden = false;
      success.classList.remove("error");
      success.textContent = "Envoi en cours...";
      const submitButton = form.querySelector("button[type='submit']");
      submitButton.disabled = true;

      setTimeout(() => {
        success.textContent = "Votre message a été envoyé avec succès.";
        submitButton.disabled = false;
        form.reset();
      }, 1400);
    } else {
      success.hidden = true;
    }
  });
}

function validateForm(values) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.name.trim()) errors.name = "Le nom est obligatoire.";
  if (!values.email.trim()) errors.email = "L'email est obligatoire.";
  else if (!emailPattern.test(values.email)) errors.email = "L'email n'est pas valide.";
  if (!values.subject.trim()) errors.subject = "Le sujet est obligatoire.";
  if (!values.message.trim()) errors.message = "Le message est obligatoire.";
  return errors;
}

function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.counter);
      const duration = 1300;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        entry.target.textContent = Math.floor(progress * target).toLocaleString("fr-FR");
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
}

function initScrollEffects() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.16 });

  elements.forEach((element) => observer.observe(element));
}

function initBackTop() {
  const button = document.querySelector("[data-back-top]");
  if (!button) return;

  window.addEventListener("scroll", () => {
    button.classList.toggle("visible", window.scrollY > 520);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
