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
	"door": "door.jpg",
	"light_in_the_distance": "dark_tunnel_leading_to_light.jpeg"
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
		"Face": "Jacob.png"		
	},
	"e":{
	  	"Name": "Elizabeth",
		"Color": "#FAB340",
		"Face": "Elizabeth.png"	
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
		"Face": "Braun.png"
	},
	"Sh":{
		"Name": "Shark",
		"Color": "#42e0f5",
		"Face": "Shark.png"
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
var sophia_sacrificed = "He points his finger at Sophia, and she faints out. He makes a gesture to smash his fist towards his front. Sophia's body goes forward toward the walls and disappears into the walls. Just after that, one of the walls collapses."
var immense_mirror = "As expected, an immense mirror blocked your way, with a statue of an old man holding a precious stone beside, pointing toward the dragon in the mirror. The mirror reflexes a form of a dragon, and looks like the vicious dragon is about to rush out..."
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

var route_branch_he1 = "You guys bring the treasure back to the city and publishs the result of your research to the world. 3 of you shares the profit from the uninnganeku and become best friends."
let script = {
	// The game starts here.
	// "English":{
	"Start":[
		function(){
	    	storage.player.name = Storage.get("playername");
	    },
	    "j Come on, you are late. We've been waiting for you.",
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
		{"Choice":{
			"Text":"But you can't see anything there. Because there isn't any light.", 
		    "reach for the flashlight in your backpack and traverse the dark path":{
		    	"Text":"Rummage through your backpack",
				"Do": "Rummaging through the backpack, you feel something cylindrical with a cold metalic touch."
			},
			"Turn back":{
		    	"Text":"Turn back and use the other route",
				"Do": "jump Alexi_branch1"
			},
		}},
		"y It is a flashlight, O口O!",
		"s Wait for me!",
		"It seems that Sophia has come through as well. ",
		"display message Need_more_detail",
		"Walking though the dark, finally you can see an exit that transmitted the sun light, which illuminated the route before you. Your eyes met each other and smiled, Sophia's innocent smile alleviates all of the stress.",
		"centered While you are about to leave the structure, it suddenlly started collapsing.",
		"centered You get trapped inside a dark chamber.",
		//Script writes an old man here. But I changed it to Bob
		"centered An old man appeared with a wind.",
		"b I'm glad you've found the right route, {{player.name}}. But you are now bounded forever in the stucture, because you left all your teammate alone",
		"b My power is not enough to remove the curse, but I think a native Uninngamisia might save the situation.",
		"centered His voice faltered, waiting for you to decide......",
		"s If... this is the only way to save your life......",
		"centered You see Sophia bursts into tears",
		"s Then... please do it... I'm prepared to sacrifie my life for you.", //"you" was "everyone"
		"display message Need_more_detail",
		{"Choice":{
			"leave the ruin":{
				//Want to leave the ruin.sacrifice Sophia as a offering to the hell.<span style="color:red"<b>(a fresh heart of an islander can have a power to save the situation), 
		    	"Text":"Sacrifice Sophia so you can leave the ruin",
				"Do": "You decide to sacrifice Sophia as an offering to the hell. It is said that a fresh heart of an islander can have a power to save the situation.",
			},
			"stay with Sophia (refuse to sacrifice her)":{
		    	"Text":"Refuse to sacrifice Sophia and stay with her", //stay with Sophia
				"Do": "jump Game_over5"
			}
		}},
		"The old man nodded.",
		"b Well then, I should let her pass away peacefully. Your noble sacrifice will forever be remember by us, young lady.",
		`centered ${sophia_sacrificed}`,
		"B Oh I found the leader!!",
		"B Where have you been? We had a hard time looking for you!",
		"centered  All of your partners are worried about you, as if nothing had happened. No one seems to remember the fact that you forsake them.",
		"j According to the map, now we're in a dangerous zone",
		"An uncomfortable breeze gets you goose bumps, the path is so quiet that you can only hear echoes and the wind.",
		`centered ${immense_mirror}`,
		{"Choice":{
			"throw a rock into the mirror":{
				//Want to leave the ruin.sacrifice Sophia as a offering to the hell(a fresh heart of an islander can have a power to save the situation), 
		    	"Text":"throw a rock into the mirror",
				"Do":  "The dragon shrinks to an Asian Arowana and loses its original strength."
			},
			"jump into the mirror":{
		    	"Text":"jump into the mirror", 
				"Do": "jump Use_route_branch1"
			}
		}},
		"centered The mirror is replaced by an aisle, you walk through it.",
		"A river appears into the view.",
		"j It seems like we have entered Uninnganekarst, we have to follow the stream.",
		"j The undergound river leads to a huge lake. We are closer to the treasure.",
		"B Hey there is a boat.",
		"You turn and see Braun already sitting in the boat, swaying side to side.",
		"y Alright.",
		"centered The plain boat is so small and dilapidated that it's unstable and starts wobbling. It tilts toward Braun and starts losing balance. The boat is sinking.",
		"j Guys! Stay calm! We're gonna be OK!!",
		"centered Though Jacob tries to clam the group, the rest of the guys are struggling and trying to find the solution to save their lives",
		"During such a chaotic situation, you see Alexei and Elizabeth talking secretly.",
		{"Choice":{
			"discuss solution with Jacob":{
				//Want to leave the ruin.sacrifice Sophia as a offering to the hell(a fresh heart of an islander can have a power to save the situation), 
		    	"Text":"try to came up with alternate solution with Jacob",
				"Do":  "y Oh nooooo!!"
			},
			"push Braun off into water":{
		    	"Text":"push Braun off", 
				"Do": "jump Game_over6",
			}
		}},
		"You scream as you almost fall out of the boat. And you realize that's Alexei, whether he did it on purpose or not.",
		{"Choice":{
			//do nothing forgive Alexei 
			"do nothing forgive Alexei":{
		    	"Text":"Forgive him",
				"Do":  "The old man appears again. His pet cloud supports the tottering boat from capsizing."
			},
			//push both Elizabath and Alexei out of the boat (pretend it was an accident)
			"push both Elizabeth and Alexei into water":{
		    	"Text":"push Alexei and Elizabeth into water", 
				"Do": "jump Use_route_branch2",
			}
		}},
		"b Here is your a final warning: Be aware of an impostor among you.",
		{"Choice":{
			//believe in your teammates
			"believe in your teammates":{
		    	"Text":"believe in your teammates",
				"Do": "......"
			},
			//push both Elizabath and Alexei out of the boat (pretend it was an accident)
			"push both Elizabeth and Alexei into water":{
		    	"Text":"push Alexei and Elizabeth into water", 
				"Do": "jump Use_route_branch2",
			}
		}},
		"b Ugh......that's why I said the mortals are foolish....... whatever.",
		"b Uninnganekuwaholydesu...sagishiwaanatanonakaniimasu......",
		"He casts a spell on you, and leaves with a bit of a letdown on his face.",
		"The spell causes everyone to have the ability to breathe in the water, and equipped with a lantern-like organ on their head like an anglerfish to adapt to the dark underwater world.",
		"s Wow, I can breathe in the water now.",
		"e Yeah, and I feel like I'm sinking...",
		"Dark in the water, there is a matter sparkling, attracting everyone's attention.",
		"y This must be the treasure!",
		"Swimming closer, you find the glimmer originated from the keyhole of the treasure box.",
		"display message Need_more_detail",
		"j So now everyone should start looking for the key.",
		"Elizabeth approaches you with concern on her charming face, she lowers her voice and whispers...",
		"e Sorry to bring this up to you suddenly, but I am afraid your life would be threatened......",
		"e Alexei is a spy and hails from Soviet.",
		{"Choice":{
			//Thisis compulsory 
			"Text": "e He knows all of your weakness and even wants to push you off the boat before.",
		    //>>>>>>>>>>>NEEDS CHECK
		    "kill Alexei":{
		    	"Text":"Kill Alexei",
				"Do": "a Ehh......Beware of Elizabe......"
			}
		}},
		"centered The light in his eyes dies out and Alexei disappears in the dark. Elizabeth remain silence.",
		{"Choice":{
		    "Trust Elizabeth":{
		    	"Text":"Trust Elizabeth",
				"Do": "You trust Elizabeth."
			},
			"Kill Elizabeth":{
		    	"Text":"Kill Elizabeth",
				"Do": "jump Use_route_branch4"
			},
		}},
		"centered To assure Jacob on your trust, you suggested to work on finding the key of the box while split to two small teams to make it more effective. You go with Elizabeth.",
		"While you two are alone, Elizabeth burst into tears...",
		"e Thank you for trusting me...",
		"y ......",
		"She then tell the whole tory of her tragic childhood.",
		"e I have to find the treasure to pay my debts laid by others. I have no family and homeless. I was raised up in an orphanage...",

		"While listening to her story, you found the key. Suddenly, Elizabeth snatched the key and pierced it into your chest.",
		"As you slowly swallowed the the depth of the lake, you hear a voice.",
		"e From now on, no one could stop me......" //Game over. Bad ending.
	],

	//You killed Elizabeth believing in Alexei's word before his death
	"Use_route_branch4":[
		"You realize that Elizabeth is the mastermind who plans to kill others and takes away the treasure, so you decide to kill her.",
		"After that, Braun and Jacob and you work as a team, searching for the key.",
		"B How are we gonna find that tiny key in such a big area?",
		"j Sorry, my map got wet and I lost it when we were on the boat, I have no idea...",
		"centered A shark approaches toward you, Braun quikly switches on alert mode to protect you. Just as Braun is about to attack the huge shark...",
		"Sh Wait a minute, I'm not here to harm you, but to help good people.",
		"It starts speaking English with a humane tone.",
		"Sh Don't put any effort on finding the key! Any thing here, Uninngafakelake, is fake, the real one is on the land.",
		{"Choice":{
		    "let Braun turf it out":{
		    	"Text":"Let Braun turf it out",
				"Do": "You don't trust the shark. So you shoo it away. It leaves sadly and never appeared again."
			},
			"Trust it":{
		    	"Text":"Trust it",
				"Do": "jump Trust_shark"
			},
		}},
		"You search for the key non-stop but to no avail. In despair, you leave the ruin and abandon the mission." //GAME OVER. Bad Ending.	
	],
	"Trust_shark":[
		"The shark has flat teeth and eats plants for a living, in other word, it's a herbivore shark.",
		"Sh My mission is to bring fortune to good people, since we trust and respect each other, I will take you to Uninnganeku",
		"centered You get along with it, so the shark swallows you into its stomache, keeping you safe from the evil current in Uninngafakelake.",
		"Sh Well, good luck then. Please put my skull, Uninnganeku, to good use...",
		"centered The shark transforms into human form of the patron saint of the island.",
		"centered It puts you on the shore.",
		"jump Use_route_branch3"
	],
	"Use_route_branch2":[
		"After the two of them fell into the lake and disappeared, you explain to them your hypothesis and their actions while on the boat.",
		"display message Need_more_detail",
		"y I...I didn't know that there were such evil people in the group...",
		"y I'm sorry that I was always searching for clues or ways to find the treasure, and overlook the teamwork and mistrusts people...",
		"centered You, Braun and Jacob worked as a team had a great cooperation/teamwork on searching the treasure along the lake.",
		"jump Use_route_branch3"
	],
	//Happy ending
	"Use_route_branch3":[
		"centered You see Uninnganeku on the shore.",
		"j Is that......?!",
		"y ......Yeah, it is. Mission complete, let's go home.",
		"scene 770af5 fadeIn",
		`${route_branch_he1}`,
		"end"
	],
	"Game_over6":[
		"while Braun was struggling, he broke the boat, all of you died.",
		"scene #f5f10a with fadeIn",
		"GAME OVER",
		"end"
	],
	//inside immense_mirror
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
		"display message Need_more_detail",
		"centered You refuse the objection.",
		"b How pity...... Poor mortals. But with a good heart. Bless you for your next life.",
		"centered The old man disappeared.",
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
		`${braun_hurts_sophia1}`, 
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
		    	//Suspect Bob and kill Braun instead
		    	"Text":"Suspect Bob and kill Braun instead",
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