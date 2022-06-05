function operacion(valor1, valor2, operacion) {
    switch (operacion){
            case "1":
                return valor1 + valor2;
                break;
            case "2":
                return valor1 - valor2;
                break;
            case "3":
                return valor1 * valor2;
                break;
            case "4":
                return valor1 / valor2;
                break;
            default:
            return 0;
                break;

        }
}


function pedirNUMERO(texto) {
    let valor = prompt(texto);
    while (isNaN(parseInt(valor)) ) {
        valor = prompt(texto);
    }
    return valor;
}


alert ("Desafio entregable n2 de Pablo Federiconi");

let SubTotal_hamb=0;
let SubTotal_acomp=0;
let SubTotal_bebida=0;
let Total=0;
let Propina=0;

let Hamburguesa_elegida;
let Acomp_elegido;
let Bebida_elegida;
let Pedido ='';

const Valor_Hamb_Queso=500;
const Valor_Hamb=400;
const Valor_PapasCheddar=200;
const Valor_PapasCheddaryBacon=300;
const Valor_bebida = 100;


alert ("Bienvenido a la hamburguesería, a continuación le tomaremos su pedido");


let Cant_Hamburguesas = pedirNUMERO("Cuantas hamburguesas quiere:");


if (Cant_Hamburguesas>0) 
    {
    for (i=1;i <=Cant_Hamburguesas ;i++ )
       { 
        Hamburguesa_elegida = pedirNUMERO("Elegí tu Hamburguesa N°:"+ i + " \n 1-Con queso $"+ Valor_Hamb_Queso + " \n 2-Sin queso $"+ Valor_Hamb );

         while (Hamburguesa_elegida != 1 && Hamburguesa_elegida != 2 )
             {Hamburguesa_elegida = pedirNUMERO(" opción incorrecta, elegí de nuevo tu Hamburguesa N°:"+ i + " \n 1-Con queso $"+ Valor_Hamb_Queso + "\n 2-Sin queso $"+ Valor_Hamb);}

         if (Hamburguesa_elegida==1) 
             { 
                SubTotal_hamb=operacion(SubTotal_hamb,Valor_Hamb_Queso,"1") ;
                Pedido = operacion(Pedido,"Hamburguesa con Queso: $"+ Valor_Hamb_Queso + " \n","1") ;
            }
         else
            {
                SubTotal_hamb=operacion(SubTotal_hamb,Valor_Hamb,"1") ;
                Pedido = operacion(Pedido,"Hamburguesa sin Queso: $"+ Valor_Hamb + " \n","1") ;
            }
        }
    }
    alert(Pedido + "\n\n                   Subtotal por Hamburguesas: " + SubTotal_hamb );
    Total = operacion(Total,SubTotal_hamb,"1") ;






let Cant_Acomp = pedirNUMERO("Cuantos acompañamientos quiere:");
if (Cant_Acomp>0) 
    {

    for (i=1;i <=Cant_Acomp ;i++ )
       { 

        Acomp_elegido = pedirNUMERO("Elegí tu Acompañamiento N°:"+ i + " \n 1-Papas Con cheddar $"+ Valor_PapasCheddar + " \n 2-Papas con Bacon y Cheddar $"+ Valor_PapasCheddaryBacon );

         while (Acomp_elegido != 1 && Acomp_elegido != 2 )
             {Acomp_elegido = pedirNUMERO(" opción incorrecta, elegí de nuevo tu Acompañamiento N°:"+ i + " \n 1-Papas Con cheddar $"+ Valor_PapasCheddar + " \n 2-Papas con Bacon y Cheddar $"+ Valor_PapasCheddaryBacon );}

         if (Acomp_elegido==1) 
             { 
                SubTotal_acomp=operacion(SubTotal_acomp,Valor_PapasCheddar,"1") ;
                Pedido = operacion(Pedido,"Papas con cheddar: $"+ Valor_PapasCheddar + " \n","1") ;
            }
         else
            {
                SubTotal_acomp=operacion(SubTotal_acomp,Valor_PapasCheddaryBacon,"1") ;
                Pedido = operacion(Pedido,"Papas con Cheddar y Bacon: $"+ Valor_PapasCheddaryBacon + " \n","1") ;
            }

        }
    }

    Total = operacion(Total,SubTotal_acomp,"1") ;
    alert(Pedido + "\n\n                   Subtotal por Hamburguesas: " + SubTotal_hamb + "\n                   Subtotal por Acompañamiento: " + SubTotal_acomp + "\n                   Total: " + Total );

let Cant_bebidas = pedirNUMERO("Cuantas bebidas quiere:");
if (Cant_bebidas>0) 
    {

    for (i=1;i <=Cant_bebidas ;i++ )
       { 

        Bebida_elegida = pedirNUMERO("Elegí tu bebida N°:"+ i + " \n 1-CocaCola $"+ Valor_bebida + " \n 2-SevenUp $"+ Valor_bebida );

         while (Bebida_elegida != 1 && Bebida_elegida != 2 )
             {Bebida_elegida = pedirNUMERO(" opción incorrecta, elegí de nuevo tu bebida N°:"+ i + " \n 1-CocaCola $"+ Valor_bebida + " \n 2-SevenUp $"+ Valor_bebida  );}

         if (Bebida_elegida==1) 
             { 
                SubTotal_bebida=operacion(SubTotal_bebida,Valor_bebida,"1") ;
                Pedido = operacion(Pedido,"CocaCola: $"+ Valor_bebida + " \n","1") ;
            }
         else
            {
                SubTotal_bebida=operacion(SubTotal_bebida,Valor_bebida,"1") ;
                Pedido = operacion(Pedido,"SevenUp: $"+ Valor_bebida + " \n","1") ;
            }

        }
    }


    Total = operacion(Total,SubTotal_bebida,"1") ;
    Propina = operacion(Total,0.1,"3");

    //alert(Pedido + "\n\nSubtotal por Hamburguesas: " + SubTotal_hamb + "\nSubtotal por Acompañamiento: " + SubTotal_acomp + "\nSubtotal por Bebidas: " + SubTotal_bebida + "\nTotal: " + Total +"\nPropina: " + operacion(Total,0.1,"3") );
    let Comensales = pedirNUMERO("Cuantas personas son para dividir la cuenta: ");
    alert(Pedido + "\n\n                   Subtotal por Hamburguesas: " + SubTotal_hamb + "\n                   Subtotal por Acompañamiento: " + SubTotal_acomp + "\n                   Subtotal por Bebidas: " + SubTotal_bebida + "\n\n                   Total: " + Total +"\n                   Propina: " + Propina +"\n                   Cantidad de Comensales: " + Comensales +"\n\n\n                   Total por cada uno: " + operacion(operacion(Total,Propina,"1"),Comensales,"4") );


