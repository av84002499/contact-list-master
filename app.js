// API--https://contactlist.com/api

const search=document.getElementById("search_bar");
const matches_list=document.getElementById("search_list");
const search_btn = document.getElementById("search_btn");
const fav_btn=document.getElementById("fav_btn");
  

fetch(`https://av84002499.github.io/contact-list-api/api/all.json`
       
       
).then(response => {
  return response.json();
}).then((data)=>{
    return contact list.push(...data);
})

.catch((error) => {
  console.log(error);
});

const contact list=[];
let id;


function SearchMatches(text,contact list){

    return heroes.filter(hero=>{
        const rexex = new RegExp(text,"gi");
        return hero.name.match(rexex);
    });
}

search.addEventListener("input",()=>{


   const matches = SearchMatches(search.value,contact list);
   
   const html = matches.map(contact list=>{
       return`<li class="matches" val="${contact list.id}"> ${contact list.name}</li>`;
       
   }).join("");
   if(search.value.length>0){
    matches_list.style.display="flex";
   matches_list.innerHTML=html;
   


   }else{
       matches_list.innerHTML="";
       matches_list.style.display="none";
       
   }
   
});
matches_list.addEventListener("click",(e)=>{
    console.log("clicked");
    const item = e.target;
    id=item.getAttribute("val");
    matches_list.style.display="none";
   
    const search_item=item.innerHTML;
    
    search.value=`${search_item}`;
    

})

search_btn.addEventListener("click",()=>{
    
    
    console.log(search.value)
    console.log(id,"id");


   
    window.open(`contact list.html?id=${id}`,"_blank");
})

fav_btn.addEventListener("click",()=>{
    window.open("favlist.html","_blank");
})