// the graphing and interaction with the services
let ids = ['pgr', 'ptax', 'wtax'];

function draw(ctx, title, labels, d1, d2) {
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: d1.label,
              data: d1.values,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
          },
          {
              label: d2.label,
              data: d2.values,
              backgroundColor: [
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(75, 192, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          title : {
            display: true,
            text: title
          }
      }
  });
}


function create() {
  // the graph and the form will be in the flexbox
  let cont = document.getElementById('service-flex');
  if (cont === null) {
    cont = document.createElement('div');
    // creating the container
    cont.className = 'flex-container';
    cont.setAttribute('id', 'service-flex');
  }
  let h = document.getElementById('service-comp');
  if (h !== null) {
    h.remove();
  }
  h = document.createElement('canvas');
  // the canvas for the graph
  h.setAttribute('id', 'service-comp');
  cont.insertBefore(h, cont.firstChild);
  let serv = document.getElementById('services');
  serv.insertBefore(cont, serv.firstChild);
  return h;
}

function add_form(capt, labels, values, functions) {
  //add the caption before the form
  let caption = document.getElementById('caption3')
    if (caption !== null) {
      caption.remove()
    }
  caption = document.createElement('p');
  caption.setAttribute('id', 'caption3');
  caption.innerText = capt;


  console.log(values);
  // creating the forms to go alongside the graphs
  let f = document.getElementById('service-selector');
  if (f !== null) {
    f.remove()
  }
  f = document.createElement('div');
  f.setAttribute('id', 'service-selector');
  for (let i = 0; i < values.length; i++) {
    let x = document.createElement('div');
    let g = document.createElement('input');
    g.type = 'range';
    g.setAttribute('id', ids[i]);
    g.name = ids[i];
    g.min = "0.000000";
    g.max = "1.000000";
    g.step = "0.000001";
    g.setAttribute('value', "" + values[i].toFixed(6));
    g.addEventListener("change", functions[i]);
    x.appendChild(g);
    let k = document.createElement('label');
    k.setAttribute('for', ids[i]);
    k.style.cssText = 'font-family:helvetica; font-size:10px'
    k.innerHTML = labels[i];
    x.appendChild(k);
    f.appendChild(x);
  }
  const flex = document.getElementById('service-flex');
  flex.appendChild(caption);
  flex.appendChild(f);
}

function add_buttons(aspect) {
  // creating the buttons that further zoom in
  // aspect is time, acc, use or coll
  // the buttons will go in the div and not the flexbox
  window.aspect = aspect;
  console.log("Adding buttons");
  let buttons = [];
  let functions = [];
  let r = document.getElementById('serv-select');
  console.log(r);
  if (r === null) {
    console.log("Creating");
    r = document.createElement('div');
    r.className = 'btn-group';
    r.setAttribute('id', 'serv-select');
    r.style.display = "block";
    document.getElementById('services').appendChild(r);
    buttons = ["PGR", "Property Tax", "Water Tax"];
    functions = [pgr_deep, prop_deep, water_deep];

    for (let i = 0; i < buttons.length; i++)
    {
        let g = document.createElement('button');
        g.className = "btn btn-primary";
        g.innerHTML = buttons[i];
        g.addEventListener('click', functions[i]);
        r.appendChild(g);
    }
  }
}

function time () {
  let ctx = create();
  let title_text = 'Timeliness of Services';
  let caption = "Figure showing comparison of " + title_text + " betwwen " + city.name + " and the average of ULBs with similar populations";
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services.length; i++) {
    labels.push(city.services[i].title);
    // list of datasets
    dataset1.values.push(city.services[i].time);
    dataset2.values.push(average.services[i].time);
  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["PGR Timeliness", "Property Tax Timeliness", "Water Tax Timeliness"];
  functions = [time_pgr, time_ptax, time_wtax];
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions);
  add_buttons('time');
}

function acc() {
  let ctx = create();
  let title_text = 'Accuracy of Services';
  let caption = "Figure showing comparison of " + title_text + " betwwen " + city.name + " and the average of ULBs with similar populations"
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services.length; i++) {
    labels.push(city.services[i].title);
    // list of datasets
    dataset1.values.push(city.services[i].acc);
    dataset2.values.push(average.services[i].acc);
  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["PGR Accuracy", "Property Tax Accuracy", "Water Tax Accuracy"];
  functions = [acc_pgr, acc_ptax, acc_wtax];
  form_values = dataset1.values;
  console.log(form_values);
  add_form(caption, form_labels, form_values, functions);
  add_buttons('acc');
}

function use() {
  let ctx = create();
  let title_text = 'Right Use of Services';
  let caption = "Figure showing comparison of " + title_text + " betwwen " + city.name + " and the average of ULBs with similar populations"
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services.length; i++) {
    labels.push(city.services[i].title);
    // list of datasets
    dataset1.values.push(city.services[i].use);
    dataset2.values.push(average.services[i].use);
  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["PGR Right Use", "Property Right Use", "Water Right Use"];
  functions = [use_pgr, use_ptax, use_wtax];
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions);
  document.getElementById('serv-select').remove();
}

function coll() {
  let ctx = create();
  let title_text = 'Right Collection of Services';
  let caption = "Figure showing comparison of " + title_text + " betwwen " + city.name + " and the average of ULBs with similar populations"
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services.length; i++) {
    labels.push(city.services[i].title);
    // list of datasets
    dataset1.values.push(city.services[i].coll);
    dataset2.values.push(average.services[i].coll);
  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["PGR Right Collection", "Property Tax Right Collection", "Water Tax Right Collection"];
  functions = [coll_pgr, coll_ptax, coll_wtax];
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions);
  add_buttons('coll');
}
