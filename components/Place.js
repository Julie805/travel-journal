import React from "react"

export default function Place(props) {
    return (
        <article>
            <img src={`../img/${props.item.imageUrl}`} alt="mount fuji" />
            <div className="place--info">
                <div className="place--location">
                    <img src="../img/red-icon.png" alt="red icon" />
                    <p className="place--country">{props.item.location}</p>
                    <a className="place--map" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <p className="place--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="place--about">{props.item.description}</p>
            </div>
        </article>      
    )
}

