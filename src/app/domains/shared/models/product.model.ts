export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
}
