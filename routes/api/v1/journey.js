var Journey = require('../../../data/model/JourneyModel');

// Routes for Journey Api
exports.JourneyApi = function(app, jwt, e_jwt, secret) {

  // Get Journeys
  app.get('/api/v1/journey', function(req, res) {
    Journey.find({}, function(err, journey) {
      if(err) res.json(err);
      else res.json({"journey": journey});
    });
  });

  // Get A Journey
  app.get('/api/v1/journey/:id', function(req, res) {
    Journey.findById(req.params.id, function(err, journey) {
      if(err) res.json(err);
      else res.json({"journey": journey});
    });
  });

  // New Journey
  app.post('/api/v1/journey', function(req, res) {
    var journey = new Journey(req.body.journey);
    console.log(journey);
    Journey.create(journey, function(err) {
      if (err) res.json(err);
      else res.json({"success": {"journey": journey}});
    });
  });

  // Update Start
  // Partial POST update
  app.post('/api/v1/journey/:id/start', function(req, res) {
    Journey.findByIdAndUpdate(req.params.id, req.body.journey, function(err, journey) {
      console.log(journey);
      if (err) res.json(err);
      else res.json({"success": {"journey": journey}});
    });
  });

  // Update Finish
  // Partial POST update
  app.post('/api/v1/journey/:id/finish', function(req, res) {
    Journey.findByIdAndUpdate(req.params.id, req.body.journey, function(err, journey) {
      console.log(journey);
      if (err) res.json(err);
      else res.json({"success": {"journey": journey}});
    });
  });

  // Add Force / Update Forces
  // Partial POST update
  app.post('/api/v1/journey/:id/force', function(req, res) {
    Journey.findByIdAndUpdate(req.params.id, req.body.journey, function(err, journey) {
      console.log(journey);
      if (err) res.json(err);
      else res.json({"success": {"journey": journey}});
    });
  });

  // Add Balance / Update Balances
  // Partial POST update
  app.post('/api/v1/journey/:id/balance', function(req, res) {
    Journey.findByIdAndUpdate(req.params.id, req.body.journey, function(err, journey) {
      console.log(journey);
      if (err) res.json(err);
      else res.json({"success": {"journey": journey}});
    });
  });  

  // Add owner
  // Partial POST update
  app.post('/api/v1/journey/:id/owner', function(req, res) {
    Journey.findByIdAndUpdate(req.params.id, req.body.journey, function(err, journey) {
      console.log(journey);
      if (err) res.json(err);
      else res.json({"success": {"journey": journey}});
    });
  });

};
