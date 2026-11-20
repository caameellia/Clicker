let score = 0;
let clicks = 0;
let clickPower = 1;
let upgradeCost = 10;
let achievementShown = false;

const scoreEl = document.getElementById('score');
const clicksEl = document.getElementById('clicks');
const powerEl = document.getElementById('power');
const clickBtn = document.getElementById('click-btn');
const upgradeBtn = document.getElementById('upgrade-btn');
const achievementEl = document.getElementById('achievement');

function updateUI() {
    scoreEl.textContent = score;
    clicksEl.textContent = clicks;
    powerEl.textContent = clickPower;

    upgradeBtn.disabled = score < upgradeCost;
    upgradeBtn.textContent = 'Улучшение (' + upgradeCost + ' очков)';

    if (score >= 50 && !achievementShown) {
        achievementEl.classList.add('show');
        achievementShown = true;
    }
}

clickBtn.addEventListener('click', () => {
    score += clickPower;
    clicks++;
    updateUI();
});

upgradeBtn.addEventListener('click', () => {
    if (score < upgradeCost) return;
    score -= upgradeCost;
    clickPower++;
    upgradeCost *= 2;
    updateUI();
});

updateUI();