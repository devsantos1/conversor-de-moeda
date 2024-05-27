const convertbutton =  document.querySelector('.convert-button')
const coinselect = document.querySelector('.select-coin')
 const imgcurrency =  document.querySelector('.img-currency')
 const namecurrency = document.querySelector('.name-currency')

 

  async function values() {

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then( response => response.json())

   const dolarday = data.USDBRL.high
   const euro = data.EURBRL.high
   const btc = data.BTCBRL.high

    const inputvalue = document.querySelector(".input-value").value

    
    
 

    const value = inputvalue / dolarday

    const convertedvalue =  document.querySelector(".converted-value")
    const valuetoconvert =  document.querySelector(".value-to-convert")
    convertedvalue.textContent =   new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    valuetoconvert.textContent =   new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputvalue)


    if(coinselect.value == 'dolar'){

        convertedvalue.textContent =   new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputvalue/ dolarday)
        imgcurrency.src = './assets/dolar.png'
        namecurrency.textContent = 'dolar americano'
       

        
    }


    if(coinselect.value == 'btc' ){
        convertedvalue.textContent =   new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputvalue/ btc)

        imgcurrency.src = './assets/btc.png'
        namecurrency.textContent = 'bitcoin'
     

    }

    if(coinselect.value == 'euro'){

        convertedvalue.textContent =   new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputvalue/ euro)
        imgcurrency.src = './assets/euro.png'
        namecurrency.textContent = 'euro'
        
    }

 }

 function trocando(){

    if(coinselect.value == 'euro'){
        namecurrency.textContent = 'euro'
        imgcurrency.src = './assets/euro.png'
       


    }

    if(coinselect.value == 'btc'){
        namecurrency.textContent = 'bitcoin'
        imgcurrency.src = './assets/btc.png'
       
        

    }

    if(coinselect.value == 'dolar'){
        namecurrency.textContent = 'dolar americano'
        imgcurrency.src = './assets/dolar.png'
      
        

    }

    values()




 }






    convertbutton.addEventListener("click", values )

    coinselect.addEventListener('change', trocando )


     


















 




     
