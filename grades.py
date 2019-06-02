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


def calc_average_time():
    #needs to be made specific to ULBs
    phs = {'Provision of garbage bin': 0.497737556561086, 'Desilting of Drain': 0.46659122220035426, 'Stray Pigs': 0.4067887931034483, 'Bio Medical waste/Health hazard waste removal': 0.38170055452865065, 'Dog menace': 0.3688835630117835, 'Absenteesim of door to door garbage collector': 0.47543196544276456, 'Over flowing of garbage bins': 0.4191279887482419, 'Removal of garbage': 0.543658782083543, 'Mosquito menace': 0.6806242862580891, 'Absenteesim of sweepers': 0.5391621129326047, 'Unsanitary conditions on the road': 0.3793103448275862, 'Improper Sweeping': 0.5095923261390888, 'Complaints regarding public toilets': 0.4232558139534884, 'Issues relating to Vacant lands': 0.5788934426229508, 'Broken Bin': 0.6247288503253796, 'Stagnation of water': 0.4192655935613682, 'Removal of Debris': 0.6716566866267465, 'Spilling of Garbage from lorry': 0.32142857142857145, 'Disposal of removed silt on the Road': 0.5267471958584987, 'Unauthorised sale of meat and meat product': 0.32, 'Illegal draining of sewage to SWD/Open site': 0.44039735099337746, 'Complaints regarding restaurants / Function halls': 0.4140625, 'Food adulteration: Road Side Eateries': 0.415929203539823, 'Garbage lorry with out Net': 0.6296296296296297, 'Open defecation- free (ODF)': 0.3076923076923077, 'Fevers - Dengue/Malaria/ Gastro-enteritis': 0.5553435114503816, 'Shifting of garbage bin': 0.4148471615720524, 'Complaint Regarding School Toilets': 0.4166666666666667, 'Obstruction of road by Trees branches': 0.4502923976608187, 'Complaints regarding Dispensary': 0.4485294117647059, 'Complaints regarding burial ground': 0.35714285714285715, 'Death of Stray Animals': 0.26961483594864477, 'Burning of garbage': 0.507, 'Request for Anti Larval operations - to prevent  Dengue /Malaria etc': 0.6, 'Unhygeinic conditions because of Slaughter House': 0.5072463768115942, 'Poor maintenance of Public toilets at Fuel stations': 0.27906976744186046, 'Community Toilets': 0.30288461538461536, 'Removal of fallen trees': 0.47058823529411764, 'Complaints regarding function Halls': 0.2777777777777778, 'Stray cattle': 0.3548387096774194, 'Transfer Station Smell': 0.4189189189189189, 'Illegal slaughtering': 0.4444444444444444, 'Unauthorised tree Cutting': 0.47959183673469385, 'Silt by the side of dividers': 0.8783068783068783, 'Unclaimed Dead Bodies': 0.1111111111111111, 'Unhygienic and improper transport of meat and livestock': 0.2222222222222222, 'correction of Birth certificate': 0.0, 'Hanging of Streetlight Wires': 0.0, 'Non Burning of Street Lights': 0.0, 'Complaints regarding Schools': 0.0, 'Water pipe leakage': 0.0, 'Issues Related to Drinking Water Supply': 0.0, 'Unauthorised Road cutting': 0.0, 'Poor quality of work': 0.0};

    upa = {'Non Receipt of Pensions (Disabled/ Old age/ Widow)': 0.5339805825242718, 'Disputes in SSG / SLF / TLF': 0.6451612903225806, 'Sanction of Gas Connection Under Deepam Scheme': 0.6363636363636364, 'Vaddi Leni Runalu': 0.23684210526315788, 'Non Sanction of Bank Linkage to the group': 0.5, 'Complaints regarding all Sanctioned loans': 0.618421052631579, 'Provision of Placement after Training under ESTP': 0.5333333333333333};


    engineering = {'Repairs to existing footpath': 0.6825938566552902, 'Non Burning of Street Lights': 0.5010003637686431, 'Issues Related to Drinking Water Supply': 0.581074297188755, 'Water pipe leakage': 0.5257608435178529, 'Repairs to Flyovers/ bridges/ Culverts': 0.6535508637236085, 'Pot hole fill up/Repairs to the damage surface': 0.6800911854103343, 'Maintenance of Parks': 0.7385229540918163, 'Stoppage of Civil Works': 0.36036036036036034, 'Obstruction of water flow': 0.38642857142857145, 'Repair Bore wells': 0.5452240067624683, 'UGD Over Flow': 0.5858752056701684, 'Hanging of Streetlight Wires': 0.6633064516129032, 'Replacement of Cover for Manholes': 0.6451612903225806, 'Unauthorised Road cutting': 0.30242825607064017, 'Contamination of Water': 0.39901477832512317, 'Poor quality of work': 0.35520684736091296, 'Electric Shock due to street light': 0.4975124378109453, 'Repairs to the SWD': 0.670995670995671, 'Repairs to Centre Median': 0.6341463414634146, 'Repairs to Traffic Island': 0.625, 'Maintenance of Playground': 0.8431372549019608, 'Water Supply-Others': 0.6666666666666666, 'New Street light': 0.7183098591549296, 'Electrical shock due to street light': 0.5, 'POT HOLE FILL UP/REPAIRS TO DAMAGE SURFACE': 0.6666666666666666, 'tap repair': 0.7272727272727273, 'Desilting of Drain': 0.2765957446808511, 'Illegal draining of sewage to SWD/Open site': 0.6666666666666666, 'Obstruction of road by Trees branches': 0.3333333333333333, 'Stagnation of water': 0.6111111111111112, 'Complaints regarding Schools': 1.0, 'Complaints regarding public toilets': 0.875};

    admin = {'Complaints regarding Voter list': 0.48484848484848486, 'Inclusion, delection of correction in the Voter list': 0.5503355704697986, 'Complaints regarding Schools': 0.3425414364640884, 'pay fixation promotion scale': 0.5, 'RTI act': 0.0};

    rev = {'Complaints related to property tax': 0.7292351008916002, 'New Property Tax Fixation': 0.7341040462427746, 'Double Assessments': 0.6538461538461539, 'Errors in demand Notice': 0.7971014492753623, 'Revision Petition on Property Tax': 0.8818565400843882, 'Property Tax Bifurcation': 0.6428571428571429, 'Transfer of Title of property': 0.6232876712328768, 'Complaints related to issue of all types of license': 0.7167381974248928, 'New Vacant Land tax Fixation': 0.6666666666666666, 'Vacancy Remission': 0.8, 'Improper Sweeping': 0.8, 'solvency': 0.0, 'Demand Extract': 1.0, 'Issues relating to Vacant lands': 0.5, 'Desilting of Drain': 0.0, 'Non Burning of Street Lights': 0.0, 'Complaints regarding all Sanctioned loans': 1.0, 'Water pipe leakage': 0.0, 'Mosquito menace': 0.0, 'Stray Pigs': 0.0, 'Broken Bin': 0.0, 'Stagnation of water': 0.0, 'Hanging of Streetlight Wires': 0.0, 'Absenteesim of door to door garbage collector': 0.0, 'Issues Related to Drinking Water Supply': 0.0, 'Provision of Placement after Training under ESTP': 1.0};

    town_planning = {'Unauthorised / Illegal construction': 0.6301575393848462, 'Encroachment on the public property': 0.3761804826862539, 'Removal of shops in the footpath': 0.4763092269326683, 'Issues relating to Advertisement Boards': 0.5285714285714286, 'Parking Issue': 0.2979942693409742, 'Violation of DCR/Building bye laws': 0.6387665198237885, 'Unauthorised Advt. Boards': 0.45, 'Misuse of Community Hall': 0.30434782608695654, 'Over head cable Wires running in Hapazard manner': 0.18421052631578946, 'property survey': 0.0, 'Removal of Debris': 0.0};

    phs_avg = sum(phs.values()) / len(phs)
    upa_avg = sum(upa.values()) / len(upa)
    eng_avg = sum(engineering.values()) / len(engineering)
    admin_avg = sum(admin.values()) / len(admin)
    rev_avg = sum(rev.values()) / len(rev)
    town_planning_avg = sum(town_planning.values()) / len(town_planning)

    print("PHS: " + str(phs_avg))
    print("UPA: " + str(upa_avg))
    print("Engineering: " + str(eng_avg))
    print("Administration: " + str(admin_avg))
    print("Revenue: " + str(rev_avg))
    print("TP: " + str(town_planning_avg))

    pgr_average  = (phs_avg + upa_avg + eng_avg + admin_avg + rev_avg + town_planning_avg) / 6

    print("PGR: " + str(pgr_average))


def pgr_info(time):
    f = open("PGR.csv")
    reader = csv.reader(f)
    for ulb, dept, cpt, days, sla, ontime in reader:

        # formatting of the data into a uniform form
        on_add = 1 if ontime == 'true' else 0
        ulb = ulb.title()
        dept = dept.title()
        cpt = cpt.title()


        if ulb not in time:
            time[ulb] = {
                dept : {cpt : {'count' : 1, 'ontime': on_add}}
            }
        else:
            if dept not in time[ulb]:
                time[ulb][dept] = {cpt : {'count' : 1, 'ontime': on_add}}
            else:
                if cpt not in time[ulb][dept]:
                    time[ulb][dept][cpt] = {'count' : 1, 'ontime': on_add}
                else:
                    time[ulb][dept][cpt]['count'] += 1
                    time[ulb][dept][cpt]['ontime'] += on_add
    return time


def avg(time_info, c_timeliness):
    for ulb in time_info:
        for d in time_info[ulb]:
            for c, values in time_info[ulb][d].items():
                if ulb not in timeliness:
                    timeliness[ulb] = {
                        d : {c: values['ontime']/values['count']}
                    }
                else:
                    if d not in timeliness[ulb]:
                        timeliness[ulb][d] = {c : values['ontime']/values['count']}
                    else:
                        timeliness[ulb][d][c] = values['ontime']/values['count']

    for u, v in timeliness.items():
        for d, val in v.items():
            timeliness[u][d]['time'] = (sum(val.values()) / len(val))

if __name__ == "__main__":
    # pgr_complaints()
    # final = {}
    # for key, value in town_planning.items():
    #     final[key] = value['ontime']/value['total']
    # print(final)

    time_info = {}
    pgr_info(time_info)
    # print(time_info)
    timeliness = {}
    avg(time_info, timeliness)
    print(timeliness)
