const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const vehicleData = {
  Mazda: [
    {
      id: 1,
      model: "Mazda 3",
      year: 2020,
      price: 150000,
      description:
        "Pouzdan kompaktni automobil sa sportskim dizajnom i izvrsnom potrošnjom goriva.",
    },
    {
      id: 2,
      model: "Mazda 6",
      year: 2021,
      price: 200000,
      description:
        "Elegantna limuzina s naprednom tehnologijom i luksuznim unutrašnjim dizajnom.",
    },
    {
      id: 3,
      model: "Mazda CX-5",
      year: 2022,
      price: 250000,
      description:
        "Prostrani SUV s vrhunskim značajkama i visokim performansama.",
    },
  ],
  Audi: [
    {
      id: 4,
      model: "Audi A4",
      year: 2019,
      price: 230000,
      description:
        "Luksuzni kompaktni sedan s izuzetnim performansama i kvalitetom.",
    },
    {
      id: 5,
      model: "Audi A5",
      year: 2020,
      price: 260000,
      description:
        "Sportski coupe s naprednim tehničkim rješenjima i luksuzom.",
    },
    {
      id: 6,
      model: "Audi A6",
      year: 2021,
      price: 300000,
      description:
        "Premium limuzina s modernim dizajnom i vrhunskom tehnologijom.",
    },
  ],
  BMW: [
    {
      id: 7,
      model: "BMW 1",
      year: 2018,
      price: 220000,
      description: "Kompaktni automobil s vrhunskim performansama i stilom.",
    },
    {
      id: 8,
      model: "BMW 3",
      year: 2019,
      price: 280000,
      description:
        "Sofisticirana limuzina s naprednim sustavima pomoći vozaču.",
    },
    {
      id: 9,
      model: "BMW 5",
      year: 2022,
      price: 350000,
      description: "Elegantna poslovna limuzina s vrhunskim značajkama.",
    },
  ],
  Mercedes: [
    {
      id: 10,
      model: "Mercedes A-Class",
      year: 2020,
      price: 240000,
      description:
        "Kompaktni automobil s visokim standardima udobnosti i tehnologije.",
    },
    {
      id: 11,
      model: "Mercedes C-Class",
      year: 2021,
      price: 320000,
      description: "Luksuzna limuzina s vrhunskim dizajnom i performansama.",
    },
    {
      id: 12,
      model: "Mercedes E-Class",
      year: 2022,
      price: 400000,
      description: "Vrhunski automobil s nenadmašnom udobnošću i tehnologijom.",
    },
  ],
  Volkswagen: [
    {
      id: 13,
      model: "Volkswagen Golf",
      year: 2019,
      price: 180000,
      description: "Ikonski kompaktni automobil s pouzdanošću i ekonomičnošću.",
    },
    {
      id: 14,
      model: "Volkswagen Passat",
      year: 2020,
      price: 220000,
      description: "Prostrani obiteljski automobil s vrhunskim značajkama.",
    },
    {
      id: 15,
      model: "Volkswagen Tiguan",
      year: 2021,
      price: 270000,
      description: "SUV s naprednim tehnologijama i prostranim interijerom.",
    },
  ],
};

app.get("/api/vehicles", (req, res) => {
  const brands = Object.keys(vehicleData);
  res.json({ brands });
});

app.get("/api/vehicles/:model", (req, res) => {
  const { model } = req.params;
  const data = vehicleData[model];

  if (data) {
    res.json(data);
  } else {
    res
      .status(404)
      .json({ message: `Vozila marke '${model}' nisu pronađena.` });
  }
});

app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});
