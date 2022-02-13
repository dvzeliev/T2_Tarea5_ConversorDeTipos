var opcion =document.getElementById("modo");

opcion.addEventListener("change",calcular,false);

function calcular(){
    var operaciones = this.options[this.selectedIndex].value;
    var numero = document.getElementById("numero").value;
    var nn = parseInt(numero) 
    var resultado = document.getElementById("resultado") ;
    switch (operaciones)
    {
        case "1":
            // Código que pasa de decimal a binario       
            resultado.value = nn.toString(2);           
         break;
        case "2":
            // Código que pasa de decimal a octal
            resultado.value = nn.toString(8);
         break;
        case "3":
            // Código que pasa de decimal a hexadecimal
            resultado.value = nn.toString(16);
         break;
        case "4":
            // Código que pasa de binario a decimal
            resultado.value = parseInt(nn, 2);
         break;
        case "5":
            // Código que pasa de octal a decimal
            resultado.value = parseInt(nn, 8);
         break;
        case "6":
            // Código que pasa de hexadecimal a decimal
            resultado.value = parseInt(nn, 16);
         break;
    }
}
 