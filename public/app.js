const initialize = function(){

  const mapDiv = document.getElementById('main-map');
  const center = {lat:21.289373, lng:-157.917480};
  const location = "Honolulu"
  const text = "Honolulu is the capital and largest city of the U.S. state of Hawaii. It is an unincorporated part of and the county seat of the City and County of Honolulu on the island of O'ahu.[a] The city is the main gateway to Hawai'i and a major portal into the United States. The city is also a major hub for international business, military defense, as well as famously being host to a diverse variety of east-west and Pacific culture, cuisine, and traditions."

  const zoom = 10;
  const mainMap = new MapWrapper(mapDiv, center, zoom);

  const button = document.querySelector('#button-fiji');
  button.addEventListener('click', handleButtonClick.bind(mainMap));

  mainMap.addMarker(center, location, text);

  mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers')
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
}

const handleButtonClick = function(){

  // text = "Fiji is an island country in Melanesia in the South Pacific Ocean about 1,100 nautical miles (2,000 km; 1,300 mi) northeast of New Zealand's North Island. Its closest neighbours are Vanuatu to the west, New Caledonia to the southwest, New Zealand's Kermadec Islands to the southeast, Tonga to the east, the Samoas and France's Wallis and Futuna to the northeast, and Tuvalu to the north."
  //

  this.googleMap.setCenter({lat:-17.713371, lng:178.065033});

}

document.addEventListener('DOMContentLoaded', initialize)
