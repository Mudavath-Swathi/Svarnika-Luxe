import { spawn } from "child_process";
import path from "path";

export const getRecommendations = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  
  const scriptPath = path.join(
    process.cwd(),
    "ml",
    "recommender",
    "recommend.py"
  );

  const python = spawn("python", [scriptPath]);

  let result = "";
  let error = "";

  
  python.stdin.write(JSON.stringify({ id: Number(id) }));
  python.stdin.end();

  
  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    error += data.toString();
  });

  python.on("close", () => {
    if (error) {
      console.error("Python error:", error);
      return res.status(500).json({ error });
    }

    try {
      const parsed = JSON.parse(result);
      return res.json(parsed);
    } catch (err) {
      return res.status(500).json({
        message: "Failed to parse ML response",
        raw: result,
      });
    }
  });
};