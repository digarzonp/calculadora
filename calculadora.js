
var botones=["7","8","9","+","4","5","6","-","1","2","3","*",".","=",]

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
      //vamos a crear a todos los botomes 
      for (let i=0; i<botones.length; i++){
        
        if(i%4==0){
          const divFila=document.createElement("div");
          divFila.setAttribute("class","row"); 
          divBotones.appendChild(divFila);
        }

        let boton=document.createElement("button");
        boton.setAttribute("id", "boton"+botones[i]);
        boton.setAttribute("class","btn btn-success col-3 border-white")
        boton.innerHTML=botones[i];
        divBotones.appendChild(boton);
        boton.addEventListener("click",function(){
          procesarevento(boton);
        })

      }

}

function procesarevento(boton){
  let miPantalla=document.getElementById("pantalla")
  if(miPantalla.value=="0"){
    miPantalla.value="";
  }
  if(boton.innerHTML != "="){
  miPantalla.value=miPantalla.value+boton.innerHTML;
  }else{
  
    let resultado=math.evaluate(miPantalla.value);
    miPantalla.value=resultado;
  }
}


//llamar la función denderizar 
renderizazGUI();