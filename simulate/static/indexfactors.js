// to plot the index factors against each other
// will be put into the div with id index-factors

function geifactors(){
	let ctx = document.getElementById('factors-plot');
    if (ctx !== null) {
      ctx.remove();
    }
    ctx = document.createElement('canvas');
    ctx.setAttribute('id', 'factors-plot');
    let o = document.getElementById('index-factors');
    o.insertBefore(ctx, o.firstChild);
    // Inserting a caption for the description of the graph
    let caption = document.getElementById('caption2');
    if (caption !== null) {
      caption.remove();
    }
    caption = document.createElement('p');
    caption.setAttribute('id', 'caption2');
    caption.innerText = 'The figure above shows the Timeliness against the Accuracy of the average city within the same size bracket as ' + city.name + ' in blue, while the simulated values for ' + city.name + ' are in red. The plots in gray display the values associated with all the other population bins';
    o.appendChild(caption);
    

    let scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{label: average.name ,data: [{x: average.time, y: average.acc}], backgroundColor: 'Blue'},
                     {label: city.name, data: [{x: city.time, y: city.acc}], backgroundColor: 'Red'},
                     {label: comparisons[0].name, data: [{x: comparisons[0].time, y: comparisons[0].acc}], backgroundColor: 'Gray'},
                     {label: comparisons[1].name, data: [{x: comparisons[1].time, y: comparisons[1].acc}], backgroundColor: 'Gray'},
                     {label: comparisons[2].name, data: [{x: comparisons[2].time, y: comparisons[2].acc}], backgroundColor: 'Gray'},
                     {label: comparisons[3].name, data: [{x: comparisons[3].time, y: comparisons[3].acc}], backgroundColor: 'Gray'}]
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
                    labelString: 'Timeliness',
                    display: true
                  }
              }],
              yAxes: [{
                  ticks : {
                    max: 1.0,
                    min: 0.0
                  },
                  scaleLabel: {
                    labelString: 'Accuracy',
                    display: true
                  }
              }]
          },
          title : {
            display: true,
            text: 'Timeliness against Accuracy'
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
          }
      }
  });
}

function ipifactors() {
    console.log(city.use);
    console.log(city.coll);
  	let ctx = document.getElementById('factors-plot');
    if (ctx !== null) {
      ctx.remove();
    }
    ctx = document.createElement('canvas');
    ctx.setAttribute('id', 'factors-plot');
    let o = document.getElementById('index-factors');
    o.insertBefore(ctx, o.firstChild);
    // let t = document.getElementById("index-zoom");
    // if (t === null) {
    //   butt();
    // }
    // the caption of the chart
    let caption = document.getElementById('caption2')
    if (caption !== null) {
      caption.remove()
    }
    caption = document.createElement('p');
    caption.setAttribute('id', 'caption2');
    caption.innerText = 'The figure above shows the Right Use against the Right Collection of the average city within the same size bracket as ' + city.name + ' in blue, while the simulated values for ' + city.name + ' are in red. The Right Disclosure is always 0.6667. The scatter points are in exactly the same place as all ULBs also have the same Right Use and Right Collection values';
    

    o.appendChild(caption);

    let scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{label: average.name ,data: [{x: average.use, y: average.coll}], backgroundColor: 'Blue'},
                     {label: city.name, data: [{x: city.use, y: city.coll}], backgroundColor: 'Red'},
                     {label: comparisons[0].name, data: [{x: comparisons[0].use, y: comparisons[0].coll}], backgroundColor: 'Gray'}, //the gray spots are included to show the comparisons with the other bins
                     {label: comparisons[1].name, data: [{x: comparisons[1].use, y: comparisons[1].coll}], backgroundColor: 'Gray'},
                     {label: comparisons[2].name, data: [{x: comparisons[2].use, y: comparisons[2].coll}], backgroundColor: 'Gray'},
                     {label: comparisons[3].name, data: [{x: comparisons[3].use, y: comparisons[3].coll}], backgroundColor: 'Gray'}]
                   },
                   // the spots are not distinguished right now as they have the same values
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
                    labelString: 'Right Use',
                    display: true
                  }
              }],
              yAxes: [{
                  ticks : {
                    max: 1.0,
                    min: 0.0
                  },
                  scaleLabel: {
                    labelString: 'Right Collection',
                    display: true
                  }
              }]
          },
          title : {
            display: true,
            text: 'Right Collection against Right Use'
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
          }
      }
  });
}
