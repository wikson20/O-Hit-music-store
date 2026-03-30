export interface Product {
  id: number;
  title: string;
  artist: string;
  price: number;
  genre: 'Rock' | 'Jazz' | 'Pop';
  coverUrl: string;
  description: string;
  tracks: string[];
  gallery: string[];
  // Tu też musisz dodać description i tracks (tak jak w App.tsx!)
}