function desencriptar(){
    let text1 =  document.getElementById("mnsj").value;
    let text2 = document.getElementById("mnsj2");

    const map2 = new Map();

    map2.set('a', 1);
    map2.set('e', 4);
    map2.set('i', 3);
    map2.set('o', 3);
    map2.set('u', 3);

    let aux = "";

    if(text1.length != 0){

        //Ocultar elementos
        let imagen = document.getElementById("mono");
        imagen.style.display = "none";
        imagen.style.visibility = "hidden";
        let bloque_texto = document.getElementById("mnsj-encrip");
        bloque_texto.style.display = "none";
        bloque_texto.style.visibility = "hidden";

        let texto = document.getElementById("titulo-mensaje");
        texto.style.display = "none";
        texto.style.visibility = "hidden";
        let p = document.getElementById("loc");
        p.style.display = "none";
        p.style.visibility = "hidden";

        let texto2 = document.getElementById("mnsj2");
        texto2.style.display = "block";
        texto2.style.visibility = "visible";
        let bloque2 = document.getElementById("copiar-btn");
        bloque2.style.display =  "block";
        bloque2.style.visibility = "visible";

        //Desencriptar
        for(let i = 0; i <= text1.length-1; i++){
            if(map2.get(text1.charAt(i)) == undefined){
                aux = aux + text1.charAt(i);
            }else{
                aux = aux + text1.charAt(i);
                i = i + map2.get(text1.charAt(i))
            }
            console.log(i);
        }

        text2.value = aux;

    }else{
        alert("No hay un mensaje para desencriptar");
    }
}

function copiar(){
  // Get the text field
  let copyText = document.getElementById("mnsj2");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  //alert("Copied the text: " + copyText.value);
  alert("Texto copiado");
}
