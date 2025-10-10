import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("insurance.csv")

# Create age groups
bins = [0, 20, 30, 40, 50, 60, 70]
labels = ['<20', '21-30', '31-40', '41-50', '51-60', '60+']
df['age_group'] = pd.cut(df['age'], bins=bins, labels=labels, right=False)

# Calculate mean charges per age group
age_group_mean = df.groupby('age_group')['charges'].mean().reset_index()

# Plot
plt.figure(figsize=(8, 5))
sns.barplot(x='age_group', y='charges', data=age_group_mean, palette='viridis')
plt.title("Average Insurance Charges by Age Group")
plt.xlabel("Age Group")
plt.ylabel("Average Insurance Charges")
plt.grid(axis='y')

# Show the plot only (no file saving)
plt.show()
