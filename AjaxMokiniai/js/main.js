let xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {
    if (xhr.readyState === 4){
        let mokiniai = JSON.parse(xhr.responseText);
        console.log(mokiniai);

        for (let i=0; i<=mokiniai; i++){
            const text = document.createElement('li');
            document.body.appendChild(text);
            text.textContent = i;
        }

    }
};

xhr.open('GET', 'duomenys/list.json');

xhr.send();