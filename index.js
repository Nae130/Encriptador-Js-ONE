function Encriptar(){
    for (let i = 0; i=mensaje.value.length; i++){
        if (mensaje.value == undefined){
            alert ('Agrega un mensaje para poder continuar')
        }
        else if (mensaje.value[i]='a'){
            nuevomensaje[i]='a';
            nuevomensaje[i++]='i'
        }else if(mensaje.value[i]='e'){
            nuevomensaje[i]='e';
            nuevomensaje[i++]='n';
            nuevomensaje[i++]='t';
            nuevomensaje[i++]='e';
            nuevomensaje[i++]='r';
        }else if(mensaje.value[i]='i'){
            nuevomensaje[i]='i';
            nuevomensaje[i++]='m';
            nuevomensaje[i++]='e';
            nuevomensaje[i++]='s';          
        }else if(mensaje.value[i]='o'){
            nuevomensaje[i]='o';
            nuevomensaje[i]='b';
            nuevomensaje[i]='e';
            nuevomensaje[i]='r';
        }else if(mensaje.value[i]='u'){
            nuevomensaje[i]='u';
            nuevomensaje[i]='f';
            nuevomensaje[i]='a';
            nuevomensaje[i]='t';
        }
        nuevomensaje[i]= mensaje.value[i];
    } 
    alert(nuevomen  );
}

function Desencriptar(){
    alert('desencriptar')
}




let mensaje =document.querySelector('textarea')
let nuevomensaje='         ';   
mensaje.focus();
let encriptar =document.querySelector('encriptar')
let desencriptar=document.querySelector('desencriptar')
