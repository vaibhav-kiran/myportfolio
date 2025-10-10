
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load dataset
df = pd.read_csv("insurance.csv")

# Plot
plt.figure(figsize=(8, 5))
sns.boxplot(x="region", y="charges", hue="smoker", data=df)
plt.title("Regional Differences in Insurance Charges (Smokers vs Non-Smokers)")
plt.xlabel("Region")
plt.ylabel("Insurance Charges")
plt.legend(title="Smoker")

# Show the plot only (no file saving)
plt.show()
