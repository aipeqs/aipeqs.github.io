// first zoom that goes from the indices to the services and their specific factors that make up the indices
function zoom1 (index) {
    let buttons = [];
    let functions = [];
    let r = document.getElementById('att-select');
    if (r !== null) {
        r.innerHTML = " ";
    }
    else {
        r = document.createElement('div');
        r.className = 'btn-group';
        r.setAttribute('id', 'att-select');
        r.style.display = "block";
        document.getElementById('index-scatter').appendChild(r);
    }
    console.log(index)
    if (index === 'gei') {
        buttons = ["Timeliness", "Accuracy"];
        functions = [time, acc];
    }
    else {
        buttons = ["Right Use", "Right Collection"];
        functions = [use, coll];
    }

    for (let i = 0; i < buttons.length; i++)
    {
        g = document.createElement('button');
        g.className = "btn btn-primary";
        g.innerHTML = buttons[i];
        g.addEventListener('click', functions[i]);
        r.appendChild(g);
    }
}


// second zoom that goes from the services to departments / functionaries
function pgr_deep() {
  // draw the PGR departments of the window aspect
  let functions = {
    "time" : pgr_depart_time,
    "acc" : pgr_depart_acc,
    "coll" : pgr_depart_coll
  }
  functions[aspect]();
}

function prop_deep() {
  // delete the div with the departments

  let find = document.getElementById('departments');
  if (find !== null) {
    find.innerHTML = ' ';
  }
  let functions = {
    "time" : ptax_ftime,
    "acc" : ptax_facc,
    "coll" : ptax_fcoll
  }
  functions[aspect]();
}

function water_deep() {
  // delete the div with the departments

  let find = document.getElementById('departments');
  if (find !== null) {
    find.innerHTML = ' ';
  }
  let functions = {
    "time" : wtax_ftime,
    "acc" : wtax_facc,
    "coll" : wtax_fcoll
  }
  functions[aspect]();
}


// third zoom that goes from PGR departments to functionaries

function assign_functions(){
  let pgr_functions = {
  "time": pgr_ftime,
  "acc" : pgr_facc,
  "coll" : pgr_fcoll
  }
  return pgr_functions;
}

function eng_deep() {
  let pgr_functions = assign_functions();
  window.department = "Engineering";
  window.dindex = 0;
  pgr_functions[aspect]();
}

function phs_deep() {
  let pgr_functions = assign_functions();
  window.department = "PHS";
  window.dindex = 1;
  pgr_functions[aspect]();
}

function tpl_deep() {
  let pgr_functions = assign_functions();
  window.department = "Town Planning";
  window.dindex = 2;
  pgr_functions[aspect]();
}

function upa_deep() {
  let pgr_functions = assign_functions();
  window.department = "UPA";
  window.dindex = 3;
  pgr_functions[aspect]();
}

function rev_deep() {
  let pgr_functions = assign_functions();
  window.department = "Revenue Officer";
  window.dindex = 4;
  pgr_functions[aspect]();
}

function admin_deep() {
  let pgr_functions = assign_functions();
  window.department = "Administration";
  window.dindex = 5;
  pgr_functions[aspect]();
}
