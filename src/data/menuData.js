const menuData = [
  {
    section: "All Day Menu",
    items: [
      // Original All Day Menu Items
      {
        title: "Puma Burger (Bacon and Egg Roll)",
        description:
          "Fried egg, bacon, tasty cheese on milk bun with barbeque and aioli sauce.",
        price: "$24",
      },
      {
        title: "Toast",
        description:
          "Sourdough, grain, fruit, GF options with butter, jam, vegemite, marmalade, peanut butter, or maple. Fruits, GF +$1.5",
        price: "$8.5",
      },
      {
        title: "Eggs your way",
        description:
          "Eggs on toast. Choice of egg (poached, fried, or scrambled) on sourdough.",
        price: "$12.5",
      },
      {
        title: "Green Breakfast",
        description:
          "Eggs your way on toasted sourdough with garden greens, pesto, and halloumi.",
        price: "$20",
      },
      {
        title: "Smash Avo",
        description:
          "Smashed avocado on sourdough topped with poached eggs, tomato salsa, and house-made dukka served with ricotta.",
        price: "$19.5",
      },
      {
        title: "Fruit Salad and Granola Bowl",
        description:
          "House-made granola served with seasonal fruits, vanilla yoghurt, and mixed seeds.",
        price: "$16",
      },
      {
        title: "Porridge/Bircher",
        description:
          "Oats with maple syrup, chia seeds, green apples, and cinnamon topped with apple berry compote, vanilla yoghurt, and seasonal fruits.",
        price: "$19",
      },
      {
        title: "French Toast",
        description:
          "Brioche French toast with banana, crushed peanuts, vanilla whipped mascarpone, salted caramel, ice cream, and shaved chocolate.",
        price: "$22",
      },
      {
        title: "Chicken Wrap",
        description:
          "Lemon pepper chicken, lettuce, and sliced cheese with barbecue and aioli sauce.",
        price: "$12",
      },
      {
        title: "Classic Egg Benedict",
        description:
          "Poached eggs on toasted sourdough with a choice of avo, bacon, or salmon, topped with baby spinach and hollandaise sauce.",
        price: "$18|$19|$20",
      },
      {
        title: "Himalayan Big Breakfast",
        description:
          "Eggs your way on toasted sourdough with sausage, avocado, hash browns, mushrooms, grilled tomatoes, halloumi, and bacon. Add baked beans +$2.",
        price: "$26",
      },
      {
        title: "Pancake with Ice-Cream",
        description:
          "Fluffy pancakes served with maple syrup, berry and apple compote, and ice-cream.",
        price: "$21",
      },
      {
        title: "Veggie Breakfast Roll",
        description:
          "Grilled halloumi, fried egg, avocado hummus, and garden greens with homemade aioli on a milk bun.",
        price: "$13",
      },
      // Merged Chippies Items
      {
        title: "Chips",
        description: "Served with aioli.",
        price: "$9.5",
      },
      {
        title: "Sweet Potatoes",
        description: "Served with aioli.",
        price: "$10.5",
      },
      {
        title: "Wedges",
        description: "Served with aioli.",
        price: "$11.5",
      },
    ],
  },
  {
    section: "Lunch",
    items: [
      {
        title: "Chicken Schnitzel",
        description:
          "Crumbed chicken breast served with creamy mushroom sauce and a side of chips or salad.",
        price: "$24",
      },
      {
        title: "Creamy Mushroom and Chicken Pasta",
        description:
          "Chicken, mushrooms, and parmesan served with penne pasta. Add-ons available.",
        price: "",
      },
      {
        title: "Himalayan Vege Burger",
        description:
          "Chickpea and spiced lentil patties with chilli, lettuce, and tomato on a toasted milk bun with capsicum dip and pear relish, served with chips.",
        price: "$19",
      },
      {
        title: "Pan Fried Salmon",
        description:
          "Salmon served with beetroot hummus, garden salad, and house-made salsa.",
        price: "$25",
      },
      {
        title: "Fish and Chips",
        description:
          "Crispy beer battered flathead fillets served with fresh garden salad, chips, and aioli sauce.",
        price: "$21",
      },
      {
        title: "Himalayan Bowl",
        description:
          "Brown rice, quinoa, roasted pumpkin, spinach, seeds, and dried cranberries with citrus dressing.",
        price: "$19",
      },
      {
        title: "Poke Bowl",
        description:
          "Assorted pickled and fresh vegetables on organic black rice with a choice of salmon, roasted chicken, or mushrooms.",
        price: "$24|$23|$22",
      },
      {
        title: "Hunted Hash",
        description:
          "Farm pork, fennel and chilli sausage with diced bacon, confit potatoes, vegetables, homemade chilli sauce, topped with a fried egg and puff rice.",
        price: "$24",
      },
      {
        title: "Cheesy Beef Burger",
        description:
          "Beef patty with cheese, tomato, onion, pickles, lettuce, and house burger sauce on a toasted milk bun, served with chips.",
        price: "$19",
      },
      {
        title: "Crispy Chicken Burger",
        description:
          "Fried chicken thigh fillet on a milk bun with Japanese pickles, lettuce, and homemade sauce, served with chips.",
        price: "$19",
      },
      {
        title: "Black Rice Pudding",
        description:
          "Black rice with coconut water, coconut cream, palm sugar, caramelized banana, peanuts, and chocolate syrup.",
        price: "$19",
      },
    ],
  },
  {
    section: "Sandwiches",
    items: [
      {
        title: "Pesto Chicken Sandwich",
        description:
          "Pesto chicken with a slice of cheese, lettuce, caramelised onion, and aioli on sourdough with a side of chips.",
        price: "$17",
      },
      {
        title: "Reuben Sandwich",
        description:
          "Corned beef silverside with Swiss cheese, sauerkraut, house-made pickles, and Russian mayo on sourdough with a side of chips.",
        price: "$17",
      },
      {
        title: "Turkey Club Sandwich",
        description:
          "Turkey, bacon, lettuce, tomato, and mayo on toasted bread served with fries.",
        price: "$18",
      },
      {
        title: "Ham & Cheese Sandwich",
        description:
          "Ham, cheese, lettuce, and mustard on multigrain bread served with a pickle.",
        price: "$16",
      },
      {
        title: "Veggie Sandwich",
        description:
          "Grilled seasonal vegetables with hummus and arugula on ciabatta bread.",
        price: "$15",
      },
      {
        title: "Grilled Cheese Sandwich",
        description:
          "Melted cheddar on sourdough, optionally served with tomato soup for dipping.",
        price: "$12",
      },
      {
        title: "Chicken Salad Sandwich",
        description:
          "Shredded chicken with mixed greens, grapes, and light mayo on whole grain bread.",
        price: "$17",
      },
    ],
  },
  
  {
    section: "Kids Menu",
    items: [
      {
        title: "Chicken Nuggets",
        description: "Served with chips and tomato sauce.",
        price: "$11",
      },
      {
        title: "Kids Chicken Burger",
        description: "Served with chips.",
        price: "$14",
      },
      {
        title: "Kids Lunch Box",
        description:
          "Ham and cheese toasties on milk bun, brownie, and a side of fruits.",
        price: "$14",
      },
      {
        title: "Kids Pancake",
        description:
          "Choice of maple syrup and ice-cream or berry compote.",
        price: "$12",
      },
      {
        title: "Kids Fish and Chips",
        description: "Served with chips and tomato sauce.",
        price: "$11",
      },
      {
        title: "Kids Breakfast Bowl",
        description: "Porridge with a side of fruits and yogurt.",
        price: "$14",
      },
    ],
  },
  {
    section: "Hot Drinks",
    items: [
      {
        title: "Short Macchiato/ Espresso",
        description: "",
        price: "$4.5",
      },
      {
        title:
          "English Breakfast, Earl Grey, Green Tea, Peppermint, Chamomile, Honey Chai",
        description: "",
        price: "$5",
      },
      {
        title: "Cappuccino / Flat White/ Latte/ Long Black/ Mocha/ Hot Chocolate/ Chai Latte",
        description: "Add-ons: Soy, Almond, Oat Milk, Lactose Free Milk, Extra Shot, Mocha, Dirty Chai, Blueberry Jam (Coffee Blend) Flavour Syrup, Decaf - $0.5",
        price: "$4.5|$5",
      },
    ],
  },
  {
    section: "Cold Drinks",
    items: [
      {
        title: "Ice Chai Latte / Iced Chocolate",
        description: "",
        price: "$7.5",
      },
      {
        title: "Iced Coffee with Ice-Cream",
        description: "",
        price: "$7.5",
      },
      {
        title: "Green Tea Milkshake",
        description: "",
        price: "$8",
      },
      {
        title: "Ice Long Black",
        description: "",
        price: "$6",
      },
      {
        title: "Iced Latte",
        description: "",
        price: "$6",
      },
      {
        title: "Smoothies",
        description: "Mango, Banana, Berry",
        price: "$8",
      },
      {
        title: "Cloudy Apple Juice / Orange Juice",
        description: "",
        price: "$5",
      },
      {
        title: "Milkshakes",
        description: "Vanilla, Strawberry, Caramel, Chocolate, Banana",
        price: "$7",
      },
      {
        title: "Make it Thick",
        description: "",
        price: "$1",
      },
      {
        title: "Alt Milk",
        description: "",
        price: "+$0.5",
      },
    ],
  },
];

export default menuData;
