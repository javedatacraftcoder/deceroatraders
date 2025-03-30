import './globals.css';  
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <link 
  rel="stylesheet" 
  href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
/>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
  crossOrigin="anonymous"
  defer
></script>

      </body>
    </html>
  );
}
