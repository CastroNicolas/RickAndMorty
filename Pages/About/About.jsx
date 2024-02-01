import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <header className="headerAbout">
        <h1>Rick And Morty by Máximo Nicolás Castro Rodriguez</h1>
      </header>

      <section className="about-content">
        <p>
          ¡Hola! Soy Nicolás Castro, un apasionado desarrollador web de 19 años con una sólida formación de dos años en Ingeniería de Software. Hoy, estoy emocionado de presentarte mi último proyecto de Henry, una experiencia única inspirada en el fascinante universo de Rick & Morty.
          <h3>Tecnologías Utilizadas</h3>
          <h4>JavaScript:</h4> El lenguaje principal que ha impulsado la lógica de mi proyecto, permitiendo una interactividad fluida y una experiencia de usuario excepcional.
          <h4>React:</h4> Utilicé esta poderosa biblioteca para construir una interfaz de usuario dinámica e intuitiva, permitiendo a los usuarios sumergirse en el proyecto de manera fluida.
          <h4>Express: </h4> La robusta aplicación de servidor de Express facilitó el manejo de solicitudes y la construcción de una arquitectura backend eficiente.
          <br/>

        </p>
      </section>

      <footer>
        <div className="contact-info">
          <p>Contact:</p>
          <p>Email: maximonicolascastro@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/m%C3%A1ximo-nicolas-castro-rodr%C3%ADguez-715a18217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <p>Phone: +34 682044125</p>
        </div>
      </footer>
    </div>
  );
};

