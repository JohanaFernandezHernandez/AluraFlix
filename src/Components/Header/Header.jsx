import { useNavigate } from "react-router-dom";
import IconAlura from "../../assets/svg/IconArura"
import { Button } from "../Button/Button";
import './Header.css';

export const Header = () => {
    const navigate = useNavigate();

    const onclick = () => {
        navigate('/')
 
    };

    const onclickVideo = () => {
       navigate('/video')
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