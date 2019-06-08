// first zoom that goes from the indices to the services and their specific factors that make up the indices
function zoom1 (index) {
    if (index === 'gei') {
      geifactors();
    } else {
      ipifactors();
    }
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
  // The windoe aspect indicates the attribute of the service to be displayed: timeliness, accuracy or right collection
  var find = document.getElementById('functionaries');
  if (find != null) {
    find.innerHTML = ' ';
  }

  switch(aspect) {
    case "time":
      pgr_depart_time();
      break;
    case "acc":
      pgr_depart_acc();
      break;
    default:
      pgr_depart_coll();
      break;
  }
}

function prop_deep() {
  // delete the div with the departments

  let find = document.getElementById('departments');
  if (find !== null) {
    find.innerHTML = ' ';
  }

  switch(aspect) {
    case "time":
      ptax_ftime();
      break;
    case "acc":
      ptax_facc();
      break;
    default:
      ptax_fcoll();
      break;
  }
}

function water_deep() {
  // delete the div with the departments

  let find = document.getElementById('departments');
  if (find !== null) {
    find.innerHTML = ' ';
  }

  switch(aspect) {
    case "time":
      wtax_ftime();
      break;
    case "acc":
      wtax_facc();
      break;
    default:
      wtax_fcoll();
      break;
  }
}


// third zoom that goes from PGR complaints to departments

function assign_functions(){
  let pgr_functions = {
  "time": pgr_ctime,
  "acc" : pgr_cacc,
  "coll" : pgr_ccoll
  }
  return pgr_functions;
}

function eng_deep() {
  let pgr_functions = assign_functions();
  window.department = "Engineering";
  pgr_functions[aspect]();
}

function phs_deep() {
  let pgr_functions = assign_functions();
  window.department = "PHS";
  pgr_functions[aspect]();
}

function tpl_deep() {
  let pgr_functions = assign_functions();
  window.department = "Town Planning";
  pgr_functions[aspect]();
}

function upa_deep() {
  let pgr_functions = assign_functions();
  window.department = "UPA";
  pgr_functions[aspect]();
}

function rev_deep() {
  let pgr_functions = assign_functions();
  window.department = "Revenue";
  pgr_functions[aspect]();
}

function admin_deep() {
  let pgr_functions = assign_functions();
  window.department = "Administration";
  pgr_functions[aspect]();
}

//TODO: Insert a fourth zoom in order to go from PGR complaints to the functionaries
