const listDish = [{
        img: "item-1.jpeg",
        name: "buttermilk pancakes",
        price: 15.99,
        infor: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        type: "Breakfast"
    }, {
        img: "item-2.jpeg",
        name: "diner double",
        price: 13.99,
        infor: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        type: "Dinner"
    },
    {
        img: "item-3.jpeg",
        name: "godzilla milkshake",
        price: 6.99,
        infor: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        type: "Shakes"
    },
    {
        img: "item-4.jpeg",
        name: "country delight",
        price: 20.99,
        infor: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        type: "Breakfast"
    },
    {
        img: "item-5.jpeg",
        name: "egg attack",
        price: 22.99,
        infor: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        type: "Lunch"
    },
    {
        img: "item-6.jpeg",
        name: "oreo dream",
        price: 18.99,
        infor: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        type: "Breakfast"
    },
    {
        img: "item-7.jpeg",
        name: "bacon overflow",
        price: 8.99,
        infor: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        type: "Breakfast"
    },
    {
        img: "item-8.jpeg",
        name: "american classic",
        price: 12.99,
        infor: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        type: "Lunch"
    },
    {
        img: "item-9.jpeg",
        name: "quarantine buddy",
        price: 16.99,
        infor: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        type: "Shakes"
    },
    {
        img: "item-10.jpeg",
        name: "bison steak",
        price: 22.99,
        infor: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        type: "Dinner"
    }
]

const itemContainer = document.querySelector(".list-item");
getAll();

function getAll() {
    let html = ``;
    listDish.forEach((item) => {
        html += `
            <div class="dish-item col-lg-6 col-md-12">
                <img src="asset/image/${item.img}" alt="" class="col-lg-4 col-md-3 p-0">
                <div class="dish-content col-lg-8 col-md-9">
                    <div class="dish-info">
                        <h4 class="dish-name">${item.name}</h4>
                        <p class="dish-price">${item.price}</p>
                    </div>${item.infor}</p>
                </div>
            </div>
    `;

    })
    itemContainer.innerHTML = html;
}

const listButton = document.querySelectorAll(".button");

function getCategory(typeName) {
    let html = ``;
    listDish.forEach((item) => {
        if (item.type === typeName) {
            html += `
            <div class="dish-item col-lg-6 col-md-12">
                <img src="asset/image/${item.img}" alt="" class="col-lg-4 col-md-3">
                <div class="dish-content col-lg-8 col-md-9">
                    <div class="dish-info">
                        <h4 class="dish-name">${item.name}</h4>
                        <p class="dish-price">${item.price}</p>
                    </div>${item.infor}</p>
                </div>
            </div>
    `;
        };
    });
    return html;
}
console.log(getCategory("Dinner"));
listButton.forEach((button) => {
    button.addEventListener("click", () => {

        let value = button.textContent;
        console.log(value);
        if (value === "All") {
            getAll();
        } else {
            let html1 = getCategory(value);
            itemContainer.innerHTML = html1;
            console.log(html1);
        }

    })
})