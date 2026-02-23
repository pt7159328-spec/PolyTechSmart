document.querySelector(".register-form").addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://10.237.240.37:5000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
    .then(res => res.json().then(data => ({ status: res.status, body: data })))
    .then(result => {

        alert(result.body.message);

        // Agar registration successful hai to redirect karega
        if (result.status === 201) {
            window.location.href = "home.html";
        }

    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong");
    });
});