function Header() {
    return (
        <header className="min-h-screen flex flex-col md:p-5 items-center justify-center gap-12">

            <h1 className="md:text-5xl text-4xl font-black text-center">
                Si no estás en internet, 
                <span className="text-pink-700"> no existes</span>
            </h1>

            <h2 className="md:text-2xl text-lg text-center text-neutral-400">
                Todo lo que necesitas para conseguir más clientes e incrementar tus ventas
            </h2>

            <button className="border-1 px-14 py-3 rounded-full bg-pink-700 text-pink-200 font-extrabold text-xl hover:bg-pink-900 hover:text-pink-100 ease-in-out duration-300 cursor-pointer">
                Hablamos
            </button>

        </header>
    );
}

export default Header;