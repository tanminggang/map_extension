/** Map with florida and county areas: hover to show county name, click to show marker and infoWindow with extension info 
*** Author: Yiqi Gao
*** Last Modified: July 20, 2015
**/
var Center = new google.maps.LatLng(28,-82.7);
var map;
var infoWindow;
var markers = {};
var tags = {};
var infoWindows = {};
function initialize() {
	// Create the map
	var mapOptions = {
		zoom: 8,
		center: Center,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	//Construct County Polygons and Animation
	for (var i = 0; i < countyCoords.counties.length; i++) {
		var color = polygonColor(countyCoords.counties[i].name);
		var polygon = new google.maps.Polygon({
			county: countyCoords.counties[i].name,
			paths: countyCoords.counties[i].coords,
			strokeColor: '#ffffff',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: color,
			fillOpacity: 0.4,
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
		
		//hover on the polygon to highlight
		google.maps.event.addListener(polygon, 'mouseover', function(event){
			this.setOptions({fillColor: 'black'});
		});
		
		//hover on the polygon to highlight
		google.maps.event.addListener(polygon, 'mouseout', function(event){
			this.setOptions({fillColor: polygonColor(this.county)});
		});
		
		//click on the polygon to show county name
		google.maps.event.addListener(polygon, 'mousedown', function(event){
			//get polygon center and show tag there
			var bounds = new google.maps.LatLngBounds();
			this.getPath().forEach(function(element,index){bounds.extend(element)});
			tags[this.county].setPosition(event.latLng);//bounds.getCenter());
			//tags[this.county].setPosition(markers[this.county].position);
			tags[this.county].setVisible(true);
			/*
			if(map.zoom > 10 || isInfoWindowOpen(infoWindows)){
				tags[this.county].setVisible(false);
			}
			*/
		});
		
		//hide label when unhover
		google.maps.event.addListener(polygon, "mouseup", function(event) {
			tags[this.county].setVisible(false);
		});
		
		/*
		//click tag to show marker and infoWindow
		google.maps.event.addListener(tag, 'click', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
			
			//find county extension
			for(var i = 0; i < extension.counties.length; i++){
				if(extension.counties[i].name == this.county){
					var dataCounty = extension.counties[i];
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
			
			//find county extension
			for(var i = 0; i < extension.counties.length; i++){
				if(extension.counties[i].name == this.county){
					var dataCounty = extension.counties[i];
					break;
				}
			}
			
			//set marker and infoWindow
			markers[dataCounty.name].setMap(map);
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
		});
		*/
	}
	
	// Construct markers and infoWindows from extension
	for (var i = 0; i < extension.counties.length; i++) {
		var dataCounty = extension.counties[i];
		var latLng = new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude);
		var marker = new google.maps.Marker({
			position: latLng,
			icon: "extension.png"
			//title: 'Alachua'
		});
		markers[dataCounty.name] = marker;
		marker.setMap(map);
		
		//infoWindows
		var String = "<h3>" + dataCounty.name + "</h3>Extension Contact: " + dataCounty.contact + "<br>" + dataCounty.extension + "<br>" + dataCounty.address + "<br><a href='mailto:" + dataCounty.email + "'>" + dataCounty.email + "</a><br>" + dataCounty.phone;
		var infoWindow = new google.maps.InfoWindow({
			content:  String,
			position: new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude)
		});
		infoWindows[dataCounty.name] = infoWindow;
		
		/*
		//hide markers when infoWindow is closed
		google.maps.event.addListener(infoWindow,'closeclick', function(){
			//hide all markers
			for (var name in markers) {
				markers[name].setMap(null);
			}
		});
		*/
		
		//click marker to show infoWindow
		google.maps.event.addListener(marker, 'click', function(){
			//hide all infoWindows
			for (var name in infoWindows) {
				infoWindows[name].setMap(null);
			}
			
			//find county extension
			for(var i = 0; i < extension.counties.length; i++){
				if(markers[extension.counties[i].name] == this){
					var dataCounty = extension.counties[i];
					break;
				}
			}
			
			//set infoWindow
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
		});
	}
	
	// Construct markers and infoWindows from REC
	for (var i = 0; i < rec.recs.length; i++) {
		var dataCounty = rec.recs[i];
		var latLng = new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude);
		var marker = new google.maps.Marker({
			position: latLng,
			icon: "rec.png"
		});
		markers[dataCounty.name] = marker;
		marker.setMap(map);
		
		//infoWindows
		var String = "<h3>" + dataCounty.name + "</h3><a href='" + dataCounty.site + "'>" + dataCounty.rec + "</a><br>" + dataCounty.address + "<br><a href='mailto:" + dataCounty.email + "'>" + dataCounty.email + "</a><br>" + dataCounty.phone;
		var infoWindow = new google.maps.InfoWindow({
			content:  String,
			position: new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude)
		});
		infoWindows[dataCounty.name] = infoWindow;
		
		//click marker to show infoWindow
		google.maps.event.addListener(marker, 'click', function(){
			//hide all infoWindows
			for (var name in infoWindows) {
				infoWindows[name].setMap(null);
			}
			
			//find county rec
			for(var i = 0; i < rec.recs.length; i++){
				if(markers[rec.recs[i].name] == this){
					var dataCounty = rec.recs[i];
					break;
				}
			}
			
			//set infoWindow
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
		});
	}
	
	// Construct markers and infoWindows from 4-h
	for (var i = 0; i < fourH.fourH.length; i++) {
		var dataCounty = fourH.fourH[i];
		var latLng = new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude);
		var marker = new google.maps.Marker({
			position: latLng,
			icon: "4-h.png"
		});
		markers[dataCounty.name] = marker;
		marker.setMap(map);
		
		//infoWindows
		var String = "<h3><a href='" + dataCounty.site + "'>Florida 4-H - " + dataCounty.name + "</a></h3><p>" + dataCounty.description + "</p>" + dataCounty.address + "<br><a href='mailto:" + dataCounty.email + "'>" + dataCounty.contact + " (" + dataCounty.email + ")</a><br>" + dataCounty.phone;
		var infoWindow = new google.maps.InfoWindow({
			content:  String,
			position: new google.maps.LatLng(dataCounty.latitude, dataCounty.longitude)
		});
		infoWindows[dataCounty.name] = infoWindow;
		
		//click marker to show infoWindow
		google.maps.event.addListener(marker, 'click', function(){
			//hide all infoWindows
			for (var name in infoWindows) {
				infoWindows[name].setMap(null);
			}
			
			//find county rec
			for(var i = 0; i < fourH.fourH.length; i++){
				if(markers[fourH.fourH[i].name] == this){
					var dataCounty = fourH.fourH[i];
					break;
				}
			}
			
			//set infoWindow
			infoWindows[dataCounty.name].open(map, markers[dataCounty.name]);
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

//get county polygon color
function polygonColor(county){
	if(['Escambia', 'Santa Rosa', 'Okaloosa', 'Walton', 'Holmes', 'Washington', 'Bay', 'Jackson', 'Calhoun', 'Gulf', 'Liberty', 'Franklin', 'Gadsden', 'Leon', 'Wakulla', 'Jefferson'].indexOf(county) > -1)
		return '#FF9933';
	if(['Madison', 'Taylor', 'Hamilton', 'Suwannee', 'Lafayette', 'Dixie', 'Levy', 'Citrus', 'Alachua', 'Gilchrist', 'Columbia', 'Baker', 'Union', 'Bradford', 'Clay', 'Duval', 'Nassau'].indexOf(county) > -1)
		return '#0066FF';
	if(['St. Johns', 'Putnam', 'Flagler', 'Marion', 'Volusia', 'Seminole', 'Orange', 'Osceola', 'Lake', 'Sumter', 'Hernando'].indexOf(county) > -1)
		return '#FF3399';
	if(['Pasco', 'Pinellas', 'Hillsborough', 'Polk', 'Manatee', 'Hardee', 'Sarasota', 'Desoto', 'Charlotte', 'Lee', 'Collier'].indexOf(county) > -1)
		return '#FFD119';
	if(['Brevard', 'Indian River', 'St. Lucie', 'Martin', 'Palm Beach', 'Broward', 'Miami-Dade', 'Monroe', 'Hendry', 'Glades', 'Highlands', 'Okeechobee'].indexOf(county) > -1)
		return '#00CC66';
	else
		return '#D4886A';
}
google.maps.event.addDomListener(window, 'load', initialize);