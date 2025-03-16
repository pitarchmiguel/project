import { TbPoint } from "react-icons/tb";

function Card({title, features, color = "red"}) {
    const colors = {
        red: "text-red-300 border-red-300 bg-red-700/10",
        green: "text-green-300 border-green-300 bg-green-700/10",
    };

    return(
        <div className={`border-1 p-8 basis-1/2 md:max-w-2/5 rounded-3xl ${colors[color]}`}>
            <h4 className="text-xl font-bold mb-5">{title}</h4>
            {features && 
                <ul>
                    {features.map((feature, index) => 
                    <li className="flex items-center gap-2" key={index}><TbPoint /> {feature}</li>)}
                </ul>}
        </div>
        
    )
}

export default Card;