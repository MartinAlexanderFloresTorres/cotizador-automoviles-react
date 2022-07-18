import { useCallback, useMemo, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

function Resultado() {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;
  if (resultado == 0) return null;

  //=============== utilizando useRef ===============//
  const yearRef = useRef(year);

  //=============== utilizando useCallblack ===============//
  const nombreMarca = useCallback(
    MARCAS.filter((m) => m.id === Number(marca)).map((item) => item.nombre),
    [resultado]
  );
  //=============== utilizando useMemo ===============//
  const nombrePlan = useMemo(
    () =>
      PLANES.filter((p) => p.id === Number(plan)).map((item) => item.nombre),
    [resultado]
  );

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-500 font-black text-2xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold text-gray-500">Marca: </span>
        {nombreMarca}
      </p>
      <p className="my-2">
        <span className="font-bold text-gray-500">Plan: </span>
        {nombrePlan}
      </p>
      <p className="my-2">
        <span className="font-bold text-gray-500">Año del auto: </span>
        {yearRef.current}
      </p>
      <p className="my-2 md:text-2xl">
        <span className="font-bold text-blue-500">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  );
}

export default Resultado;
