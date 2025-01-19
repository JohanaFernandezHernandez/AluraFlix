import imgBanner from "../../assets/Img/banner.png";
import imgPlayer from "../../assets/Img/player.png";
import "./Banner.css";

export const Banner = () => {
  return (
    <section
      className="container-banner"
      style={{ backgroundImage: `url(${imgBanner})` }}
    >
      <div className="container-info" > 
        <button className="button-front">Front End</button>
        <h4 className="title">Challenge React</h4>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="container-img">
        <img className="img" src={imgPlayer} alt="Img Player" />
      </div>
    </section>
  );
};
