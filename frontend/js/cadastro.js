let form = document.getElementById("formCreate")

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            let nome = document.getElementById("nomeInput").value;
            let email = document.getElementById("emailInput").value;
            let senha = document.getElementById("passInput").value;

            const data = {
                name: nome,
                email: email,
                password: senha
            };

            fetch("https://pethope-api.onrender.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    alert("Cadastro realizado com sucesso:", data);
                })
                .catch(error => {
                    alert("Erro ao cadastrar:", error);
                });
        });