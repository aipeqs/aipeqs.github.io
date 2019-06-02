//load the data analysis as soon as the page is run
//function to find the city's tier



//the dictionary(object) below contains the approximated accuracies of the services and their components. This was extracted from the data
// TODO:


const LAKH = 100000;

function findbin(pop) {
	if (0.25*LAKH <= pop && pop <= 0.5*LAKH){
        return 1;
	}
    else if (0.5*LAKH < pop && pop <= 0.75*LAKH) {
        return 2;
    }
    else if (0.75*LAKH < pop && pop <= LAKH) {
        return 3;
    }
    else if (LAKH < pop && pop<= 2*LAKH) {
        return 4;
    }
    else{
        return 5;
    }
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
        this.time = gei_info.Timeliness;
        this.acc = gei_info.Accuracy;
        this.services = [];
        for (let key in services) {
            //create the services in the tier
            this.services.push(new Service(key, services[key], gei_info[key]));
        }
        this.calc_average();
    }

    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (let f of this.services) {
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

//indices that point to the following timeliness values in the bins dictionary
let indices = {
    "PGR": 0,
    "Property Tax" : 1,
    "Water Tax": 2
};

//the average timeliness for the PGR, property tax, water tax and the overall avergae in each ULB bin
let bins = {1: [0.6581644103055556, 0.19514165166666667, 0.6161971922500001, 0.4898344180833334], 2: [0.6663472859411763, 0.19842400691176473, 0.5859213480588236, 0.48356421358823526], 3: [0.6471763774285714, 0.2226724242857143, 0.7323666677142857, 0.5340718231428571], 4: [0.6601050201875001, 0.22632661906249998, 0.652377637, 0.5129364253750001], 5: [0.6704651711764706, 0.18786100776470588, 0.5341360854117648, 0.4641540881764706]};

let ulb_bins = {1: ['1155', '1156', '1157', '1158', '1120', '1124', '1164', '1165', '1161', '1162', '1160', '1151', '1152', '1153', '1148', '1147', '1150', '1149', '1062', '1065', '1140', '1139', '1072', '1146', '1144', '1145', '1076', '1078', '1142', '1082', '1083', '1133', '1134', '1137', '1092', '1135'], 2: ['1006', '1010', '1117', '1118', '1119', '1122', '1123', '1125', '1019', '1022', '1023', '1025', '1026', '1027', '1131', '1132', '1143', '1029', '1127', '1033', '1034', '1059', '1061', '1063', '1066', '1067', '1069', '1071', '1077', '1079', '1084', '1136', '1090', '1091'], 3: ['1005', '1011', '1121', '1018', '1030', '1032', '1081'], 4: ['1002', '1003', '1004', '1007', '1008', '1009', '1014', '1015', '1020', '1024', '1028', '1068', '1070', '1074', '1080', '1085'], 5: ['1001', '1154', '1012', '1013', '1016', '1017', '1163', '1021', '1031', '1035', '1060', '1064', '1138', '1073', '1075', '1086', '1093']};

bin_strings = {
	1: "0.25-0.5 Lakh",
	2: "0.5-0.75 Lakh",
	3: "0.75-1 Lakh",
	4: "1-2 Lakh",
	5: ">2 Lakh"
}

class Grade {
    //made up of services, all of which are the same for each tier
    //changed to make up the average of ULB values from the same one of the 5 population bins
    constructor(name) {
        this.name = bin_strings[name];
        this.time = bins[name][3];
        this.acc = 0.5;
        this.services = [];
        for (let key in services) {
            //create the services in the tier
            let gei = {
                "Timeliness" : bins[name][indices[key]],
                "Accuracy" : 1
            };

            this.services.push(new Service(key, services[key], gei));
        }
        this.calc_average();
    }

    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (let f of this.services) {
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

class Func {
    constructor(name, coll, gei) {
        // pass the values in an array
        this.name = name;
        this.time = gei.Timeliness;
        this.acc = gei.Accuracy;
        this.coll = coll;
    }

    //this is to carry through changes made at the upper levels
    change(attr, fraction) {
        if (attr === 'time') {
            this.time = this.time * (1+fraction);
        } else {
            if (attr === 'acc') {
                this.acc = this.acc * (1+fraction);
            }
            else {
                this.coll = this.coll * (1+fraction);
            }
        }
    }

    //this is for changes made directly from the user interface
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
    constructor(name, ipi, gei) {
        this.title = name;
        this.time = gei.Timeliness;
        this.acc = gei.Accuracy;
        this.coll = ipi["Right Collection"];
        this.use = ipi["Right Use"];
        this.disc = ipi["Right Disclosure"];
        if (name !== "PGR") {
            this.departments = null;
            this.funcs = [];
            for (let key in ipi.Functionaries) {
                this.funcs.push(new Func(key, ipi.Functionaries[key], gei));
            }
        } else {
            //set up the departments
            this.departments = [];
            for (let key in ipi.Departments) {
                console.log(key);
                this.departments.push(new Department(key, ipi.Departments[key], ipi.Functionaries, gei));
            }
            //after creating all the departments, average the values over all the functionaries in each department
        }
    }


    calc_average() {
        let time = 0;
        let acc = 0;
        let coll = 0;
        let total = 0;
        if (this.departments === null) {
            total = this.funcs.length;
            for (let f of this.funcs) {
                time += f.time;
                acc += f.acc;
                coll += f.coll;
            }
        } else {
            total = this.departments.length;
            for (let f of this.departments) {
                time += f.time;
                acc += f.acc;
                coll += f.coll;
            }
        }

        console.log(time);

        this.time = time / total;
        this.acc = acc / total;
        this.coll = coll / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }

    change_time(new_value) {
        let difference = new_value - this.time;
	    let diff_fraction = difference / this.time;
        this.time = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
		        this.funcs[i].chang("time", diff_fraction);
            }
        } else {
            for (let d of this.departments) {
                d.change("time", diff_fraction);
            }
        }

    }

    change_acc(new_value) {
        let difference = new_value - this.acc;
	    let diff_fraction = difference / this.acc;
        this.acc = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
		    this.funcs[i].change("acc", diff_fraction);
            }
        } else {
            for (let d of this.departments) {
                d.change("acc",diff_fraction);
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
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].change("coll", diff_fraction); //changes the overall averages accordingly
            }
        } else {
            for (let d of this.departments) {
                d.change("coll", diff_fraction);
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
        this.time = gei.Timeliness;
        this.acc = gei.Accuracy;
        this.funcs = [];
        for (let key in funcs) {
            this.funcs.push(new Func(key, funcs[key], gei));
        }
    }

    //leads down from services reduction
    change(attr, fraction) {
        if (attr === 'time') {
            this.time = this.time * (1 + fraction);
        } else {
            if (attr === 'acc') {
                this.acc = this.acc * (1 + fraction);
            }
            else {
                this.coll = this.coll * (1 + fraction);
            }
        }
    }

    change_time(new_value) {
        let difference = new_value - this.time; // if positive, an increase and negative a decrease so the best bet is just to add them
        let diff_fraction = difference / this.time;
        this.time = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].change("time", diff_fraction); //changes the overall averages accordingly
        }
    }

    change_acc(new_value) {
        let difference = new_value - this.acc;
        let diff_fraction = difference / this.acc;
        this.acc = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].change("acc", diff_fraction); //changes the overall averages accordingly
        }
    }


    change_coll(new_value) {
        let difference = new_value - this.coll;
        this.coll = new_value;
        let diff_fraction = difference / this.coll;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].change("coll", diff_fraction); //changes the overall averages accordingly
        }
    }


    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        for (let f of this.funcs) {
            time += f.time;
            acc += f.acc;
            use += f.use;
            coll += f.coll;
            disc += f.disc;
        }
        let total = this.funcs.length;
        this.time = time / total;
        this.acc = acc / total;
        this.use = use / total;
        this.coll = coll / total;
        this.disc = disc / total;
    }

}


//the accuracy data for the ULB's PGR information

//dictionary to match the official department names and the variable objects
// let department_match = {
//   "Engineering" : engineering,
//   "Administration" : admin,
//   "Revenue" : rev,
//   "UPA" : upa,
//   "PHS" : phs,
//   "Town Planning" : town_planning
// }
//
// class Complaint {
//   constructor (name, department) {
//     this.service = "PGR";
//     this.department = department;
//     this.complaint = name;
//     this.time = department_match.department.name;
//   }
// }

function generate (name, pop) {
	const bin = findbin(pop);
	console.log(bin);
    let averages = new Grade(bin); //for comparisons - the average values of all Andhra Pradesh ULBs with similar populations
    //now to generate the random data points for the ULB to be simulated
    items = ulb_bins[bin];
    var item = items[Math.floor(Math.random() * items.length)]; //creates a model of the ULB from one that already exists within its population bracket
    let current = new ULB(item, ulbs[item], gei_info[item]);
    current.name = name; //this is the ULB that has just been modelled after the one entered - change the name to match the one being simulated
    console.log(averages);
    console.log(current);

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
