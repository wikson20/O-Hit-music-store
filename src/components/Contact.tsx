import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <Link to="/" style={{ color: '#666', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Wróć do sklepu
      </Link>

      <h1 style={{ fontSize: '36px', marginBottom: '30px' }}>Kontakt</h1>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        
        {/* LEWA STRONA - DANE (Wizytówka) */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '12px' }}>
            <h2 style={{ marginTop: 0, marginBottom: '20px', color: '#e5b143' }}>O-Hit Music Store</h2>
            
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              <strong>📍 Adres:</strong><br />
              ul. Przemysłowa 7<br />
              61-579 Poznań
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              <strong>📞 Telefon:</strong><br />
              +48 123 456 789
            </p>

            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              <strong>✉️ E-mail:</strong><br />
              kontakt@ohit-store.pl
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />

            <h3 style={{ marginBottom: '10px' }}>Godziny otwarcia:</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#555' }}>
              <li>Poniedziałek - Piątek: 10:00 - 19:00</li>
              <li>Sobota: 11:00 - 16:00</li>
              <li>Niedziela: Zamknięte</li>
            </ul>
          </div>
        </div>

        {/* PRAWA STRONA - MAPA */}
        <div style={{ flex: '1.5', minWidth: '300px', height: '450px' }}>
          {/* Tu wklejasz swój iframe z Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.3546574236634!2d16.917356252421865!3d52.40024823624131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b30174750f5%3A0x2ccc0a973338cfdf!2sPrzemys%C5%82owa%207%2C%2061-579%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1775221093116!5m2!1spl!2spl"
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
            allowFullScreen={true} 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}