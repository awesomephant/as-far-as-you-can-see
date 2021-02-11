import globals
import rectangle
import csv
import setup

setup.run()

with open('./_data/values.csv', newline='') as file:
    reader = csv.DictReader(file)
    values = []
    ratios = []
    for row in reader:
        values.append(row)

    for i, vi in enumerate(values):
        for j, vj in enumerate(values):
            if (i != j):
                a = float(vi["Value"])
                b = float(vj["Value"])
                ratio = a / b
                ratios.append({
                    "a": a,
                    "b": b,
                    "ratio": ratio
                })

print("Drawing images for " + str(len(ratios)) + " ratios.")

for r in ratios:
    id = str(r["a"]) + "_" + str(r["b"])
    rectangle.draw(r["a"], r["b"], id)
