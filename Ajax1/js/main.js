const addTask = document.querySelector('#add');


let manoAjax = new XMLHttpRequest();
manoAjax.onreadystatechange = function () {
    if (manoAjax.readyState === 4){
        if (manoAjax.status === 200) {
            document.querySelector('container').innerHTML = manoAjax.responseText;
        }else {
            alert(manoAjax.statusText)
        }
    }
};
    manoAjax.open('GET', 'menu.html');
    document.querySelector('button.showMenu').onclick = function () {
        manoAjax.send();
        document.querySelector('button.showMenu').style.display="none"''
    };