/* Faça um algoritmo que leia um array, e o preencha com números inteiros, se esse
array tiver alguma posição com valor zero você deve eliminar essa posição. Para
fazer isso, todos os elementos à frente do valor zero devem ser movidos uma
posição para trás no vetor.
Ex.: entrada - array[2,6,8,0,6,4,3,2,0,7]
 saída - array[2,6,8,6,4,3,2,7] */

 var arrayA = []
 var arraySuporte = []
 var indexSup = 0

 for(i = 0; i < 5; i++){
  arrayA[i] = parseInt(prompt("Insira um numero"))
 }
 console.log(arrayA)

 for(i = 0; i < 5; i++){
  if(arrayA[i] != 0){
    arraySuporte[indexSup] = arrayA[i]
    indexSup++
  }
 }
 arrayA = arraySuporte
 console.log(arrayA)