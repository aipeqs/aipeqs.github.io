
function load() {
    let ulb = document.getElementById('ulb').value;
    let e = document.getElementById('grade');
    let grade = e.options[e.selectedIndex].value;
    console.log(ulb);
    console.log(grade);
    let made = generate(ulb, grade);
    const average = made[0];
    console.log(average.name);
    let city = made[1];
    graph_indices(average, city);
    window.city = city;
    window.average = average;
}
