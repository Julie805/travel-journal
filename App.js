import React from "react"
import Header from "./components/Header"
import Place from "./components/Place"
import data from "./data"

export default function App() {
    const places = data.map(item => {
        return (
             <Place 
                key = {item.id}
                item = {item}      
            />
            
        )
    })
    
    return (
        <div>
            <Header />
            <section>
                {places}
            </section>
        </div>
    )
}

