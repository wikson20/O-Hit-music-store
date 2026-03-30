import { Link } from 'react-router-dom';

// 1. Definiujemy, co nasz Header będzie przyjmował z zewnątrz
interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void; // Funkcja, która odpali się po kliknięciu
}

// 2. Odbieramy te dane w nawiasach (tzw. destruktyryzacja propsów)
export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header style={{
      backgroundColor: '#1a1a1a', color: 'white', padding: '20px 40px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      position: 'sticky', top: 0, zIndex: 100 // Żeby header zawsze był na górze przy przewijaniu
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src="/logo sklep.svg" alt="O-Hit Logo" style={{ width: '50%', height: '100%'}} />
        <h1 style={{ margin: 0, fontSize: '28px', letterSpacing: '2px' }}></h1>
      </div>
      
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Sklep</Link>
        <Link to="/o-nas" style={{ color: 'white', textDecoration: 'none' }}>O nas</Link>
        
        {/* 3. Nasz nowy przycisk koszyka! */}
        <button 
          onClick={onCartClick}
          style={{ 
            backgroundColor: '#ff4757', color: 'white', border: 'none', 
            padding: '10px 20px', borderRadius: '20px', cursor: 'pointer',
            fontWeight: 'bold', fontSize: '16px'
          }}
        >
          🛒 Koszyk ({cartItemCount})
        </button>
      </nav>
    </header>
  );
}