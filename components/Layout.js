import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="bg-blue-600   min-h-screen">
            <div className="container mx-auto ">
               <Header/>
                <main className="mt-10 ">
                    {children}

                </main>
            </div>
        </div>
    );
}

export default Layout;