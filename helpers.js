

function createStudentCard(obj){


let div1=document.createElement('div');
div1.classList.add("student");

let img1=document.createElement('img');
img1.classList.add("pics");
//img1.style.src=obj.picture.medium;

img1.src=obj.picture.medium;


let h3=document.createElement('h3');
h3.classList.add("stname");
h3.textContent=obj.name.first+" "+obj.name.last;

let pEmail=document.createElement('p');
pEmail.classList.add("email");
pEmail.textContent=obj.email;

let pRegistration=document.createElement('p');
pRegistration.classList.add("registrationDate");
pRegistration.textContent="Joined "+obj.registered.date;



div1.appendChild(img1);
div1.appendChild(h3);
div1.appendChild(pEmail);
div1.appendChild(pRegistration);

return div1;



}

//arr= luam parametru un array
//function attach cards
function attachCards(arr){

let container=document.querySelector(".container");


container.innerHTML="";

for(let i=0; i<arr.length;i++){
  

    let card=createStudentCard(arr[i]);


    container.appendChild(card);
}



}



//primim un vector ,numarul paginii  ,numarul de carduri



    function  pagination(arr,pag, nrCard){
   
    let nou=[];
    for(let i=(pag-1)*nrCard;i<pag*nrCard;i++){
        nou.push(arr[i]);
    }

    return nou;
    

    }



    function setCards(arr,pagina){
        

         
        if(window.innerWidth<320){

             
             let a=pagination(arr,pagina,4);

             attachCards(a);

        }else if(window.innerWidth>=320 && window.innerWidth<720){

            let a=pagination(arr,pagina,6);

             attachCards(a);
        }

        else if(window.innerWidth>=720 && window.innerWidth<920){

            let a=pagination(arr,pagina,9);
            attachCards(a);
        }
        else if(window.innerWidth>=920){
            let a=pagination(arr,pagina,9);
            attachCards(a);
        }


    }

        
    //functie care genereaza butoanele pentru pagini
    
    function generatePageButtons(arr,numberPage){
     let pageNr=document.querySelector(".pageNumber");

     
         
    }
        


