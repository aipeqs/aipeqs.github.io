//departments for PGR to be graphed
// the graphing and interaction with the services

let ids2 = ['eng', 'phs', 'tpl', 'upa', 'admin', 'rev'];

function draw_departments(ctx, title, labels, d1, d2) {
  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: d1.label,
              data: d1.values,
              backgroundColor: [
                  'rgba(255, 102, 132, 0.2)',
                  'rgba(255, 102, 132, 0.2)',
                  'rgba(255, 102, 132, 0.2)',
                  'rgba(255, 102, 132, 0.2)',
                  'rgba(255, 102, 132, 0.2)',
                  'rgba(255, 102, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 102, 132, 1)',
                  'rgba(255, 102, 132, 1)',
                  'rgba(255, 102, 132, 1)',
                  'rgba(255, 102, 132, 1)',
                  'rgba(255, 102, 132, 1)',
                  'rgba(255, 102, 132, 1)'
              ],
              borderWidth: 1
          },
          {
              label: d2.label,
              data: d2.values,
              backgroundColor: [
                  'rgba(75, 195, 192, 0.2)',
                  'rgba(75, 195, 192, 0.2)',
                  'rgba(75, 195, 192, 0.2)',
                  'rgba(75, 195, 192, 0.2)',
                  'rgba(75, 195, 192, 0.2)',
                  'rgba(75, 195, 192, 0.2)'
              ],
              borderColor: [
                  'rgba(75, 195, 192, 1)',
                  'rgba(75, 195, 192, 1)',
                  'rgba(75, 195, 192, 1)',
                  'rgba(75, 195, 192, 1)',
                  'rgba(75, 195, 192, 1)',
                  'rgba(75, 195, 192, 1)'
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

function create_depart() {
  // the graph and the form will be in the flexbox
  let cont = document.getElementById('depart-flex');
  if (cont === null) {
    cont = document.createElement('div');
    // creating the container
    cont.className = 'flex-container';
    cont.setAttribute('id', 'depart-flex');
  }
  let h = document.getElementById('depart-comp');
  if (h !== null) {
    h.remove();
  }
  h = document.createElement('canvas');
  // the canvas for the graph
  h.setAttribute('id', 'depart-comp');
  cont.insertBefore(h, cont.firstChild);
  let serv = document.getElementById('departments');
  serv.insertBefore(cont, serv.firstChild);
  return h;
}

function add_form_depart(labels, values, functions) {
  console.log(values);
  // creating the forms to go alongside the graphs - the range input forms - the sliders are here
  let f = document.getElementById('depart-selector');
  if (f !== null) {
    f.remove()
  }
  f = document.createElement('div');
  f.setAttribute('id', 'depart-selector');
  for (let i = 0; i < values.length; i++) {
    let x = document.createElement('div');
    let g = document.createElement('input');
    g.type = 'range';
    g.setAttribute('id', ids2[i]);
    g.name = ids[i];
    g.min = "0.000000";
    g.max = "1.000000";
    g.step = "0.000001"; 
    g.setAttribute('value', "" + values[i].toFixed(6));
    g.addEventListener("change", functions[i]); //this function is to allow for the reflection of the change within the instance and the interface
    x.appendChild(g);
    let k = document.createElement('label');
    k.setAttribute('for', ids[i]);
    k.style.cssText = 'font-family:helvetica; font-size:10px'
    k.innerHTML = labels[i];
    x.appendChild(k);
    f.appendChild(x);
  }
  document.getElementById('depart-flex').appendChild(f);
}

function add_buttons_depart(aspect) {
  // creating the buttons that further zoom in
  // aspect is time, acc, use or coll
  // the buttons will go in the div and not the flexbox
  window.aspect = aspect;
  console.log("Adding buttons");
  let buttons = [];
  let functions = [];
  let r = document.getElementById('depart-select');
  console.log(r);
  if (r === null) {
    console.log("Creating");
    r = document.createElement('div');
    r.className = 'btn-group';
    r.setAttribute('id', 'depart-select');
    r.style.display = "block";
    document.getElementById('departments').appendChild(r);
    buttons = ['Engineering', 'PHS', 'Town Planning', 'UPA', 'Administration', 'Revenue'];
    functions = [eng_deep, phs_deep, tpl_deep, upa_deep, admin_deep, rev_deep];

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

function pgr_depart_time () {
  let ctx = create_depart();
  let title_text = 'Timeliness of PGR Departments';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[0].departments.length; i++) {
    labels.push(city.services[0].departments[i].name);
    // list of datasets
    dataset1.values.push(city.services[0].departments[i].time);
    dataset2.values.push(average.services[0].departments[i].time);
  }
  draw_departments(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["Engineering Timeliness", "PHS Timeliness", "Town Planning Timeliness", "UPA Timeliness", "Administration Timeliness", "Revenue Timeliness"];
  functions = [time_eng, time_phs, time_tpl, time_upa, time_admin, time_rev];
  form_values = dataset1.values;
  add_form_depart(form_labels, form_values, functions); //these functions are those found in updates.js
  add_buttons_depart('time');
}

function pgr_depart_acc () {
  let ctx = create_depart();
  let title_text = 'Accuracy of PGR Departments';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[0].departments.length; i++) {
    labels.push(city.services[0].departments[i].name);
    // list of datasets
    dataset1.values.push(city.services[0].departments[i].acc);
    dataset2.values.push(average.services[0].departments[i].acc);
  }
  draw_departments(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["Engineering Accuracy", "PHS Accuracy", "Town Planning Accuracy", "UPA Accuracy", "Administration Accuracy", "Revenue Accuracy"];
  functions = [acc_eng, acc_phs, acc_tpl, acc_upa, acc_admin, acc_rev];
  form_values = dataset1.values;
  add_form_depart(form_labels, form_values, functions);
  add_buttons_depart('acc');
}

function pgr_depart_coll() {
  let ctx = create_depart();
  let title_text = 'Right Collection of PGR Departments';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[0].departments.length; i++) {
    labels.push(city.services[0].departments[i].name);
    // list of datasets
    dataset1.values.push(city.services[0].departments[i].coll);
    dataset2.values.push(average.services[0].departments[i].coll);
  }
  draw_departments(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["Engineering Right Collection", "PHS Right Collection", "Town Planning Right Collection", "UPA Right Collection", "Administration Right Collection", "Revenue Right Collection"];
  functions = [coll_eng, coll_phs, coll_tpl, coll_upa, coll_admin, coll_rev];
  form_values = dataset1.values;
  add_form_depart(form_labels, form_values, functions);
  add_buttons_depart('coll');
}
