//creating the graphs for the IPIs and GEIs
function graph_indices (average, city) {
    let ctx = document.getElementById('indices');
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
    document.getElementById('index-zoom').style.display = 'block';
}
