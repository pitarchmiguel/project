import Card from "./Card.jsx"

function Benefits() {
    return (
        <div className="flex flex-col md:p-5 items-center justify-center gap-12">
            <h4 className="text-4xl font-black text-center">
                Consigue 
                <span className="text-emerald-400"> más visibilidad </span> 
                para tu negocio y gana <span className="text-emerald-400">más clientes</span>
            </h4>

            <Card />

        </div>
    )
}

export default Benefits