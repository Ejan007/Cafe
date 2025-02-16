const menuData = [
    {
      section: "All Day Menu",
      items: [
        {
          title: "Puma Burger {Bacon and Egg Roll)",
          description:
            "Fried egg, Bacon, Tasty Cheese on milk bun with barbeque and Aioli Sauce.",
          price: "$24",
        },
        {
          title: "Toast",
          description:
            "Sourdough, Grain, Fruit, GF with butter/jam/vegemite/marmalade/peanut butter/maple. Fruits,GF +$1.5",
          price: "$8.5",
        },
        {
          title: "Eggs your way",
          description:
            "Eggs on toast. Choice of your egg (Poached, fried or Scrambled) on sourdough",
          price: "$12.5",
        },
        {
          title: "Green Breakfast",
          description:
            "Eggs your way on toasted sourdough with garden greens, pesto, halloumi.",
          price: "$20",
        },
        {
          title: "Smash Avo",
          description:
            "Smashed avocado on sourdough topped with poached eggs, tomato salsa and house-made dukka served with ricotta.",
          price: "$19.5",
        },
        {
          title: "Fruit Salad and Granola Bowl",
          description:
            "House-made granola served with seasonal fruits, with vanilla yoghurt topped with mixed seeds.",
          price: "$16",
        },
        {
          title: "Porridge/Bircher",
          description:
            "Oats, maple syrup, chia seeds, green apples and cinnamons topping with apple berry compote, vanilla yoghurt and seasonal fruits.",
          price: "$19",
        },
        {
          title: "French Toast",
          description:
            "Banana, crushed peanuts, vanilla whipped mascarpone, salted caramel, ice cream and shaved chocolate in Brioche bread.",
          price: "$22",
        },
        {
          title: "Chicken Wrap",
          description:
            "Lemon peppers chicken, lettuce, sliced cheese with barbecue and aioli sauce.",
          price: "$12",
        },
        {
          title: "Classic Egg Benedict",
          description:
            "Poached Eggs on toasted sourdough bread with a choice of Avo/Bacon/Salmon topped with baby spinach and hollandaise sauce.",
          price: "$18|$19|$20",
        },
        {
          title: "Himalayan Big Breakfast",
          description:
            "Eggs your way on toasted sourdough with sausage, avocado, hash brown, mushroom, grilled tomatoes, halloumi, and bacon. Add baked beans +$2",
          price: "$26",
        },
        {
          title: "Pancake with ice-cream",
          description:
            "Fluffy pancakes served with maple syrup, berry and apple compote and ice-cream.",
          price: "$21",
        },
        {
          title: "Veggie Breakfast Roll",
          description:
            "Grilled haloumi, fried egg, avocado hummus, garden green with homemade aioli served on milk bun.",
          price: "$13",
        },
      ],
    },
    {
      section: "Lunch",
      items: [
        {
          title: "Chicken Schnitzel",
          description:
            "Crumbed chicken breast served with creamy mushroom sauce and a side of Chips or Salad.",
          price: "$24",
        },
        {
          title: "Creamy Mushroom and Chicken Pasta",
          description:
            "Chicken, mushroom, and parmesan cheese served with penne pasta. Add on: Choice of egg (1) $2.5; Smoked salmon, grilled halloumi $5; Bacon/mushroom/2 hashbrown or greens $4; Avocado, Grilled tomato, Ricotta, Asparagus $3.",
          price: "",
        },
        {
          title: "Himalayan Vege Burger",
          description:
            "Chickpeas patties and spiced lentil with chilli, lettuce, tomato on a toasted milk bun with capsicum dip and pear relish served with a side of chips.",
          price: "$19",
        },
        {
          title: "Pan fried Salmon",
          description:
            "Salmon, beetroot hummus, garden salad topping with house made salsa.",
          price: "$25",
        },
        {
          title: "Fish and chips",
          description:
            "Crispy beer battered flathead fillets served with fresh garden salad, chips with aioli sauce.",
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
            "Assorted pickled and fresh vegetables set on a bowl of organic black rice, with Salmon/Roasted chicken/Mushroom",
          price: "$24|$23|$22",
        },
        {
          title: "Hunted Hash",
          description:
            "Farm pork, fennel and chilli sausage with diced farm bacon, confit potatoes and a medley of vegetables, homemade chilli sauce topped with fried egg and puff rice.",
          price: "$24",
        },
        {
          title: "Cheesy Beef Burger",
          description:
            "Beef patty, cheese, tomato, onion, pickles with lettuce & house burger sauce on a toasted milk bun served with a side of chips.",
          price: "$19",
        },
        {
          title: "Crispy Chicken Burger",
          description:
            "Fried chicken thigh fillet on a milk bun with Japanese pickles, lettuce, and homemade sauce served with a side of chips.",
          price: "$19",
        },
        {
          title: "Black Rice Pudding",
          description:
            "Black Rice, coconut water, coconut cream, palm sugar serving with caramelized banana and peanuts with chocolate syrup.",
          price: "$19",
        },
      ],
    },
    {
      section: "Chippies",
      items: [
        {
          title: "Chips",
          description: "Served with Aioli",
          price: "$9.5",
        },
        {
          title: "Sweet Potatoes",
          description: "Served with Aioli",
          price: "$10.5",
        },
        {
          title: "Wedges",
          description: "Served with Aioli",
          price: "$11.5",
        },
      ],
    },
    {
      section: "Kids Menu",
      items: [
        {
          title: "Chicken Nuggets with Chips on side",
          description: "",
          price: "$11",
        },
        {
          title: "Kids Chicken Burger with chips on side",
          description: "",
          price: "$14",
        },
        {
          title: "Kids Lunch Box",
          description: "Ham and cheese toasties on milk bun, brownie, and side of fruits.",
          price: "$14",
        },
        {
          title: "Kids Pancake",
          description: "Choice of maple syrup and ice-cream/berry compote.",
          price: "$12",
        },
        {
          title: "Kids Fish and Chips",
          description: "",
          price: "$11",
        },
        {
          title: "Kids Breakfast Bowl",
          description: "Porridge, side of fruits and yogurt.",
          price: "$14",
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
          title: "Iced Coffee with Ice-cream",
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
          title: "Cloudy apple Juice / Orange Juice",
          description: "",
          price: "$5",
        },
        {
          title: "Milkshakes",
          description: "Vanilla, Strawberry, Caramel, Chocolate, Banana",
          price: "$7",
        },
        // Cold Drinks add-ons:
        {
          title: "Make it thick",
          description: "",
          price: "$1",
        },
        {
          title: "Alt milk",
          description: "",
          price: "+$0.5",
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
            "English Breakfast, Earl grey, Green tea, Peppermint, Chamomile, Honey chai",
          description: "",
          price: "$5",
        },
        {
          title:
            "Cappuccino / Flat White/ Latte/ Long black/ Mocha/ Hot Chocolate/ Chai latte",
          description: "",
          price: "$4.5|$5",
        },
        // Hot Drinks add-on:
        {
          title:
            "Soy, almond, oat milk, lactose free milk, extra shot, mocha, dirty chai, blueberry jam (coffee blend) flavour syrup, decaf",
          description: "",
          price: "$0.5",
        },
      ],
    },
    {
      section: "Toasties",
      items: [
        {
          title: "Pesto Chicken",
          description:
            "Pesto chicken with slice of cheese, lettuce, caramelised onion, and aioli on sourdough with side of chips.",
          price: "$17",
        },
        {
          title: "Reuben Toasties",
          description:
            "Corned beef silverside with swiss cheese, sauerkraut, house-made pickles and Russian mayo on sourdough with side of chips.",
          price: "$17",
        },
      ],
    },
  ];
  
  export default menuData;
  