
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("insurance.csv")


# Combined Effect: BMI + Smoker on Charges

plt.figure(figsize=(8, 5))
sns.barplot(
    x="smoker",
    y="charges",
    hue="bmi",
    data=df.sort_values("bmi"),
    dodge=False,
    palette="coolwarm"
)
plt.title("Impact of BMI and Smoking on Insurance Charges")
plt.xlabel("Smoker Status")
plt.ylabel("Average Charges")
plt.show()


# FacetGrid: BMI vs Charges by Smoker

g = sns.FacetGrid(df, col="smoker", height=5)
g.map_dataframe(sns.scatterplot, x="bmi", y="charges", alpha=0.7)
g.set_axis_labels("BMI", "Insurance Charges")
g.set_titles(col_template="Smoker: {col_name}")
plt.subplots_adjust(top=0.8)
g.fig.suptitle("BMI vs Charges — Separated by Smoker Status")
plt.show()


# BMI vs Charges (Obesity Impact)

sns.lmplot(
    x="bmi",
    y="charges",
    hue="smoker",
    data=df,
    aspect=1.3,
    height=5
)
plt.title("BMI vs Insurance Charges (Smokers vs Non-Smokers)")
plt.xlabel("BMI")
plt.ylabel("Insurance Charges")
plt.tight_layout()
plt.show()

print("Plots have been successfully displayed.")