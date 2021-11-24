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

};


module.exports = Traveller;
