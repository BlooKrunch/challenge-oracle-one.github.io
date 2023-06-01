function encriptar() {
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

    let text1 =  document.getElementById("mnsj").value;
    let text2 = document.getElementById("mnsj2");

    const map1 = new Map();

    map1.set('a', 'ai');
    map1.set('e', 'enter');
    map1.set('i', 'imes');
    map1.set('o', 'ober');
    map1.set('u', 'ufat');

    //console.log(text1.length);

    let aux = "";

    for(let i = 0; i <= text1.length - 1; i++){
        if(map1.get(text1.charAt(i)) == undefined){
            aux = aux + text1.charAt(i);
        }else{
            aux = aux + map1.get(text1.charAt(i));
        }
    }

    text2.value = aux;

}
