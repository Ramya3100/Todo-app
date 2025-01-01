let btn=document.querySelector('button');


let ul=document.querySelector('ul');
btn.addEventListener('click',function(){
    let lis=document.querySelectorAll('li');
    let inp=document.querySelector('input');
    let li=document.createElement('li');
    let todo=inp.value;
    li.innerText=todo;
    let check=true;
    for(l of lis){
        let s=l.innerText.slice(0,l.innerText.length-6);  
        if(s.toLowerCase()==todo.toLowerCase()){
           check=false;
           break;
        }
    }
    if(todo==''){
        check=false;
    }
    let delbtn=document.createElement('button');
    delbtn.innerText='delete';
    delbtn.classList.add('delete');
    if(check==true){
        ul.append(li);
        li.appendChild(delbtn);
    }
    inp.value='';
});


ul.addEventListener('click',function(event){
    console.log(event.target.nodeName);
    if(event.target.nodeName=='BUTTON'){
        let par=event.target.parentElement
        par.remove();
        console.log('deleted');
    }
})

