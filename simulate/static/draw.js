function draw(ctx, title, labels, d1, d2) {
  //initialize the colours to those to be displated in the chart
  let back1 = [];
	let back2 = [];
	let fore1 = [];
	let fore2 = [];
	for (let i=0; i < d1.values.length; i++) {
		back1.push('rgba(255, 102, 132, 0.2)');
		fore1.push('rgba(255, 102, 132, 1)');
		back2.push('rgba(75, 195, 192, 0.2)');
		fore2.push('rgba(75, 195, 192, 1)');
	}

  let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: d1.label,
              data: d1.values,
              backgroundColor: back1,
              borderColor: fore1,
              borderWidth: 1
          },
          {
              label: d2.label,
              data: d2.values,
              backgroundColor: back2,
              borderColor: fore2,
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

function create(flex_id, canvas_id, div_id) {
  // the graph and the form will be in the flexbox
  // this is the function to create the felxbos and the canvas for the graph
  let cont = document.getElementById(flex_id); //flexbox for the graphs with the services
  if (cont === null) {
    cont = document.createElement('div');
    // creating the container
    cont.className = 'flex-container';
    cont.setAttribute('id', flex_id);
  }
  let h = document.getElementById(canvas_id);
  if (h !== null) {
    h.remove();
  }
  h = document.createElement('canvas'); //the canvas for the graph
  // the canvas for the graph
  h.setAttribute('id', canvas_id);
  cont.insertBefore(h, cont.firstChild);
  let serv = document.getElementById(div_id);
  serv.insertBefore(cont, serv.firstChild); //ensures that the flexbox is the first child withing the services div element
  return h;
}


function add_form(capt, labels, values, functions, ids, caption_id, selector_id, flexbox) {
  //add the caption before the form and before the buttons
  // function to add the form and the captions
  let caption = document.getElementById(caption_id) //inserts the captions for the services
    if (caption !== null) {
      caption.remove()
    }
  caption = document.createElement('p');
  caption.setAttribute('id', caption_id);
  caption.innerText = capt;


  // creating the forms to go alongside the graphs
  let f = document.getElementById(selector_id); //the range selector for the values associated with the services
  if (f !== null) {
    f.remove()
  }
  f = document.createElement('div'); //the div containing all the service selectors for the range inputs
  f.setAttribute('id', selector_id);
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
  const flex = document.getElementById(flexbox);
  flex.appendChild(caption);
  flex.appendChild(f);
}

function add_buttons(aspect, buttons, functions, select_id, div_id) {
  // creating the buttons that further zoom in
  // aspect is time, acc, use or coll
  // the buttons will go in the div and not the flexbox
  window.aspect = aspect; //specfies the value for the next zoom, whether it be Timeliness, Accuracy, Right Collection, Use
  let r = document.getElementById(select_id);
  if (r === null) {
    r = document.createElement('div');
    r.className = 'btn-group';
    r.setAttribute('id', select_id); //the id of the button group to further zoom into the services
    r.style.display = "block";
    document.getElementById(div_id).appendChild(r); //appending the buttons to the end of the div

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
