let isCalling = false;

function benMluvi() {
    console.log(isCalling);

    if (!isCalling) {
        document.getElementById("ben").src = "./img/ben-pickup.gif";
        setTimeout(() => { document.getElementById("pickup").play(); }, 1200);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'input';
        input.className = 'input';
        input.placeholder = 'Enter question for Ben';

        const button = document.getElementById("toggleCall")
        button.innerHTML = "Hang up";
        button.className = "hangup";

        document.body.appendChild(input);
        isCalling = true;

    } else {
        document.getElementById("ben").src = "./img/ben-idle.gif";
        document.getElementById("pickup").pause();
        document.getElementById("input").remove();

        const button = document.getElementById("toggleCall")
        button.innerHTML = "Call Ben";
        button.className = "call";
        isCalling = false;
    }
}