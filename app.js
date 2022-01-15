//createStudentCard(data[0]);

//attachCards(data);

setCards(data,1);



let footer=document.querySelector(".footerPg");



footer.addEventListener("click",handleClick);


window.addEventListener('resize',()=>{
    setCards(data,1);

})



let searchName=document.querySelector(".filterbyName");
searchName.addEventListener('input',(e)=>{
  
 
    let val=searchName.value;


    let arr=checkName(val,data);


    setCards(arr,1);

});


let  container=document.querySelector(".container");





container.addEventListener("click",(e)=>{



    let obj=e.target;



    console.log(obj.parentNode);


     if(obj.classList.contains("pics")){


         let card=obj.parentNode;


         let mail=card.querySelector(".email");


         console.log(mail.textContent);


         setModal(returnStud(mail.textContent));

     }

})
/*let studentCard=document.querySelector(".student");

studentCard.addEventListener("click",()=>{
   let arr=attachModalCards(data);
   setCards(arr,1);

})*/

/*container.addEventListener('click',()=>{
    
    setModal(data);
})*/



//functie care returneaza obiectul in functie de adresa de email.







