window.addEventListener('DOMContentLoaded', bunny, false);

function bunny() {
    alert ('Hi there! Looks like the page loaded! Yay!');
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', changeColor, false);
    buttons[1].addEventListener('click', changeColor2, false);
}

function changeColor() {
    var p1 = document.getElementById("colorToggle")
    { p1.style.backgroundColor = "MediumPurple"; }
    }
    
function changeColor2() {
    var pars = document.getElementsByTagName('p')
    for (var i = 0, length = pars.length; i < length; i++) {
        pars[i].style.backgroundColor = "pink";
        pars[i].style.fontWeight="bold";
    }
}

var originalBackground;
function toggleHighlight() {
    var pos = this.getAttribute('value');
    var color;
    switch (pos) {
        case 'anml':
        color = 'yellow';
        break;
        case 'plt':
        color = 'orange';
        break;
        case 'food':
        color = 'teal';
        break;
        case 'pers':
        color = 'red';
        break;
    }
    var status = this.checked;
    // the status to which you've just changed the checkbox
    var spans = document.getElementsByClassName(pos);
    for (var i = 0; i < spans.length; i++) {
        if (status == true) {
            spans[i].style.backgroundColor = color;
        } else {
            spans[i].style.backgroundColor = originalBackground;
        }
    }
}
function init() {
    originalBackground = document.body.style.backgroundColor;
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', toggleHighlight, false);
    }
}
window.addEventListener('DOMContentLoaded', init, false);