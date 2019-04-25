//functionaries
// for each PGR department
// get the name of the department since the functionaries all have the same values
function create_funcs() {
  // the graph and the form will be in the flexbox
  let cont = document.getElementById('func-flex');
  if (cont === null) {
    cont = document.createElement('div');
    // creating the container
    cont.className = 'flex-container';
    cont.setAttribute('id', 'func-flex');
  }
  let h = document.getElementById('func-comp');
  if (h !== null) {
    h.remove();
  }
  h = document.createElement('canvas');
  // the canvas for the graph
  h.setAttribute('id', 'func-comp');
  cont.insertBefore(h, cont.firstChild);
  let serv = document.getElementById('functionaries');
  serv.insertBefore(cont, serv.firstChild);
  return h;
}

function add_form_funcs(ids, labels, values, functions) {
  console.log(values);
  // creating the forms to go alongside the graphs - the range input forms
  let f = document.getElementById('func-selector');
  if (f !== null) {
    f.remove()
  }
  f = document.createElement('div');
  f.setAttribute('id', 'func-selector');
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
  document.getElementById('func-flex').appendChild(f);
}

// PGR functionary draw

let pgr_ids = ['cit', 'hdo', 'go', 'fle'];

function draw_pgr_funcs(ctx, title, labels, d1, d2) {
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
                  'rgba(255, 102, 132, 0.2)'
              ],
              borderColor: [
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
                  'rgba(75, 195, 192, 0.2)'
              ],
              borderColor: [
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

function pgr_ftime() {
  let ctx = create_funcs();
  let title_text = 'Timeliness of PGR ' + department + ' Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[0].departments[dindex].funcs.length; i++) {
    labels.push(city.services[0].departments[dindex].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[0].departments[dindex].funcs[i].time);
    dataset2.values.push(average.services[0].departments[dindex].funcs[i].time);
  }
  draw_pgr_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["Citizen Timeliness", "Help Desk Officer Timeliness", "GO Timeliness", "First Level Escalation Timeliness"];
  functions = [time_cit, time_hdo, time_go, time_fle];
  form_values = dataset1.values;
  add_form_funcs(pgr_ids, form_labels, form_values, functions);
}

function pgr_facc() {
  let ctx = create_funcs();
  let title_text = 'Accuracy of PGR ' + department + ' Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[0].departments[dindex].funcs.length; i++) {
    labels.push(city.services[0].departments[dindex].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[0].departments[dindex].funcs[i].acc);
    dataset2.values.push(average.services[0].departments[dindex].funcs[i].acc);
  }
  draw_pgr_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["Citizen Accuracy", "Help Desk Officer Accuracy", "GO Accuracy", "First Level Escalation Accuracy"];
  functions = [acc_cit, acc_hdo, acc_go, acc_fle];
  form_values = dataset1.values;
  add_form_funcs(pgr_ids, form_labels, form_values, functions);
}

function pgr_fcoll() {
  let ctx = create_funcs();
  let title_text = 'Right Collection of PGR ' + department +' Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[0].departments[dindex].funcs.length; i++) {
    labels.push(city.services[0].departments[dindex].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[0].departments[dindex].funcs[i].coll);
    dataset2.values.push(average.services[0].departments[dindex].funcs[i].coll);
  }
  draw_pgr_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["Citizen Right Collection", "Help Desk Officer Right Collection", "GO Right Collection", "First Level Escalation Right Collection"];
  functions = [coll_cit, coll_hdo, coll_go, coll_fle];
  form_values = dataset1.values;
  add_form_funcs(pgr_ids, form_labels, form_values, functions);
}



// functionaries for Property tax
//departments for PGR to be graphed
// the graphing and interaction with the services

let ptax_ids = ['meeseva', 'asst', 'bill', 'inspect', 'off', 'comm'];

function draw_ptax_funcs(ctx, title, labels, d1, d2) {
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


function ptax_ftime () {
  let ctx = create_funcs();
  let title_text = 'Timeliness of Propery Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[1].funcs.length; i++) {
    labels.push(city.services[1].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[1].funcs[i].time);
    dataset2.values.push(average.services[1].funcs[i].time);
  }
  draw_ptax_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["CSC Timeliness", "Junior/Senior Asst Timeliness", "Bill Collector Timeliness", "Rev. Inspector Timeliness", "Rev. Officer Timeliness", "Zonal Comm Timeliness"];
  functions = [time_pmeeseva, time_passt, time_pbill, time_pinsp, time_poff, time_pcomm];
  form_values = dataset1.values;
  add_form_funcs(ptax_ids, form_labels, form_values, functions);
}

function ptax_facc () {
  let ctx = create_funcs();
  let title_text = 'Accuracy of Propery Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[1].funcs.length; i++) {
    labels.push(city.services[1].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[1].funcs[i].acc);
    dataset2.values.push(average.services[1].funcs[i].acc);
  }
  draw_ptax_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["CSC Accuracy", "Junior/Senior Asst Accuracy", "Bill Collector Accuracy", "Rev. Inspector Accuracy", "Rev. Officer Accuracy", "Zonal Comm Accuracy"];
  functions = [acc_pmeeseva, acc_passt, acc_pbill, acc_pinsp, acc_poff, acc_pcomm];
  form_values = dataset1.values;
  add_form_funcs(ptax_ids, form_labels, form_values, functions);
}

function ptax_fcoll () {
  let ctx = create_funcs();
  let title_text = 'Right Collection of Propery Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[1].funcs.length; i++) {
    labels.push(city.services[1].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[1].funcs[i].coll);
    dataset2.values.push(average.services[1].funcs[i].coll);
  }
  draw_ptax_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["CSC Right Collection", "Junior/Senior Asst Right Collection", "Bill Collector Right Collection", "Rev. Inspector Right Collection", "Rev. Officer Right Collection", "Zonal Comm Right Collection"];
  functions = [coll_pmeeseva, coll_passt, coll_pbill, coll_pinsp, coll_poff, acc_pcomm];
  form_values = dataset1.values;
  add_form_funcs(ptax_ids, form_labels, form_values, functions);
}



// functionaries for Water tax
let wtax_ids = ['meeseva', 'asst', 'asst-eng', 'exe-eng', 'comm'];

function draw_wtax_funcs(ctx, title, labels, d1, d2) {
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
                  'rgba(255, 102, 132, 0.2)'
              ],
              borderColor: [
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
                  'rgba(75, 195, 192, 0.2)'
              ],
              borderColor: [
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

function wtax_ftime () {
  let ctx = create_funcs();
  let title_text = 'Timeliness of Water Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[2].funcs.length; i++) {
    labels.push(city.services[2].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[2].funcs[i].time);
    dataset2.values.push(average.services[2].funcs[i].time);
  }
  draw_wtax_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["CSC Timeliness", "Junior/Senior Asst Timeliness", "Asst Engineer Timeliness", "Exec. Engineer Timeliness", "Commissioner Timeliness"];
  functions = [time_wcsc, time_wasst, time_waeng, time_weeng, time_wcomms];
  form_values = dataset1.values;
  add_form_funcs(wtax_ids, form_labels, form_values, functions);
}

function wtax_facc () {
  let ctx = create_funcs();
  let title_text = 'Accuracy of Water Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[2].funcs.length; i++) {
    labels.push(city.services[2].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[2].funcs[i].acc);
    dataset2.values.push(average.services[2].funcs[i].acc);
  }
  draw_wtax_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["CSC Accuracy", "Junior/Senior Asst Accuracy", "Asst Engineer Accuracy", "Exec. Engineer Accuracy", "Commissioner Accuracy"];
  functions = [acc_wcsc, acc_wasst, acc_waeng, acc_weeng, acc_wcomms];
  form_values = dataset1.values;
  add_form_funcs(wtax_ids, form_labels, form_values, functions);
}

function wtax_fcoll () {
  let ctx = create_funcs();
  let title_text = 'Right Collection of Water Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  for (let i = 0; i < city.services[2].funcs.length; i++) {
    labels.push(city.services[2].funcs[i].name);
    // list of datasets
    dataset1.values.push(city.services[2].funcs[i].coll);
    dataset2.values.push(average.services[2].funcs[i].coll);
  }
  draw_wtax_funcs(ctx, title_text, labels, dataset1, dataset2);
  form_labels = ["CSC Right Collection", "Junior/Senior Asst Right Collection", "Asst Engineer Right Collection", "Exec Engineer Right Collection", "Commissioner Right Collection"];
  functions = [coll_wcsc, coll_wasst, coll_waeng, coll_weeng, coll_wcomms];
  form_values = dataset1.values;
  add_form_funcs(wtax_ids, form_labels, form_values, functions);
}
