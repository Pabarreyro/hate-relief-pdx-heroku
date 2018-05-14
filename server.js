var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var RESOURCES_COLLECTION = "resources";

var app = express();
app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://heroku_wgn0kwrs:o6ecosg5k0djcuecd9n2o4dhdm@ds121950.mlab.com:21950/heroku_wgn0kwrs", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// resources API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/*  "/api/resources"
 *    GET: finds all resources
 *    POST: creates a new resource
 */

app.get("/api/resources", function(req, res) {
  db.collection(RESOURCES_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get resources.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/resources", function(req, res) {
  var newResource = req.body;
  newResource.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  }

  db.collection(RESOURCES_COLLECTION).insertOne(newResource, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new resource.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/api/resources/:id"
 *    GET: find resource by id
 *    PUT: update resource by id
 *    DELETE: deletes resource by id
 */

app.get("/api/resources/:id", function(req, res) {
  db.collection(RESOURCES_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get resource");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/api/resources/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(RESOURCES_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update resource");
    } else {
      updateDoc._id = req.params.id;
      res.status(200).json(updateDoc);
    }
  });
});

app.delete("/api/resources/:id", function(req, res) {
  db.collection(RESOURCES_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete resource");
    } else {
      res.status(200).json(req.params.id);
    }
  });
});
