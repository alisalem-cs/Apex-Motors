export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  description: string;
  category: string;
  mileage: number;
  fuelType: string;
  transmission: string;
  horsepower: number;
}

export interface CartItem {
  car: Car;
  quantity: number;
}

export interface Order {
  id: string;
  total: number;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  date: string;
}
