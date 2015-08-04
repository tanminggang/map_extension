var data = {
	"counties": [
		{"name": "Alachua", "contact": "Annie Sheldon", "extension": "UF/IFAS Extension Alachua County, UF East Campus", "address": "2046 N.E. Waldo Road, Suite 3221, Gainesville, FL 32609", "phone": "", "email": "aasheldon@ufl.edu", "latitude": 29.6706703, "longitude": -82.299}
		,
		{"name": "Bradford", "contact": "Samara Deary", "extension": "UF/IFAS Extension Bradford County", "address": "2266 N. Temple Ave., Starke, FL 32091", "phone": "(904) 966-6224", "email": "sdeary@ufl.edu", "latitude": 29.9671377, "longitude": -82.1031321}
		,
		{"name": "Brevard", "contact": "Beth Shephard", "extension": "UF/IFAS Extension Brevard County", "address": "3695 Lake Drive, Cocoa, FL 32926", "phone": "(321) 633-1702", "email": "bshephar@ufl.edu", "latitude": 28.3595442, "longitude": -80.7814422}
		,
		{"name": "Broward", "contact": "Brenda Marty-Jimenez", "extension": "UF/IFAS Extension Broward County", "address": "3900 S.W. 100th Ave., Davie, FL 33328", "phone": "(954) 357-5270", "email": "bjimenez@ufl.edu", "latitude": 26.0718521, "longitude": -80.2801466}
		,
		{"name": "Calhoun", "contact": "Monica Brinkley", "extension": "UF/IFAS Extension Liberty & Calhoun Counties", "address": "10405 N.W. Theo Jacobs Way, Bristol, FL 32321", "phone": "(850) 643-2229", "email": "brinkley@ufl.edu", "latitude": 30.421713, "longitude": -84.977232}
		,
		{"name": "Collier", "contact": "Suzanne Fundingsland", "extension": "UF/IFAS Extension Collier County", "address": "14700 Immokalee Road, Naples, FL 34120", "phone": "(239) 252-4800", "email": "suef@ufl.edu", "latitude": 26.305736, "longitude": -81.5934312}
		,
		{"name": "Columbia", "contact": "Carolyn Jaeger", "extension": "UF/IFAS Extension Columbia County", "address": "971 W. Duval St., Suite 170, Lake City, FL 32055", "phone": "(386) 752-5384", "email": "cjaeger09@ad.ufl.edu", "latitude": 30.1882722, "longitude": -82.6516312}
		,
		{"name": "Miami-Dade", "contact": "Sandra Canales", "extension": "UF/IFAS Extension Miami-Dade County", "address": "300 E. 1st Ave., Suite 113, Hialeah, FL 33010", "phone": "(786) 391-0540", "email": "scanales@ufl.edu", "latitude": 25.8248178, "longitude": -80.2796288}
		,
		{"name": "Dixie", "contact": "Holly Houghton", "extension": "UF/IFAS Extension Dixie County", "address": "PO Box 640, 99 N.E. 121 St., Cross City, FL 32628", "phone": "(352) 498-1237", "email": "hvh@ufl.edu", "latitude": 29.6358699, "longitude": -83.1250817}
		,
		{"name": "Duval", "contact": "Natasha Parks", "extension": "UF/IFAS Extension Duval County", "address": "1010 N. McDuff Ave., Jacksonville, FL 32254", "phone": "(904) 255-7450", "email": "nparks@ufl.edu", "latitude": 30.337398, "longitude": -81.705979}
		,
		{"name": "Flagler", "contact": "Sharon Treen", "extension": "UF/IFAS Extension Flagler County", "address": "150 Sawgrass Road, Bunnell, FL 32110", "phone": "(386) 437-7464", "email": "streen@ufl.edu", "latitude": 29.4884095, "longitude": -81.2771561}
		,
		{"name": "Franklin", "contact": "Melanie Taylor", "extension": "UF/IFAS Extension Franklin County", "address": "66 Fourth St., Apalachicola, FL 32320-1775", "phone": "", "email": "metaylor@ufl.edu", "latitude": 29.7263884, "longitude": -84.9848686}
		,
		{"name": "Gilchrist", "contact": "Holly Houghton", "extension": "UF/IFAS Extension Gilchrist County", "address": "125 E. Wade St., Trenton, FL 32693", "phone": "(352) 463-3174", "email": "hvh@ufl.edu", "latitude": 29.613656, "longitude": -82.817369}
		,
		{"name": "Gulf", "contact": "Melanie Taylor", "extension": "UF/IFAS Extension Gulf County", "address": "232 E. Lake Ave., Wewahitchka, FL 32465", "phone": "(850) 639-3200", "email": "metaylor@ufl.edu", "latitude": 30.1144131, "longitude": -85.198157}
		,
		{"name": "Lafayette", "contact": "Jana Hart", "extension": "UF/IFAS Extension Lafayette County", "address": "176 S.W. Community Circle, Suite D, Mayo, FL 32066", "phone": "(386) 294-1279", "email": "janahart@ufl.edu", "latitude": 30.0581, "longitude": -83.1859}
		,
		{"name": "Leon", "contact": "Kendra Zamojski", "extension": "UF/IFAS Extension Leon County", "address": "615 Paul Russell Road, Tallahassee, FL 32301", "phone": "(850) 606-5200", "email": "hughson@ufl.edu", "latitude": 30.4047941, "longitude": -84.2696236}
		,
		{"name": "Levy", "contact": "Muriel Turner", "extension": "UF/IFAS Extension Levy County", "address": "625 N. Hathaway Ave., Bronson, FL 32621", "phone": "(352) 486-5131", "email": "mgturner@ufl.edu", "latitude": 29.451184, "longitude": -82.649441}
		,
		{"name": "Liberty", "contact": "Monica Brinkley", "extension": "UF/IFAS Extension Liberty & Calhoun Counties", "address": "10405 N.W. Theo Jacobs Way, Bristol, FL 32321", "phone": "(850) 643-2229", "email": "brinkley@ufl.edu", "latitude": 30.421713, "longitude": -84.977232}
		,
		{"name": "Madison", "contact": "Diann Douglas", "extension": "UF/IFAS Extension Madison County", "address": "184 N.W. College Loop, Madison, FL 32340", "phone": "(850) 973-4138", "email": "ddoug@ufl.edu", "latitude": 30.4820355, "longitude": -83.4052956}
		,
		{"name": "Martin", "contact": "Chris Kilbride", "extension": "UF/IFAS Extension Martin County", "address": "2614 S.E. Dixie Hwy., Stuart, FL 34996", "phone": "(772) 288-5654", "email": "kilbride@ufl.edu", "latitude": 27.1691102, "longitude": -80.2228595}
		,
		{"name": "Nassau", "contact": "Meg McAlpine", "extension": "UF/IFAS Extension Nassau County", "address": "543350 U.S. Hwy. 1, Callahan, FL 32011", "phone": "(904) 530-6350", "email": "connor@ufl.edu", "latitude": 30.531697, "longitude": -81.8575819}
		,
		{"name": "Okaloosa", "contact": "Jill Breslawski", "extension": "UF/IFAS Extension Okaloosa County", "address": "3098 Airport Road, Crestview, FL 32539", "phone": "(850) 689-5850", "email": "jbreslawski@ufl.edu", "latitude": 30.793858, "longitude": -86.533467}
		,
		{"name": "Orange", "contact": "Kim Shouldice", "extension": "UF/IFAS Extension Orange County", "address": "6021 S. Conway Road, Orlando, FL 32812", "phone": "(407) 254-9200", "email": "kshouldice@ufl.edu", "latitude": 28.4682121, "longitude": -81.3300692}
		,
		{"name": "Osceola", "contact": "Grisel Negron", "extension": "UF/IFAS Extension Osceola County", "address": "1921 Kissimmee Valley Lane", "phone": "(321) 697-3000", "email": "gnegron@ufl.edu", "latitude": 28.2964929, "longitude": -81.3657206}
		,
		{"name": "Pasco", "contact": "Betsy Crisp", "extension": "UF/IFAS Extension Pasco County, Central Pasco Professional Center", "address": "4111 Land O' Lakes Blvd., Suite 314, Land O' Lakes, FL 34639", "phone": "(813) 929-2725", "email": "mecrisp@ufl.edu", "latitude": 28.2172337, "longitude": -82.4592657}
		,
		{"name": "Pinellas", "contact": "Nan Jensen", "extension": "UF/IFAS Extension Pinellas County", "address": "12520 Ulmerton Road, Largo, FL 33774", "phone": "(727) 582-2104", "email": "njensen@ufl.edu", "latitude": 27.8836364, "longitude": -82.8086862}
		,
		{"name": "Putnam", "contact": "Wendy Lynch", "extension": "UF/IFAS Extension Putnam County", "address": "111 Yelvington Road, Suite 1, East Palatka, FL 32131", "phone": "(386) 329-0318", "email": "wendyw74@ufl.edu", "latitude": 29.642937, "longitude": -81.588515}
		,
		{"name": "St. Johns", "contact": "Joanne Cooper", "extension": "UF/IFAS Extension St. Johns County", "address": "3125 Agricultural Center Drive, St Augustine, FL 32092", "phone": "(904) 209-0430", "email": "jgcoop@ufl.edu", "latitude": 29.904896, "longitude": -81.409951}
		,
		{"name": "St. Lucie", "contact": "Karla Lenfesty", "extension": "UF/IFAS Extension St. Lucie County", "address": "8400 Picos Road, Suite 101, Ft. Pierce, FL 34945", "phone": "(772) 462-1660", "email": "lenfesty@ufl.edu", "latitude": 27.4330659, "longitude": -80.41145}
		,
		{"name": "Santa Rosa", "contact": "Ginny Hinton", "extension": "UF/IFAS Extension Santa Rosa County", "address": "6263 Dogwood Drive, Milton, FL 32570", "phone": "(850) 623-3868", "email": "ginnyh@santarosa.fl.gov", "latitude": 30.662751, "longitude": -87.0554494}
		,
		{"name": "Sarasota", "contact": "Amber Ward", "extension": "UF/IFAS Extension Sarasota County", "address": "6700 Clark Road, Sarasota, FL 34241", "phone": "(941) 861-9804", "email": "alward@ufl.edu", "latitude": 27.2672574, "longitude": -82.4393364}	
		,
		{"name": "Suwannee", "contact": "Cathy Rogers", "extension": "UF/IFAS Extension Suwannee County", "address": "1302 11th St. S.W., Live Oak, FL 32064", "phone": "(386) 362-2771", "email": "cjrogers@ufl.edu", "latitude": 30.2911031, "longitude": -83.0058548}
		,
		{"name": "Taylor", "contact": "Lori Wiggins", "extension": "UF/IFAS Extension Taylor County", "address": "203 Forest Park Drive, Perry, FL 32348", "phone": "(850) 838-3508", "email": "lwiggins@ufl.edu", "latitude": 30.0797595, "longitude": -83.5676256}	
		,
		{"name": "Union", "contact": "Samara Deary", "extension": "UF/IFAS Extension Union County", "address": "25 N.E. 1St St., Lake Butler, FL 32054", "phone": "(386) 496-2321", "email": "sdeary@ufl.edu", "latitude": 30.0238759, "longitude": -82.3381309}
		,
		{"name": "Volusia", "contact": "Jill Taufer", "extension": "UF/IFAS Extension Volusia County", "address": "3100 E. New York Ave., Deland, FL 32724", "phone": "(386) 822-5778", "email": "jtaufer@ufl.edu", "latitude": 29.016363, "longitude": -81.223067}	
		,
		{"name": "Wakulla", "contact": "Shelley Swenson", "extension": "UF/IFAS Extension Wakulla County", "address": "84 Cedar Ave., Crawfordville, FL 32327", "phone": "(850) 926-3931", "email": "sswenson@ufl.edu", "latitude": 30.186232, "longitude": -84.3787229}
		,
		{"name": "Walton", "contact": "Ricki McWilliams", "extension": "UF/IFAS Extension Walton County", "address": "732 North 9th St., DeFuniak Springs, FL 32433", "phone": "(850) 892-8172", "email": "rickim@ufl.edu", "latitude": 30.7457466, "longitude": -86.114714}			
	]
}
var countyCoords = {	
	"counties": [
		{"name": "Alachua", "coords": [
			new google.maps.LatLng(29.821583,-82.647400),
			new google.maps.LatLng(29.933515,-82.534790),
			new google.maps.LatLng(29.838261,-82.114563),
			new google.maps.LatLng(29.709525,-82.051392),
			new google.maps.LatLng(29.444381,-82.062378),
			new google.maps.LatLng(29.504000,-82.196960),
			new google.maps.LatLng(29.504000,-82.551270),
			new google.maps.LatLng(29.547177,-82.556763),
			new google.maps.LatLng(29.547177,-82.655640)
		]}
		,
		{"name": "Bradford", "coords": [
			new google.maps.LatLng(30.145127,-82.139282),
			new google.maps.LatLng(29.910000,-82.431013),
			new google.maps.LatLng(29.838261,-82.114563),
			new google.maps.LatLng(29.709525,-82.051392),
			new google.maps.LatLng(30.147502,-82.048645)
		]}
		,
		{"name": "Union", "coords": [
			new google.maps.LatLng(30.145127,-82.139282),
			new google.maps.LatLng(30.139189,-82.453766),
			new google.maps.LatLng(30.002517,-82.573242),
			new google.maps.LatLng(29.933515,-82.534790),
			new google.maps.LatLng(29.910000,-82.431013)
		]}
		,
		{"name": "Columbia", "coords": [
			new google.maps.LatLng(30.146315,-82.453766),
			new google.maps.LatLng(30.583500,-82.462006),
			new google.maps.LatLng(30.597680,-82.698212),
			new google.maps.LatLng(30.532694,-82.731171),
			new google.maps.LatLng(30.443938,-82.665253),
			new google.maps.LatLng(30.369321,-82.688599),
			new google.maps.LatLng(30.336139,-82.805328),
			new google.maps.LatLng(29.939465,-82.797089),
			new google.maps.LatLng(29.821583,-82.647400),
			new google.maps.LatLng(29.933515,-82.534790),
			new google.maps.LatLng(30.002517,-82.573242),
			new google.maps.LatLng(30.139189,-82.453766)
		]}
		,
		{"name": "Gilchrist", "coords": [
			new google.maps.LatLng(29.939465,-82.797089),
			new google.maps.LatLng(29.821583,-82.647400),
			new google.maps.LatLng(29.547177,-82.655640),
			new google.maps.LatLng(29.588983,-82.949524),
			new google.maps.LatLng(29.823370,-82.909012)
		]}
		,
		{"name": "Levy", "coords": [
			new google.maps.LatLng(29.588983,-82.949524),
			new google.maps.LatLng(29.300771,-83.166504),
			new google.maps.LatLng(28.986520,-82.757263),
			new google.maps.LatLng(29.057370,-82.533417),
			new google.maps.LatLng(29.213908,-82.537537),
			new google.maps.LatLng(29.215107,-82.402954),
			new google.maps.LatLng(29.504000,-82.404327),
			new google.maps.LatLng(29.504000,-82.551270),
			new google.maps.LatLng(29.547177,-82.556763),
			new google.maps.LatLng(29.547177,-82.655640)
		]}
		,
		{"name": "Dixie", "coords": [
			new google.maps.LatLng(29.588983,-82.949524),
			new google.maps.LatLng(29.300771,-83.166504),
			new google.maps.LatLng(29.513720,-83.394470),
			new google.maps.LatLng(29.657029,-83.424683),
			new google.maps.LatLng(29.822583,-83.318939),
			new google.maps.LatLng(29.823370,-82.909012)
		]}
		,
		{"name": "Suwannee", "coords": [
			new google.maps.LatLng(30.336139,-82.805328),
			new google.maps.LatLng(29.939465,-82.797089),
			new google.maps.LatLng(29.823370,-82.909012),
			new google.maps.LatLng(30.109494,-83.215942),
			new google.maps.LatLng(30.262626,-83.250275),
			new google.maps.LatLng(30.423809,-83.151398),
			new google.maps.LatLng(30.451041,-83.069000)
		]}
		,
		{"name": "Lafayette", "coords": [
			new google.maps.LatLng(30.262626,-83.367691),
			new google.maps.LatLng(30.262626,-83.250275),
			new google.maps.LatLng(30.109494,-83.215942),
			new google.maps.LatLng(29.823370,-82.909012),
			new google.maps.LatLng(29.822490,-83.367691)
		]}
		,
		{"name": "Madison", "coords": [
			new google.maps.LatLng(30.631244,-83.269501),
			new google.maps.LatLng(30.387092,-83.173942),
			new google.maps.LatLng(30.262626,-83.250275),
			new google.maps.LatLng(30.262626,-83.472748),
			new google.maps.LatLng(30.302946,-83.472748),
			new google.maps.LatLng(30.302946,-83.814697),
			new google.maps.LatLng(30.651207,-83.612823)
		]}
		,
		{"name": "Taylor", "coords": [
			new google.maps.LatLng(30.244239,-83.923874),
			new google.maps.LatLng(30.088702,-83.998718),
			new google.maps.LatLng(29.657029,-83.424683),
			new google.maps.LatLng(29.822583,-83.318939),
			new google.maps.LatLng(29.822490,-83.367691),
			new google.maps.LatLng(30.262626,-83.367691),
			new google.maps.LatLng(30.262626,-83.472748),
			new google.maps.LatLng(30.302946,-83.472748),
			new google.maps.LatLng(30.302946,-83.814697)
		]}
		,
		{"name": "Santa Rosa", "coords": [
			new google.maps.LatLng(30.997800,-87.166901),
			new google.maps.LatLng(30.851542,-87.313843),
			new google.maps.LatLng(30.345621,-87.195740),
			new google.maps.LatLng(30.387229,-86.796886),
			new google.maps.LatLng(30.996923,-86.786499)
		]}
		,
		{"name": "Okaloosa", "coords": [
			new google.maps.LatLng(30.387229,-86.796886),
			new google.maps.LatLng(30.996923,-86.786499),
			new google.maps.LatLng(30.994680,-86.390991),
			new google.maps.LatLng(30.378799,-86.396484)
		]}
		,
		{"name": "Walton", "coords": [
			new google.maps.LatLng(30.994680,-86.390991),
			new google.maps.LatLng(30.378799,-86.396484),
			new google.maps.LatLng(30.269149,-85.996170),
			new google.maps.LatLng(30.416111,-85.992737),
			new google.maps.LatLng(30.496018,-85.857468),
			new google.maps.LatLng(30.621368,-85.915833),
			new google.maps.LatLng(30.698154,-85.853348),
			new google.maps.LatLng(30.705239,-86.036682),
			new google.maps.LatLng(30.994092,-86.038055)
		]}
		,
		{"name": "Calhoun", "coords": [
			new google.maps.LatLng(30.566789, -85.384318),
			new google.maps.LatLng(30.564597, -85.173896),
			new google.maps.LatLng(30.607965, -85.167712),
			new google.maps.LatLng(30.606400, -84.933283),
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.201685, -85.389920)
		]}
		,
		{"name": "Gulf", "coords": [			
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.201685, -85.389920),
			new google.maps.LatLng(29.924028, -85.389573),
			new google.maps.LatLng(29.832145, -85.420951),
			new google.maps.LatLng(29.656620, -85.349449),
			new google.maps.LatLng(29.676287, -85.235766),
			new google.maps.LatLng(29.807599, -85.021260),
			new google.maps.LatLng(29.901734, -85.053668),
			new google.maps.LatLng(29.951665, -85.018688),
			new google.maps.LatLng(29.991770, -85.037721),
			new google.maps.LatLng(30.052343, -85.136487)
		]}
		,
		{"name": "Liberty", "coords": [			
			new google.maps.LatLng(30.606400, -84.933283),
			new google.maps.LatLng(30.200628, -85.115253),
			new google.maps.LatLng(30.052343, -85.136487),
			new google.maps.LatLng(29.991770, -85.037721),
			new google.maps.LatLng(29.951665, -85.018688),
			new google.maps.LatLng(30.013658, -85.005977),
			new google.maps.LatLng(30.011502, -84.547400),
			new google.maps.LatLng(30.266186, -84.734321),
			new google.maps.LatLng(30.387845, -84.652017),
			new google.maps.LatLng(30.604148, -84.885556)
		]}
		,
		{"name": "Franklin", "coords": [			
			new google.maps.LatLng(30.011502, -84.547400),
			new google.maps.LatLng(30.013658, -85.005977),
			new google.maps.LatLng(29.951665, -85.018688),
			new google.maps.LatLng(29.901734, -85.053668),
			new google.maps.LatLng(29.807599, -85.021260),
			new google.maps.LatLng(29.676287, -85.235766),
			new google.maps.LatLng(29.586165, -85.051187),
			new google.maps.LatLng(29.904502, -84.339716),
			new google.maps.LatLng(29.943593, -84.333896),
			new google.maps.LatLng(30.010389, -84.546319)
		]}
		,
		{"name": "Wakulla", "coords": [			
			new google.maps.LatLng(30.266186, -84.734321),
			new google.maps.LatLng(30.011502, -84.547400),
			new google.maps.LatLng(29.974932, -84.429659),
			new google.maps.LatLng(29.969822, -84.338312),
			new google.maps.LatLng(30.092430, -84.077042),
			new google.maps.LatLng(30.273609, -84.075422),
			new google.maps.LatLng(30.274107, -84.241135),
			new google.maps.LatLng(30.303523, -84.247775),
			new google.maps.LatLng(30.299934, -84.710826)
		]}
		,
		{"name": "Leon", "coords": [			
			new google.maps.LatLng(30.273609, -84.075422),
			new google.maps.LatLng(30.274107, -84.241135),
			new google.maps.LatLng(30.303523, -84.247775),
			new google.maps.LatLng(30.299934, -84.710826),
			new google.maps.LatLng(30.387845, -84.652017),
			new google.maps.LatLng(30.500983, -84.403939),
			new google.maps.LatLng(30.683986, -84.292702),
			new google.maps.LatLng(30.670276, -84.007380),
			new google.maps.LatLng(30.522038, -83.977347),
			new google.maps.LatLng(30.522038, -84.041001),
			new google.maps.LatLng(30.463740, -84.041729),
			new google.maps.LatLng(30.434264, -84.074465)
		]}
		,
		{"name": "Nassau", "coords": [
			new google.maps.LatLng(30.514272, -81.434499),
			new google.maps.LatLng(30.568740, -81.721717),
			new google.maps.LatLng(30.275515, -82.048929),
			new google.maps.LatLng(30.3598, -82.0638),
			new google.maps.LatLng(30.4877, -82.0226),
			new google.maps.LatLng(30.6308, -82.0473),
			new google.maps.LatLng(30.6757, -82.0514),
			new google.maps.LatLng(30.7111, -82.0377),
			new google.maps.LatLng(30.7371, -82.0514),
			new google.maps.LatLng(30.7678, -82.0102),
			new google.maps.LatLng(30.7914, -82.0322),
			new google.maps.LatLng(30.7997, -81.9717),
			new google.maps.LatLng(30.8244, -81.9608),
			new google.maps.LatLng(30.8056, -81.8893),
			new google.maps.LatLng(30.7914, -81.8372),
			new google.maps.LatLng(30.7796, -81.7960),
			new google.maps.LatLng(30.7536, -81.6696),
			new google.maps.LatLng(30.7289, -81.6051),
			new google.maps.LatLng(30.7324, -81.5666),
			new google.maps.LatLng(30.7229, -81.5295),
			new google.maps.LatLng(30.7253, -81.4856),
			new google.maps.LatLng(30.7111, -81.4609),
			new google.maps.LatLng(30.7088, -81.4249)
		]}
		,
		{"name": "Duval", "coords": [
			new google.maps.LatLng(30.514272, -81.434499),
			new google.maps.LatLng(30.568740, -81.721717),
			new google.maps.LatLng(30.275515, -82.048929),
			new google.maps.LatLng(30.187535, -82.049838),
			new google.maps.LatLng(30.189311, -81.693972),
			new google.maps.LatLng(30.129082, -81.660059),
			new google.maps.LatLng(30.134395, -81.622654),
			new google.maps.LatLng(30.118858, -81.567757),
			new google.maps.LatLng(30.120241, -81.539202),
			new google.maps.LatLng(30.103673, -81.538813),
			new google.maps.LatLng(30.105334, -81.434007),
			new google.maps.LatLng(30.252086, -81.436794),
			new google.maps.LatLng(30.252963, -81.379881)
		]}
		,
		{"name": "St. Johns", "coords": [
			new google.maps.LatLng(30.252963, -81.379881),
			new google.maps.LatLng(30.252086, -81.436794),
			new google.maps.LatLng(30.105334, -81.434007),
			new google.maps.LatLng(30.103673, -81.538813),
			new google.maps.LatLng(30.120241, -81.539202),
			new google.maps.LatLng(30.118858, -81.567757),
			new google.maps.LatLng(30.134395, -81.622654),
			new google.maps.LatLng(30.116262, -81.646159),
			new google.maps.LatLng(30.044314, -81.684267),
			new google.maps.LatLng(29.983850, -81.617623),
			new google.maps.LatLng(29.759317, -81.525606),
			new google.maps.LatLng(29.622720, -81.524232),
			new google.maps.LatLng(29.626301, -81.325105),
			new google.maps.LatLng(29.670965, -81.213018)
		]}
		,
		{"name": "Flagler", "coords": [
			new google.maps.LatLng(29.670965, -81.213018),
			new google.maps.LatLng(29.626301, -81.325105),
			new google.maps.LatLng(29.622720, -81.524232),
			new google.maps.LatLng(29.518796, -81.521612),
			new google.maps.LatLng(29.396597, -81.473389),
			new google.maps.LatLng(29.391934, -81.450034),
			new google.maps.LatLng(29.398617, -81.435480),
			new google.maps.LatLng(29.400473, -81.421190),
			new google.maps.LatLng(29.261393, -81.417416),
			new google.maps.LatLng(29.266155, -81.149968),
			new google.maps.LatLng(29.411010, -81.155461),
			new google.maps.LatLng(29.427159, -81.102246)
		]}
		,
		{"name": "Putnam", "coords": [
			new google.maps.LatLng(29.840020, -81.605451),
			new google.maps.LatLng(29.759317, -81.525606),
			new google.maps.LatLng(29.518796, -81.521612),
			new google.maps.LatLng(29.396597, -81.473389),
			new google.maps.LatLng(29.391934, -81.450034),
			new google.maps.LatLng(29.378920, -81.452357),
			new google.maps.LatLng(29.330111, -81.652036),
			new google.maps.LatLng(29.371350, -81.668562),
			new google.maps.LatLng(29.371350, -81.742123),
			new google.maps.LatLng(29.429790, -81.742123),
			new google.maps.LatLng(29.431483, -81.774852),
			new google.maps.LatLng(29.487068, -81.776796),
			new google.maps.LatLng(29.486280, -81.843373),
			new google.maps.LatLng(29.509623, -81.843373),
			new google.maps.LatLng(29.498329, -82.016397),
			new google.maps.LatLng(29.471971, -82.061128),
			new google.maps.LatLng(29.717609, -82.051156),
			new google.maps.LatLng(29.718736, -82.028770),
			new google.maps.LatLng(29.744015, -81.998519),
			new google.maps.LatLng(29.749693, -81.940205),
			new google.maps.LatLng(29.790849, -81.917860),
			new google.maps.LatLng(29.803146, -81.863361),
			new google.maps.LatLng(29.837189, -81.813222)
		]}
		,
		{"name": "Volusia", "coords": [
			new google.maps.LatLng(29.427159, -81.102246),
			new google.maps.LatLng(29.411010, -81.155461),
			new google.maps.LatLng(29.266155, -81.149968),
			new google.maps.LatLng(29.261393, -81.417416),
			new google.maps.LatLng(29.400473, -81.421190),
			new google.maps.LatLng(29.398617, -81.435480),
			new google.maps.LatLng(29.391934, -81.450034),
			new google.maps.LatLng(29.378920, -81.452357),
			new google.maps.LatLng(29.348172, -81.574296),
			new google.maps.LatLng(29.202231, -81.567986),
			new google.maps.LatLng(28.956600, -81.372970),
			new google.maps.LatLng(28.847474, -81.358305),
			new google.maps.LatLng(28.785638, -81.175909),
			new google.maps.LatLng(28.820977, -81.108083),
			new google.maps.LatLng(28.612345, -80.989544),
			new google.maps.LatLng(28.613624, -80.965267),
			new google.maps.LatLng(28.790787, -80.967695),
			new google.maps.LatLng(28.791730, -80.732634)
		]}
		,
		{"name": "Brevard", "coords": [
			new google.maps.LatLng(28.791730, -80.732634),
			new google.maps.LatLng(28.790787, -80.967695),
			new google.maps.LatLng(28.613624, -80.965267),
			new google.maps.LatLng(28.562349, -80.932378),
			new google.maps.LatLng(28.536120, -80.942574),
			new google.maps.LatLng(28.499217, -80.884310),
			new google.maps.LatLng(28.473612, -80.876056),
			new google.maps.LatLng(28.463795, -80.899119),
			new google.maps.LatLng(28.385227, -80.889409),
			new google.maps.LatLng(28.358722, -80.873020),
			new google.maps.LatLng(28.347799, -80.872142),
			new google.maps.LatLng(28.342930, -80.863190),
			new google.maps.LatLng(28.085003, -80.863147),
			new google.maps.LatLng(28.084575, -80.869944),
			new google.maps.LatLng(27.822093, -80.868502),
			new google.maps.LatLng(27.822093, -80.511670),
			new google.maps.LatLng(27.863448, -80.447579),
			new google.maps.LatLng(28.532261, -80.527461)
		]}
		,
		{"name": "Orange", "coords": [
			new google.maps.LatLng(28.612345, -80.989544),
			new google.maps.LatLng(28.613624, -80.965267),
			new google.maps.LatLng(28.562349, -80.932378),
			new google.maps.LatLng(28.536120, -80.942574),
			new google.maps.LatLng(28.499217, -80.884310),
			new google.maps.LatLng(28.473612, -80.876056),
			new google.maps.LatLng(28.463795, -80.899119),
			new google.maps.LatLng(28.385227, -80.889409),
			new google.maps.LatLng(28.358722, -80.873020),
			new google.maps.LatLng(28.347799, -80.872142),
			new google.maps.LatLng(28.347066, -81.657348),
			new google.maps.LatLng(28.782932, -81.657553),
			new google.maps.LatLng(28.785062, -81.414593),
			new google.maps.LatLng(28.741533, -81.420655),
			new google.maps.LatLng(28.712419, -81.444040),
			new google.maps.LatLng(28.713685, -81.458475),
			new google.maps.LatLng(28.640992, -81.459630),
			new google.maps.LatLng(28.639725, -81.328272),
			new google.maps.LatLng(28.610836, -81.327694)
		]}
		,
		{"name": "Osceola", "coords": [
			new google.maps.LatLng(28.347066, -81.657348),
			new google.maps.LatLng(28.347799, -80.872142),
			new google.maps.LatLng(28.342930, -80.863190),
			new google.maps.LatLng(28.085003, -80.863147),
			new google.maps.LatLng(28.084575, -80.869944),
			new google.maps.LatLng(27.822093, -80.868502),
			new google.maps.LatLng(27.822567, -80.881758),
			new google.maps.LatLng(27.734700, -80.880026),
			new google.maps.LatLng(27.733915, -80.873687),
			new google.maps.LatLng(27.642810, -80.873278),
			new google.maps.LatLng(27.643668, -81.139746),
			new google.maps.LatLng(28.002679, -81.385711),
			new google.maps.LatLng(28.083242, -81.361435),
			new google.maps.LatLng(28.086669, -81.456599),
			new google.maps.LatLng(28.143197, -81.457570),
			new google.maps.LatLng(28.143640, -81.525029),
			new google.maps.LatLng(28.200566, -81.524058),
			new google.maps.LatLng(28.259172, -81.558045),
			new google.maps.LatLng(28.259600, -81.657579),
			new google.maps.LatLng(28.347234, -81.657579)
		]}
		,
		{"name": "Pasco", "coords": [
			new google.maps.LatLng(28.171675, -82.848132),
			new google.maps.LatLng(28.172280, -82.105868),
			new google.maps.LatLng(28.258803, -82.105868),
			new google.maps.LatLng(28.259408, -82.055743),
			new google.maps.LatLng(28.478726, -82.055056),
			new google.maps.LatLng(28.479330, -82.252810),
			new google.maps.LatLng(28.435261, -82.254184),
			new google.maps.LatLng(28.432846, -82.687457),
			new google.maps.LatLng(28.214038, -82.852252)
		]}
		,
		{"name": "Pinellas", "coords": [
			new google.maps.LatLng(28.171675, -82.848132),
			new google.maps.LatLng(28.173013, -82.651107),
			new google.maps.LatLng(27.966409, -82.649047),
			new google.maps.LatLng(27.920308, -82.609222),
			new google.maps.LatLng(27.880257, -82.582443),
			new google.maps.LatLng(27.818331, -82.587249),
			new google.maps.LatLng(27.704100, -82.636001),
			new google.maps.LatLng(27.644507, -82.672393),
			new google.maps.LatLng(27.627474, -82.701919),
			new google.maps.LatLng(27.611047, -82.737625),
			new google.maps.LatLng(27.858405, -82.853668)
		]}
		,
		{"name": "Sarasota", "coords": [
			new google.maps.LatLng(27.389976, -82.646488),
			new google.maps.LatLng(27.386209, -82.252332),
			new google.maps.LatLng(27.209079, -82.253787),
			new google.maps.LatLng(27.207785, -82.056641),
			new google.maps.LatLng(27.031990, -82.057369),
			new google.maps.LatLng(27.033155, -82.255295),
			new google.maps.LatLng(26.945317, -82.255659),
			new google.maps.LatLng(26.946290, -82.376783)
		]}
		,
		{"name": "St. Lucie", "coords": [
			new google.maps.LatLng(27.558824, -80.679817),
			new google.maps.LatLng(27.557169, -80.321190),
			new google.maps.LatLng(27.262679, -80.199673),
			new google.maps.LatLng(27.263594, -80.284474),
			new google.maps.LatLng(27.206205, -80.285504),
			new google.maps.LatLng(27.206368, -80.677915)
		]}
		,
		{"name": "Martin", "coords": [
			new google.maps.LatLng(27.262679, -80.199673),
			new google.maps.LatLng(27.263594, -80.284474),
			new google.maps.LatLng(27.206205, -80.285504),
			new google.maps.LatLng(27.206368, -80.677915),
			new google.maps.LatLng(27.121131, -80.677429),
			new google.maps.LatLng(27.112419, -80.687829),
			new google.maps.LatLng(26.957671, -80.612586),
			new google.maps.LatLng(26.956581, -80.142164),
			new google.maps.LatLng(26.970757, -80.141552),
			new google.maps.LatLng(26.971302, -80.079156)
		]}
		,
		{"name": "Collier", "coords": [
			new google.maps.LatLng(26.330375, -81.845838),
			new google.maps.LatLng(26.330375, -81.819634),
			new google.maps.LatLng(26.317250, -81.818863),
			new google.maps.LatLng(26.317941, -81.658550),
			new google.maps.LatLng(26.421521, -81.659321),
			new google.maps.LatLng(26.422211, -81.562209),
			new google.maps.LatLng(26.519492, -81.564521),
			new google.maps.LatLng(26.517423, -81.272413),
			new google.maps.LatLng(26.252983, -81.267788),
			new google.maps.LatLng(26.259110, -80.879903),
			new google.maps.LatLng(25.805456, -80.873808),
			new google.maps.LatLng(25.803375, -81.468814),
			new google.maps.LatLng(25.845001, -81.682307),
			new google.maps.LatLng(26.091679, -81.804854)
		]}
		,
		{"name": "Broward", "coords": [
			new google.maps.LatLng(26.333799, -80.881177),
			new google.maps.LatLng(26.335042, -80.226690),
			new google.maps.LatLng(26.328079, -80.203870),
			new google.maps.LatLng(26.327915, -80.099547),
			new google.maps.LatLng(26.321187, -80.074430),
			new google.maps.LatLng(25.975901, -80.118701),
			new google.maps.LatLng(25.970385, -80.294780),
			new google.maps.LatLng(25.956977, -80.295508),
			new google.maps.LatLng(25.956997, -80.680185),
			new google.maps.LatLng(25.978580, -80.680549),
			new google.maps.LatLng(25.980384, -80.876013)
		]}
		,
		{"name": "Miami-Dade", "coords": [
			new google.maps.LatLng(25.980384, -80.876013),
			new google.maps.LatLng(25.978580, -80.680549),
			new google.maps.LatLng(25.956997, -80.680185),
			new google.maps.LatLng(25.956977, -80.295508),
			new google.maps.LatLng(25.970385, -80.294780),
			new google.maps.LatLng(25.975901, -80.118701),
			new google.maps.LatLng(25.828871, -80.116471),
			new google.maps.LatLng(25.484436, -80.176040),
			new google.maps.LatLng(25.346909, -80.245999),
			new google.maps.LatLng(25.131012, -80.652377),
			new google.maps.LatLng(25.177574, -80.862254)
		]}
	]
}
var Center = new google.maps.LatLng(27.6,-82.7);
var map;
var infoWindow;
var markers = {};
var tags = {};
var infoWindows = {};
function initialize() {
	// Create the map
	var mapOptions = {
		zoom: 7,
		center: Center,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	//Construct County Polygons and Animation
	for (var i = 0; i < countyCoords.counties.length; i++) {
		var polygon = new google.maps.Polygon({
			county: countyCoords.counties[i].name,
			paths: countyCoords.counties[i].coords,
			strokeColor: '#D4886A',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FFC2AA',
			fillOpacity: 0.2,
		});
		polygon.setMap(map);
		
		//Label with county name
		var tag = new MarkerWithLabel({
			position: new google.maps.LatLng(0,0),
			draggable: false,
			raiseOnDrag: false,
			map: map,
			labelContent: countyCoords.counties[i].name,
			labelAnchor: new google.maps.Point(30, 20),
			labelClass: "labels", // the CSS class for the label
			labelStyle: {opacity: 1.0},
			icon: "http://placehold.it/1x1",
			visible: false
		 });
		 tags[countyCoords.counties[i].name] = tag;
		
		//hover on the polygon to show county name
		google.maps.event.addListener(polygon, 'mousemove', function(event){
			//get polygon center and show tag there
			var bounds = new google.maps.LatLngBounds();
			this.getPath().forEach(function(element,index){bounds.extend(element)});
			tags[this.county].setPosition(bounds.getCenter());
			//tags[this.county].setPosition(markers[this.county].position);
			tags[this.county].setVisible(true);
			if(map.zoom > 10 || isInfoWindowOpen(infoWindows)){
				tags[this.county].setVisible(false);
			}
		});
		
		//hide label when unhover
		google.maps.event.addListener(polygon, "mouseout", function(event) {
			tags[this.county].setVisible(false);
		});
		
		//click tag to show marker and infoWindow
		google.maps.event.addListener(tag, 'click', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
			
			//find county data
			for(var i = 0; i < data.counties.length; i++){
				if(data.counties[i].name == this.county){
					var dataCounty = data.counties[i];
					break;
				}
			}
			
			//set marker and infoWindow
			markers[dataCounty.name].setMap(map);
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
		});
		
		//click polygon to show marker and infoWindow
		google.maps.event.addListener(polygon, 'click', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
			
			//find county data
			for(var i = 0; i < data.counties.length; i++){
				if(data.counties[i].name == this.county){
					var dataCounty = data.counties[i];
					break;
				}
			}
			
			//set marker and infoWindow
			markers[dataCounty.name].setMap(map);
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
		});
	}
	
	// Construct markers and infoWindows from data
	for (var i = 0; i < data.counties.length; i++) {
		var dataCounty = data.counties[i];
		var latLng = new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude);
		var marker = new google.maps.Marker({
			position: latLng,
			//title: 'Alachua'
		});
		markers[dataCounty.name] = marker;
		//marker.setMap(map);
		
		//infoWindows
		var String = "<h3>" + dataCounty.name + "</h3>FNP Contact: " + dataCounty.contact + "<br>" + dataCounty.extension + "<br>" + dataCounty.address + "<br><a href='mailto:" + dataCounty.email + "'>" + dataCounty.email + "</a><br>" + dataCounty.phone;
		var infoWindow = new google.maps.InfoWindow({
			content:  String,
			position: new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude)
		});
		infoWindows[dataCounty.name] = infoWindow;
				
		//hide markers when infoWindow is closed
		google.maps.event.addListener(infoWindow,'closeclick', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
		});
	}		
}

//check if these is any infoWindow open
function isInfoWindowOpen(infoWindows){
	var getmap;
	for (var name in infoWindows) {
		getmap = infoWindows[name].getMap();
		if(getmap !== null && typeof getmap !== "undefined"){
			return true;
		}
	}
	return false;
}
google.maps.event.addDomListener(window, 'load', initialize);