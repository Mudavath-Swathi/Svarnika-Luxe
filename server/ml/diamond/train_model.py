import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score


df = pd.read_csv("ml/data/diamonds.csv")


X = df.drop("price", axis=1)
y = df["price"]


label_encoders = {}

for col in ["cut", "color", "clarity"]:
    le = LabelEncoder()
    X[col] = le.fit_transform(X[col])
    label_encoders[col] = le


X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)


model = LinearRegression()
model.fit(X_train, y_train)


y_pred = model.predict(X_test)
score = r2_score(y_test, y_pred)

print(f"Model trained successfully!")
print(f"R² Score: {score:.4f}")


joblib.dump(model, "ml/model.pkl")
joblib.dump(label_encoders, "ml/encoders.pkl")

print("Model and encoders saved!")