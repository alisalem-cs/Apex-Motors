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
    featured: boolean;
}

export interface CartItem {
    car: Car;
    quantity: number;
}

export interface CheckoutForm {
    fullName: string;
    email: string;
    phone: string;
    address: string;
}

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    customer: CheckoutForm;
    createdAt: string;
}