function formValidation(){
    var validated = true;
    var errors = [];
    var descInput = document.signup.prodDesc.value.trim();
    if (descInput.length < 20){
        validated = false;
        errors.push("Description must be at least 20 characters.");
    }

    var priceInput = Number(document.signup.price.value.trim());
    if (!Number.isInteger(priceInput)){
        validated = false;
        errors.push("Price must be an integer (no decimals allowed).");
    }
    else if (priceInput >= 1000 || priceInput <= 0){
        validated = false;
        errors.push("Price has to be between 0 and 1000 exclusive.");
    }

    var usernameInput = document.signup.suppUsername.value.trim();
    var startWithAlpha = /^[A-Za-z]/;
    var spaceExists = /\s+/;
    if (!startWithAlpha.test(usernameInput)){
        validated = false;
        errors.push("Username must start with an alphabet.");
    }
    if (usernameInput.length < 4){
        validated = false;
        errors.push("Username must have at least 4 characters.");
    }
    if (spaceExists.test(usernameInput)){
        validated = false;
        errors.push("Username cannot have a space.")
    }

    var status = Array.from(document.signup.suppStat);
    var boxesChecked = 0;
    status.forEach(function(checkbox){
        if (checkbox.checked){
            boxesChecked++;
        }
    });
    if (boxesChecked < 1){
        validated = false;
        errors.push("At least 1 Status box must be checked.");
    }

    var errorSidePanel = document.querySelector("#error_messages");
    errorSidePanel.innerHTML = "";
    errorSidePanel.style.display = "none";
    var ul = document.createElement("ul");
    errors.forEach(function(message){
        var li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
    });
    
    if (validated){
        alert("Successfully submitted product registration!! ~^w^~");
        return true;
    }
    else {
        var strong = document.createElement("strong");
        strong.textContent = "Error Submitting Form :(";
        errorSidePanel.style.display = "inherit";
        errorSidePanel.appendChild(strong);
        errorSidePanel.appendChild(ul);
        return false
    }
    
}