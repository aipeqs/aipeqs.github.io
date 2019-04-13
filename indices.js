//creating the graphs for the IPIs and GEIs
function graph_indices (average, city) {
    //gathers the data and plots the GEI and the IPI
    let trace1 = {
        x: [average.gei],
        y: [average.ipi],
        mode: 'markers',
        type: 'scatter',
        name: average.name,
        text: [average.name],
        marker: { size: 12 }
    };

    let trace2 = {
        x: [city.gei],
        y: [city.ipi],
        mode: 'markers',
        type: 'scatter',
        name: city.name,
        text: [city.name],
        marker: { size: 12 }
    };

    let data = [trace1, trace2];


    let layout = {
        title: {
            text: 'IPI against GEI',
            font: {
                family: 'Courier New, monospace',
                size: 24
            },
            xref: 'paper',
            x: 0.05,
        },
        xaxis: {
            title: {
                text: 'GEI',
                font: {
                    family: 'Courier New, monospace',
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            range: [0, 1]
        },
        yaxis: {
            title: {
                text: 'IPI',
                font: {
                    family: 'Courier New, monospace',
                    size: 9,
                    color: '#7f7f7f'
                }
            },
            range: [0, 1]
        }
    };


    Plotly.newPlot('indices', data, layout);
    document.getElementById('index-zoom').style.display = 'block';
}