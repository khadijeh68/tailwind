//1

function changeColor(){
    let newColor = document.getElementsByTagName('tr');
    for(let i = 0; i < newColor.length; i++)
    {
        if(newColor[i].cells[0].textContent == "Primary")
        {
            newColor[i].style.backgroundColor = "#BFDBFE";
        }
        if(newColor[i].cells[0].textContent == "Secondary")
        {
            newColor[i].style.backgroundColor = "#EDE9FE";
        }
        if(newColor[i].cells[0].textContent == "Success")
        {
            newColor[i].style.backgroundColor = "#DCFCE7";
        }
        if(newColor[i].cells[0].textContent == "Danger")
        {
            newColor[i].style.backgroundColor = "#FEE2E2";
        }
        if(newColor[i].cells[0].textContent == "Warning")
        {
            newColor[i].style.backgroundColor = "#FEF08A";
        }
        if(newColor[i].cells[0].textContent == "Info")
        {
            newColor[i].style.backgroundColor = "#BFDBFE";
        }
        if(newColor[i].cells[0].textContent == "Light")
        {
            newColor[i].style.backgroundColor = "#F3F4F6";
        }
        if(newColor[i].cells[0].textContent == "Dark")
        {
            newColor[i].style.backgroundColor = "#000000";
            newColor[i].style.color = "#ffffff";
        }
    } 
}
changeColor();


//2
function addButton(){
    let putBtn = document.getElementsByTagName('table');
    let ff = putBtn[0].children[0];
    let btn = document.createElement('button'); 
    btn.innerHTML = 'Click Me';
    ff.prepend(btn)
    console.log(btn);    
}
addButton();

function removeRows(){
    let button = document.querySelector('button');
    button.addEventListener('click' , () => {
        let tb = document.querySelectorAll('tr');
        for(let i = 1 ; i<=5 ; i++){
            tb[i].remove();    
        }       
    })
}
removeRows();


//3
function addRows(){
    let btn2 = document.createElement('button'); 
    btn2.innerHTML = 'Click Me';
    document.body.appendChild(btn2);
    let table = document.querySelector('table');
    btn2.addEventListener('click' , () => {
        for(let i = 1 ; i <=3 ; i++){
            let row = table.insertRow(i);
            row.insertCell(0).innerHTML = "newRow";
            row.insertCell(1).innerHTML = "Cell";
            row.insertCell(2).innerHTML = "Cell";
            break;
        }
    }); 
}
addRows();
