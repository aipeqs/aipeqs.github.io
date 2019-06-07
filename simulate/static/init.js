const LAKH = 100000; //unit of measurement for the population of ULBs

//gives objects the property length
if (!Object.prototype.length) {
  Object.defineProperty(Object.prototype, 'length', {
    get: function(){
      return Object.keys(this).length
    }
  });
}

function findbin(pop) {
    //function to find the bin in which the ULB in question belongs based on its size

        if (0.25*LAKH <= pop && pop <= 0.5*LAKH) {
            return 1;
        } else {
            if (0.5*LAKH < pop && pop <= 0.75*LAKH) {
              return 2;
            } else {
              if (0.75*LAKH < pop && pop <= LAKH) {
                return 3;
              } else {
                if (LAKH < pop && pop<= 2*LAKH) {
                  return 4;
                } else {
                  return 5;
                }
              }
            }
        }
}

function abbreviate(word) {
    var res = word.split(" ");
    var final = "";
    if (res.length === 1) {
        return word;
    }
    for (var str of res) {
        final = final + str.charAt(0).toUpperCase();
    }
    return final;
}


//dictionary matching the service to its respective dictionary containing the GEI information for the separate bins
let service_gei_ulb_match = {
    "PGR": pgr_gei,
    "Property Tax": prop_gei,
    "Water Tax": water_gei
}

class ULB {
    //random generation of ULB to facilitate simulation
    constructor(name, data, gei_info) {
        // this will be taking the ulb_info[code] and the gei_info[code]
        this.name = name;
        this.region = data.Region;
        this.district = data.District;
        this.grade = data.Grade;
        this.population = data.Population;
        this.bin = findbin(this.population);
        this.time = 0;
        this.acc = 0;
        this.services = {};
        for (let key in services) {
            //create the services in the tier
            console.log("initialize");
            console.log(key);
            if (name in service_gei_ulb_match[key]){
                this.services[key] = new Service(key, services[key], service_gei_ulb_match[key][name]);
            }

        }
        this.calc_average();
    }

    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (var key in this.services) {
            var f = this.services[key];
            time += f.time;
            acc += f.acc;
            use += f.use;
            coll += f.coll;
            disc += f.disc;
        }
        let total = this.services.length;
        this.time = time / total;
        this.acc = acc / total;
        this.use = use / total;
        this.coll = coll / total;
        this.disc = disc / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }


}
//the average timeliness for the PGR, property tax, water tax and the overall avergae in each ULB bin
let ulb_bins = {1: ['1155', '1156', '1157', '1158', '1120', '1124', '1164', '1165', '1161', '1162', '1160', '1151', '1152', '1153', '1148', '1147', '1150', '1149', '1062', '1065', '1140', '1139', '1072', '1146', '1144', '1145', '1076', '1078', '1142', '1082', '1083', '1133', '1134', '1137', '1092', '1135'], 2: ['1006', '1010', '1117', '1118', '1119', '1122', '1123', '1125', '1019', '1022', '1023', '1025', '1026', '1027', '1131', '1132', '1143', '1029', '1127', '1033', '1034', '1059', '1061', '1063', '1066', '1067', '1069', '1071', '1077', '1079', '1084', '1136', '1090', '1091'], 3: ['1005', '1011', '1121', '1018', '1030', '1032', '1081'], 4: ['1002', '1003', '1004', '1007', '1008', '1009', '1014', '1015', '1020', '1024', '1028', '1068', '1070', '1074', '1080', '1085'], 5: ['1001', '1154', '1012', '1013', '1016', '1017', '1163', '1021', '1031', '1035', '1060', '1064', '1138', '1073', '1075', '1086', '1093']};

bin_strings = {
	1: "0.25-0.5 Lakh",
	2: "0.5-0.75 Lakh",
	3: "0.75-1 Lakh",
	4: "1-2 Lakh",
	5: ">2 Lakh"
}


//dictionary matching the service to its respective dictionary containing the GEI information for the separate bins
let service_gei_bins_match = {
    "PGR": pgr_bins,
    "Property Tax": prop_bins,
    "Water Tax": water_bins
}
class Grade {
    //made up of services, all of which are the same for each tier
    //changed to make up the average of ULB values from the same one of the 5 population bins
    constructor(name) {
        this.name = bin_strings[name];
        this.time = 0;
        this.acc = 0;
        this.services = {}; //a dictionary so that the service name can be matched to the service object easily
        for (let key in services) {
            //create the services in the tier
            if (name in service_gei_bins_match[key]){
                this.services[key] = new Service(key, services[key], service_gei_bins_match[key][name]);
            }

        }
        this.calc_average();
    }

    calc_average() {
        // calculate the average based on the individual components
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (var key in this.services) {
            var f = this.services[key];
            console.log(f)
            console.log(f.time);
            time += f.time;
            acc += f.acc;
            use += f.use;
            coll += f.coll;
            disc += f.disc;
        }
        let total = this.services.length;
        console.log(total);
        console.log(time);
        this.time = time / total;
        this.acc = acc / total;
        this.use = use / total;
        this.coll = coll / total;
        this.disc = disc / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }
}

class Func {
    //the index values for the functionaries within the departments or services
    //approximated to the same value as the levels above (due to no data being available at this level)
    constructor(name, coll, gei) {
        // pass the values in an array
        this.name = name;
        this.time = gei.Timeliness;
        this.acc = gei.Accuracy;
        this.coll = coll;
    }

    change(attr, fraction) {
        //implements changes that were made by the user through the interface at higher levels
        // if (attr === 'time') {
        //     this.time = this.time * (1+fraction);
        // } else {
        //     if (attr === 'acc') {
        //         this.acc = this.acc * (1+fraction);
        //     }
        //     else {
        //         this.coll = this.coll * (1+fraction);
        //     }
        // }

        switch(attr) {
            case 'time':
                this.time = this.time * (1+fraction);
                break;
            case 'acc':
                this.acc = this.acc * (1+fraction);
                break;
            default:
                this.coll = this.coll * (1+fraction);
                break;
        }
    }

    //this is for changes made directly from the user interface
    // the follow-through updates are made through the code in the interface
    change_time(new_time) {
        this.time = new_time;
    }

    change_acc(new_acc) {
        this.acc = new_acc;
    }

    change_coll(new_coll) {
        this.coll = new_coll;
    }
}


class Service {
    // represents the 3 services in each ULB
    constructor(name, ipi, gei) {
        this.title = name;
        this.coll = ipi["Right Collection"];
        this.use = ipi["Right Use"];
        this.disc = ipi["Right Disclosure"];
        if (name !== "PGR") { //only the PGR will have departments, the other 2 will lead directly to the functionaries
            this.time = gei['ontime']/gei['count'];
            this.acc = 1 - gei['reopened']/gei['count'];
            this.departments = null;
            this.funcs = {};
            for (let key in ipi.Functionaries) {
                this.funcs[abbreviate(key)] = new Func(key, ipi.Functionaries[key], {"Timeliness": this.time, "Accuracy": this.acc});
            }
        } else {
            //set up the departments
            console.log(gei);
            this.departments = {};
            for (let key in gei) {
                this.departments[key] = new Department(key, ipi.Departments[key], ipi.Functionaries, gei[key]);
            }
            //after creating all the departments, average the values over all the functionaries in each department
            this.calc_average();
        }
    }


    calc_average() {
        let time = 0;
        let acc = 0;
        let coll = 0;
        let total = 0;
        if (this.departments === null) {
            total = this.funcs.length;
            for (var key in this.funcs) {
                var f = this.funcs[key];
                time += f.time;
                acc += f.acc;
                coll += f.coll;
            }
        } else {
            total = this.departments.length;
            for (var key in this.departments) {
                var f = this.departments[key];
                time += f.time;
                acc += f.acc;
                coll += f.coll;
            }
        }


        this.time = time / total;
        this.acc = acc / total;
        this.coll = coll / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }

    change_time(new_value) {
        let difference = new_value - this.time;
	    let diff_fraction = difference / this.time; //reducing all the values by the same fraction to maintain consistency
        this.time = new_value;
        if (this.departments === null) {
            for (var key in this.funcs) {
		        this.funcs[key].change("time", diff_fraction);
            }
        } else {
            for (key in this.departments) {
                this.departments[key].change("time", diff_fraction);
            }
        }

    }

    change_acc(new_value) {
        let difference = new_value - this.acc;
	    let diff_fraction = difference / this.acc;
        this.acc = new_value;
        if (this.departments === null) {
            for (var key in this.funcs) {
		    this.funcs[key].change("acc", diff_fraction);
            }
        } else {
            for (key in this.departments) {
                this.departments[key].change("acc",diff_fraction);
            }
        }

    }

    change_use(new_value) {
        //may be related to right collection, but for now, we will see
        this.use = new_value;
    }

    change_coll(new_value) {
        let difference = new_value - this.coll;
        let diff_fraction = difference / this.coll;
        this.coll = new_value;
        if (this.departments === null) {
            for (var key in this.funcs) {
                this.funcs[key].change("coll", diff_fraction); //changes the overall averages accordingly
            }
        } else {
            for (key in this.departments) {
                this.departments[key].change("coll", diff_fraction);
            }
        }
    }

    change_disc(new_value) {
        this.disc = new_value;
    }

}

class Department {
    //the department will now have separate complaints
    //only applicable for PGR so far
    constructor(name, coll, funcs, gei) {
        this.name = name;
        this.coll = coll;
        this.time = 0;
        this.acc = 0;
        //the next level for PGR will be the complaints and not the functionaries
        // console.log("Passed to Department")
        // console.log(coll);
        // console.log(funcs);
        // console.log(gei);
        this.complaints = {};
        for (let key in gei) {
            this.complaints[key] = new Complaint(key, name, gei[key], funcs, coll);
        }
        this.calc_average();
    }

    //leads down from services reduction
    change(attr, fraction) {
        switch(attr) {
            case 'time':
                this.time = this.time * (1+fraction);
                break;
            case 'acc':
                this.acc = this.acc * (1+fraction);
                break;
            default:
                this.coll = this.coll * (1+fraction);
                break;
        }
    }

    change_time(new_value) {
        let difference = new_value - this.time; // if positive, an increase and negative a decrease so the best bet is just to add them
        let diff_fraction = difference / this.time;
        this.time = new_value;
        for (var key in this.complaints) {
            this.complaints[key].change("time", diff_fraction); //changes the overall averages accordingly
        }
    }

    change_acc(new_value) {
        let difference = new_value - this.acc;
        let diff_fraction = difference / this.acc;
        this.acc = new_value;
        for (var key in this.complaints) {
            this.complaints[key].change("acc", diff_fraction); //changes the overall averages accordingly
        }
    }


    change_coll(new_value) {
        let difference = new_value - this.coll;
        this.coll = new_value;
        let diff_fraction = difference / this.coll;
        for (var key in this.complaints) {
            this.complaints[key].change("coll", diff_fraction); //changes the overall averages accordingly
        }
    }


    calc_average() {
        let time = 0;
        let acc = 0;
        let coll = 0;
        for (var key in this.complaints) {
            var f = this.complaints[key];
            time += f.time;
            acc += f.acc;
            coll += f.coll;
        }
        let total = this.complaints.length;
        this.time = time / total;
        this.acc = acc / total;
        this.coll = coll / total;
    }

}

class Complaint {
    //representing the different complaints within the PGR departments
    constructor(name, dept, gei, funcs, coll) {
        this.title = name;
        this.department = dept;
        this.time = gei['ontime']/gei['count'];
        this.acc = 1 - gei['reopened']/gei['count'];
        this.coll = coll;
        this.funcs = {};
        for (let key in funcs) {
            this.funcs[abbreviate(key)] = new Func(key, funcs[key], {"Timeliness": this.time, "Accuracy": this.acc});
        }
    }

    calc_average() {
        let time = 0;
        let acc = 0;
        let coll = 0;
        for (var key in this.funcs) {
            var f = this.funcs[key];
            time += f.time;
            acc += f.acc;
            coll += f.coll;
        }
        let total = this.funcs.length;
        this.time = time / total;
        this.acc = acc / total;
        this.coll = coll / total;
    }

    change(attr, fraction) {
        switch(attr) {
            case 'time':
                this.time = this.time * (1+fraction);
                break;
            case 'acc':
                this.acc = this.acc * (1+fraction);
                break;
            default:
                this.coll = this.coll * (1+fraction);
                break;
        }
    }

    change_time(new_value) {
        let difference = new_value - this.time; // if positive, an increase and negative a decrease so the best bet is just to add them
        let diff_fraction = difference / this.time;
        this.time = new_value;
        for (var key in this.funcs) {
            this.funcs[key].change("time", diff_fraction); //changes the overall averages accordingly
        }
    }

    change_acc(new_value) {
        let difference = new_value - this.acc;
        let diff_fraction = difference / this.acc;
        this.acc = new_value;
        for (var key in this.funcs) {
            this.funcs[key].change("acc", diff_fraction); //changes the overall averages accordingly
        }
    }


    change_coll(new_value) {
        let difference = new_value - this.coll;
        this.coll = new_value;
        let diff_fraction = difference / this.coll;
        for (var key in this.funcs) {
            this.funcs[key].change("coll", diff_fraction); //changes the overall averages accordingly
        }
    }
}

function generate (name, pop) {
	const bin = findbin(pop);
  console.log(bin);
  let averages = new Grade(bin); //for comparisons - the average values of all Andhra Pradesh ULBs with similar populations
  //now to generate the random data points for the ULB to be simulated
  items = ulb_bins[bin];
  var item = items[Math.floor(Math.random() * items.length)]; //creates a model of the ULB from one that already exists within its population bracket
  let current = new ULB(item, ulbs[item], gei_info[item]);
  current.name = name; //this is the ULB that has just been modelled after the one entered - change the name to match the one being simulated

  let comparisons = [];

  // to create the comparison points for all the other bins
  for (let i = 1; i < 6; i++) {
  	if (i !== bin) {
  		comparisons.push(new Grade(i));
  	}
  }
  window.comparisons = comparisons;


  return [averages, current];
}
