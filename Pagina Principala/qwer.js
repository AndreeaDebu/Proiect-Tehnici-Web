document.getElementById("demo").innerHTML = "A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount &#9834; &#9834; &#9834; - New York Magazine";
//afisare review 
var ceva = 1;
var altceva;
var feedback = [];    
function save_print_comm() {
    var text_doc = document.getElementById('rev').value;
    feedback.push({
        autor: 'admin',
        date: '12/12/2019',
        text: text_doc
    });
    displayList();
}
//functie de afisare
function displayList() {
    var reviews = document.getElementById('test');
    reviews.innerHTML = '';
    feedback.forEach((review, key) => {
            var item = document.createElement('div');
            item.className = 'reviewItem';
            var paragraph = document.createElement('p');
            paragraph.innerText = review.text;
            var paragraph2 = document.createElement('p');
            paragraph2.innerText = "Added at: " + review.date + " by " + review.autor;
            item.append(paragraph);
            item.append(paragraph2);
            var editBtn = document.createElement('button');
            editBtn.textContent = 'Delete'
            editBtn.onclick = () => delete_comm(key);
            item.append(editBtn);
            var modifBtn = document.createElement('button');
            modifBtn.textContent = 'Modify'
            modifBtn.onclick = () => modif_comm(key);
            item.append(modifBtn);
            reviews.append(item);
    });

}
//delete review
function delete_comm(key){
    feedback.splice(key, 1);
    displayList();  
}
//mofificare review
function modif_comm(key){
    var text=feedback[key];
    alert(text);
    var text_modif = text.concat(document.getElementById('rev').value);
    feedback[key]=text_modif;
     displayList();  
}

//oferta care apare
function oferta() {
  setTimeout(function(){ 
      swal('Multumim pentru recenzia acordata! Va mai asteptam la restaurantul nostru ! :)');
  },3000);
}
var pop;
window.addEventListener("load", pop_up_window());
function pop_up_window(){
    pop = setInterval(function(){ swal("Parerea ta despre noi este foarte importanta, asa ca ne dormi sa completati formularul de recenzii! :) "); }, 3000);
};
//oprire fereastra pop_up
function myStopFunction() {
    clearInterval(pop);
}
//incarca text din documentul creat pe gitHub
function loadDoc() {
  // Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		feedback = JSON.parse(this.responseText);
        displayList();
	} else {
		// What do when the request fails
		console.log('The request failed!');
	}

};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://raw.githubusercontent.com/AndreeaDebu/restaurantjs/master/db.json');
xhr.send();
}

loadDoc();
 function DeletePh(){
     document.getElementById("demo").innerHTML = '';
 }

