import Layout from "../components/Layout";

const Login = () => {
    return (
        <Layout>
            <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32 ">
                <h2 className="text-4xl font-sans font-bold text-white text-center my-4">Crear Cuenta</h2>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-lg">
                        <form
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                        >
                            <div className="mb-4">
                                <label
                                    className="block text-black text-sm font-bold mb-2"
                                    htmlFor="usuario"
                                >Usuario</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="usuario"
                                    placeholder="Nombre"

                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-black text-sm font-bold mb-2"
                                    htmlFor="password"
                                >Password</label>
                                <input
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-black text-sm font-bold mb-2"
                                    htmlFor="password"
                                >Password</label>
                                <input
                                    type="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    placeholder="Confirma Password"
                                />
                            </div>
                            <input
                                type="submit"
                                className="bg-red-500 px-5 py-3 rounded-lg  hover:bg-red-600  w-full p-2 text-white uppercase font-bold"
                                value="Registrar Usuario"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;