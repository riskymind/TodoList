const addTodo = document.querySelector('#addTodo');
const input = document.getElementById('userInput');
const list = document.querySelector('ul');
//const listItem = document.querySelector('li');


//getting the length of the input

const inputLength = ()=> {
	return input.value.length;
}


// creating list element

const createListElement = ()=> {
	const li = document.createElement('li'); //creating an li element
	const userInput = document.createTextNode(input.value);

	li.appendChild(userInput);
	list.appendChild(li);
	input.value = '';

	//method to indicate done 
	const crossOut = ()=> {
		li.classList.toggle('done');
	};

	//event listener for list being done
	li.addEventListener('click', crossOut);
	

	


	const deleteBtn = document.createElement('button');
	const cancel = document.createTextNode('X');
	deleteBtn.appendChild(cancel);
	li.appendChild(deleteBtn);

	//method to delete list items
	const deleteListItem = ()=> {
		li.classList.add('delete');
	}

	//event listener for deletion of item
	deleteBtn.addEventListener('click', deleteListItem);
}


const addTodoList = ()=> {
	if(inputLength() > 0) {
		createListElement();
	}
}



addTodo.addEventListener('click', addTodoList);
//input.addEventListener('keypress', addTodoList);