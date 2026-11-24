export interface CarProduct {
  id: number;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: number;
  fuelType: string;
  transmission: string; // e.g., "Automatic", "Manual"
  condition: string;
  color: string;
  category: string;
}

export interface CartItem {
  car: CarProduct;
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
  paymentMethod: string;
  items: CartItem[];
}
