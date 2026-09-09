/**
 * FluentPath - Progress & Learning Analytics (js/progress.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  renderWeeklyActivityChart();
  renderBandTrajectoryChart();
});

function renderWeeklyActivityChart() {
  const canvas = document.getElementById("weekly-activity-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const textCol = isDark ? "#94a3b8" : "#64748b";
  const barBgCol = isDark ? "#334155" : "#e2e8f0";

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = [1.5, 2.0, 1.2, 2.5, 1.8, 3.2, 2.4]; // Study hours
  const maxHours = 4.0;

  const barWidth = 36;
  const spacing = (w - 60) / 7;

  days.forEach((day, i) => {
    const x = 40 + i * spacing;
    const barHeight = (hours[i] / maxHours) * (h - 70);
    const y = h - 40 - barHeight;

    // Background bar track
    ctx.fillStyle = barBgCol;
    ctx.beginPath();
    ctx.roundRect(x, 20, barWidth, h - 60, 6);
    ctx.fill();

    // Active filled bar with gradient
    const grad = ctx.createLinearGradient(0, y, 0, h - 40);
    grad.addColorStop(0, "#6366f1");
    grad.addColorStop(1, "#a855f7");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, 6);
    ctx.fill();

    // Value text
    ctx.fillStyle = isDark ? "#f8fafc" : "#0f172a";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${hours[i]}h`, x + barWidth / 2, y - 6);

    // Day label
    ctx.fillStyle = textCol;
    ctx.font = "12px sans-serif";
    ctx.fillText(day, x + barWidth / 2, h - 18);
  });
}

function renderBandTrajectoryChart() {
  const canvas = document.getElementById("band-trajectory-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const textCol = isDark ? "#94a3b8" : "#64748b";
  const gridCol = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";

  const tests = ["Diagnostic", "Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Target"];
  const bands = [5.5, 6.0, 6.0, 6.5, 6.5, 7.0, 7.5];

  // Draw grid lines
  ctx.strokeStyle = gridCol;
  ctx.lineWidth = 1;
  for (let b = 5; b <= 8; b += 0.5) {
    const y = h - 40 - ((b - 5) / 3) * (h - 70);
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();

    ctx.fillStyle = textCol;
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(`Band ${b.toFixed(1)}`, 35, y + 4);
  }

  // Draw Line
  const points = [];
  const spacing = (w - 70) / (tests.length - 1);

  tests.forEach((t, i) => {
    const x = 50 + i * spacing;
    const y = h - 40 - ((bands[i] - 5) / 3) * (h - 70);
    points.push({ x, y });

    // Label
    ctx.fillStyle = textCol;
    ctx.font = "11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(t, x, h - 18);
  });

  ctx.beginPath();
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 3;
  points.forEach((pt, i) => {
    if (i === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  });
  ctx.stroke();

  // Draw dots
  points.forEach((pt, i) => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = i === points.length - 1 ? "#f59e0b" : "#10b981";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Text above point
    ctx.fillStyle = isDark ? "#f8fafc" : "#0f172a";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(bands[i].toFixed(1), pt.x, pt.y - 10);
  });
}
