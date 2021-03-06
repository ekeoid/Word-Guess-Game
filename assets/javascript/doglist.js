// dog breeds and images were taken from www.akc.org for use on this site.

var dogList = `[
    {"breed": "Affenpinscher",
     "image": "affenpinscher.jpg"},
    {"breed": "Afghan Hound",
     "image": "afghan-hound.jpg"},
    {"breed": "Airedale Terrier",
     "image": "airedale-terrier.jpg"},
    {"breed": "Akita",
     "image": "akita.jpg"},
    {"breed": "Alaskan Malamute",
     "image": "alaskan-malamute.jpg"},
    {"breed": "American English Coonhound",
     "image": "american-english-coonhound.jpg"},
    {"breed": "American Eskimo",
     "image": "american-eskimo.jpg"},
    {"breed": "American Foxhound",
     "image": "american-foxhound.jpg"},
    {"breed": "American Hairless Terrier",
     "image": "american-hairless-terrier.jpg"},
    {"breed": "American Leopard Hound",
     "image": "american-leopard-hound.jpg"},
    {"breed": "American Staffordshire Terrier",
     "image": "american-staffordshire-terrier.jpg"},
    {"breed": "American Water Spaniel",
     "image": "american-water-spaniel.jpg"},
    {"breed": "Anatolian Shepherd",
     "image": "anatolian-shepherd-dog.jpg"},
    {"breed": "Appenzeller Sennenhund",
     "image": "appenzeller-sennenhund.jpg"},
    {"breed": "Australian Cattle",
     "image": "australian-cattle.jpg"},
    {"breed": "Australian Kelpie",
     "image": "australian-kelpie.jpg"},
    {"breed": "Australian Shepherd",
     "image": "australian-shepherd.jpg"},
    {"breed": "Australian Stumpy Tail Cattle",
     "image": "australian-stumpy-tail-cattle.jpg"},
    {"breed": "Australian Terrier",
     "image": "autralian-terrier.jpg"},
    {"breed": "Azawakh",
     "image": "azawakh.jpg"},
    {"breed": "Barbet",
     "image": "barbet.jpg"},
    {"breed": "Basenji",
     "image": "basenji.jpg"},
    {"breed": "Basset Fauve de Bretagne",
     "image": "basset-fauve-de-bretagne.jpg"},
    {"breed": "Basset Hound",
     "image": "basset-hound.jpg"},
    {"breed": "Bavarian Mountain Scent Hound",
     "image": "bavarian-mountain-scent-hound.jpg"},
    {"breed": "Beagle",
     "image": "beagle.jpg"},
    {"breed": "Bearded Collie",
     "image": "bearded-collie.jpg"},
    {"breed": "Beauceron",
     "image": "beauceron.jpg"},
    {"breed": "Bedlington Terrier",
     "image": "bedlington-terrier.jpg"},
    {"breed": "Belgian Laekenois",
     "image": "belgian-laekenois.jpg"},
    {"breed": "Belgian Malinois",
     "image": "belgian-malinois.jpg"},
    {"breed": "Belgian Sheepdog",
     "image": "belgian-sheepdog.jpg"},
    {"breed": "Belgian Tervuren",
     "image": "belgian-tervuren.jpg"},
    {"breed": "Bergamasco Sheepdog",
     "image": "bergamasco-sheepdog.jpg"},
    {"breed": "Berger Picard",
     "image": "berger-picard.jpg"},
    {"breed": "Bernese Mountain Dog",
     "image": "bernese-mountain-dog.jpg"},
    {"breed": "Bichon Frise",
     "image": "bichon-frise.jpg"},
    {"breed": "Biewer Terrier",
     "image": "biewer-terrier.jpg"},
    {"breed": "Black and Tan Coonhound",
     "image": "black-and-tan-coonhound.jpg"},
    {"breed": "Black Russian Terrier",
     "image": "black-russian-terrier.jpg"},
    {"breed": "Bloodhound",
     "image": "bloodhound.jpg"},
    {"breed": "Bluetick Coonhound",
     "image": "bluetick-coonhound.jpg"},
    {"breed": "Boerboel",
     "image": "boerboel.jpg"},
    {"breed": "Bolognese",
     "image": "bolognese.jpg"},
    {"breed": "Border Collie",
     "image": "border-collie.jpg"},
    {"breed": "Border Terrier",
     "image": "border-terrier.jpg"},
    {"breed": "Borzoi",
     "image": "borzoi.jpg"},
    {"breed": "Boston Terrier",
     "image": "boston-terrier.jpg"},
    {"breed": "Bouvier des Flandres",
     "image": "bouvier-des-flandres.jpg.jpg"},
    {"breed": "Boxer",
     "image": "boxer.jpg"},

    {"breed": "Dachshund",
     "image": "dachshund.jpg"},
    {"breed": "German Longhaired Pointer",
     "image": "german-longhaired-pointer.jpg"},
    {"breed": "German Pinscher",
     "image": "german-pinscher.jpg"},
    {"breed": "German Shepherd Dog",
     "image": "german-shepherd.jpg"},
    {"breed": "German Shorthaired Pointer",
     "image": "german-shorthaired-pointer.jpg"},
    {"breed": "German Spitz",
     "image": "german-spitz.jpg"},
    {"breed": "German Wirehaired Pointer",
     "image": "german-wirehaired-pointer.jpg"},
    {"breed": "Giant Schnauzer",
     "image": "giant-schnauzer.jpg"},
    {"breed": "Glen of Imaal Terrier",
     "image": "glen-of-imaal-terrier.jpg"},
    {"breed": "Golden Retriever",
     "image": "golden-retriever.jpg"},
    {"breed": "Gordon Setter",
     "image": "gordon-setter.jpg"},
    {"breed": "Grand Basset Griffon Vendeen",
     "image": "grand-bassett-griffon-vendeen.jpg"},
    {"breed": "Great Dane",
     "image": "great-dane.jpg"},
    {"breed": "Great Pyrenees",
     "image": "great-pyrenees.jpg"},
    {"breed": "Greater Swiss Mountain Dog",
     "image": "greater-swiss-mountain-dog.jpg"},
    {"breed": "Greyhound",
     "image": "greyhound.jpg"},

    {"breed": "Saint Bernard",
     "image": "saint-bernard.jpg"},
    {"breed": "Saluki",
     "image": "saluki.jpg"},
    {"breed": "Samoyed",
     "image": "samoyed.jpg"},
    {"breed": "Schapendoes",
     "image": "schapendoes.jpg"},
    {"breed": "Schipperke",
     "image": "schipperke.jpg"},
    {"breed": "Scottish Deerhound",
     "image": "scottish-deerhound.jpg"},
    {"breed": "Scottish Terrier",
     "image": "scottish-terrier.jpg"},
    {"breed": "Sealyham Terrier",
     "image": "sealyham-terrier.jpg"},
    {"breed": "Segugio Italiano",
     "image": "segugio-italiano.jpg"},
    {"breed": "Shetland Sheepdog",
     "image": "shetland-sheepdog.jpg"},
    {"breed": "Shiba Inu",
     "image": "shiba-inu.jpg"},
    {"breed": "Shih Tzu",
     "image": "shih-tzu.jpg"},
    {"breed": "Shikoku",
     "image": "shikoku.jpg"},
    {"breed": "Siberian Husky",
     "image": "siberian-husky.jpg"},
    {"breed": "Silky Terrier",
     "image": "silky-terrier.jpg"},
    {"breed": "Skye Terrier",
     "image": "skye-terrier.jpg"},
    {"breed": "Sloughi",
     "image": "sloughi.jpg"},
    {"breed": "Slovakian Wirehaired Pointer",
     "image": "slovakian-wirehaired-pointer.jpg"},
    {"breed": "Slovensky Cuvac",
     "image": "slovensky-cuvac.jpg"},
    {"breed": "Slovensky Kopov",
     "image": "slovensky-kopov.jpg"},
    {"breed": "Small Munsterlander Pointer",
     "image": "small-munsterlander-pointer.jpg"},
    {"breed": "Smooth Fox Terrier",
     "image": "smooth-fox-terrier.jpg"},
    {"breed": "Soft Coated Wheaten Terrier",
     "image": "soft-coated-wheaten-terrier.jpg"},
    {"breed": "Spanish Mastiff",
     "image": "spanish-mastiff.jpg"},
    {"breed": "Spanish Water Dog",
     "image": "spanish-water-dog.jpg"},
    {"breed": "Spinone Italiano",
     "image": "spinone-italiano.jpg"},
    {"breed": "Stabyhoun",
     "image": "stabyhoun.jpg"},
    {"breed": "Staffordshire Bull Terrier",
     "image": "staffordshire-bull-terrier.jpg"},
    {"breed": "Standard Schnauzer",
     "image": "standard-schnauzer.jpg"},
    {"breed": "Sussex Spaniel",
     "image": "sussex-spaniel.jpg"},
    {"breed": "Swedish Lapphund",
     "image": "swedish-lapphund.jpg"},
    {"breed": "Swedish Vallhund",
     "image": "swedish-vallhund.jpg"},
    
{}
]`;
