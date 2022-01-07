

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

             generatePageButtons((arr.length+1)/4);



        }else if(window.innerWidth>=320 && window.innerWidth<720){

            let a=pagination(arr,pagina,6);

             attachCards(a);

             generatePageButtons((arr.length+1)/6);
        }

        else if(window.innerWidth>=720 && window.innerWidth<920){

            let a=pagination(arr,pagina,9);
            attachCards(a);
            generatePageButtons((arr.length+1)/9);
        }
        else if(window.innerWidth>=920){
            let a=pagination(arr,pagina,9);
            attachCards(a);
            generatePageButtons((arr.length+1)/9);
        }


    }

        
    //functie care genereaza butoanele in functie de cate sunt

function generatePageButtons(numar){
     
     let footerPage=document.querySelector(".footerPg");

     footerPage.textContent="";
  
     for (let i=0; i<numar;i++){
        
        let pagesNumbers=document.createElement('p');
        footerPage.appendChild(pagesNumbers);
        pagesNumbers.classList.add("pageNumber");
        pagesNumbers.textContent=`${i+1}`;

     }
     


    }


    //handle event for clik on page

//eventu o sa fie pe footer
    let handleClick=(e)=>{
        obj=e.target;
        
        if(obj.tagName=='P'){

            let number=+obj.textContent;

            setCards(data,number);

        }
       
    }

  
 //functie ce primeste ca parametru un string si un vector de obj
 
 function checkName(nameStud, stud){

     let arr=[];


    for(let i=0;i<stud.length;i++) {
        if(stud[i].name.first.includes(nameStud) || stud[i].name.last.includes(nameStud)){
           
            arr.push(stud[i]);
        }
    }


    return arr;

 }

        


