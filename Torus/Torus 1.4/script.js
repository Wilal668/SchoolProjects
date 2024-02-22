const R = () => {
    return parseFloat(document.querySelector("#R-input").value);
};

const r = () => {
    return parseFloat(document.querySelector("#r-input").value);
};

const calculateVolume = () => {
    const RValue = R();
    const rValue = r();

    const volume = 2 * Math.PI * Math.PI * RValue * rValue * rValue;
    return { volume };
};

const calculateSurfaceArea = () => {
    const RValue = R();
    const rValue = r();

    const surfaceArea = 4 * Math.PI * Math.PI * RValue * rValue;
    return { surfaceArea };
};

const generateResult = () => {
    const volumeChcked = document.querySelector("#volume").checked;
    const surfaceChecked = document.querySelector("#surfaceArea").checked;

    if (volumeChcked) {
        document.getElementById('output').textContent = 'Volume: ' + calculateVolume().volume;
    } else if (surfaceChecked) {
        document.getElementById('output').textContent = 'Surface Area: ' + calculateSurfaceArea().surfaceArea;
    }
}

const button = document.getElementById("calculate");
button.addEventListener("click", generateResult);