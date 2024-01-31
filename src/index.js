
    function addTo() {

        let name = prompt("What is your name?");

         if (name.length > 0 )
     {
        alert ("Thank you, " + name +  "! We will be in touch ❤️");
    }
    else {

        alert ("No Name!");
    }
        
    }

   
    let addButton = document.querySelector("button");
    addButton.addEventListener("click", addTo);

