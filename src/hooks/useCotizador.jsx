import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

function useCotizador() {
  return useContext(CotizadorContext);
}

export default useCotizador;
