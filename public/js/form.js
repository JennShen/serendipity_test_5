
var prompts = [
	"Share with the outside world: What made you smile today?",
	"Share with the outside world: What was the funniest thing that has happened to you today?",
	"Share with the outside world: Who makes you blush and your heart flutter?",
	"Share with the outside world: Describe your first crush.",
	"Share with the outside world: What kind of relationship do you have with your best friend?",
	"Share with the outside world: What was the best moment of your last relationship?",
	"Share with the outside world: If a psychic could tell you what will happen in the future, what would you want to know?",
	"Share with the outside world: What is the craziest thing that you’ve ever done?",
	"Share with the outside world: What is the best advice you’ve ever been given?",
	"Share with the outside world: What is your dream vacation and who would you take with you?",
	"Share with the outside world: What is one thing that you have yet to cross off your bucket list?",
	"Share with the outside world: What is your greatest endeavor in life so far?",
	"Share with the outside world: What was your favorite childhood memory and why?",
	"Share with the outside world: Who is your role model?",
	"Share with the outside world: What is your favorite travel memory and why?",
	"Share with the outside world: If you could imagine a perfect day, what would it entail?",
	"Share with the outside world: What was the last song that got stuck in your head?",
	"Share with the outside world: If you could invite anyone to a dinner party, who would it be?",
	"Share with the outside world: If you could have a superpower, what would it be?",
	"Share with the outside world: What about your life are you the most grateful for?",
	"Share with the outside world: Who would you bring on a deserted island and why?",
	"Share with the outside world: What do you see yourself doing in 5 years?",
	"Share with the outside world: Describe yourself in 5 adjectives.",
	"Share with the outside world: What was your favorite activity in kindergarten?",
	"Share with the outside world: What was your favorite recess activity?",
	"Share with the outside world: What was one thing you got away with when you were a child?",
	"Share with the outside world: Where does your dream wedding take place?",
	"Share with the outside world: How do you know you have found the one?",
	"Share with the outside world: Which movie character do you relate to the most and why?",
	"Share with the outside world: What is the most important characteristic that you find in a partner?",
	"Share with the outside world: Who do you think can help you survive a zombie apocalypse and how?",
	"Share with the outside world: Describe yourself in 5 nouns.",
	"Share with the outside world: What was the first thing you thought of today?",
	"Share with the outside world: What about your work are you passionate about?",
	"Share with the outside world: What do you see yourself doing in 10 years?",
	"Share with the outside world: Tell us something that makes you laugh out loud.",
	"Share with the outside world: What was a funny childhood memory?",
	"Share with the outside world: Which TV character do you like the most and why?",
	"Share with the outside world: What is one invention that you want to create?",
	"Share with the outside world: How would you change the world for the better?",
	"Share with the outside world: What is your zodiac and does it describe any of your characteristics?",
	"Share with the outside world: Describe yourself in 5 verbs.",
	"Share with the outside world: If you could spend the day with anyone in the world, who would it be?",
	"Share with the outside world: What keeps you going throughout the day?",
	"Share with the outside world: Who is your favorite fictional character and why?",
	"Share with the outside world: What is one TV show that you never miss any week and why?"
];

// var index = 0;

// for (var i = 0; i < prompts.length-1;i++) {
var i = 0;
	// Trump
	var promptSentence = prompts[i];

	// var promptDiv = document.createElement("h1");
	// promptDiv.style.position = "absolute";
	// promptDiv.style.left = 50;
	// promptDiv.style.top = 50;
	promptDiv.textContent = promptSentence;
	// promptDiv.style.animationDelay = (5 * (i+1)) + "s";
	// promptDiv.style.fontSize = 30 + "px";
	// document.body.appendChild(promptDiv);
	var socket = io();

	socket.on("connect", function() {
		console.log("Connected to socket server!");
	});

	var form = document.querySelector("form");
	// You can get access to elements within a form by using their name
	var messageInput = form.elements["message"];

	form.addEventListener("submit", function (event) {
		// Prevent the default submit behavior (e.g. refreshing the page)
		event.preventDefault();

		// Do whatever you want with the input here
		var message = messageInput.value;

		//search for bad words
		if(containsProfanity(message)){
   		 	//if found, alert("the answer contains bad words, please try again")
			//wipe out text in message field
			// alert("Your answer contains inappropriate words. Please enter another response.");
			// document.getElementById("promptDiv").innerHTML = "";
			// socket.emit("message", "improper answer");
	  //  		messageInput.value = "";

			// if (++i >= prompts.length){
			// 		i=0;
			// }
			// document.getElementById("promptDiv").innerHTML = prompts[i];
		}
		else {
			if(message != "" && message != " "){
			// alert("You have a good answer");
   			//else if not found, continue to send
   				alert("Thank you for sharing your response! Take a look outside to see if there is someone who has received your message.");

   				document.getElementById('sound2').play();

	   			socket.emit("message", message);

	   			// localStorage.setItem("message", message);

		
			}

			// if (++i >= prompts.length){
			// 		i=0;
			// }
			// document.getElementById("promptDiv").innerHTML = prompts[i];

		}
		messageInput.value = "";
		if (++i >= prompts.length){
					i=0;
			}
			document.getElementById("promptDiv").innerHTML = prompts[i];
		//if want to change prompt with or without bad words place above line here

		// Then when you are ready, send the message to the server. The first 
		// parameter is the name of the custom event. The second parameter is what
		// data you want to send along - it can be a string, number, object, etc.
	});

// extend strings with the method "contains"
String.prototype.contains = function(str) { return this.indexOf(str) != -1; };

// profanities of choice
var profanities = new Array(
"2 girls 1 cup",
"69",
"9/11",
"911",
"acrotomophilia",
"alabama hot pocket",
"alaskan pipeline",
"anal",
"anilingus",
"anus",
"apeshit",
"arsehole",
"ass",
"asshole",
"assmunch",
"auto erotic",
"autoerotic",
"babeland",
"baby batter",
"baby juice",
"ball gag",
"ball gravy",
"ball kicking",
"ball licking",
"ball sack",
"ball sucking",
"bangbros",
"bareback",
"barely legal",
"barenaked",
"bastard",
"bastardo",
"bastinado",
"bbw",
"bdsm",
"beaner",
"beaners",
"beaver cleaver",
"beaver lips",
"bestiality",
"big black",
"big breasts",
"big knockers",
"big tits",
"bimbos",
"birdlock",
"bitch",
"bitches",
"black cock",
"blonde action",
"blonde on blonde action",
"blowjob",
"blow job",
"blow your load",
"blue waffle",
"blumpkin",
"bollocks",
"bondage",
"boner",
"boob",
"boobs",
"booty call",
"brown showers",
"brunette action",
"bukkake",
"bulldyke",
"bullet vibe",
"bullshit",
"bung hole",
"bunghole",
"burqa",
"burka",
"busty",
"butt",
"buttcheeks",
"butthole",
"camel toe",
"camgirl",
"camslut",
"camwhore",
"carpet muncher",
"carpetmuncher",
"chink",
"chocolate rosebuds",
"circlejerk",
"cleveland steamer",
"clinton",
"clit",
"clitoris",
"clover clamps",
"clusterfuck",
"cock",
"cocks",
"coprolagnia",
"coprophilia",
"cornhole",
"coon",
"coons",
"crash",
"creampie",
"cum",
"cumming",
"cunnilingus",
"cunt",
"darkie",
"date rape",
"daterape",
"deep throat",
"deepthroat",
"dendrophilia",
"destroy",
"dick",
"die",
"dildo",
"dingleberry",
"dingleberries",
"dirty pillows",
"dirty sanchez",
"doggie style",
"doggiestyle",
"doggy style",
"doggystyle",
"dog style",
"dolcett",
"domination",
"dominatrix",
"dommes",
"don",
"donald",
"donkey punch",
"double dong",
"double penetration",
"dp action",
"dry hump",
"dvda",
"eat my ass",
"ecchi",
"ejaculation",
"erotic",
"erotism",
"escort",
"eunuch",
"faggot",
"fecal",
"felch",
"fellatio",
"feltch",
"female squirting",
"femdom",
"fifty shades of grey",
"figging",
"fingerbang",
"fingering",
"fire",
"fisting",
"foot fetish",
"footjob",
"frotting",
"fuck",
"fuck buttons",
"fuckin",
"fucking",
"fucktards",
"fudge packer",
"fudgepacker",
"futanari",
"gang bang",
"gay sex",
"genitals",
"giant cock",
"girl on",
"girl on top",
"girls gone wild",
"goatcx",
"goatse",
"god damn",
"gokkun",
"golden shower",
"goodpoop",
"goo girl",
"goregasm",
"grope",
"group sex",
"g-spot",
"guro",
"hand job",
"handjob",
"hard core",
"hardcore",
"hentai",
"hillary",
"hilary",
"hijab",
"homoerotic",
"honkey",
"hooker",
"hot carl",
"hot chick",
"how to kill",
"how to murder",
"huge fat",
"humping",
"incest",
"intercourse",
"jack off",
"jail bait",
"jailbait",
"jelly donut",
"jerk off",
"jigaboo",
"jiggaboo",
"jiggerboo",
"jizz",
"juggs",
"kike",
"kill",
"kinbaku",
"kinkster",
"kinky",
"knobbing",
"leather restraint",
"leather straight jacket",
"lemon party",
"lolita",
"lovemaking",
"love trumps hate",
"love still trumps hate",
"make love",
"make me come",
"male squirting",
"masturbate",
"menage a trois",
"milf",
"missionary position",
"motherfucker",
"mound of venus",
"mr hands",
"muff diver",
"muffdiving",
"murder",
"muslim",
"nambla",
"nasty",
"nawashi",
"negro",
"neonazi",
"nigga",
"nigger",
"nig nog",
"nimphomania",
"nine eleven",
"nipple",
"nipples",
"nsfw images",
"nude",
"nudity",
"nympho",
"nymphomania",
"obama",
"octopussy",
"omorashi",
"one cup two girls",
"one guy one jar",
"orgasm",
"orgy",
"paedophile",
"paki",
"panties",
"panty",
"pedobear",
"pedophile",
"pegging",
"penis",
"phone sex",
"piece of shit",
"pissing",
"piss pig",
"pisspig",
"playboy",
"pleasure chest",
"pole smoker",
"ponyplay",
"poof",
"poon",
"poontang",
"punany",
"poop chute",
"poopchute",
"porn",
"porno",
"pornography",
"prince albert piercing",
"pthc",
"pubes",
"pussy",
"queaf",
"queef",
"quim",
"raghead",
"raging boner",
"rape",
"raping",
"rapist",
"rectum",
"reverse cowgirl",
"rimjob",
"rimming",
"rosy palm",
"rosy palm and her 5 sisters",
"rusty trombone",
"sadism",
"santorum",
"scat",
"schlong",
"scissoring",
"semen",
"sex",
"sexo",
"sexy",
"shaved beaver",
"shaved pussy",
"shemale",
"shibari",
"shit",
"shitblimp",
"shitty",
"shota",
"shrimping",
"sixty nine",
"skeet",
"slanteye",
"slut",
"s&m",
"s and m",
"sandm",
"smut",
"snatch",
"snowballing",
"sodomize",
"sodomy",
"spic",
"splooge",
"splooge moose",
"spooge",
"spread legs",
"spunk",
"strap on",
"strapon",
"strappado",
"strip club",
"style doggy",
"suck",
"sucks",
"suicide girls",
"sultry women",
"swastika",
"swinger",
"tainted love",
"taste my",
"tea bagging",
"threesome",
"throating",
"tied up",
"tight white",
"tit",
"tits",
"titties",
"titty",
"tongue in a",
"topless",
"tosser",
"towelhead",
"tranny",
"tribadism",
"trump",
"trumps",
"tub girl",
"tubgirl",
"tushy",
"twat",
"twink",
"twinkie",
"two girls one cup",
"undressing",
"upskirt",
"urethra play",
"urophilia",
"vagina",
"venus mound",
"vibrator",
"violet wand",
"vorarephilia",
"voyeur",
"vulva",
"wank",
"wetback",
"wet dream",
"white power",
"wrapping men",
"wrinkled starfish",
"xx",
"xxx",
"yaoi",
"yellow showers",
"yiffy",
"zoophilia"
);

function containsProfanity(text){
	var str = text.replace(/[^A-Za-z 0-9 \.,\?""\^&\(\)_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    var returnVal = false; 
    for (var i = 0; i < profanities.length; i++) {
        if(str.toLowerCase().contains(profanities[i].toLowerCase())){
            returnVal = true;
            break;
        }
    }
    return returnVal;
}



// }


