const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let StartLocations = this.journeys.map(journey => journey.startLocation);
  return StartLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = this.journeys.map(journey => journey.endLocation);
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeysByTransport = this.journeys.filter(journey => journey.transport === transport);
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeysByMinDistance = this.journeys.filter(journey => journey.distance >= minDistance);
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = this.journeys.reduce((tot, journey) => tot += journey.distance, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // const uniqueTransports = new Set(this.journeys.map(journey => journey.transport)) // it works, but not in the corect order
  const allTransports = this.journeys.map((journey) => journey.transport);
  const uniqueTransports = allTransports.filter((transport, index, array) => array.indexOf(transport) === index); // it works... but what's array in indexOf?!
  return uniqueTransports;
};


module.exports = Traveller;
