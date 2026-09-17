const NumberCodes = [
    { value: "+93", label: "AFG +93" }, // Afghanistan
    { value: "+355", label: "ALB +355" }, // Albania
    { value: "+213", label: "DZA +213" }, // Algeria
    { value: "+376", label: "AND +376" }, // Andorra
    { value: "+244", label: "AGO +244" }, // Angola
    { value: "+1", label: "ATG +1" }, // Antigua and Barbuda (uses +1 with area codes)
    { value: "+54", label: "ARG +54" }, // Argentina
    { value: "+374", label: "ARM +374" }, // Armenia
    { value: "+61", label: "AUS +61" }, // Australia
    { value: "+43", label: "AUT +43" }, // Austria
    { value: "+994", label: "AZE +994" }, // Azerbaijan
    { value: "+1", label: "BHS +1" }, // Bahamas (uses +1 with area codes)
    { value: "+973", label: "BHR +973" }, // Bahrain
    { value: "+880", label: "BGD +880" }, // Bangladesh
    { value: "+1", label: "BRB +1" }, // Barbados (uses +1 with area codes)
    { value: "+375", label: "BLR +375" }, // Belarus
    { value: "+32", label: "BEL +32" }, // Belgium
    { value: "+501", label: "BLZ +501" }, // Belize
    { value: "+229", label: "BEN +229" }, // Benin
    { value: "+975", label: "BTN +975" }, // Bhutan
    { value: "+591", label: "BOL +591" }, // Bolivia
    { value: "+387", label: "BIH +387" }, // Bosnia and Herzegovina
    { value: "+267", label: "BWA +267" }, // Botswana
    { value: "+55", label: "BRA +55" }, // Brazil
    { value: "+673", label: "BRN +673" }, // Brunei
    { value: "+359", label: "BGR +359" }, // Bulgaria
    { value: "+226", label: "BFA +226" }, // Burkina Faso
    { value: "+257", label: "BDI +257" }, // Burundi
    { value: "+855", label: "KHM +855" }, // Cambodia
    { value: "+237", label: "CMR +237" }, // Cameroon
    { value: "+1", label: "CAN +1" }, // Canada (uses +1 with area codes)
    { value: "+238", label: "CPV +238" }, // Cape Verde
    { value: "+236", label: "CAF +236" }, // Central African Republic
    { value: "+235", label: "TCD +235" }, // Chad
    { value: "+56", label: "CHL +56" }, // Chile
    { value: "+86", label: "CHN +86" }, // China
    { value: "+57", label: "COL +57" }, // Colombia
    { value: "+269", label: "COM +269" }, // Comoros
    { value: "+242", label: "COG +242" }, // Congo (Brazzaville)
    { value: "+243", label: "COD +243" }, // Congo (Kinshasa)
    { value: "+506", label: "CRI +506" }, // Costa Rica
    { value: "+385", label: "HRV +385" }, // Croatia
    { value: "+53", label: "CUB +53" }, // Cuba
    { value: "+357", label: "CYP +357" }, // Cyprus
    { value: "+420", label: "CZE +420" }, // Czech Republic
    { value: "+45", label: "DNK +45" }, // Denmark
    { value: "+253", label: "DJI +253" }, // Djibouti
    { value: "+1", label: "DMA +1" }, // Dominica (uses +1 with area codes)
    { value: "+1", label: "DOM +1" }, // Dominican Republic (uses +1 with area codes)
    { value: "+670", label: "TLS +670" }, // East Timor (Timor-Leste)
    { value: "+593", label: "ECU +593" }, // Ecuador
    { value: "+20", label: "EGY +20" }, // Egypt
    { value: "+503", label: "SLV +503" }, // El Salvador
    { value: "+240", label: "GNQ +240" }, // Equatorial Guinea
    { value: "+291", label: "ERI +291" }, // Eritrea
    { value: "+372", label: "EST +372" }, // Estonia
    { value: "+268", label: "SWZ +268" }, // Eswatini
    { value: "+251", label: "ETH +251" }, // Ethiopia
    { value: "+679", label: "FJI +679" }, // Fiji
    { value: "+358", label: "FIN +358" }, // Finland
    { value: "+33", label: "FRA +33" }, // France
    { value: "+241", label: "GAB +241" }, // Gabon
    { value: "+220", label: "GMB +220" }, // Gambia
    { value: "+995", label: "GEO +995" }, // Georgia
    { value: "+49", label: "DEU +49" }, // Germany
    { value: "+233", label: "GHA +233" }, // Ghana
    { value: "+30", label: "GRC +30" }, // Greece
    { value: "+1", label: "GRD +1" }, // Grenada (uses +1 with area codes)
    { value: "+502", label: "GTM +502" }, // Guatemala
    { value: "+224", label: "GIN +224" }, // Guinea
    { value: "+245", label: "GNB +245" }, // Guinea-Bissau
    { value: "+592", label: "GUY +592" }, // Guyana
    { value: "+509", label: "HTI +509" }, // Haiti
    { value: "+504", label: "HND +504" }, // Honduras
    { value: "+852", label: "HKG +852" }, // Hong Kong
    { value: "+36", label: "HUN +36" }, // Hungary
    { value: "+354", label: "ISL +354" }, // Iceland
    { value: "+91", label: "IND +91" }, // India
    { value: "+62", label: "IDN +62" }, // Indonesia
    { value: "+98", label: "IRN +98" }, // Iran
    { value: "+964", label: "IRQ +964" }, // Iraq
    { value: "+353", label: "IRL +353" }, // Ireland
    { value: "+972", label: "ISR +972" }, // Israel
    { value: "+39", label: "ITA +39" }, // Italy
    { value: "+1", label: "JAM +1" }, // Jamaica (uses +1 with area codes)
    { value: "+81", label: "JPN +81" }, // Japan
    { value: "+962", label: "JOR +962" }, // Jordan
    { value: "+7", label: "KAZ +7" }, // Kazakhstan (shares +7 with Russia)
    { value: "+254", label: "KEN +254" }, // Kenya
    { value: "+686", label: "KIR +686" }, // Kiribati
    { value: "+850", label: "PRK +850" }, // North Korea
    { value: "+82", label: "KOR +82" }, // South Korea
    { value: "+965", label: "KWT +965" }, // Kuwait
    { value: "+996", label: "KGZ +996" }, // Kyrgyzstan
    { value: "+856", label: "LAO +856" }, // Laos
    { value: "+371", label: "LVA +371" }, // Latvia
    { value: "+961", label: "LBN +961" }, // Lebanon
    { value: "+266", label: "LSO +266" }, // Lesotho
    { value: "+231", label: "LBR +231" }, // Liberia
    { value: "+218", label: "LBY +218" }, // Libya
    { value: "+423", label: "LIE +423" }, // Liechtenstein
    { value: "+370", label: "LTU +370" }, // Lithuania
    { value: "+352", label: "LUX +352" }, // Luxembourg
    { value: "+853", label: "MAC +853" }, // Macau
    { value: "+389", label: "MKD +389" }, // North Macedonia
    { value: "+261", label: "MDG +261" }, // Madagascar
    { value: "+265", label: "MWI +265" }, // Malawi
    { value: "+60", label: "MYS +60" }, // Malaysia
    { value: "+960", label: "MDV +960" }, // Maldives
    { value: "+223", label: "MLI +223" }, // Mali
    { value: "+356", label: "MLT +356" }, // Malta
    { value: "+692", label: "MHL +692" }, // Marshall Islands
    { value: "+222", label: "MRT +222" }, // Mauritania
    { value: "+230", label: "MUS +230" }, // Mauritius
    { value: "+52", label: "MEX +52" }, // Mexico
    { value: "+691", label: "FSM +691" }, // Micronesia
    { value: "+373", label: "MDA +373" }, // Moldova
    { value: "+377", label: "MCO +377" }, // Monaco
    { value: "+976", label: "MNG +976" }, // Mongolia
    { value: "+382", label: "MNE +382" }, // Montenegro
    { value: "+212", label: "MAR +212" }, // Morocco
    { value: "+258", label: "MOZ +258" }, // Mozambique
    { value: "+95", label: "MMR +95" }, // Myanmar
    { value: "+264", label: "NAM +264" }, // Namibia
    { value: "+674", label: "NRU +674" }, // Nauru
    { value: "+977", label: "NPL +977" }, // Nepal
    { value: "+31", label: "NLD +31" }, // Netherlands
    { value: "+64", label: "NZL +64" }, // New Zealand
    { value: "+505", label: "NIC +505" }, // Nicaragua
    { value: "+227", label: "NER +227" }, // Niger
    { value: "+234", label: "NGA +234" }, // Nigeria
    { value: "+683", label: "NIU +683" }, // Niue
    { value: "+47", label: "NOR +47" }, // Norway
    { value: "+968", label: "OMN +968" }, // Oman
    { value: "+92", label: "PAK +92" }, // Pakistan
    { value: "+680", label: "PLW +680" }, // Palau
    { value: "+507", label: "PAN +507" }, // Panama
    { value: "+675", label: "PNG +675" }, // Papua New Guinea
    { value: "+595", label: "PRY +595" }, // Paraguay
    { value: "+51", label: "PER +51" }, // Peru
    { value: "+63", label: "PHL +63" }, // Philippines
    { value: "+48", label: "POL +48" }, // Poland
    { value: "+351", label: "PRT +351" }, // Portugal
    { value: "+974", label: "QAT +974" }, // Qatar
    { value: "+40", label: "ROU +40" }, // Romania
    { value: "+7", label: "RUS +7" }, // Russia (shares +7 with Kazakhstan)
    { value: "+250", label: "RWA +250" }, // Rwanda
    { value: "+1", label: "KNA +1" }, // Saint Kitts and Nevis (uses +1 with area codes)
    { value: "+1", label: "LCA +1" }, // Saint Lucia (uses +1 with area codes)
    { value: "+1", label: "VCT +1" }, // Saint Vincent and the Grenadines (uses +1 with area codes)
    { value: "+685", label: "WSM +685" }, // Samoa
    { value: "+378", label: "SMR +378" }, // San Marino
    { value: "+239", label: "STP +239" }, // Sao Tome and Principe
    { value: "+966", label: "SAU +966" }, // Saudi Arabia
    { value: "+221", label: "SEN +221" }, // Senegal
    { value: "+381", label: "SRB +381" }, // Serbia
    { value: "+248", label: "SYC +248" }, // Seychelles
    { value: "+232", label: "SLE +232" }, // Sierra Leone
    { value: "+65", label: "SGP +65" }, // Singapore
    { value: "+421", label: "SVK +421" }, // Slovakia
    { value: "+386", label: "SVN +386" }, // Slovenia
    { value: "+677", label: "SLB +677" }, // Solomon Islands
    { value: "+252", label: "SOM +252" }, // Somalia
    { value: "+27", label: "ZAF +27" }, // South Africa
    { value: "+211", label: "SSD +211" }, // South Sudan
    { value: "+34", label: "ESP +34" }, // Spain
    { value: "+94", label: "LKA +94" }, // Sri Lanka
    { value: "+249", label: "SDN +249" }, // Sudan
    { value: "+597", label: "SUR +597" }, // Suriname
    { value: "+46", label: "SWE +46" }, // Sweden
    { value: "+41", label: "CHE +41" }, // Switzerland
    { value: "+963", label: "SYR +963" }, // Syria
    { value: "+886", label: "TWN +886" }, // Taiwan
    { value: "+992", label: "TJK +992" }, // Tajikistan
    { value: "+255", label: "TZA +255" }, // Tanzania
    { value: "+66", label: "THA +66" }, // Thailand
    { value: "+228", label: "TGO +228" }, // Togo
    { value: "+676", label: "TON +676" }, // Tonga
    { value: "+1", label: "TTO +1" }, // Trinidad and Tobago (uses +1 with area codes)
    { value: "+216", label: "TUN +216" }, // Tunisia
    { value: "+90", label: "TUR +90" }, // Turkey
    { value: "+993", label: "TKM +993" }, // Turkmenistan
    { value: "+688", label: "TUV +688" }, // Tuvalu
    { value: "+256", label: "UGA +256" }, // Uganda
    { value: "+380", label: "UKR +380" }, // Ukraine
    { value: "+971", label: "ARE +971" }, // United Arab Emirates
    { value: "+44", label: "GBR +44" }, // United Kingdom
    { value: "+1", label: "USA +1" }, // United States (uses +1 with area codes)
    { value: "+598", label: "URY +598" }, // Uruguay
    { value: "+998", label: "UZB +998" }, // Uzbekistan
    { value: "+678", label: "VUT +678" }, // Vanuatu
    { value: "+58", label: "VEN +58" }, // Venezuela
    { value: "+84", label: "VNM +84" }, // Vietnam
    { value: "+967", label: "YEM +967" }, // Yemen
    { value: "+260", label: "ZMB +260" }, // Zambia
    { value: "+263", label: "ZWE +263" }, // Zimbabwe
];
export default NumberCodes