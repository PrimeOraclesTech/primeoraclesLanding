export interface Reward {
  name: string;
  description: string;
  logo: string;
  rate: string;
  paidAmount: string;
  totalAmount: string;
  progress: number;
  category: string;
  type: string;
  socialNetworks: string[];
  views?: number;
}

export interface HomeProduct {
  id: string;
  title: string;
  cover_url: string;
  price: number;
  rating: number;
  comments_count: number;
  creator: {
    name: string;
    avatar_path?: string;
  };
}

export interface FAQ {
  position: number;
  question: string;
  answer: string;
}
