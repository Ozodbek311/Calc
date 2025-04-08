class Calculator {
    constructor() {
        this.display = document.querySelector("input");
        this.num = document.querySelectorAll(".num");
        this.operator = document.querySelectorAll(".sign");
        this.equal = document.querySelector(".equal");
        this.clear = document.querySelector(".c");
        this.remove = document.querySelector(".r");
        this.dot = document.querySelector(".dot");
        
        this.addEventListeners();
    }

    addEventListeners() {
        this.num.forEach(button => {
            button.addEventListener("click", () => {
                this.display.value += button.textContent;
            });
        });

        this.operator.forEach(op => {
            op.addEventListener("click", () => {
                
                if (this.display.value && !this.display.value.endsWith(" ")) {
                    this.display.value += op.textContent;
                }
            });
        });

        this.equal.addEventListener("click", () => {
            this.calculate();
        });

        this.clear.addEventListener("click", () => {
            this.clearDisplay();
        });

        this.remove.addEventListener("click", () => {
            this.removeLastCharacter();
        });

        this.dot.addEventListener("click", () => {
            this.addDot();
        });
    }

    calculate() {
        try {
            this.display.value = eval(this.display.value);
        } catch {
            this.display.value = "Xatolik";
        }
    }

    clearDisplay() {
        this.display.value = "";
    }

    removeLastCharacter() {
        this.display.value = this.display.value.slice(0, -1);
    }

    addDot() {
        let lastNumber = this.display.value.split(/[+\-*/]/).pop();
        if (!lastNumber.includes('.')) {
            this.display.value += this.dot.textContent;
        } else {
            alert("Nuqta yetarlicha");
        }
    }
}
const calculator = new Calculator();