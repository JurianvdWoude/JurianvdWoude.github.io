import Chat from './components/Chat'
//import Map from './components/Map'
import { useState, useEffect } from 'react'


function Simulation() {
  const [graphState, setGraphState] = useState(0)

  useEffect(() => {
    setGraphState(1);
  }, [])

 return (
  <div className="Simulation">
    <div className="flex">
      { graphState == 0 &&
        <div className="flex h-full w-full flex-col">
          <iframe className="w-full" src="https://192.168.2.130:3000/d-solo/adrn4t9/power-usage?from=1767222000000&to=1798757999999&timezone=browser&orgId=2&panelId=panel-5" height={600} frameBorder={0}></iframe>
        </div>
      }
      { graphState == 1 &&
        <div className="flex h-full w-full gap-4">
          <div className="flex flex-col basis-3/5 max-h-[600px] overflow-y-auto">
            <img className="w-full" src="GraphBig.png" />
            <img className="w-full" src="Graph2.png" />
          </div>
          <div className="basis-2/5">
            <Chat />
          </div>
        </div>
      }
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
