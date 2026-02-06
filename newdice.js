document.addEventListener("DOMContentLoaded", () => {


    const button2 = document.getElementById("rolbutton")
    const dice3 = document.getElementById("dice")
    const ul= document.getElementById("rollhistory")

    let history=[];

    function rolldice() {
        const rollresult = Math.floor(Math.random() * 6) + 1;
        const diceface = getdiceface(rollresult)
        dice3.innerHTML=diceface
        history.push(rollresult)
        upadterollhistory();

    }
   function upadterollhistory(){
        ul.innerHTML=" ";
        for(let i=0;i<history.length;i++ ){
            const listitem=document.createElement("li")
            listitem.innerHTML=`roll ${ i+1}:<span>${getdiceface(history[i])}</span>`
            ul.appendChild(listitem)
        }
    }

    function getdiceface(rollresult) {
        switch (rollresult) {
            case 1:
                return "&#9856;"
            case 2:
                return "&#9857;"
            case 3:
                return "&#9858;"
            case 4:
                return "&#9859;"
            case 5:
                return "&#9860;"
            case 6:
                return "&#9861;"
        }
    }


    button2.addEventListener("click", () => {
        dice3.classList.add("rollani")
        setTimeout(() => {
            dice3.classList.remove("rollani")
            rolldice()
        }, 1000)
    })
})

