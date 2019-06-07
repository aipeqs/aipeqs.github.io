 document.addEventListener('DOMContentLoaded', () => {

    // Connect to websocket
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);

    // When connected, configure buttons
    socket.on('connect', () => {

        function retrieve() {
            const ulb = document.getElementById('ulb').value;
            const e = document.getElementById('grade');
            const grade = e.options[e.selectedIndex].value;
            socket.emit('submit data', { 'ulb': ulb, 'grade': grade});
        }

    });

    // When a new vote is announced, add to the unordered list
    // socket.on('announce vote', data => {
    //     const li = document.createElement('li');
    //     li.innerHTML = `Vote recorded: ${data.selection}`;
    //     document.querySelector('#votes').append(li);
    // });
});
