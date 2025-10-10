
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
df = pd.read_csv("insurance.csv")

# Plot
plt.figure(figsize=(8, 5))
sns.scatterplot(x='age', y='charges', hue='smoker', data=df, palette='coolwarm')
plt.title("Insurance Charges vs Age (Smokers vs Non-Smokers)")
plt.xlabel("Age")
plt.ylabel("Insurance Charges")
plt.legend(title="Smoker")
plt.grid(True)

# Show the plot only (no file saving)
plt.show()
