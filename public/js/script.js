"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	},
	"SampleWriting":{
        "Title": "Some sample writing",
        "Subtitle": "From Evelyn",
        "Message":"Just look how easy it is!"
    }
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	},
	"y": {
		"Name": "You",
		"Color": "#888888" 
	},
	"a":{
        "Name": "Alexei",
		"Color": "#7C45A9",
		"Face": "Alexei.png"
	},
	"j":{
        "Name": "Jacob",
		"Color": "#4574A9" ,
		"Face": "Jacob.jpeg"		
	},
	"e":{
	  	"Name": "Elizabeth",
		"Color": "#FAB340",
		"Face": "Elizabeth.jpeg"	
	},
	"b":{
	  	"Name": "Bob",
		"Color": "#75C24E",		
		"Face": "Bob.png"	
	},
	"s":{
	  	"Name": "Sophia",
		"Color": "#E33B66",
		"Face": "Sophia.png"	
	},
	"B":{
	  	"Name": "Braun",
		"Color": "#B4339C",
		"Face": "Braun.jpg"

	}

};

//========long script texts go here===========
var jacob_life = "Jacob is a highly eccentric psychiatrist. Brought up in Hawaii where his divorced father was stationed with the United States Navy, he spent most of his life there up to 30. He went to medical school at the University of Honolulu and studied psychotherapy. Living close to a native community, he had many local Hawaiian classmates who were familiar with alternative medicine and shamanism. They had a great influence on Jacob develops his own view on mental illness. Jacob spent most of his college education doing fieldwork in the South Pacific and South America, where he involved with European anthropologists conducting participant observation in semi-isolated aboriginal tribes. After earning their trust(at one point, Jocab even had an engagement with the daughter of a chief), he participated in their shamanistic rituals, and on one occasion, Jocab discovered this complex artifact always placed in the center of the ritual venue was in fact an 18-century-styled strongbox covered with dead native climbing plants. Later he had an opportunity to inspect the strongbox in detail, and extracted a treasure map from within…"

let script = {
	// The game starts here.
	"Start":[
		{"Conditional":{
			"Condition": function() {
				return Storage.get("playername") == null
			},
			"True": "jump Registry",
			"False": "jump Introduction"
		}}
	],
	"Registry":[
		"clear",
		"scene black with fadeIn",
		"Good to see you",
		{"Input":{
			"Text": "What's your name?",
			"Validation": function(input){
				return input.trim().length > 0;
			},
			"Save":function(input){
				Storage.set("playername", input);
				storage.player.name = input;
				return true;
			},
			"Warning": "We can't let an anoynumous traveller wander this place! So please tell us you name."
		}},
		"jump Introduction"
	],

	"Introduction":[
		"clear",
		"scene #333 with fadeIn",
		 function(){
	    	storage.player.name = Storage.get("playername");
	    },
	    `centered ${jacob_life}`
	]	
};