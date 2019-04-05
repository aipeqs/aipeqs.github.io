//load the data analysis as soon as the page is run
//function to find the city's tier
function find_tier(size) {
    if (size < 500000) {
        return 1;
    } else if (size < 1000000) {
        return 2;
    } else {
        return 3;
    }
}

//complete later when getting more specific

let PGR_fields = {
    0: "Name",
    1: "Mobile Number",
    2: "Email",
    3: "Address",
    4: "Select from top grievance",
    5: "Grievance Type",
    6: "Grievance Details",
    7: "Grievance Location",
    8: "Landmark"
};



let prop_fields = {
    0 : "Category of Ownership",
    1 : "Name",
    2 : "Property Type",
    3 : "Owner Name",
    4 : "Property Address",
    5 : "Usage",
    6 : "Classification",
    7 : "Zone",
    8 : "Age",
    9 : "Occupancy Type",
    10 : "Floor Details",
    11 : "Vacant Land Details",
    12 : "Document Enclosed Details",
    13 : "Mobile No",
    14 : "Amenities",
    15 : "Construction Type",
    16 : "Details of Surrounding",
    17 : "Boundaries of the Property",
    18 : "Guardian",
    19 : "Guardian Relation",
    20 : "Owner Gender"
};


let water_fields = {
    1 : "PT Assessment No",
    2 : "Name of Applicant",
    3 : "Address",
    4 : "Connection Type",
    5 : "Water Source Type",
    6 : "Property Type",
    7 : "Category",
    8 : "Usage Type",
    9 : "HSC Pipe Size",
    10 : "Property Tax",
    11 : "White Ration Card",
    12 : "Locality",
    13 : "Zone/Ward/Block",
    14 : "Pump Capacity",
    15 : "P Tax Receipt",
    16 : "Distribution Line",
    17 : "Email",
    18 : "No of Persons",
    19 : "No of Floors",
    20 : "20Rs Court Fee Stamp"

};

//the fields needed for each of the services
let tasks = {
    "PGR": [0, 1, 4, 5, 6, 7, 8],
    "Property Tax": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "Water Charges": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
};

//dictionary representation of the avergages
//lists in order of timeliness, accuracy for services and tasks
//dummy values

let PGR_functionaries = {
    "Citizen": [0.667, 0.4, 0.62, 0.63, 0.5],
    "Help Desk Officer": [0.456, 0.89, 0.64, 0.554, 0.5],
    "GO": [0.789, 0.8, 0.76, 0.8, 0.5],
    "ULB Official": [0.97, 0.5, 0.85, 0.73, 0.5]
};

let water_functionaries = {
    "CSC/Online": [0.56, 0.70],
    "Junior/Senior Asst": [0.57, 0.71],
    "Assistant Engineer": [0.58, 0.74],
    "Deputy Exe Eng": [0.63, 0.78],
    "Commissioner": [0.514, 0.72]
}; 

let prop_functionaries = {
    "CSC": [],
    "Junior/Senior Asst": [],
    "Bill Collector": [],
    "Revenue Inspector": [],
    "Revenue Officer": [],
    "Asst, Zonal Comm": []
};



let funcs = {
    "water": Object.keys(water_functionaries),
    "property": Object.keys(prop_functionaries),
    "pgr": Object.keys(PGR_functionaries)
};

let slas = {
    "water": 37,
    "pgr" : 45,
    "property" : 50
};

let servs = {
    "water" : "Water Charges",
    "pgr" : "Public Grievance Report",
    "property" : "Property Tax"
};

tiers = {
    1 : {
        "water" : {
            "CSC/Online": [0.47766749, 0.21768574, 0.24662957, 0.85006358, 0.25693903],
            "Junior/Senior Asst": [0.28960996, 0.87780578, 0.38138013, 0.45056971, 0.43556449],
            "Assistant Engineer": [0.52380777, 0.10367325, 0.31709859, 0.94947988, 0.42635399],
            "Deputy Exe Eng": [0.02530775, 0.19246246, 0.46040851, 0.69641343, 0.90783523],
            "Commissioner": [0.27911434, 0.71126973, 0.30421153, 0.90952011, 0.81334647]
        },
        "pgr" : {
            "Engineering" : {
                "Citizen": [0.84645183, 0.01958011, 0.53280601, 0.94079156, 0.43772946],
                "Help Desk Officer": [0.93892947, 0.78681955, 0.65958566, 0.76514043, 0.82710306],
                "GO": [0.37191569, 0.63327939, 0.90960702, 0.46732423, 0.65037992],
                "ULB Official": [0.20850409, 0.9645932, 0.79881092, 0.12169525, 0.95397699]
            },
            "PHS": {
                "Citizen": [0.14573786, 0.77816578, 0.92137926, 0.31840538, 0.47459345],
                "Help Desk Officer": [0.02520055, 0.22518359, 0.82517909, 0.64627083, 0.33580078],
                "GO": [0.99335895, 0.31884471, 0.49078007, 0.64615941, 0.92440646],
                "ULB Official": [0.41394311, 0.06108909, 0.94194011, 0.63917664, 0.43888791]
            },
            "Town Planning": {
                "Citizen": [0.34416309, 0.50614281, 0.8714986, 0.43772341, 0.01045425],
                "Help Desk Officer": [0.19376977, 0.64809041, 0.82720117, 0.77877967, 0.15442786],
                "GO": [0.60062418, 0.72143925, 0.50562985, 0.83030582, 0.92237138],
                "ULB Official": [0.11623094, 0.27960023, 0.35001661, 0.62369861, 0.44066095]
            },
            "UPA": {
                "Citizen": [0.98762905, 0.76939415, 0.19212136, 0.45509836, 0.77218311],
                "Help Desk Officer": [0.58002155, 0.08801468, 0.77577355, 0.72398236, 0.86880798],
                "GO": [0.55031398, 0.60838529, 0.53557115, 0.88829589, 0.51268418],
                "ULB Official": [0.01353696, 0.15643023, 0.51467516, 0.26201085, 0.92883616]
            },
        },
        "property" : {
            "CSC": [0.66223888, 0.38706229, 0.09053685, 0.86683344, 0.54171723],
            "Junior/Senior Asst": [0.26613365, 0.81789232, 0.91771948, 0.66903857, 0.65956962],
            "Bill Collector": [0.46887855, 0.37056548, 0.54987955, 0.09665937, 0.3424984],
            "Revenue Inspector": [0.31723022, 0.81897248, 0.1434412, 0.72796586, 0.01583651],
            "Revenue Officer": [0.78361035, 0.51926236, 0.26469669, 0.48887604, 0.73021528],
            "Asst, Zonal Comm": [0.66217748, 0.51378994, 0.33149482, 0.64156035, 0.58685574]
        }
    },
    2: {
        "water": {
            "CSC/Online": [0.47766749, 0.21768574, 0.24662957, 0.85006358, 0.25693903].map(x => x * 0.98),
            "Junior/Senior Asst": [0.28960996, 0.87780578, 0.38138013, 0.45056971, 0.43556449].map(x =>x* 0.98),
            "Assistant Engineer": [0.52380777, 0.10367325, 0.31709859, 0.94947988, 0.42635399].map(x => x*0.98),
            "Deputy Exe Eng": [0.02530775, 0.19246246, 0.46040851, 0.69641343, 0.90783523].map(x => x*0.98),
            "Commissioner": [0.27911434, 0.71126973, 0.30421153, 0.90952011, 0.81334647].map(x => x*0.98)
        },
        "pgr": {
            "Engineering": {
                "Citizen": [0.84645183, 0.01958011, 0.53280601, 0.94079156, 0.43772946].map(x => 0.98),
                "Help Desk Officer": [0.93892947, 0.78681955, 0.65958566, 0.76514043, 0.82710306].map(x => 0.98),
                "GO": [0.37191569, 0.63327939, 0.90960702, 0.46732423, 0.65037992].map(x => 0.98),
                "ULB Official": [0.20850409, 0.9645932, 0.79881092, 0.12169525, 0.95397699].map(x => 0.98)
            },
            "PHS": {
                "Citizen": [0.14573786, 0.77816578, 0.92137926, 0.31840538, 0.47459345].map(x => 0.98),
                "Help Desk Officer": [0.02520055, 0.22518359, 0.82517909, 0.64627083, 0.33580078].map(x => 0.98),
                "GO": [0.99335895, 0.31884471, 0.49078007, 0.64615941, 0.92440646].map(x => 0.98),
                "ULB Official": [0.41394311, 0.06108909, 0.94194011, 0.63917664, 0.43888791].map(x => 0.98)
            },
            "Town Planning": {
                "Citizen": [0.34416309, 0.50614281, 0.8714986, 0.43772341, 0.01045425].map(x => 0.98),
                "Help Desk Officer": [0.19376977, 0.64809041, 0.82720117, 0.77877967, 0.15442786].map(x => 0.98),
                "GO": [0.60062418, 0.72143925, 0.50562985, 0.83030582, 0.92237138].map(x => 0.98),
                "ULB Official": [0.11623094, 0.27960023, 0.35001661, 0.62369861, 0.44066095].map(x => 0.98)
            },
            "UPA": {
                "Citizen": [0.98762905, 0.76939415, 0.19212136, 0.45509836, 0.77218311].map(x => 0.98),
                "Help Desk Officer": [0.58002155, 0.08801468, 0.77577355, 0.72398236, 0.86880798].map(x => 0.98),
                "GO": [0.55031398, 0.60838529, 0.53557115, 0.88829589, 0.51268418].map(x => 0.98),
                "ULB Official": [0.01353696, 0.15643023, 0.51467516, 0.26201085, 0.92883616].map(x => 0.98)
            },
        },
        "property": {
            "CSC": [0.66223888, 0.38706229, 0.09053685, 0.86683344, 0.54171723].map(x => 0.98),
            "Junior/Senior Asst": [0.26613365, 0.81789232, 0.91771948, 0.66903857, 0.65956962].map(x => 0.98),
            "Bill Collector": [0.46887855, 0.37056548, 0.54987955, 0.09665937, 0.3424984].map(x => 0.98),
            "Revenue Inspector": [0.31723022, 0.81897248, 0.1434412, 0.72796586, 0.01583651].map(x => 0.98),
            "Revenue Officer": [0.78361035, 0.51926236, 0.26469669, 0.48887604, 0.73021528].map(x => 0.98),
            "Asst, Zonal Comm": [0.66217748, 0.51378994, 0.33149482, 0.64156035, 0.58685574].map(x => 0.98)
        }
    },
    3: {
        "water": {
            "CSC/Online": [0.47766749, 0.21768574, 0.24662957, 0.85006358, 0.25693903].map(x => 0.96),
            "Junior/Senior Asst": [0.28960996, 0.87780578, 0.38138013, 0.45056971, 0.43556449].map(x => 0.96),
            "Assistant Engineer": [0.52380777, 0.10367325, 0.31709859, 0.94947988, 0.42635399].map(x => 0.96),
            "Deputy Exe Eng": [0.02530775, 0.19246246, 0.46040851, 0.69641343, 0.90783523].map(x => 0.96),
            "Commissioner": [0.27911434, 0.71126973, 0.30421153, 0.90952011, 0.81334647].map(x => 0.96)
        },
        "pgr": {
            "Engineering": {
                "Citizen": [0.84645183, 0.01958011, 0.53280601, 0.94079156, 0.43772946].map(x => 0.96),
                "Help Desk Officer": [0.93892947, 0.78681955, 0.65958566, 0.76514043, 0.82710306].map(x => 0.96),
                "GO": [0.37191569, 0.63327939, 0.90960702, 0.46732423, 0.65037992].map(x => 0.96),
                "ULB Official": [0.20850409, 0.9645932, 0.79881092, 0.12169525, 0.95397699].map(x => 0.96)
            },
            "PHS": {
                "Citizen": [0.14573786, 0.77816578, 0.92137926, 0.31840538, 0.47459345].map(x => 0.96),
                "Help Desk Officer": [0.02520055, 0.22518359, 0.82517909, 0.64627083, 0.33580078].map(x => 0.96),
                "GO": [0.99335895, 0.31884471, 0.49078007, 0.64615941, 0.92440646].map(x => 0.96),
                "ULB Official": [0.41394311, 0.06108909, 0.94194011, 0.63917664, 0.43888791].map(x => 0.96)
            },
            "Town Planning": {
                "Citizen": [0.34416309, 0.50614281, 0.8714986, 0.43772341, 0.01045425].map(x => 0.96),
                "Help Desk Officer": [0.19376977, 0.64809041, 0.82720117, 0.77877967, 0.15442786].map(x => 0.96),
                "GO": [0.60062418, 0.72143925, 0.50562985, 0.83030582, 0.92237138].map(x => 0.96),
                "ULB Official": [0.11623094, 0.27960023, 0.35001661, 0.62369861, 0.44066095].map(x => 0.96)
            },
            "UPA": {
                "Citizen": [0.98762905, 0.76939415, 0.19212136, 0.45509836, 0.77218311].map(x => 0.96),
                "Help Desk Officer": [0.58002155, 0.08801468, 0.77577355, 0.72398236, 0.86880798].map(x => 0.96),
                "GO": [0.55031398, 0.60838529, 0.53557115, 0.88829589, 0.51268418].map(x => 0.96),
                "ULB Official": [0.01353696, 0.15643023, 0.51467516, 0.26201085, 0.92883616].map(x => 0.96)
            },
        },
        "property": {
            "CSC": [0.66223888, 0.38706229, 0.09053685, 0.86683344, 0.54171723].map(x => 0.96),
            "Junior/Senior Asst": [0.26613365, 0.81789232, 0.91771948, 0.66903857, 0.65956962].map(x => 0.96),
            "Bill Collector": [0.46887855, 0.37056548, 0.54987955, 0.09665937, 0.3424984].map(x => 0.96),
            "Revenue Inspector": [0.31723022, 0.81897248, 0.1434412, 0.72796586, 0.01583651].map(x => 0.96),
            "Revenue Officer": [0.78361035, 0.51926236, 0.26469669, 0.48887604, 0.73021528].map(x => 0.96),
            "Asst, Zonal Comm": [0.66217748, 0.51378994, 0.33149482, 0.64156035, 0.58685574].map(x => 0.96)
        }
    },
};


class ULB {
    //random generation of ULB to facilitate simulation
    constructor(name, data) {
        this.name = name;
        this.services = [];
        for (let key in data) {
            //create the services in the tier
            this.services.push(new Service(key, data[key]));
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

class Tier {
    //made up of services, all of which are the same for each tier
    constructor(no) {
        this.name = "Tier " + no.toString();
        this.services = [];
        for (let key in tiers[no]) {
            //create the services in the tier
            console.log(key, tiers[no][key]);
            this.services.push(new Service(key, tiers[no][key]));
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
    constructor(name, values) {
        this.name = name;
        this.time = values[0];
        this.acc = values[1];
        this.use = values[2];
        this.coll = values[3];
        this.disc = values[4];
    }

    change_time(new_time) {
        this.time = new_time;
    }

    change_acc(new_acc) {
        this.acc = new_acc;
    }

    change_use(new_use) {
        this.use = new_use; 
    }

    change_coll(new_coll) {
        this.coll = new_coll;
    }

    change_disc(new_disc) {
        this.disc = new_disc;
    }
}


class Service {
    constructor(name, funcs) {
        this.title = servs[name];
        this.sla = slas[name];
        if (name !== "pgr") {
            this.departments = null;
            this.funcs = [];
            for (let key in funcs) {
                this.funcs.push(new Func(key, funcs[key]));
            }
        } else {
            //set up the departments
            this.departments = [];
            for (let key in funcs) {
                this.departments.push(new Department(key, funcs[key]));
            }
            //after creating all the departments, average the values over all the functionaries in each department
        }
        this.calc_average();
    }


    calc_average() {
        let time = 0;
        let acc = 0;
        let use = 0;
        let coll = 0;
        let disc = 0;
        let total = 0;
        if (this.departments === null) {
            total = this.funcs.length;
            for (let f of this.funcs) {
                time += f.time;
                acc += f.acc;
                use += f.use;
                coll += f.coll;
                disc += f.disc;
            }
        } else {
            total = this.departments.length;
            for (let f of this.departments) {
                time += f.time;
                acc += f.acc;
                use += f.use;
                coll += f.coll;
                disc += f.disc;
            }
        }

        console.log(time);
       
        this.time = time / total;
        this.acc = acc / total;
        this.use = use / total;
        this.coll = coll / total;
        this.disc = disc / total;
        this.gei = this.time * this.acc;
        this.ipi = this.use * this.coll * this.disc;
    }

    change_time(new_value) {
        difference = new_value - this.time;
        this.time = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].time -= difference; //changes the overall averages accordingly
            }
        } else {
            let change = null;
            for (let d in this.departments) {
                change = d.time - difference;
                d.change_time(change);
            }
        }
        
    }

    change_acc(new_value) {
        difference = new_value - this.acc;
        this.acc = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].acc -= difference; //changes the overall averages accordingly
            }
        } else {
            let change = null;
            for (let d in this.departments) {
                change = d.acc - difference;
                d.change_acc(change);
            }
        }
        
    }

    change_use(new_value) {
        difference = new_value - this.use;
        this.use = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].use -= difference; //changes the overall averages accordingly
            }
        } else {
            let change = null;
            for (let d in this.departments) {
                change = d.use - difference;
                d.change_use(change);
            }
        }
        
    }

    change_coll(new_value) {
        difference = new_value - this.coll;
        this.coll = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].coll -= difference; //changes the overall averages accordingly
            }
        } else {
            let change = null;
            for (let d in this.departments) {
                change = d.coll - difference;
                d.change_coll(change);
            }
        }
    }

    change_disc(new_value) {
        difference = new_value - this.disc;
        this.disc = new_value;
        if (this.departments === null) {
            for (let i = 0; i < this.funcs.length; i++) {
                this.funcs[i].disc -= difference; //changes the overall averages accordingly
            }
        } else {
            let change = null;
            for (let d in this.departments) {
                change = d.disc - difference;
                d.change_disc(change);
            }
        }
    }

}

class Department {
    //only applicable for PGR so far
    constructor(name, funcs) {
        this.name = name;
        this.funcs = [];
        this.names = Object.keys(funcs); //gets the title of all the functionaries in this department
        for (let key in funcs) {
            this.funcs.push(new Func(key, funcs[key]));
        }
        this.calc_average();
    }

    change_time(new_value) {
        difference = new_value - this.time;
        this.time = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].time -= difference; //changes the overall averages accordingly
        }
    }

    change_acc(new_value) {
        difference = new_value - this.acc;
        this.acc = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].acc -= difference; //changes the overall averages accordingly
        }
    }

    change_use(new_value) {
        difference = new_value - this.use;
        this.use = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].use -= difference; //changes the overall averages accordingly
        }
    }

    change_coll(new_value) {
        difference = new_value - this.coll;
        this.coll = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].coll -= difference; //changes the overall averages accordingly
        }
    }

    change_disc(new_value) {
        difference = new_value - this.disc;
        this.disc = new_value;
        for (let i = 0; i < this.funcs.length; i++) {
            this.funcs[i].disc -= difference; //changes the overall averages accordingly
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


function generate (name, population) {
    let tier = find_tier(population);
    console.log(tier);
    let averages = new Tier(tier); //for comparisons
    //now to generate the random data points for the ULB to be simulated
    let ulb_data = {
        "water": {
            "CSC/Online": Array.from({ length: 5 }, () => Math.random()),
            "Junior/Senior Asst": Array.from({ length: 5 }, () => Math.random()),
            "Assistant Engineer": Array.from({ length: 5 }, () => Math.random()),
            "Deputy Exe Eng": Array.from({ length: 5 }, () => Math.random()),
            "Commissioner": Array.from({ length: 5 }, () => Math.random())
        },
        "pgr": {
            "Engineering": {
                "Citizen": Array.from({ length: 5 }, () => Math.random()),
                "Help Desk Officer": Array.from({ length: 5 }, () => Math.random()),
                "GO": Array.from({ length: 5 }, () => Math.random()),
                "ULB Official": Array.from({ length: 5 }, () => Math.random())
            },
            "PHS": {
                "Citizen": Array.from({ length: 5 }, () => Math.random()),
                "Help Desk Officer": Array.from({ length: 5 }, () => Math.random()),
                "GO": Array.from({ length: 5 }, () => Math.random()),
                "ULB Official": Array.from({ length: 5 }, () => Math.random())
            },
            "Town Planning": {
                "Citizen": Array.from({ length: 5 }, () => Math.random()),
                "Help Desk Officer": Array.from({ length: 5 }, () => Math.random()),
                "GO": Array.from({ length: 5 }, () => Math.random()),
                "ULB Official": Array.from({ length: 5 }, () => Math.random())
            },
            "UPA": {
                "Citizen": Array.from({ length: 5 }, () => Math.random()),
                "Help Desk Officer": Array.from({ length: 5 }, () => Math.random()),
                "GO": Array.from({ length: 5 }, () => Math.random()),
                "ULB Official": Array.from({ length: 5 }, () => Math.random())
            },
        },
        "property": {
            "CSC": Array.from({ length: 5 }, () => Math.random()),
            "Junior/Senior Asst": Array.from({ length: 5 }, () => Math.random()),
            "Bill Collector": Array.from({ length: 5 }, () => Math.random()),
            "Revenue Inspector": Array.from({ length: 5 }, () => Math.random()),
            "Revenue Officer": Array.from({ length: 5 }, () => Math.random()),
            "Asst, Zonal Comm": Array.from({ length: 5 }, () => Math.random())
        }
    };
    let current = new ULB(name, ulb_data);
    console.log(averages);
    console.log(current);
    return [averages, current];
}