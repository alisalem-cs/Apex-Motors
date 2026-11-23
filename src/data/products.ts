
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

import type { CarProduct } from "../types";




// We create a array of CarProuct 
export const products: CarProduct[] = [


{
    id: 1,
    name: "Toyota Camry",
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    price: 35465,
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
    price: 41200,
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
    price: 45000,
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
    price: 100000,
    image: rangeRoverImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Manual",
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
    price: 300000,
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
    price: 250000,
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
    price: 60000,
    image: jeepImage,
    mileage: 1000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "Nardo Gray",
    category: "Pickup"
},

{
    id: 8,
    name: "McLaren 720S",
    brand: "McLaren",
    model: "720S",
    year: 2026,
    price: 350000,
    image: mclarenblueImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "New",
    color: "Blue",
    category: "Sports"
},

{
    id: 9,
    name: "Bugatti Tourbillon",
    brand: "Bugatti",
    model: "Tourbillon",
    year: 2026,
    price: 500000,
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
    price: 600000,
    image: bugattimanualpistachiogreenImage,
    mileage: 0,
    fuelType: "Gasoline",
    transmission: "Manual",
    condition: "New",
    color: "Pistachio Green",
    category: "Hypercar"
}


]
