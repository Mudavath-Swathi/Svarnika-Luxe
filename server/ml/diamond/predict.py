import sys
import json
import pandas as pd
import joblib


model = joblib.load("ml/model.pkl")
encoders = joblib.load("ml/encoders.pkl")

input_data = json.load(sys.stdin)

df = pd.DataFrame([input_data])

for col in ["cut", "color", "clarity"]:
    df[col] = encoders[col].transform(df[col])

prediction = model.predict(df)[0]

print(json.dumps({"predicted_price": float(prediction)}))