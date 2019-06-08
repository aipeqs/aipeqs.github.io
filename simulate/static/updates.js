// carries out the updates in the class Structure and on the graphs
//update the service attributes
// PGR at index 0, Property tax at index 1, water tax at index 2

function tax_updates(funct) {
  //updates when the tax values are changed - Property and Water
  //the funct taken is the function that must be run to redraw the services
  city.calc_average();
  funct();
  graph_indices();
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function pgr_updates(funct) {
  // updates when the PGR values are changed
  // funct - function used to update display of specific attribute of the overall services
  city.calc_average(); //recalculates the city averages
  funct(); //redraws services chart
  graph_indices(); //redraws the first chart showing IPI against GEI
  if (index == 'gei') {
    geifactors(); //redraws the factors of the GEI
  } else {
    ipifactors(); //updates and redraws the factors of the IPI
  }

  //removes all the charts that signify a deep dive beyond this point
  let dpt = document.getElementById('departments');
  if (dpt !== null) {
    dpt.innerHTML = ' ';
  }
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}


function time_pgr() {
  let new_time = parseFloat(document.getElementById('pgr').value);
  city.services["PGR"].change_time(new_time);
  pgr_updates(time);
}

function time_ptax() {
  let new_time = parseFloat(document.getElementById('ptax').value);
  city.services["Property Tax"].change_time(new_time);
  tax_updates(time);
}

function time_wtax() {
  let new_time = parseFloat(document.getElementById('wtax').value);
  city.services["Water Tax"].change_time(new_time);
  tax_updates(time);
}


function acc_pgr() {
  let new_acc = parseFloat(document.getElementById('pgr').value);
  city.services["PGR"].change_acc(new_acc);
  pgr_updates(acc);
}

function acc_ptax() {
  let new_acc = parseFloat(document.getElementById('ptax').value);
  city.services["Property Tax"].change_acc(new_acc);
  city.calc_average();
  tax_updates(acc);
}

function acc_wtax() {
  let new_acc = parseFloat(document.getElementById('wtax').value);
  city.services["Water Tax"].change_acc(new_acc);
  tax_updates(acc);
}

function use_pgr() {
  let new_use = parseFloat(document.getElementById('pgr').value);
  city.services["PGR"].change_use(new_use);
  city.calc_average();
  use();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function use_ptax() {
  let new_use = parseFloat(document.getElementById('ptax').value);
  city.services["Property Tax"].change_use(new_use);
  tax_updates(use);
}

function use_wtax() {
  let new_use = parseFloat(document.getElementById('wtax').value);
  city.services["Water Tax"].change_use(new_use);
  tax_updates(use);
}

function coll_pgr() {
  let new_coll = parseFloat(document.getElementById('pgr').value);
  city.services["PGR"].change_coll(new_coll);
  pgr_updates(coll);
}

function coll_ptax() {
  let new_coll = parseFloat(document.getElementById('ptax').value);
  city.services["Property Tax"].change_coll(new_coll);
  tax_updates(coll);
}

function coll_wtax() {
  let new_coll = parseFloat(document.getElementById('wtax').value);
  city.services["Water Tax"].change_coll(new_coll);
  tax_updates(coll);
}

// for the departments, the order is ['Engineering', 'PHS', 'Town Planning', 'UPA', 'Administration', 'Revenue']
//this will be changed from functionary updates to complaint updates

function complaint_updates(func1, func2) {
  city.services["PGR"].calc_average(); //recalculate all the values for the service now that the department values have been changed
  city.calc_average(); //same for the city
  func1(); //redraws the charts with the departments
  func2(); //redraws the services chart
  graph_indices(); //redraws the scatter chart with IPI against GEI
  // redraws the chart showing the index factors plotted against each other
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
  //removes the further zoom (those to complaints) from view
  let comp = document.getElementById('complaints');
  if (comp !== null) {
    comp.innerHTML = ' ';
  }
}

function department_change(value, new_value, department) {

  switch(value) {
    case "time":
      city.services["PGR"].departments[department].change_time(new_value);
      complaint_updates(pgr_depart_time, time);
      break;
    case "acc":
      city.services["PGR"].departments[department].change_acc(new_value);
      complaint_updates(pgr_depart_acc, acc);
      break;
    default:
      city.services["PGR"].departments[department].change_coll(new_value);
      complaint_updates(pgr_depart_coll, coll);
      break;
  }

}

//timeliness changes
function time_eng() {
  let new_time = parseFloat(document.getElementById('eng').value);
  department_change("time", new_time, "Engineering");
}

function time_phs() {
  let new_time = parseFloat(document.getElementById('phs').value);
  department_change("time", new_time, "PHS");
}

function time_tpl() {
  let new_time = parseFloat(document.getElementById('tpl').value);
  department_change("time", new_time, "Town Planning");
}

function time_upa() {
  let new_time = parseFloat(document.getElementById('upa').value);
  department_change("time", new_time, "UPA");
}

function time_admin() {
  let new_time = parseFloat(document.getElementById('admin').value);
  department_change("time", new_time, "Administration");
}

function time_rev() {
  let new_time = parseFloat(document.getElementById('rev').value);
  department_change("time", new_time, "Revenue");
}


//accuracy changes
function acc_eng() {
  let new_acc = parseFloat(document.getElementById('eng').value);
  department_change("acc", new_acc, "Engineering");
}

function acc_phs() {
  let new_acc = parseFloat(document.getElementById('phs').value);
  department_change("acc", new_acc, "PHS");
}

function acc_tpl() {
  let new_acc = parseFloat(document.getElementById('tpl').value);
  department_change("acc", new_acc, "Town Planning");
}

function acc_upa() {
  let new_acc = parseFloat(document.getElementById('upa').value);
  department_change("acc", new_acc, "UPA");
}

function acc_admin() {
  let new_acc = parseFloat(document.getElementById('admin').value);
  department_change("acc", new_acc, "Administration");
}

function acc_rev() {
  let new_acc = parseFloat(document.getElementById('rev').value);
  department_change("acc", new_acc, "Revenue");
}


//Right collection changes

function coll_eng() {
  let new_coll = parseFloat(document.getElementById('eng').value);
  department_change("coll", new_coll, "Engineering");
}

function coll_phs() {
  let new_coll = parseFloat(document.getElementById('phs').value);
  department_change("coll", new_coll, "PHS");
}

function coll_tpl() {
  let new_coll = parseFloat(document.getElementById('tpl').value);
  department_change("coll", new_coll, "Town Planning");
}

function coll_upa() {
  let new_coll = parseFloat(document.getElementById('upa').value);
  department_change("coll", new_coll, "UPA");
}

function coll_admin() {
  let new_coll = parseFloat(document.getElementById('admin').value);
  department_change("coll", new_coll, "Administration");
}

function coll_rev() {
  let new_coll = parseFloat(document.getElementById('rev').value);
  department_change("coll", new_coll, "Revenue");
}



// updates for Property tax functionaries
//the property tax functionary names are:

function time_update(serv, id, index, func1, func2) {
  // the serv is the key for the services directory for the city
  // the id is that of the HTML element
  // index is the identifier for the functionary within the dictionary contained by the service
  // func1 is the function that redraws the chart showing the functionary attributes
  // func2 redraws the chart for the services
  let new_time = parseFloat(document.getElementById(id).value);
  city.services[serv].funcs[index].change_time(new_time);
  city.services[serv].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  func1();
  // redrawing the services graph
  func2();
  // redrawing the indices graph
  graph_indices();
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
}


function time_pmeeseva(){
  time_update("Property Tax", 'meeseva', 'MCO', ptax_ftime, time);
}
function time_passt(){
  time_update("Property Tax", 'asst', 'JASA', ptax_ftime, time);
}
function time_pbill(){
  time_update("Property Tax", 'bill', 'BC', ptax_ftime, time);
}
function time_pinsp(){
  time_update("Property Tax", 'inspect', 'RI', ptax_ftime, time);
}
function time_poff(){
  time_update("Property Tax", 'off', 'RO', ptax_ftime, time);
}
function time_pcomm(){
  time_update("Property Tax", 'comm', 'Commissioner', ptax_ftime, time);
}

function acc_update(serv, id, index, func1, func2) {
  let new_acc = parseFloat(document.getElementById(id).value);
  city.services[serv].funcs[index].change_acc(new_acc);
  city.services[serv].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  func1();
  // redrawing the services graph
  func2();
  // redrawing the indices graph
  graph_indices();
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
}

function acc_pmeeseva(){
  acc_update("Property Tax", 'meeseva', 'MCO', ptax_facc, acc);
}
function acc_passt(){
  acc_update("Property Tax", 'asst', 'JASA', ptax_facc, acc);
}
function acc_pbill(){
  acc_update("Property Tax", 'bill', 'BC', ptax_facc, acc);
}
function acc_pinsp(){
  acc_update("Property Tax", 'inspect', 'RI', ptax_facc, acc);
}
function acc_poff(){
  acc_update("Property Tax", 'off', 'RO', ptax_facc, acc);
}
function acc_pcomm(){
  acc_update("Property Tax", 'comm', 'Commissioner', ptax_facc, acc);
}


function coll_update(serv, id, index, func1, func2) {
  let new_coll = parseFloat(document.getElementById(id).value);
  city.services[serv].funcs[index].change_coll(new_coll);
  city.services[serv].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  func1();
  // redrawing the services graph
  func2();
  // redrawing the indices graph
  graph_indices();
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
}

function coll_pmeeseva(){
  coll_update("Property Tax", 'meeseva', 'MCO', ptax_fcoll, coll);
}
function coll_passt(){
  coll_update("Property Tax", 'asst', 'JASA', ptax_fcoll, coll);
}
function coll_pbill(){
  coll_update("Property Tax", 'bill', 'BC', ptax_fcoll, coll);
}
function coll_pinsp(){
  coll_update("Property Tax", 'inspect', 'RI', ptax_fcoll, coll);
}
function coll_poff(){
  coll_update("Property Tax", 'off', 'RO', ptax_fcoll, coll);
}
function coll_pcomm(){
  coll_update("Property Tax", 'comm', 'Commissioner', ptax_fcoll, coll);
}


// updating the functionaries for water Tax

function time_wcsc(){
  time_update("Water Tax", 'meeseva', 'MCO', wtax_ftime, time);
}
function time_wasst(){
  time_update("Water Tax", 'asst', 'JASA', wtax_ftime, time);
}
function time_waeng(){
  time_update("Water Tax", 'asst-eng', 'AE', wtax_ftime, time);
}
function time_weeng(){
  time_update("Water Tax", 'exe-eng', 'DEE', wtax_ftime, time);
}
function time_wcomms(){
  time_update("Water Tax", 'comm', 'Commissioner', wtax_ftime, time);
}


function acc_wcsc(){
  acc_update("Water Tax", 'meeseva', 'MCO', wtax_facc, acc);
}
function acc_wasst(){
  acc_update("Water Tax", 'asst', 'JASA', wtax_facc, acc);
}
function acc_waeng(){
  acc_update("Water Tax", 'asst-eng', 'AE', wtax_facc, acc);
}
function acc_weeng(){
  acc_update("Water Tax", 'exe-eng', 'DEE', wtax_facc, acc);
}
function acc_wcomms(){
  acc_update("Water Tax", 'comm', 'Commissioner', wtax_facc, acc);
}

function coll_wcsc(){
  coll_update("Water Tax", 'meeseva', 'MCO', wtax_fcoll, coll);
}
function coll_wasst(){
  coll_update("Water Tax", 'asst', 'JASA', wtax_fcoll, coll);
}
function coll_waeng(){
  coll_update("Water Tax", 'asst-eng', 'AE', wtax_fcoll, coll);
}
function coll_weeng(){
  coll_update("Water Tax", 'exe-eng', 'DEE', wtax_fcoll, coll);
}
function coll_wcomms(){
  coll_update("Water Tax", 'comm', 'Commissioner', wtax_fcoll, coll);
}


// updating the functionaries for each of the PGR Departments
// remember to include the dindex variable


function dep_time_update(id, index) {
  let new_time = parseFloat(document.getElementById(id).value);
  city.services[0].departments[dindex].funcs[index].change_time(new_time);
  city.services[0].departments[dindex].calc_average();
  city.services[0].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  ptax_ftime();
  // redrawing the services graph
  time();
  // redrawing the indices graph
  graph_indices();
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
}
function dep_acc_update(id, index) {
  let new_acc = parseFloat(document.getElementById(id).value);
  city.services[0].departments[dindex].funcs[index].change_acc(new_acc);
  city.services[0].departments[dindex].calc_average();
  city.services[0].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  ptax_ftime();
  // redrawing the services graph
  time();
  // redrawing the indices graph
  graph_indices();
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
}
function dep_coll_update(id, index) {
  let new_coll = parseFloat(document.getElementById(id).value);
  city.services[0].departments[dindex].funcs[index].change_coll(new_coll);
  city.services[0].departments[dindex].calc_average();
  city.services[0].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  ptax_ftime();
  // redrawing the services graph
  time();
  // redrawing the indices graph
  graph_indices();
  if (index == 'gei') {
    geifactors();
  } else {
    ipifactors();
  }
}

function time_cit(){
  dep_time_update('cit', 0);
}
function time_hdo(){
  dep_time_update('hdo', 1);
}
function time_go(){
  dep_time_update('go', 2);
}
function time_fle(){
  dep_time_update('fle', 3);
}


function acc_cit(){
  dep_acc_update('cit', 0);
}
function acc_hdo(){
  dep_acc_update('hdo', 1);
}
function acc_go(){
  dep_acc_update('go', 2);
}
function acc_fle(){
  dep_acc_update('fle', 3);
}

function coll_cit(){
  dep_coll_update('cit', 0);
}
function coll_hdo(){
  dep_coll_update('hdo', 1);
}
function coll_go(){
  dep_coll_update('go', 2);
}
function coll_fle(){
  dep_coll_update('fle', 3);
}
