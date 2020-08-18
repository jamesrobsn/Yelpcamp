var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//Root Route
router.get("/", async(req,res) => {
	res.render("landing");
});

// Register Form
router.get("/register", async(req,res) => {
	res.render("register");
});

// Handle Sign Up Logic
router.post("/register", async(req,res) => {
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err,user){
		if(err){
			req.flash("error", err.message);
			return res.redirect("register");
		}
			passport.authenticate("local")(req, res, function(){
				req.flash("success", "Welcome to YelpCamp" + user.username);
				res.redirect("/campgrounds");
			});
	});
});

// ***********  LOGIN ROUTES  ****************

router.get("/login", async(req,res) => {
	res.render("login");
});

// Middleware
router.post("/login", passport.authenticate("local", {
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
	}), async(req,res) => {
});

router.get("/logout", async(req,res) => {
	req.logout();
	req.flash("success", "You have been logged out!")
	res.redirect("/campgrounds")
});

//Anything else
// router.get("*", async(req, res) => {
// 	res.send("Nothing to see here...")
// });

module.exports = router;