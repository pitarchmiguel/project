import { FaCheck } from "react-icons/fa6";

function CardPrice({plan, description, priceOld, priceNew, features}) {
    return (
        <div className="border-1 p-8 basis-1/2 md:max-w-2/5">
            
            <h3 className="font-bold text-xl mb-5">{plan}</h3>
            <h4>{description}</h4>
            <p className="mt-5 mb-5 text-xl">
                <span className="line-through text-red-800">{priceOld}</span>
                <span className="text-4xl font-extrabold">{priceNew}</span>
            </p>
            {features && 
            <ul>
                {features.map((feature, index) => 
                <li className="flex items-center gap-2" key={index}><FaCheck /> {feature}</li>)}
            </ul>}
        </div>
    )
}

export default CardPrice;