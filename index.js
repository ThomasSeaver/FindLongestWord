var fs = require('fs');

console.time("mine");

var dictionary = JSON.parse(fs.readFileSync('words_dictionary.json', 'utf8'));
var cursed =/[rlvw]/;
var cursedstr = "rlvw";
var strRay = [''];
var ratRay = [0];
for(var key in dictionary) {
	var string = key;
	if (string.match(cursed)) {
       	var count = 0;
       	for (var i = 0; i < string.length; i++) {
       		if (cursedstr.includes(string.charAt(i))) {
       			count = count + 1;
       		}
       	}
       	var ratio = (count/string.length);
       	if (ratio > ratRay[ratRay.length - 1]) {
       		for (var i = 0; i < ratRay.length; i++) {
       			if (ratio > ratRay[i]) {
       				ratRay.splice(i, 0, ratio);
       				strRay.splice(i, 0, string);
       				break;
       			}
       		}
       	}
	}
}
var choice = "";
for (var i = 0; i < ratRay.length; i++) {
	choice += ((i + 1) + ": " + strRay[i] + " ; " + ratRay[i] + "\n");
}
fs.writeFile('cursed.txt', choice, (err) => {
	console.log('baboom');
});


var words = fs.readFileSync("words.txt").toString();
words = words.split("\n");
var badLetters =/[gkmqvwxioz]/;
var longestAcceptableWord ="";
for(var testWord of words) {

	if(testWord.length <= longestAcceptableWord.length) {
		continue;
	}
	if(testWord.match(badLetters)) { 
        continue;
	}

	longestAcceptableWord = testWord;
}

console.log(longestAcceptableWord);


