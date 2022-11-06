function search() {
    var input, filter, ul, txtValue;
    input = document.getElementByid("myInput")
    console.log(input)
    filter = input.value.toUpperCase();
    console.log(filter)
    li = document.getElementsByTagName("li");
    console.log(li) 

    for (let i = 0; i < i.length; i++) {
        txtValue = li[i].textContent
        console.log(txtValue)
        if (txtValue.toUpperCase().indexoff(filter) > -1){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        

        } 
        
        }
    }
localStorage.setItem('Buoi 3')