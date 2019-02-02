var mobiles = {
	"products": [{
			"title1": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image1": "1.jpeg",
			"quantity":"10"
		},
		{
			"title1": "Mi A2 4GB + 64GB | 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image1": "2.jpeg",
			"quantity":"20"
		},
		{
			"title1": "Apple iphone 32GB",
			"description": "11.4 cm(4.7)display",
			"image1": "3.jpeg",
			"quantity":"30"
		},
		{
			"title1": "red mi note 6 pro",
			"description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
			"image1": "4.jpeg",
			"quantity":"40"
		}
	]
}

var i = 0
window.onload = function display(){
    document.getElementById('imageHTm').innerHTML = '<img src="'+mobiles.products[i].image1+'" class="img-responsive">'
    document.getElementById('titleHTm').innerHTML = '<h1>'+mobiles.products[i].title1+'</h1>'
    document.getElementById('descriptionHTm').innerHTML = '<h4>'+mobiles.products[i].description+'</h4>'
    document.getElementById('quantityHTm').innerHTML = '<h5> Quantity available :'+mobiles.products[i].quantity+'</h5>'
    document.getElementById('form').style.display= "none"
    hideButton('previous')
};

function prevpressed(){
    i--;
    if(i < 0){
        i = 0;
        hideButton('previous')
        return;
    }
    showButton('previous')
    showButton('next')
    document.getElementById('imageHTm').innerHTML = '<img src="'+mobiles.products[i].image1+'" class="img-responsive">'
    document.getElementById('titleHTm').innerHTML = '<h1>'+mobiles.products[i].title1+'</h1>'
    document.getElementById('descriptionHTm').innerHTML = '<h4>'+mobiles.products[i].description+'</h4>'
    document.getElementById('quantityHTm').innerHTML = '<h5> Quantity available :'+mobiles.products[i].quantity+'</h5>'
    if (i == 0) hideButton('previous')
}


function nextpressed(){
    i++;
    if(i > mobiles.products.length - 1){
        i = mobiles.products.length-1;
        hideButton('next')
        return;
    }
    showButton('next')
    showButton('previous')
    document.getElementById('imageHTm').innerHTML = '<img src="'+mobiles.products[i].image1+'" class="img-responsive">'
    document.getElementById('titleHTm').innerHTML = '<h1>'+mobiles.products[i].title1+'</h1>'
    document.getElementById('descriptionHTm').innerHTML = '<h4>'+mobiles.products[i].description+'</h4>'
    document.getElementById('quantityHTm').innerHTML = '<h5> Quantity available :'+mobiles.products[i].quantity+'</h5>'
    if(i == mobiles.products.length - 1) hideButton('next')

}

function hideButton(id) {
  console.log(document.getElementById(id).style.visibility)
  document.getElementById(id).style.visibility = 'hidden';
}
function showButton(id) {
  console.log(document.getElementById(id).style.visibility)
  document.getElementById(id).style.visibility = 'visible';
}

function delete1(i){
	delete mobiles.products[i];

}

function del(){
	delete1(i);
}

function edit(i){
 document.getElementById("form"). =
}

function ed(){
	edit(i);
}