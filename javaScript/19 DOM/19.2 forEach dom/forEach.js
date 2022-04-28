const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];


    const olPa= document.createElement("ol");
    olPa.style.listStyleType="none";
    document.body.appendChild(olPa);
    
    const olPa=document.querySelector("ol");

    users.forEach(e=> {
    
    const li= document.createElement("li");
    // const newLi=document.querySelector("li");
    li.innerHTML= <li data-id = "${e.id}"> ${e.firstName} ${e.lastName}</li>;
    olPa.appendChild (li);
   
    });

     // newLi.setAttribute(data-id,e.id); isnt working. why?
    

  
    





