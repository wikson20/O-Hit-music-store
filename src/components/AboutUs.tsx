import { Link } from 'react-router-dom';
import './AboutUs.css'; 

export default function AboutUs() {
  return (
    <div className = "about-us-div">
      <Link to="/" className='link'>
        ← Wróć do sklepu
      </Link>

      <h1>O-Hit Music Store</h1>
      <p>
        Twoje nowe ulubiony sklep z płytami.
      </p>

      <section>
        <h2>Kim jesteśmy?</h2>
        <p>
          O-Hit Music Store to miejsce zrodzone z czystej miłości do muzyki. W erze wszechobecnego streamingu głęboko wierzymy, że nic nie zastąpi magii fizycznego nośnika – zapachu świeżej poligrafii, studiowania tekstów w książeczce i świadomego słuchania albumu od pierwszej do ostatniej sekundy.
        </p>
      </section>

      <section>
        <h2>Nasza misja</h2>
        <p>
          Nie chcemy być kolejnym klasycznym sklepem. Naszym celem jest tworzenie starannie wyselekcjonowanej oferty. Znajdziesz u nas zarówno największe popowe hity, które ukształtowały współczesną scenę, jak i alternatywne perełki, które wymykają się listom przebojów. Każdą płytę z naszego katalogu sami chętnie postawilibyśmy na własnej półce.
        </p>
      </section>

      <section>
        <h2>Dlaczego my?</h2>
        <p>
          Muzyka to dla nas coś więcej niż tło do codziennych obowiązków. To emocje, wspomnienia i społeczność. Dlatego dbamy o to, by każda paczka, która opuszcza nasz magazyn, była zapakowana z najwyższą starannością, gotowa do wręczenia jako prezent dla kogoś bliskiego... lub dla samego siebie.
        </p>
      </section>

      <div className='images'>
        <img 
          src="https://images.pexels.com/photos/6865916/pexels-photo-6865916.jpeg" // Podmień na nazwę swojego zdjęcia
          //alt="Wnętrze naszego sklepu" 
        />
        <img 
          src="https://images.pexels.com/photos/5003397/pexels-photo-5003397.jpeg" // Podmień na nazwę swojego zdjęcia
          //alt="Nasze półki z płytami" 
        />
      </div>

    </div>
    
  );
}