let piedra = 0;
let papel = 1;
let tijera = 2;
let user = Math.floor(Math.random() * 3);
let pc = Math.floor(Math.random() * 3);

var resultado = function(user, pc) {
    if (user != pc) {
        if (
            (user === piedra && pc === tijera) ||
            (user === papel && pc === piedra) ||
            (user === tijera && pc === papel)
        ) {
            console.log("GANASTE!!")
        } else {
            console.log("La PC Gano!")
        }
    } else if (user === pc) {
        console.log("Empate")
    }
};

resultado(user, pc)