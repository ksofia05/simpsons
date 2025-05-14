import Title from "../elements/titulos";

const home = () => {
  return (
    <div className="container py-5">
  <div className="row">
    <Title text="Home" />
    <div className="col-md-9">
      <p>
        Los Simpson –en inglés: The Simpsons– es una serie estadounidense de comedia en formato de animación,
        creada por Matt Groening para Fox Broadcasting Company y emitida en varios países del mundo.
        La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase
        media de ese país –cuyos miembros son Homer, Marge, Bart, Lisa y Maggie Simpson– que vive en un pueblo
        ficticio llamado Springfield.
      </p>
    </div>
    <div className="col-md-3">
      <img
        src="https://tvazteca.brightspotcdn.com/38/01/2832fe17433d8dea02008a1668d2/los-simpson-origen.jpg"
        alt="The Family Simpson"
        className="img-fluid"
      />
    </div>
  </div>
</div>

  );
}
export default home;