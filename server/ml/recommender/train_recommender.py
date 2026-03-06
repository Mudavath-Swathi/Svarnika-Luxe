import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.metrics.pairwise import cosine_similarity

# Load dataset
df = pd.read_csv("ml/data/jewelry_products.csv")

# Encode categorical columns
encoders = {}
for col in ["category", "material", "style"]:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le

# Scale price
scaler = StandardScaler()
df["price"] = scaler.fit_transform(df[["price"]])

# Features for similarity
features = df[["category", "material", "style", "price"]]

# Compute similarity matrix
similarity_matrix = cosine_similarity(features)

# Save everything
joblib.dump({
    "data": df,
    "similarity": similarity_matrix,
    "encoders": encoders,
    "scaler": scaler
}, "ml/recommender/recommender.pkl")

print("Recommender model trained and saved ✅")