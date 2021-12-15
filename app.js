//createStudentCard(data[0]);

//attachCards(data);

setCards(data,1);



let footer=document.querySelector(".footerPg");



footer.addEventListener("click",handleClick);


window.addEventListener('resize',()=>{
    setCards(data,1);

})




