class Calculator {

    constructor() {
        this.screen = document.getElementById("screen");
    }

    clear() {
        this.screen.innerHTML = ""
    }

    updateScreen(element){
        if (this.screen.innerHTML) {
            this.screen.innerHTML += element.getAttribute("value");
        } else {
            this.screen.innerHTML = element.getAttribute("value");
        }
    }

    evaluate() {
        if(this.screen.innerHTML){
            this.screen.innerHTML = eval(this.screen.innerHTML.toString());
        } else {
            return;
        }
    }
}

let cal = new Calculator();

/* clear screen */
document.getElementById("all-clear").addEventListener("click", ()=>{
    cal.clear();
}); 


/* update screen */
let keys = document.getElementsByClassName("key");
for (let i=0; i<keys.length; i++) {
    keys[i].addEventListener("click", ()=> {
        cal.updateScreen(keys[i]);
    })
}

/* result */
document.getElementById("equal").addEventListener("click", ()=>{
    cal.evaluate();
})
