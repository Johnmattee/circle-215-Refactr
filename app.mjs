function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
    

let input = document.getElementById('input');
let search = document.getElementById("search");
let replace = document.getElementById("replace");
let btn = document.getElementById("btn");
let stat = document.getElementById("stat");
let output = document.querySelector(".output");

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function change(text, word, char) {
    let arr = word.split(" ");
    for (let i of arr) {
        if (i == " " || !i) {
            continue;
        }
        i = escapeRegExp(i);
        let reg = new RegExp(i, 'ig');

        if (char.match(/\s/) || !char) {
            char = '***';
        }

        text = text.replace(reg, char);
    }

    return text;
}

function getWords(text) {
    let arr = text.split(" ");
    let count = 0;
    for (let item of arr) {
        if (item == " " || !item) {
            continue
        }
        count += 1;
    }
    return count;
}

function wordsMatch(text, word) {
    let txt = text.toLowerCase();
    let wrd = word.toLowerCase();
    let arr = wrd.split(" ").filter(i => !i == ' ');
    let count = 0;
    for (let i of arr) {
        let sth = txt.split(i).length - 1;
        count += sth;
    }
    return count;
}

function getChar(text, word) {
    let txt = text.toLowerCase();
    let wrd = word.toLowerCase();
    let arr = wrd.split(" ").filter(i => !i == ' ');
    let count = 0;
    for (let i of arr) {
        let sth = txt.split(i).length - 1;
        let char = sth * i.length;
        count += char;
    }
    return count;
}


btn.addEventListener("click", (e) => {
    let text = input.value;
    let word = search.value;
    let char = replace.value;

    e.preventDefault();
    let start = performance.now();
    let newText = change(text, word, char);
    input.value = newText;
    let end = (performance.now() - start) / 1000;

    stat.addEventListener("click", (e) => {

        e.preventDefault();
        output.textContent = "";
        let words = getWords(text);
        let match = wordsMatch(text, word);
        let time = end.toFixed(3);
        let char = getChar(text, word);

        output.innerHTML = `
   <div>
    <p>words counted:${words} words</p>
    <p>words matched: ${match} words </p>
   <p> time taken to scramble: ${time} seconds </p>
   <p> characters scrambled: ${char} characters </p>
    `
    });
});
         
}
  
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //