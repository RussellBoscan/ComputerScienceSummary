window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Get modal element
var project1Modal = document.getElementById("project1Modal");
var project2Modal = document.getElementById("project2Modal");
var project3Modal = document.getElementById("project3Modal");
// Get open project # button
var openProject1Btn = document.getElementById("openProject1Btn");
var openProject2Btn = document.getElementById("openProject2Btn");
var openProject3Btn = document.getElementById("openProject3Btn");
// Get close button
var closeBtns = document.querySelectorAll(".closeBtn");

// Listen for open click
openProject1Btn.addEventListener("click", () =>{
    project1Modal.style.display = "block";

    setTimeout(function(){
        project1Modal.style.opacity = '1';
        document.body.style.overflowY = 'hidden';
    }, 100)

        window.addEventListener("click", (e) =>{
            if (e.target == project1Modal) {
                setTimeout(function(){
                    project1Modal.style.opacity = '0';
                    document.body.style.overflowY = 'auto';
                }, 100)
                setTimeout(()=>{
                    project1Modal.style.display = 'none';
                }, 300)
            }
        });
});
openProject2Btn.addEventListener("click", () =>{
    project2Modal.style.display = "block";
    
    setTimeout(function(){
        project2Modal.style.opacity = '1';
        document.body.style.overflowY = 'hidden';
    }, 100)

        window.addEventListener("click", (e) =>{
            if (e.target == project2Modal) {
                setTimeout(function(){
                    project2Modal.style.opacity = '0';
                    document.body.style.overflowY = 'auto';
                }, 100)
                setTimeout(()=>{
                    project2Modal.style.display = 'none';
                }, 300)
            }
        });
});
openProject3Btn.addEventListener("click", () =>{
    project3Modal.style.display = "block";
    
    setTimeout(function(){
        project3Modal.style.opacity = '1';
        document.body.style.overflowY = 'hidden';
    }, 100)

        window.addEventListener("click", (e) =>{
            if (e.target == project3Modal) {
                setTimeout(function(){
                    project3Modal.style.opacity = '0';
                    document.body.style.overflowY = 'auto';
                }, 100)
                setTimeout(()=>{
                    project3Modal.style.display = 'none';
                }, 300)
            }
        });
});

closeBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        var modal = e.target.closest(".modal");
        setTimeout(()=>{
            modal.style.opacity = '0';
            document.body.style.overflowY = 'auto';
        },100)
        setTimeout(()=>{
            modal.style.display = 'none';
        },300)
    });
});

const firstDraft = document.querySelector('.rubeGoldbergFirstDraft');
const finalDraft = document.querySelector('.rubeGoldbergFinalDraft');

        firstDraft.addEventListener('mouseenter', () => {
            finalDraft.classList.add('shrinkLeft');
        });

        firstDraft.addEventListener('mouseleave', () => {
            finalDraft.classList.remove('shrinkLeft');
        });

        finalDraft.addEventListener('mouseenter', () => {
            firstDraft.classList.add('shrinkRight');
        });

        finalDraft.addEventListener('mouseleave', () => {
            firstDraft.classList.remove('shrinkRight');
        });