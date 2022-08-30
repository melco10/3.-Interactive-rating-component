

function rate(rateNum){


    document.querySelector('.submit-btn').addEventListener('click', function(){


        if(rateNum => 1 && rateNum <= 5){

            document.querySelector('.survey').style.display = 'none';
            document.querySelector('.hidden-ty').style.visibility = 'visible';
            document.querySelector('.rateNum').textContent = rateNum;
        }            
    })

}









