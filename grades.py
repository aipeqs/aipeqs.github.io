# read CSVs and calculate avgs
import csv

LAKH = 100000

def determine_bin(pop):
    '''Returns the population categories'''
    if 0.25*LAKH <= pop <= 0.5*LAKH:
        return 1
    elif 0.5*LAKH < pop <= 0.75*LAKH:
        return 2
    elif 0.75*LAKH < pop <= LAKH:
        return 3
    elif LAKH < pop <= 2*LAKH:
        return 4
    else:
        return 5

grades = {
    "Corporation" : [0, 0, 0, 0],
    "Special": [0, 0, 0, 0],
    "II": [0, 0, 0, 0],
    "I": [0, 0, 0, 0],
    "III": [0, 0, 0, 0],
    "NP": [0, 0, 0, 0],
    "Selection": [0, 0, 0, 0]
}

matching_ULBs = {
    "Corporation": [],
    "Special": [],
    "II": [],
    "I": [],
    "III": [],
    "NP": [],
    "Selection": []
}

sizes = {
    "Corporation": 0,
    "Special": 0,
    "II": 0,
    "I": 0,
    "III": 0,
    "NP": 0,
    "Selection": 0
}

ulb_bins = {
    1:[],
    2:[],
    3:[],
    4:[],
    5:[]
}

bin_sizes = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0
}

bins = {
    1: [0,0,0,0],
    2: [0,0,0,0],
    3: [0,0,0,0],
    4: [0,0,0,0],
    5: [0,0,0,0]
}

code_grades = {}
ulb_info = {}
#order of array is [pgr timeliness, property tax time, water taw time, overall timeliness]
# the automatic accuracies are all 1
def read():
    f = open("grades.csv")
    reader = csv.reader(f)
    for code, grade in reader:
        code_grades[code] = grade
        matching_ULBs[grade].append(code)
    g = open("times.csv")
    reader2 = csv.reader(g)
    for code, pgr_time, ptax_time, wtax_time, time in reader2:
        ulb = code_grades.get(code)
        if ulb is not None:
            grades[ulb][0] += float(pgr_time)
            grades[ulb][1] += float(ptax_time)
            grades[ulb][2] += float(wtax_time)
            grades[ulb][3] += float(time)
            sizes[ulb] += 1
            sizes[ulb] += 1
            sizes[ulb] += 1
            sizes[ulb] += 1


def ulb_read():
    f = open("ulbs.csv")
    reader = csv.reader(f)
    for region, district, code, name, grade, population in reader:
        code_grades[code] = grade
        ulb_info[code] = {
            "Region": region,
            "District": district,
            "Grade": grade,
            "Name": name,
            "Population" : float(population)
        }
        ulb_bins[determine_bin(float(population))].append(code)

gei_info = {}

def timeliness():
    # runs through CSV file to get GEI info
    f = open("gei.csv")
    reader = csv.reader(f)
    for code, pgr_time, ptax_time, wtax_time, time, pgr_acc, ptax_acc, wtax_acc, acc in reader:
        gei_info[code] = {
            "PGR" : {
                "Timeliness": float(pgr_time),
                "Accuracy": float(pgr_acc)
            },
            "Property Tax" : {
                "Timeliness" : float(ptax_time),
                "Accuracy" : float(ptax_acc)
            },
            "Water Tax": {
                "Timeliness" : float(wtax_time),
                "Accuracy" : float(wtax_acc)
            },
            "Timeliness": float(time), 
            "Accuracy": float(acc)
        }

        # calculating the average timeliness across bins
        found = ulb_info.get(code)
        if found is not None:
            b = determine_bin(found["Population"])
            bins[b][0] += float(pgr_time)
            bins[b][1] += float(ptax_time)
            bins[b][2] += float(wtax_time)
            bins[b][3] += float(time)
            bin_sizes[b] += 1

def averages():
    for key, value in bins.items():
        bins[key] = [x/bin_sizes[key] for x in value]

pgr = {
    "Functionaries": {},
    "Departments": {}
}

wtax = {"Functionaries" : {}}
ptax = {"Functionaries": {}}

def ipi_info():
    f = open("pgr_collection.csv")
    reader = csv.reader(f)
    for functionary, coll in reader:
        pgr["Functionaries"][functionary] = float(coll) 
        # remember that only the functionaries handle right collection
    g = open("pgr_departs.csv")
    reader = csv.reader(g)
    for depart, use in reader:
        pgr["Departments"][depart] = float(use)
        # departments and services will have right use
        # services alone will have right disclosure
    pgr["Right Collection"] = float(use)
    pgr["Right Use"] = float(use)
    pgr["Right Disclosure"] = 1

    # property tax
    f = open("prop_coll.csv")
    reader = csv.reader(f)
    for functionary, coll in reader:
        ptax["Functionaries"][functionary] = float(coll)
        # remember that only the functionaries handle right collection
    ptax["Right Collection"] = 0.52811245
    ptax["Right Disclosure"] = 0.5
    ptax["Right Use"] = 0.52811245

    # water tax
    h = open("water_coll.csv")
    reader = csv.reader(h)
    for functionary, coll in reader:
        wtax["Functionaries"][functionary] = float(coll)
        # remember that only the functionaries handle right collection
    wtax["Right Collection"] = 0.392
    wtax["Right Disclosure"] = 0.5
    wtax["Right Use"] = 0.392


phs = {}
upa = {}
admin = {}
engin = {}
rev = {}
town_planning = {}


#function to read th different complaints within PGR departments
#for each of the complaints, the objects will consist of the number of them on time and the total number

def pgr_complaints():
    f = open("townplanning.csv")
    reader = csv.reader(f)
    for ulb, dept, complaint, sla, actual, ontime in reader: 

        if complaint not in town_planning:
            town_planning[complaint] = {
                'ontime' : 1 if ontime == 'true' else 0,
                'total' : 1
            }
        else:
            town_planning[complaint]['ontime'] += 1 if ontime == 'true' else 0
            town_planning[complaint]['total'] += 1

    
if __name__ == "__main__":
    pgr_complaints()
    final = {}
    for key, value in town_planning.items():
        final[key] = value['ontime']/value['total']
    print(final)

