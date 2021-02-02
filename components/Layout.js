import Header from "./Header";
import Head from 'next/head';
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>ControlMovil</title>
            </Head>
            <div className=" bg-gray-700 min-h-screen">
                <Header />

                <div className="container mx-auto">
                    <main className="mt-20">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}

export default Layout;