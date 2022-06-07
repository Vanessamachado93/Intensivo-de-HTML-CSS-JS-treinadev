const result = document.getElementById('result');

const filer = document.getElementById('filer');

const select = document.getElementById('select');

filter.addEventListener('input', (e) => filterData(e.target.value));

select.addEventListener('change', (e) => searchByCountry(e.target.value));

// Declarar um array chamado listItens
let listItens = []
//Declarar array de nomes
let listNames = [
	{
		picture: 'http://randomuser.me/api/portraits/women/94.jpg',
		country: 'Brazil',
		name: 'Ana Santos',
		age: 20,
		city: 'São Paulo'
	},

	{
		picture: 'http://randomuser.me/api/portraits/women/95.jpg',
		country: 'Brazil',
		country: 'Brazil',
		name: 'Dalva Duarte',
		age: 54,
		city: 'São Roque'
	},

	{
		picture: 'http://randomuser.me/api/portraits/women/96.jpg',
		country: 'Brazil',
		country: 'Brazil',
		name: 'Nayra Louise',
		age: 33,
		city: 'Cajamar'
	}
]

let dataJson = `
{
	"results": [
		{
			"id": 1,
			"name": "Caio Duarte",
			 "age": 34,
			 "city": "Cajamar",
			 "country": "Brazil",
			 "picture": "http://randomuser.me/api/portraits/men/57.jpg",
			 "hobby": {
				 "first": "Jogos de Pc",
				 "second": "Escutar músicas"
			 }
		},
		{
			"id": 2,
			"name": "Ricardo Alves",
			 "age": 23,
			 "city": "Roma",
			 "country": "Itália",
			 "picture": "http://randomuser.me/api/portraits/men/58.jpg",
			 "hobby": {
				 "first": "Assistir fimes",
				 "second": "Jogar futebool"
			 }
		},
		{
			"id": 3,
			"name": "Sandro Alves",
			 "age": 23,
			 "city": "Lisboa",
			 "country": "Portugal",
			 "picture": "http://randomuser.me/api/portraits/men/36.jpg",
			 "hobby": {
				 "first": "Assistir fimes",
				 "second": "Jogar futebool"
			 }
		}
	]
}
`
//convertendo um jason em um objeto javascript
let response = JSON.parse(dataJson);

//exibit o conteudo da variavel no console
//console.log(response.results);

//declarar um array chamado listResults
//let listResults = response.results
let listResults = [];

//Exibindo o conteudo na aba console do navegador
//console.log(listNames)
//Listar os nomes das pessoas
async function getData() {

	const res = await fetch('https://randomuser.me/api/?results=30');

	//console.log(res.status)
	//let data = await res.json();
	const {results} = await res.json()
	console.log(results)

	//removendo todos os itens da ul result
	result.innerHTML = ''

	results.forEach(user => {
		//2. passo - criar um elemento li com o item de array
		const li = document.createElement('li')

		listItens.push(li)

		li.innerHTML = `
			 <img src="${user.picture.large}" alt="${user.name.first}">
		   <div class= "user-info">
					<h4>${user.name.first}</h4>
					<p>${user.location.city} | ${user.location.country}</p>
					<p>${user.dob.age} anos</p>
			 </div>
			`

		//3. passo - Adiciona o li com o iten na lista de result
		result.appendChild(li)
	});
}

//Crir a funçao filterData

function filterData(searchTerm){
	
	listItens.forEach(item => {
		if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){ 

			item.classList.remove('hide');

		} else{
		item.classList.add('hide');
		}
	})
}

//Criar a funÇão que pesquisa por pais

function searchByCountry(value){

		console.log("O país selecionado foi: " + value);

		//limpar os dados dessa lista
		result.innerHTML = '';

		listResults.forEach(user => {

			if(user.location.country === value){
				const li = document.createElement('li')

				listItens.push(li)

				listResults.push(user)

			li.innerHTML = `
			<img src="${user.picture.large}" alt="${user.name.first}">
			<div class= "user-info">
				 <h4>${user.name.first}</h4>
						<p>${user.location.city} | ${user.location.country}</p>
						<p>${user.dob.age} anos</p>
			</div>
				`

			//3. passo - Adiciona o li com o iten na lista de result
			result.appendChild(li)
		}
	});

}