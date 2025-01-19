import Borrar from "../../assets/svg/Borrar"
import Editar from "../../assets/svg/Editar"
import './Card.css'


export const Card = ({img}) => {

return(
<div className="card">
    <img className="imagen-card" src={img} alt="Imagen card"/>
    <div className="container-button">
        <buton className="button-card"> <Borrar/> BORRAR</buton>
        <buton className="button-card"> <Editar/> EDITAR</buton>
    </div>
</div>
)
}