

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

             
             let x=pagination(arr,pagina,4);
             attachCards(x);

             generatePageButtons((arr.length+1)/4);



        }else if(window.innerWidth>=320 && window.innerWidth<720){

            let x=pagination(arr,pagina,8);

             attachCards(x);

             generatePageButtons((arr.length+1)/8);
        }

        else if(window.innerWidth>=720 && window.innerWidth<920){

            let x=pagination(arr,pagina,12);
            attachCards(x);
            generatePageButtons((arr.length+1)/12);
        }
        else if(window.innerWidth>=920){
            let x=pagination(arr,pagina,12);
            /*attachCards(appendChild);*/
            attachCards(x);
            generatePageButtons((arr.length+1)/12);
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


    //handle event for click on page

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

 function createModalCards(obj){
     let modalSection=document.createElement('section');
     modalSection.classList.add("modal");

     let modalCard=document.createElement('div');
     modalCard.classList.add("modalStudent");

     let modalPictures=document.createElement('img');
     modalPictures.classList.add("modalPics");
     modalPictures.src=obj.picture.thumbnail;

     let modalStudentName=document.createElement('h3');
     modalStudentName.classList.add("modalStName");
     modalStudentName.textContent=obj.name.first+""+obj.name.last;

     let modalStudentEmail=document.createElement('p');
     modalStudentEmail.classList.add("modalEmail");
     modalStudentEmail.textContent=obj.email;

     let modalStudentRegDate=document.createElement('p');
     modalStudentRegDate.classList.add("modalRegisterDate");
     modalStudentRegDate.textContent="Joined "+obj.registered.date;

     
     modalCard.appendChild(modalPictures);
     modalCard.appendChild(modalStudentName);
     modalCard.appendChild(modalStudentEmail);
     modalCard.appendChild(modalStudentRegDate);

     return modalCard;

 }

 function attachModalCards(arrSt){

    
    let modalSection=document.querySelector(".modal");
    let modalDiv=document.querySelector(".modalStudent");
    
    
    body.innerHTML="";
    
    for(let i=0; i<arrSt.length;i++){
      
    
        let modalSudentCard=createModalCards(arrSt[i]);
    
    
        body.appendChild(modalSudentCard);
        body.appendChild(modalSection);

    }
    
    
    
    }



//fucntie ce primeste ca parametru un obiect  si returneaza card din modal

function  setModal(obj){



    let body=document.querySelector('body');

    let first=body.firstElementChild;

    let section =document.createElement("section");

    section.classList.add("modal");


    let card=document.createElement("div");
    card.classList.add("modalStudent");

    card.innerHTML=`
    
        <i class="far fa-window-close close"></i>
        <img src=${obj.picture.medium} alt="" class="modalPics">
        <div class="butoane">
            <i class="fas fa-arrow-left btnLeft"></i>
            <i class="fas fa-arrow-right btnRight"></i>
        </div> 
        <h3 class="modalStName">${obj.name.first} ${obj.name.last}</h3>
        <p class="modalEmail">${obj.email}</p>
        <p class="modalRegisterDate">Joined:${obj.registered.date}</p>

    `

    body.insertBefore(card,first);

    body.insertBefore(section,card);

    //pentru a inchide fereastra dupa ce s-a dat click pe poza
    let btnClose=document.querySelector(".close");



    btnClose.addEventListener("click",()=>{
    
        removeModal();
        
    });

    //pentru a trece la urmatoare poza daca se apasa pe sagetile stanga/dreapta
    let btnRight=document.querySelector(".btnRight");
    let btnLeft=document.querySelector(".btnLeft");



    btnRight.addEventListener("click",(e)=>{
         
        let student=document.querySelector(".modalStudent").querySelector(".modalEmail").textContent;
        let container=document.querySelector(".container");
        /*console.log(obj.email)*/

        obj=moveToRight(student);
        
        btnLeft.style.display="block";
        // daca obj==null inseamna ca am ajuns la ultiul student si ii sterg sageata dreapta pt ca nu putem merge mai departe la urmatorul!
        if(obj!=null){
        
        let objModalPics=document.querySelector(".modalPics");
        let objModalStName=document.querySelector(".modalStName");
        let objModalStEmail=document.querySelector(".modalEmail");
        let objModalStRegDate=document.querySelector(".modalRegisterDate");

        objModalStName.textContent=obj.name.first+" "+obj.name.last;
        objModalStEmail.textContent=obj.email;
        objModalPics.src=obj.picture.medium;
        objModalStRegDate.textContent="Joined "+obj.registered.date;

        
        }else{

            //stergem sageata dreapta de pe card daca am ajuns la ultimul student
            btnRight.style.display="none";

        }
    });
    
    btnLeft.addEventListener("click",(e)=>{
        let student=document.querySelector(".modalStudent").querySelector(".modalEmail").textContent;
        let container=document.querySelector(".container");
        /*console.log(obj.email)*/

        obj=moveToLeft(student);
        btnRight.style.display="block";
        // daca obj==null inseamna ca am ajuns la primul student si ii sterg sageata stanga pt ca nu putem merge inapoi catre student!
        if(obj!=null){
              
        let objModalPics=document.querySelector(".modalPics");
        let objModalStName=document.querySelector(".modalStName");
        let objModalStEmail=document.querySelector(".modalEmail");
        let objModalStRegDate=document.querySelector(".modalRegisterDate");
       
        objModalStName.textContent=obj.name.first+" "+obj.name.last;
        objModalStEmail.textContent=obj.email;
        objModalPics.src=obj.picture.medium;
        objModalStRegDate.textContent="Joined "+obj.registered.date;

        /*btnLeft.style.display="block";*/

        }else{

            //stergem sageata stanga de pe card daca am ajuns la primul student
            btnLeft.style.display="none";

        }

        

      

    });


    


    



}



function removeModal(){
    
    let body=document.querySelector('body');
    let card=document.querySelector('modalStudent');
    let section=document.querySelector('modal');

    let first= body.firstElementChild;
  

    body.removeChild(first);

    let second=body.firstElementChild;

    body.removeChild(second);



   
}


function returnStud(emailSt){
   
    for(let i=0;i<data.length;i++){
        if(data[i].email==emailSt){
            return data[i];
        }
    }

    return null;
}

// functie petru a trece la urmatorul card spre stanga (sageata stanga)

function moveToLeft(emailSt){
    let card=document.querySelector(".container");
    for(let i=0;i<data.length;i++){
        if(data[i].email==emailSt){
            return data[i-1];
        }
    }
    return null;

}


// functie petru a trece la urmatorul card spre dreapata (sageata dreapta)

function moveToRight(emailSt){

    let card=document.querySelector(".container");
    for(let i=0;i<data.length;i++){
        if(data[i].email==emailSt){
            return data[i+1];
        }
    }
    return null;

}

function changeModalCard(obj){

    /*let modalSection=document.querySelector(".modal");*/
    let modalDiv=document.querySelector(".modalStudent");
    
    
   
    modalDiv.innerHTML=`

    
    <img src=${obj.picture.medium} alt="" class="modalPics">
    <div class="butoane">
        <i class="fas fa-arrow-left btnLeft"></i>
        <i class="fas fa-arrow-right btnRight"></i>
    </div> 
    <h3 class="modalStName">${obj.name.first} ${obj.name.last}</h3>
    <p class="modalEmail">${obj.email}</p>
    <p class="modalRegisterDate">Joined:${obj.registered.date}</p>
    
    `

    /*<section class="modal">
        

        

    </section>
    <div class="modalStudent">
        <i class="far fa-window-close close"></i>
        <img src="https://randomuser.me/api/portraits/med/women/25.jpg" alt="" class="modalPics">
        <div class="butoane">
            <i class="fas fa-arrow-left"></i>
            <i class="fas fa-arrow-right"></i>
        </div> 
        <h3 class="modalStName">Ethel Dean</h3>
        <p class="modalEmail">ethel.dean@example.com</p>
        <p class="modalRegisterDate"> Joined 12-15-2005</p>
    </div>*/

    


}

