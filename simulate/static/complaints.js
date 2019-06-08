function draw_pgr_complaints(ctx, title, labels, d1, d2) {

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



function pgr_ctime(argument) {
	// zooms into the complaints for a specific PGR department (for timeliness values)
	// go through all the complaints and make the datasets needed - need to ensure that the complaints match the ones in the comparison bins
	let ctx = create('complaint-flex', 'complaint-comp', 'complaints');
	var caption = `Comparison between the timeliness of the handling of the various complaints within the ${department} department`;

	let title_text = `Timeliness of ${department} Complaints`;

	let labels = [];
	let dataset1 = {}; //for the city
	let dataset2 = {}; //for the grade
	dataset1.label = city.name;
	dataset2.label = average.name;
	dataset1.values = [];
	dataset2.values = [];

	var form_labels = []; //labels for the range input forms
	var functions = []; //functions that allow for the changes and updates when the range form is altered
	var ids = []; //the ids of the individual forms

	for (var key in city.services["PGR"].departments[department].complaints) {

		labels.push(key);
		form_labels.push(`${key} Timeliness`);
		dataset1.values.push(city.services["PGR"].departments[department].complaints[key].time);
		dataset2.values.push(average.services["PGR"].departments[department].complaints[key].time);
	}

	draw(ctx, title_text, labels, dataset1, dataset2);
	form_values = dataset1.values;

}

function pgr_cacc(argument) {
	// zooms into the complaints for a specific PGR department (for accuracy values)
	let ctx = create('complaint-flex', 'complaint-comp', 'complaints');
	var caption = `Comparison between the timeliness of the handling of the various complaints within the ${department} department`;

	let title_text = `Timeliness of ${department} Complaints`;

	let labels = [];
	let dataset1 = {}; //for the city
	let dataset2 = {}; //for the grade
	dataset1.label = city.name;
	dataset2.label = average.name;
	dataset1.values = [];
	dataset2.values = [];

	var form_labels = []; //labels for the range input forms
	var functions = []; //functions that allow for the changes and updates when the range form is altered
	var ids = []; //the ids of the individual forms

	for (var key in city.services["PGR"].departments[department].complaints) {

		labels.push(key);
		form_labels.push(`${key} Accuracy`);
		dataset1.values.push(city.services["PGR"].departments[department].complaints[key].acc);
		dataset2.values.push(average.services["PGR"].departments[department].complaints[key].acc);
	}

	draw(ctx, title_text, labels, dataset1, dataset2);
	form_values = dataset1.values;
}

function pgr_ccoll(argument) {
	// zooms into the complaints for a specific PGR department (for right collection values)

	let ctx = create('complaint-flex', 'complaint-comp', 'complaints');
	var caption = `Comparison between the timeliness of the handling of the various complaints within the ${department} department`;

	let title_text = `Timeliness of ${department} Complaints`;

	let labels = [];
	let dataset1 = {}; //for the city
	let dataset2 = {}; //for the grade
	dataset1.label = city.name;
	dataset2.label = average.name;
	dataset1.values = [];
	dataset2.values = [];

	var form_labels = []; //labels for the range input forms
	var functions = []; //functions that allow for the changes and updates when the range form is altered
	var ids = []; //the ids of the individual forms

	for (var key in city.services["PGR"].departments[department].complaints) {

		labels.push(key);
		form_labels.push(`${key} Right Collection`);
		dataset1.values.push(city.services["PGR"].departments[department].complaints[key].coll);
		dataset2.values.push(average.services["PGR"].departments[department].complaints[key].coll);
	}

	draw(ctx, title_text, labels, dataset1, dataset2);
	form_values = dataset1.values;
}
