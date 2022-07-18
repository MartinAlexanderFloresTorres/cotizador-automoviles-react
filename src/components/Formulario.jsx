import { Fragment, useState } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

function Formulario() {
  const [error, setError] = useState(false);
  const { handleChangeDatos, datos, cotizarSeguro } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError(true);
      return;
    }
    // cotizar
    setError(false);
    cotizarSeguro();
  };

  return (
    <>
      {error && (
        <div className="text-center text-red-600 border border-red-400 bg-red-100 p-2 rounded">
          Todo los campos son obligatorios
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 text-gray-400 uppercase font-semibold"
          >
            Marca
          </label>
          <select
            onChange={handleChangeDatos}
            name="marca"
            id="marca"
            value={datos.marca}
            className="w-full bg-white p-3 border border-gray-200 rounded-lg outline-slate-200 text-center"
          >
            <option value="">-- Selecione Marca --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="year"
            className="block mb-3 text-gray-400 uppercase font-semibold"
          >
            Año
          </label>
          <select
            value={datos.year}
            onChange={handleChangeDatos}
            name="year"
            id="year"
            className="w-full bg-white p-3 border border-gray-200 rounded-lg outline-slate-200 text-center"
          >
            <option value="">-- Selecione Año --</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="planes"
            className="block mb-3 text-gray-400 uppercase font-semibold"
          >
            Ejile un plan
          </label>
          <div className="flex gap-2 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  onChange={handleChangeDatos}
                  type="radio"
                  name="plan"
                  value={plan.id}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          className="bg-indigo-500 hover:bg-indigo-600 transition-colors w-full p-2 rounded cursor-pointer text-white font-bold"
          type="submit"
          value={"Cotizar"}
        />
      </form>
    </>
  );
}

export default Formulario;
