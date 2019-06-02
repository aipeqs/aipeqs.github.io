var url_string = window.location.href;
var url = new URL(url_string);
var ulb = url.searchParams.get("name");
var pop = parseFloat(url.searchParams.get("pop"));
var speed = 5;

var txt = `Government Efficiency and Privacy Simulation for ${ulb} (Population: ${pop})`;
var i = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("label").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

window.onload = () => {
    typeWriter();
    load()
};


function load() {
    const error = document.getElementById('pop-error');
    if (error !== null) {
        error.remove();
    }

    console.log(ulb);
    console.log(pop);

    if (pop < 25000) {
        const a = document.createElement('p');
        a.setAttribute('id', 'pop-error');
        a.style = {'color':'red', 'font-family':'helvetica','font-size':'10px'};
        a.innerText = 'The population you entered is too small';
        const after = document.getElementById('plots');
        document.body.insertBefore(a, after); //puts the error messsage right after the form
    }

    let made = generate(ulb, pop);
    const average = made[0];
    console.log(average.name);
    let city = made[1];
    
    window.city = city;
    window.average = average;
    graph_indices();
}
