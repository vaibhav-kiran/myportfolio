import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("insurance.csv")

# Select top 5 profiles
top5 = df.nlargest(5, 'charges')[['age', 'sex', 'bmi', 'smoker', 'region', 'charges']]

# Plot
plt.figure(figsize=(8, 5))
sns.barplot(y=top5['charges'], x=top5.index, palette="rocket")
plt.title("Top 5 Most Expensive Insurance Profiles")
plt.xlabel("Profile Index")
plt.ylabel("Charges ($)")

# Add labels on bars
for i, charge in enumerate(top5['charges']):
    plt.text(i, charge + 500, f"${charge:,.0f}", ha='center')

# Show the plot only (no file saving)
plt.show()

# Print details
print("\nTop 5 Most Expensive Profiles:")
print(top5)
