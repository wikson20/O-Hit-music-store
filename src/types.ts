export interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  genre: 'Rock' | 'Jazz' | 'Pop' | 'Alternative';
  coverUrl: string;
  description: string;
  tracks: string[];
  gallery: string[];
}