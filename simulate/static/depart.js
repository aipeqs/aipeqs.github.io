//departments for PGR to be graphed
// the graphing and interaction with the services

function pgr_depart_time () {
  let ctx = create('depart-flex', 'depart-comp', 'departments');
  var caption = `Comparison between the timeliness of the departments to which complaints were filed between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let title_text = 'Timeliness of PGR Departments';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  //allowance needs to be made for the fact that all departments may not be represented in the ULB chosen at random, and so a proper comparison needs to be made
  var form_labels = [];
  var functions = [];
  var ids = [];
  var button_functions = [];

  for (var key in city.services["PGR"].departments) {
    labels.push(key);
    // list of datasets
    dataset1.values.push(city.services["PGR"].departments[key].time);
    dataset2.values.push(average.services["PGR"].departments[key].time);
    form_labels.push(`${key} Timeliness`);

    //to add the functions that will allow for the range input forms to alter their values
    switch(key) {
      case "Engineering":
        functions.push(time_eng);
        ids.push('eng'); //the ids for the range inputs
        button_functions.push(eng_deep); //onclick functions for the deep_dive buttons
        break;
      case "PHS":
        functions.push(time_phs);
        ids.push('phs');
        button_functions.push(phs_deep);
        break;
      case "Town Planning":
        functions.push(time_tpl);
        ids.push('tpl');
        button_functions.push(tpl_deep);
        break;
      case "UPA":
        functions.push(time_upa);
        ids.push('upa');
        button_functions.push(upa_deep);
        break;
      case "Administration":
        functions.push(time_admin);
        ids.push('admin');
        button_functions.push(admin_deep);
        break;
      default:
        functions.push(time_rev);
        ids.push('rev');
        button_functions.push(rev_deep)
        break;
    }

  }

  // for (let i = 0; i < city.services[0].departments.length; i++) {
  //   labels.push(city.services[0].departments[i].name);
  //   // list of datasets
  //   dataset1.values.push(city.services[0].departments[i].time);
  //   dataset2.values.push(average.services[0].departments[i].time);
  // }
  draw(ctx, title_text, labels, dataset1, dataset2);
  // form_labels = ["Engineering Timeliness", "PHS Timeliness", "Town Planning Timeliness", "UPA Timeliness", "Administration Timeliness", "Revenue Timeliness"];
  // functions = [time_eng, time_phs, time_tpl, time_upa, time_admin, time_rev];
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption4', 'depart-selector', 'depart-flex'); //these functions are those found in updates.js
  add_buttons('time', labels, button_functions, 'depart-select', 'departments');
}

function pgr_depart_acc () {
  let ctx = create('depart-flex', 'depart-comp', 'departments');
  var caption = `Comparison between the accuracy of the departments to which complaints were filed between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let title_text = 'Accuracy of PGR Departments';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];
  //allowance needs to be made for the fact that all departments may not be represented in the ULB chosen at random, and so a proper comparison needs to be made
  var form_labels = [];
  var functions = [];
  var ids = [];
  var button_functions = [];

  for (var key in city.services["PGR"].departments) {
    labels.push(key);
    // list of datasets
    dataset1.values.push(city.services["PGR"].departments[key].acc);
    dataset2.values.push(average.services["PGR"].departments[key].acc);
    form_labels.push(`${key} Accuracy`);

    //to add the functions that will allow for the range input forms to alter their values
    switch(key) {
      case "Engineering":
        functions.push(acc_eng);
        ids.push('eng'); //the ids for the range inputs
        button_functions.push(eng_deep); //onclick functions for the deep_dive buttons
        break;
      case "PHS":
        functions.push(acc_phs);
        ids.push('phs');
        button_functions.push(phs_deep);
        break;
      case "Town Planning":
        functions.push(acc_tpl);
        ids.push('tpl');
        button_functions.push(tpl_deep);
        break;
      case "UPA":
        functions.push(acc_upa);
        ids.push('upa');
        button_functions.push(upa_deep);
        break;
      case "Administration":
        functions.push(acc_admin);
        ids.push('admin');
        button_functions.push(admin_deep);
        break;
      default:
        functions.push(acc_rev);
        ids.push('rev');
        button_functions.push(rev_deep)
        break;
    }

  }

  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption4', 'depart-selector', 'depart-flex'); //these functions are those found in updates.js
  add_buttons('acc', labels, button_functions, 'depart-select', 'departments');
}

function pgr_depart_coll() {
  let ctx = create('depart-flex', 'depart-comp', 'departments');
  var caption = `Comparison between the right collection of the departments to which complaints were filed between ${city.name} and the average of ULBs with populations of ${average.name}`;
  let title_text = 'Right Collection of PGR Departments';
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  //allowance needs to be made for the fact that all departments may not be represented in the ULB chosen at random, and so a proper comparison needs to be made
  var form_labels = [];
  var functions = [];
  for (var key in city.services["PGR"].departments) {
    labels.push(key);
    // list of datasets
    dataset1.values.push(city.services["PGR"].departments[key].coll);
    dataset2.values.push(average.services["PGR"].departments[key].coll);
    form_labels.push(`${key} Right Collection`);

    //to add the functions that will allow for the range input forms to alter their values
    switch(key) {
      case "Engineering":
        functions.push(coll_eng);
        ids.push('eng'); //the ids for the range inputs
        button_functions.push(eng_deep); //onclick functions for the deep_dive buttons
        break;
      case "PHS":
        functions.push(coll_phs);
        ids.push('phs');
        button_functions.push(phs_deep);
        break;
      case "Town Planning":
        functions.push(coll_tpl);
        ids.push('tpl');
        button_functions.push(tpl_deep);
        break;
      case "UPA":
        functions.push(coll_upa);
        ids.push('upa');
        button_functions.push(upa_deep);
        break;
      case "Administration":
        functions.push(coll_admin);
        ids.push('admin');
        button_functions.push(admin_deep);
        break;
      default:
        functions.push(coll_rev);
        ids.push('rev');
        button_functions.push(rev_deep)
        break;
    }

  }

  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption4', 'depart-selector', 'depart-flex'); //these functions are those found in updates.js
  add_buttons('coll', labels, button_functions, 'depart-select', 'departments');
}
