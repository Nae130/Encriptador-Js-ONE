let textoEncriptado=getElementById('area-principal');
const encriptadas={
    'a':'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat'
}
const desencriptadas={
    'ai':'a',
    'enter':'e',
    'imes':'i',
    'ober':'o',
    'ufat':'u'
}

function encriptar{
    let mensaje=textoEncriptado.value; 
    if(mensaje==''){
        alert('Agrega un mensaje para poder continuar');
    }else{
        for(i in encriptadas){
            mensaje=mensaje.value
        }
    }
}










let mensaje=document.getElementById('area-principal')

