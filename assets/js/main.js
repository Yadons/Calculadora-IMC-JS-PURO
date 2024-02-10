function meuEscopo () {
    const form = document.querySelector('#form');  
    
    form.addEventListener('submit', function recebeEventoCalcular (event) {
        event.preventDefault();
        //console.log('evento previnido');
        const inputPeso = event.target.querySelector('.peso'); 
        const inputAltura = event.target.querySelector('.altura'); 
        
        const peso = Number(inputPeso.value); 
        const altura = Number(inputAltura.value); 
        
        if (!peso) { ;
            setResultado('Peso Inválido!', false);
            return;
        }
        
        if (!altura) { 
            setResultado('Altura inválida!', false);
            return; 
        }

        const calculo = getIMC(peso, altura) 
        const nivelIMC =percentIMC (calculo); 
        
        const msg = `O cálculo do seu IMC é de ${calculo} (${nivelIMC})`;

        setResultado(msg, true);
       
    });

    function percentIMC (calculo) { 
        const percent = ['Abaixo do peso!','Peso normal!','Sobrepeso!', 'Obesidade grau 1.','Obesidade grau 2.','Obesidade grau 3.'];

         
        if (calculo >= 39.9) { 
            return percent[5]; 
        }
        if (calculo >= 34.9) {
            return percent[4];
        }
        if (calculo >= 29.9) {
            return percent[3];
        }
        if (calculo >= 24.9) {
            return percent[2];
        }
        if (calculo >= 18.5) {
            return percent[1];
        }
        if (calculo < 18.5) {
            return percent[0];
        }
    };

    function getIMC (peso, altura) { 
        const calculo = (peso / (altura ** 2));
        return calculo.toFixed(2); 

    }

    function criarP() { 
        const p = document.createElement('p'); 
        return p;
    }

    function setResultado (msg, isValid) { 
        const resultado = document.querySelector('.resp');
        resultado.innerHTML = '';
        const p = criarP(); 
        
        if(isValid) {
            p.classList.add('paragrafo-resultado'); 
        } else {
            p.classList.add('not-valid'); 
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }
   
}

meuEscopo ();
