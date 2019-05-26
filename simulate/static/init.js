//load the data analysis as soon as the page is run
//function to find the city's tier


let ulbs = { '1001': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'Corporation', 'Name': 'Anatapur', 'Population': 261004.0 }, '1002': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'Selection', 'Name': 'Dharmavaram', 'Population': 126958.0 }, '1003': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'I', 'Name': 'Guntakal', 'Population': 126270.0 }, '1004': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'Special', 'Name': 'Hindupur', 'Population': 151677.0 }, '1005': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'II', 'Name': 'Kadiri', 'Population': 89429.0 }, '1006': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'II', 'Name': 'Rayadurg', 'Population': 61749.0 }, '1007': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'I', 'Name': 'Tadipatri', 'Population': 108171.0 }, '1154': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'NP', 'Name': 'Madakasira', 'Population': 21464.0 }, '1155': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'NP', 'Name': 'Puttaparthy', 'Population': 30782.0 }, '1156': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'III', 'Name': 'Gooty', 'Population': 48838.0 }, '1157': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'NP', 'Name': 'Pamidi', 'Population': 26886.0 }, '1158': { 'Region': 'ANANTAPUR', 'District': 'ANANTAPUR', 'Grade': 'III', 'Name': 'Kalyanadurgam', 'Population': 44959.0 }, '1008': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'Corporation', 'Name': 'Chittor', 'Population': 196601.0 }, '1009': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'I', 'Name': 'Madanapalle', 'Population': 136414.0 }, '1010': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'III', 'Name': 'Punganur', 'Population': 54746.0 }, '1011': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'II', 'Name': 'Srikalahasti', 'Population': 80056.0 }, '1012': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'Corporation', 'Name': 'Tirupati', 'Population': 374260.0 }, '1117': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'III', 'Name': 'Palamaneru', 'Population': 51163.0 }, '1118': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'III', 'Name': 'Nagari', 'Population': 62253.0 }, '1119': { 'Region': 'ANANTAPUR', 'District': 'CHITTOOR', 'Grade': 'III', 'Name': 'Puttur', 'Population': 54092.0 }, '1013': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'Corporation', 'Name': 'Kadapa', 'Population': 343054.0 }, '1014': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'Special', 'Name': 'Proddatur', 'Population': 162717.0 }, '1120': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'NP', 'Name': 'Rajampeta', 'Population': 47220.0 }, '1121': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'III', 'Name': 'Rayachoty', 'Population': 91234.0 }, '1122': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'III', 'Name': 'Pulivendula', 'Population': 65706.0 }, '1123': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'III', 'Name': 'Budwel', 'Population': 70626.0 }, '1124': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'NP', 'Name': 'Jammalamadugu', 'Population': 46069.0 }, '1164': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'III', 'Name': 'Mydukur', 'Population': 45790.0 }, '1165': { 'Region': 'ANANTAPUR', 'District': 'YSR District', 'Grade': 'NP', 'Name': 'Yerraguntla', 'Population': 32574.0 }, '1015': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'Special', 'Name': 'Adoni', 'Population': 166344.0 }, '1016': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'Corporation', 'Name': 'Kurnool', 'Population': 460184.0 }, '1017': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'Special', 'Name': 'Nandyal', 'Population': 200516.0 }, '1018': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'I', 'Name': 'Yemmiganur', 'Population': 95149.0 }, '1125': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'NP', 'Name': 'Dhone', 'Population': 59272.0 }, '1161': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'III', 'Name': 'Nandikotkur', 'Population': 46953.0 }, '1162': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'NP', 'Name': 'Allagadda', 'Population': 42404.0 }, '1163': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'NP', 'Name': 'Gudur', 'Population': 22270.0 }, '1160': { 'Region': 'ANANTAPUR', 'District': 'KURNOOL', 'Grade': 'NP', 'Name': 'Atmakur', 'Population': 45703.0 }, '1019': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'II', 'Name': 'Bapatla', 'Population': 70777.0 }, '1020': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'I', 'Name': 'Chilakaluripeta', 'Population': 101398.0 }, '1022': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'II', 'Name': 'Macherla', 'Population': 57290.0 }, '1023': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'II', 'Name': 'Mangalagiri', 'Population': 73613.0 }, '1024': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'I', 'Name': 'Narsaraopeta', 'Population': 116250.0 }, '1025': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'II', 'Name': 'Ponnur', 'Population': 59913.0 }, '1026': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'II', 'Name': 'Repalle', 'Population': 50866.0 }, '1027': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'II', 'Name': 'Sattenapalle', 'Population': 56721.0 }, '1028': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'Special', 'Name': 'Tenali', 'Population': 164937.0 }, '1131': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'III', 'Name': 'Vinukonda', 'Population': 59725.0 }, '1132': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'II', 'Name': 'Piduguralla', 'Population': 63103.0 }, '1143': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'III', 'Name': 'Tadepalli', 'Population': 54406.0 }, '1021': { 'Region': 'GUNTUR', 'District': 'GUNTUR', 'Grade': 'Corporation', 'Name': 'Guntur', 'Population': 743880.0 }, '1029': { 'Region': 'GUNTUR', 'District': 'NELLORE', 'Grade': 'II', 'Name': 'Gudur', 'Population': 60625.0 }, '1030': { 'Region': 'GUNTUR', 'District': 'NELLORE', 'Grade': 'II', 'Name': 'Kavali', 'Population': 97053.0 }, '1031': { 'Region': 'GUNTUR', 'District': 'NELLORE', 'Grade': 'Corporation', 'Name': 'Nellore', 'Population': 594783.0 }, '1127': { 'Region': 'GUNTUR', 'District': 'NELLORE', 'Grade': 'III', 'Name': 'Venkatagiri', 'Population': 51708.0 }, '1151': { 'Region': 'GUNTUR', 'District': 'NELLORE', 'Grade': 'III', 'Name': 'Atmakur', 'Population': 30556.0 }, '1152': { 'Region': 'GUNTUR', 'District': 'NELLORE', 'Grade': 'III', 'Name': 'Sullurpeta', 'Population': 27504.0 }, '1153': { 'Region': 'GUNTUR', 'District': 'NELLORE', 'Grade': 'NP', 'Name': 'Naidupet', 'Population': 47200.0 }, '1032': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'I', 'Name': 'Chirala', 'Population': 87200.0 }, '1033': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'II', 'Name': 'Kandukur', 'Population': 57246.0 }, '1034': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'II', 'Name': 'Markapur', 'Population': 71092.0 }, '1035': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'Corporation', 'Name': 'Ongole', 'Population': 251175.0 }, '1148': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'NP', 'Name': 'Giddalur', 'Population': 35150.0 }, '1147': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'NP', 'Name': 'Addanki', 'Population': 40353.0 }, '1150': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'NP', 'Name': 'Kanigiri', 'Population': 44755.0 }, '1149': { 'Region': 'GUNTUR', 'District': 'PRAKASHAM', 'Grade': 'NP', 'Name': 'Chemakurthy', 'Population': 30279.0 }, '1059': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'I', 'Name': 'Amalapuram', 'Population': 53231.0 }, '1060': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'Corporation', 'Name': 'Kakinada', 'Population': 335000.0 }, '1061': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'II', 'Name': 'Mandapet', 'Population': 53633.0 }, '1062': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'II', 'Name': 'Peddapuram', 'Population': 49477.0 }, '1063': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'II', 'Name': 'Pithapuram', 'Population': 52360.0 }, '1064': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'Corporation', 'Name': 'Rajahmundry', 'Population': 341831.0 }, '1065': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'II', 'Name': 'Ramachandrapuram', 'Population': 43657.0 }, '1066': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'II', 'Name': 'Samarlakot', 'Population': 56864.0 }, '1067': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'II', 'Name': 'Tuni', 'Population': 53425.0 }, '1140': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'NP', 'Name': 'Yeleswaram', 'Population': 32084.0 }, '1139': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'NP', 'Name': 'Mummidivaram', 'Population': 25355.0 }, '1138': { 'Region': 'RAJAHMUNDRY', 'District': 'EAST GODAVARI', 'Grade': 'NP', 'Name': 'Gollaprolu', 'Population': 23882.0 }, '1068': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'Special', 'Name': 'Gudivada', 'Population': 118167.0 }, '1069': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'II', 'Name': 'Jaggaiahpeta', 'Population': 53530.0 }, '1070': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'Special', 'Name': 'Machilipatnam', 'Population': 169892.0 }, '1071': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'II', 'Name': 'Nuzividu', 'Population': 58590.0 }, '1072': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'III', 'Name': 'Pedana', 'Population': 30721.0 }, '1146': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'NP', 'Name': 'Tiruvuru', 'Population': 34623.0 }, '1144': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'NP', 'Name': 'Vuyyuru', 'Population': 46490.0 }, '1145': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'NP', 'Name': 'Nandigama', 'Population': 44359.0 }, '1073': { 'Region': 'RAJAHMUNDRY', 'District': 'KRISHNA', 'Grade': 'Corporation', 'Name': 'Vijayawada', 'Population': 1034358.0 }, '1074': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'Selection', 'Name': 'Bhimavaram', 'Population': 142184.0 }, '1075': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'Corporation', 'Name': 'Eluru', 'Population': 203780.0 }, '1076': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'III', 'Name': 'Kovvur', 'Population': 39667.0 }, '1077': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'I', 'Name': 'Narsapur', 'Population': 58770.0 }, '1078': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'II', 'Name': 'Nidadhavole', 'Population': 43809.0 }, '1079': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'I', 'Name': 'Palakollu', 'Population': 61284.0 }, '1080': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'Selection', 'Name': 'Tadepalligudem', 'Population': 103906.0 }, '1081': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'I', 'Name': 'Tanuku', 'Population': 90430.0 }, '1142': { 'Region': 'RAJAHMUNDRY', 'District': 'WEST GODAVARI', 'Grade': 'NP', 'Name': 'Jangareddygudem', 'Population': 48994.0 }, '1082': { 'Region': 'VISAKHAPATNAM', 'District': 'SRIKAKULAM', 'Grade': 'III', 'Name': 'Amudalavalasa', 'Population': 39799.0 }, '1083': { 'Region': 'VISAKHAPATNAM', 'District': 'SRIKAKULAM', 'Grade': 'III', 'Name': 'Ichapuram', 'Population': 36493.0 }, '1084': { 'Region': 'VISAKHAPATNAM', 'District': 'SRIKAKULAM', 'Grade': 'III', 'Name': 'Palasa-Kasibugga', 'Population': 57507.0 }, '1085': { 'Region': 'VISAKHAPATNAM', 'District': 'SRIKAKULAM', 'Grade': 'I', 'Name': 'Srikakulam', 'Population': 133911.0 }, '1133': { 'Region': 'VISAKHAPATNAM', 'District': 'SRIKAKULAM', 'Grade': 'NP', 'Name': 'Rajam', 'Population': 42197.0 }, '1134': { 'Region': 'VISAKHAPATNAM', 'District': 'SRIKAKULAM', 'Grade': 'NP', 'Name': 'Palakonda', 'Population': 31572.0 }, '1136': { 'Region': 'VISAKHAPATNAM', 'District': 'VISAKHAPATNAM', 'Grade': 'III', 'Name': 'Narasipatnam', 'Population': 61540.0 }, '1137': { 'Region': 'VISAKHAPATNAM', 'District': 'VISAKHAPATNAM', 'Grade': 'III', 'Name': 'Yellamanchali', 'Population': 46159.0 }, '1086': { 'Region': 'VISAKHAPATNAM', 'District': 'VISAKHAPATNAM', 'Grade': 'Corporation', 'Name': 'Visakhapatnam', 'Population': 1878980.0 }, '1090': { 'Region': 'VISAKHAPATNAM', 'District': 'VIZIANAGARAM', 'Grade': 'II', 'Name': 'Bobbili', 'Population': 56819.0 }, '1091': { 'Region': 'VISAKHAPATNAM', 'District': 'VIZIANAGARAM', 'Grade': 'I', 'Name': 'Parvathipuram', 'Population': 53844.0 }, '1092': { 'Region': 'VISAKHAPATNAM', 'District': 'VIZIANAGARAM', 'Grade': 'II', 'Name': 'Saluru', 'Population': 49500.0 }, '1093': { 'Region': 'VISAKHAPATNAM', 'District': 'VIZIANAGARAM', 'Grade': 'Selection', 'Name': 'Vijayanagaram', 'Population': 244598.0 }, '1135': { 'Region': 'VISAKHAPATNAM', 'District': 'VIZIANAGARAM', 'Grade': 'NP', 'Name': 'Nellimarla', 'Population': 26259.0 } };

let gei_info = { '1001': { 'PGR': { 'Timeliness': 0.578437702, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.127616475, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.51887336, 'Accuracy': 0.5 }, 'Timeliness': 0.408309179, 'Accuracy': 0.5 }, '1002': { 'PGR': { 'Timeliness': 0.699257426, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.15502008, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.702428863, 'Accuracy': 0.5 }, 'Timeliness': 0.518902123, 'Accuracy': 0.5 }, '1003': { 'PGR': { 'Timeliness': 0.601984564, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.248577929, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.650450336, 'Accuracy': 0.5 }, 'Timeliness': 0.50033761, 'Accuracy': 0.5 }, '1004': { 'PGR': { 'Timeliness': 0.651113468, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.237247353, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.77730328, 'Accuracy': 0.5 }, 'Timeliness': 0.555221367, 'Accuracy': 0.5 }, '1005': { 'PGR': { 'Timeliness': 0.668122271, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.198847262, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.834434753, 'Accuracy': 0.5 }, 'Timeliness': 0.567134762, 'Accuracy': 0.5 }, '1006': { 'PGR': { 'Timeliness': 0.675159236, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.353859497, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.772025351, 'Accuracy': 0.5 }, 'Timeliness': 0.600348028, 'Accuracy': 0.5 }, '1007': { 'PGR': { 'Timeliness': 0.943062827, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.178104575, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.899813072, 'Accuracy': 0.5 }, 'Timeliness': 0.673660158, 'Accuracy': 0.5 }, '1008': { 'PGR': { 'Timeliness': 0.820657277, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.230207065, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.932875494, 'Accuracy': 0.5 }, 'Timeliness': 0.661246612, 'Accuracy': 0.5 }, '1009': { 'PGR': { 'Timeliness': 0.559164733, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.265625, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.611925243, 'Accuracy': 0.5 }, 'Timeliness': 0.478904992, 'Accuracy': 0.5 }, '1010': { 'PGR': { 'Timeliness': 0.79338843, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.244505495, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.554883161, 'Accuracy': 0.5 }, 'Timeliness': 0.530925695, 'Accuracy': 0.5 }, '1011': { 'PGR': { 'Timeliness': 0.628450106, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.095310136, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.521584773, 'Accuracy': 0.5 }, 'Timeliness': 0.415115005, 'Accuracy': 0.5 }, '1012': { 'PGR': { 'Timeliness': 0.766779203, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.194895592, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.606377055, 'Accuracy': 0.5 }, 'Timeliness': 0.52268395, 'Accuracy': 0.5 }, '1013': { 'PGR': { 'Timeliness': 0.511529238, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.257032543, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.607403618, 'Accuracy': 0.5 }, 'Timeliness': 0.458655133, 'Accuracy': 0.5 }, '1014': { 'PGR': { 'Timeliness': 0.611814346, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.136, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.328279639, 'Accuracy': 0.5 }, 'Timeliness': 0.358697995, 'Accuracy': 0.5 }, '1015': { 'PGR': { 'Timeliness': 0.524747206, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.233388704, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.699431274, 'Accuracy': 0.5 }, 'Timeliness': 0.485855728, 'Accuracy': 0.5 }, '1016': { 'PGR': { 'Timeliness': 0.65787234, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.118220597, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.65808249, 'Accuracy': 0.5 }, 'Timeliness': 0.478058476, 'Accuracy': 0.5 }, '1017': { 'PGR': { 'Timeliness': 0.561685055, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.198918019, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.493686519, 'Accuracy': 0.5 }, 'Timeliness': 0.418096531, 'Accuracy': 0.5 }, '1018': { 'PGR': { 'Timeliness': 0.744748568, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.235335196, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.747326635, 'Accuracy': 0.5 }, 'Timeliness': 0.575803466, 'Accuracy': 0.5 }, '1019': { 'PGR': { 'Timeliness': 0.720661157, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.213980029, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.397275351, 'Accuracy': 0.5 }, 'Timeliness': 0.443972179, 'Accuracy': 0.5 }, '1020': { 'PGR': { 'Timeliness': 0.747160494, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.265381764, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.881453991, 'Accuracy': 0.5 }, 'Timeliness': 0.631332083, 'Accuracy': 0.5 }, '1021': { 'PGR': { 'Timeliness': 0.628318926, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.143841167, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.447401347, 'Accuracy': 0.5 }, 'Timeliness': 0.40652048, 'Accuracy': 0.5 }, '1022': { 'PGR': { 'Timeliness': 0.69058296, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.22992126, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.821349358, 'Accuracy': 0.5 }, 'Timeliness': 0.580617859, 'Accuracy': 0.5 }, '1023': { 'PGR': { 'Timeliness': 0.705414013, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.079854809, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.264539607, 'Accuracy': 0.5 }, 'Timeliness': 0.349936143, 'Accuracy': 0.5 }, '1024': { 'PGR': { 'Timeliness': 0.716525935, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.299280576, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.712903332, 'Accuracy': 0.5 }, 'Timeliness': 0.576236614, 'Accuracy': 0.5 }, '1025': { 'PGR': { 'Timeliness': 0.698630137, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.316005472, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.610364392, 'Accuracy': 0.5 }, 'Timeliness': 0.541666667, 'Accuracy': 0.5 }, '1026': { 'PGR': { 'Timeliness': 0.714427861, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.115085537, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.623824597, 'Accuracy': 0.5 }, 'Timeliness': 0.484445998, 'Accuracy': 0.5 }, '1027': { 'PGR': { 'Timeliness': 0.675, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.11238825, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.48152319, 'Accuracy': 0.5 }, 'Timeliness': 0.42297048, 'Accuracy': 0.5 }, '1028': { 'PGR': { 'Timeliness': 0.441621622, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.131596984, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.519784051, 'Accuracy': 0.5 }, 'Timeliness': 0.364334219, 'Accuracy': 0.5 }, '1029': { 'PGR': { 'Timeliness': 0.540983607, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.144288577, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.746660588, 'Accuracy': 0.5 }, 'Timeliness': 0.477310924, 'Accuracy': 0.5 }, '1030': { 'PGR': { 'Timeliness': 0.605620155, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.361378205, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.56292442, 'Accuracy': 0.5 }, 'Timeliness': 0.50997426, 'Accuracy': 0.5 }, '1031': { 'PGR': { 'Timeliness': 0.617487121, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.112230619, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.413435501, 'Accuracy': 0.5 }, 'Timeliness': 0.38105108, 'Accuracy': 0.5 }, '1032': { 'PGR': { 'Timeliness': 0.747464503, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.274418605, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.721646305, 'Accuracy': 0.5 }, 'Timeliness': 0.581176471, 'Accuracy': 0.5 }, '1033': { 'PGR': { 'Timeliness': 0.710420842, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.180614088, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.741309986, 'Accuracy': 0.5 }, 'Timeliness': 0.544114972, 'Accuracy': 0.5 }, '1034': { 'PGR': { 'Timeliness': 0.717665615, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.288235294, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.758864532, 'Accuracy': 0.5 }, 'Timeliness': 0.588255147, 'Accuracy': 0.5 }, '1035': { 'PGR': { 'Timeliness': 0.836842448, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.220268725, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.880226397, 'Accuracy': 0.5 }, 'Timeliness': 0.64577919, 'Accuracy': 0.5 }, '1059': { 'PGR': { 'Timeliness': 0.697196262, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.236749117, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.421940955, 'Accuracy': 0.5 }, 'Timeliness': 0.451962111, 'Accuracy': 0.5 }, '1060': { 'PGR': { 'Timeliness': 0.759869919, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.147675963, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.730206291, 'Accuracy': 0.5 }, 'Timeliness': 0.545917391, 'Accuracy': 0.5 }, '1061': { 'PGR': { 'Timeliness': 0.753466872, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.282786885, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.512818755, 'Accuracy': 0.5 }, 'Timeliness': 0.516357504, 'Accuracy': 0.5 }, '1062': { 'PGR': { 'Timeliness': 0.713884993, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.256902761, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.56380344, 'Accuracy': 0.5 }, 'Timeliness': 0.511530398, 'Accuracy': 0.5 }, '1063': { 'PGR': { 'Timeliness': 0.537984496, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.174807198, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.451699169, 'Accuracy': 0.5 }, 'Timeliness': 0.388163621, 'Accuracy': 0.5 }, '1064': { 'PGR': { 'Timeliness': 0.759358289, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.055515674, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': -0.08074845, 'Accuracy': 0.5 }, 'Timeliness': 0.244708504, 'Accuracy': 0.5 }, '1065': { 'PGR': { 'Timeliness': 0.676571429, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.203266788, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.588693254, 'Accuracy': 0.5 }, 'Timeliness': 0.48951049, 'Accuracy': 0.5 }, '1066': { 'PGR': { 'Timeliness': 0.646090535, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.073696145, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.053262965, 'Accuracy': 0.5 }, 'Timeliness': 0.257683215, 'Accuracy': 0.5 }, '1067': { 'PGR': { 'Timeliness': 0.723255814, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.266019417, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.493059638, 'Accuracy': 0.5 }, 'Timeliness': 0.494111623, 'Accuracy': 0.5 }, '1068': { 'PGR': { 'Timeliness': 0.696891192, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.304878049, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.566003025, 'Accuracy': 0.5 }, 'Timeliness': 0.522590755, 'Accuracy': 0.5 }, '1069': { 'PGR': { 'Timeliness': 0.589506173, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.151190476, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.730193136, 'Accuracy': 0.5 }, 'Timeliness': 0.490296595, 'Accuracy': 0.5 }, '1070': { 'PGR': { 'Timeliness': 0.692949204, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.305590062, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.596125935, 'Accuracy': 0.5 }, 'Timeliness': 0.531555067, 'Accuracy': 0.5 }, '1071': { 'PGR': { 'Timeliness': 0.684955752, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.21486854, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.650817165, 'Accuracy': 0.5 }, 'Timeliness': 0.516880486, 'Accuracy': 0.5 }, '1072': { 'PGR': { 'Timeliness': 0.535885167, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.334951456, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.413151292, 'Accuracy': 0.5 }, 'Timeliness': 0.427995972, 'Accuracy': 0.5 }, '1073': { 'PGR': { 'Timeliness': 0.733744336, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.187246141, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.724224349, 'Accuracy': 0.5 }, 'Timeliness': 0.548404942, 'Accuracy': 0.5 }, '1074': { 'PGR': { 'Timeliness': 0.672391017, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.228275862, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.616488231, 'Accuracy': 0.5 }, 'Timeliness': 0.50571837, 'Accuracy': 0.5 }, '1075': { 'PGR': { 'Timeliness': 0.731086142, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.235964912, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.750781903, 'Accuracy': 0.5 }, 'Timeliness': 0.572610986, 'Accuracy': 0.5 }, '1076': { 'PGR': { 'Timeliness': 0.769138756, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.289295393, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.548763012, 'Accuracy': 0.5 }, 'Timeliness': 0.535732387, 'Accuracy': 0.5 }, '1077': { 'PGR': { 'Timeliness': 0.649141631, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.196638655, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.367259694, 'Accuracy': 0.5 }, 'Timeliness': 0.40434666, 'Accuracy': 0.5 }, '1078': { 'PGR': { 'Timeliness': 0.65, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.221902017, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.316084636, 'Accuracy': 0.5 }, 'Timeliness': 0.395995551, 'Accuracy': 0.5 }, '1079': { 'PGR': { 'Timeliness': 0.625625626, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.2230869, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.533532521, 'Accuracy': 0.5 }, 'Timeliness': 0.460748349, 'Accuracy': 0.5 }, '1080': { 'PGR': { 'Timeliness': 0.630011455, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.243996158, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.359666938, 'Accuracy': 0.5 }, 'Timeliness': 0.41122485, 'Accuracy': 0.5 }, '1081': { 'PGR': { 'Timeliness': 0.697063369, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.17429406, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.873135961, 'Accuracy': 0.5 }, 'Timeliness': 0.581497797, 'Accuracy': 0.5 }, '1082': { 'PGR': { 'Timeliness': 0.678977273, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.243553009, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.774302299, 'Accuracy': 0.5 }, 'Timeliness': 0.56561086, 'Accuracy': 0.5 }, '1083': { 'PGR': { 'Timeliness': 0.64516129, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.032808399, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.045861047, 'Accuracy': 0.5 }, 'Timeliness': 0.241276912, 'Accuracy': 0.5 }, '1084': { 'PGR': { 'Timeliness': 0.461414791, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.216589862, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.41304798, 'Accuracy': 0.5 }, 'Timeliness': 0.363684211, 'Accuracy': 0.5 }, '1085': { 'PGR': { 'Timeliness': 0.552327557, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.158055744, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.583109488, 'Accuracy': 0.5 }, 'Timeliness': 0.431164263, 'Accuracy': 0.5 }, '1086': { 'PGR': { 'Timeliness': 0.644455905, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.149385384, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': -0.191879577, 'Accuracy': 0.5 }, 'Timeliness': 0.200653904, 'Accuracy': 0.5 }, '1087': { 'PGR': { 'Timeliness': 0.656069364, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.162743091, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.46185402, 'Accuracy': 0.5 }, 'Timeliness': 0.426888825, 'Accuracy': 0.5 }, '1089': { 'PGR': { 'Timeliness': 0.792, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.183615819, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 1.02968922, 'Accuracy': 0.5 }, 'Timeliness': 0.668435013, 'Accuracy': 0.5 }, '1090': { 'PGR': { 'Timeliness': 0.638686131, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.064516129, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.416535812, 'Accuracy': 0.5 }, 'Timeliness': 0.373246024, 'Accuracy': 0.5 }, '1091': { 'PGR': { 'Timeliness': 0.80152027, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.164904863, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.920732763, 'Accuracy': 0.5 }, 'Timeliness': 0.629052632, 'Accuracy': 0.5 }, '1092': { 'PGR': { 'Timeliness': 0.693491124, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.103864734, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.955052072, 'Accuracy': 0.5 }, 'Timeliness': 0.584135977, 'Accuracy': 0.5 }, '1093': { 'PGR': { 'Timeliness': 0.685113016, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.232005758, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.359890733, 'Accuracy': 0.5 }, 'Timeliness': 0.425669836, 'Accuracy': 0.5 }, '1117': { 'PGR': { 'Timeliness': 0.609120521, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.275121951, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.772767958, 'Accuracy': 0.5 }, 'Timeliness': 0.55233681, 'Accuracy': 0.5 }, '1118': { 'PGR': { 'Timeliness': 0.637826962, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.173754557, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.809982964, 'Accuracy': 0.5 }, 'Timeliness': 0.540521494, 'Accuracy': 0.5 }, '1119': { 'PGR': { 'Timeliness': 0.680076628, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.209919262, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.522253816, 'Accuracy': 0.5 }, 'Timeliness': 0.470749902, 'Accuracy': 0.5 }, '1120': { 'PGR': { 'Timeliness': 0.701966717, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.235981308, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.514535352, 'Accuracy': 0.5 }, 'Timeliness': 0.484161126, 'Accuracy': 0.5 }, '1121': { 'PGR': { 'Timeliness': 0.43876567, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.219123506, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.865513827, 'Accuracy': 0.5 }, 'Timeliness': 0.507801001, 'Accuracy': 0.5 }, '1122': { 'PGR': { 'Timeliness': 0.579143389, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.116868164, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.502208031, 'Accuracy': 0.5 }, 'Timeliness': 0.399406528, 'Accuracy': 0.5 }, '1123': { 'PGR': { 'Timeliness': 0.541, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.252496434, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.665945762, 'Accuracy': 0.5 }, 'Timeliness': 0.486480732, 'Accuracy': 0.5 }, '1124': { 'PGR': { 'Timeliness': 0.654292343, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.136103152, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.746832456, 'Accuracy': 0.5 }, 'Timeliness': 0.512409317, 'Accuracy': 0.5 }, '1125': { 'PGR': { 'Timeliness': 0.577702703, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.250712251, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.513145846, 'Accuracy': 0.5 }, 'Timeliness': 0.447186933, 'Accuracy': 0.5 }, '1127': { 'PGR': { 'Timeliness': 0.675562969, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.132352941, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.60485147, 'Accuracy': 0.5 }, 'Timeliness': 0.47092246, 'Accuracy': 0.5 }, '1131': { 'PGR': { 'Timeliness': 0.637096774, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.168571429, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 1.054947319, 'Accuracy': 0.5 }, 'Timeliness': 0.620205174, 'Accuracy': 0.5 }, '1132': { 'PGR': { 'Timeliness': 0.692429022, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.25631068, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.682226537, 'Accuracy': 0.5 }, 'Timeliness': 0.543655413, 'Accuracy': 0.5 }, '1133': { 'PGR': { 'Timeliness': 0.813602015, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.06684492, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 1.06373713, 'Accuracy': 0.5 }, 'Timeliness': 0.648061355, 'Accuracy': 0.5 }, '1134': { 'PGR': { 'Timeliness': 0.739599384, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.105263158, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.76629101, 'Accuracy': 0.5 }, 'Timeliness': 0.537051184, 'Accuracy': 0.5 }, '1135': { 'PGR': { 'Timeliness': 0.668463612, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.25739645, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.889929412, 'Accuracy': 0.5 }, 'Timeliness': 0.605263158, 'Accuracy': 0.5 }, '1136': { 'PGR': { 'Timeliness': 0.846487424, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.212962963, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.700862559, 'Accuracy': 0.5 }, 'Timeliness': 0.586770982, 'Accuracy': 0.5 }, '1137': { 'PGR': { 'Timeliness': 0.685687558, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.157584683, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.712334801, 'Accuracy': 0.5 }, 'Timeliness': 0.518535681, 'Accuracy': 0.5 }, '1138': { 'PGR': { 'Timeliness': 0.5, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.315508021, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.893265522, 'Accuracy': 0.5 }, 'Timeliness': 0.569591181, 'Accuracy': 0.5 }, '1139': { 'PGR': { 'Timeliness': 0.659898477, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.108108108, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.502643679, 'Accuracy': 0.5 }, 'Timeliness': 0.423550088, 'Accuracy': 0.5 }, '1140': { 'PGR': { 'Timeliness': 0.516339869, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.213649852, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.268182126, 'Accuracy': 0.5 }, 'Timeliness': 0.332723949, 'Accuracy': 0.5 }, '1142': { 'PGR': { 'Timeliness': 0.59741784, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.206424936, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.44582285, 'Accuracy': 0.5 }, 'Timeliness': 0.416555209, 'Accuracy': 0.5 }, '1143': { 'PGR': { 'Timeliness': 0.728183119, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.152753108, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.354612906, 'Accuracy': 0.5 }, 'Timeliness': 0.411849711, 'Accuracy': 0.5 }, '1144': { 'PGR': { 'Timeliness': 0.687757909, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.165938865, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.878453453, 'Accuracy': 0.5 }, 'Timeliness': 0.577383409, 'Accuracy': 0.5 }, '1145': { 'PGR': { 'Timeliness': 0.71977507, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.270243902, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.752025521, 'Accuracy': 0.5 }, 'Timeliness': 0.580681498, 'Accuracy': 0.5 }, '1146': { 'PGR': { 'Timeliness': 0.761609907, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.30044843, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.612585906, 'Accuracy': 0.5 }, 'Timeliness': 0.558214748, 'Accuracy': 0.5 }, '1147': { 'PGR': { 'Timeliness': 0.607238606, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.122238586, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.547882134, 'Accuracy': 0.5 }, 'Timeliness': 0.425786442, 'Accuracy': 0.5 }, '1148': { 'PGR': { 'Timeliness': 0.677796327, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.210732984, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.485920028, 'Accuracy': 0.5 }, 'Timeliness': 0.45814978, 'Accuracy': 0.5 }, '1149': { 'PGR': { 'Timeliness': 0.735, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.198347107, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.677205656, 'Accuracy': 0.5 }, 'Timeliness': 0.536850921, 'Accuracy': 0.5 }, '1150': { 'PGR': { 'Timeliness': 0.558375635, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.182692308, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.647607155, 'Accuracy': 0.5 }, 'Timeliness': 0.462891699, 'Accuracy': 0.5 }, '1151': { 'PGR': { 'Timeliness': 0.628841608, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.231034483, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.66350921, 'Accuracy': 0.5 }, 'Timeliness': 0.5077951, 'Accuracy': 0.5 }, '1152': { 'PGR': { 'Timeliness': 0.552447552, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.224444444, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.181441335, 'Accuracy': 0.5 }, 'Timeliness': 0.319444444, 'Accuracy': 0.5 }, '1153': { 'PGR': { 'Timeliness': 0.768072289, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.180952381, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.623997643, 'Accuracy': 0.5 }, 'Timeliness': 0.524340771, 'Accuracy': 0.5 }, '1154': { 'PGR': { 'Timeliness': 0.779069767, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.241706161, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.540152505, 'Accuracy': 0.5 }, 'Timeliness': 0.520309478, 'Accuracy': 0.5 }, '1155': { 'PGR': { 'Timeliness': 0.528089888, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.215361446, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.370595955, 'Accuracy': 0.5 }, 'Timeliness': 0.371349096, 'Accuracy': 0.5 }, '1156': { 'PGR': { 'Timeliness': 0.760469012, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.249185668, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.739910539, 'Accuracy': 0.5 }, 'Timeliness': 0.583188406, 'Accuracy': 0.5 }, '1157': { 'PGR': { 'Timeliness': 0.588235294, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.168141593, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.649248576, 'Accuracy': 0.5 }, 'Timeliness': 0.468541821, 'Accuracy': 0.5 }, '1158': { 'PGR': { 'Timeliness': 0.668367347, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.161764706, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.521761043, 'Accuracy': 0.5 }, 'Timeliness': 0.450631032, 'Accuracy': 0.5 }, '1160': { 'PGR': { 'Timeliness': 0.585735964, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.201017812, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 1.015696454, 'Accuracy': 0.5 }, 'Timeliness': 0.600816743, 'Accuracy': 0.5 }, '1161': { 'PGR': { 'Timeliness': 0.606129398, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.153164557, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.903853602, 'Accuracy': 0.5 }, 'Timeliness': 0.554382519, 'Accuracy': 0.5 }, '1162': { 'PGR': { 'Timeliness': 0.602635229, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.146496815, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.656426663, 'Accuracy': 0.5 }, 'Timeliness': 0.468519569, 'Accuracy': 0.5 }, '1163': { 'PGR': { 'Timeliness': 0.646258503, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.255605381, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.728933889, 'Accuracy': 0.5 }, 'Timeliness': 0.543599258, 'Accuracy': 0.5 }, '1164': { 'PGR': { 'Timeliness': 0.603498542, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.236434109, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.646455734, 'Accuracy': 0.5 }, 'Timeliness': 0.495462795, 'Accuracy': 0.5 }, '1165': { 'PGR': { 'Timeliness': 0.653465347, 'Accuracy': 0.5 }, 'Property Tax': { 'Timeliness': 0.23255814, 'Accuracy': 0.5 }, 'Water Tax': { 'Timeliness': 0.492502446, 'Accuracy': 0.5 }, 'Timeliness': 0.459508644, 'Accuracy': 0.5 } };



let services = {
    "PGR": { 'Functionaries': { 'Citizen': 0.555555556, 'Help Desk Officer': 0.666666667, 'GO': 0.444444444, 'First Level Escalation': 0.666666667 }, 'Departments': { 'Engineering': 0.592592593, 'PHS': 0.592592593, 'Town Planning': 0.592592593, 'UPA': 0.592592593, 'Administration': 0.592592593, 'Revenue': 0.592592593 }, 'Right Collection': 0.592592593, 'Right Use': 0.592592593, 'Right Disclosure': 1 },
    "Property Tax": { 'Functionaries': { 'MeeSeva/ CSC/Online': 0.530120482, 'Junior Asst./Senior Asst.': 0.506024096, 'Bill Collector': 0.53012048, 'Revenue Inspector': 0.53012482, 'Revenue Officer': 0.5301205, 'Asst Comm, Zonal Comm, Additional Comm, Deputy Comm, Commissioner': 0.542168675 }, 'Right Collection': 0.52811245, 'Right Disclosure': 0.5, 'Right Use': 0.52811245 },
    "Water Tax": { 'Functionaries': { 'MeeSeva/ CSC/Online': 0.4, 'Junior Asst./Senior Asst.': 0.36, 'Assistant Engineer ': 0.4, 'Deputy Exe Engg, Exe Engg, Supertndt Engg': 0.4, 'Commissioner': 0.4 }, 'Right Collection': 0.392, 'Right Disclosure': 0.5, 'Right Use': 0.392 }
};

const LAKH = 100000;

function findbin(pop) {
	if (0.25*LAKH <= pop && pop <= 0.5*LAKH){
        return 1;
	}
    else if (0.5*LAKH < pop && pop <= 0.75*LAKH) {
        return 2;
    }
    else if (0.75*LAKH < pop && pop <= LAKH) {
        return 3;
    }
    else if (LAKH < pop && pop<= 2*LAKH) {
        return 4;
    }
    else{
        return 5;
    }
}

class ULB {
    //random generation of ULB to facilitate simulation
    constructor(name, data, gei_info) {
        // this will be taking the ulb_info[code] and the gei_info[code]
        this.name = name;
        this.region = data.Region;
        this.district = data.District;
        this.grade = data.Grade;
        this.population = data.Population;
        this.bin = findbin(this.population);
        this.time = gei_info.Timeliness;
        this.acc = gei_info.Accuracy;
        this.services = [];
        for (let key in services) {
            //create the services in the tier
            this.services.push(new Service(key, services[key], gei_info[key]));
        }
        this.calc_average();
    }

    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (let f of this.services) {
            time += f.time;
            acc += f.acc;
            use += f.use;
            coll += f.coll;
            disc += f.disc;
        }
        let total = this.services.length;
        this.time = time / total;
        this.acc = acc / total;
        this.use = use / total;
        this.coll = coll / total;
        this.disc = disc / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }


}

let grades = {
    'Corporation': [0.17396997780769233, 0.041925016480769225, 0.13456268803846155, 0.11681922744230769],
    'Special': [0.14931507475, 0.05527211325, 0.14216477582142859, 0.11558398792857141],
    'II': [0.16751460301, 0.049599001860000005, 0.14550927477, 0.12087429321000003],
    'I': [0.17467281421153846, 0.05616255738461539, 0.17163904415384618, 0.13415813857692307],
    'III': [0.16046380630434784, 0.05097000629347827, 0.15188284420652176, 0.12110555226086958],
    'NP': [0.16328398695000002, 0.04988474067, 0.16283619367, 0.12533497377],
    'Selection': [0.16792330712499998, 0.053706116125, 0.1274046728125, 0.1163446986875]
};

let indices = {
    "PGR": 0,
    "Property Tax" : 1,
    "Water Tax": 2
};

let bins = {1: [0.6581644103055556, 0.19514165166666667, 0.6161971922500001, 0.4898344180833334], 2: [0.6663472859411763, 0.19842400691176473, 0.5859213480588236, 0.48356421358823526], 3: [0.6471763774285714, 0.2226724242857143, 0.7323666677142857, 0.5340718231428571], 4: [0.6601050201875001, 0.22632661906249998, 0.652377637, 0.5129364253750001], 5: [0.6704651711764706, 0.18786100776470588, 0.5341360854117648, 0.4641540881764706]};

let ulb_bins = {1: ['1155', '1156', '1157', '1158', '1120', '1124', '1164', '1165', '1161', '1162', '1160', '1151', '1152', '1153', '1148', '1147', '1150', '1149', '1062', '1065', '1140', '1139', '1072', '1146', '1144', '1145', '1076', '1078', '1142', '1082', '1083', '1133', '1134', '1137', '1092', '1135'], 2: ['1006', '1010', '1117', '1118', '1119', '1122', '1123', '1125', '1019', '1022', '1023', '1025', '1026', '1027', '1131', '1132', '1143', '1029', '1127', '1033', '1034', '1059', '1061', '1063', '1066', '1067', '1069', '1071', '1077', '1079', '1084', '1136', '1090', '1091'], 3: ['1005', '1011', '1121', '1018', '1030', '1032', '1081'], 4: ['1002', '1003', '1004', '1007', '1008', '1009', '1014', '1015', '1020', '1024', '1028', '1068', '1070', '1074', '1080', '1085'], 5: ['1001', '1154', '1012', '1013', '1016', '1017', '1163', '1021', '1031', '1035', '1060', '1064', '1138', '1073', '1075', '1086', '1093']};

bin_strings = {
	1: "0.25-0.5 Lakh",
	2: "0.5-0.75 Lakh",
	3: "0.75-1 Lakh",
	4: "1-2 Lakh",
	5: ">2 Lakh"
}

class Grade {
    //made up of services, all of which are the same for each tier
    //changed to make up the average of ULB values from the same one of the 5 population bins
    constructor(name) {
        this.name = bin_strings[name];
        this.time = bins[name][3];
        this.acc = 0.5;
        this.services = [];
        for (let key in services) {
            //create the services in the tier
            let gei = {
                "Timeliness" : bins[name][indices[key]],
                "Accuracy" : 1
            };

            this.services.push(new Service(key, services[key], gei));
        }
        this.calc_average();
    }

    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (let f of this.services) {
            time += f.time;
            acc += f.acc;
            use += f.use;
            coll += f.coll;
            disc += f.disc;
        }
        let total = this.services.length;
        this.time = time / total;
        this.acc = acc / total;
        this.use = use / total;
        this.coll = coll / total;
        this.disc = disc / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }
}

class Func {
    constructor(name, coll, gei) {
        // pass the values in an array
        this.name = name;
        this.time = gei.Timeliness;
        this.acc = gei.Accuracy;
        this.coll = coll;
    }
    
    //this is to carry through changes made at the upper levels
    change(attr, fraction) {
        if (attr === 'time') {
            this.time = this.time * (1+fraction);
        } else {
            if (attr === 'acc') {
                this.acc = this.acc * (1+fraction);
            }
            else {
                this.coll = this.coll * (1+fraction);
            }
        }
    }
    
    //this is for changes made directly from the user interface
    change_time(new_time) {
        this.time = new_time;
    }

    change_acc(new_acc) {
        this.acc = new_acc;
    }

    change_coll(new_coll) {
        this.coll = new_coll;
    }
}


class Service {
    constructor(name, ipi, gei) {
        this.title = name;
        this.time = gei.Timeliness;
        this.acc = gei.Accuracy;
        this.coll = ipi["Right Collection"];
        this.use = ipi["Right Use"];
        this.disc = ipi["Right Disclosure"];
        if (name !== "PGR") {
            this.departments = null;
            this.funcs = [];
            for (let key in ipi.Functionaries) {
                this.funcs.push(new Func(key, ipi.Functionaries[key], gei));
            }
        } else {
            //set up the departments
            this.departments = [];
            for (let key in ipi.Departments) {
                console.log(key);
                this.departments.push(new Department(key, ipi.Departments[key], ipi.Functionaries, gei));
            }
            //after creating all the departments, average the values over all the functionaries in each department
        }
    }


    calc_average() {
        let time = 0;
        let acc = 0;
        let coll = 0;
        let total = 0;
        if (this.departments === null) {
            total = this.funcs.length;
            for (let f of this.funcs) {
                time += f.time;
                acc += f.acc;
                coll += f.coll;
            }
        } else {
            total = this.departments.length;
            for (let f of this.departments) {
                time += f.time;
                acc += f.acc;
                coll += f.coll;
            }
        }

        console.log(time);

        this.time = time / total;
        this.acc = acc / total;
        this.coll = coll / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }

    change_time(new_value) {
        let difference = new_value - this.time;
	    let diff_fraction = difference / this.time;
        this.time = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
		        this.funcs[i].chang("time", diff_fraction);
            }
        } else {
            for (let d of this.departments) {
                d.change("time", diff_fraction);
            }
        }

    }

    change_acc(new_value) {
        let difference = new_value - this.acc;
	    let diff_fraction = difference / this.acc;
        this.acc = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
		    this.funcs[i].change("acc", diff_fraction);
            }
        } else {
            for (let d of this.departments) {
                d.change("acc",diff_fraction);
            }
        }

    }

    change_use(new_value) {
        //may be related to right collection, but for now, we will see
        this.use = new_value;
    }

    change_coll(new_value) {
        let difference = new_value - this.coll;
        let diff_fraction = difference / this.coll;
        this.coll = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].change("coll", diff_fraction); //changes the overall averages accordingly
            }
        } else {
            for (let d of this.departments) {
                d.change("coll", diff_fraction);
            }
        }
    }

    change_disc(new_value) {
        this.disc = new_value;
    }

}

class Department {
    //the department will now have separate complaints
    //only applicable for PGR so far
    constructor(name, coll, funcs, gei) {
        this.name = name;
        this.coll = coll;
        this.time = gei.Timeliness;
        this.acc = gei.Accuracy;
        this.funcs = [];
        for (let key in funcs) {
            this.funcs.push(new Func(key, funcs[key], gei));
        }
    }

    //leads down from services reduction
    change(attr, fraction) {
        if (attr === 'time') {
            this.time = this.time * (1 + fraction);
        } else {
            if (attr === 'acc') {
                this.acc = this.acc * (1 + fraction);
            }
            else {
                this.coll = this.coll * (1 + fraction);
            }
        }
    }

    change_time(new_value) {
        let difference = new_value - this.time; // if positive, an increase and negative a decrease so the best bet is just to add them
        let diff_fraction = difference / this.time;
        this.time = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].change("time", diff_fraction); //changes the overall averages accordingly
        }
    }

    change_acc(new_value) {
        let difference = new_value - this.acc;
        let diff_fraction = difference / this.acc;
        this.acc = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].change("acc", diff_fraction); //changes the overall averages accordingly
        }
    }


    change_coll(new_value) {
        let difference = new_value - this.coll;
        this.coll = new_value;
        let diff_fraction = difference / this.coll;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].change("coll", diff_fraction); //changes the overall averages accordingly
        }
    }


    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (let f of this.funcs) {
            time += f.time;
            acc += f.acc;
            use += f.use;
            coll += f.coll;
            disc += f.disc;
        }
        let total = this.funcs.length;
        this.time = time / total;
        this.acc = acc / total;
        this.use = use / total;
        this.coll = coll / total;
        this.disc = disc / total;
    }

}

//class to represent the PGR complaints
class Complaint {
    constructor () {
        this.service = "PGR";
        this.department = "";
        this.complaint = "";
        this.completion = 0;
        this.details = "";
    }


}


let ulb_grades = {
    'Corporation': ['1001', '1008', '1012', '1013', '1016', '1021', '1031', '1035', '1060', '1064', '1073', '1075', '1086'],
    'Special': ['1004', '1014', '1015', '1017', '1028', '1068', '1070'],
    'II': ['1005', '1006', '1011', '1019', '1022', '1023', '1025', '1026', '1027', '1132', '1029', '1030', '1033', '1034', '1061', '1062', '1063', '1065', '1066', '1067', '1069', '1071', '1078', '1090', '1092'],
    'I': ['1003', '1007', '1009', '1018', '1020', '1024', '1032', '1059', '1077', '1079', '1081', '1085', '1091'],
    'III': ['1156', '1158', '1010', '1117', '1118', '1119', '1121', '1122', '1123', '1164', '1161', '1131', '1143', '1127', '1151', '1152', '1072', '1076', '1082', '1083', '1084', '1136', '1137'],
    'NP': ['1154', '1155', '1157', '1120', '1124', '1165', '1125', '1162', '1163', '1160', '1153', '1148', '1147', '1150', '1149', '1140', '1139', '1138', '1146', '1144', '1145', '1142', '1133', '1134', '1135'],
    'Selection': ['1002', '1074', '1080', '1093']
};

let comparisons = [];

//the following are the timeliness of the separate complaints for PGR
let phs = {'Provision of garbage bin': 0.497737556561086, 'Desilting of Drain': 0.46659122220035426, 'Stray Pigs': 0.4067887931034483, 'Bio Medical waste/Health hazard waste removal': 0.38170055452865065, 'Dog menace': 0.3688835630117835, 'Absenteesim of door to door garbage collector': 0.47543196544276456, 'Over flowing of garbage bins': 0.4191279887482419, 'Removal of garbage': 0.543658782083543, 'Mosquito menace': 0.6806242862580891, 'Absenteesim of sweepers': 0.5391621129326047, 'Unsanitary conditions on the road': 0.3793103448275862, 'Improper Sweeping': 0.5095923261390888, 'Complaints regarding public toilets': 0.4232558139534884, 'Issues relating to Vacant lands': 0.5788934426229508, 'Broken Bin': 0.6247288503253796, 'Stagnation of water': 0.4192655935613682, 'Removal of Debris': 0.6716566866267465, 'Spilling of Garbage from lorry': 0.32142857142857145, 'Disposal of removed silt on the Road': 0.5267471958584987, 'Unauthorised sale of meat and meat product': 0.32, 'Illegal draining of sewage to SWD/Open site': 0.44039735099337746, 'Complaints regarding restaurants / Function halls': 0.4140625, 'Food adulteration: Road Side Eateries': 0.415929203539823, 'Garbage lorry with out Net': 0.6296296296296297, 'Open defecation- free (ODF)': 0.3076923076923077, 'Fevers - Dengue/Malaria/ Gastro-enteritis': 0.5553435114503816, 'Shifting of garbage bin': 0.4148471615720524, 'Complaint Regarding School Toilets': 0.4166666666666667, 'Obstruction of road by Trees branches': 0.4502923976608187, 'Complaints regarding Dispensary': 0.4485294117647059, 'Complaints regarding burial ground': 0.35714285714285715, 'Death of Stray Animals': 0.26961483594864477, 'Burning of garbage': 0.507, 'Request for Anti Larval operations - to prevent  Dengue /Malaria etc': 0.6, 'Unhygeinic conditions because of Slaughter House': 0.5072463768115942, 'Poor maintenance of Public toilets at Fuel stations': 0.27906976744186046, 'Community Toilets': 0.30288461538461536, 'Removal of fallen trees': 0.47058823529411764, 'Complaints regarding function Halls': 0.2777777777777778, 'Stray cattle': 0.3548387096774194, 'Transfer Station Smell': 0.4189189189189189, 'Illegal slaughtering': 0.4444444444444444, 'Unauthorised tree Cutting': 0.47959183673469385, 'Silt by the side of dividers': 0.8783068783068783, 'Unclaimed Dead Bodies': 0.1111111111111111, 'Unhygienic and improper transport of meat and livestock': 0.2222222222222222, 'correction of Birth certificate': 0.0, 'Hanging of Streetlight Wires': 0.0, 'Non Burning of Street Lights': 0.0, 'Complaints regarding Schools': 0.0, 'Water pipe leakage': 0.0, 'Issues Related to Drinking Water Supply': 0.0, 'Unauthorised Road cutting': 0.0, 'Poor quality of work': 0.0};

let upa = {'Non Receipt of Pensions (Disabled/ Old age/ Widow)': 0.5339805825242718, 'Disputes in SSG / SLF / TLF': 0.6451612903225806, 'Sanction of Gas Connection Under Deepam Scheme': 0.6363636363636364, 'Vaddi Leni Runalu': 0.23684210526315788, 'Non Sanction of Bank Linkage to the group': 0.5, 'Complaints regarding all Sanctioned loans': 0.618421052631579, 'Provision of Placement after Training under ESTP': 0.5333333333333333};


let engineering = {'Repairs to existing footpath': 0.6825938566552902, 'Non Burning of Street Lights': 0.5010003637686431, 'Issues Related to Drinking Water Supply': 0.581074297188755, 'Water pipe leakage': 0.5257608435178529, 'Repairs to Flyovers/ bridges/ Culverts': 0.6535508637236085, 'Pot hole fill up/Repairs to the damage surface': 0.6800911854103343, 'Maintenance of Parks': 0.7385229540918163, 'Stoppage of Civil Works': 0.36036036036036034, 'Obstruction of water flow': 0.38642857142857145, 'Repair Bore wells': 0.5452240067624683, 'UGD Over Flow': 0.5858752056701684, 'Hanging of Streetlight Wires': 0.6633064516129032, 'Replacement of Cover for Manholes': 0.6451612903225806, 'Unauthorised Road cutting': 0.30242825607064017, 'Contamination of Water': 0.39901477832512317, 'Poor quality of work': 0.35520684736091296, 'Electric Shock due to street light': 0.4975124378109453, 'Repairs to the SWD': 0.670995670995671, 'Repairs to Centre Median': 0.6341463414634146, 'Repairs to Traffic Island': 0.625, 'Maintenance of Playground': 0.8431372549019608, 'Water Supply-Others': 0.6666666666666666, 'New Street light': 0.7183098591549296, 'Electrical shock due to street light': 0.5, 'POT HOLE FILL UP/REPAIRS TO DAMAGE SURFACE': 0.6666666666666666, 'tap repair': 0.7272727272727273, 'Desilting of Drain': 0.2765957446808511, 'Illegal draining of sewage to SWD/Open site': 0.6666666666666666, 'Obstruction of road by Trees branches': 0.3333333333333333, 'Stagnation of water': 0.6111111111111112, 'Complaints regarding Schools': 1.0, 'Complaints regarding public toilets': 0.875};

let admin = {'Complaints regarding Voter list': 0.48484848484848486, 'Inclusion, delection of correction in the Voter list': 0.5503355704697986, 'Complaints regarding Schools': 0.3425414364640884, 'pay fixation promotion scale': 0.5, 'RTI act': 0.0};

let rev = {'Complaints related to property tax': 0.7292351008916002, 'New Property Tax Fixation': 0.7341040462427746, 'Double Assessments': 0.6538461538461539, 'Errors in demand Notice': 0.7971014492753623, 'Revision Petition on Property Tax': 0.8818565400843882, 'Property Tax Bifurcation': 0.6428571428571429, 'Transfer of Title of property': 0.6232876712328768, 'Complaints related to issue of all types of license': 0.7167381974248928, 'New Vacant Land tax Fixation': 0.6666666666666666, 'Vacancy Remission': 0.8, 'Improper Sweeping': 0.8, 'solvency': 0.0, 'Demand Extract': 1.0, 'Issues relating to Vacant lands': 0.5, 'Desilting of Drain': 0.0, 'Non Burning of Street Lights': 0.0, 'Complaints regarding all Sanctioned loans': 1.0, 'Water pipe leakage': 0.0, 'Mosquito menace': 0.0, 'Stray Pigs': 0.0, 'Broken Bin': 0.0, 'Stagnation of water': 0.0, 'Hanging of Streetlight Wires': 0.0, 'Absenteesim of door to door garbage collector': 0.0, 'Issues Related to Drinking Water Supply': 0.0, 'Provision of Placement after Training under ESTP': 1.0};

let town_planning = {'Unauthorised / Illegal construction': 0.6301575393848462, 'Encroachment on the public property': 0.3761804826862539, 'Removal of shops in the footpath': 0.4763092269326683, 'Issues relating to Advertisement Boards': 0.5285714285714286, 'Parking Issue': 0.2979942693409742, 'Violation of DCR/Building bye laws': 0.6387665198237885, 'Unauthorised Advt. Boards': 0.45, 'Misuse of Community Hall': 0.30434782608695654, 'Over head cable Wires running in Hapazard manner': 0.18421052631578946, 'property survey': 0.0, 'Removal of Debris': 0.0};

function generate (name, pop) {
	const bin = findbin(pop);
	console.log(bin);
    let averages = new Grade(bin); //for comparisons
    //now to generate the random data points for the ULB to be simulated
    items = ulb_bins[bin];
    var item = items[Math.floor(Math.random() * items.length)];
    let current = new ULB(item, ulbs[item], gei_info[item]);
    current.name = name;
    console.log(averages);
    console.log(current);

    // to create the comparison points for all the other bins
    for (let i = 1; i < 6; i++) {
    	if (i !== bin) {
    		comparisons.push(new Grade(i));
    	}
    }
    return [averages, current];
}
