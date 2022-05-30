// Add the coffee to local storage with key "coffee"
let c = document.getElementById("menu");

async function coffeedata(){
    
        let url = `https://masai-mock-api.herokuapp.com/coffee/menu`;
        let res = await fetch(url);
        let ans = await res.json();
        // joindata(ans.menu.data);
        console.log(ans.menu.data)
    
}
coffeedata();

let all = JSON.parse(localStorage.getItem("coffee")) || [];
function joindata(data){
     document.getElementById("menu").innerHTML = null;
     data.map(function(el){
        var div =  document.createElement("div");
        div.setAttribute("class","coffee");
        var image = document.createElement("img");
        image.src = el.image;

        var tittle = document.createElement("p")
        tittle.innerText = el.title;

        var price = document.createElement("p");
        price.innerText = el.price;

        var button = document.createElement("button");
        button.innerText = "Add To Bucket";
        button.setAttribute("id","add_to_bucket");


        div.append( image,tittle,price,button);
        document.getElementById("menu").append(div);

        button.addEventListener("clicl", function(){
            totat_bucket(el);
        })

     })
}
function totat_bucket(el){
    all.push(el);
    localStorage.setItem("coffee",JSON.stringify(all));

    SubmitEvent.innerHTML = "";
    SubmitEvent.innerText = JSON.parse(localStorage.getItem("coffee")).length;
}
