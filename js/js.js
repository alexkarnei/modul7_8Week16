let title = document.getElementById('title');
let select = document.getElementById('select');

function movieSearch() {
    const request = new XMLHttpRequest();
    const url = "http://www.omdbapi.com/?apikey=a6e6005f&t=" + title.value;

    request.open('GET', url, false);
    /* request.responseType = 'text';*/
    request.send();
    var filmText = request.response;
    let film = JSON.parse(filmText);

    if (film['Response'] === 'True') {
        var f = document.getElementById("ex1");

        var filmDiv = document.createElement('div');
        filmDiv.className = 'filmDiv';
        f.appendChild(filmDiv);


        var img = document.createElement('img');
        img.src = film['Poster'];
        img.style.width = '100px';
        img.style.height = '100px';
        filmDiv.appendChild(img);

        var div = document.createElement('div');
        filmDiv.appendChild(div);

        var p = document.createElement('p');
        p.innerHTML = select.value;
        div.appendChild(p);

        var newDiv = document.createElement('div');
        newDiv.innerHTML = film['Title'];
        newDiv.style.fontWeight = 'bold';
        filmDiv.appendChild(newDiv);

        var newDiv1 = document.createElement('div');
        newDiv1.innerHTML = film['Year'];
        newDiv1.style.fontWeight = 'bold';
        filmDiv.appendChild(newDiv1);

        var btn = document.createElement('input');
        btn.type = 'button';
        btn.value = 'Details';
        btn.style.width = '100px';
        btn.style.marginLeft = '20px';
        filmDiv.appendChild(btn);

        var result = document.createElement('div');
        result.innerHTML = 'Title :  ' + film['Title'] + '<br>' +
            'Released : ' + film['Released'];
        filmDiv.append(result);
        result.style.display = 'none';

        btn.onclick = function () {
            result.style.display = result.style.display ==='none'? "block" : "none";;
        }

        f.style.display = "block";
        title.value = " ";
    }
}