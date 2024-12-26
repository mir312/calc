

// const btnMinus = document.querySelector('.btn_minus')
// const btnPlus = document.querySelector('.btn_plus')
// const inputNum= document.querySelector('.input_num')

// btnPlus.addEventListener('click', function(){
//  inputNum.value = + inputNum.value + 1 
// })


// btnMinus.addEventListener('click', function(){
//     inputNum.value =  inputNum.value - 1 
//    })
    
   const input_1 = document.querySelector('.input_1')
   const input_2 = document.querySelector('.input_2')
   const plus = document.querySelector('.plus')
   const minus = document.querySelector('.minus')
   const multy = document.querySelector('.multy')
   const diff = document.querySelector('.diff')
   const  pow = document.querySelector('.pow')
   const  secDes = document.querySelector('.secDes')
   const  result  = document.querySelector('.result')



   plus.addEventListener('click', function(){
   result.innerText = +input_1.value + +input_2.value
   })

   minus.addEventListener('click', function(){
    result.innerText = input_1.value -  input_2.value
    })


    multy.addEventListener('click', function(){
        result.innerText = input_1.value *  input_2.value
        })

    diff.addEventListener('click', function(){
            result.innerText = input_1.value / input_2.value
 })

 pow.addEventListener('click', function(){
    result.innerText = input_1.value **  input_2.value
    })

    
