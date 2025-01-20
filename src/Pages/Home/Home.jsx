import { useEffect, useState } from "react"
import { Banner } from "../../Components/Banner/Banner"
import { Categoria } from "../../Components/Categorias/Categorias"
import { useConectionApi } from "../../Hooks/useConectionApi"

export const Home = () => {
    const [categorias, setCategorias] = useState([]); 
    const {getCategorias} = useConectionApi();

    useEffect(() => {
        // Creamos una función asíncrona dentro del useEffect para manejar la llamada.
        const fetchCategorias = async () => {
          const data = await getCategorias(); // Esperamos la respuesta de getCategorias.
          if (data) {
            setCategorias(data); // Guardamos las categorías en el estado.
          }
        };
    
        fetchCategorias(); // Llamamos a la función.
      }, []);

return(
<>
<Banner/>
<Categoria/>
</>
)
}