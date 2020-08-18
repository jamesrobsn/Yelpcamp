var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//GET ROUTE - INDEX ROUTE
router.get("/", async(req,res) => {
	// Get all campgrounds from mongodb
	Campground.find({},function(err,allCampgrounds){
		if(err){
			console.log(err);
		}
		else{
			res.render("campgrounds/index",{campgrounds: allCampgrounds, currentUser: req.user});
		}
	})
	// res.render("campgrounds",{campgrounds: campgrounds});
});

// POST ROUTE - CREATE ROUTE
router.post("/", middleware.isLoggedIn, async(req,res) => {
	// get data from form and add to campgrounds array
	var name = req.body.name;
	var price = req.body.price;
	var image = req.body.image;
	var desc = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {name: name, price: price, image: image, description: desc, author: author};
	
	// Create a new campground and save it to DB
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		}
		else{
			// redirect back to campgrounds page
			res.redirect("/campgrounds");
		}
	});
});

// NEW ROUTE - Show form to create new campground
router.get("/new", middleware.isLoggedIn, async(req,res) => {
	res.render("campgrounds/new");
});

// SHOW ROUTE - shows more info about one campground
router.get("/:id", async(req,res) => {
	// Find the campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		}
		else{
			// Render show template for specific campground by ID
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
});

// EDIT CAMPGROUND ROUTE
router.get("/:id/edit", middleware.checkCampgroundOwnership, async(req,res) => {
	Campground.findById(req.params.id, function(err, foundCampground){
		res.render("campgrounds/edit",{campground: foundCampground});
	});
});

// UPDATE CAMPGROUND ROUTE
router.put("/:id", middleware.checkCampgroundOwnership, async(req,res) => {
	// find and update
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, foundCampground){
		if(err){
			res.redirect("/campgrounds");
		} else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

// DESTROY CAMPGROUND ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, async(req, res) => {
  try {
    let foundCampground = await Campground.findById(req.params.id);
    await foundCampground.remove();
    res.redirect("/campgrounds");
  } catch (error) {
    console.log(error.message);
    res.redirect("/campgrounds");
  }
});

module.exports = router;