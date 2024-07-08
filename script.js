'use strict';
let no=document.getElementById('score--1').textContent
let op1=document.getElementById('score--0').textContent


      
document.querySelector(".btn--roll").addEventListener('click',function(){
    let dice=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').src=`dice-${dice}.png`

    if ( document.querySelector('.player--0').classList.contains('player--active')){
        if (dice!=1 ){
            let p1=Number(document.getElementById('current--0').textContent)
            document.getElementById('current--0').textContent=p1+dice
        }else{
            document.getElementById('current--0').textContent=0
            document.querySelector('.player--0').classList.remove('player--active')
            document.querySelector('.player--1').classList.add('player--active')
        }
        
        
    }
    else{
        if (dice!=1 ){
        let p1=Number(document.getElementById('current--1').textContent)
        document.getElementById('current--1').textContent=p1+dice
    }else{
        document.getElementById('current--1').textContent=0
        document.querySelector('.player--1').classList.remove('player--active')
        document.querySelector('.player--0').classList.add('player--active')
    }}
})

document.querySelector('.btn--hold').addEventListener('click',function(){

    if (document.querySelector('.player--0').classList.contains('player--active')){
        
            
        
            let mo=Number(document.getElementById('current--0').textContent);
            no=Number(document.getElementById('score--0').textContent);
            document.getElementById('score--0').textContent=mo+no
            
            document.getElementById('current--0').textContent=0
            document.querySelector('.player--0').classList.remove('player--active')
            document.querySelector('.player--1').classList.add('player--active')
            
    }else{
        let op=Number(document.getElementById('current--1').textContent)
         op1=Number(document.getElementById('score--1').textContent);
        document.getElementById('score--1').textContent=op+op1
        document.getElementById('current--1').textContent=0
        document.querySelector('.player--1').classList.remove('player--active')
        document.querySelector('.player--0').classList.add('player--active')
    
    } 
    const scorePlayer0 = Number(document.getElementById('score--0').textContent);
    const scorePlayer1 = Number(document.getElementById('score--1').textContent);

    if (scorePlayer0 >= 100) {
        document.querySelector('.player--0').style.backgroundColor = 'black';
        document.querySelector('.btn--roll').style.display = 'none';
    } else if (scorePlayer1 >= 100) {
        document.querySelector('.player--1').style.backgroundColor = 'black';
        document.querySelector('.btn--roll').style.display = 'none';
    }
        
    
    })

    
    document.querySelector('.btn--new').addEventListener("click", function() {
        // Reset the Roll dice button display property
        document.querySelector('.btn--roll').style.display = 'flex';
        
        // Reset both players' scores
        document.getElementById('score--0').textContent = 0;
        document.getElementById('score--1').textContent = 0;
        
        // Reset both players' current scores
        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;
    
        // Reset player background colors
        document.querySelector('.player--0').style.backgroundColor = '';
        document.querySelector('.player--1').style.backgroundColor = '';
        
        // Ensure player 0 is the active player
        if (!document.querySelector('.player--0').classList.contains('player--active')) {
            document.querySelector('.player--0').classList.add('player--active');
            document.querySelector('.player--1').classList.remove('player--active');

        }
  
        
    });
    
    
    





