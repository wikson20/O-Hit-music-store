import { useState, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import AboutUs from './components/AboutUs.tsx';
import ContactUs from './components/Contact.tsx';
import { Link } from 'react-router-dom';
import type { Product } from './types.ts';

export default function App() {
  
  const [products] = useState<Product[]>([
    { 
      id: 1, 
      title: 'Lata Dwudzieste', 
      artist: 'Dawid Podsiadło', 
      price: 59.99, 
      genre: 'Pop', 
      coverUrl:'https://i.discogs.com/LYh4-1YJoMFeRIlRb-fa91Tc55LN6GlcQs6f0Uybh3w/rs:fit/g:sm/q:90/h:493/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTUw/MDYyLTE2NzczNDkx/NTItNjk4OS5qcGVn.jpeg', 
      description: 'Następca „Małomiasteczkowego” to zbiór kilku lat przeżyć i przemyśleń artysty, który już przyzwyczaił nas do mocnych tekstów, czego najlepszym przykładem jest singiel „Post”. Płyta została wyprodukowana we współpracy z Jakubem Galińskim, producentem muzycznym na co dzień grającym w zespole Dawida. Problemy mikroświata, osobiste rozterki, ale i spojrzenie na to, co dzieje się na świecie. O tym będzie album „Lata Dwudzieste”. „Lata XXte to moje pierwsze dziesięć lat innego życia. Innego od pierwszych dwudziestu. To także nabranie powietrza do płuc przed zbliżającą się trzydziestką i zderzenie się z moim nastoletnim wyobrażeniem o tym, kim wtedy będę. Wachlarz emocji, który towarzyszył mi podczas pracy nad albumem był bardzo szeroki, ale w ogólnym odbiorze sama płyta wydaje mi się całkiem taneczna i bardzo przebojowa. Chyba najbardziej z dotychczasowych.” - opowiada Dawid o nowym projekcie.', 
      tracks: ['WiRUS', 'TAZOSy', 'Halo', 'Nie Lubię Cię', 'POST', 'Blant', 'To co masz Ty!', 'D I A B L E', 'mori', 'millenium', 'awejniak', 'Szarośc i Róż'],
      gallery: ['https://i.discogs.com/LYh4-1YJoMFeRIlRb-fa91Tc55LN6GlcQs6f0Uybh3w/rs:fit/g:sm/q:90/h:493/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTUw/MDYyLTE2NzczNDkx/NTItNjk4OS5qcGVn.jpeg', 'https://i.discogs.com/AAkE3PclxJxOOsPaFQ19nm_t4_F2p8uQpQPT5ymKC9Y/rs:fit/g:sm/q:90/h:506/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTUw/MDYyLTE2NzczNDkx/NTItNjE5Mi5qcGVn.jpeg', 'https://i.discogs.com/n3z4svXrxQUGS03aQD8ckdcm2hKeaKHldP5NY5Iymiw/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0OTUw/MDYyLTE2NzczNDkx/NTAtMjkzNi5qcGVn.jpeg'] 
    },
    { 
      id: 2, 
      title: 'Scaled And Icy', 
      artist: 'Twenty One Pilots', 
      price: 69.99, 
      genre: 'Alternative', 
      coverUrl: 'https://i.discogs.com/zEO-w-MIohDv9KJnQ3D-6EADzQz-YzcTaMN-s5zRTvI/rs:fit/g:sm/q:90/h:552/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODA1/NzIzLTE2MjE1MTU3/NTUtOTAyNC5qcGVn.jpeg',
      description: 'Szósty album studyjny nagrodzonego Grammy duetu Twenty One Pilots. "Scaled And Icy" to płyta pełna intrygujących kontrastów. Muzycznie jest to prawdopodobnie najbardziej słoneczne, wpadające w ucho wydawnictwo w historii zespołu, czerpiące garściami z syntezatorów i tanecznego klimatu lat 80. Jednak pod tą niesamowicie kolorową, popową powierzchnią kryją się charakterystyczne dla Tylera Josepha osobiste, pełne niepokoju teksty o izolacji i zmaganiach z rzeczywistością. Z hitami takimi jak "Shy Away", "Choker" czy dyskotekowym "Saturday", album udowadnia, że duet potrafi nieustannie ewoluować, zachowując swoją unikalną tożsamość.',
      tracks: ['Good Day', 'Choker', 'Shy Away', 'The Outside', 'Saturday', 'Never Take It', 'Mulberry Street', 'Formidable', 'Bounce Man', 'No Chances', 'Redecorate'],
      gallery: ['https://i.discogs.com/zEO-w-MIohDv9KJnQ3D-6EADzQz-YzcTaMN-s5zRTvI/rs:fit/g:sm/q:90/h:552/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODA1/NzIzLTE2MjE1MTU3/NTUtOTAyNC5qcGVn.jpeg', 'https://i.discogs.com/8nN5PvTzU0iAOV463sAYbFvq7cUD7SuX7BmEp650DUo/rs:fit/g:sm/q:90/h:550/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODA1/NzIzLTE2MjE1MTU3/NTQtMjEyNC5qcGVn.jpeg', 'https://i.discogs.com/fdVtmnq1idgoMUCUNv3uocTxVILCC-ZbhpZp9IHA5MA/rs:fit/g:sm/q:90/h:519/w:544/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4ODA1/NzIzLTE2MjE1MTU3/NTQtMzMzMi5qcGVn.jpeg']
    },
    { 
      id: 3, 
      title: 'Czułe Kontyngenty', 
      artist: 'KARAŚ/ROGUCKI', 
      price: 49.99, 
      genre: 'Alternative', 
      coverUrl: 'https://i.discogs.com/BksGmEovfMe2XNp_glpWCyXGQVxSwAG0v8yz7XGIplc/rs:fit/g:sm/q:90/h:553/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NjIw/MTUzLTE3MTQyMTY0/ODgtNzAxMi5qcGVn.jpeg',
      description: '"Czułe Kontyngenty" to drugi album pod szyldem zespołu Karaś/ Rogucki/. Kuba Karaś, Piotr Rogucki, Wiki Jakubowska oraz Kamil Kryszak stworzyli 12 kompozycji, które przenoszą do świata życzliwości, romantyzmu i nostalgii. Album promują single "Bezpieczny Lot" z gościnnym udziałem Julii Wieniawy, energetyczny "Zapasowy Tlen", melancholijny "Film" czy podnoszący na duchu "Jutro Spróbujemy Jeszcze Raz".\n"-Czułe Kontyngenty", to według założeń przyjętych na początku działalności, kolejny po płycie "Ostatni bastion romantyzmu", transport piosenek o miłości. Tym razem wysyłamy do słuchaczy przesłanie, że miłość jest narzędziem dającym szansę na wyrwanie się z chaosu, w którym pogrąża się świat. Jest trochę refleksyjnie i osobiście, jest czule i blisko." - mówi Piotr Rogucki.\n"- Pod względem muzycznym to Karaś/Rogucki rozpoznawalny z pierwszego albumu. Charakterystyczny bas i melodyjne riffy, okraszone synthami w sosie new romantic, romantic pop czy shoegaze. Jednak po naszych doświadczeniach koncertowych, przeniosłem do produkcji więcej energii, gitar i żywych bębnów". - dodaje Kuba Karaś.',
      tracks: ['Carmex', 'Marianna', 'Bezpieczny Lot (feat. Julia Wieniawa)', 'Latem Pływam Nago w Czystej Wodzie', 'Brunatny', 'Zobacz Jak Się Pięknie Pali', 'Resztę Zostawmy Na Jutro', 'Film', 'Zapasowy Tlen', 'Mniej Niż Więcej', 'Jutro Spróbujemy Jeszcze Raz','Czułe Kontyngenty'],
      gallery: ['https://i.discogs.com/BksGmEovfMe2XNp_glpWCyXGQVxSwAG0v8yz7XGIplc/rs:fit/g:sm/q:90/h:553/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NjIw/MTUzLTE3MTQyMTY0/ODgtNzAxMi5qcGVn.jpeg', 'https://i.discogs.com/wpB--oRQRgFcPMOmEhVeH3MlWzbCaWFsuIlHeFdfshg/rs:fit/g:sm/q:90/h:562/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NjIw/MTUzLTE3MTQyMTY0/ODgtNDgyOS5qcGVn.jpeg', 'https://i.discogs.com/xjLa7C5HOf92o3_72TYKbTMSa93Fni0lPPAEp2pFsi0/rs:fit/g:sm/q:90/h:564/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0NjIw/MTUzLTE3MTQyMTY0/ODgtNDg1MC5qcGVn.jpeg'] 
    },
    { 
      id: 4,
      title: 'RE: Małomiasteczkowy', 
      artist: 'Dawid Podsiadło', 
      price: 44.99, 
      genre: 'Pop', 
      coverUrl: 'https://i.discogs.com/naw0xlAcMz5zFN9BoShRi0i7gBfn1xCKeAeVNmTFQXk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDY1/OTMyLTE1NzUxMDc3/NDgtOTEzNC5qcGVn.jpeg', 
      description: 'Reedycja diamentowego albumu Dawida Podsiadło. Zgodnie z zapowiedzią złożoną fanom ze sceny podczas koncertu na PGE Narodowym, Dawid Podsiadło ogłosił i w kilka minut wyprzedał swoją pierwszą, akustyczną trasę, zatytułowaną „Leśna muzyka”. Artysta, wraz z rozbudowanym zespołem, zagra specjalne aranżacje swoich piosenek. Dbanie o planetę jest dla niego ważnym i istotnym zagadnieniem, i w trakcie tej właśnie trasy planuje zachęcać fanów do działań mających na celu szerzenie świadomości ekologicznej. „Leśną muzykę”, która startuje w styczniu 2020 roku, promuje seria utworów z twórczości artysty, nagranych na żywo w wersji akustycznej podczas sesji w Tatrach. Utwory weszły w skład reedycji płyty, na której poza piosenkami z podstawowej wersji albumu, znajdzie się 8 dodatkowych tracków. Nie tylko te, nagrane akustycznie w Tatrach, ale także remiksy. Opakowanie płyty posiada certyfikat FSC, co oznacza, że wykorzystany w produkcji tego wydawnictwa papier, został pozyskany w sposób odpowiedzialny, z poszanowaniem przyrody.',
      tracks: ['Cantate Tutti','Dżins', 'Małomiasteczkowy', 'Najnowszy klip', 'Trofea', 'Nie ma fal', 'Lis', 'Co mówimy', 'Nie kłami', 'Matylda', 'Matylda (na żywo, akustycznie)', 'Najnowszy Klip (na żywo, akustycznie)', 'Małomiasteczkowy (na żywo, akustycznie)', 'Trójkąty i kwadraty (na żywo, akustycznie)', 'LIS (PRO8L3M remix)', 'Dżins (PEJZAŻ remix)', 'Dżins (GREG remix)', 'Dżins (I LEFT MY HELICOPTER SOUND remix)' ],
      gallery: ['https://i.discogs.com/naw0xlAcMz5zFN9BoShRi0i7gBfn1xCKeAeVNmTFQXk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDY1/OTMyLTE1NzUxMDc3/NDgtOTEzNC5qcGVn.jpeg', 'https://i.discogs.com/BS-HSBQw0dHIh4fBSG8UOth0RL7cMc8FEJ19e3DZCDQ/rs:fit/g:sm/q:90/h:600/w:542/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDY1/OTMyLTE1NzUyODQy/NTUtNzMwMS5qcGVn.jpeg', 'https://i.discogs.com/LlRSzc1OHgke_Gam6Sf0NJx3tUVhL0D1wEOCga9NFEA/rs:fit/g:sm/q:90/h:428/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDY1/OTMyLTE1NzUxMDg1/OTEtNjQwOC5qcGVn.jpeg']
    }
  ]);

  const [cart, setCart] = useState<Product[]>(() => {
    // 1. Szukamy w pamięci pod nazwą 'oHitCart'
    const savedCart = localStorage.getItem('oHitCart');
    // 2. Jeśli coś tam jest, odkodowujemy to. Jeśli nie, zwracamy pustą tablicę []
    return savedCart ? JSON.parse(savedCart) : [];
  });

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
      {/* nagłówek */}
      <Header 
        cartItemCount={cart.length} 
        onCartClick={() => setIsCartOpen(!isCartOpen)} 
      />
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

      {/* podstrony */}
      <main style={{ flex: 1 }}>
      <Routes>
        
        {/* PODSTRONA: SKLEP (Strona główna) */}
        <Route path="/" element={
          <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
            {/* baner */}
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
              <p style={{ fontSize: '1.2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                Odkryj największe klasyki, kultowe wydania i gorące nowości. 
                Słuchaj muzyki tak, jak zaplanowali to artyści.
              </p>
            </div>
            {/* filtry kategorii */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: 'bold' }}>Filtruj: </span>
              <button onClick={() => setSelectedGenre('Wszystkie')} style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: 'white', borderRadius: '5px' }}>Wszystkie</button>
              <button onClick={() => setSelectedGenre('Rock')} style={{ padding: '5px 10px', cursor: 'pointer',  backgroundColor: 'white', borderRadius: '5px' }}>Rock</button>
              <button onClick={() => setSelectedGenre('Jazz')} style={{ padding: '5px 10px', cursor: 'pointer',  backgroundColor: 'white', borderRadius: '5px' }}>Jazz</button>
              <button onClick={() => setSelectedGenre('Pop')} style={{ padding: '5px 10px', cursor: 'pointer',  backgroundColor: 'white', borderRadius: '5px' }}>Pop</button>
              <button onClick={() => setSelectedGenre('Alternative')} style={{ padding: '5px 10px', cursor: 'pointer',  backgroundColor: 'white', borderRadius: '5px' }}>Alternative</button>
            </div>

            {/* płyty (siatka) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
              {displayProducts.map((product) => (
                <div key={product.id} style={{backgroundColor: '#ffffff', border: '1px solid #eaeaea', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)'}}>
                  
                  {/* Zdjęcie okładki (zabezpieczenie jeśli podasz pusty string) */}
                  {product.coverUrl && (
                    <img 
                      src={product.coverUrl} 
                      style={{ 
                        width: '100%', 
                        height: '55%',
                        objectFit: 'cover',
                        borderRadius: '5px'
                      }} 
                    />
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
        <Route path="/o-nas" element={<AboutUs />
        } />

         {/* PODSTRONA: KONTAKT */}
        <Route path="/kontakt" element={<ContactUs />
        } />

        <Route path="/plyta/:id" element={
          <ProductDetails products={products} onAddToCart={handleAddToCart} />
        } />

      </Routes>
      </main>
      {/* footer */}
      <footer style={{ 
        backgroundColor: '#111111', 
        color: '#666666', 
        textAlign: 'center', 
        padding: '40px 20px', 
        marginTop: '80px',
        textAlignLast: 'center' 
      }}>
        <p style={{ marginBottom: '10px' }}>&copy; 2026 O-Hit. Muzyka na okrągło.</p>
        <p style={{ fontSize: '14px' }}>Projekt stworzony z pasją do dźwięku i programowania.</p>
      </footer>
      </div>

    </BrowserRouter>
  );
}