import sys
import json
import joblib

# Load recommender
bundle = joblib.load("ml/recommender/recommender.pkl")
df = bundle["data"]
similarity = bundle["similarity"]

# Read product id from Node.js
input_data = json.loads(sys.stdin.read())
product_id = input_data["id"]

# Find index
idx = df.index[df["id"] == product_id][0]

# Get similarity scores
scores = list(enumerate(similarity[idx]))
scores = sorted(scores, key=lambda x: x[1], reverse=True)

# Top 4 recommendations (excluding itself)
recommended = []
for i, _ in scores[1:5]:
    recommended.append(int(df.iloc[i]["id"]))

# Output JSON
print(json.dumps({ "recommended_ids": recommended }))