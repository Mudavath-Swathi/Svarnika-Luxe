import { spawn } from "child_process";
import path from "path";

export const predictDiamondPrice = (req, res) => {
  try {
    const pythonPath = "python"; 
    const scriptPath = path.join("ml", "predict.py");

    const py = spawn(pythonPath, [scriptPath]);

    let output = "";
    let errorOutput = "";

    
    py.stdin.write(JSON.stringify(req.body));
    py.stdin.end();

    py.stdout.on("data", (data) => {
      output += data.toString();
    });

    py.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    py.on("close", () => {
      if (errorOutput) {
        return res.status(500).json({ error: errorOutput });
      }

      const result = JSON.parse(output);
      res.json(result);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};