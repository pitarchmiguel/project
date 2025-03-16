function CardPrice({plan, description, priceOld, priceNew, features}) {
    return (
        <div className="border-1 p-5">
            <h3>{plan}</h3>
            <h4>{description}</h4>
            <p><span>{priceOld}</span>{priceNew}</p>
            {features && 
            <ul>
                {features.map((feature, index) => 
                <li key={index}>{feature}</li>)}
            </ul>}
        </div>
    )
}

export default CardPrice;