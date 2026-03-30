import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import type { Product } from '../types';
//import { Product } from "../App";


interface ProductDetailsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductDetails({ products, onAddToCart }: ProductDetailsProps) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

    const [mainImage, setMainImage] = useState(product?.coverUrl);

  if (!product) {
    return <h2>Ups! Nie znaleźliśmy takiej płyty 😢</h2>;
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      
      <Link to="/">← Wróć do sklepu</Link>

      {/* GÓRA: ZDJĘCIE I PANEL ZAKUPOWY */}
      <div style={{ display: 'flex', gap: '40px', marginTop: '20px', border: '1px solid #eee' }}>
        
        <div style={{ flex: 1 }}>
          <img src={mainImage} style={{ width: '100%', borderRadius: '8px' }} />
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            
            {/* Przechodzimy pętlą przez tablicę 'gallery' i rysujemy małe obrazki */}
            {product.gallery?.map((imageUrl, index) => (
              <img 
                key={index} 
                src={imageUrl} 
                // KLUCZOWY MOMENT: Po kliknięciu w małe zdjęcie, ustawiamy je jako to GŁÓWNE!
                onClick={() => setMainImage(imageUrl)}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'cover', 
                  borderRadius: '4px', 
                  cursor: 'pointer',
                  // Mały bajer wizualny: jeśli miniaturka jest obecnie głównym zdjęciem, dajemy jej złotą ramkę
                  border: mainImage === imageUrl ? '3px solid #e5b143' : '1px solid #ccc'
                }} 
              />
            ))}

          </div>
          

        <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <p>Kategoria: {product.genre}</p>
          <h1>{product.title}</h1>
          <h2>{product.artist}</h2>
          <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{product.price} PLN</p>

          <button onClick={() => onAddToCart(product)} style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer' }}>
            Dodaj do koszyka
          </button>

          <div style={{ marginTop: '20px', fontSize: '13px', color: '#666', lineHeight: '1.6' }}>
            <p>🚚 Darmowa dostawa od 200 PLN</p>
            <p>📦 Bezpieczne pakowanie płyt CD</p>
            <p>↩️ 14 dni na zwrot bez podania przyczyny</p>
          </div>
        </div>
      </div>

      {/* DÓŁ: OPIS I UTWORY */}
      <div style={{ marginTop: '40px', padding: '20px', borderTop: '2px solid #eee' }}>
        
        <h3>Opis płyty:</h3>
        
        <p>{product.description || 'Brak opisu'}</p>

        <h3 style={{ marginTop: '30px' }}>Lista utworów:</h3>
        <ul>
          {product.tracks && product.tracks.length > 0 ? (
          <ol style={{ paddingLeft: '20px', lineHeight: '2', color: '#444', fontSize: '16px' }}>
            {product.tracks.map((track, index) => (
              <li key={index} style={{ borderBottom: '1px solid #f9f9f9' }}>{track}</li>
            ))}
          </ol>
            ) : (
          <p style={{ color: '#888' }}>Lista utworów nie została jeszcze dodana.</p>
            )}
        </ul>
        
      </div>

    </div>
  );
}