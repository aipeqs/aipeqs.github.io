# read CSVs and calculate avgs
import csv

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

code_grades = {}
ulb_info = {}
#order of array is [pgr timeliness, property tax time, water taw time, overall timeliness]
# the automatic accuracies are all 0.5
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

def averages():
    for key, value in grades.items():
        grades[key] = [x/sizes[key] for x in value]

def ulb_read():
    f = open("ulbs.csv")
    reader = csv.reader(f)
    for region, district, code, name, grade, population in reader:
        ulb_info[code] = {
            "Region": region,
            "District": district,
            "Grade": grade,
            "Name": name,
            "Population" : float(population)
        }

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
    pgr["Right Disclosure"] = 0.5

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


    
if __name__ == "__main__":
    read()
    ulb_read()
    timeliness()
    print(ulb_info)
    print()
    print(gei_info)