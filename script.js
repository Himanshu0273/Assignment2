function add() 
        {
            event.preventDefault()
            let a = parseFloat(document.getElementById("a").value);
            let b = parseFloat(document.getElementById("b").value);
            document.getElementById("answer1").value = a + b
            document.getElementById("ans1").style.display = "block"
            document.getElementById("answer2").value = a - b
            document.getElementById("ans2").style.display = "block"
            document.getElementById("answer3").value = a * b
            document.getElementById("ans3").style.display = "block"
            document.getElementById("answer4").value = a / b
            document.getElementById("ans4").style.display = "block"
        }

