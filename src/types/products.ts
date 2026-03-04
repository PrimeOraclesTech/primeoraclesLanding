export interface Product {
  id: string;
  title: string;
  cover_url: string;
  price: number;
  rating: number;
  comments_count: number;
  creator: {
    name: string;
    avatar_path: string;
  };
}
