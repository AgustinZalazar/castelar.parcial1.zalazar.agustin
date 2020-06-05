function GuardarConst(){
    function Constelacion(Siglo, Nombre) {
        this._siglo = Siglo;
        this._nombre = Nombre;
    }
    var siglo = document.getElementById("iSiglo").value;
    var nombre = document.getElementById("iNombre").value;
    if (siglo == null || siglo.length == 0 && nombre == null || nombre.length == 0) {
        alert("por favor llene los campos");
    }
    else {

        var Constelacion = new Constelacion(siglo, nombre);
        document.getElementById("table").innerHTML += '<tbody><tr><td> ' + Constelacion._siglo + '</td><td>' + Constelacion._nombre + '</td></tr></tbody >';
    }
        
   
}