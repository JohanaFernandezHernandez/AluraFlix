import axios from "axios";

export const useConectionApi = () => {
  const baseUrl ="https://my-json-server.typicode.com/JohanaFernandezHernandez/api-challenger/categorias";

  //Obtener todas las categorias 
  const getCategorias = async () => {
    try {
      const response = await axios.get(baseUrl);
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Obtener solo una
  const getItemByCategory = async (categoryName, itemId) => {
    try {
      const response = await axios.get(baseUrl);
      if (response.status === 200) {
        const data = response.data;

        // Buscar la categoría por nombre
        const category = data.find((cat) => cat.nombre === categoryName);

        // Si la categoría existe, buscar el ítem por ID
        if (category) {
          const item = category.items.find((item) => item.id === itemId);
          return item || null; // Devolver el ítem si existe, o null si no se encuentra
        }

        return null; // Si no se encuentra la categoría
      }
    } catch (error) {
      console.error("Error obteniendo ítem:", error);
      return null;
    }
  };

  //Eliminar video
  const deleteItem = async (categoryName, itemId) => {
    try {
      // Simular la eliminación con una API
      const response = await axios.delete(
        `https://my-json-server.typicode.com/JohanaFernandezHernandez/api-challenger/categorias/${categoryName}/items/${itemId}`
      );
  
      if (response.status === 200) {
        console.log(`Ítem con ID ${itemId} eliminado correctamente de la categoría ${categoryName}.`);
        return true;
      }
    } catch (error) {
      console.error("Error al eliminar el ítem:", error);
      return false;
    }
  };


  //Editar Video
  const editItem = async (categoryName, itemId, updatedData) => {
    try {
      const response = await axios.put(
        `https://my-json-server.typicode.com/JohanaFernandezHernandez/api-challenger/categorias/${categoryName}/items/${itemId}`,
        updatedData // Datos actualizados para el ítem
      );
  
      if (response.status === 200) {
        console.log(`Ítem con ID ${itemId} actualizado correctamente.`);
        return response.data; // Devuelve el ítem actualizado
      }
    } catch (error) {
      console.error("Error al editar el ítem:", error);
      return null;
    }
  };

  return { getCategorias, getItemByCategory };
};
