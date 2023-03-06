const textoAEncriptar=document.getElementById('area-principal'),
    btCopiar=document.getElementById('bt-copiar'),
    mensajeP=document.getElementById('mensaje-p'),
    mensajeImagen=document.getElementById('mensaje-img'),
    mensajeC=document.getElementById('mensaje-c'),
    textoDesEn=document.getElementById('textoDes-En'),
    btEncriptar=document.getElementById('bt-encriptar'),
    btDesencriptar=document.getElementById('bt-desencriptar');     
btCopiar.addEventListener('click',function(){
  textoDesEn.select();
  document.execCommand('copy');
  alert('TextoCopiado');
});


btEncriptar.addEventListener("click", function () {
  let texto = textoAEncriptar.value;
  if (texto != "") {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    textoDesEn.value = texto;
    mensajeImagen.style.display = "none";
    mensajeC.style.display = "none";
    mensajeP.style.display="none";
    btCopiar.style.display = "block";
    textoDesEn.style.display = "block";
  }
});
btDesencriptar.addEventListener("click", function () {
  let texto = textoAEncriptar.value;
  if (texto != "") {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    textoDesEn.value = texto;
    mensajeImagen.style.display = "none";
    mensajeC.style.display = "none";
    mensajeP.style.display="none";
    btCopiar.style.display = "block";
    textoDesEn.style.display = "block";
  }
});