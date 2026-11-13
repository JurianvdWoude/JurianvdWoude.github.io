
function Engine() {
 return (
    <div className="min-h-screen px-6 py-10 text-slate-900 Engine">
      <div className="mx-auto max-w-6xl">
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">
         Een betrouwbare, zelflerende en continu verbeterende Decision Engine. Een multi-agentarchitectuur die zelfstandig analyses uitvoert, beslissingen ondersteunt, processen aanstuurt en zichzelf continu verbetert, stelt hoge eisen aan betrouwbaarheid en kwaliteit. AI is immers niet onfeilbaar. Agents kunnen informatie verkeerd interpreteren, gegevens missen, onjuiste conclusies trekken of hallucineren. Daarom moet kwaliteitsbewaking niet afhankelijk zijn van één agent, maar structureel onderdeel zijn van de architectuur. We onderscheiden hiervoor een aantal belangrijke principes.</p>

        <br />
        <h2>1. Het zesogenprincipe: onafhankelijke controle</h2>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Iedere gespecialiseerde bronagent beschikt over een controlemechanisme met twee onafhankelijke controleagents. Zij beoordelen de output op juistheid, volledigheid, onderbouwing, interpretatie en mogelijke tegenstrijdigheden. Wanneer de controleagents het niet met elkaar eens zijn, kunnen zij hun bevindingen vergelijken en waar nodig menselijke beoordeling inschakelen. Zo wordt niet alleen het oorspronkelijke resultaat gecontroleerd, maar ook de controle zelf.</p>

        <br />
        <h2>2. Het baselineprincipe: werken vanuit bewezen voorbeelden</h2>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Agents krijgen waar mogelijk uitgewerkte voorbeelden, referentieresultaten en bewezen werkwijzen mee als context. Hierdoor beschikken ze over een concreet referentiekader voor de gewenste kwaliteit, structuur en output. Een eenvoudig voorbeeld maakt dit duidelijk. Vraag AI om een afbeelding van een chic pilotenhorloge te genereren, waarbij de wijzers exact op half zes moeten staan. Hoewel AI waarschijnlijk een mooi pilotenhorloge genereert, staan de wijzers vrijwel altijd verkeerd. Geef je naast de tekstuele instructie ook een voorbeeldafbeelding mee van een horloge waarop de wijzers daadwerkelijk op half zes staan, dan beschikt AI over een veel concreter visueel referentiekader (broodnodige context) en genereert het vrijwel altijd het gewenste resultaat. Hetzelfde principe geldt voor analyses, rapportages, SQL-query's en besluitvormingsprocessen. Door agents niet alleen instructies, maar ook goede voorbeelden en referentieresultaten mee te geven, ontstaat meer consistentie en wordt de gewenste kwaliteit beter reproduceerbaar. De baseline vormt daarmee niet alleen een kwaliteitsreferentie, maar ook een fundament voor verdere ontwikkeling en het toetsen van toekomstige verbeteringen.</p>

        <br />
        <h2>3. Hybride data-access: RAG, Text-to-SQL en filterlagen</h2>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">De communicatie tussen bronagents en de SQL-database verloopt via twee parallelle gegevensstromen: Retrieval-Augmented Generation (RAG) en Text-to-SQL. Beide vullen elkaar aan en kunnen afzonderlijk of gecombineerd worden ingezet. De gegevensstroom ziet er als volgt uit:</p>

        <br />
        <ul className="list-disc ml-3">
          <li className="mt-2 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Bronagent → Filterlaag 1:</b> de informatievraag wordt geanalyseerd, gefilterd en gericht doorgestuurd.</li>
          <li className="mt-2 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Parallelle RAG-lijn:</b> haalt relevante informatie op basis van semantische betekenis uit documenten, tekstuele bronnen en geïndexeerde kennis.</li>
          <li className="mt-2 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Parallelle Text-to-SQL-lijn:</b> vertaalt natuurlijke taalvragen naar gevalideerde SQL-query's om gestructureerde gegevens uit de relationele database op te halen en te analyseren.</li>
          <li className="mt-2 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Filterlaag 2: de teruggeleverde informatie wordt gefilterd, gestructureerd en gecontroleerd op relevantie, omvang en volledigheid.</li>
          <li className="mt-2 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Contextmanagementagent:</b> beoordeelt of de informatie binnen het beschikbare contextvenster van de bronagent past. Wanneer nodig wordt de informatie opgedeeld in kleinere gegevenspakketten (chunks), waarbij samenhang en volledigheid bewaakt blijven.</li>
          <li className="mt-2 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Terug naar de bronagent:</b> de informatie wordt stapsgewijs beschikbaar gesteld voor verdere analyse en verwerking.</li>
        </ul>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Door deze combinatie kunnen agents zowel gestructureerde data als ongestructureerde informatie gebruiken. Denk aan 15-minutendata over energieafname en opwek, gecombineerd met beleidsdocumenten, netbeheerderinformatie en historische analyses.</p>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">De filterlagen voorkomen onnodige dataverwerking en overbelasting van contextvensters. Tegelijkertijd moet de herkomst en volledigheid van informatie behouden blijven, zodat relevante gegevens niet ongemerkt verloren gaan.</p>

        <br />
        <h2>4. Procesbewaking en het STOP-principe</h2>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Gespecialiseerde monitoringagents bewaken continu of processen correct, volledig en volgens de vastgestelde kwaliteitscriteria verlopen. Ze signaleren afwijkingen, terugkerende fouten en mogelijke verbeteringen.</p>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Daarnaast beschikt de architectuur over een gespecialiseerde STOP-agent. Deze kan processen gecontroleerd onderbreken wanneer bijvoorbeeld de betrouwbaarheid onvoldoende is, ernstige afwijkingen ontstaan of agents buiten hun bevoegdheden dreigen te handelen.</p>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">De STOP-agent legt de aanleiding vast, informeert betrokken agents en schakelt waar nodig menselijke ondersteuning in.</p>

        <br />
        <h2>5. Het Decision Engine Innovation Team: zelfanalyse en ontwikkeling</h2>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Een gespecialiseerd Innovation Team analyseert de Decision Engine zelf. Het houdt resultaten en beslissingen bij, herkent patronen en verbanden, identificeert structurele knelpunten en onderzoekt waar verbeteringen mogelijk zijn. Daarbij wordt niet alleen gekeken naar wat er is veranderd, maar ook waarom een wijziging is doorgevoerd en welk effect deze daadwerkelijk heeft gehad. Het Innovation Team kan verbeteringen voorstellen aan agents, databronnen, instructies, controles en besluitvormingsprocessen. Afhankelijk van de impact en bevoegdheden kunnen deze zelfstandig worden doorgevoerd of eerst ter goedkeuring aan mensen worden voorgelegd.</p>

        <br />
        <h2>6. Het testteam: controle van de controle</h2>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Een systeem dat zichzelf controleert, moet ook onafhankelijk getest worden. Daarom beschikt de architectuur over een gespecialiseerd testteam dat zowel de inhoudelijke resultaten als de geautomatiseerde controlemechanismen beoordeelt. Dit team test onder andere of controleagents fouten daadwerkelijk herkennen, de STOP-agent correct functioneert en verbeteringen aantoonbaar tot betere resultaten leiden. Met testscenario's, referentiedatasets en regressietesten wordt bewaakt dat het systeem betrouwbaar blijft en zichzelf niet ongemerkt verslechtert.</p>

        <br />
        <h2>7. Het autonomie- en goedkeuringsmodel: mens en machine</h2>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Niet iedere handeling of beslissing mag dezelfde mate van autonomie hebben. Daarom wordt een centraal indexerings- en bevoegdhedensysteem ingericht dat per proces en type beslissing bepaalt welke mate van menselijke betrokkenheid noodzakelijk is. We onderscheiden drie niveaus:</p>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Niveau 1</b> – Autonoom: AI mag zelfstandig handelen binnen vastgestelde kaders en bevoegdheden.</p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Niveau 2</b> – Menselijke goedkeuring: AI analyseert en adviseert, maar heeft goedkeuring nodig voordat een beslissing of actie wordt uitgevoerd.</p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line"><b>Niveau 3</b> – Menselijke besluitvorming: AI ondersteunt met informatie en analyses, maar de uiteindelijke beslissing ligt volledig bij een mens.</p>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Hiermee wordt menselijke betrokkenheid een integraal onderdeel van de architectuur.</p>

        <br />
        <p className="mt-4 text-lg leading-relaxed text-slate-600 whitespace-pre-line">Het resultaat: een ecosysteem dat zichzelf blijft ontwikkelen. Door deze principes samen te brengen, ontstaat een Decision Engine die niet alleen analyses uitvoert en beslissingen ondersteunt, maar ook de eigen werking continu evalueert. Gespecialiseerde agents verzamelen informatie, analyseren resultaten, controleren elkaars werk, bewaken processen en identificeren verbeterkansen. Het Innovation Team onderzoekt hoe de architectuur verder kan worden ontwikkeld, terwijl het testteam de kwaliteit van die verbeteringen bewaakt. De mens blijft daarbij een essentiële partner die richting geeft, bevoegdheden bepaalt, complexe afwegingen maakt en toezicht houdt waar dat noodzakelijk is. Onze ambitie is een Decision Engine die niet alleen steeds slimmer wordt in wat zij doet, maar ook steeds beter begrijpt hoe goed zij dat doet, waar haar beperkingen liggen en hoe zij zichzelf verantwoord kan verbeteren.</p>

         <br />
        <img src="decision-engine.jpeg" />
    </div>
  </div>
 );
}


export default Engine
