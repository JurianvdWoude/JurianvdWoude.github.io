
function Home() {
  const journey = [
    {
      image: "/victor_pic.jpg",
      title: "Victor",
      text: "Hallo! Wij zijn Victor Hoffmann, Sjoer van der Ploeg en Jurian van der Woude en samen vormen wij Go!Rillas. Ons avontuur begon met track 5: ‘Het beslismodel voor slimme prioritering’. We begonnen met het formuleren van onze hoofdvraag:\n\n\"Hoe kunnen we voor een buurt onderbouwd bepalen welke maatregelen tegen netcongestie het meest kansrijk zijn, wanneer we die moeten nemen en wat dat betekent voor de betrokken partijen?\"\n\nVanuit deze vraag ontstond het idee voor een slim beslissingssysteem dat verschillende opties, belangen en relevante gegevens samenbrengt en tegen elkaar afweegt. Het doel: komen tot een zo goed mogelijk onderbouwd besluit. We begonnen met het doorspitten van de beschikbare bronnen en data. Vervolgens bouwden we een database waarin we gegevens vanuit verschillende invalshoeken samenbrachten. Daar liepen we al snel tegen een belangrijk probleem aan: de beschikbare data was niet gedetailleerd genoeg voor de beslissingen die wij voor ogen hadden. Het benodigde granulatieniveau ontbrak. Idealiter willen we werken met data op een interval van 15 minuten, omdat slimme meters op dit interval telemetriedata kunnen leveren. Daarmee kunnen veranderingen in afname en opwek gedurende de dag veel nauwkeuriger worden meegenomen in de besluitvorming. Dat inzicht veranderde onze aanpak. In plaats van alleen een beslismodel te bouwen op basis van de huidige data, besloten we een ontwerp te maken voor onze Decision Engine: een multi-agent AI-systeem waarin bronagents, utility agents en een orchestration agent samenwerken.",
      imageLeft: true,
    },
    {
      image: "/sjoer_pic.jpg",
      title: "Sjoer",
      text: "Je kunt de Decision Engine zien als een soort AI Product Manager. Verschillende gespecialiseerde agents verzamelen en analyseren informatie vanuit hun eigen expertise. De orchestration agent brengt deze inzichten samen, legt verbanden en ondersteunt het besluitvormingsproces. Wat het systeem bijzonder maakt, is dat het ook naar zichzelf kijkt. Wijzigingen, beslissingen, gevonden verbanden en de effecten daarvan worden vastgelegd en opnieuw geanalyseerd. Zo ontstaat een continu leerproces: wat hebben we aangepast, waarom hebben we dat gedaan en welk effect heeft dat gehad? Op basis van deze kennis kan de Decision Engine verbeteringen voorstellen, bijvoorbeeld aan de gebruikte agents, databronnen, regels of werkwijze. Waar dat verantwoord is, kan het systeem zichzelf aanpassen; waar menselijke expertise of controle nodig is, stelt het systeem een wijziging voor. Zo ontstaat een feedbackloop waarin mens en machine samenwerken en het systeem steeds verder kan groeien en verbeteren. Daarmee is het geen statisch en afgekaderd geheel, maar een groeiend systeem dat zichzelf continu analyseert en zich op basis van nieuwe data, verbanden, inzichten en eerdere effecten steeds verder kan ontwikkelen.",
      imageLeft: false,
    },
    {
      image: "/jurian_pic.jpg",
      title: "Jurian",
      text: "Daaruit ontstond onze belofte:\n\nWij realiseren een intelligente, cloudgebaseerde webapplicatie die fungeert als een adaptief beslissingssysteem waarin data, AI-agents, belangen en mogelijke maatregelen samenkomen om voor iedere buurt tot onderbouwde keuzes tegen netcongestie te komen. Het beslissingssysteem is zelfanalyserend, lerend en groeiend en vormt een samenspel tussen mens en machine. Naast het ondersteunen van besluitvorming levert de Decision Engine dashboards, stuurt het processen aan, signaleert het mogelijke verbeteringen en realiseert het deze waar mogelijk.\n\nMaar een goed idee alleen is niet genoeg. Daarom bouwden we daarnaast een simulatie. Daarmee maken we inzichtelijk hoe het systeem zou kunnen functioneren wanneer de gewenste fijnmazige data over afname en opwek op basis van tijd beschikbaar is. Omdat we de Decision Engine uiteindelijk voor ons zien als een cloudgebaseerde webapplicatie, hebben we ervoor gekozen om ook onze hackathonpresentatie in die vorm te gieten. Geen traditionele presentatie, maar een website/webapplicatie waarin ons proces, onze Decision Engine en de simulatie samenkomen.",
      imageLeft: true,
    },
  ]
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 Home">
      <div className="mx-auto max-w-6xl">
         {journey.map((item, index) => {
            return (
              <div key={index}>
              <section
                className={`flex flex-col items-center gap-10 md:flex-row`}
              >
                <div className="w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-72 rounded-xl object-cover shadow-md m-2
                    ${
                      item.imageLeft ? "float-left" : "float-right"
                    }`}
                  />
                  <div className="w-full">
                    <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>
              </section>
              {index < (journey.length - 1) && (
                <hr className="my-12 border-slate-300" />
              )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
