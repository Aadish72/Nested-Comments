document.addEventListener("click", function (event) {
    // Event delegation for dynamically added "Add Reply" buttons
    if (event.target.id === "reply") {
        console.log("Reply clicked");
        console.log("ds",event.target);
        createinputbox(event.target);
    }
});

function createinputbox(replyButton) {
    let divi = document.createElement("div");
    divi.classList.add("card-2");

    divi.innerHTML = `
        <div class="text">
            <input type="text" placeholder="Add your text" class="input-text">
        </div>
        <div class="submit-btn">
            <button class="submit">Submit</button>
        </div>`;
        console.log(replyButton.parentElement);
    replyButton.parentElement.appendChild(divi); // Append under the clicked "Add Reply" button

    // Select the newly created submit button and add event listener
    let submitButton = divi.querySelector(".submit");
    submitButton.addEventListener("click", function () {
        let inputValue = divi.querySelector(".input-text").value;
        if (inputValue.trim() !== "") {
            createreply(inputValue, divi);
        } else {
            alert("Please enter some text before submitting.");
        }
    });
}

function createreply(inputValue, parentDiv) {
    let div = document.createElement("div");
    div.classList.add("card-1");

    div.innerHTML = `
        <div class="first-comment"><h1>${inputValue}</h1></div>
        <div class="reply-btn">
            <button id="reply"> Add Reply</button>
        </div>`;

    parentDiv.parentElement.appendChild(div);

    // Remove input box after submitting the reply
    parentDiv.remove();
}
