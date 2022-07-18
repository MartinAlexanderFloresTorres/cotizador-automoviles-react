import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useCotizador from "../hooks/useCotizador";
import Spinner from "./Spinner";
import autoImg from "../img/auto.webp";
function AppSeguro() {
  const { cargando } = useCotizador();
  return (
    <>
      <header className="my-10">
        <h1 className="text-center text-white font-black text-4xl">
          Cotizador de Seguros de Autos
        </h1>
      </header>

      <main className="bg-white shadow rounded-lg p-10  mt-12 grid items-center w-full max-w-6xl  mx-auto md:grid-cols-2">
        <img className="mx-auto" width={500}  src={autoImg} alt="auto" />
        <section className="md:ml-5">
          <Formulario />
        </section>
          <section className="md:col-span-2">
          {cargando ? <Spinner /> : <Resultado />}
          </section>
      </main>
    </>
  );
}

export default AppSeguro;
