document.addEventListener("DOMContentLoaded" , () => {

    var boundaries = document.querySelectorAll(".boundary");
    var status = document.querySelector("#status");

    document.querySelector("#start").onmouseover = () => {

        document.onmouseover = (event) => {
            if(status.innerHTML != 'You win!'){
                if(event.target.id != "maze" && event.target.id != "start" && event.target.id != "end"){
                    boundaries.forEach(div => {
                        if (div.parentElement.id == 'maze'){
                            div.style.backgroundColor = 'red';
                        }
                    })
                }
            }
        }

        document.querySelector("#end").onmouseover = () => {
            if (document.querySelector("#boundary1").style.backgroundColor == 'red'){
                status.innerHTML = "You lose!"
            }
            else {
                status.innerHTML = "You win!";
            }
        }

    }

    document.querySelector("#start").onclick = () => {
        boundaries.forEach(div => {
            div.style.backgroundColor = '';
            document.querySelector("#status").innerHTML = "Move your mouse over the \"S\" to begin.";
        })
    }
   
})
