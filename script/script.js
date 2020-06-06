
let elem;
for (elem of data) {
	workerInfo(elem)
	console.log(elem);
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

let arrSalary = [];
for (let i = 0; i < data.length; i++) {
	arrSalary.push(+data[i].salary);// Считали з/п всех сотрудников в массив arrSalary;
	}

// В новый sortedList массив отсортировали arrSalary;
let sortedList = arrSalary.sort(function(cur, next){
    if (cur === next) {
        return 0
    }else if (cur > next) {
         return 1
    }else{
        return -1
    }
});
console.log(sortedList);

function searchIndex(a) { // находим index элемента
	for (let i = 0; i < arrSalary.length; i++) {
		if (arrSalary[i] === a){
			return i;
		}
	}
}

// Бинарный Поиск

function search(n, li = sortedList) {
	let index = Math.floor(li.length/2);
	let mediana = li[index];
	console.log(`${mediana}=>${li}`);

	if (n === mediana) {
		return searchIndex(n);
	}else if (n > mediana) {
		return search(n, li.slice(index+1));
	}else if (n < mediana) {
		return search(n, li.slice(0, index));
	}
	addUser(index); // ???

}


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
	  return container;
}


// Обработчик события;
let clickForm = document.querySelector('form');

clickForm.addEventListener('submit', function(event){
	event.preventDefault();
	let num = document.querySelector('input').value;
	console.log(num);

	search(num); // ???
	
})
