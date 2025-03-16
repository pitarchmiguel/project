import { MdClose } from "react-icons/md";

function Card() {
    return(
        <div className="border-1 text-red-300 border-red-300 bg-red-700/10 p-8 basis-1/2 md:max-w-2/5 rounded-3xl">
            <h4 className="text-xl font-bold mb-5">Negocio desactualizado</h4>
            <ul>
                <li className="flex items-center gap-2"><MdClose /> Sin presencia en internet</li>
                <li className="flex items-center gap-2"><MdClose /> Publicidad en vallas</li>
                <li className="flex items-center gap-2"><MdClose /> Publicidad en radio</li>
                <li className="flex items-center gap-2"><MdClose /> Coste en publicidad</li>
            </ul>
        </div>
        
    )
}

export default Card;