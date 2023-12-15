const categoryArr = {
  "6570774fd9fb65576da8e0c3": "unisex",
  "65707763d9fb65576da8e0c7": "men",
  "6570777bd9fb65576da8e0cb": "women",
  "65707782d9fb65576da8e0cf": "boys",
  "65707789d9fb65576da8e0d3": "girls",
};

const subCategoryArr = {
  //men
  "65707763d9fb65576da8e0c7": {
    "657084a1fa7d81b2c81bb661": "Training",
    "657084e6fa7d81b2c81bb665": "Running",
    "657084fefa7d81b2c81bb669": "Hiking",
    "6570854cfa7d81b2c81bb671": "Basketball",
  },
  //men
  //women
  "6570777bd9fb65576da8e0cb": {
    "6571f7c306651643c724d590": "Basketball",
    "65708702fa7d81b2c81bb67f": "Training",
    "6570870cfa7d81b2c81bb683": "Running",
  },
  //women
};

const category_nameToNumber = {
  unisex: "6570774fd9fb65576da8e0c3",
  men: "65707763d9fb65576da8e0c7",
  women: "6570777bd9fb65576da8e0cb",
  boys: "65707782d9fb65576da8e0cf",
  girls: "65707789d9fb65576da8e0d3",
};

const subCategory_nameToNumber = {
  "": { "": "" },
  men: {
    Training: "657084a1fa7d81b2c81bb661",
    Running: "657084e6fa7d81b2c81bb665",
    Hiking: "657084fefa7d81b2c81bb669",
    Basketball: "6570854cfa7d81b2c81bb671",
  },
  women: {
    Basketball: "6571f7c306651643c724d590",
    Training: "65708702fa7d81b2c81bb67f",
    Running: "6570870cfa7d81b2c81bb683",
  },
};

const userName = {
  "65708e6081903b4e3afafc50": "Kiana Esmaili",
  "6571fd23ed838db62f5caf4e": "Maryam Moshtofar",
  "6571fd35ed838db62f5caf52": "atefe bakhshi",
  "6571fd4ced838db62f5caf56": "pouria asrzad",
};

export {
  subCategoryArr,
  categoryArr,
  userName,
  category_nameToNumber,
  subCategory_nameToNumber,
};
