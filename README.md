# aipeqs.github.io
A web app simulator for the government efficiency and data privacy indices for ULBs.

## Instructions for Simulator Use

### Data Entry

On the landing page, input the name of the city or ULB to be analysed, along with the population of said city. 

After this information is input, the website redirects to the page with the analysis. Using the population, the city is placed into one of the following five bins for comparison:

1. 0.25 - 0.5 Lakh
2. 0.5 - 0.75 Lakh
3. 0.75 - 1 Lakh
4. 1 - 2 Lakh
5. ≥ 2 Lakh

After being placed into a bin, the data for the city you entered will be generated, not based on numbers specific to that city, but based on the data already stored for cities of that size. This data was gathered from the ULBs in Andhra Pradesh, India.

### Index Display

On the page with the simulator, the first chart that shows up is a scatter chart of the IPI (Information Privacy Index) against the GEI (Government Efficiency Index). The values for the city alongside those of the averages for its population will be highlighted in red and blue, respectively. The other plots, which will be in gray are those that have been calculated for the other four population bins. This chart cannot be altered.

### Index Factor Display

Below this chart, there are 2 buttons labelled IPI and GEI, which will allow for a deep dive into the factors contributing to these values.

* Clicking the GEI button will lead to another scatter chart where timeliness is plotted against accuracy. The chart is populated just as the one above.
* The IPI button leads to a scatter chart of Right Collection against Right Use

Again, the values here cannot be directly altered by the user.


### Services

Again, there are a set of buttons that appear under the charts described above. For either of the options, the buttons are again the labels on the axes. Clicking on any of these buttons leads to a bar chart where that attribute of the ULB's services are compared with the average, whether that attribute **timeliness, accuracy, etc.** It is at this point where the values can begin to be altered through sliding range inputs. 

For each of the services, a range input will appear below the chart to allow for the user to move that value anywhere between 0 and 1. All the charts will then reflect any changes made. 

### Departments

If the **PGR** button is clicked below the services chart, the next chart on display is that for the PGR departments in an identical display as the services - with the comparisons, the sliding range inputs and the buttons below that allow for a deep dive into each of the departments. 


### Functionaries

If either the **Property Tax** or **Water Tax** options are selected after the services chart, then the next display will show the functionaries and how they compare in the attribute selected from the index factor display. This is the final display for these services.

### Complaints

Beyond the departments for **PGR**, one can take a further look into each of the complaints that fall within that department and how they were handled in comparison with the average for ULBs of similar size. This is the final display for the PGR service.
