import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import type { Product } from '../types';
import './ProductDetails.css'; 

interface ProductDetailsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductDetails({ products, onAddToCart }: ProductDetailsProps) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [mainImage, setMainImage] = useState(product?.coverUrl);

  if (!product) {
    return <h2>Ups! Nie znaleźliśmy takiej płyty</h2>;
  }

  return (
    <div className="product-page-wrapper">
      
      <Link to = "/"><button className="back-button">← Wróć do sklepu</button></Link>

      {/* --- GÓRNA SEKCJA (ZDJĘCIA I PANEL ZAKUPOWY) --- */}
      <div className="product-top-section">
        
        {/* 1. Główne zdjęcie (Lewa strona) */}
        <img src={mainImage} alt={product.title} className="main-image" />

        {/* 2. Miniaturki (Środek) */}
            <div className="thumbnails-container">
              {product.gallery?.map((imageUrl, index) => (
                <img 
                  key={index} 
                  src={imageUrl} 
                  className="thumb" 
                  alt={`Miniaturka ${index + 1}`} 
                  onClick={() => setMainImage(imageUrl)} 
                />
              ))}
          </div>

        {/* 3. Panel informacyjny (Prawa strona) */}
        <div className="buy-panel">
          <p className="category">Kategoria: {product.genre}</p>
          <h1 className="title">{product.title}</h1>
          <h2 className="artist">{product.artist}</h2>
          
          <p className="price">{product.price} PLN</p>
          
          <button onClick={() => onAddToCart(product)} style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', borderRadius: '5px', backgroundColor: '#e5b143', color: 'white', border: 'none' }}>
            Dodaj do koszyka
          </button>


          {/* Benefity pod przyciskiem */}
          <div className="benefits">
            <p>🚚 Darmowa dostawa od 200 PLN</p>
            <p>📦 Bezpieczne pakowanie płyt CD</p>
            <p>↩️ 14 dni na zwrot bez podania przyczyny</p>
          </div>
        </div>

      </div>

      {/* Kreska oddzielająca */}
      <hr className="divider" />

      {/* --- DOLNA SEKCJA (OPIS I UTWORY) --- */}
      <div className="product-bottom-section">
        <div className="description-box">
          <h3>Opis płyty:</h3>
          <p>{product.description}</p>
        </div>

        <div className="tracks-box">
          <h3>Lista utworów:</h3>
          <ol>
            {product.tracks.map((track, index) => (
              <li key={index}>{track}</li>
            ))}
          </ol>
        </div>
      </div>

    </div>
  );
}
