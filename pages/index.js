import Layout from "../components/Layout";
import Link from "next/link";

const Home = () => {
   return (
      <Layout>
         <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 shadow-2xl">
            <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
               <img src="/telefono.jpg" width="300" />
               <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
                  <h1 className="text-4xl font-sans font-bold text-gray-800 my-4">Control Movil Vehicular</h1>
                  <p className="text-2xl font-sans font-bold text-gray-800 my-4">
                     <span className="text-red-500 font-bold">Atencion: </span>Es Necesario tener Actualizado el Inventario para poder tener una mejor Administracion de Asignacion y Reposicion de Telefonos.
                  </p>
                  <Link href="/crearcuenta">
                     <a className="text-red-500 font-bold text-lg hover:text-red-700">Crea una cuenta</a>
                  </Link>
               </div>
            </div>
         </div>
      </Layout>
   );
}

export default Home;