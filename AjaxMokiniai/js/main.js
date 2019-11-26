let info = new XMLHttpRequest();


info.onreadystatechange = function () {
    if (info.readyState === 4){
        let info2 = JSON.parse(info.responseText);
        console.log(info2);

        }
    };

info.open('GET', 'list.json');

info.send();