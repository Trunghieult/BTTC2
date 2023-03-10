const menu = [
  {
    id: 1,
    title: "Deep-fried Calamari",
    category: "appertizers",
    price: 10.99,
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0d/99/8d/82/fried-calamari-and-fresh.jpg",
    desc: `Squid, parsley, egg, panko bred crumbs, Aioli sauce. `,
  },
  {
    id: 2,
    title: "Ricotta Cheese balls",
    category: "appertizers",
    price: 8.99,
    img: "https://www.carveyourcraving.com/wp-content/uploads/2018/02/ricotta-cheese-balls-starter.jpg",
    desc: `Prawn, bread crumbs, flour, egg, onion, parsley,
    mozzarella, cheese, passion fruit sauce.
     `,
  },
  {
    id: 3,
    title: "Steak Tartare",
    category: "appertizers",
    price: 14.99,
    img: "https://afamilycdn.com/2016/photo-2-1482469091729.jpg",
    desc: `Australian beef, mustard, red onion, cornichons, quail egg yolk, lemon, pepper, arugula leaf, garlic bread sticks.`,
  },
  {
    id: 4,
    title: "Pan Seard Foie Gras",
    category: "appertizers",
    price: 17.99,
    img: "https://image.vietnamnews.vn/uploadvnnews/Article/2020/1/4/60500_anh%20flavour%20for%205-1-19.jpg",
    desc: `Goose livers, stewed apples, mushroom, tomatoes, orange jam, balsamic
    reduction, crispy bread.`,
  },
  {
    id: 5,
    title: "Cold Cuts Platter",
    category: "appertizers",
    price: 17.49,
    img: "https://cdn.shopify.com/s/files/1/0269/2402/3895/products/Germanpremiumcoldcutswithcheeseandpretzel_6_1400x.jpg?v=1593237209",
    desc: `Salami, chorizo, Parma ham, olives, cornichons, arugula leaf, bread sticks, mustard sauce`,
  },
  {
    id: 6,
    title: "Cheese Platter",
    category: "appertizers",
    price: 17.49,
    img: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/09/30135019/shutterstock_1935232463.jpeg",
    desc: `Assorted goat cheese, emmental cheese, brie cheese, mozzarella, dried
    fruits, biscuits, bread sticks`,
  },
  {
    id: 7,
    title: "Avocado Smoked Salmon Salad",
    category: "Salad & Soups",
    price: 7.49,
    img: "https://thedevilwearssalad.com/wp-content/uploads/2021/03/Smoked-Salmon-Avocado-Salad-1.jpg",
    desc: `Avocado, smoked salmon, black olives ,cherry tomatoes,
    sour cream, dill, mixed lettuce.  `,
  },
  {
    id: 8,
    title: "Pumpkin Soup",
    category: "Salad & Soups",
    price: 6.49,
    img: "https://insanelygoodrecipes.com/wp-content/uploads/2019/10/Pumpkin-Soup-1024x683.jpg",
    desc: `Pumpkin, prawn, garlic, onion, fresh cream, focaccia bread.`,
  },
  {
    id: 9,
    title: "creamy mushroom soup",
    category: "Salad & Soups",
    price: 6.99,
    img: "https://pinchofyum.com/wp-content/uploads/Mushroom-Soup-2.jpg",
    desc: `Mushroom, garlic, foie gras, fresh cream, focaccia bread..`,
  },
  {
    id: 10,
    title: "Caesar Salad with grilled chicken",
    category: "Salad & Soups",
    price: 7.49,
    img: "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2008/01/chicken-caesar-salad-1-scaled.jpg?fit=1200%2C800&ssl=1",
    desc: `Anchovies, parmesan cheese, romaine lettuce, bacon, chicken, Caesar salad
    dressing.`,
  },
  {
    id: 11,
    title: "barbecue pork ribs",
    category: "Main",
    price: 14.99,
    img: "https://s3.burpple.com/foods/1dc5e04db93fadb9de1068579_original.?1406001588",
    desc: `Pork ribs, five-spice powder, garlic, chili peppers,
    BBQ sauce, french fries, mixed lettuce salad.`,
  },
  {
    id: 12,
    title: "American Top Blade Steak",
    category: "Main",
    price: 20.99,
    img: "https://images.otstatic.com/prod/25889370/1/huge.jpg",
    desc: `Top blade, thyme, baked potato, asparagus, mushroom, baby carrot, Dalat
    vegetable, pumpkin puree`,
  },
  {
    id: 13,
    title: "grilled T-bone Steak (400g)",
    category: "Main",
    price: 49.99,
    img: "http://embed.widencdn.net/img/beef/5cdgkijbuf/exact/rocky-mountain-grilled-t-bone-steaks-with-charro-style-beans-horizontal.tif?keep=c&u=7fueml",
    desc: `T-bone beef, mustard, garlic, rosemary, baby carrot, asparagus, pumpkin
    puree, vegetables, baked potato.
    `,
  },
  {
    id: 14,
    title: "Grilled Racks of Lamb",
    category: "Main",
    price: 19.49,
    img: "https://www.garlicandzest.com/wp-content/uploads/2018/08/grilled-rack-of-lamb-24.jpg",
    desc: `Australian lamb, mustard, garlic, butter, thyme, mashed sweet potato,
    pumpkin puree, asparagus, Dalat vegetable, pistachio crust.`,
  },
  {
    id: 15,
    title: "Grilled salmon with passion fruit sauce",
    category: "Main",
    price: 17.49,
    img: "https://thumbs.dreamstime.com/b/salmon-fillet-beet-herbs-passion-fruit-sauce-close-up-seafood-beetroot-slices-greenery-white-plate-delicatessen-served-181133607.jpg",
    desc: `Salmon fillet, thyme, butter, cherry tomatoes, onion,
    wine olive oil, asparagus, dill spaghetti, passion fruit sauce`,
  },
  {
    id: 16,
    title: "Spaghetti w/ your choice",
    category: "Main",
    price: 14.49,
    img: "https://cdn.daynauan.info.vn/wp-content/uploads/2015/12/Spaghetti-thit-vien.jpg",
    desc: `Spaghetti, beef mince or thyme and Parmesan cheese.`,
  },
  {
    id: 17,
    title: "Grilled Seabass with Lemon Garlic Butter Sauce",
    category: "Main",
    price: 17.49,
    img: "https://www.fabfood4all.co.uk/wp-content/uploads/2016/03/Grilled-Seabass-with-Lemon-Garlic-Butter-Sauce-Colcannon-30-lr.jpg",
    desc: `Seabass, butter, thyme, baby carrot, Dalat vegetable, lemon butter sauce.`,
  },
];
export default menu;
