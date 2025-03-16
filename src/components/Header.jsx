function Header() {
    return (
        <header className="min-h-screen flex flex-col md:p-5 items-center justify-center gap-12 p-4">

            <h1 className="md:text-6xl text-5xl font-black text-center">
                Si no estás en internet, 
                <span className="text-pink-700"> no existes</span>
            </h1>

            <h2 className="md:text-2xl text-lg text-center text-neutral-400">
                Todo lo que necesitas para conseguir más clientes e incrementar tus ventas
            </h2>

            <button className="border-1 border-pink-400 px-14 py-3 rounded-full bg-pink-700 text-pink-200 font-extrabold text-xl hover:bg-pink-900 hover:text-pink-100 ease-in-out duration-300 cursor-pointer hover:-rotate-10">
                Hablamos
            </button>

        </header>
    );
}

export default Header;