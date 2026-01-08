const eventAdd = () => {
    const btn_lst = document.getElementsByClassName("btn");
    for (let btn of btn_lst) {
        if (btn.innerHTML == "=") btn.addEventListener("click", function(){
            const equation = (document.getElementById("screen").innerHTML)
            console.log(equation)
            const value = (eval(equation))
            console.log(value)

            document.getElementById("screen").innerHTML = value
        })
        else if (/[+-x/.0-9]+$/.test(btn.innerHTML)) {
            btn.addEventListener("click", function(){
                document.getElementById("screen").innerHTML  +=  (" " + btn.innerHTML)
                console.log(document.getElementById("screen").innerHTML)
            })
        }
        
    }


}

eventAdd()