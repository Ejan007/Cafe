const menuData = [
  {
    section: "All Day Menu",
    items: [
      {
        title: "Toast (Sourdough/Grain)",
        description:
          "Toast served with your choice of butter, jam, vegemite, marmalade, peanut butter, or maple. *(GF Toast available at +$1.50)*",
        price: "$8.5",
      },
      {
        title: "Eggs Your Way",
        description:
          "Choice of egg (poached, fried, or scrambled) served on sourdough.",
        price: "$12.50",
      },
      {
        title: "Zaatar Lamb Eggs",
        description:
          "Poached egg on toasted sourdough with labne, lamb kofta, grated cucumber, mint, pomegranate, and zaatar.",
        price: "$22",
      },
      {
        title: "Smash Avo",
        description:
          "Smashed avocado on sourdough with corn and tomato salsa, topped with poached eggs, house‑made dukkah, served with ricotta and beetroot hummus.",
        price: "$20.50",
      },
      {
        title: "French Toast",
        description:
          "Brioche French toast served with berry and apple compote, peanuts, vanilla whipped mascarpone, salted caramel, ice cream, and shaved chocolate.",
        price: "$22",
      },
      {
        title: "Black Rice Pudding",
        description:
          "Black rice pudding made with coconut water, coconut cream, and palm sugar, served with caramelized banana, peanuts, and chocolate syrup.",
        price: "$19",
      },
      {
        title: "Porridge/Bircher",
        description:
          "Oats with maple syrup, chia seeds, teff, and green apples with cinnamon, topped with berry compote, vanilla yoghurt, and seasonal fruits.",
        price: "$19",
      },
      {
        title: "Fruit Salad & Granola Bowl",
        description:
          "House‑made granola served with seasonal fruits and vanilla yoghurt, topped with mixed seeds.",
        price: "$16",
      },
      {
        title: "Zucchini, Corn & Halloumi Fritters",
        description:
          "Zucchini and halloumi fritters with labne, garden greens, and tomato relish, topped with a poached egg.",
        price: "$22.50",
      },
      {
        title: "Pancake with Ice-Cream",
        description:
          "Fluffy double pancakes served with maple syrup, berry compote, and ice cream.",
        price: "$21",
      },
      {
        title: "Green Breakfast",
        description:
          "Herb‑scrambled free‑range egg with spinach, tomato salsa, and Pecorino, served with your choice of double smoked ham or halloumi on toasted sourdough.",
        price: "$20.90",
      },
      {
        title: "Veggie Big Breakfast",
        description:
          "Toasted sourdough topped with eggs of your choice, halloumi, baked beans, mushrooms, hashbrown, spinach, tomato, and avocado.",
        price: "$24.90",
      },
      {
        title: "Himalayan Big Breakfast",
        description:
          "Eggs your way on toasted sourdough with sausage, avocado, hash brown, mushrooms, grilled tomatoes, and bacon. *(Add baked beans for +$2)*",
        price: "$26",
      },
      {
        title: "Classic Egg Benedict",
        description:
          "Poached eggs on toasted sourdough with your choice of avocado, mushroom, ham, bacon, or salmon, topped with baby spinach and hollandaise sauce.",
        price: "$20.50",
      },
      {
        title: "Bacon and Egg Roll",
        description:
          "Fried egg, bacon, and cheese on a milk bun with barbecue and aioli sauce.",
        price: "$11.90",
      },
      {
        title: "Chicken-Wrap",
        description:
          "Lemon pepper chicken, lettuce, and sliced cheese with barbecue and aioli sauce wrapped in a tortilla.",
        price: "$13",
      },
      {
        title: "Brekky Burger",
        description:
          "Bacon, egg, hashbrown, avocado, and cheese with BBQ and tomato relish on a milk bun.",
        price: "$15.50",
      },
      {
        title: "Veggie Breakfast Roll",
        description:
          "Grilled halloumi, fried egg, avocado hummus, and garden greens with homemade aioli served on a milk bun.",
        price: "$13.90",
      },
    ],
  },
  {
    section: "Lunch",
    items: [
      {
        title: "Himalayan Bowl",
        description:
          "Brown rice, quinoa, roasted pumpkin, spinach, seeds, and dried cranberries with citrus dressing.",
        price: "$19",
      },
      {
        title: "Poke Bowl",
        description:
          "Assorted pickled and fresh vegetables on organic black rice with fried shallots and choice of Salmon / Roasted Chicken / Mushroom with aioli and tosazu.",
        price: "$24|$23|$22",
      },
      {
        title: "Falafel Plate",
        description:
          "Fried falafel with pumpkin hummus and toasted tortilla, served with a side of green salad and labne.",
        price: "$20.50",
      },
      {
        title: "Cheesy Beef Burger",
        description:
          "Beef patty, cheese, tomato and onion relish, lettuce, and house burger sauce on a toasted milk bun, served with chips.",
        price: "$20",
      },
      {
        title: "Katsu Chicken Burger",
        description:
          "Crumbed chicken on a milk bun with Japanese pickles, shallots, lettuce, and homemade bba and aioli sauce, served with chips.",
        price: "$20",
      },
      {
        title: "Himalayan Vegie Burger",
        description:
          "Chickpea and lentil patties with lettuce, tomato, capsicum dip, and pear relish on toasted milk bun, served with chips.",
        price: "$20",
      },
      {
        title: "Pan Fried Salmon",
        description:
          "Salmon with beetroot hummus and garden salad, topped with house‑made salsa.",
        price: "$25",
      },
      {
        title: "Fish and Chips",
        description:
          "Crispy beer‑battered flathead fillets served with fresh garden salad or chips with aioli sauce.",
        price: "$21",
      },
      {
        title: "Chicken Pasta",
        description:
          "Chicken, mushroom, spinach, and parmesan cheese served with penne pasta.",
        price: "$23",
      },
      {
        title: "Chicken Schnitzel",
        description:
          "Crumbed chicken breast served with creamy mushroom sauce and a side of chips or salad.",
        price: "$24",
      },
    ],
  },
  {
    section: "Sandwiches",
    items: [
      {
        title: "Pesto Chicken Sandwich",
        description:
          "Pesto chicken with a slice of cheese, lettuce, caramelised onion, and aioli on sourdough.",
        price: "$15",
      },
      {
        title: "Reuben Toasties",
        description:
          "Corned beef silverside with Swiss cheese, sauerkraut, house‑made pickles, and Russian mayo on sourdough.",
        price: "$15",
      },
      {
        title: "Vegan Toasties",
        description:
          "Zaatar roasted vegetables, chargrilled capsicum, greens, and capsicum hummus on vegan sourdough.",
        price: "$12.50",
      },
      {
        title: "Smoked Salmon Sandwich",
        description:
          "Smoked salmon, lettuce, and cheddar cheese with herb mayo.",
        price: "$16.50",
      },
      {
        title: "Avo on Toast",
        description:
          "Smashed avocado with baked mushroom and sundried tomato.",
        price: "$12.50",
      },
      {
        title: "BLAT with Aioli",
        description:
          "Bacon, lettuce, avocado, and tomato with aioli.",
        price: "$15",
      },
      {
        title: "BLT with Aioli",
        description:
          "Bacon, lettuce, and tomato with aioli.",
        price: "$14",
      },
      {
        title: "Schnitzel Sandwich",
        description:
          "Chicken schnitzel, lettuce, tomato, and cheddar cheese with saffron aioli sauce on sourdough.",
        price: "$13.50",
      },
    ],
  },
  {
    section: "Add-ons",
    items: [
      {
        title: "Choice of Egg",
        description: "Add a choice of egg.",
        price: "$2.50",
      },
      {
        title: "Smoked Salmon / Grilled Halloumi / 2 Chicken Sausage",
        description:
          "Choose one option: smoked salmon, grilled halloumi, or 2 chicken sausages.",
        price: "$6",
      },
      {
        title: "Mushroom / Bacon / Ham / 2 Pieces of Hashbrown",
        description:
          "Add mushroom, bacon, or ham with 2 pieces of hashbrown.",
        price: "$4.5",
      },
      {
        title: "Avocado, Grilled Tomato",
        description: "Add avocado and grilled tomato.",
        price: "$3.5",
      },
      {
        title: "Ricotta, Asparagus",
        description: "Add ricotta and asparagus.",
        price: "$3.5",
      },
    ],
  },
  {
    section: "Kids Menu",
    items: [
      {
        title: "Kids Ham and Cheese Toastie",
        description: "Smoked ham and cheese on toasted soft milk bun.",
        price: "$7.5",
      },
      {
        title: "Kids Scrambled Egg",
        description: "Scrambled egg with toasted soft milk bun.",
        price: "$12",
      },
      {
        title: "Kids Pancake",
        description: "Single pancake with maple syrup, ice cream, and berry compote.",
        price: "$12",
      },
      {
        title: "Kids Chicken Burger (with chips)",
        description: "Chicken burger served with chips on the side.",
        price: "$14",
      },
      {
        title: "Kids Lunch Box",
        description: "Ham and cheese toastie on a milk bun, brownie, and a side of fruits.",
        price: "$14",
      },
      {
        title: "Kids Breakfast Bowl",
        description: "Porridge with fruits and yogurt.",
        price: "$14",
      },
      {
        title: "Kids Fish and Chips",
        description: "Fish and chips.",
        price: "$11",
      },
      {
        title: "Chicken Nuggets (with chips)",
        description: "Chicken nuggets served with chips on the side.",
        price: "$14",
      },
    ],
  },
  {
    section: "Hot Drinks",
    items: [
      {
        title: "Coffee (Small / Regular)",
        description:
          "Standard brewed coffee. *(Available in variants: Cappuccino, Espresso, Long Black, Macchiato, Piccolo, Flat White, Latte, Mocha, Dirty Chai Latte, Green Tea Latte)*",
        price: "$4.5",
      },
      {
        title: "Honey Chai",
        description: "Honey chai.",
        price: "$6",
      },
      {
        title: "Teas",
        description: "Options: English Breakfast, Earl Grey, Green Tea, Peppermint, Chamomile.",
        price: "$5",
      },
    ],
  },
  {
    section: "Cold Drinks",
    items: [
      {
        title: "Iced Latte",
        description: "Iced Latte.",
        price: "$6.5",
      },
      {
        title: "Iced Long Black",
        description: "Iced Long Black.",
        price: "$6.5",
      },
      {
        title: "Iced Coffee / Chocolate / Chai / Mocha",
        description:
          "Choose from Iced Coffee, Iced Chocolate, Iced Chai, or Iced Mocha. *(Add whipped cream for +$0.5)*",
        price: "$7.5",
      },
      {
        title: "Green Tea Milkshake",
        description: "Green Tea Milkshake.",
        price: "$8.5",
      },
      {
        title: "Soft Drinks",
        description: "Soft drinks.",
        price: "$3.7",
      },
      {
        title: "Cloudy Apple / Orange Juice",
        description: "Cloudy apple juice or orange juice.",
        price: "$5.5",
      },
      {
        title: "Smoothies",
        description:
          "Mango, Banana, Mixed Berry smoothie with choice of fruits, coconut yogurt, oat milk, and agave.",
        price: "$9",
      },
      {
        title: "Milkshakes (Small / Regular)",
        description:
          "Choose from Chocolate, Caramel, Strawberry, or Vanilla. *(Make it thick +$2, alternative milk +$0.7)*",
        price: "Small: $6 / Regular: $8",
      },
    ],
  },
  {
    section: "Extras",
    items: [
      {
        title: "Extra Shot",
        description: "Add an extra shot of espresso.",
        price: "+$0.7",
      },
      {
        title: "Decaf Option",
        description: "Switch to decaf.",
        price: "+$0.7",
      },
      {
        title: "Alternative Milk",
        description: "Options: Almond, Soy, Oat, or lactose-free.",
        price: "+$0.7",
      },
      {
        title: "Syrup Addition",
        description: "Options: Hazelnut, Vanilla, or Caramel.",
        price: "+$0.7",
      },
    ],
  },
];

export default menuData;
