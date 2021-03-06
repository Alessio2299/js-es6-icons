const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
  {
		name: 'hamburger',
		prefix: 'fa-',
		type: 'food',
		family: 'fas',
		color: 'blue'
	},
  {
		name: 'tshirt',
		prefix: 'fa-',
		type: 'clothes',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.getElementById("container");
let select = document.getElementById("select");

printElements(icons, container);

select.addEventListener("change", function (){
  let selection = this.value;

  if(selection == "all"){
    printElements(icons, container);
  }else{
    let selectionItems = icons.filter(object => {
      if(object.type == selection){ 
        return true;
      } 
      return false;
    })
    printElements (selectionItems, container);
  }
});

let options= ["all",]


for(let i = 0; i <icons.length; i++){
  if(!options.includes(icons[i].type)){ 
    options.push(icons[i].type);
  } 
}
options.forEach(element => {
  select.innerHTML += `<option value="${element}">${element}</option>`
});


function printElements (array, container){
  container.innerHTML = "";
  array.forEach(element => {
    container.innerHTML += `<div class="card-icon">
                              <i class="${element.family} ${element.prefix}${element.name}" style="color: #${randomColor()}"></i>
                              <span>${element.name}</span>
                            </div>`;
  });
}

function randomColor (){
  return Math.floor(Math.random()*11111111).toString(16);
}