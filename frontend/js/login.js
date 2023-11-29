const formLogin = document.getElementById("formLogin");

        formLogin.addEventListener("submit", (event) => {
            event.preventDefault();

            let email = document.getElementById("emailInput").value;
            let senha = document.getElementById("passInput").value;

            fetch("https://pethope-api.onrender.com/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        email: email,
                        password: senha
                    }
                )
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error("Erro no login");
                }

                return response.json();
            })
            .then(data => {
                alert("Login bem-sucedido", data)
                //require parameter
                window.location.href = `doar.html`;
                localStorage.setItem("acessToken", `${data.acessToken}`);
            })
            .catch(error => {
                alert("Erro no login", error)
            });
            
        });