// the graphing and interaction with the services
function time () {
  let ctx = create('service-flex', 'service-comp', 'services');
  let title_text = 'Timeliness of Services';
  let caption = "Figure showing comparison of " + title_text + " between " + city.name + " and the average of ULBs with similar populations";
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the bin
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = [];
  var functions = [];
  var ids = [];
  var button_functions = [];

  for (let key in city.services) {
    labels.push(key);
    form_labels.push(`${key} Timeliness`);
    console.log(key);
    dataset1.values.push(city.services[key].time);
    dataset2.values.push(average.services[key].time);

    switch(key) {
      case 'PGR':
        functions.push(time_pgr);
        ids.push('pgr');
        button_functions.push(pgr_deep);
      case 'Property Tax':
        functions.push(time_ptax);
        ids.push('ptax');
        button_functions.push(prop_deep);
      default:
        functions.push(time_wtax);
        ids.push('wtax');
        button_functions.push(water_deep);
    }
  }

  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption3', 'service-selector', 'service-flex');
  add_buttons('time', labels, button_functions, 'serv-select', 'services');
}

buttons = ["PGR", "Property Tax", "Water Tax"];
functions = [pgr_deep, prop_deep, water_deep];


function acc() {
  let ctx = create('service-flex', 'service-comp', 'services');
  let title_text = 'Accuracy of Services';
  let caption = "Figure showing comparison of " + title_text + " betwwen " + city.name + " and the average of ULBs with similar populations"
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = [];
  var functions = [];
  var ids = [];
  var button_functions = [];

  for (var key in city.services) {
    labels.push(key);
    form_labels.push(`${key} Accuracy`);
    dataset1.values.push(city.services[key].acc);
    dataset2.values.push(average.services[key].acc);

    switch(key) {
      case 'PGR':
        functions.push(acc_pgr);
        ids.push('pgr');
        button_functions.push(pgr_deep);
      case 'Property Tax':
        functions.push(acc_ptax);
        ids.push('ptax');
        button_functions.push(prop_deep);
      default:
        functions.push(acc_wtax);
        ids.push('wtax');
        button_functions.push(water_deep);
    }
  }

  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values =  dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption3', 'service-selector', 'service-flex');
  add_buttons('acc', labels, button_functions, 'serv-select', 'services');
}

function use() {
  let ctx = create('service-flex', 'service-comp', 'services');
  let title_text = 'Right Use of Services';
  let caption = "Figure showing comparison of " + title_text + " betwwen " + city.name + " and the average of ULBs with similar populations"
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = [];
  var functions = [];
  var ids = [];
  var button_functions = [];

  for (var key in city.services) {
    labels.push(key);
    form_labels.push(`${key} Right Use`);
    dataset1.values.push(city.services[key].use);
    dataset2.values.push(average.services[key].use);

    switch(key) {
      case 'PGR':
        functions.push(use_pgr);
        ids.push('pgr');
        button_functions.push(pgr_deep);
      case 'Property Tax':
        functions.push(use_ptax);
        ids.push('ptax');
        button_functions.push(prop_deep);
      default:
        functions.push(use_wtax);
        ids.push('wtax');
        button_functions.push(water_deep);
    }
  }

  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption3', 'service-selector', 'service-flex');

  var but = document.getElementById('serv-select');
  if (but !== null) {
    document.getElementById('serv-select').remove(); //these are the buttons that allow for a further zoom - right use doesn't exist beyond the service level
  }

}

function coll() {
  let ctx = create('service-flex', 'service-comp', 'services');
  let title_text = 'Right Collection of Services';
  let caption = "Figure showing comparison of " + title_text + " betwwen " + city.name + " and the average of ULBs with similar populations"
  let labels = [];
  let dataset1 = {}; //for the city
  let dataset2 = {}; //for the grade
  dataset1.label = city.name;
  dataset2.label = average.name;
  dataset1.values = [];
  dataset2.values = [];

  var form_labels = [];
  var functions = [];
  var ids = [];
  var button_functions = [];

  for (var key in city.services) {
    labels.push(key);
    form_labels.push(`${key} Right Collection`);
    dataset1.values.push(city.services[key].coll);
    dataset2.values.push(average.services[key].coll);

    switch(key) {
      case 'PGR':
        functions.push(coll_pgr);
        ids.push('pgr');
        button_functions.push(pgr_deep);
      case 'Property Tax':
        functions.push(coll_ptax);
        ids.push('ptax');
        button_functions.push(prop_deep);
      default:
        functions.push(coll_wtax);
        ids.push('wtax');
        button_functions.push(water_deep);
    }
  }

  draw(ctx, title_text, labels, dataset1, dataset2);
  form_values = dataset1.values;
  add_form(caption, form_labels, form_values, functions, ids, 'caption3', 'service-selector', 'service-flex');
  add_buttons('coll', labels, button_functions, 'serv-select', 'services');
}
