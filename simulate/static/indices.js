//creating the graphs for the IPIs and GEIs
function graph_indices () {
    let ctx = document.getElementById('indices');
    if (ctx !== null) {
      ctx.remove();
    }
    ctx = document.createElement('canvas');
    ctx.setAttribute('id', 'indices');
    let o = document.getElementById('index-scatter');
    o.insertBefore(ctx, o.firstChild);

    let caption = document.getElementById('caption1')
    if (caption !== null) {
      caption.remove()
    }
    caption = document.createElement('p');
    caption.setAttribute('id', 'caption1');
    caption.innerText = 'The figure above shows the IPI against the GEI of the average city within the same size bracket as ' + city.name + ' in blue, while the simulated values for ' + city.name + ' are in red. The gray points represent the same values of the 4 other ULB population brackets.';

    let t = document.getElementById("index-zoom");
    if (t === null) {
      butt();
    }

    o.insertBefore(caption, o.firstChild);
    o.insertBefore(ctx, o.firstChild);

    let scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{label: average.name ,data: [{x: average.gei, y: average.ipi}], backgroundColor: 'Blue'},
                     {label: city.name, data: [{x: city.gei, y: city.ipi}], backgroundColor: 'Red'},
                     {label: comparisons[0].name, data: [{x: comparisons[0].gei, y: comparisons[0].ipi}], backgroundColor: 'Gray'},
                     {label: comparisons[1].name, data: [{x: comparisons[1].gei, y: comparisons[1].ipi}], backgroundColor: 'Gray'},
                     {label: comparisons[2].name, data: [{x: comparisons[2].gei, y: comparisons[2].ipi}], backgroundColor: 'Gray'},
                     {label: comparisons[3].name, data: [{x: comparisons[3].gei, y: comparisons[3].ipi}], backgroundColor: 'Gray'}]
                   },
      options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom',
                  ticks : {
                    max: 1.0,
                    min: 0.0
                  },
                  scaleLabel: {
                    labelString: 'GEI',
                    display: true
                  }
              }],
              yAxes: [{
                  ticks : {
                    max: 1.0,
                    min: 0.0
                  },
                  scaleLabel: {
                    labelString: 'IPI',
                    display: true
                  }
              }]
          },
          title : {
            display: true,
            text: 'IPI against GEI'
          },
          actions : ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
          legend: {
            labels: {
              filter: function(item, chart) {
                // Logic to remove a particular legend item goes here
                return item.text.includes(city.name) || item.text.includes(average.name); //doesn't show all the labels for the faded points
              }
            }
          },
          tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    let d = data.datasets[tooltipItem.datasetIndex];
                    return d.label +'\n' + '(' + tooltipItem.label +', ' + tooltipItem.value +')';
                }
            }
          },
          onClick : function(e, item) {
            console.log(e);
            console.log(item);
          }
      }
  });
}

function butt() {
  // to add the buttons to zoom in on the GEI or IPI
  let h = document.createElement('div');
  h.className = "btn-group";
  h.setAttribute('id', "index-zoom");
  let h1 = document.createElement("button");
  h1.type = "button";
  h1.className = "btn btn-primary";
  h1.addEventListener('click', gei_serv);
  h1.innerHTML = "GEI";
  let h2 = document.createElement("button");
  h2.type = "button";
  h2.className = "btn btn-primary";
  h2.addEventListener('click', ipi_serv);
  h2.innerHTML = "IPI";
  h.appendChild(h1);
  h.appendChild(h2);
  parent = document.getElementById('index-scatter');
  after = document.getElementById('index-factors');
  if (after !== null) {
    parent.insertBefore(h, after);
  } else {
    parent.appendChild(h);
  }
}

// here, you want to generate the graph before the buttons

function gei_serv() {
  zoom1('gei');
  window.index = 'gei';
}

function ipi_serv() {
  zoom1('ipi');
  window.index = 'ipi';
}
