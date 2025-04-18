import React from 'react'

export default function InfoSite() {
  return (
    <div>
        <h1>Information</h1>
        <h2>
            Om spelet
        </h2>
        <p>
            Wordle är ett spel som blivit populärt där man som spelare ska gissa ett ord. Ett slumpmässigt ord efter filterade inställningar väljs ut. 
        </p>
        <h2>
            Regler
        </h2>
        <ul>
            <li>Du har 6 totala gissningar för att lista ut ordet.</li>
            <li>Om en bokstav är en del av ordet men är på fel plats så visas den som gul.</li>
            <li>Om en bosktav är en del av ordet och är på rätt plats så visas den som grön.</li>
            <li>Om en bokstav är helt fel så kommer den visas som röd.</li>
        </ul>
    </div>
  )
}
