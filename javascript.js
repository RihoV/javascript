console.log("töötab");

//let items = ["Ese1", "Ese2", "Ese3"];
let items = [{title: "Ese1"}, {title: "Ese2"}, {title: "Ese3"}];

document.getElementById("lisa").addEventListener('click', () => {
    //item.push("Ese" + items.length +1);  --pushib:   "Ese31"
    //item.push("Ese" + (items.length +1)); --pushib:  "Ese41"
    items.push({title: "Ese" + (items.length +1) }); // --pushib: {title: "Ese4"}
    let itemsShown = items.map(item => item.title);
    document.getElementById("massiiv").textContent = itemsShown;
    });

    document.getElementById("kustuta").addEventListener('click', () => {
        items.splice(0, 1); // -- kustutab indexi järgi, esimene väärtus tähendab millisest
                            //alates kustutab, teine väärtus näita mitu tükki kustutab
        let itemsShown = items.map(item => item.title);
        document.getElementById("massiiv").textContent = itemsShown;
        });

        //viimase indeks on = (items.length-1)
        document.getElementById("kustuta_viimane").addEventListener('click', () => {
            items.splice(items.length-1,1); //--
            let itemsShown = items.map(item => item.title);
            document.getElementById("massiiv").textContent = itemsShown;
            });

            //muuda esimene
            document.getElementById("muuda").addEventListener('click', () => {
                if (items.length > 0) {
                    items[0] ={title: "Esimene muudetud ese"};
                    //items[0] =items[items.length -1]; // -- {title: "Ese1"} = {title: "Ese3"}
                    //[{title: "Ese1"}, {title: "Ese2"}, {title: "Ese3"}];
                    let itemsShown = items.map(item => item.title);
                    //let itemShown = ["Ese1", "Ese2", "Ese3"];
                    document.getElementById("massiiv").textContent = itemsShown;
                }
                });

            //viimane ese: tee HTMLi nupp
            // items[items.length-1] = "Viimane ese"
            document.getElementById("muuda2").addEventListener('click', () => {
                items[items.length-1] = {title: "Viimane muudetud ese"};
                //[{title: "Ese1"}, {title: "Ese2"}, "Viimane muudetud ese"];
                let itemsShown = items.map(item => item.title);
                ////let itemShown = ["Ese1", "Ese2", ]; //viimane ese = tühjus
                document.getElementById("massiiv").textContent = itemsShown;
                });

                //kustuta massiiv
                document.getElementById("tyhjenda").addEventListener('click', () => {
                    //let items = [{title: "Ese1"}, {title: "Ese2"}, {title: "Ese3"}];
                    items=[]; //tühi massiiv
                    let itemsShown = items.map(item => item.title);
                    document.getElementById("massiiv").textContent = itemsShown;
                    });
  

document.getElementsByClassName("header")[0].textContent = "Pealkiri";
//let itemsShown = items.map(item => item.title); //ees kas let või klassi sees .



//[{title: "Ese1"}, {title: "Ese2"}, {title: "Ese3"}];
//.map() ---> ["Ese1", "Ese2", "Ese3"]
// itemShown muutuja saab endale väärtuseks ["Ese1", "Ese2", "Ese3"]

//document.getElementById("massiiv").textContent = itemsShown; on ["Ese1", "Ese2", "Ese3"]
//itemShown on                               ["Ese1", "Ese2", "Ese3"]
//items.map(item => item.title); on          ["Ese1", "Ese2", "Ese3"]
//items on                                   [{title: "Ese1"}, {title: "Ese2"}, {title: "Ese3"}];

//document.getElementById("massiiv").textContent

//kui liidetakse string ja number on tüübiks string
//kui liidetakse "raud" + "tee" = raudtee
//kui liidetakse "32" + 77 = "3277"

//liideti "ese" + 3 = "ese3"
//liidet "ese3" + 1 = "ese31"