fetch('https://upadhayay.github.io/db.json')
.then(response => response.json())
.then(data =>{
    console.log(data);
    let section = document.getElementById("papers");
    data.books.forEach(book =>{
        if(book.published === true)
        {
            let div = document.createElement("div");
            div.setAttribute('class',"paper");
            let h4 = document.createElement("h4");
            h4.setAttribute('id',"heading");
            h4.textContent = book.title;
            let a = document.createElement("a");
            a.setAttribute('id',"link");
            a.setAttribute('href', "#");
            a.textContent = book.title;
            let img = document.createElement("img");
            img.setAttribute("src","images/papericon.png");
            img.setAttribute("width",50);
            img.setAttribute("height",50);
            div.appendChild(img);
            div.appendChild(h4);
            div.appendChild(a);
            section.appendChild(div);
        }
    })
});

let menu = document.querySelector(".nav-links");
let toggleButton = document.querySelector(".toggle-button");

toggleButton.addEventListener('click',()=>{
    if(menu.style.display === ""){
        menu.style.display = "block";
    }
    else if(menu.style.display === "block"){
        menu.style.display = "";
    }
});
