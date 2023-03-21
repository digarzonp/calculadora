
function renderizazGUI(){
    //Dentro de ls division de la calculadora voy a coloca
    //la division para la pantalla 

    //div calculadora
    const divCalculadora= document.createElement("div");
    divCalculadora.setAttribute("id","calculadora");
    divCalculadora.setAttribute("class","text-center")
    divCalculadora.setAttribute("style","width:50%; margin:0 auto")
    document.body.appendChild(divCalculadora);

    //div Pantalla
    const divPantalla= document.createElement("div");
    divPantalla.setAttribute("id","divPantalla");
    divCalculadora.appendChild(divPantalla);

  

    //pantalla
    
    const pantalla= document.createElement("input");
    pantalla.setAttribute("id","pantalla");
    pantalla.setAttribute("type","text");
    pantalla.setAttribute("value","0");
    pantalla.setAttribute("disabled","true");
    pantalla.setAttribute("class","form-control right");
    divPantalla.appendChild(pantalla);

      //div botones
      const divBotones= document.createElement("div");
      divBotones.setAttribute("id","botones");
      divCalculadora.appendChild(divBotones);

}

//llamar la función denderizar 
renderizazGUI();