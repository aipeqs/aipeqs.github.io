//creating the graphs for the IPIs and GEIs
function graph_indices (average, city) {
    //gathers the data and plots the GEI and the IPI
    var trace1 = {
        x: [average.gei],
        y: [average.ipi],
        mode: 'markers',
        type: 'scatter',
        name: average.name,
        text: [average.name],
        marker: { size: 12 }
    };

    var trace2 = {
        x: [city.gei],
        y: [city.ipi],
        mode: 'markers',
        type: 'scatter',
        name: city.name,
        text: [city.name],
        marker: { size: 12 }
    };

    var data = [trace1, trace2];

    var layout = {
        xaxis: {
            range: [0, 1]
        },
        yaxis: {
            range: [0, 1]
        },
        title: 'IPI Against GEI'
    };

    Plotly.newPlot('indices', data, layout);
}