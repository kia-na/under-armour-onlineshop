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
  //boys
  "65707782d9fb65576da8e0cf": {
    "6582f0c2ecde31ac5592472c": "Basketball",
    "6582f0baecde31ac55924728": "Training",
  },
  //boys
  //girls
  "65707789d9fb65576da8e0d3": {
    "6582f12decde31ac55924742": "Running",
    "6582f162ecde31ac5592474e": "Basketball",
  },
  //girls
  //unisex
  "6570774fd9fb65576da8e0c3": {
    "6582f19fecde31ac55924756": "Basketball",
    "6582f1d3ecde31ac55924766": "Running",
    "6582f1daecde31ac5592476e": "Training",
    "6582f202ecde31ac55924776": "Track & field",
  },
  //unisex
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
  unisex: {
    Basketball: "6582f19fecde31ac55924756",
    Running: "6582f1d3ecde31ac55924766",
    Training: "6582f1daecde31ac5592476e",
    "Track/field": "6582f202ecde31ac55924776",
  },
  boys: {
    Basketball: "6582f0c2ecde31ac5592472c",
    Training: "6582f0baecde31ac55924728",
  },
  girls: {
    Basketball: "6582f162ecde31ac5592474e",
    Running: "6582f12decde31ac55924742",
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
