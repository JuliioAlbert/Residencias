import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 py-6 flex flex-col md:flex-row items-center justify-around ">
            <Link href="/">
                <img
                    className="w-64 mb-8 md:mb-1 cursor-pointer" src="/logo.png"
                />
            </Link>
            <div>
                <>
                    <Link href="/login">
                        <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar Sesión</a>
                    </Link>
                    <Link href="/crearcuenta">
                        <a className="bg-blue-900 px-5 py-3 rounded-lg text-white font-bold uppercase">Crear Cuenta</a>
                    </Link>
                </>
            </div>
        </header>
    );
}

export default Header;