let name1=document.querySelector(".name");

let newName="";

function change(job){
    for(let i=0; i<job.length; i++)
    {
        setTimeout(() => {
        newName=newName + job[i];
        name1.innerText=newName;   
        }, i * 120);

    }
}

change("Neeraj Singh");

