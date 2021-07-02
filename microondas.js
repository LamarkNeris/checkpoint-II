// Checkpoint: Menu Microondas
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
}
default : {
    console.log('comida inexistente')
}
}
}    
microondas('feijao', 50);

















