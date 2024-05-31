'use strict'
window.addEventListener('load', ()=>{

    var level1Btn = document.getElementById("level1Btn");
    var level2Btn = document.getElementById("level2Btn");
    var level3Btn = document.getElementById("level3Btn");
    var levelSelector = document.getElementById("levelSelector");
    var level = document.getElementById("level")
    var loadingScreen = document.getElementById('loader')

    function hideLevelSelector(){
        levelSelector.style.visibility = "hidden";
    }

    function showLevel(){
        level.style.visibility = "visible";
    }

    function showLoadingScreen(){
        loadingScreen.style.visibility = "visible";
    }

    function hideLoadingScreen(){
        loadingScreen.style.visibility = "hidden";
    }

    level1Btn.addEventListener('click', ()=>{
        hideLevelSelector();
        setTimeout(showLoadingScreen, 200);
        setTimeout(hideLoadingScreen, 1300);
        setTimeout(showLevel, 1400);
    });
    
    level2Btn.addEventListener('click', ()=>{
        hideLevelSelector();
        setTimeout(showLoadingScreen, 200);
        setTimeout(hideLoadingScreen, 1300);
        setTimeout(showLevel, 1400);
    });
    
    level3Btn.addEventListener('click', ()=>{
        hideLevelSelector();
        setTimeout(showLoadingScreen, 200);
        setTimeout(hideLoadingScreen, 1300);
        setTimeout(showLevel, 1400);
    });

    var
        cursor = document.querySelector('#cursor'),
        stalker = document.querySelector('#stalker');

    
    document.addEventListener('mousemove', event => {
        const 
        x = Math.round(event.clientX / 30),
        y = Math.round(event.clientY / 55);
      
        stalker.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      
        // console.log('X coordinate:', event.pageX, 'Y coordinate:', event.pageY);
      });


    function funShowMenu(){
        showMenu.append("buenas noches");
        emailText.innerHTML = `<h1>Buenas noches</h1>
        <p>Este texto es de prueba</p>`
    };

    var emailText = document.getElementById('emailText');
    var showMenu = document.getElementById('showMenu');

    showMenu.addEventListener('click', ()=>{
        funShowMenu();
    })

    var aboutPartners = document.getElementById('aboutPartners');
                    
    function changeTextToCurrentContracts(){
        emailText.innerHTML = `<p>
                    <b>Initech Electronics:</b>
                    Renowned company in the world of technology, it specializes in the creation of innovative devices. Its focus is on the cutting edge of electronics and its motto is connecting the future.
                    1 Cyclops Alargon (CEO)
                    2 Zeus Rebeus (marketing)
                    3 Bastian Magno (security analyst)
                    4 Hercules Newt (developer/designer)
                    5 Apolo Rochis (customer service)</p>`        
                    }

    aboutPartners.addEventListener('click', () => {
        changeTextToCurrentContracts();
    })

})

