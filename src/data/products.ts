
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

import lamborghiniImage from "../assets/images/lamborghinimanualwhite.jpg";

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
},

{
    id: 11,
    name: "BMW M4 Competition",
    brand: "BMW",
    model: "M4 Competition",
    year: 2023,
    price: 82000,
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
    price: 265000,
    image: lamborghiniImage,
    mileage: 6000,
    fuelType: "Gasoline",
    transmission: "Manual",
    condition: "Used",
    color: "White",
    category: "Supercar"
},

{
    id: 13,
    name: "Ferrari 296 GTB",
    brand: "Ferrari",
    model: "296 GTB",
    year: 2024,
    price: 330000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Ferrari_296_GTB_Auto_Zuerich_2024_DSC_6405.jpg/960px-Ferrari_296_GTB_Auto_Zuerich_2024_DSC_6405.jpg",
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
    price: 145000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/2016_Audi_R8_Plus_Quattro_V10_S-A_5.2_Front.jpg/960px-2016_Audi_R8_Plus_Quattro_V10_S-A_5.2_Front.jpg",
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
    price: 89990,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Tesla_Model_S_Plaid_Autofr%C3%BChling_Ulm_IMG_9321.jpg/960px-Tesla_Model_S_Plaid_Autofr%C3%BChling_Ulm_IMG_9321.jpg",
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
    year: 2025,
    price: 210000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Porsche_Taycan_Turbo_S_IMG_3471.jpg/960px-Porsche_Taycan_Turbo_S_IMG_3471.jpg",
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
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Toyota_LAND_CRUISER_GR_SPORT_%283BA-VJA300W-GNUSZ%29_front.jpg/960px-Toyota_LAND_CRUISER_GR_SPORT_%283BA-VJA300W-GNUSZ%29_front.jpg",
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
    price: 118000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Mercedes-Benz_W223_580_e_IAA_2021_1X7A0258.jpg/960px-Mercedes-Benz_W223_580_e_IAA_2021_1X7A0258.jpg",
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
    price: 73000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Rivian_R1T_on_Sunset_Blvd_rear.jpg/960px-Rivian_R1T_on_Sunset_Blvd_rear.jpg",
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
    price: 32000,
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/2023_Honda_Accord.jpg/960px-2023_Honda_Accord.jpg",
    mileage: 18000,
    fuelType: "Gasoline",
    transmission: "Automatic",
    condition: "Used",
    color: "White",
    category: "Sedan"
}

]

export const DELIVERY_FEE = 500;
export const PROMO_CODE = "APEX20";
export const PROMO_PERCENT = 20;
