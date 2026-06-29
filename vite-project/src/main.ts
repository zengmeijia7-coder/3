import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div style="max-width:800px;margin:40px auto;font-family:Arial">

    <h1>📊 Economics CV Optimizer</h1>
    <p>Improve your CV for top universities & internships</p>

    <textarea id="cv" placeholder="Paste your CV here..." 
      style="width:100%;height:200px;margin-top:20px;"></textarea>

    <input id="target" placeholder="Target (e.g. LSE / Internship)"
      style="width:100%;margin-top:10px;padding:8px;" />

    <button id="btn" 
      style="margin-top:10px;width:100%;padding:10px;">
      🚀 Optimize CV
    </button>

    <pre id="output" style="margin-top:20px;white-space:pre-wrap;"></pre>

  </div>
`;

const cv = document.querySelector("#cv") as HTMLTextAreaElement;
const target = document.querySelector("#target") as HTMLInputElement;
const output = document.querySelector("#output") as HTMLPreElement;

document.querySelector("#btn")!.addEventListener("click", () => {
  output.innerText =
    "📌 Optimized CV (demo version):\n\n" +
    "• Improved structure\n• Stronger economics language\n• Quantified achievements\n\n" +
    "\n--- ORIGINAL ---\n" +
    cv.value +
    "\n\n--- TARGET ---\n" +
    target.value;
});
