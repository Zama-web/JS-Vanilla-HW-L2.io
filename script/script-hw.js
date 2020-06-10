
function addWorker(name, lastname, salary){
	return {name, lastname, salary, staff: []}
}
/*
Иванов Иван
	Петров Петр
		Антонов Антон
		Максимов Максим
	Сидоров Сидор
		Ушанов Анатолий
	Романова Анна	
		Грибов Максим
		Куликов Антон
			Сергеев Сергей
*/
let boss = addWorker('Иван', 'Иванов', 1000000)

boss.staff.push(addWorker('Петр',  'Петров',   100000))
boss.staff.push(addWorker('Сидор', 'Сидоров',  100000))
boss.staff.push(addWorker('Анна',  'Романова', 100000))

boss.staff[0].staff.push(addWorker('Антон',  	'Антонов',  10000))
boss.staff[0].staff.push(addWorker('Максим', 	'Максимов', 10000))
boss.staff[1].staff.push(addWorker('Анатолий',  'Ушанов',  10000))
boss.staff[2].staff.push(addWorker('Максим',  	'Грибов',  10000))
boss.staff[2].staff.push(addWorker('Антон',  	'Куликов',  10000))

boss.staff[2].staff[1].staff.push(addWorker('Сергей',  	'Сергеев',  1000))

function print(worker, pref){
	console.log(`${pref}имя: ${worker.name}`)
	console.log(`${pref}фамилия: ${worker.lastname}`)
	console.log(`${pref}зарплата: ${worker.salary}`)
	console.log(`${pref}----------------`)
}

function render(node=boss, pref=''){
	print(node, pref)
	for (let w of node.staff){
		render(w, pref+'    ')
	}
}
render();
