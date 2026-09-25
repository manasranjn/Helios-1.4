const foodItems = [
    {
        "id": 1,
        "name": "Margherita Pizza",
        "category": "Pizza",
        "description": "Classic pizza topped with tomato sauce, mozzarella cheese and fresh basil.",
        "price": 299,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
        "isVeg": true
    },
    {
        "id": 2,
        "name": "Chicken Biryani",
        "category": "Biryani",
        "description": "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
        "price": 249,
        "rating": 4.8,
        "image": "https://cdn.pixabay.com/photo/2024/01/18/17/20/ai-generated-8517258_1280.jpg",
        "isVeg": false
    },
    {
        "id": 3,
        "name": "Veg Burger",
        "category": "Burger",
        "description": "Crispy vegetable patty served with lettuce, tomato and special sauce.",
        "price": 149,
        "rating": 4.2,
        "image": "https://images.unsplash.com/photo-1520072959219-c595dc870360",
        "isVeg": true
    },
    {
        "id": 4,
        "name": "Chicken Burger",
        "category": "Burger",
        "description": "Juicy chicken patty with lettuce, cheese, tomato and creamy sauce.",
        "price": 199,
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        "isVeg": false
    },
    {
        "id": 5,
        "name": "Masala Dosa",
        "category": "South Indian",
        "description": "Crispy dosa filled with spiced potato masala and served with chutney.",
        "price": 120,
        "rating": 4.7,
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
        "isVeg": true
    },
    {
        "id": 6,
        "name": "Paneer Butter Masala",
        "category": "Indian",
        "description": "Soft paneer cubes cooked in a rich buttery tomato gravy.",
        "price": 220,
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
        "isVeg": true
    },
    {
        "id": 7,
        "name": "Butter Chicken",
        "category": "Indian",
        "description": "Tender chicken pieces cooked in a creamy tomato and butter gravy.",
        "price": 280,
        "rating": 4.8,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
        "isVeg": false
    },
    {
        "id": 8,
        "name": "Veg Fried Rice",
        "category": "Chinese",
        "description": "Fried rice tossed with fresh vegetables, soy sauce and aromatic spices.",
        "price": 160,
        "rating": 4.3,
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b",
        "isVeg": true
    },
    {
        "id": 9,
        "name": "Chicken Fried Rice",
        "category": "Chinese",
        "description": "Flavorful fried rice with chicken, vegetables, egg and soy sauce.",
        "price": 190,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19",
        "isVeg": false
    },
    {
        "id": 10,
        "name": "Hakka Noodles",
        "category": "Chinese",
        "description": "Stir-fried noodles tossed with vegetables and Chinese sauces.",
        "price": 170,
        "rating": 4.4,
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de",
        "isVeg": true
    },
    {
        "id": 11,
        "name": "Chicken Momos",
        "category": "Momos",
        "description": "Steamed dumplings filled with seasoned minced chicken and vegetables.",
        "price": 140,
        "rating": 4.7,
        "image": "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9",
        "isVeg": false
    },
    {
        "id": 12,
        "name": "Veg Momos",
        "category": "Momos",
        "description": "Steamed dumplings filled with finely chopped vegetables and spices.",
        "price": 120,
        "rating": 4.4,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb",
        "isVeg": true
    },
    {
        "id": 13,
        "name": "French Fries",
        "category": "Snacks",
        "description": "Crispy golden potato fries lightly seasoned with salt.",
        "price": 99,
        "rating": 4.3,
        "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
        "isVeg": true
    },
    {
        "id": 14,
        "name": "Chicken Wings",
        "category": "Snacks",
        "description": "Crispy chicken wings tossed in a spicy and tangy sauce.",
        "price": 220,
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
        "isVeg": false
    },
    {
        "id": 15,
        "name": "Pav Bhaji",
        "category": "Indian",
        "description": "Spiced mashed vegetables served with butter-toasted pav bread.",
        "price": 130,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        "isVeg": true
    },
    {
        "id": 16,
        "name": "Chole Bhature",
        "category": "North Indian",
        "description": "Spicy chickpea curry served with fluffy deep-fried bhatura.",
        "price": 150,
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027",
        "isVeg": true
    },
    {
        "id": 17,
        "name": "Chicken Tikka",
        "category": "Tandoori",
        "description": "Marinated chicken pieces grilled with aromatic Indian spices.",
        "price": 260,
        "rating": 4.7,
        "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
        "isVeg": false
    },
    {
        "id": 18,
        "name": "Tandoori Paneer",
        "category": "Tandoori",
        "description": "Grilled paneer cubes marinated in yogurt and Indian spices.",
        "price": 230,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8",
        "isVeg": true
    },
    {
        "id": 19,
        "name": "Pasta Alfredo",
        "category": "Pasta",
        "description": "Creamy pasta cooked with parmesan cheese and Italian herbs.",
        "price": 220,
        "rating": 4.4,
        "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a",
        "isVeg": true
    },
    {
        "id": 20,
        "name": "Chicken Pasta",
        "category": "Pasta",
        "description": "Pasta tossed with grilled chicken, vegetables and creamy sauce.",
        "price": 250,
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
        "isVeg": false
    },
    {
        "id": 21,
        "name": "Veg Sandwich",
        "category": "Sandwich",
        "description": "Fresh sandwich filled with vegetables, cheese and creamy dressing.",
        "price": 110,
        "rating": 4.2,
        "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
        "isVeg": true
    },
    {
        "id": 22,
        "name": "Grilled Chicken Sandwich",
        "category": "Sandwich",
        "description": "Grilled chicken breast with lettuce, tomato and cheese.",
        "price": 180,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1553909489-cd47e0907980",
        "isVeg": false
    },
    {
        "id": 23,
        "name": "Chocolate Cake",
        "category": "Dessert",
        "description": "Rich and moist chocolate cake topped with chocolate frosting.",
        "price": 140,
        "rating": 4.8,
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        "isVeg": true
    },
    {
        "id": 24,
        "name": "Gulab Jamun",
        "category": "Dessert",
        "description": "Soft milk-solid dumplings soaked in warm sugar syrup.",
        "price": 90,
        "rating": 4.7,
        "image": "https://cdn.pixabay.com/photo/2026/02/21/04/21/kumarsu6745-attractive-10135864_1280.jpg",
        "isVeg": true
    },
    {
        "id": 25,
        "name": "Ice Cream Sundae",
        "category": "Dessert",
        "description": "Creamy vanilla ice cream topped with chocolate sauce and nuts.",
        "price": 130,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
        "isVeg": true
    },
    {
        "id": 26,
        "name": "Mango Smoothie",
        "category": "Beverage",
        "description": "Refreshing smoothie made with ripe mangoes and chilled milk.",
        "price": 120,
        "rating": 4.6,
        "image": "https://images.unsplash.com/photo-1546173159-315724a31696",
        "isVeg": true
    },
    {
        "id": 27,
        "name": "Cold Coffee",
        "category": "Beverage",
        "description": "Chilled creamy coffee blended with milk and ice.",
        "price": 110,
        "rating": 4.4,
        "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
        "isVeg": true
    },
    {
        "id": 28,
        "name": "Fresh Lime Soda",
        "category": "Beverage",
        "description": "Refreshing lime drink made with fresh lemon juice and soda.",
        "price": 80,
        "rating": 4.3,
        "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd",
        "isVeg": true
    },
    {
        "id": 29,
        "name": "Fish Curry",
        "category": "Seafood",
        "description": "Fresh fish cooked in a flavorful Indian-style spicy curry.",
        "price": 280,
        "rating": 4.5,
        "image": "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
        "isVeg": false
    },
    {
        "id": 30,
        "name": "Prawn Masala",
        "category": "Seafood",
        "description": "Juicy prawns cooked with onions, tomatoes and aromatic spices.",
        "price": 320,
        "rating": 4.7,
        "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47",
        "isVeg": false
    }
]

const categoryContainer = document.getElementById("allCategory");
const foodContainer = document.getElementById("foodContainer");
const foodCount = document.getElementById("foodCount");
const cartButton = document.getElementById("cartButton");
const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");
const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");
const cartBadge = document.getElementById("cartBadge");
const cartItemCount = document.getElementById("cartItemCount");

let cart =
    JSON.parse(localStorage.getItem("foodhub-cart")) || [];

function saveCart() {
    localStorage.setItem(
        "foodhub-cart",
        JSON.stringify(cart)
    );
}

const categories = ["All", ...new Set(foodItems.map(item => item.category))];

function displayCategories() {
    categoryContainer.innerHTML = "";

    categories.forEach(category => {
        let item;
        if (category === "All") {
            item = foodItems[0];
        } else {
            item = foodItems.find(food => food.category === category);
        }
        const box = document.createElement("div");

        box.className = `
            p-3
            border-2
            rounded-xl
            border-gray-300
            h-[150px]
            w-[150px]
            flex-shrink-0
            cursor-pointer
            bg-white
            hover:border-orange-500
            hover:shadow-lg
            transition
            duration-300
        `;

        box.innerHTML = `
            <img
                src="${item.image}"
                alt="${category}"
                class="h-[95px] w-full
                object-cover rounded-lg"
            />

            <h3
                class="text-center font-semibold mt-2">
                ${category}
            </h3>
        `;

        box.addEventListener(
            "click",
            () => {
                displayFoods(category);

                document.getElementById("menu").scrollIntoView({
                    behavior: "smooth"
                });
            }
        );
        categoryContainer.appendChild(box);
    });
}

//! DISPLAY FOOD
function displayFoods(category = "All") {
    foodContainer.innerHTML = "";
    let filteredFoods;
    if (category === "All") {
        filteredFoods = foodItems;
    } else {
        filteredFoods =
            foodItems.filter(
                food =>
                    food.category === category
            );
    }

    foodCount.innerText =
        `${filteredFoods.length} items available`;


    if (filteredFoods.length === 0) {

        foodContainer.innerHTML = `
            <div
                class="col-span-full
                text-center py-16">
                <i
                    class="fa-solid fa-utensils
                    text-5xl text-gray-300">
                </i>
                <h3
                    class="text-xl font-semibold mt-4">
                    No food found
                </h3>
                <p
                    class="text-gray-500 mt-2">
                    Try another category.
                </p>
            </div>
        `;

        return;

    }


    // Create food cards

    filteredFoods.forEach(food => {

        const card =
            document.createElement("div");


        card.className = `
            bg-white
            rounded-xl
            overflow-hidden
            shadow-md
            hover:shadow-xl
            transition
            duration-300
            group
        `;


        card.innerHTML = `
            <div class="relative overflow-hidden">
                <img
                    src="${food.image}"
                    alt="${food.name}"
                    class="w-full h-[220px]
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500"
                />
                <!-- VEG -->
                <span
                    class="
                    absolute
                    top-3
                    left-3
                    px-2
                    py-1
                    rounded
                    text-xs
                    font-semibold
                    ${food.isVeg ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}">
                    ${food.isVeg ? "VEG" : "NON-VEG"}
                </span>
                <!-- RATING -->
                <span
                    class="
                    absolute
                    top-3
                    right-3
                    bg-white
                    px-2
                    py-1
                    rounded
                    text-sm
                    font-semibold
                    shadow
                    ">
                    ⭐ ${food.rating}
                </span>
            </div>

            <!-- CONTENT -->

            <div class="p-4">
                <!-- NAME + PRICE -->
                <div
                    class="flex justify-between items-start gap-2">
                    <h3 class="text-lg font-bold">
                        ${food.name}
                    </h3>
                    <span class="text-orange-500 font-bold whitespace-nowrap">
                        ₹${food.price}
                    </span>
                </div>

                <!-- DESCRIPTION -->
                <p class=" text-sm text-gray-500 mt-2 line-clamp-2">
                    ${food.description}
                </p>
                <!-- CATEGORY + BUTTON -->

                <div class=" flex justify-between items-center mt-4">
                    <span class=" text-sm text-gray-400">
                        ${food.category}
                    </span>

                    <button
                        onclick="addToCart(${food.id})"
                        class=" bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer transition">
                        <i class=" fa-solid fa-cart-plus"></i>
                        Add
                    </button>
                </div>
            </div>
        `;
        foodContainer.appendChild(card);

    });

}

function addToCart(foodId) {
    // Find food
    const food =
        foodItems.find(
            item =>
                item.id === foodId
        );

    if (!food) {
        return;
    }


    // Check if already in cart
    const existingItem =
        cart.find(
            item =>
                item.id === foodId
        );

    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new item
        cart.push({
            ...food,
            quantity: 1
        });
    }

    // Save
    saveCart();

    // Update UI
    updateCart();

    // Open cart
    openCart();
}


function updateCart() {
    cartContainer.innerHTML = "";

    // Empty cart
    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div
                class="
                flex
                flex-col
                items-center
                justify-center
                h-full
                text-center">  

                <i
                    class="
                    fa-solid
                    fa-cart-shopping
                    text-6xl
                    text-gray-300">
                </i>


                <h3
                    class="
                    text-xl
                    font-semibold
                    mt-4">

                    Your cart is empty

                </h3>


                <p
                    class="
                    text-gray-500
                    mt-1">

                    Add some delicious food!

                </p>

            </div>

        `;


        cartTotal.innerText = "0";

        cartBadge.innerText = "0";

        cartItemCount.innerText =
            "0 items";


        return;

    }


    // Total variables

    let total = 0;

    let totalItems = 0;


    // Create cart items

    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;


        totalItems +=
            item.quantity;


        const cartItem =
            document.createElement("div");


        cartItem.className = `
            flex
            gap-3
            border-b
            pb-4
            mb-4
        `;


        cartItem.innerHTML = `

            <!-- IMAGE -->

            <img
                src="${item.image}"
                alt="${item.name}"
                class="
                w-20
                h-20
                object-cover
                rounded-lg
                flex-shrink-0
                ">


            <!-- DETAILS -->

            <div class="flex-1">


                <!-- NAME + DELETE -->

                <div
                    class="
                    flex
                    justify-between
                    gap-2">

                    <h3
                        class="
                        font-semibold
                        text-sm">

                        ${item.name}

                    </h3>


                    <button
                        onclick="removeFromCart(${item.id})"
                        class="
                        text-red-500
                        hover:text-red-700
                        cursor-pointer">

                        <i
                            class="
                            fa-solid
                            fa-trash">
                        </i>

                    </button>

                </div>



                <!-- PRICE -->

                <p
                    class="
                    text-orange-500
                    font-semibold
                    mt-1">

                    ₹${item.price}

                </p>



                <!-- QUANTITY -->

                <div
                    class="
                    flex
                    items-center
                    gap-3
                    mt-2">


                    <!-- DECREASE -->

                    <button
                        onclick="decreaseQuantity(${item.id})"
                        class="
                        w-7
                        h-7
                        rounded-full
                        bg-gray-200
                        hover:bg-orange-500
                        hover:text-white
                        cursor-pointer">

                        -

                    </button>



                    <!-- QUANTITY -->

                    <span
                        class="font-semibold">

                        ${item.quantity}

                    </span>



                    <!-- INCREASE -->

                    <button
                        onclick="increaseQuantity(${item.id})"
                        class="
                        w-7
                        h-7
                        rounded-full
                        bg-gray-200
                        hover:bg-orange-500
                        hover:text-white
                        cursor-pointer">

                        +

                    </button>



                    <!-- ITEM TOTAL -->

                    <span
                        class="
                        ml-auto
                        font-semibold">

                        ₹${item.price * item.quantity}

                    </span>

                </div>

            </div>

        `;


        cartContainer.appendChild(cartItem);

    });


    // Update totals

    cartTotal.innerText =
        total.toLocaleString("en-IN");


    cartBadge.innerText =
        totalItems;


    cartItemCount.innerText =
        `${totalItems} ${totalItems === 1 ? "item" : "items"}`;

}

function increaseQuantity(foodId) {

    const item =
        cart.find(
            item =>
                item.id === foodId
        );


    if (!item) {

        return;

    }


    item.quantity++;


    saveCart();

    updateCart();

}

function decreaseQuantity(foodId) {

    const item =
        cart.find(
            item =>
                item.id === foodId
        );


    if (!item) {

        return;

    }


    if (item.quantity > 1) {

        item.quantity--;

    } else {

        cart =
            cart.filter(
                item =>
                    item.id !== foodId
            );

    }


    saveCart();

    updateCart();

}

function removeFromCart(foodId) {

    cart =
        cart.filter(
            item =>
                item.id !== foodId
        );


    saveCart();

    updateCart();

}


function openCart() {

    cartSidebar.classList.remove(
        "translate-x-full"
    );


    cartOverlay.classList.remove(
        "hidden"
    );


    document.body.classList.add(
        "overflow-hidden"
    );

}


function closeCartSidebar() {

    cartSidebar.classList.add(
        "translate-x-full"
    );


    cartOverlay.classList.add(
        "hidden"
    );


    document.body.classList.remove(
        "overflow-hidden"
    );

}


cartButton.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartSidebar
);


cartOverlay.addEventListener(
    "click",
    closeCartSidebar
);


displayCategories();

displayFoods("All");

updateCart();