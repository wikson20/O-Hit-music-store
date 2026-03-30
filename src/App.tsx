import { useState, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import { Link } from 'react-router-dom';
import type { Product } from './types.ts';

export default function App() {
  
  const [products, setProducts] = useState<Product[]>([
    { 
      id: 1, 
      title: 'Lata Dwudzieste', 
      artist: 'Dawid Podsiadło', 
      price: 120, genre: 'Rock', 
      coverUrl:'/bez tła/Lata Dwudzieste/lata20.png', 
      description: 'Czwarty solowy album Dawida Podsiadło. Płyta jest zbiorem piosenek o miłości, życiu i przemijaniu, podanych w charakterystycznym dla artysty, słodko-gorzkim stylu. Wydanie CD w eleganckim digipacku.', 
      tracks: ['WiRUS', 'TAZOSy', 'Halo', 'Nie Lubię Cię', 'POST', 'Blant', 'To co masz Ty!', 'D I A B L E', 'mori', 'millenium', 'awejniak', 'Szarośc i Róż'],
      gallery: ['/bez tła/Lata Dwudzieste/lata20.png', '/bez tła/Lata Dwudzieste/lata20_2.png', '/bez tła/Lata Dwudzieste/lata20_plyta.png'] 
    },
    //{ id: 2, title: 'Scaled And Icy', artist: 'Twenty One Pilots', price: 100, genre: 'Jazz', coverUrl: '/bez tła/Scaled And Icy/20230507_163431-removebg-preview.png' },
    //{ id: 3, title: 'Czułe Kontyngenty', artist: 'KARAŚ/ROGUCKI', price: 90, genre: 'Pop', coverUrl: '/bez tła/Czułe Kontyngenty/karas rogucki.png' }
  ]);

  const [cart, setCart] = useState<Product[]>(() => {
    // 1. Szukamy w pamięci pod nazwą 'oHitCart'
    const savedCart = localStorage.getItem('oHitCart');
    // 2. Jeśli coś tam jest, odkodowujemy to. Jeśli nie, zwracamy pustą tablicę []
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ZADANIE 10: Zapisywanie do pamięci (uruchamia się automatycznie!)
  useEffect(() => {
    // Zamieniamy tablicę 'cart' na tekst i zapisujemy w szufladce 'oHitCart'
    localStorage.setItem('oHitCart', JSON.stringify(cart));
  }, [cart]); // Ta tablica na końcu mówi: "Uruchom ten kod TYLKO wtedy, gdy zmieni się zmienna 'cart'"

  const handleAddToCart = (productToAdd: Product) => {
    setCart([...cart, productToAdd])
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const [selectedGenre, setSelectedGenre] = useState<string>('Wszystkie');

  const displayProducts = selectedGenre === 'Wszystkie'
    ? products
    : products.filter(product => product.genre === selectedGenre)
  
  const handleRemoveFromCart = (indexToRemove: number) => {
    setCart(cart.filter((product, index) => index !== indexToRemove));
  }

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

return (
    <BrowserRouter>
      <div style = {{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      {/* 1. NASZ NAGŁÓWEK */}
      <Header 
        cartItemCount={cart.length} 
        onCartClick={() => setIsCartOpen(!isCartOpen)} 
      />

      {/* 2. LATAJĄCA SZUFLADA KOSZYKA (Pokaże się tylko gdy isCartOpen === true) */}
      {isCartOpen && (
        <div style={{ 
          position: 'fixed', top: 0, right: 0, width: '350px', height: '100vh',
          backgroundColor: 'white', boxShadow: '-5px 0 15px rgba(0,0,0,0.2)',
          padding: '20px', zIndex: 1000, overflowY: 'auto'
        }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Twój Koszyk 🛒</h2>
            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>
              ❌
            </button>
          </div>
          
          <p>Liczba produktów: {cart.length}</p>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <strong>{item.title}</strong> <br/>
                {item.price} PLN 
                <button onClick={() => handleRemoveFromCart(index)} style={{ marginLeft: '10px', color: 'red', cursor: 'pointer', background: 'none', border: '1px solid red', borderRadius: '4px' }}>
                  Usuń
                </button>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '20px', borderTop: '2px solid #ccc', paddingTop: '10px' }}>
            <h3>Suma do zapłaty: {totalPrice} PLN</h3>
            <button style={{ width: '100%', padding: '15px', backgroundColor: '#000', color: '#fff', fontSize: '18px', cursor: 'pointer', borderRadius: '8px' }}>
              Kupuję i płacę
            </button>
          </div>
        </div>
      )}

      {/* 3. MIEJSCE NA PODSTRONY */}
      <main style={{ flex: 1 }}>
      <Routes>
        
        {/* PODSTRONA: SKLEP (Strona główna) */}
        <Route path="/" element={
          <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
            {/* SEKCJA HERO / BANER */}
            <div style={{ 
              backgroundColor: '#1a1a1a', 
              backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)',
              color: 'white', 
              padding: '60px 40px', 
              borderRadius: '16px', 
              marginBottom: '40px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', letterSpacing: '1px' }}>
                Poczuj magię CD ✨
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto' }}>
                Odkryj największe klasyki, kultowe wydania i gorące nowości. 
                Słuchaj muzyki tak, jak zaplanowali to artyści.
              </p>
            </div>
            {/* Filtry kategorii */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
              <span style={{ fontWeight: 'bold' }}>Filtruj: </span>
              <button onClick={() => setSelectedGenre('Wszystkie')} style={{ padding: '5px 10px', cursor: 'pointer' }}>Wszystkie</button>
              <button onClick={() => setSelectedGenre('Rock')} style={{ padding: '5px 10px', cursor: 'pointer' }}>Rock</button>
              <button onClick={() => setSelectedGenre('Jazz')} style={{ padding: '5px 10px', cursor: 'pointer' }}>Jazz</button>
              <button onClick={() => setSelectedGenre('Pop')} style={{ padding: '5px 10px', cursor: 'pointer' }}>Pop</button>
            </div>

            {/* Siatka z płytami (używamy grid dla ładnego układu) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
              {displayProducts.map((product) => (
                <div key={product.id} style={{backgroundColor: '#ffffff', border: '1px solid #eaeaea', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)'}}>
                  
                  {/* Zdjęcie okładki (zabezpieczenie jeśli podasz pusty string) */}
                  {product.coverUrl && (
                    <img src={product.coverUrl} alt={product.title} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                  )}
                  
                  <h3 style={{ margin: '10px 0 5px 0' }}><Link to={`/plyta/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.title}</Link></h3>
                  <p style={{ margin: '0 0 10px 0', color: '#666' }}>{product.artist}</p>
                  <p style={{ fontWeight: 'bold', fontSize: '18px', padding: '10px', textAlign: 'center' }}>{product.price} PLN</p>

                  <button onClick={() => handleAddToCart(product)} style={{ width: '100%', cursor: 'pointer', padding: '15px', backgroundColor: '#edc85d', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>
                    Dodaj do koszyka
                  </button>
                </div>
              ))}
            </div>

          </div>
        } />
        

        {/* PODSTRONA: O NAS */}
        <Route path="/o-nas" element={
          <div style={{ padding: '60px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px' }}>O sklepie O-Hit 🎧</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Jesteśmy pasjonatami muzyki, którzy postanowili stworzyć najlepszy sklep z winylami w sieci. 
              Znajdziesz u nas tylko starannie wyselekcjonowane, autentyczne wydania najważniejszych albumów w historii muzyki.
            </p>
          </div>
        } />

        <Route path="/plyta/:id" element={
          <ProductDetails products={products} onAddToCart={handleAddToCart} />
        } />

      </Routes>
      </main>
      {/* STOPKA STRONY */}
      <footer style={{ 
        backgroundColor: '#111111', 
        color: '#666666', 
        textAlign: 'center', 
        padding: '40px 20px', 
        marginTop: '80px' 
      }}>
        <p style={{ marginBottom: '10px' }}>&copy; 2026 O-Hit. Muzyka na okrągło.</p>
        <p style={{ fontSize: '14px' }}>Projekt stworzony z pasją do dźwięku i programowania.</p>
      </footer>
      </div>

    </BrowserRouter>
  );
}