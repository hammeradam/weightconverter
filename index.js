document.getElementById('lb-output').style.display = 'none';
document.getElementById('lb-input').addEventListener('input', (e) => {
    let lbs = e.target.value;
    if (lbs !== '0') {
        document.getElementById('lb-output').style.display = 'block';
        document.getElementById('lb-gOutput').innerHTML = lbs / 0.0022046;
        document.getElementById('lb-kgOutput').innerHTML = lbs / 2.2046;
        document.getElementById('lb-ozOutput').innerHTML = lbs * 16;
    }
    else {
        document.getElementById('lb-output').style.display = 'none';
    }
})

document.getElementById('kg-output').style.display = 'none';
document.getElementById('kg-input').addEventListener('input', (e) => {
    let kgs = e.target.value;
    if (kgs !== '0') {
        document.getElementById('kg-output').style.display = 'block';
        document.getElementById('kg-gOutput').innerHTML = kgs * 1000;
        document.getElementById('kg-lbOutput').innerHTML = kgs / 0.45359237;
        document.getElementById('kg-ozOutput').innerHTML = kgs / 0.02834952;
    }
    else {
        document.getElementById('kg-output').style.display = 'none';
    }
})

document.getElementById('oz-output').style.display = 'none';
document.getElementById('oz-input').addEventListener('input', (e) => {
    let ozs = e.target.value;
    if (ozs !== '0') {
        document.getElementById('oz-output').style.display = 'block';
        document.getElementById('oz-gOutput').innerHTML = ozs * 28.34952;
        document.getElementById('oz-lbOutput').innerHTML = ozs / 16;
        document.getElementById('oz-kgOutput').innerHTML = ozs * 0.02834952;
    }
    else {
        document.getElementById('oz-output').style.display = 'none';
    }
})