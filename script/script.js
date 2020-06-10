
let elem;
for (elem of data) {
	workerInfo(elem)
	// console.log(elem);
}

function workerInfo(data) {
	let root = document.querySelector('div');
	let cardUser = document.createElement('div');
	let pStatus = document.createElement('p');
	let pLastname = document.createElement('p');
	let pName = document.createElement('p');
	let pSalary = document.createElement('p');

	pStatus.innerHTML =`Должность: ${data.status}`;
	pLastname.innerHTML = `Фамилия: ${data.lastname}`;
	pName.innerHTML = `Имя: ${data.name}`;
	pSalary.innerHTML = `Оклад: ${data.salary}`;

	cardUser.appendChild(pStatus);
	cardUser.appendChild(pLastname);
	cardUser.appendChild(pName);
	cardUser.appendChild(pSalary);
	cardUser.classList.add('user')

	root.appendChild(cardUser);
}

// ***************************************

/*
Домашнее задание
Реализовать функцию, которая рекурсивно ищет сотрудника по зп.
Зп сотрудника не должна превышать указанное значение и должна быть ближайшей, нежели у других сотрудников.
*/

data.sort((a, b)=>a.salary-b.salary);

function search(searchSalary, list, lastNode) {
	const medianaIndex = Math.floor(list.length/2);
	const currentSalary = list[medianaIndex].salary;

	const rightSide = list.slice(medianaIndex+1);
	const leftSide = list.slice(0, medianaIndex);

	if (lastNode){
		if (lastNode.salary <= searchSalary && searchSalary<currentSalary){
			return lastNode;
		}else if (lastNode.salary > searchSalary && searchSalary >= currentSalary){
			return currentSalary;
		}
	}

	if (searchSalary > currentSalary && rightSide.length !== 0){
		return search(searchSalary, rightSide, list[medianaIndex])
	}else if (searchSalary < currentSalary) {
		if (leftSide.length !== 0){
			return search(searchSalary, leftSide, list[medianaIndex])
		}else{
			return lastNode;
		}
	}
}
console.log(search(100000, data));


// вывод результата в div.root_2

function addUser(data) {
	let root_2 = document.querySelector('.root_2')
	let container = document.createElement('div');
	let cardUser = document.createElement('div');
	let pStatus = document.createElement('p');
	let pLastname = document.createElement('p');
	let pName = document.createElement('p');
	let pSalary = document.createElement('p');

	pStatus.innerText = `Должность: ${data.status}`;
	pLastname.innerText = `Фамилия: ${data.lastname}`;
	pName.innerText = `Имя: ${data.name}`;
	pSalary.innerText = `Оклад: ${data.salary}`;

	cardUser.appendChild(pStatus);
	cardUser.appendChild(pLastname);
	cardUser.appendChild(pName);
	cardUser.appendChild(pSalary);
	cardUser.classList.add('model')

	container.appendChild(cardUser);
	container.classList.add('container');

	root_2.appendChild(container);


	container.addEventListener('click', function(){
		container.remove(container);
	  })

	  cardUser.addEventListener('click', function(event){
		event.stopPropagation();
	  })
	//   return container;
}


// Обработчик события;
let clickForm = document.querySelector('form');

clickForm.addEventListener('submit', function(event){
	event.preventDefault();
	let num = document.querySelector('input').value;
	console.log(num);

	search(num, data);

})
