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
	"Need_more_detail":{
        "Title": "<span style='color:black'><b>Development note</b></span>",
        "Subtitle": "<span style='color:red'>Attention!</span>",
        "Message": `<div><p style='color:black'>Further details/dialog development required</p></div>`
    },
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	},
	"Need_more_detail":{
        title: "Development note",
        body: "Further details/dialog development required",
        icon: "img/icons/icon_48x48.png"
    },
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
	"door": "door.jpg"
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


var utils = {
	"more_detail": function(){
		let dialog_box = document.querySelector("[data-ui='text']");
		dialog_box.style.backgroundColor = "#e35959"
	}
}

//========long script texts go here===========
/**===========================================
 *I N D E X
 *============================================
 *1) Character set
 *2) Tutorial&Instruction
 *3) Dialog
 *4) Narration
*/

/**
 * ============================================
 *	Character set
 * ============================================
**/
var jacob_life = "Jacob is a highly eccentric psychiatrist. Brought up in Hawaii where his divorced father was stationed with the United States Navy, he spent most of his life there up to 30. He went to medical school at the University of Honolulu and studied psychotherapy. Living close to a native community, he had many local Hawaiian classmates who were familiar with alternative medicine and shamanism. They had a great influence on Jacob develops his own view on mental illness. Jacob spent most of his college education doing fieldwork in the South Pacific and South America, where he involved with European anthropologists conducting participant observation in semi-isolated aboriginal tribes. After earning their trust(at one point, Jocab even had an engagement with the daughter of a chief), he participated in their shamanistic rituals, and on one occasion, Jocab discovered this complex artifact always placed in the center of the ritual venue was in fact an 18-century-styled strongbox covered with dead native climbing plants. Later he had an opportunity to inspect the strongbox in detail, and extracted a treasure map from within…"

/**
 * ============================================
 *	Tutorial&Instruction
 * ============================================
**/
var intro_0 = "You are among a group of adventurers in search for a great treature which they call Uninnganeku. But you have heard one of them is an imposter who is going take away all the loot and kill those who get in the way…"

/**
 * ============================================
 *	Narration
 * ============================================
**/
var e_found_another_door = "Elizabeth called attention: there's also some clues on the wall and its says there was another small road near the door. It's up to you to choose where to go."
var go_no_further = "When Alexei opened the door, there was dirt covering a noticable sign. Sophia clears dirt on the sign and it appears as a warning: Go no further, stay back or die here."
var braun_hurts_sophia = "While following the route, they noticed the strange sound of an object or an animal in a distance. Braun suggest the group to walk behind him. The sound becomes louder step by step but nothing visible appeared. And then some mice appears, that freaks Braun out. While he's backing off, Braun accidentally hits and injures Sophia."
var bob_appease_on_disagreement = "After hours of wandering, you and your teammate start to face disagreement on which of the fork road to follow. Bob comes just on time and tells you to follow him so he can lead you to the treasure. Jacob feels suspicious on him, suggesting to let him do his shamanistic rituals to assure Bob is on his side, and wait for sophia instead."
var sophia_heal_herself_alone_and_murdered = "The healing process takes much time and it gets dark inside as outside. When everyone was distracted, thinking of what they can do with the treasure. Sophia screams once and turns silent from the next door. When you get inside, it was too late to save her. She was already dead and it's obvious that one of your teammate is the murderer."
var bob_urges_and_encounter_cerberus = "Despite you walking a long way already, Bob is constantly urging you and your teammates to walk quicker. Suddenly, Multi-headed giant dog, just like Cerberus the greek monster, appears from the other end of the road. He seems to already pick up on your presence, as he started barking and the ruins starts to crumble. Braun is the only person felt excited about the existance of this kind of creature. That creature was right in front you, glaring with his red eyes like a hunter looking at his preys."

/**
 * ============================================
 *	Ending
 * ============================================
**/
var game_over0 = "you barely get out of the ruin and find yourself alive. Unfortunately, your teammates are all dead in that mad dog's hand . What's more, the whole ruin is gone to plies of rocks and ashes, burying your teamates, the treasure, and the truth upon the relic. All you can do now is went back to the villlage and wait for the next ship to arrive desperately"


let script = {
	// The game starts here.
	// "English":{
	"Start":[

		"notify Welcome",
		function(){
	    	storage.player.name = Storage.get("playername");
	    },
	    "Come on, you are late. They've waiting for you.",
		{"Conditional":{
			"Condition": function() {
				return storage.player.name !== null
			},
			"True": {
				"Choice": {
					"Text": "It seems you have already been through the adventure, do you wish to change your name?",
					"Skip": {
						"Text": "Change my name",
						"Do": "jump Registry"
					},
					"Continue":{
						"Text":"Restart my adventure straight away",
						"Do": "jump Introduction"
					}
				}

			},
			"False": "jump Registry"
		}}
	],
	"Registry":[
		"clear",
		"scene black with fadeIn",
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
		"scene #333 with fadeIn",
	    `centered ${intro_0}`,
	    "jump Door"
	],
	"Door":[
		"scene door",
		"j This must be the entrance.",
		{"Choice":{
		    "Open":{
		    	"Text":"Open the door",
				"Do": "jump Locked_door"
			}
		}}
	],
	"Locked_door":[
		"scene #111 with fadeIn",
	    "Going down the narrow corridor, you arrive in front of another door",
		"y It's locked.",
		"a Let me try",
		`${e_found_another_door}`,
		"display message Need_more_detail",
		{"Choice":{
		    "Let Alexi":{
		    	"Text":"Let Alexi",
				"Do": "jump Alexi_branch1"
			},
			"Use Route":{
		    	"Text":"Use Route",
				"Do": "jump Use_route_branch"
			},
		}},
		"end"
	],
	"Use_route_branch":[
		"Use_route_branch",
		"end"
	],
	"Alexi_branch1":[
		`${go_no_further}`,
		{"Choice":{
		    "Turn back":{
		    	"Text":"Turn back and use the other route",
				"Do": "jump Use_route_branch"
			},
			"Continue":{
		    	"Text":"Follow this route",
				"Do": `${braun_hurts_sophia}`
			},
		}},
		"display message Need_more_detail",
		{"Choice":{
		    "Leave Sophia":{
		    	"Text":"Leave Sohpia",
				"Do": "jump Leave_sophia_0"
			},
			"Wait Sophia":{
		    	"Text":"Wait Sophia",
				"Do": "jump Wait_sophia_0"
			},
		}}
	],

	"Leave_sophia_0":[
		`centered ${bob_appease_on_disagreement}`,
		"display message Need_more_detail",
		{"Choice":{
		    "Let Jacob do ritual":{
		    	"Text":"Let Jacob do ritual",
				"Do": "jump Wait_sophia_0" //back to Wait_sophia_0
			},
			"Let Bob lead you to treasure":{
		    	"Text":"Let Bob show the way",
				"Do": "jump Leave_sophia_1" //believe in Bob
			},
		}}
	],
	"Wait_sophia_0":[
		`centered ${sophia_heal_herself_alone_and_murdered}`,
		"display message Need_more_detail",
	],
	"Leave_sophia_1":[
		`centered ${bob_urges_and_encounter_cerberus}`,
		"display message Need_more_detail",
		{"Choice":{
		    "Go back to the door and save your life":{
		    	"Text":"Run for your life",
				"Do": "jump Game_over0" //back to Wait_sophia_0
			},
			"Decide to fight but it may cost someone's life":{
		    	"Text":"Fight Cerberus",
				"Do": "jump Leave_sophia_1" //believe in Bob
			},
		}}
	],
	"Game_over0":[
		`centered ${game_over0}`,
		"display message Need_more_detail",
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	]
};