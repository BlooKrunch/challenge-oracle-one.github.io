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
