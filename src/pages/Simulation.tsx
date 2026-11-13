//import Chat from './components/Chat'
//import Map from './components/Map'
//import { useState } from 'react'


function Simulation() {
  //const [graphState, setGraphState] = useState(0)

 return (
  <div className="Simulation">
    <div className="flex">
      <div className="flex h-full flex-col w-full">
        <iframe src="https://localhost:3000/d-solo/adrn4t9/power-usage?from=1767222000000&to=1798757999999&timezone=browser&orgId=2&panelId=panel-5" width={"max-width"} height={600} frameBorder={0}></iframe>
      </div>
    {/*
      graphState == 1 &&
      <div className="flex h-full flex-col w-full">
        <Map />
      </div>
    */}
    </div>
      <div className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
          <p>Van beschikbare data naar bruikbare inzichten. Om de werking van data met het juiste granulatie niveaau en onze Decision Engine te demonstreren, hebben we deze interactieve simulatieomgeving ontwikkeld. </p>
          <br />
          <p><b>Bovenste dashboard – daadwerkelijke data:</b></p>
          <p>Hier tonen we de analyse op basis van de data die momenteel beschikbaar is. Deze data heeft onvoldoende detail en meetfrequentie om netcongestie op wijkniveau nauwkeurig te analyseren. Daardoor zijn pieken en lokale patronen moeilijk zichtbaar.</p>

          <br />
          <p><b>Onderste dashboard – synthetische data:</b></p>
          <p>Hier gebruiken we synthetisch gegenereerde data met een meetfrequentie van 15 minuten. Daarmee kunnen we laten zien welke inzichten mogelijk worden wanneer de data voldoende detail bevat, zoals piekbelasting, verbruiks- en terugleverpatronen en mogelijke interventiemomenten.</p>

          <br />
          <p><b>AI-assistent:</b></p>
          <p>Naast de dashboards staat een AI-chatvenster. Hiermee kun je vragen stellen over de data, verschillen tussen beide dashboards en mogelijke aandachtspunten voor de Decision Engine.</p>

          <br />
          <p>De synthetische data vervangt geen echte metingen. Ze wordt gebruikt om de mogelijkheden van onze aanpak zichtbaar te maken wanneer de benodigde praktijkdata nog niet beschikbaar is.</p>
      </div>
  </div>
 );
}


export default Simulation
