var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");
 
var seeds = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff76",
            username: "Jack"
        }
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff71",
            username: "Jill"
        }
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        author:{
            id : "588c2e092403d111454fff77",
            username: "Jane"
        }
    },
	{
        name: "Salmon Creek", 
        image: "https://ewscripps.brightspotcdn.com/dims4/default/249f2ff/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fsharing.wxyz.com%2Fsharescnn%2Fphoto%2F2015%2F05%2F29%2FTentCamping_1432912560973_18976473_ver1.0_640_480.jpg",
        description: "Come swim with the fishes! No bathrooms, or anything else for that matter. Just a creek...",
        author:{
            id : "5eefc02a34c3b73d98b687d1",
            username: "james"
        }
    },
	{
        name: "Granite Hill", 
        image: "https://www.planetware.com/wpimages/2018/10/washington-mount-rainier-national-park-best-campgrounds-washington-cougar-rock-campground-paradise-skyline-trail.jpg",
        description: "Lots of hill, lots of wow!",
        author:{
            id : "588c2e092403d111454fff89",
            username: "John"
        }
    },
		{
        name: "Mountain Goat's Rest", 
        image: "https://res.cloudinary.com/simpleview/image/upload/v1584361003/clients/poconos/Campgrounds_Exterior_Keen_Lake_1_PoconoMtns_d606c492-eb33-450d-a725-e173b70c6cb8.jpg",
        description: "Awesome place. It's where the mountain goats get their rest",
        author:{
            id : "588c2e092403d111454fff99",
            username: "Jerry"
        }
    }
];

async function seedDB(){
	try {
		//Remove all campgrounds
		await Campground.remove({});
		console.log('Campgrounds Removed');
		
		await Comment.remove({});
		console.log('Comments Removed');
		
		// for(const seed of seeds){
		// 	let campground = await Campground.create(seed);
		// 	console.log('Campgrounds Created');
		// 	let comment = await Comment.create(
		// 		{
		// 			text: "This place is great, but I wish there was internet",
		// 			author:{
		// 				id : "5eefc02a34c3b73d98b687d1",
		// 				username: "james"
		// 			}
		// 		}
		// 	);
		// 	console.log('Comment Created');
		// 	campground.comments.push(comment);
		// 	campground.save();
		// 	console.log('Comment Added to Campground');
		// }
	} catch(err) {
		console.log(err);
	}
}
 
module.exports = seedDB;