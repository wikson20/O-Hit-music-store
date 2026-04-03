import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-nav">
      
      {/* SEKCJA 1: LOGO + PRZYCISK HAMBURGERA */}
      <div className="nav-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo sklep.svg" alt="O-Hit Logo" style={{ width: '100px' }} /> 
        </div>
        
        <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>

      </div>
      
      {/* SEKCJA 2: LINKI I TWÓJ KOSZYK */}
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Sklep</Link>
        <Link to="/o-nas" onClick={() => setIsMenuOpen(false)}>O nas</Link>
        <Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</Link>
        <button 
          className="cart-btn" 
          onClick={onCartClick} 
        >
          🛒 Koszyk ({cartItemCount})
        </button>
      </nav>

    </header>
  );
}