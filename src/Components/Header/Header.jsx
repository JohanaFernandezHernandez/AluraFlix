import IconAlura from "../../assets/svg/IconArura"
import { Button } from "../Button/Button";
import './Header.css';

export const Header = () => {

    const onclick = () => {
        console.log('Hice click en Home');
    };

    const onclickVideo = () => {
        console.log('Hice click en Nuevo Video');
    };


    

return(

<header className="container-header"> 
    <IconAlura/>
    <nav className="container-nav">
        <Button onClick={onclick}>Home</Button>
        <Button onClick={onclickVideo}>Nuevo Video</Button>
       
    </nav>

</header>
)
}