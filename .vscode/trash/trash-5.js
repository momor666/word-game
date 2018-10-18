let field = new Field(),
    data = new Data(),
    app = new App();

function App() {
    let usedWords = [],
        spellId = 1,
        score,
        final,
        new_score;
}

let text_box1 = document.getElementById('text_box1'),
    text_box2 = document.getElementById('text_box2'),
    text_box3 = document.getElementById('text_box3'),
    text_box4 = document.getElementById('text_box4'),
    text_box5 = document.getElementById('text_box5'),
    text_box6 = document.getElementById('text_box6');




function button(id) {
    return document.getElementById(id);
}

function textBox(id) {
    return document.getElementById(id);
}

function setScore(main_score) {
    app.score = main_score;
}

function getScore() {
    return app.score;
}

function scores(in_score) {
    document.getElementById('score').innerText = in_score;
    console.log(in_score)
}

function wordLoop(random, i) {
    var id = i + 1,
        button;
    button = document.createElement('button');
    //console.log(data.array.six[random]);
    button.setAttribute('class', 'btn-primary g-btn');
    button.setAttribute('id', 'btn_' + id);
    document.getElementById('btn-area').appendChild(button);
    //console.log("button create with id ", id);
    button.onclick = executeEvent('btn_' + id);
    button.innerText = data.array.six[random][i].toString().toUpperCase();
}

function getWords() {
    var data = new Data(),
        min = Math.ceil(0),
        max = Math.floor(data.array.six.length),
        random = Math.floor(Math.random() * (max - min));

    if (usedWords.includes(random)) {
        console.log('cant proceed with this', random, usedWords);
        new_score = getScore() + 3;
        scores(new_score);
        random = Math.floor(Math.random() * (max - min));
        for (var i = 0; i < data.array.six[random].length; i++) {
            wordLoop(random, i);
        }

    } else {
        for (var i = 0; i < data.array.six[random].length; i++) {
            wordLoop(random, i);

        }
        usedWords.push(random);
        console.log('word has been used', random, usedWords);
    }
    setScore(new_score);

}

function checkWord() {
    console.log(getScore())
    var word = text_box1.value + text_box2.value + text_box3.value + text_box4.value + text_box5.value + text_box6.value;
    var check = word.toString();
    if (data.array.six.includes(check.toLowerCase())) {
        setScore(100);
        clear();
        let fin = getWords() + 10;
        scores(fin)
        console.log("current score value : ", getScore())
    } else {
        clear();
        console.log('falied')
        return false;
    }

}


function clear() {
    for (var i = 0; i < 6; i++) {
        var id = i + 1;
        textBox('text_box' + id).value = "";
    }

}


function spellWord(id) {
    if (field.isEmpty(text_box1.value)) {
        text_box1.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box2.value)) {
        text_box2.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box3.value)) {
        text_box3.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box4.value)) {
        text_box4.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box5.value)) {
        text_box5.value = button(id).innerText;
        button(id).style.display = "none";
    } else if (field.isEmpty(text_box6.value)) {
        text_box6.value = button(id).innerText;
        button(id).style.display = "none";
        removeBtn();
        checkWord();
    }
}


function clickButton(id) {
    button(id).addEventListener('click', function() {
        spellWord(id);
    });
}

function executeEvent(id) {
    switch (id) {
        case 'btn_1':
            clickButton(id);
            break;
        case 'btn_2':
            clickButton(id);
            break;
        case 'btn_3':
            clickButton(id);
            break;
        case 'btn_4':
            clickButton(id);
            break;
        case 'btn_5':
            clickButton(id);
            break;
        case 'btn_6':
            clickButton(id);
            break;

        default:
            break;
    }
}

function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}


function removeBtn() {
    for (var i = 0; i < 6; i++) {
        var id = i + 1;
        button('btn_' + id).remove();
    }
}

function reset() {
    for (var i = 0; i < 6; i++) {
        var id = i + 1;
        button('btn_' + id).style.display = "inline-block";
    }
}

button("reset").onclick = function() {
    reset();
    clear();
}

button("hint").onclick = function() {
    spellWord('btn_' + spellId)
    spellId++;
}

button("quit").onclick = function() {
    removeBtn();
    clear();
}

button("home").onclick = function() {
    removeBtn();
    getWords();
    clear();
}

getWords();