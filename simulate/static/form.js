
function load() {
    let ulb = document.getElementById('ulb').value;
    let pop = parseFloat(document.getElementById('pop').value);
    console.log(ulb);
    console.log(pop);
    let made = generate(ulb, pop);
    const average = made[0];
    console.log(average.name);
    let city = made[1];
    graph_indices(average, city);
    window.city = city;
    window.average = average;
}
