const R = parseFloat(document.getElementById('R-input').value);
const r = parseFloat(document.getElementById('r-input').value);

function calculateTorusProperties(R, r) {
    const volume = 2 * Math.PI * Math.PI * R * r * r;

    const surfaceArea = 4 * Math.PI * Math.PI * R * r;
    return { volume, surfaceArea };
}

const button = document.getElementById('calculate-button');

button.addEventListener('click', () => {
    const properties = calculateTorusProperties(R, r);
  
    document.getElementById('volume-output').textContent = `Volume: ${properties.volume}`;
    document.getElementById('surface-area-output').textContent = `Surface Area: ${properties.surfaceArea}`;
  });