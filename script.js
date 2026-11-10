let steps = 6400;
let water = 1250;
const stepGoal = 10000;
const waterGoal = 2500;

function updateDashboard() {
  document.getElementById('steps').textContent = steps.toLocaleString();
  document.getElementById('water').textContent = water.toLocaleString() + ' ml';
  const stepPercent = Math.min(100, Math.round(steps / stepGoal * 100));
  const waterPercent = Math.min(100, Math.round(water / waterGoal * 100));
  document.getElementById('stepsPercent').textContent = stepPercent + '%';
  document.getElementById('waterPercent').textContent = waterPercent + '%';
  document.getElementById('stepsBar').style.width = stepPercent + '%';
  document.getElementById('waterBar').style.width = waterPercent + '%';
}

document.getElementById('today').textContent = new Date().toLocaleDateString(undefined, {
  weekday: 'short', month: 'short', day: 'numeric'
});
document.getElementById('addSteps').addEventListener('click', () => {
  steps += 500;
  updateDashboard();
});
document.getElementById('addWater').addEventListener('click', () => {
  water += 250;
  updateDashboard();
});
document.getElementById('reset').addEventListener('click', () => {
  steps = 6400;
  water = 1250;
  updateDashboard();
});
updateDashboard();
