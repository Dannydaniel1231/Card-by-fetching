


const container=document.querySelector("body")

const profile= (src,name)=>{
    const card=`
    
    <div class="container" id="cont">
    <div class="piture">
        <img src=${src} width="150px" height="150px">

    </div>
    <div class="name">
        <h1>${name}<br><br></h1>
       <h4> <i>Our Equilibriam  collection<br>Promotes balance and calm</i></h4><br><br>
             <h3>1</h3>  
             <div class="line"><hr></div>
        
    </div>
    <div class="profile">
        <img src=${src} width="70px" height="70px">
        <h2>${name}</h2>
        
    </div>
</div>`

container.innerHTML+=card;
}

const res = fetch("https://api.github.com/users")

  .then(res=>res.json())
  .then(data=>{console.log(data)
 data.map(item=>{
    profile(item.avatar_url,item.login)
 })
})

