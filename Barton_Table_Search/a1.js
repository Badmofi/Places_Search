
const PLACES = [
    "Madrid,Spain,3255944",
    "Santiago,Chile,4837295",
    "Lima,Peru,7737002",
    "Bogotá,Colombia,7674366",
    "Caracas,Venezuela,3000000",
    "Buenos Aires,Argentina,13076300",
    "Reykjavik,Iceland,118918",
    "Prague,Czechia,1165581",
    "Rome,Italy,2318895",
    "Beirut,Lebanon,1916100",
    "Amman,Jordan,1275857",
    "Ankara,Turkey,3517182",
    "Nairobi,Kenya,2750547",
    "Damascus,Syria,1569394",
    "Riyadh,Saudi Arabia,4205961",
    "Tehran,Iran,7153309",
    "Baghdad,Iraq,7216000",
    "Mogadishu,Somalia,2587183",
    "Dakar,Senegal,2476400",
    "Ouagadougou,Burkina Faso,1086505",
    "Kinshasa,Democratic Republic of the Congo,7785965",
    "Luanda,Angola,2776168",
    "Accra,Ghana,1963264",
    "Antananarivo,Madagascar,1391433",
    "Lusaka,Zambia,1267440",
    "Saint-Denis,Réunion,137195",
    "Maputo,Mozambique,1191613",
    "Kampala,Uganda,1353189",
    "Dhaka,Bangladesh,10356500",
    "Kathmandu,Nepal,1442271",
    "Algiers,Algeria,1977663",
    "Amsterdam,Netherlands,741636",
    "Brussels,Belgium,1019022",
    "London,United Kingdom,7556900",
    "Copenhagen,Denmark,1153615",
    "Paris,France,2138551",
    "Berlin,Germany,3426354",
    "Dublin,Ireland,1024027",
    "Luxembourg,Luxembourg,76684",
    "Bern,Switzerland,121631",
    "Manila,Philippines,1600000",
    "Taipei,Taiwan,7871900",
    "Bangkok,Thailand,5104476",
    "Jakarta,Indonesia,8540121",
    "Hong Kong,Hong Kong,7012738",
    "Phnom Penh,Cambodia,1573544",
    "Beijing,China,11716620",
    "Pyongyang,North Korea,3222000",
    "Seoul,South Korea,10349312",
    "Tokyo,Japan,8336599",
    "Tashkent,Uzbekistan,1978028",
    "Kabul,Afghanistan,3043532",
    "Addis Ababa,Ethiopia,2757729",
    "Cairo,Egypt,7734614",
    "Bucharest,Romania,1877155",
    "Warsaw,Poland,1702139",
    "Moscow,Russia,10381222",
    "Tbilisi,Georgia,1049498",
    "Baku,Azerbaijan,1116513",
    "Kiev,Ukraine,2797553",
    "Yerevan,Armenia,1093485",
    "Sofia,Bulgaria,1152556",
    "Hanoi,Vietnam,1431270",
    "Stockholm,Sweden,1515017",
    "Budapest,Hungary,1741041",
    "Havana,Cuba,2163824",
    "Mexico City,Mexico,12294193",
    "Sucre,Bolivia,224838",
    "Washington,United States,601723",
    "Panama City,Panama,408168",
    "Port-au-Prince,Haiti,1234742",
    "Tegucigalpa,Honduras,850848",
    "Managua,Nicaragua,973087",
    "Quito,Ecuador,1399814",
    "San José,Costa Rica,335007",
    "Fort-de-France,Martinique,89995",
    "Nassau,Bahamas,227940",
    "Montevideo,Uruguay,1270737",
    "Windhoek,Namibia,268132",
    "Brasília,Brazil,2207718",
    "Asunción,Paraguay,1482200",
    "Paramaribo,Suriname,223757",
    "Kingston,Jamaica,937700",
    "Santo Domingo,Dominican Republic,2201941",
    "Willemstad,Curacao,125000",
    "Bratislava,Slovakia,423737",
    "Ljubljana,Slovenia,272220",
    "Zagreb,Croatia,698966",
    "Sarajevo,Bosnia and Herzegovina,696731",
    "Podgorica,Montenegro,136473",
    "Oslo,Norway,580000",
    "Tirana,Albania,374801",
    "Bujumbura,Burundi,331700",
    "Muscat,Oman,797000",
    "Doha,Qatar,344939",
    "Manama,Bahrain,147074",
    "Athens,Greece,664046",
    "Riga,Latvia,742572",
    "Abu Dhabi,United Arab Emirates,603492",
    "Ashgabat,Turkmenistan,727700",
    "Nicosia,Cyprus,200452",
    "Sanaa,Yemen,1937451",
    "Noumea,New Caledonia,93060",
    "Canberra,Australia,367752",
    "Suva,Fiji,77366",
    "Lomé,Togo,749700",
    "São Tomé,São Tomé and Príncipe,53300",
    "Conakry,Guinea,1767200",
    "Bangui,Central African Republic,542393",
    "Libreville,Gabon,578156",
    "Freetown,Sierra Leone,802639",
    "N'Djamena,Chad,721081",
    "Bissau,Guinea-Bissau,388028",
    "Nouakchott,Mauritania,661400",
    "Porto-Novo,Benin,234168",
    "Port Moresby,Papua New Guinea,283733",
    "Lisbon,Portugal,517802",
    "Malabo,Equatorial Guinea,155963",
    "Monrovia,Liberia,939524",
    "Yamoussoukro,Ivory Coast,194530",
    "Vientiane,Laos,196731",
    "Tunis,Tunisia,693210",
    "Bamako,Mali,1297281",
    "Niamey,Niger,774235",
    "Brazzaville,Republic of the Congo,1284609",
    "Yaoundé,Cameroon,1299369",
    "Tripoli,Libya,1150989",
    "Honiara,Solomon Islands,56298",
    "Ulan Bator,Mongolia,844818",
    "Lilongwe,Malawi,646750",
    "Maseru,Lesotho,118355",
    "Gaborone,Botswana,208411",
    "Port Louis,Mauritius,155226",
    "Mbabane,Swaziland,76218",
    "Moroni,Comoros,42872",
    "Mamoudzou,Mayotte,54831",
    "Pretoria,South Africa,1619438",
    "Colombo,Sri Lanka,648034",
    "Thimphu,Bhutan,98676",
    "Dushanbe,Tajikistan,679400",
    "Kigali,Rwanda,745261",
    "Djibouti,Djibouti,623891",
    "Malé,Maldives,103693",
    "Rabat,Morocco,1655753",
    "Vienna,Austria,1691468",
    "Dili,East Timor,150000",
    "Bandar Seri Begawan,Brunei,64409",
    "Macao,Macao,520400",
    "Singapore,Singapore,3547809",
    "Astana,Kazakhstan,345604",
    "Bishkek,Kyrgyzstan,900000",
    "Asmara,Eritrea,563930",
    "Khartoum,Sudan,1974647",
    "Juba,South Sudan,450000",
    "Helsinki,Finland,558457",
    "Harare,Zimbabwe,1542813",
    "Minsk,Belarus,1742124",
    "Tallinn,Estonia,394024",
    "Belgrade,Serbia,1273651",
    "Skopje,Macedonia,474889",
    "Pristina,Kosovo,550000",
    "Chisinau,Moldova,635994",
    "Vilnius,Lithuania,542366",
    "Kuala Lumpur,Malaysia,1453975",
    "Bridgetown,Barbados,98511",
    "Praia,Cape Verde,113364",
    "Georgetown,Guyana,235017",
    "Cayenne,French Guiana,61550",
    "San Juan,Puerto Rico,418140",
    "Ottawa,Canada,812129",
    "Nay Pyi Taw,Myanmar [Burma],925000",
    "Guatemala City,Guatemala,994938",
    "Wellington,New Zealand,381900",
    "San Salvador,El Salvador,525990",
    "Nuku'alofa,Tonga,22400",
    "Papeete,French Polynesia,26357",
    "Apia,Samoa,40407",
    "Avarua,Cook Islands,13373",
    "Port of Spain,Trinidad and Tobago,49031",
    "Stanley,Falkland Islands,2213",
    "Nuuk,Greenland,14798",
    "Andorra la Vella,Andorra,20430",
    "Mariehamn,Åland,10682",
    "Vaduz,Liechtenstein,5197",
    "Douglas,Isle of Man,26218",
    "St Peter Port,Guernsey,16488",
    "Dodoma,Tanzania,180541",
    "Port Vila,Vanuatu,35901",
    "Gibraltar,Gibraltar,26544",
    "Banjul,Gambia,34589",
    "Tarawa,Kiribati,40311",
    "Victoria,Seychelles,22881",
    "Tórshavn,Faroe Islands,13200",
    "Monaco,Monaco,32965",
    "Charlotte Amalie,U.S. Virgin Islands,20000",
    "Pago Pago,American Samoa,11500",
    "Basseterre,Saint Kitts and Nevis,12920",
    "Roseau,Dominica,16571",
    "Castries,Saint Lucia,20000",
    "Oranjestad,Aruba,29998",
    "Kingstown,Saint Vincent and the Grenadines,24518",
    "George Town,Cayman Islands,29370",
    "Adamstown,Pitcairn Islands,46",
    "Mata-Utu,Wallis and Futuna,1200",
    "Alofi,Niue,624",
    "Hamilton,Bermuda,902",
    "The Valley,Anguilla,2035",
    "Grytviken,South Georgia and the South Sandwich Islands,2",
    "Kralendijk,Bonaire,3081",
    "Saint-Pierre,Saint Pierre and Miquelon,6200",
    "Saint Helier,Jersey,28000",
    "San Marino,San Marino,4500",
    "Kuwait City,Kuwait,60064",
    "Kingston,Norfolk Island,880",
    "Abuja,Nigeria,590400",
    "Funafuti,Tuvalu,4492",
    "Majuro,Marshall Islands,25400",
    "Flying Fish Cove,Christmas Island,500",
    "Islamabad,Pakistan,601600",
    "New Delhi,India,317797",
    "Longyearbyen,Svalbard and Jan Mayen,2060",
    "Port-aux-Français,French Southern Territories,45",
    "Jamestown,Saint Helena,637",
    "West Island,Cocos [Keeling] Islands,120",
    "Vatican City,Vatican City,829",
    "Yaren District,Nauru,1100",
    "Belmopan,Belize,13381",
    "St John's,Antigua and Barbuda,24226",
    "Cockburn Town,Turks and Caicos Islands,3720",
    "Road Town,British Virgin Islands,8449",
    "Marigot,Saint Martin,5700",
    "Gustavia,Saint Barthélemy,5988",
    "St. George's,Grenada,7500",
    "Saipan,Northern Mariana Islands,48220",
    "Philipsburg,Sint Maarten,1400",
    "Basse-Terre,Guadeloupe,11472",
    "Hagåtña,Guam,1051",
    "Valletta,Malta,6794",
    "Palikir,Micronesia,0",
    "Melekeok,Palau,0",
    "Plymouth,Montserrat,0",
];

window.onload=function() {
    let myTable = "";
    myTable += "<table>";
    myTable += "<tr>";
    myTable += "<th>City</th>";
    myTable += "<th>Country</th>";
    myTable += "<th>Population</th>";
    myTable += "</tr>";
    for(let i = 0; i < PLACES.length; i++){
        let place = PLACES[i];
        let pieces = place.split(",");
        let city = pieces[0];
        let country = pieces[1];
        let pop = Number(pieces[2]);
        myTable += "<tr>";
        myTable += "<td>" + city + "</td>";
        myTable += "<td>" + country + "</td>";
        myTable += "<td>" + pop + "</td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    let theTable = document.querySelector("#myTable"); 
    theTable.innerHTML = myTable;
    document.querySelector("#countrySearch").addEventListener("click", searchCountry);
    document.querySelector("#citySearch").addEventListener("click", searchCity);
    document.querySelector("#popSearch").addEventListener("click", searchPop);
};

function clearResults(matches){
    let csv = "<ul>";
    for(let i = 0; i < matches.length; i++){
        let match = matches[i];
        let cells = match.querySelectorAll("td");
        let city = cells[0].innerHTML;
        let country = cells[1].innerHTML;
        let pop = cells[2].innerHTML;
        csv += "<li>" + city + ", " + country + ", " + pop + "</li>";
    }
    csv += "</ul>";
    document.querySelector("#outputPanel").innerHTML = csv;
}

function clearSelections(){
    let rows = document.querySelectorAll("tr");
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        row.classList.remove("highlight");
    }
}

function searchCity(){
    let inputCity = document.querySelector("#city");
    let cityKey = inputCity.value;
    let tr = document.querySelectorAll("tr");
    let matches = [];
    clearSelections();
    for (let i = 1; i < tr.length; i++) {
        let currRow = tr[i];
        let cells = currRow.querySelectorAll("td");
        let cityToMatch = cells[0].innerHTML;
        if(cityToMatch.toUpperCase().includes(cityKey.toUpperCase())){
            currRow.classList.add("green");
            matches.push(currRow);
        }
    }
    clearResults(matches);
}

function searchCountry(){
    let inputCountry = document.querySelector("#country");
    let countryKey = inputCountry.value;
    let tr = document.querySelectorAll("tr");
    let matches = [];
    clearSelections();
    for (let i = 1; i < tr.length; i++) {
        let currRow = tr[i];
        let cells = currRow.querySelectorAll("td");
        let countryToMatch = cells[1].innerHTML;
        if (countryToMatch.toUpperCase().includes(countryKey.toUpperCase())) {
            currRow.classList.add("green");
            matches.push(currRow);
        }
    } 
    clearResults(matches);
}

function searchPop(){
    let min = Number(document.querySelector("#min").value);
    let max = Number(document.querySelector("#max").value);
    let tr = document.querySelectorAll("tr");
    let matches = [];
    clearSelections();
    for (let i = 1; i < tr.length; i++) {
        let currRow = tr[i];
        let cells = currRow.querySelectorAll("td");
        let popToMatch = Number(cells[2].innerHTML);
        if (popToMatch >= min && popToMatch <= max) {
            currRow.classList.add("green");
            matches.push(currRow);
        }
    } 
    clearResults(matches);
}
