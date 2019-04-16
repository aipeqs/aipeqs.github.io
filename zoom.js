function zoom1 (index) {
    let buttons = [];
    let functions = [];
    let r = document.getElementById('att-select');
    if (r !== null) {
        r.innerHTML = " ";
    }
    else {
        r = document.createElement('div');
        r.className = 'btn-group';
        r.setAttribute('id', 'att-select');
        r.style.display = "block";
        document.body.appendChild(r);
    }
    console.log(index)
    if (index === 'gei') {
        buttons = ["Timeliness", "Accuracy"];
        functions = [time, acc];
    }
    else {
        buttons = ["Right Use", "Right Collection"];
        functions = [use, coll];
    }

    for (let i = 0; i < buttons.length; i++)
    {
        g = document.createElement('button');
        g.className = "btn btn-primary";
        g.innerHTML = buttons[i];
        g.addEventListener('click', functions[i]);
        r.appendChild(g);
    }
}
