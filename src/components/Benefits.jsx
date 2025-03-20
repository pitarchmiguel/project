import Card from "./Card.jsx"

function Benefits() {
    return (
        <div className=" items-center justify-center gap-12 min-h-[80vh]">
            <h4 className="text-4xl font-black text-center">
                Consigue 
                <span className="text-emerald-400"> más visibilidad </span> 
                para tu negocio y gana <span className="text-emerald-400">más clientes</span>
            </h4>

            <div className="flex flex-col md:flex-row justify-center gap-12 mt-15">
                <Card 
                color="red"
                title="Empresas antiguas"
                features={[
                    "Poca visibilidad en internet",
                    "Pocos clientes nuevos",
                    "Poco crecimiento",
                ]}
                />


                <Card color="green"
                title="Nueva era digital"
                features={[
                    "Mayor visibilidad en internet",
                    "Más clientes nuevos",
                    "Mayor crecimiento",
                ]}
                />
            </div>

        </div>
    )
}

export default Benefits