import React from "react"

export default function Place () {
    return (
        <article>
            <img src="../img/mount-fuji.png" alt="mount fuji" />
            <div className="place--info">
                <div className="place--location">
                    <img src="../img/red-icon.png" alt="red icon" />
                    <p className="place--country">JAPAN</p>
                    <a className="place--map" href="">View on Google Maps</a>
                </div>
                <h2>Mount Fiji</h2>
                <p className="place--dates">start date - end date</p>
                <p className="place--about">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            <hr/>
        </article>      
    )
}