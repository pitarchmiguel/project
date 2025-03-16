import Card from "./Card.jsx"

function Benefits() {
    return (
        <div className="md:p-5 items-center justify-center gap-12">
            <h4 className="text-4xl font-black text-center">
                Consigue 
                <span className="text-emerald-400"> más visibilidad </span> 
                para tu negocio y gana <span className="text-emerald-400">más clientes</span>
            </h4>

            <div className="flex flex-col md:flex-row justify-center gap-12">
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Benefits