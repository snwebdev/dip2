/**
 * Created by stewart on 07/07/17.
 */

const map = [
    {
        name: "Alb",
        fullName: "Albania",
        armyNeighbour: ["Tri", "Ser", "Gre"],
        fleetNeighbour:["Tri", "Gre", "ION", "ADS"]
    },
    {
        name: "ADS",
        fullName: "The Adriatic",
        armyNeighbour: [],
        fleetNeighbour:["Tri", "Alb", "ION", "Apu", "Ven"]
    },
    {
        name: "AEG",
        fullName: "The Aegean",
        armyNeighbour: [],
        fleetNeighbour:["Bul(sc)", "Con", "Smy", "EMS", "ION", "Gre"]
    },
    {
        name: "Ank",
        fullName: "Ankera",
        armyNeighbour: ["Arm", "Smy", "Con"],
        fleetNeighbour:["BLA", "Arm", "Con"]
    },
    {
        name: "Apu",
        fullName: "Apulia",
        armyNeighbour: ["Ven", "Nap", "Rom"],
        fleetNeighbour:["ADS", "ION", "Nap"]
    },
    {
        name: "Arm",
        fullName: "Armenia",
        armyNeighbour: ["Sev", "Smy", "Syr", "Ank"],
        fleetNeighbour:["Sev", "Ank", "BLA"]
    },
    {
        name: "BAL",
        fullName: "The Baltic Sea",
        armyNeighbour: [],
        fleetNeighbour:["GoB", "Lvn", "Pru", "Ber", "Kie", "Den", "Swe"]
    },
    {
        name: "Bel",
        fullName: "Belgium",
        armyNeighbour: ["Hol", "Ruh", "Bur", "Pic"],
        fleetNeighbour:["NTH", "Hol", "Pic", "ENG"]
    },
    {
        name: "Ber",
        fullName: "Berlin",
        armyNeighbour: ["Pru", "Sil", "Mun", "Kie"],
        fleetNeighbour:["Bal", "Pru", "Sil", "Mun", "Kie"]
    },
    {
        name: "BLA",
        fullName: "The Black Sea",
        armyNeighbour: [],
        fleetNeighbour:["Sev", "Arm", "Ank", "Con", "Bul(nc)", "Rum"]
    },
    {
        name: "Boh",
        fullName: "Bohemia",
        armyNeighbour: ["Sil", "Gal", "Vie", "Tyr", "Mun"],
        fleetNeighbour:[]
    },
    {
        name: "Bre",
        fullName: "Brest",
        armyNeighbour: ["Pic", "Par", "Gas"],
        fleetNeighbour:["ENG", "Pic", "Gas", "MAO"]
    },
    {
        name: "Bud",
        fullName: "Budapest",
        armyNeighbour: ["Gal", "Rum", "Ser", "Tri", "Vie"],
        fleetNeighbour:[]
    },
    {
        name: "Bul",
        fullName: "",
        armyNeighbour: ["Rum", "Con", "Gre", "Ser"],
        fleetNeighbour:[],
    },
    {
        name: "Bul(nc)",
        fullName: "Bulgaria, north coast",
        armyNeighbour: [],
        fleetNeighbour:["Rum", "BLA", "Con"]
    },
    {
        name: "Bul(sc)",
        fullName: "Bulgaria, south coast",
        armyNeighbour: [],
        fleetNeighbour:["Con", "AEG", "Gre"]
    },
    {
        name: "Bur",
        fullName: "Burgandy",
        armyNeighbour: ["Bel", "Ruh", "Mun", "Mar", "Gas", "Par", "Pic"],
        fleetNeighbour:[]
    },
    {
        name: "Cly",
        fullName: "Clyde",
        armyNeighbour: ["Edi", "Lvp"],
        fleetNeighbour:["NAO", "Edi", "Lvp", "IRI"]
    },
    {
        name: "Con",
        fullName: "Constantinople",
        armyNeighbour: ["Bul", "Ank", "Smy"],
        fleetNeighbour:["BLA", "Ank", "Smy", "Bul(sc)", "Bul(nc)"]
    },
    {
        name: "Den",
        fullName: "Denmark",
        armyNeighbour: ["Swe", "Kie"],
        fleetNeighbour:["Ska", "Swe", "BAL", "Kie", "HEL", "NTH"]
    },
    {
        name: "Edi",
        fullName: "Edinburgh",
        armyNeighbour: ["Yor", "Lvp", "Cly"],
        fleetNeighbour:["NWG", "NTH", "Yor", "Cly"]
    },
    {
        name: "EMS",
        fullName: "The Eastern Mediteranean",
        armyNeighbour: [],
        fleetNeighbour:["Smy", "Syr", "ION", "AEG"]
    },
    {
        name: "ENG",
        fullName: "The English Channel",
        armyNeighbour: [],
        fleetNeighbour:["Wal", "Lon", "NTH", "Bel", "Pic", "Bre", "MAO", "IRI"]
    },
    {
        name: "Fin",
        fullName: "Finland",
        armyNeighbour: ["Nor", "StP", "Swe"],
        fleetNeighbour:["StP(sc)", "GoB"]
    },
    {
        name: "Gas",
        fullName: "Gascony",
        armyNeighbour: ["Bre", "Par", "Bur", "Mar", "Spa"],
        fleetNeighbour:["Bre", "Spa(nc)", "MAO"]
    },
    {
        name: "Gal",
        fullName: "Galicia",
        armyNeighbour: ["War", "Ukr", "Rum", "Bud", "Vie"],
        fleetNeighbour:[]
    },
    {
        name: "GoB",
        fullName: "The Gulf of Bothnia",
        armyNeighbour: [],
        fleetNeighbour:["Fin", "StP(sc)", "Liv", "BAL", "Swe"]
    },
    {
        name: "GoL",
        fullName: "The Gulf of Lyon",
        armyNeighbour: [],
        fleetNeighbour:["Mar", "Pie", "TYR", "WES", "Spa(sc)"]
    },
    {
        name: "Gre",
        fullName: "Greece",
        armyNeighbour: ["Alb", "Ser", "Bul"],
        fleetNeighbour:["Bul(sc)", "AEG", "ION", "Alb"]
    },
    {
        name: "HEL",
        fullName: "The Heligoland Bight",
        armyNeighbour: [],
        fleetNeighbour:["NTH", "Den", "Kie", "Hol"]
    },
    {
        name: "Hol",
        fullName: "Holland",
        armyNeighbour: ["Kie", "Ruh", "Bel"],
        fleetNeighbour:["NTH", "Hel", "Kie", "Bel"]
    },
    {
        name: "ION",
        fullName: "The Ionian Sea",
        armyNeighbour: [],
        fleetNeighbour:["ADS", "Alb", "Gre", "AEG", "EAS", "Tun", "TYS", "Nap", "Apu"]
    },
    {
        name: "IRI",
        fullName: "The Irish Sea",
        armyNeighbour: [],
        fleetNeighbour:["NAO", "Lvp", "Wal", "ENG", "MAO"]
    },
    {
        name: "Kie",
        fullName: "Kiel",
        armyNeighbour: ["Den", "Ber", "Mun", "Ruh", "Hol"],
        fleetNeighbour:["Den", "BAL", "Ber", "Hol", "HEL"]
    },
    {
        name: "Lon",
        fullName: "London",
        armyNeighbour: ["Yor", "Wal"],
        fleetNeighbour:["Yor", "NTH", "ENG", "Wal"]
    },
    {
        name: "Lvn",
        fullName: "Livonia",
        armyNeighbour: ["StP", "Mos", "War", "Pru"],
        fleetNeighbour:[""]
    },
    {
        name: "Lpl",
        fullName: "Liverpool",
        armyNeighbour: ["Cly", "Edi", "Yor", "Wal"],
        fleetNeighbour:["Cly", "Wal", "IRI", "NAO"]
    },
    {
        name: "MAO",
        fullName: "The Mid Atlantic Ocean",
        armyNeighbour: [],
        fleetNeighbour:["NAO", "IRI", "ENG", "Bre", "Gas", "Spa(nc)", "Spa(sc)", "Por", "WMS", "NAf"]
    },
    {
        name: "Mar",
        fullName: "Marseilles",
        armyNeighbour: ["Bur", "Pie", "Spa", "Gas"],
        fleetNeighbour:["Pie", "GoL", "Spa(sc)"]
    },
    {
        name: "Mos",
        fullName: "Moscow",
        armyNeighbour: ["StP", "Sev", "Ukr", "War", "Lvn"],
        fleetNeighbour:[]
    },
    {
        name: "Mun",
        fullName: "Munich",
        armyNeighbour: ["Kie", "Ber", "Sil", "Boh", "Tyr", "Bur", "Ruh"],
        fleetNeighbour:[]
    },
    {
        name: "NAf",
        fullName: "North Africa",
        armyNeighbour: ["Tun"],
        fleetNeighbour:["MAO", "WMS"]
    },
    {
        name: "NAO",
        fullName: "The north Atlantic Ocean",
        armyNeighbour: [],
        fleetNeighbour:["NWG", "Cly", "Lvp", "IRI", "MAO"]
    },
    { name: "Nap",
        fullName: "Naples",
        armyNeighbour: ["Apu", "Rom"],
        fleetNeighbour:["Apu", "ION", "TYS", "Rom"]
    },
    {
        name: "NTH",
        fullName: "The North Sea",
        armyNeighbour: [],
        fleetNeighbour:["NWG", "Nor", "Ska", "Den", "HEL","Hol", "Bel", "ENG", "Lon", "Yor", "Edi"]
    },
    {
        name: "NWG",
        fullName: "The Norwegian Sea",
        armyNeighbour: [],
        fleetNeighbour:["BAR", "Nwy", "Edi", "NAO"]
    },
    {
        name: "Nwy",
        fullName: "Norway",
        armyNeighbour: [],
        fleetNeighbour:["StP", "Fin", "Swe"]
    },
    {
        name: "Par",
        fullName: "Paris",
        armyNeighbour: ["Pic", "Bur", "Gas", "Bre"],
        fleetNeighbour:[]
    },
    {
        name: "Pic",
        fullName: "picardy",
        armyNeighbour: ["Bel", "Bur", "Par", "Bre"],
        fleetNeighbour:["Bel", "Bre", "ENG"]
    },
    {
        name: "Pie",
        fullName: "Piedmont",
        armyNeighbour: ["Tyr", "Ven", "Tus", "Mar"],
        fleetNeighbour:[]
    },
    {
        name: "Por",
        fullName: "Portugal",
        armyNeighbour: ["Spa"],
        fleetNeighbour:["MAO", "Spa(nc)", "Spa(sc)"]
    },
    {
        name: "Pru",
        fullName: "Prussia",
        armyNeighbour: ["Lvn", "War", "Sil", "Ber"],
        fleetNeighbour:["BAL"]
    },
    {
        name: "Rom",
        fullName: "Rom",
        armyNeighbour: ["Tus", "Ven", "Apu", "Nap"],
        fleetNeighbour:["Tus", "Nap", "TYS"]
    },
    {
        name: "Ruh",
        fullName: "Ruhr",
        armyNeighbour: ["Hol", "Kie", "Mun", "Bur", "Bel"],
        fleetNeighbour:[]
    },
    {
        name: "Rum",
        fullName: "Rumania",
        armyNeighbour: ["Ukr", "Sev", "Bul", "Ser", "Bud", "Gal"],
        fleetNeighbour:["Sev", "BLA", "Bul(nc)"]
    },
    {
        name: "Sev",
        fullName: "Sevastapol",
        armyNeighbour: ["Mos", "Arm", "Rum", "Ukr"],
        fleetNeighbour:["Aam", "BLA", "Rum"]
    },
    {
        name: "Sil",
        fullName: "Silesia",
        armyNeighbour: ["Ber", "Pru", "War", "Gal", "Sil", "Mun"],
        fleetNeighbour:[]
    },
    {
        name: "SKA",
        fullName: "Skagerak",
        armyNeighbour: [],
        fleetNeighbour:["Nor", "Swe", "Den", "NTH"]
    },
    {
        name: "Smy",
        fullName: "Smyrna",
        armyNeighbour: ["Con", "Ank", "Arm", "Syr"],
        fleetNeighbour:["Con", "Syr", "EMS", "AEG"]
    },
    {
        name: "Spa",
        fullName: "Spain",
        armyNeighbour: ["Gas", "Mar", "Por"],
        fleetNeighbour:[""]
    },
    {
        name: "Spa(nc)",
        fullName: "Spain (north coast)",
        armyNeighbour: [],
        fleetNeighbour:["MAO", "Gas", "Por"]
    },
    {
        name: "Spa(sc)",
        fullName: "Spain (south coast)",
        armyNeighbour: [],
        fleetNeighbour:["GoL", "WMS", "MAO"]
    },
    {
        name: "StP",
        fullName: "Saint Petersburg",
        armyNeighbour: ["Mos", "Lvn", "Fin"],
        fleetNeighbour:[]
    },
    {
        name: "StP(nc)",
        fullName: "Saint Petersburg (north coast)",
        armyNeighbour: [],
        fleetNeighbour:["BAR", "Nor"]
    },
    {
        name: "StP(sc)",
        fullName: "Saint Petersburg (south coast)",
        armyNeighbour: [],
        fleetNeighbour:["Lvn", "GoB", "Fin"]
    },
    {
        name: "Swe",
        fullName: "Sweden",
        armyNeighbour: ["Nor", "Fin", "Den"],
        fleetNeighbour:["Fin", "GoB", "Den", "SKA", "Nor"]
    },
    {
        name: "Syr",
        fullName: "Syria",
        armyNeighbour: ["Arm", "Smy"],
        fleetNeighbour:["EMS", "Smy"]
    },
    {
        name: "Tri",
        fullName: "Trieste",
        armyNeighbour: ["Vie", "Bud", "Ser", "Alb", "Ven", "Tyr"],
        fleetNeighbour:["Alb", "ADS", "Ven"]
    },
    {
        name: "Tun",
        fullName: "Tunis",
        armyNeighbour: ["NAf"],
        fleetNeighbour:["TYS", "ION", "NAf"]
    },
    {
        name: "Tus",
        fullName: "Tuscany",
        armyNeighbour: ["Ven", "Rom", "Pie"],
        fleetNeighbour:["Rom", "TYS", "GoL", "Pie"]
    },
    {
        name: "Tyr",
        fullName: "Tyrolia",
        armyNeighbour: ["Mun", "Boh", "Vie", "Tri", "Ven", "Pie"],
        fleetNeighbour:[]
    },
    {
        name: "TYS",
        fullName: "The Tyrrhenian Sea",
        armyNeighbour: [],
        fleetNeighbour:["GoL", "Tus", "Rom", "Nap", "ION", "Tun", "WES"]
    },
    {
        name: "Ukr",
        fullName: "Ukraine",
        armyNeighbour: ["Mos", "Sev", "Rum", "Gal", "War"],
        fleetNeighbour:[]
    },
    {
        name: "Ven",
        fullName: "Venice",
        armyNeighbour: ["Tyr", "Trie", "Apu", "Rom", "Tus", "Pie"],
        fleetNeighbour:["Tri", "ADS", "Apu"]
    },
    {
        name: "Vie",
        fullName: "Vienna",
        armyNeighbour: ["Boh", "Gal", "Bud", "Tri", "Tyr"],
        fleetNeighbour:[]
    },
    {
        name: "Wal",
        fullName: "Wales",
        armyNeighbour: ["Lvp", "Yor", "Lon"],
        fleetNeighbour:["Lvp", "Lon", "ENG", "IRI", ]
    },
    {
        name: "War",
        fullName: "Warsaw",
        armyNeighbour: ["Pru", "Lvn", "Mos", "Ukr", "Gal", "Sil"],
        fleetNeighbour:[]
    },
    {
        name: "WMS",
        fullName: "The Western Mediteranean",
        armyNeighbour: [],
        fleetNeighbour:["GoL", "TYS", "Tun", "NAf", "MAO", "Spa(sc)"]
    },
    {
        name: "Yor",
        fullName: "Yorkshire",
        armyNeighbour: ["Edi", "Lon", "Wal", "Lvp"],
        fleetNeighbour:["Edi", "NTH", "Lon"]
    },
];



module.exports = map;

