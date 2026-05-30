//Reverse order of words in given sentence
const sentence = "Reverse order of words in given sentence";
console.log(sentence);
let n_sentence = "";
let start = 0;
for (let i = 0; i < sentence.length; i++) {
   
    if (sentence[i] === " ") {
        n_sentence = sentence.slice(start,i) + " " + n_sentence;
         start = i + 1;
    }
   
    
}
 n_sentence = sentence.slice(start) + " " + n_sentence
console.log(n_sentence);
