// carries out the updates in the class Structure and on the graphs
//update the service attributes
// PGR at index 0, Property tax at index 1, water tax at index 2
function time_pgr() {
  let new_time = parseFloat(document.getElementById('pgr').value);
  city.services[0].change_time(new_time);
  city.calc_average();
  console.log("Changed");
  time();
  graph_indices(average, city);
  let dpt = document.getElementById('departments');
  if (dpt !== null) {
    dpt.innerHTML = ' ';
  }
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function time_ptax() {
  let new_time = parseFloat(document.getElementById('ptax').value);
  city.services[1].change_time(new_time);
  city.calc_average();
  console.log("Changed");
  time();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function time_wtax() {
  let new_time = parseFloat(document.getElementById('wtax').value);
  city.services[2].change_time(new_time);
  city.calc_average();
  console.log("Changed");
  time();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_pgr() {
  let new_acc = parseFloat(document.getElementById('pgr').value);
  city.services[0].change_acc(new_acc);
  city.calc_average();
  console.log("Changed");
  acc();
  graph_indices(average, city);
  let dpt = document.getElementById('departments');
  if (dpt !== null) {
    dpt.innerHTML = ' ';
  }
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_ptax() {
  let new_acc = parseFloat(document.getElementById('ptax').value);
  city.services[1].change_acc(new_acc);
  city.calc_average();
  console.log("Changed");
  acc();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_wtax() {
  let new_acc = parseFloat(document.getElementById('wtax').value);
  city.services[2].change_acc(new_acc);
  city.calc_average();
  console.log("Changed");
  acc();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function use_pgr() {
  let new_use = parseFloat(document.getElementById('pgr').value);
  city.services[0].change_use(new_use);
  city.calc_average();
  console.log("Changed");
  use();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function use_ptax() {
  let new_use = parseFloat(document.getElementById('ptax').value);
  city.services[1].change_use(new_use);
  city.calc_average();
  console.log("Changed");
  use();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function use_wtax() {
  let new_use = parseFloat(document.getElementById('wtax').value);
  city.services[2].change_use(new_use);
  city.calc_average();
  console.log("Changed");
  use();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_pgr() {
  let new_coll = parseFloat(document.getElementById('pgr').value);
  city.services[0].change_coll(new_coll);
  city.calc_average();
  console.log("Changed");
  coll();
  graph_indices(average, city);
  let dpt = document.getElementById('departments');
  if (dpt !== null) {
    dpt.innerHTML = ' ';
  }
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_ptax() {
  let new_coll = parseFloat(document.getElementById('ptax').value);
  city.services[1].change_coll(new_coll);
  city.calc_average();
  console.log("Changed");
  coll();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_wtax() {
  let new_coll = parseFloat(document.getElementById('wtax').value);
  city.services[2].change_coll(new_coll);
  city.calc_average();
  console.log("Changed");
  coll();
  graph_indices(average, city);
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

// for the departments, the order is ['Engineering', 'PHS', 'Town Planning', 'UPA', 'Administration', 'Revenue']

function time_eng() {
  let new_time = parseFloat(document.getElementById('eng'));
  city.services[0].departments[0].change_time(new_time);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_time();
  time();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}
function time_phs() {
  let new_time = parseFloat(document.getElementById('phs'));
  city.services[0].departments[1].change_time(new_time);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_time();
  time();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function time_tpl() {
  let new_time = parseFloat(document.getElementById('tpl'));
  city.services[0].departments[2].change_time(new_time);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_time();
  time();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function time_upa() {
  let new_time = parseFloat(document.getElementById('upa'));
  city.services[0].departments[3].change_time(new_time);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_time();
  time();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function time_admin() {
  let new_time = parseFloat(document.getElementById('admin'));
  city.services[0].departments[4].change_time(new_time);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_time();
  time();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function time_rev() {
  let new_time = parseFloat(document.getElementById('rev'));
  city.services[0].departments[5].change_time(new_time);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_time();
  time();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_eng() {
  let new_acc = parseFloat(document.getElementById('eng'));
  city.services[0].departments[0].change_acc(new_acc);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_acc();
  acc();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_phs() {
  let new_acc = parseFloat(document.getElementById('phs'));
  city.services[0].departments[1].change_acc(new_acc);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_acc();
  acc();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_tpl() {
  let new_acc = parseFloat(document.getElementById('tpl'));
  city.services[0].departments[2].change_acc(new_acc);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_acc();
  acc();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_upa() {
  let new_acc = parseFloat(document.getElementById('upa'));
  city.services[0].departments[3].change_acc(new_acc);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_acc();
  acc();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_admin() {
  let new_acc = parseFloat(document.getElementById('admin'));
  city.services[0].departments[4].change_acc(new_acc);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_acc();
  acc();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function acc_rev() {
  let new_acc = parseFloat(document.getElementById('rev'));
  city.services[0].departments[5].change_acc(new_acc);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_acc();
  acc();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_eng() {
  let new_coll = parseFloat(document.getElementById('eng'));
  city.services[0].departments[0].change_acc(new_coll);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_coll();
  coll();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_phs() {
  let new_coll = parseFloat(document.getElementById('phs'));
  city.services[0].departments[1].change_acc(new_coll);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_coll();
  coll();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_tpl() {
  let new_coll = parseFloat(document.getElementById('tpl'));
  city.services[0].departments[2].change_acc(new_coll);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_coll();
  coll();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_upa() {
  let new_coll = parseFloat(document.getElementById('upa'));
  city.services[0].departments[3].change_acc(new_coll);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_coll();
  coll();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_admin() {
  let new_coll = parseFloat(document.getElementById('admin'));
  city.services[0].departments[4].change_acc(new_coll);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_coll();
  coll();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}

function coll_rev() {
  let new_coll = parseFloat(document.getElementById('rev'));
  city.services[0].departments[5].change_acc(new_coll);
  city.services[0].calc_average();
  city.calc_average();
  pgr_depart_coll();
  coll();
  graph_indices();
  let func = document.getElementById('functionaries');
  if (func !== null) {
    func.innerHTML = ' ';
  }
}


// updates for Property tax functionaries

function time_update(serv, id, index) {
  let new_time = parseFloat(document.getElementById(id));
  city.services[serv].funcs[index].change_time(new_time);
  city.services[serv].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  ptax_ftime();
  // redrawing the services graph
  time();
  // redrawing the indices graph
  graph_indices();
}
function time_pmeeseva(){
  time_update(1, 'meeseva', 0);
}
function time_passt(){
  time_update(1, 'asst', 1);
}
function time_pbill(){
  time_update(1, 'bill', 2);
}
function time_pinsp(){
  time_update(1, 'inspect', 3);
}
function time_poff(){
  time_update(1, 'off', 4);
}
function time_pcomm(){
  time_update(1, 'comm', 5);
}

function acc_update(serv, id, index) {
  let new_acc = parseFloat(document.getElementById(id));
  city.services[serv].funcs[index].change_acc(new_acc);
  city.services[serv].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  ptax_ftime();
  // redrawing the services graph
  time();
  // redrawing the indices graph
  graph_indices();
}
function acc_pmeeseva(){
  acc_update(1, 'meeseva', 0);
}
function acc_passt(){
  acc_update(1, 'asst', 1);
}
function acc_pbill(){
  acc_update(1, 'bill', 2);
}
function acc_pinsp(){
  acc_update(1, 'inspect', 3);
}
function acc_poff(){
  acc_update(1, 'off', 4);
}
function acc_pcomm(){
  acc_update(1, 'comm', 5);
}


function coll_update(serv, id, index) {
  let new_coll = parseFloat(document.getElementById(id));
  city.services[serv].funcs[index].change_coll(new_coll);
  city.services[serv].calc_average();
  city.calc_average();
  // redrawing the graph with values in question
  ptax_ftime();
  // redrawing the services graph
  time();
  // redrawing the indices graph
  graph_indices();
}
function coll_pmeeseva(){
  coll_update(1, 'meeseva', 0);
}
function coll_passt(){
  coll_update(1, 'asst', 1);
}
function coll_pbill(){
  coll_update(1, 'bill', 2);
}
function coll_pinsp(){
  coll_update(1, 'inspect', 3);
}
function coll_poff(){
  coll_update(1, 'off', 4);
}
function coll_pcomm(){
  coll_update(1, 'comm', 5);
}


// updating the functionaries for water Tax

function time_wcsc(){
  time_update(2, 'meeseva', 0);
}
function time_wasst(){
  time_update(2, 'asst', 1);
}
function time_waeng(){
  time_update(2, 'asst-eng', 2);
}
function time_weeng(){
  time_update(2, 'exe-eng', 3);
}
function time_wcomms(){
  time_update(2, 'comm', 4);
}


function acc_wcsc(){
  acc_update(2, 'meeseva', 0);
}
function acc_wasst(){
  acc_update(2, 'asst', 1);
}
function acc_waeng(){
  acc_update(2, 'asst-eng', 2);
}
function acc_weeng(){
  acc_update(2, 'exe-eng', 3);
}
function acc_wcomms(){
  acc_update(2, 'comm', 4);
}


function coll_wcsc(){
  coll_update(2, 'meeseva', 0);
}
function coll_wasst(){
  coll_update(2, 'asst', 1);
}
function coll_waeng(){
  coll_update(2, 'asst-eng', 2);
}
function coll_weeng(){
  coll_update(2, 'exe-eng', 3);
}
function coll_wcomms(){
  coll_update(2, 'comm', 4);
}


// updating the functionaries for each of the PGR Departments
// remember to include the dindex variable


function dep_time_update(id, index) {
  let new_time = parseFloat(document.getElementById(id));
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
}
function dep_acc_update(id, index) {
  let new_acc = parseFloat(document.getElementById(id));
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
}
function dep_coll_update(id, index) {
  let new_coll = parseFloat(document.getElementById(id));
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
