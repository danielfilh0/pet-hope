function criarDivAnimal(animal) {
    const divAnimal = document.createElement('div');
    divAnimal.classList.add('animal');

    const titulo = document.createElement('h2');
    titulo.textContent = animal.name;
    divAnimal.appendChild(titulo);

    const racaParagrafo = document.createElement('p');
    racaParagrafo.textContent = `Tipo: ${animal.type}`;
    divAnimal.appendChild(racaParagrafo);

    const idadeParagrafo = document.createElement('p');
    idadeParagrafo.textContent = `Idade: ${animal.age}`;
    divAnimal.appendChild(idadeParagrafo);

    const descricaoParagrafo = document.createElement('p');
    descricaoParagrafo.textContent = `Descrição: ${animal.description}`;
    divAnimal.appendChild(descricaoParagrafo);

    const imagem = document.createElement('img');
    imagem.src = animal.imagemUrl;
    imagem.alt = '';
    divAnimal.appendChild(imagem);

    if(animal.imagemUrl == null)
    {
        const semFotoParagrafo = document.createElement('p');
        semFotoParagrafo.textContent = `(Animal sem fotinha 🥺)`;
        divAnimal.appendChild(semFotoParagrafo);
    }

    const botaoAdotar = document.createElement('button');
    botaoAdotar.textContent = 'Adotar';
    botaoAdotar.id = 'btnModal';
    divAnimal.appendChild(botaoAdotar);
    console.log("primeiro")

    const divAnimaisExistente = document.getElementById('animais');
    divAnimaisExistente.appendChild(divAnimal);

    botaoAdotar.addEventListener('click', function() {
        excluirAnimal(animal.id);
    });
}

async function excluirAnimal(id) {
    try {
        let acessToken = localStorage.getItem("acessToken");

        const resposta = await fetch(`https://pethope-api.onrender.com/pets/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${acessToken}`
            },
        });

            if (resposta.ok) {
                alert(`Bichinho adotado com sucesso! Trate-o com muito amor e carinho.`);
                location.reload();

            } else {
                console.error(`Erro ao excluir o animal com ID ${id}.`);
            }
        } catch (erro) {
            console.error('Erro ao realizar a exclusão:', erro);
        }
    }

async function buscarEExibirAnimais() {
    try {
        const resposta = await fetch('https://pethope-api.onrender.com/pets');
        const dados = await resposta.json();

        dados.forEach(animal => criarDivAnimal(animal));
    } catch (erro) {
        console.error('Erro ao buscar dados da API:', erro);
    }
}

window.onload = function() {
    buscarEExibirAnimais();
};