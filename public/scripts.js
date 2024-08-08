function goToSelect() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('home').style.display = 'none';
        document.getElementById('select').style.display = 'block';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function goToResult() {
    const course = document.getElementById('course').value;
    const time = document.getElementById('time').value;

    if (course && time) {
        document.getElementById('select').style.display = 'none';
        document.getElementById('result').style.display = 'block';

        const resultData = `
            <strong>Materia:</strong> ${course}<br>
            <strong>Horario:</strong> ${time}
        `;
        document.getElementById('resultData').innerHTML = resultData;
    } else {
        alert('Por favor, seleccione una materia y un horario.');
    }
}

function goToHome() {
    document.getElementById('select').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}

function clearForm() {
    document.getElementById('infoForm').reset();
    document.getElementById('selectForm').reset();
    document.getElementById('resultData').innerHTML = '';
}
