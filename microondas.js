// Checkpoint: Menu Microondas
//menu = (pipoca, macarrao, carne, feijao, brigadeiro);
const microondas = (comida, numero) => {
switch (comida) {
    case 'pipoca' : {
    if (numero < 10 ) {
        console.log ('tempo insuficiente') 
    } 
    else if(numero >= 10 && numero <= 20) {
        console.log ('Prato pronto, bom apetite!!')
    }
    else if(numero > 20 &&  numero < 30) {
        console.log('Sua comida queimou')
    }
    else if(numero > 30) {
        console.log('KABUMM')
  
  }
  break;
}
  case 'macarrao' : {
    if (numero < 8 ) {
        console.log ('tempo insuficiente') 
    } 
    else if(numero >= 8 && numero <= 16) {
        console.log ('Prato pronto, bom apetite!!')
    }
    else if(numero > 16 &&  numero < 24) {
        console.log('Sua comida queimou')
    }
    else if(numero > 24) {
        console.log('KABUMM')
    } 
}
break;
    case 'carne' : {
      if (numero < 15 ) {
        console.log ('tempo insuficiente') 
    } 
      else if(numero >= 15 && numero <= 30) {
        console.log ('Prato pronto, bom apetite!!')
    }
      else if(numero > 30 &&  numero < 45) {
        console.log('Sua comida queimou')
    }
      else if(numero > 45) {
        console.log('KABUMM')
    } 
    break;
}
case 'feijao' : {
    if (numero < 12 ) {
      console.log ('tempo insuficiente') 
  } 
    else if(numero >= 12 && numero <= 24) {
      console.log ('Prato pronto, bom apetite!!')
  }
    else if(numero > 24 &&  numero < 36) {
      console.log('Sua comida queimou')
  }
    else if(numero > 36) {
      console.log('KABUMM')
  } 
  break;
}
case 'brigadeiro' : {
    if (numero < 8 ) {
      console.log ('tempo insuficiente') 
  } 
    else if(numero >= 8 && numero <= 16) {
      console.log ('Prato pronto, bom apetite!!')
  }
    else if(numero > 16 &&  numero < 24) {
      console.log('Sua comida queimou')
  }
    else if(numero > 24) {
      console.log('KABUMM')
  } 
  break;
}
default : {
    console.log('comida inexistente')
}
}
}    
microondas('feijao', 5);
microondas('brigadeiro', 5);
microondas('carne', 5);
microondas('pipoca', 5);
microondas('macarrao', 5);
microondas('arroz', 5);

microondas('feijao', 15);
microondas('brigadeiro', 15);
microondas('carne', 15);
microondas('pipoca', 15);
microondas('macarrao', 15);
microondas('arroz', 15);

microondas('feijao', 25);
microondas('brigadeiro', 20);
microondas('carne', 31);
microondas('pipoca', 24);
microondas('macarrao', 20);
microondas('arroz', 24);

microondas('feijao', 50);
microondas('brigadeiro', 50);
microondas('carne', 50);
microondas('pipoca', 50);
microondas('macarrao', 50);
microondas('arroz', 50);
















