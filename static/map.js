var map = AmCharts.makeChart("chartdiv", {
  type: "map",
  "theme": "none",
  pathToImages: "https://www.amcharts.com/lib/3/images/",

  colorSteps: 10,

  dataProvider: {
    map: "worldLow",
    zoomLatitude: 46.214708,
    zoomLevel: 1,
    zoomLongitude: 10.347274,
    areas: [{
      id: "ES",
      info: "Spain (Listeni/ˈspeɪn/; Spanish: España [esˈpaɲa] ( listen)), officially the Kingdom of Spain (Spanish: Reino de España),[d][e] is a sovereign state and a member state of the European Union. It is located on the Iberian Peninsula in southwestern Europe. Its mainland is bordered to the south and east by the Mediterranean Sea except for a small land boundary with Gibraltar; to the north and north east by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean. It is one of three countries—France and Morocco are the other two—to have both Atlantic and Mediterranean coastlines. Spain's 1,214 km (754 mi) border with Portugal is the longest uninterrupted border within the European Union."
    }, {
      id: "FR",
      info: "France (UK: /frɑːns/; US: Listeni/fræns/; French: [fʁɑ̃s] ( listen)), officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛz]), is a sovereign country in Western Europe that includes several overseas regions and territories.[note 13] Metropolitan France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. It is one of only three countries (with Morocco and Spain) to have both Atlantic and Mediterranean coastlines. Due to its shape, it is often referred to in French as l’Hexagone (\"The Hexagon\")."
    }, {
      id: "IT",
      info: "Italy Listeni/ˈɪtəli/ (Italian: Italia [iˈtaːlja]), officially the Italian Republic (Italian: Repubblica italiana),[7][8][9][10] is a unitary parliamentary republic in Southern Europe. To the north, Italy borders France, Switzerland, Austria, and Slovenia, and is approximately delimited by the Alpine watershed, enclosing the Po Valley and the Venetian Plain. To the south, it consists of the entirety of the Italian Peninsula and the two biggest Mediterranean islands of Sicily and Sardinia."
    }, {
      id: "AT",
      info: "Austria (Listeni/ˈɔːstriə/ or /ˈɒstriə/; German: Österreich [ˈøːstɐˌʁaɪç] ( listen)), officially the Republic of Austria (German: About this sound Republik Österreich (help·info)), is a federal republic and a landlocked country of roughly 8.5 million people[6] in Central Europe. It is bordered by the Czech Republic and Germany to the north, Hungary and Slovakia to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west. The territory of Austria covers 83,855 square kilometres (32,377 sq mi) and has a temperate and alpine climate. Austria's terrain is highly mountainous due to the presence of the Alps; only 32% of the country is below 500 metres (1,640 ft), and its highest point is 3,798 metres (12,461 ft).[7] The majority of the population speak local Bavarian dialects of German as their native language,[8] and German in its standard form is the country's official language.[9] Other local official languages are Hungarian, Burgenland Croatian, and Slovene.[7]"
    }, {
      id: "DE",
      info: "Germany (Listeni/ˈdʒɜrməni/; German: Deutschland), officially the Federal Republic of Germany (German: Bundesrepublik Deutschland, pronounced [ˈbʊndəsʁepuˌbliːk ˈdɔʏtʃlant] ( listen)),[15] is a federal parliamentary republic in western-central Europe. The country consists of 16 states and its capital and largest city is Berlin. Germany covers an area of 357,021 square kilometres (137,847 sq mi) and has a largely temperate seasonal climate. With 80.6 million inhabitants, it is the most populous member state in the European Union. Germany is the major economic and political power of the European continent and a historic leader in many cultural, theoretical and technical fields."
    }, {
      id: "NL",
      info: "The Netherlands (Listeni/ˈnɛðərləndz/; Dutch: Nederland [ˈneːdərˌlɑnt] ( listen)) is a constituent country of the Kingdom of the Netherlands, consisting of twelve provinces in western Europe and three islands in the Caribbean. The European part of the Netherlands borders the North Sea to the north and west, Belgium to the south, and Germany to the east; and shares maritime borders with Belgium, Germany and the United Kingdom.[9] The Netherlands was one of the first countries in the world to have an elected parliament, and is governed as a parliamentary democracy organised as a unitary state. The capital city of the Netherlands, mandated by the constitution, is Amsterdam; however, the seat of government is located in The Hague.[10] The Netherlands in its entirety is often referred to as \"Holland\", which in strict usage, refers only to North and South Holland, two of its provinces. The former usage is considered incorrect[11][12] or informal,[13] depending on the context, but is generally accepted when referring to the national football team."
    }, {
      id: "BE",
      info: "Belgium (Listeni/ˈbɛldʒəm/; Dutch: België; French: Belgique; German: Belgien), officially the Kingdom of Belgium, is a federal monarchy in Western Europe. It is a founding member of the European Union and hosts the EU's headquarters as well as those of several other major international organisations such as NATO.[nb 1] Belgium covers an area of 30,528 square kilometres (11,787 sq mi), and it has a population of about 11 million people."
    },{
    id: "MY",
      info: "Belgium (Listeni/ˈbɛldʒəm/; Dutch: België; French: Belgique; German: Belgien), officially the Kingdom of Belgium, is a federal monarchy in Western Europe. It is a founding member of the European Union and hosts the EU's headquarters as well as those of several other major international organisations such as NATO.[nb 1] Belgium covers an area of 30,528 square kilometres (11,787 sq mi), and it has a population of about 11 million people."
    }]
  },

  areasSettings: {
    autoZoom: false,
    selectable: true
  }

});

map.addListener("rollOverMapObject", function(event) {
  document.getElementById("info").innerHTML = '<p><b>' + event.mapObject.title + '</b></p><p>' + event.mapObject.info + '</p>';
});
