
import toyotaCamryImage from "../assets/images/2020-toyta-camry-avif.avif";
import bmwImage from "../assets/images/2026-BMW-3-Series-.avif";

import mercedesImage from "../assets/images/Mercedes C Class EV red.jpg";

import rangeRoverImage from "../assets/images/RangRover-manual-silver.png";

import maclarenyellowImage from "../assets/images/mclaren-750S-Coup-exterior-oem-01.webp";

import porscheImage from "../assets/images/porsche911gt3rs-pink.jpg";
import jeepImage from "../assets/images/jeepgladiator-nardogray.jpg";

import mclarenblueImage from "../assets/images/McLaren-720s-blue.jpg";

import buggtiblackImage from "../assets/images/Bugatti-Tourbillon-black.jpg";

import bugattimanualpistachiogreenImage from "../assets/images/bugatti-brouillard-automaticPistachioGreen.webp";

import bmwM4Image from "../assets/images/BMWM4G82black.jpg";

import lamborghiniImage from "../assets/images/lamborghiniImage.jpg";

import ferrariImage from "../assets/images/ferrari-296-gtb-red.jpg";

import audiImage from "../assets/images/audi-r8-v10-plus-blue.jpg";

import teslaImage from "../assets/images/tesla-model-s-plaid-darkblue.jpg";

import taycanImage from "../assets/images/porsche-taycan-turbo-s-grey.jpg";

import landCruiserImage from "../assets/images/toyota-land-cruiser-gr-sport-black.jpg";

import sClassImage from "../assets/images/mercedes-s580e-silver.jpg";

import rivianImage from "../assets/images/rivian-r1t-darkgrey.jpg";

import hondaImage from "../assets/images/honda-accord-white.jpg";

import cullinanImage from "../assets/images/rolls-royce-cullinan-black.jpg";
import bentleyImage from "../assets/images/bentley-continental-gt-speed-green.jpg";
import g63Image from "../assets/images/mercedes-amg-g63-yellow.jpg";
import cayenneImage from "../assets/images/porsche-cayenne-s-white.jpg";
import mustangImage from "../assets/images/ford-mustang-gt-white.jpg";
import corvetteImage from "../assets/images/chevrolet-corvette-z06-blue.jpg";
import jeskoImage from "../assets/images/koenigsegg-jesko.jpg";
import lucidImage from "../assets/images/lucid-air-grand-touring.jpg";
import raptorImage from "../assets/images/ford-f150-raptor.jpg";
import corollaImage from "../assets/images/toyota-corolla.jpg";

import type { CarProduct } from "../types";




// We create a array of CarProuct 
export const products: CarProduct[] = [


{
    id: 1,
    name: "Toyota Camry",
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    price: 22500,
    image: toyotaCamryImage,
    mileage: 15000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    category: "Sedan"
},

{
    id: 2,
    name: "BMW 3 Series",
    brand: "BMW",
    model: "3 Series",
    year: 2021,
    price: 29500,
    image: bmwImage,
    mileage: 12000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    category: "Luxury"
},

{
    id: 3,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    model: "C-Class",
    year: 2022,
    price: 36000,
    image: mercedesImage,
    mileage: 8000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "Red",
    category: "Luxury"
},

{
    id: 4,
    name: "Range Rover Evoque",
    brand: "Land Rover",
    model: "Evoque",
    year: 2026,
    price: 49900,
    image: rangeRoverImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Silver",
    category: "SUV"
},

{
    id: 5,
    name: "McLaren 750S Coupe",
    brand: "McLaren",
    model: "750S Coupe",
    year: 2026,
    price: 359600,
    image: maclarenyellowImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Yellow",
    category: "Sports"
},

{
    id: 6,
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    model: "911 GT3 RS",
    year: 2026,
    price: 241300,
    image: porscheImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Pink",
    category: "Sports"
},

{
    id: 7,
    name: "Jeep Gladiator",
    brand: "Jeep",
    model: "Gladiator",
    year: 2026,
    price: 39300,
    image: jeepImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Nardo Gray",
    category: "Pickup"
},

{
    id: 8,
    name: "McLaren 720S",
    brand: "McLaren",
    model: "720S",
    year: 2022,
    price: 235000,
    image: mclarenblueImage,
    mileage: 8000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "Blue",
    category: "Sports"
},

{
    id: 9,
    name: "Bugatti Tourbillon",
    brand: "Bugatti",
    model: "Tourbillon",
    year: 2026,
    price: 4100000,
    image: buggtiblackImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Black",
    category: "Hypercar"
},

{
    id: 10,
    name: "Bugatti Brouillard",
    brand: "Bugatti",
    model: "Brouillard",
    year: 2024,
    price: 20000000,
    image: bugattimanualpistachiogreenImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Pistachio Green",
    category: "Hypercar"
},

{
    id: 11,
    name: "BMW M4 Competition",
    brand: "BMW",
    model: "M4 Competition",
    year: 2023,
    price: 72000,
    image: bmwM4Image,
    mileage: 9000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    category: "Sports"
},

{
    id: 12,
    name: "Lamborghini Huracan EVO",
    brand: "Lamborghini",
    model: "Huracan EVO",
    year: 2022,
    price: 245000,
    image: lamborghiniImage,
    mileage: 6000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "Black",
    category: "Supercar"
},

{
    id: 13,
    name: "Ferrari 296 GTB",
    brand: "Ferrari",
    model: "296 GTB",
    year: 2024,
    price: 310000,
    image: ferrariImage,
    mileage: 1200,
    fuelType: "Hybrid",
    transmission: "Automatic",
    condition: "Used",
    color: "Red",
    category: "Supercar"
},

{
    id: 14,
    name: "Audi R8 V10 Plus",
    brand: "Audi",
    model: "R8 V10 Plus",
    year: 2016,
    price: 115000,
    image: audiImage,
    mileage: 32000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "Blue",
    category: "Supercar"
},

{
    id: 15,
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: 72000,
    image: teslaImage,
    mileage: 5000,
    fuelType: "Electric",
    transmission: "Automatic",
    condition: "Used",
    color: "Dark Blue",
    category: "Electric"
},

{
    id: 16,
    name: "Porsche Taycan Turbo S",
    brand: "Porsche",
    model: "Taycan Turbo S",
    year: 2026,
    price: 221400,
    image: taycanImage,
    mileage: 0,
    fuelType: "Electric",
    transmission: "Automatic",
    condition: "New",
    color: "Grey",
    category: "Electric"
},

{
    id: 17,
    name: "Toyota Land Cruiser GR Sport",
    brand: "Toyota",
    model: "Land Cruiser GR Sport",
    year: 2025,
    price: 95000,
    image: landCruiserImage,
    mileage: 0,
    fuelType: "Diesel",
    transmission: "Automatic",
    condition: "New",
    color: "Black",
    category: "SUV"
},

{
    id: 18,
    name: "Mercedes-Benz S 580 e",
    brand: "Mercedes",
    model: "S 580 e",
    year: 2022,
    price: 85000,
    image: sClassImage,
    mileage: 14000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    condition: "Used",
    color: "Silver",
    category: "Luxury"
},

{
    id: 19,
    name: "Rivian R1T",
    brand: "Rivian",
    model: "R1T",
    year: 2023,
    price: 55000,
    image: rivianImage,
    mileage: 11000,
    fuelType: "Electric",
    transmission: "Automatic",
    condition: "Used",
    color: "Dark Grey",
    category: "Pickup"
},

{
    id: 20,
    name: "Honda Accord",
    brand: "Honda",
    model: "Accord",
    year: 2023,
    price: 26500,
    image: hondaImage,
    mileage: 18000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    category: "Sedan"
},

{
    id: 21,
    name: "Rolls-Royce Cullinan",
    brand: "Rolls-Royce",
    model: "Cullinan",
    year: 2026,
    price: 432350,
    image: cullinanImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Black",
    category: "Luxury"
},

{
    id: 22,
    name: "Bentley Continental GT Speed",
    brand: "Bentley",
    model: "Continental GT Speed",
    year: 2025,
    price: 354000,
    image: bentleyImage,
    mileage: 0,
    fuelType: "Hybrid",
    transmission: "Automatic",
    condition: "New",
    color: "Green",
    category: "Luxury"
},

{
    id: 23,
    name: "Mercedes-AMG G 63",
    brand: "Mercedes-Benz",
    model: "G 63",
    year: 2026,
    price: 196850,
    image: g63Image,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Yellow",
    category: "SUV"
},

{
    id: 24,
    name: "Porsche Cayenne S",
    brand: "Porsche",
    model: "Cayenne S",
    year: 2023,
    price: 78000,
    image: cayenneImage,
    mileage: 15000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    category: "SUV"
},

{
    id: 25,
    name: "Ford Mustang GT Convertible",
    brand: "Ford",
    model: "Mustang GT",
    year: 2024,
    price: 42000,
    image: mustangImage,
    mileage: 10000,
    fuelType: "Gasoline",
    transmission: "Manual",
    condition: "Used",
    color: "White",
    category: "Sports"
},

{
    id: 26,
    name: "Chevrolet Corvette Z06",
    brand: "Chevrolet",
    model: "Corvette Z06",
    year: 2026,
    price: 117700,
    image: corvetteImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Blue",
    category: "Supercar"
},

{
    id: 27,
    name: "Koenigsegg Jesko",
    brand: "Koenigsegg",
    model: "Jesko",
    year: 2024,
    price: 3000000,
    image: jeskoImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "White",
    category: "Hypercar"
},

{
    id: 28,
    name: "Lucid Air Grand Touring",
    brand: "Lucid",
    model: "Air Grand Touring",
    year: 2026,
    price: 114900,
    image: lucidImage,
    mileage: 0,
    fuelType: "Electric",
    transmission: "Automatic",
    condition: "New",
    color: "Black",
    category: "Electric"
},

{
    id: 29,
    name: "Ford F-150 Raptor",
    brand: "Ford",
    model: "F-150 Raptor",
    year: 2026,
    price: 84375,
    image: raptorImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Red",
    category: "Pickup"
},

{
    id: 30,
    name: "Toyota Corolla",
    brand: "Toyota",
    model: "Corolla",
    year: 2026,
    price: 23125,
    image: corollaImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Grey",
    category: "Sedan"
}

]
