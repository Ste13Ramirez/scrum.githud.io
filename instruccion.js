function guardar() {
    var nomestu=document.getElementById("nomest").value;
    var matricu=document.getElementById("matri").value;
    var materi=document.getElementById("mate").value;
    var califi=document.getElementById("cali").value;
        if (nomestu=="") {
            alert("Aun quedan Campos Vacios!!!");
            document.getElementById("nomest").focus();
            
        }else{
            if (matricu=="") {
                alert("Aun quedan Campos Vacios!!!");
            document.getElementById("matri").focus();
            }
            else{
                console.log(nomestu +" "+ matricu +" "+ materi +" "+ califi);
                document.getElementById("nomest").value="";
                document.getElementById("matri").value="";
                document.getElementById("cali").value="";
                document.getElementById("mate").value="";

            }
        }

}