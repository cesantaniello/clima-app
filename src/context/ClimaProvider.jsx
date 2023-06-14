import { useState, createContext } from "react";
import axios from "axios";


const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [resultado, setResultado] = useState({});

  const datosBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async datos => {
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      const {data} = await axios(url);
      console.log(data)
      const { coord } = data;
      const { lat, lon } = coord;
      console.log(lat, lon);

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
      const {data: dataClima} = await axios(urlClima);
      setResultado(dataClima)
    }
    catch (error) {
      console.log(datos)
    }
  }

  return (
    <ClimaContext.Provider value={{ busqueda, datosBusqueda, consultarClima, resultado }}>
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };
export default ClimaContext;
