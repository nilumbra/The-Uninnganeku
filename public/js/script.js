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
var braun_hurts_sophia0 = "While following the route, you notice the strange sound of some beast in a distance. Braun suggest the group to walk behind him. The sound gets louder step by step but nothing visible appears."
var braun_hurts_sophia1 = "Out of the darkness ahead, an army of mice appears and charges at you. Braun freaks out. While he's backing off, he hits and injures Sophia."
var bob_appease_on_disagreement = "After hours of wandering, you and your teammate start to face disagreement on which of the fork road to follow. Bob comes just on time and tells you to follow him so he can lead you to the treasure. Jacob feels suspicious on him, suggesting to let him do his shamanistic rituals to assure Bob is on his side, and wait for sophia instead."
var sophia_heal_herself_alone_and_murdered = "The healing process takes much time and it gets dark inside as outside. When everyone was distracted, thinking of what they can do with the treasure. Sophia screams once and turns silent from the next door. When you get inside, it was too late to save her. She was already dead and it's obvious that one of your teammate is the murderer."
var bob_urges_and_encounter_cerberus = "Despite you walking a long way already, Bob is constantly urging you and your teammates to walk quicker. Suddenly, Multi-headed giant dog, just like Cerberus the greek monster, appears from the other end of the road. He seems to already pick up on your presence, as he started barking and the ruins starts to crumble. Braun is the only person felt excited about the existance of this kind of creature. That creature was right in front you, glaring with his red eyes like a hunter looking at his preys."
var alexie_and_braun_die_fighting_cerberus = "Multi-headed dog started chasing all of us. Braun caught and one of his head and broke it but other 2 heads torn Alexei down by half.  Though you guys managed to kill the beast, it costed Braun's and Alexei's lives during battle. Elizabeth comes from behind the stone and starts insisting you to kill Bob since he is the reason they went through this."
var he1_reunion = "After the reunion, 3 of you went back to the village. Along the way, Jacob and you are discussing about how to write and publish the papers upon your expedition, while Sophia is just humming while walking, and just being happy to have you together."

var everyone_suspects_braun = "While you're searching for the flashlight, everyone starts to suspect Braun as a murderer, since he was the first to injure Sophia. You don't want to lose another member in the hand of murder, and the group asked you to decide Braun guilty or not."
var bob_introduce_him_as_a_wise_man = "Bob introduce himselfas a old wise man, arrives as the dawn and Warns that someone other than Braun is the murderer and you have to be careful before you take action. "
var alexie_suggests_elizabeth_is_imposter = "Alexei tells your team that Elizabeth might be the impostor of this group cause he couldn't find out her background before this expedition. After hearing that, Elizabeth was upset and talks about her childhood story and how pity her life was. She starts crying and wants you to stay with her until she feels better."
var sophia_sacrificed = "He point his finger at Sophia, and she fainted out. He make a gesture to smash his fist towards his front, Sophia's body went forward toward the walls and disappeared inthe walls. Just after that, one of the wall collapsed."
var immense_mirror = "As expected,  an immense mirror blocked your way, with a statue of an old man holding a precious stone beside, pointing toward the dragon in the mirror. The mirror reflexes a form of a dragon, and looks like the vicious dragon is about to rush out..."
/**
 * ============================================
 *	Ending
 * ============================================
**/
var game_over0 = "you barely get out of the ruin and find yourself alive. Unfortunately, your teammates are all dead in that mad dog's hand . What's more, the whole ruin is gone to plies of rocks and ashes, burying your teamates, the treasure, and the truth upon the relic. All you can do now is went back to the villlage and wait for the next ship to arrive desperately"
var game_over1 = "You are going in front of her, suddenly something really hard hits your head. You couldn't realize what was going on and that hard thing hits you back and forth. Just before you crumbles to the ground, you realize Elizabeth was an impostor."
var game_over2 = "Someone prepared traps on your way, knowing that you would come by. By the moment you realize this, you are already in the trap. The blades cuts into limbs and you are bleeding terribly. You start to feel extremly fatigued. And slowly you lose consciousness and fall into an eternal slumber."//Far away from your teammates, you can't even make a sound as
//Braun fights against the team trying to kill him
var game_over3 = "As anyone else would do, Braun fights against the whole team alone as his struggle towards your action. Your mistake is that you forgot that you  guys are just like a few kids trying to beat up an adult. He kills everyone else for defending himself."

var game_over4 = 'While you are listening to her, she kills you before could notice with  a knife she hides in her clothes.'
var game_over5 = "After a long  period, Braun managed to clear the rocks, but he was too late. All he found was two bodies together under large chunks of rocks."

var fake_end = "The world suddenly forms to the same as you were from. And after that, you had great success to found uniganeku, you're obsessed with the joy of success. But no one in the group knows they are still in the world of mirror, trapped in an illusory universe that they will never able to get out."
let script = {
	// The game starts here.
	// "English":{
	"Start":[

		"notify Welcome",
		function(){
	    	storage.player.name = Storage.get("playername");
	    },
	    "b Come on, you are late. We've been waiting for you.",
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
		"display message Need_more_detail",
		`${e_found_another_door}`,
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
		"centered The road leads to a dead end. When you wanted to turn back, you spotted a small gap in the walls, barely enough for you and some other people with small figure to pass through.",
		{"Choice":{
		    "Slip through":{
		    	"Text":"Slip through the gap",
				"Do": "centered You decide to leave your companion and proceed alone."
			},
			"Turn back":{
		    	"Text":"Turn back and use the other route",
				"Do": "jump Alexi_branch1"
			},
		}},
		"centered But you can't see anything there. Because there isn't any light.",
		"display message Need_more_detail",
		{"Choice":{
		    "reach for the flashlight in your backpack and traverse the dark path":{
		    	"Text":"rummage through your backpack",
				"Do": "Rummaging through the backpack, you feel something cylindrical with a cold metalic touch."
			},
			"Turn back":{
		    	"Text":"Turn back and use the other route",
				"Do": "jump Alexi_branch1"
			},
		}},
		"y !!",
		"It is a flashlight.",
		"s Wait for me! ",
		"It seems that Sophia has come through as well. ",
		"display message Need_more_detail",
		"Walking though the dark, finally you can see an exit that transmitted the sun light, which illuminated the route before you. Your eyes met each other and smiled, Sophia's innocent smile help you relieved all of the stress.",
		"While you are about to leave the structure, it suddenlly started collapsing.",
		"centered You get trapped inside a dark chamber.",
		//Script writes an old man here. But I changed it to Bob
		"An old man appeared with a wind.",
		"b I'm glad you found the right route, {{player.name}}. But you are now bounded forever in the stucture, because you left all your teammate alone",
		"b My power is not enough to remove the curse, but I think a native Uninngamisian spell night save the situation.....",
		"His voice faltered, waiting for you to decide.",
		"s If... this is the only way to save your life......",
		"You see Sophia burst into tears",
		"s Than... please do it... I'm prepared to sacrifies my life for everyone.",
		"display message Need_more_detail",
		{"Choice":{
			"leave the ruin":{
				//Want to leave the ruin.sacrifice Sophia as a offering to the hell(a fresh heart of an islander can have a power to save the situation), 
		    	"Text":"Sacrifice Sophia so you can leave the ruin",
				"Do": "You decide to sacrifice Sophia as an offering to the hell(a fresh heart of an islander can have a power to save the situation)",
			},
			"stay with Sophia (refuse to sacrifice her)":{
		    	"Text":"refuse to sacrifice Sophia and stay with her", //stay with Sophia
				"Do": "jump Game_over5"
			}
		}},
		"The old man nodded.",
		"b Well then, I should let her pass away peacefully. Your noble sacrifice will forever be remember by us, young lady.",
		`centered ${sophia_sacrificed}`,
		"B Oh I found the leader!!",
		"B Where have you been? We had a hard time finding you!",
		"centered  All of your partners were worried about you, as if nothing had happened. No one seem to remember the fact that you forsake them.",
		"j According to the map, now we're in a dangerous zone",
		"An uncomfortable breeze get you goose bumps, the path was so quiet that you can only hear echoes and the wind.",
		`centered ${immense_mirror}`,
		{"Choice":{
			"throw a rock into the mirror":{
				//Want to leave the ruin.sacrifice Sophia as a offering to the hell(a fresh heart of an islander can have a power to save the situation), 
		    	"Text":"throw a rock into the mirror",
				"Do":  "The dragon shrinked to an Asian Arowana (a kind of fish) and loses its original strength."
			},
			"jump into the mirror":{
		    	"Text":"jump into the mirror", 
				"Do": "jump Use_route_branch1"
			}
		}},
		"To be continued...",
		"end"
	],
	"Use_route_branch1":[
		"Everyone was terrified except Braun.",
		"B Let me take over him...",
		"display message Need_more_detail",
		"He fights with the dragon and finds it is the one that could stand up to him, he fights till the last minute and dies with happiness.",
		"B Finally, an opponent that wouldn't let me down.......",
		"centered He finishes the sentence and passed away.",
		"display message Need_more_detail",
		"The crowd panicked and freaked out.",
		`centered ${fake_end}`,
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	],
	"Game_over5":[
		"centered Sophia comforts you.",
		"y I'll decide my own destiny. If there is a will, there's a way.",
		"You refuse the objection.",
		"b How pity...... Poor mortals. But with a good heart. Bless you for your next life.",
		"The old man disappeared.",
		"y Braun will be here in no time.",
		`${game_over5}`,
		"scene #f5f10a with fadeIn",
		"GAME OVER",
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
				"Do": `${braun_hurts_sophia0}`
			},
		}},
		"centered The ominously strange sound gets even clearer and louder",
		`braun_hurts_sophia1`, 
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
		"display message Need_more_detail",
		`centered ${bob_appease_on_disagreement}`,
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
		"display message Need_more_detail",
		`centered ${sophia_heal_herself_alone_and_murdered}`,
		{"Choice":{
		    "Freak out & run away":{
		    	"Text":"Run away",
				"Do": "jump Game_over2" 
			},
			"Calm down and search for flashlight from your backpack":{
		    	"Text":"Don't run away",
				"Do": "jump Wait_sophia_1" //
			},
		}}
	],
	"Game_over2":[
		"display message Need_more_detail",	
		`${game_over2}`,
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	],
	"Leave_sophia_1":[
		"display message Need_more_detail",
		`centered ${bob_urges_and_encounter_cerberus}`,
		{"Choice":{
		    "Go back to the door and save your life":{
		    	"Text":"Run for your life",
				"Do": "jump Game_over0" //back to Wait_sophia_0
			},
			"Decide to fight but it may cost someone's life":{
		    	"Text":"Fight Cerberus",
				"Do": "jump Leave_sophia_2" //
			},
		}}
	],
	"Game_over0":[
		"display message Need_more_detail",
		`centered ${game_over0}`,
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	],
	"Leave_sophia_2":[
		"display message Need_more_detail",
		`centered ${alexie_and_braun_die_fighting_cerberus}`,
		//Elizabeth demands killing Bob. Elizabeth or Bob?
		{"Choice":{
		    "Go with Jacob and Bob":{
		    	"Text":"Go with Jacob and Bob",
				"Do": "jump He1"
			},
			"Go with Elizabeth":{
		    	"Text":"Go with Elizabeth",
				"Do": "jump Game_over1"
			},
		}}
	],
	"He1":[
		"After such a long and horrible, you finally find the treasure over a hidden corridor.",
		"j The Uninnganeku...",
		"j How do you know this...",
		"j Who are you......!?",
		"Jacob exclaimed at the treasure, suddenly the skull-like treasure, Uninnganeku, shines with bright light and the ceiling of the relic turns into ashes and falls down to the ground slowly.",
		//Bob said
		"b Thank you for believing me, {{player.name}}",
		"You looked at Bob. He nows looks a lot younger and gorgeous.",
		"b The maze was the cell of my form and the skull is the key for retrieving my true god form. Only a mortal could activate it.", 
		"y .....",
		"b The Uninnganeku is now yours, use it whatever way you want. You had my blessings.",
		"(Bob disappeared in a bright light)",
		"y ......Sophia!",
		"You suddenly think of the girl you left and rush back with Jacob and the Uninnganeku, yelling her name.",
		"s {{player.name}}!",
		"Turning back, you saw Sophia running to you.",
		"scene 770af5 fadeIn",
		`centered ${he1_reunion}`,
		"end"
	],
	"Game_over1":[
		`${game_over1}`,
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	],
	"Wait_sophia_1":[
		`${everyone_suspects_braun}`,
		{"Choice":{
		    "vote for killing Braun":{
		    	"Text":"Braun should be killed",
				"Do": "jump Game_over3",
			},
			"Braun is innocent and decide to rest there and wait until the morning":{
		    	"Text":"Braun is innocent",
				"Do": "jump Wait_sophia_2"
			},
		}}
	],
	"Game_over3":[
		`${game_over3}`,
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	],
	"Wait_sophia_2":[
		"display message Need_more_detail",
		`${bob_introduce_him_as_a_wise_man}`,
		{"Choice":{
		    "dont believe in Bob":{
		    	"Text":"Suspect Bob",
				"Do": "jump Game_over3",
			},
			"Believe in Bob and continue journey":{
		    	"Text":"Believe in Bob",
				"Do": "jump Wait_sophia_3"
			},
		}}
	],
	"Wait_sophia_3":[
		"display message Need_more_detail",
		`centered ${alexie_suggests_elizabeth_is_imposter}`,
		{"Choice":{
		    "kill elizabeth":{
		    	"Text":"Kill Elizabeth",
				"Do": "jump Wait_sophia_4",
			},
			"stay with Elizabeth and listen her story":{
		    	"Text":"listen to Elizabteh's story",
				"Do": "jump Game_over4"
			},
		}}

	],
	"Wait_sophia_4":[
		"y Elizabeth is trying to lure us to lower our guard so she can kill us easily.",
		"j Braun, please don't let her feel any pain",
		"b For sure.",
		"In a sudden, Elisabeth loses her consciousness and Braun grabs her to another room, when he comes back, you see his arm is full of blood.",

		"You and the rest of the team proceed the expedition, and come in front of the big door",
		"b You are here. Now you just have to break the door and the treasure will be yours.",
		"With a 'poof', he disappears.",
		"But it's been late and you guys are tired from expedition and decide to rest tonight and continue tomorrow.",
		{"Choice":{
		    "take a good rest":{
		    	"Text":"Take rest",
				"Do": "Ahhhhhhhh!!!!!!!!!!!",
			}
		}},
		"The screaming wakes you up.",
		"Jacob freaks out upon Braun's head, which falls apart from his body. Alexei got a fatal injury, lying next to Braun.",
		"a 'Hah......now you\'re awake huh?......'",
		"a ...... I was hoping to get the treasure myself tho...... looks like my adventure stops here...... sorry, Natalia. Sorry, Sonya...... I can't save you from the Soviet...... I'm so sorry......",
		"His voice faltered, eyes becomes void.",
		"j ......Let's bury them up.", 
		"After buryimg both of them and days of hard work breaking the door, you finally opens the door, and the Uninnganeku lies on the middle of the room.",
		"j Did we......?",
		"y Yeah",
		"You pikced up the skull. It shimmers by the reflection of the flashlight.",
		"scene 770af5 fadeIn",
		"y It's all over, lets's go home.",
		"end"
	],
	"Game_over4":[
		"display message Need_more_detail",
		`${game_over4}`,
		"e 'From now on, no one could stop me. Ha ha ha. Ha ha ha ha ha ha.'",
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	]
};