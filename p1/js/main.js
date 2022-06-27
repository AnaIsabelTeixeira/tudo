  let clicks = 0;

$(".activebutton").mouseenter(function() {$( ".activebutton" ).effect( "shake", "slow" );});

$("button").click(function() {
    if (clicks == 0){
		$("video").attr("src", "img/vid3.mp4");  
		$("header").css("cursor", "help");
		$("button").css("cursor", "help");
		$("body").css("cursor", "help");
		$("#tag").html("[13:44, 15/01/2022] have you ever met one of these? they have fabulous feet");
	} else if ( clicks == 1){
		$("video").hide();
    	$("header").css("cursor", "help");
		$("button").removeClass("activebutton");
		$(".txt1").show();
		$("#tag").hide();
		$(".thisimg").show();
		$("header").css({
			"background-image":"none",
			"height":"auto",
			"width":"calc(100vw - 30px)",
		});
		$("button").html("░╬ڿڰۣ—░");
		$("button").css("z-index", "-100");
		$("button").addClass("nohover");
	}
    ++clicks;
});

const hovercolors = ["#ff0066", "#ff0000", "#0000ff", "#ff6600", "#6600ff", "#00ff00"];

$(".txt1").mouseenter(function() {
	const hovercolor = hovercolors.shift();
    document.documentElement.style.setProperty("--hover-color", hovercolor);
    hovercolors.push(hovercolor);
});

$(".txt2").mouseenter(function() {
	$(this).effect("bounce", "4000");
});

let timeout;

$(".thisimg").mouseenter(function(){
	$("header").attr("id", "newworldheader");
	$(".txt1").attr("id", "hide");
	$(this).css("cursor", "grab");
	$(this).draggable();
	timeout = setTimeout(showLast, 20000);
});

$(".thisimg").click(function(){
	$(".thisimg")
	.clone()
	.appendTo( "#firstdiv" )
	.attr("class", "thisimg")
	.css({
		position: "absolute",
		left: ((Math.random() * window.outerWidth) - 800) , 
		top: ((Math.random() * $("header").height()) - 200)})
	.draggable()
});

function showLast() {
	$("#secdiv").fadeIn("slow");
}

/*

  let verbs, nouns, adjectives, adverbs, preposition;

nouns = ["sunset", "sunlight", "star", "responsibility", "residuum", "flare", "dusk", "gentleness", "betelgeuse", "body", "scintillation", "nebula", "glow", "luminescence", "spark", "colour", "galaxy", "sky", "supernova", "periapsis", "time", "perihelion", "heliopause", "sunspot", "moon", "planet", "insolation", "shade", "thing", "starhood", "face", "pattern", "night", "morning", "birth", "aurora", "quiet", "cloud", "dawn", "comet", "rise", "particle", "beam", "destruction", "light", "tear", "day", "sunray", "relief", "wind", "constellation", "luminosity"]; //50

verbs = ["radiates", "warms", "embraces", "holds", "protects", "brings", "creates", "caresses", "carries", "explodes", "saves", "sensors", "matches", "creates", "contacts", "wants", "chooses", "calls", "sings", "cries", "sighs", "crashes", "leaves", "watches", "observes", "meets", "begins", "ends", "delivers", "reminds", "sends", "offers", "rises", "protects", "builds", "urges", "exists", "sees", "feels", "senses", "learns", "appears", "mends", "remembers", "hides", "steals", "abuses", "writes", "subdues", "discloses"]; //50

adjectives = ["fluorescent", "gentle", "great", "bluish", "magnetic", "sensitive", "radiant", "docile", "comforting", "slow", "lazy", "faded", "quiet", "distant", "warm", "noble", "serene", "absent", "lenient", "clear", "dreary", "grim", "graceful", "blind", "majestic", "faint", "downcast", "burnished", "reddish", "fulgent", "lucent", "opalescent", "golden", "gleaming", "luminous", "pearlescent", "discreet", "soft", "tender", "dull", "mellow", "velvet", "delicate", "murmurous", "languid", "susurrous", "unctuous", "balmy", "strident", "subdued"]; //50 

adverbs = ["periodically", "gently", "carefully", "softly", "graciously", "quietly", "thoughtfully", "clemently", "wholy", "lazily", "purosefully", "thoroughly", "cautiously", "mindfully", "prudently", "legally", "precisely", "warmly", "frigidly", "frivolously", "honestly", "properly", "regularly", "directly", "frequently", "privately", "safely", "completely", "warily", "diligently", "slowly", "sluggishly", "densely", "continuously", "gradually", "fluidly", "swiftly", "rapidly", "weakly", "melodically", "strongly", "stridently", "personally", "dimly", "soothingly", "mellowly", "noiselessly", "stilly", "momentously", "suddenly"]; //50, 20

preposition = ["down", "into", "up", "on", "upon", "below", "above", "about", "around", "through", "across", "towards", "in", "at", "to", "beside", "over", "across", "from"]; //19

function randGen() {
	return Math.floor(Math.random() * 5);
}

function sentence() {
	let rand1 = Math.floor(Math.random() * 50), 
		rand2 = Math.floor(Math.random() * 50), 
		rand3 = Math.floor(Math.random() * 50),
		rand4 = Math.floor(Math.random() * 50),
		rand5 = Math.floor(Math.random() * 50),
		rand6 = Math.floor(Math.random() * 50),
		rand7 = Math.floor(Math.random() * 50),
		rand8 = Math.floor(Math.random() * 50),
		rand9 = Math.floor(Math.random() * 50),
		rand10 = Math.floor(Math.random() * 50),
		rand11 = Math.floor(Math.random() * 50),
		rand12 = Math.floor(Math.random() * 50),
		rand13 = Math.floor(Math.random() * 50), 
		rand14 = Math.floor(Math.random() * 50),
		rand15 = Math.floor(Math.random() * 50),
		rand16 = Math.floor(Math.random() * 50),
		rand17 = Math.floor(Math.random() * 19),
		rand18 = Math.floor(Math.random() * 19),
		rand19 = Math.floor(Math.random() * 19),
		rand20 = Math.floor(Math.random() * 19),
		randphrase1 = Math.floor(Math.random() * 20), 
		randphrase2 = Math.floor(Math.random() * 20),
		randphrase3 = Math.floor(Math.random() * 20), 
		randphrase4 = Math.floor(Math.random() * 20), 
		randphrase5 = Math.floor(Math.random() * 20), 
		randphrase6 = Math.floor(Math.random() * 20), 
		randphrase7 = Math.floor(Math.random() * 20), 
		randphrase8 = Math.floor(Math.random() * 20), 
		randphrase9 = Math.floor(Math.random() * 20),
		randphrase10 = Math.floor(Math.random() * 20),
		randphrase11 = Math.floor(Math.random() * 20),
		randphrase12 = Math.floor(Math.random() * 20),
		randphrase13 = Math.floor(Math.random() * 20),
		randphrase14 = Math.floor(Math.random() * 20),
		randphrase15 = Math.floor(Math.random() * 20);
	
	sintax = ["The " + adjectives[rand1] + " " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " a " + nouns[rand2] + " " + "because the " + nouns[rand3] + " " + adverbs[rand2] + " " + verbs[rand2] + " " + preposition[rand17] + " a " + adjectives[rand2] + " " + nouns[rand4] + " which" + " " + verbs[rand3] + " a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand5] + ".", 
			  "So the " + nouns[rand6] + " " + adverbs[rand3] + " " + verbs[rand4] + " the " + adjectives[rand5] + " " + nouns[rand7] + " " + preposition[rand18] + " the " + nouns[rand8] + ".", 
			  "Why is it that a " + nouns[rand9] + " " + verbs[rand5] + " " + nouns[rand10] + " so " + adverbs[rand4] + "?", 
			  "And " + preposition[rand19] + " the " + nouns[rand11] + ", there is a " + adjectives[rand7] + " " + nouns[rand12] + ", and the " + nouns[rand12] + " " + verbs[rand6] + " the " + adjectives[rand8] + " " + nouns[rand13] + ".", 
			  "The " + nouns[rand6] + " wishes it was a " + nouns[rand9] + ".",
			  "A " + nouns[rand20] + " is a " + nouns[rand10] + ".",
			  "A " + nouns[rand1] + "!", 
			  "A " + nouns[rand2] + "!", 
			  "A " + nouns[rand3] + "!", 
			  "Is it a " + nouns[rand3] + " or is it a " + nouns[rand20] + "?",
			  "Are you a " + nouns [rand17] + "?",
			  "So " + adjectives[rand10] + "!",
			  "Do you feel " + adjectives[rand11] + "?",
			  "It feels " + adjectives[rand13] + ".",
			  "Are we " + adjectives[rand12] + "?", 
			  "Maybe it's " + adjectives[rand14] + ".",
			  "The " + nouns[rand20] + " " + verbs[rand11] + ".",
			  "Oh, " + adverbs[rand16] + ", " + adverbs[rand18] + ", " + adverbs[rand19] + "...",
			  "It " + verbs[rand8] + ", " + verbs[rand9] + " and " + verbs[rand10] + ".", 
			  "A " + adverbs[rand5] + ", " + adverbs[rand6] + " " + adjectives[rand9] + " " + nouns[rand14] + " " + verbs[rand7] + " " + nouns[rand15] + " " + preposition[rand20] + " the " + nouns[rand16] + "."];//18
	
	return sintax[randphrase1] + " " + sintax[randphrase2] + " " + sintax[randphrase3] + " " + sintax[randphrase4] + " " + sintax[randphrase5] + " " + sintax[randphrase6] + " " + sintax[randphrase7] + " " + sintax[randphrase8] + " " + sintax[randphrase9] + " " + sintax[randphrase10] + " " + sintax[randphrase11] + " " + sintax[randphrase12] + " " + sintax[randphrase13] + " " + sintax[randphrase3] + " " + sintax[randphrase6] + " " + sintax[randphrase9] + " " + sintax[randphrase12] + " " + sintax[randphrase13] + " " + sintax[randphrase14] + " " + sintax[randphrase15];
};

//I globally declared variables such as maxWords (maximum of words on screen), interval (time elapsed between each word), the content (the content of the poem, in this case, sentence(), which we prepared previously), as well as variables relating to the SPEED DETECTOR  newWeight (corresponding to the value of mouse speed) newStretch (corresponding to the value of mouse accelaration, in this context, accelaration is the difference between the latest speed value and the previous speed value), maxSpeed, prevSpeed, maxPositiveAcc, maxNegativeAcc (these are declared so we can later determine the percentage of speed and accelaration and reflect these percentages in the weight and width of the font correctly). 

let maxWords = sentence().length;
let interval = 80;
let time = 0;
let words = document.getElementsByClassName("word");
let word = words[0];
let content = sentence();

console.log(content);
*/