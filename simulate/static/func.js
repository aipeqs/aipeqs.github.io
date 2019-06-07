//functionaries
// for each PGR department
// get the name of the department since the functionaries all have the same values
// PGR functionary draw

// let pgr_ids = ['cit', 'hdo', 'go', 'fle'];
//
// function draw_pgr_funcs(ctx, title, labels, d1, d2) {
//   let myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//           labels: labels,
//           datasets: [{
//               label: d1.label,
//               data: d1.values,
//               backgroundColor: [
//                   'rgba(255, 102, 132, 0.2)',
//                   'rgba(255, 102, 132, 0.2)',
//                   'rgba(255, 102, 132, 0.2)',
//                   'rgba(255, 102, 132, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 102, 132, 1)',
//                   'rgba(255, 102, 132, 1)',
//                   'rgba(255, 102, 132, 1)',
//                   'rgba(255, 102, 132, 1)'
//               ],
//               borderWidth: 1
//           },
//           {
//               label: d2.label,
//               data: d2.values,
//               backgroundColor: [
//                   'rgba(75, 195, 192, 0.2)',
//                   'rgba(75, 195, 192, 0.2)',
//                   'rgba(75, 195, 192, 0.2)',
//                   'rgba(75, 195, 192, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(75, 195, 192, 1)',
//                   'rgba(75, 195, 192, 1)',
//                   'rgba(75, 195, 192, 1)',
//                   'rgba(75, 195, 192, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               yAxes: [{
//                   ticks: {
//                       beginAtZero: true
//                   }
//               }]
//           },
//           title : {
//             display: true,
//             text: title
//           }
//       }
//   });
// }

//the functions below this point will no longer be used but are to be updated in the future to show the functionaries within PGR's departments' complaints

// function pgr_ftime() {
//   let ctx = create_funcs();
//   let title_text = 'Timeliness of PGR ' + department + ' Functionaries';
//   let labels = [];
//   let dataset1 = {}; //for the city
//   let dataset2 = {}; //for the grade
//   dataset1.label = city.name;
//   dataset2.label = average.name;
//   dataset1.values = [];
//   dataset2.values = [];
//   for (let i = 0; i < city.services[0].departments[dindex].funcs.length; i++) {
//     labels.push(city.services[0].departments[dindex].funcs[i].name);
//     // list of datasets
//     dataset1.values.push(city.services[0].departments[dindex].funcs[i].time);
//     dataset2.values.push(average.services[0].departments[dindex].funcs[i].time);
//   }
//   draw_pgr_funcs(ctx, title_text, labels, dataset1, dataset2);
//   form_labels = ["Citizen Timeliness", "Help Desk Officer Timeliness", "GO Timeliness", "First Level Escalation Timeliness"];
//   functions = [time_cit, time_hdo, time_go, time_fle];
//   form_values = dataset1.values;
//   add_form_funcs(pgr_ids, form_labels, form_values, functions);
// }

// function pgr_facc() {
//   let ctx = create_funcs();
//   let title_text = 'Accuracy of PGR ' + department + ' Functionaries';
//   let labels = [];
//   let dataset1 = {}; //for the city
//   let dataset2 = {}; //for the grade
//   dataset1.label = city.name;
//   dataset2.label = average.name;
//   dataset1.values = [];
//   dataset2.values = [];
//   for (let i = 0; i < city.services[0].departments[dindex].funcs.length; i++) {
//     labels.push(city.services[0].departments[dindex].funcs[i].name);
//     // list of datasets
//     dataset1.values.push(city.services[0].departments[dindex].funcs[i].acc);
//     dataset2.values.push(average.services[0].departments[dindex].funcs[i].acc);
//   }
//   draw_pgr_funcs(ctx, title_text, labels, dataset1, dataset2);
//   form_labels = ["Citizen Accuracy", "Help Desk Officer Accuracy", "GO Accuracy", "First Level Escalation Accuracy"];
//   functions = [acc_cit, acc_hdo, acc_go, acc_fle];
//   form_values = dataset1.values;
//   add_form_funcs(pgr_ids, form_labels, form_values, functions);
// }
//
// function pgr_fcoll() {
//   let ctx = create_funcs();
//   let title_text = 'Right Collection of PGR ' + department +' Functionaries';
//   let labels = [];
//   let dataset1 = {}; //for the city
//   let dataset2 = {}; //for the grade
//   dataset1.label = city.name;
//   dataset2.label = average.name;
//   dataset1.values = [];
//   dataset2.values = [];
//   for (let i = 0; i < city.services[0].departments[dindex].funcs.length; i++) {
//     labels.push(city.services[0].departments[dindex].funcs[i].name);
//     // list of datasets
//     dataset1.values.push(city.services[0].departments[dindex].funcs[i].coll);
//     dataset2.values.push(average.services[0].departments[dindex].funcs[i].coll);
//   }
//   draw_pgr_funcs(ctx, title_text, labels, dataset1, dataset2);
//   form_labels = ["Citizen Right Collection", "Help Desk Officer Right Collection", "GO Right Collection", "First Level Escalation Right Collection"];
//   functions = [coll_cit, coll_hdo, coll_go, coll_fle];
//   form_values = dataset1.values;
//   add_form_funcs(pgr_ids, form_labels, form_values, functions);
// }
//after this point, the functions are in use


// functionaries for Property tax
//departments for PGR to be graphed
// the graphing and interaction with the services

function ptax_ftime () {
  let ctx = create('func-flex', 'func-comp', 'functionaries');
  var caption = `Comparison between the timeliness of the functionaries who handled service requests regarding Property Tax Assessments between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let title_text = 'Timeliness of Propery Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = []; //labels for the range input forms
  var functions = []; //functions that allow for the changes and updates when the range form is altered
  var ids = []; //the ids of the individual forms

  for (var key in city.services["Property Tax"].funcs) {
    labels.push(city.services["Property Tax"].funcs.key.name);
    form_labels.push(`${city.services["Property Tax"].funcs.key.name} Timeliness`);
    dataset1.values.push(city.services["Property Tax"].funcs.key.time);
    dataset2.values.push(average.services["Property Tax"].funcs.key.time);

    switch(key) {
      case 'MCO':
        ids.push('meeseva');
        functions.push(time_pmeeseva);
      case 'JASA':
        ids.push('asst');
        functions.push(time_passt);
      case 'BC':
        ids.push('bill');
        functions.push(time_pbill);
      case 'RI':
        ids.push('inspect');
        functions.push(time_pinsp);
      case 'RO':
        ids.push('off');
        functions.push(time_poff);
      default:
        ids.push('comm');
        functions.push(time_pcomm)
    }

  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption6', 'func-selector', 'func-flex');
}

function ptax_facc () {
  let ctx = create('func-flex', 'func-comp', 'functionaries');
  var caption = `Comparison between the accuracy of the functionaries who handled service requests regarding Property Tax Assessments between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let title_text = 'Accuracy of Propery Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = []; //labels for the range input forms
  var functions = []; //functions that allow for the changes and updates when the range form is altered
  var ids = []; //the ids of the individual forms

  for (var key in city.services["Property Tax"].funcs) {
    labels.push(city.services["Property Tax"].funcs.key.name);

    form_labels.push(`${city.services["Property Tax"].funcs.key.name} Accuracy`);
    dataset1.values.push(city.services["Property Tax"].funcs.key.acc);
    dataset2.values.push(average.services["Property Tax"].funcs.key.acc);

    switch(key) {
      case 'MCO':
        ids.push('meeseva');
        functions.push(acc_pmeeseva);
      case 'JASA':
        ids.push('asst');
        functions.push(acc_passt);
      case 'BC':
        ids.push('bill');
        functions.push(acc_pbill);
      case 'RI':
        ids.push('inspect');
        functions.push(acc_pinsp);
      case 'RO':
        ids.push('off');
        functions.push(acc_poff);
      default:
        ids.push('comm');
        functions.push(acc_pcomm)
    }

  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption6', 'func-selector', 'func-flex');
}

function ptax_fcoll () {
  let ctx = create('func-flex', 'func-comp', 'functionaries');
  var caption = `Comparison between the right collection of the functionaries who handled service requests regarding Property Tax Assessments between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let title_text = 'Right Collection of Propery Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = []; //labels for the range input forms
  var functions = []; //functions that allow for the changes and updates when the range form is altered
  var ids = []; //the ids of the individual forms


  for (var key in city.services["Property Tax"].funcs) {
    labels.push(city.services["Property Tax"].funcs.key.name);

    form_labels.push(`${city.services["Property Tax"].funcs.key.name} Right Collection`);
    dataset1.values.push(city.services["Property Tax"].funcs.key.coll);
    dataset2.values.push(average.services["Property Tax"].funcs.key.coll);

    switch(key) {
      case 'MCO':
        ids.push('meeseva');
        functions.push(coll_pmeeseva);
      case 'JASA':
        ids.push('asst');
        functions.push(coll_passt);
      case 'BC':
        ids.push('bill');
        functions.push(coll_pbill);
      case 'RI':
        ids.push('inspect');
        functions.push(coll_pinsp);
      case 'RO':
        ids.push('off');
        functions.push(coll_poff);
      default:
        ids.push('comm');
        functions.push(coll_pcomm)
    }

  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption6', 'func-selector', 'func-flex');
}



// functionaries for Water tax

function wtax_ftime () {
  let ctx = create('func-flex', 'func-comp', 'functionaries');
  var caption = `Comparison between the timeliness of the functionaries who handled service requests regarding Water Tax Assessments between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let title_text = 'Timeliness of Water Tax Functionaries';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = []; //labels for the range input forms
  var functions = []; //functions that allow for the changes and updates when the range form is altered
  var ids = []; //the ids of the individual forms

  for (var key in city.services["Water Tax"].funcs) {
    labels.push(city.services["Water Tax"].funcs.key.name);
    form_labels.push(`${city.services["Water Tax"].funcs.key.name} Timeliness`);
    dataset1.values.push(city.services["Water Tax"].funcs.key.time);
    dataset2.values.push(average.services["Water Tax"].funcs.key.time);

    switch(key) {
      case 'MCO':
        ids.push('meeseva');
        functions.push(time_wcsc);
      case 'JASA':
        ids.push('asst');
        functions.push(time_wasst);
      case 'AE':
        ids.push('asst-eng');
        functions.push(time_waeng);
      case 'DEE':
        ids.push('exe-eng');
        functions.push(time_weeng);
      default:
        ids.push('comm');
        functions.push(time_wcomms)
    }

  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, ptax_ids, form_labels, form_values, functions, ids, 'caption6', 'func-selector', 'func-flex');
}

function wtax_facc () {
  let ctx = create('func-flex', 'func-comp', 'functionaries');
  let title_text = 'Accuracy of Water Tax Functionaries';
  var caption = `Comparison between the accuracy of the functionaries who handled service requests regarding Water Tax Assessments between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = []; //labels for the range input forms
  var functions = []; //functions that allow for the changes and updates when the range form is altered
  var ids = []; //the ids of the individual forms

  for (var key in city.services["Water Tax"].funcs) {
    labels.push(city.services["Water Tax"].funcs.key.name);
    form_labels.push(`${city.services["Water Tax"].funcs.key.name} Accuracy`);
    dataset1.values.push(city.services["Water Tax"].funcs.key.acc);
    dataset2.values.push(average.services["Water Tax"].funcs.key.acc);

    switch(key) {
      case 'MCO':
        ids.push('meeseva');
        functions.push(acc_wcsc);
      case 'JASA':
        ids.push('asst');
        functions.push(acc_wasst);
      case 'AE':
        ids.push('asst-eng');
        functions.push(acc_waeng);
      case 'DEE':
        ids.push('exe-eng');
        functions.push(acc_weeng);
      default:
        ids.push('comm');
        functions.push(acc_wcomms)
    }

  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption6', 'func-selector', 'func-flex');
}

function wtax_fcoll () {
  let ctx = create('func-flex', 'func-comp', 'functionaries');
  let title_text = 'Right Collection of Water Tax Functionaries';
  var caption = `Comparison between the right collection of the functionaries who handled service requests regarding Water Tax Assessments between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = []; //labels for the range input forms
  var functions = []; //functions that allow for the changes and updates when the range form is altered
  var ids = []; //the ids of the individual forms

  for (var key in city.services["Water Tax"].funcs) {
    labels.push(city.services["Water Tax"].funcs.key.name);
    form_labels.push(`${city.services["Water Tax"].funcs.key.name} Right Collection`);
    dataset1.values.push(city.services["Water Tax"].funcs.key.coll);
    dataset2.values.push(average.services["Water Tax"].funcs.key.coll);

    switch(key) {
      case 'MCO':
        ids.push('meeseva');
        functions.push(coll_wcsc);
      case 'JASA':
        ids.push('asst');
        functions.push(coll_wasst);
      case 'AE':
        ids.push('asst-eng');
        functions.push(coll_waeng);
      case 'DEE':
        ids.push('exe-eng');
        functions.push(coll_weeng);
      default:
        ids.push('comm');
        functions.push(coll_wcomms)
    }

  }
  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption6', 'func-selector', 'func-flex');
}
