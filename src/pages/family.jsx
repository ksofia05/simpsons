import Title from "../elements/titulos";


const Family = () => {
  return (
    <div className="container py-5">
      <div className="row">
    <Title text="The family Simpsons" />
        <div className="col-md-12">
          <ul>
            <li>
              Marjorie "Marge" Jaqueline Bouvier Simpson es uno de los personajes principales de la serie animada Los Simpson.
              Es la esposa de Homero Simpson, y madre de 3 hijos.
              <br />
              <img
                src="https://wallpapers.com/images/hd/marge-simpson-from-the-simpsons-diyy9do9v7yujpm3.jpg"
                width={60}
                alt="Marge Simpson"
              />
            </li>
            <li>
              Homer J. Simpson (en Hispanoamérica Homero J. Simpson) es el personaje principal de la serie animada de televisión Los Simpson.
              <br />
              <img
                src="https://th.bing.com/th/id/OIP.3dhPD6VXpKxmJ05PWakIDgHaF7?rs=1&pid=ImgDetMain"
                width={90}
                alt="Homer Simpson"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Family;
