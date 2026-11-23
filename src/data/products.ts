import type { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    brand: 'BMW',
    model: 'M3',
    year: 1997,
    price: 35000,
    image: 'https://images.unsplash.com/photo-1597179936660-997716239a32?w=800&h=533&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&q=80',
    description: 'Classic E36 M3 with a high-revving straight-six.',
    category: 'Coupe',
    mileage: 145000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    horsepower: 321,
  },
  {
    id: '2',
    brand: 'Audi',
    model: 'RS5',
    year: 2023,
    price: 65000,
    image: 'https://images.unsplash.com/photo-1654356039223-9c876dd5b587?w=800&h=533&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.6&q=80',
    description: 'Twin-turbo V6 coupe with quattro all-wheel drive.',
    category: 'Coupe',
    mileage: 12000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    horsepower: 444,
  },
  {
    id: '3',
    brand: 'Mercedes',
    model: 'AMG GT',
    year: 2021,
    price: 160000,
    image: 'https://images.unsplash.com/photo-1617814065893-00757125efab?w=800&h=533&fit=crop&q=80',
    description: 'Front-engine V8 sports car built by AMG.',
    category: 'Sports',
    mileage: 8000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    horsepower: 577,
  },
  {
    id: '4',
    brand: 'Porsche',
    model: '911',
    year: 1996,
    price: 110000,
    image: 'https://images.unsplash.com/photo-1774740768897-6a0b09dd05bb?w=800&h=533&fit=crop&q=80',
    description: 'Air-cooled 993 generation 911 Carrera.',
    category: 'Sports',
    mileage: 98000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    horsepower: 282,
  },
];

export const DELIVERY_FEE = 500;
export const PROMO_CODE = 'APEX20';
export const PROMO_PERCENT = 20;
