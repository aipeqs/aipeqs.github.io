//takes care of the simulation introduction
var txt = "PIEQS Simulation";
var i = 0;
var speed = 50;

//source: https://www.w3schools.com/howto/howto_js_typewriter.asp
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("label").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

window.onload = () => {
	typeWriter();
};


function change() {
	let ulb = document.getElementById('name').value;
    let pop = parseFloat(document.getElementById('population').value);
    window.location.href = `simulate/templates/index.html?name=${ulb}&pop=${pop}`;
    return false;
}

