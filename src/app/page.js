import Head from "next/head";
import "./globals.css"; // O el archivo donde tienes el CSS

export default function Home() {
  return (
    <>
      <Head>
        <title>De 0 a Traders</title>
        <meta name="description" content="Información sobre nuestra empresa y misión." />
      </Head>
    
      {/* Sección con imagen de fondo y GIF centrado */}
      <section 
        className="d-flex justify-content-center align-items-center min-vh-100 w-100" 
        style={{
          backgroundImage: "url('/Home.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img 
          src="/Deceroatradersbackweb.gif" 
          className="img-fluid" 
          alt="De Cero a Traders"
          style={{ 
            maxWidth: "90%", 
            height: "auto",
            display: "block",
            margin: "0 auto"  // 🔹 Asegura centrado en cualquier pantalla
          }} 
        />
      </section>
    </>
  );
}

