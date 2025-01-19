import { ButtonCategoria } from "../Button/ButtonCategoria"
import { Card } from "../Card/Card"
import ImagenPrueba from "../../assets/Img/imagen.png";
import './Categoria.css'

export const Categoria = () => {

    

return(
    <section className="Container">
        <ButtonCategoria color="#6BD1FF"> Front End </ButtonCategoria>
        <section className="container-card">
        <Card img={ImagenPrueba}/>
        <Card img={ImagenPrueba}/>
        <Card img={ImagenPrueba}/>


        </section>
     
       
    </section>

)
}