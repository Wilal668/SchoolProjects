const R = document.getElementById('R-input');
const r = document.getElementById('r-input');

const calculateTorusProperties = () => {
    const RValue = parseFloat(R.value);
    const rValue = parseFloat(r.value);

    const volume = 2 * Math.PI * Math.PI * RValue * rValue * rValue;
    const surfaceArea = 4 * Math.PI * Math.PI * RValue * rValue;
    return { volume, surfaceArea };
}

const button = document.getElementById('calculate-button');

button.addEventListener("click", () => {
    const result = calculateTorusProperties();
        document.getElementById('volume-output').textContent = 'Volume: ' + result.volume;
        document.getElementById('surface-area-output').textContent = 'Surface Area: ' + result.surfaceArea;
});