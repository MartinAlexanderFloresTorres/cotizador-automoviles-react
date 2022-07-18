import { createContext, useState } from "react";
import {
  getDiferenciaYear,
  getCalcularMarca,
  getCalcularPlan,
  getFormatearDinero,
} from "../helpers";

const CotizadorContext = createContext();

function CotizadorProvider({ children }) {
  const [datos, setDatos] = useState({ marca: "", year: "", plan: "" });
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const cotizarSeguro = () => {
    const { marca, year, plan } = datos;
    // Una base
    let resultado = 2000;

    // Obtener diferencia de años
    const diferencia = getDiferenciaYear(year);
    // Hay que restar el 3% por cada año
    resultado -= (diferencia * 3 * resultado) / 100;

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%
    resultado *= getCalcularMarca(marca);

    // Basico 20%
    // Completo 50%
    resultado *= getCalcularPlan(plan);
    resultado = getFormatearDinero(resultado);
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setResultado(resultado);
    }, 1000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        handleChangeDatos,
        datos,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
}
export { CotizadorProvider };
export default CotizadorContext;
