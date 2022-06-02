const result = document.getElementById('result')

// Declarar um array chamado listItens
let listItens = []
//Declarar array de nomes
let listNames = [
	{
		picture: 'http://randomuser.me/api/portraits/women/94.jpg',
		country: 'Brasil',
		name: 'Ana Santos',
		age: 20,
		city: 'São Paulo'
	},

	{
		picture: 'http://randomuser.me/api/portraits/women/95.jpg',
		country: 'Brasil',
		country: 'Brasil',
		name: 'Dalva Duarte',
		age: 54,
		city: 'São Roque'
	},

	{
		picture: 'http://randomuser.me/api/portraits/women/96.jpg',
		country: 'Brasil',
		country: 'Brasil',
		name: 'Nayra Louise',
		age: 33,
		city: 'Cajamar'
	}
]
//Exibindo o conteudo na aba console do navegador
console.log(listNames)
//Listar os nomes das pessoas
function getData() {
	//removendo todos os itens da ul result
	result.innerHTML = ''
	listNames.forEach(user => {
		//2. passo - criar um elemento li com o item de array
		const li = document.createElement('li')

		listItens.push(li)

		li.innerHTML = `
			 <img src="${user.picture}" alt="${user.name}">
		   <div class= "user-info">
					<h4>${user.name}</h4>
					<p>${user.city} | ${user.country}</p>
					<p>${user.age} anos</p>
			 </div>
			`

		//3. passo - Adiciona o li com o iten na lista de result
		result.appendChild(li)
	})
}

//Crir a funçao filterData
