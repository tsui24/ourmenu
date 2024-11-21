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
}]
listDish.forEach((item) => {
    console.log(item.name)
})