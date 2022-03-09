function convertCurrency(){

    let conversionOption =  document.getElementById("conversion").value;
    let currencyValue =  Number(document.getElementById("currencyValue").value);
    let convertedCurrency;
    let exibitionText = ""

    if (currencyValue === 0){
        exibitionText = `Digite um valor válido`
    }
    else if( conversionOption === "dolarReal"){
        convertedCurrency = (currencyValue*5.06).toFixed(2);
        exibitionText = `R$ ${convertedCurrency.replace(".", ",")}`;
    }
    else if( conversionOption === "euroReal"){
        convertedCurrency = (currencyValue*5.52).toFixed(2);
        exibitionText = `R$ ${convertedCurrency.replace(".", ",")}`;
    }
    else if( conversionOption === "realDolar"){
        convertedCurrency = (currencyValue/5.06).toFixed(2);
        exibitionText = `$ ${convertedCurrency}`;
    }
    else {
        convertedCurrency = (currencyValue/5.52).toFixed(2);
        exibitionText = `€ ${realEuroCurrency}`;
    }

    let answerCurrency = document.getElementById("answerConversion");

    answerCurrency.innerHTML = `Estes são os resultados das suas conversões: ${exibitionText}`
    
}


