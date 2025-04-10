function updateTitle(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let body = document.body;
    let palang = document.querySelectorAll("p")

    if(width>500){
        body.style.backgroundColor = 'green';
        palang.forEach(p => p.style.color = 'pink');
    }else{
        body.style.backgroundColor = 'pink';
        palang.forEach(p => p.style.color = 'green');

    }
    if(height<500){
        body.style.backgroundColor = 'green';
        palang.forEach(p => p.style.color = 'pink');
    }else{
        body.style.backgroundColor = 'pink';
        palang.forEach(p => p.style.color = 'green');
    }
    
}
updateTitle();
    window.addEventListener('resize' , updateTitle);