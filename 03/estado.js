let estado = function (a) {
    if(a === "SP" || a === "RJ"){
        return "Estado permitido"
    } else {
        return "Estado negado"
    }
}

module.exports = estado