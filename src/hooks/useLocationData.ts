export interface LocationData {
  countries: {
    [key: string]: {
      name: string;
      currency: string;
      states?: string[];
    };
  };
}

export const locationData: LocationData = {
  countries: {
    "us": {
      name: "United States",
      currency: "USD",
      states: [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
        "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
        "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
        "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
        "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
        "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
        "Wisconsin", "Wyoming"
      ]
    },
    "ca": {
      name: "Canada",
      currency: "CAD",
      states: [
        "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", 
        "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", 
        "Quebec", "Saskatchewan", "Yukon"
      ]
    },
    "uk": {
      name: "United Kingdom",
      currency: "GBP",
      states: [
        "England", "Scotland", "Wales", "Northern Ireland"
      ]
    },
    "au": {
      name: "Australia",
      currency: "AUD",
      states: [
        "Australian Capital Territory", "New South Wales", "Northern Territory", "Queensland", 
        "South Australia", "Tasmania", "Victoria", "Western Australia"
      ]
    },
    "de": {
      name: "Germany",
      currency: "EUR",
      states: [
        "Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", 
        "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", 
        "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"
      ]
    },
    "fr": {
      name: "France",
      currency: "EUR",
      states: [
        "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", 
        "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", 
        "Occitania", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"
      ]
    },
    "nl": {
      name: "Netherlands",
      currency: "EUR",
      states: [
        "Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", 
        "North Brabant", "North Holland", "Overijssel", "South Holland", "Utrecht", "Zeeland"
      ]
    },
    "se": {
      name: "Sweden",
      currency: "SEK",
      states: [
        "Blekinge", "Dalarna", "Gävleborg", "Gotland", "Halland", "Jämtland", 
        "Jönköping", "Kalmar", "Kronoberg", "Norrbotten", "Örebro", "Östergötland", 
        "Skåne", "Södermanland", "Stockholm", "Uppsala", "Värmland", "Västerbotten", 
        "Västernorrland", "Västmanland", "Västra Götaland"
      ]
    },
    "no": {
      name: "Norway",
      currency: "NOK",
      states: [
        "Agder", "Innlandet", "Møre og Romsdal", "Nordland", "Oslo", "Rogaland", 
        "Troms og Finnmark", "Trøndelag", "Vestfold og Telemark", "Vestland", "Viken"
      ]
    },
    "dk": {
      name: "Denmark",
      currency: "DKK",
      states: [
        "Capital Region", "Central Denmark", "North Denmark", "Region Zealand", "Region of Southern Denmark"
      ]
    },
    "ch": {
      name: "Switzerland",
      currency: "CHF",
      states: [
        "Aargau", "Appenzell Ausserrhoden", "Appenzell Innerrhoden", "Basel-Landschaft", 
        "Basel-Stadt", "Bern", "Fribourg", "Geneva", "Glarus", "Graubünden", "Jura", 
        "Lucerne", "Neuchâtel", "Nidwalden", "Obwalden", "Schaffhausen", "Schwyz", 
        "Solothurn", "St. Gallen", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"
      ]
    },
    "jp": {
      name: "Japan",
      currency: "JPY",
      states: [
        "Hokkaido", "Aomori", "Iwate", "Miyagi", "Akita", "Yamagata", "Fukushima", 
        "Ibaraki", "Tochigi", "Gunma", "Saitama", "Chiba", "Tokyo", "Kanagawa", 
        "Niigata", "Toyama", "Ishikawa", "Fukui", "Yamanashi", "Nagano", "Gifu", 
        "Shizuoka", "Aichi", "Mie", "Shiga", "Kyoto", "Osaka", "Hyogo", "Nara", 
        "Wakayama", "Tottori", "Shimane", "Okayama", "Hiroshima", "Yamaguchi", 
        "Tokushima", "Kagawa", "Ehime", "Kochi", "Fukuoka", "Saga", "Nagasaki", 
        "Kumamoto", "Oita", "Miyazaki", "Kagoshima", "Okinawa"
      ]
    },
    "in": {
      name: "India",
      currency: "INR",
      states: [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
        "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
        "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
        "Uttar Pradesh", "Uttarakhand", "West Bengal"
      ]
    },
    "sg": {
      name: "Singapore",
      currency: "SGD"
    },
    "remote": {
      name: "Remote",
      currency: "USD"
    }
  }
};

export const getCurrencySymbol = (currency: string): string => {
  const symbols: { [key: string]: string } = {
    USD: "$",
    CAD: "C$",
    GBP: "£",
    EUR: "€",
    AUD: "A$",
    SEK: "kr",
    NOK: "kr",
    DKK: "kr",
    CHF: "CHF",
    JPY: "¥",
    INR: "₹",
    SGD: "S$"
  };
  return symbols[currency] || currency;
};