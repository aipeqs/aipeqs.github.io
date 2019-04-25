//creating the graphs for the IPIs and GEIs
function graph_indices (average, city) {
    let ctx = document.getElementById('indices');
    if (ctx !== null) {
      ctx.remove();
    }
    ctx = document.createElement('canvas');
    ctx.setAttribute('id', 'indices');
    let o = document.getElementById('index-scatter');
    o.insertBefore(ctx, o.firstChild);
    let t = document.getElementById("index-zoom");
    if (t === null) {
      butt();
    }
    let scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{label: average.name ,data: [{x: average.gei, y: average.ipi}], backgroundColor: 'Blue'},
                     {label: city.name, data: [{x: city.gei, y: city.ipi}], backgroundColor: 'Red'}]
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
          actions : ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
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
  document.getElementById('index-scatter').appendChild(h);
}

function gei_serv() {
  zoom1('gei');
  window.index = 'gei';
}

function ipi_serv() {
  zoom1('ipi');
  window.index = 'ipi';
}
