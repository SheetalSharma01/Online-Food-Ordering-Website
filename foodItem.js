console.log("Welcome to foodItem.js page");

const foodItem = [
    {
        id : 1,
        name : 'Ambur Biryani',
        category : 'biryani',
        rating : 4.0,
        price : 160,
        img : 'image/biryani/ambur_biryani.jfif',
        quantity : 1
    },

    {
        id : 2,
        name : 'Egg Biryani',
        category : 'biryani',
        rating : 3.5,
        price : 80,
        img : 'image/biryani/egg__biryani.jpg',
        quantity : 1
    },

    {
        id : 3,
        name : 'Goan Fish Biryani',
        category : 'biryani',
        rating : 4.3,
        price : 90,
        img : 'image/biryani/goan_fish_biryani.jpg',
        quantity : 1
    },

    {
        id : 4,
        name : 'Hyderabadi Biryani',
        category : 'biryani',
        rating : 4.7,
        price : 199,
        img : 'image/biryani/hyderabadi_biryani.jpg',
        quantity : 1
    },

    {
        id : 5,
        name : 'Kamrupi Biryani',
        category : 'biryani',
        rating : 3.8,
        price : 110,
        img : 'image/biryani/kamrupi_biryani.jfif',
        quantity : 1
    },

    {
        id : 6,
        name : 'Kashmiri Biryani',
        category : 'biryani',
        rating : 4.2,
        price : 120,
        img : 'image/biryani/kashmiri_biryani.jfif',
        quantity : 1
    },

    {
        id : 7,
        name : 'Memoni Biryani',
        category : 'biryani',
        rating : 4.6,
        price : 90,
        img : 'image/biryani/memoni_biryani.jpg',
        quantity : 1
    },    

    {
        id : 8,
        name : 'Mughlai Biryani',
        category : 'biryani',
        rating : 4.3,
        price : 350,
        img : 'image/biryani/mughlai_biryani.jpg',
        quantity : 1
    },

    {
        id : 9,
        name : 'Mutton Biryani',
        category : 'biryani',
        rating : 4.9,
        price : 150,
        img : 'image/biryani/mutton_biryani.jpg',
        quantity : 1
    },
    
    {
        id : 10,
        name : 'American Chopsuey',
        category : 'noodles',
        rating : 4.3,
        price : 200,
        img : 'image/noodles/american_chopsuey.jpg',
        quantity : 1
    },
    
    {
        id : 11,
        name : 'Chicken Noodles',
        category : 'noodles',
        rating : 3.9,
        price : 90,
        img : 'image/noodles/chicken_noodles.jpeg',
        quantity : 1
    },
    
    {
        id : 12,
        name : 'Egg Noodles',
        category : 'noodles',
        rating : 4.0,
        price : 110,
        img : 'image/noodles/egg_noodles.jpg',
        quantity : 1
    },
    
    {
        id : 13,
        name : 'Hakka Noodles',
        category : 'noodles',
        rating : 4.6,
        price : 80,
        img : 'image/noodles/hakka_noodles.jpg',
        quantity : 1
    },
    
    {
        id : 14,
        name : 'Shanghai Fried Noodles',
        category : 'noodles',
        rating : 4.2,
        price : 155,
        img : 'image/noodles/shanghai_fried_noodles.jpg',
        quantity : 1
    },
    
    {
        id : 15,
        name : 'Vegetable Chow Mein Special',
        category : 'noodles',
        rating : 4.7,
        price : 110,
        img : 'image/noodles/Vegetable_Chow_Mein.jpg',
        quantity : 1
    },
    
    {
        id : 16,
        name : 'Vegetable Noodles Soup',
        category : 'noodles',
        rating : 3.3,
        price : 75,
        img : 'image/noodles/vegetable_noodles_soup.jpg',
        quantity : 1
    },

    {
        id : 17,
        name : 'Chicken Curry',
        category : 'chicken',
        rating : 4.2,
        price : 210,
        img : 'image/chicken/chicken_curry.jpg',
        quantity : 1
    },
    
    {
        id : 12,
        name : 'Chicken-do-Pyaza',
        category : 'chicken',
        rating : 4.4,
        price : 160,
        img : 'image/chicken/chicken_do_pyaza.jpg',
        quantity : 1
    },
    
    {
        id : 13,
        name : 'Chicken Masala',
        category : 'chicken',
        rating : 4.0,
        price : 230,
        img : 'image/chicken/chicken_masala.jpg',
        quantity : 1
    },
    
    {
        id : 14,
        name : 'Chicken Roast',
        category : 'chicken',
        rating : 4.6,
        price : 175,
        img : 'image/chicken/chicken_roast.jfif',
        quantity : 1
    },
    
    {
        id : 15,
        name : 'Handi Chicken',
        category : 'chicken',
        rating : 4.5,
        price : 410,
        img : 'image/chicken/handi_chicken.jfif',
        quantity : 1
    },
    
    {
        id : 16,
        name : 'Murgh Musallam',
        category : 'chicken',
        rating : 4.2,
        price : 380,
        img : 'image/chicken/murgh_musallam.jpg',
        quantity : 1
    },
    
    {
        id : 17,
        name : 'Chicken Manchurian',
        category : 'chinese',
        rating : 4.3,
        price : 120,
        img : 'image/chinese/chicken_manchurian.jfif',
        quantity : 1
    },
    
    {
        id : 18,
        name : 'Chilli Chicken',
        category : 'chinese',
        rating : 3.9,
        price : 159,
        img : 'image/chinese/chilli_chicken.jpg',
        quantity : 1
    },
    
    {
        id : 19,
        name : 'Chowmean',
        category : 'chinese',
        rating : 4.1,
        price : 90,
        img : 'image/chinese/chowmean.jfif',
        quantity : 1
    },
    
    {
        id : 20,
        name : 'Fried Rice',
        category : 'chinese',
        rating : 4.4,
        price : 80,
        img : 'image/chinese/fried_rice.jfif',
        quantity : 1
    },
    
    {
        id : 21,
        name : 'Momos',
        category : 'chinese',
        rating : 4.7,
        price : 90,
        img : 'image/chinese/momos.jpg',
        quantity : 1
    },
    
    {
        id : 22,
        name : 'Spring Roll',
        category : 'chinese',
        rating : 3.8,
        price : 160,
        img : 'image/chinese/spring_roll.jpg',
        quantity : 1
    },
    
    {
        id : 23,
        name : 'Szechuan Chicken',
        category : 'chinese',
        rating : 4.2,
        price : 110,
        img : 'image/chinese/szechuan_chicken.jpg',
        quantity : 1
    },
    
    {
        id : 24,
        name : 'Hyderabadi Paneer',
        category : 'paneer',
        rating : 4.1,
        price : 150,
        img : 'image/paneer/hyderabadi_paneer.jfif',
        quantity : 1
    },
    
    {
        id : 25,
        name : 'Matar Paneer',
        category : 'paneer',
        rating : 4.3,
        price : 130,
        img : 'image/paneer/matar_paneer.jfif',
        quantity : 1
    },
    
    {
        id : 26,
        name : 'Palak Paneer',
        category : 'paneer',
        rating : 3.7,
        price : 135,
        img : 'image/paneer/palak_paneer.jpg',
        quantity : 1
    },
    
    {
        id : 27,
        name : 'Paneer-do-Pyaza',
        category : 'paneer',
        rating : 4.0,
        price : 159,
        img : 'image/paneer/paneer_do_pyaza.jpeg',
        quantity : 1
    },
    
    {
        id : 28,
        name : 'Paneer Lababdar',
        category : 'paneer',
        rating : 4.2,
        price : 135,
        img : 'image/paneer/paneer_lababdar.jpg',
        quantity : 1
    },
    
    {
        id : 29,
        name : 'Paneer Masala',
        category : 'paneer',
        rating : 4.4,
        price : 125,
        img : 'image/paneer/paneer_masala.jpg',
        quantity : 1
    },
    
    {
        id : 30,
        name : 'Shahi Paneer',
        category : 'paneer',
        rating : 4.7,
        price : 160,
        img : 'image/paneer/shahi_paneer.jpg',
        quantity : 1
    },
    
    {
        id : 31,
        name : 'Navratan Korma',
        category : 'vegetable',
        rating : 3.6,
        price : 135,
        img : 'image/vegetable/navratan_korma.jpg',
        quantity : 1
    },
    
    {
        id : 32,
        name : 'Veg Biryani',
        category : 'vegetable',
        rating : 4.3,
        price : 120,
        img : 'image/vegetable/veg_biryani.jfif',
        quantity : 1
    },
    
    {
        id : 33,
        name : 'Veg Curry',
        category : 'vegetable',
        rating : 3.9,
        price : 70,
        img : 'image/vegetable/veg_curry.jfif',
        quantity : 1
    },
    
    {
        id : 34,
        name : 'Veg Jalfrezi',
        category : 'vegetable',
        rating : 4.2,
        price : 135,
        img : 'image/vegetable/veg_jalfrezi.jfif',
        quantity : 1
    },
    
    {
        id : 35,
        name : 'Veg Kolhapur',
        category : 'vegetable',
        rating : 3.9,
        price : 150,
        img : 'image/vegetable/veg_kolhapur.jpg',
        quantity : 1
    },
    
    {
        id : 36,
        name : 'Veg Masala',
        category : 'vegetable',
        rating : 4.2,
        price : 110,
        img : 'image/vegetable/veg_masala.jfif',
        quantity : 1
    },
    
    {
        id : 37,
        name : 'Veg Pakora',
        category : 'vegetable',
        rating : 4.0,
        price : 170,
        img : 'image/vegetable/veg_pakora.jpg',
        quantity : 1
    },
    
    {
        id : 38,
        name : 'Gajar Halwa',
        category : 'desert',
        rating : 4.3,
        price : 130,
        img : 'image/desert/gajar_halwa.jpg',
        quantity : 1
    },
    
    {
        id : 39,
        name : 'Gulab Jamun',
        category : 'desert',
        rating : 4.1,
        price : 90,
        img : 'image/desert/gulab_jamun.jpg',
        quantity : 1
    },
    
    {
        id : 40,
        name : 'Jalebi',
        category : 'desert',
        rating : 4.5,
        price : 80,
        img : 'image/desert/jalebi.jpg',
        quantity : 1
    },
    
    {
        id : 41,
        name : 'Kaju Katli',
        category : 'desert',
        rating : 4.6,
        price : 250,
        img : 'image/desert/kaju_katli.jpg',
        quantity : 1
    },
    
    {
        id : 42,
        name : 'Rabdi',
        category : 'desert',
        rating : 4.3,
        price : 240,
        img : 'image/desert/rabdi.jpg',
        quantity : 1
    },
    
    {
        id : 43,
        name : 'Rasgulla',
        category : 'desert',
        rating : 4.8,
        price : 160,
        img : 'image/desert/rasgulla.jpg',
        quantity : 1
    },
    
    {
        id : 44,
        name : 'Rasmalai',
        category : 'desert',
        rating : 4.4,
        price : 175,
        img : 'image/desert/rasmalai.jfif',
        quantity : 1
    },
    
    {
        id : 45,
        name : 'Shrikhand',
        category : 'desert',
        rating : 4.4,
        price : 100,
        img : 'image/desert/shrikhand.jpg',
        quantity : 1
    },
    
    {
        id : 46,
        name : 'Black Forest Pastry',
        category : 'cake',
        rating : 4.3,
        price : 40,
        img : 'image/cake/black_forest_pastry.jpg',
        quantity : 1
    },
    
    {
        id : 47,
        name : 'Chocolate Brownie',
        category : 'cake',
        rating : 4.1,
        price : 60,
        img : 'image/cake/chocolate_brownie.jpg',
        quantity : 1
    },
    
    {
        id : 48,
        name : 'Cupcake',
        category : 'cake',
        rating : 4.0,
        price : 35,
        img : 'image/cake/cupcake.jfif',
        quantity : 1
    },
    
    {
        id : 49,
        name : 'Chocolate Cake',
        category : 'cake',
        rating : 4.5,
        price : 60,
        img : 'image/cake/eggless_chocolate_cake.jpeg',
        quantity : 1
    },
    
    {
        id : 50,
        name : 'Tuxedo Cake',
        category : 'cake',
        rating : 4.3,
        price : 90,
        img : 'image/cake/tuxedo_cake.jpg',
        quantity : 1
    },
    
    {
        id : 51,
        name : 'Eggless Vanilla Cake',
        category : 'cake',
        rating : 3.9,
        price : 40,
        img : 'image/cake/eggless_vanilla_cake.jpeg',
        quantity : 1
    },
    
    {
        id : 52,
        name : 'Mango Truffle Cake',
        category : 'cake',
        rating : 4.3,
        price : 760,
        img : 'image/cake/mango_truffle_cake.png',
        quantity : 1
    },
    
    {
        id : 53,
        name : 'Red Velvet Pastry',
        category : 'cake',
        rating : 4.3,
        price : 90,
        img : 'image/cake/red_velvet_pastry.jfif',
        quantity : 1
    },
    
    {
        id : 54,
        name : 'Redberry Chocolate Cake',
        category : 'cake',
        rating : 4.0,
        price : 860,
        img : 'image/cake/redberry_chocolate_cake.jpg',
        quantity : 1
    },
    
    {
        id : 55,
        name : 'Eggless Pineapple Pastry',
        category : 'cake',
        rating : 4.2,
        price : 40,
        img : 'image/cake/eggless_pineapple_pastry.jpg',
        quantity : 1
    },
    
    {
        id : 56,
        name : 'Creamy Tomato Pasta',
        category : 'continental',
        rating : 4.0,
        price : 160,
        img : 'image/continental/creamy_tomato_pasta.jfif',
        quantity : 1
    },
    
    {
        id : 57,
        name : 'Crispy Calamari Rings',
        category : 'continental',
        rating : 3.8,
        price : 190,
        img : 'image/continental/crispy_calamari_rings.jpg',
        quantity : 1
    },
    
    {
        id : 58,
        name : 'Herb & Bacon Scones',
        category : 'continental',
        rating : 4.5,
        price : 240,
        img : 'image/continental/herb_&_bacon_scones.jpg',
        quantity : 1
    },
    
    {
        id : 59,
        name : 'White Wine Chicken',
        category : 'continental',
        rating : 4.1,
        price : 320,
        img : 'image/continental/white_wine_chicken_with_garlic.jpg',
        quantity : 1
    },
    
    {
        id : 60,
        name : 'Glazed Ham',
        category : 'continental',
        rating : 3.7,
        price : 190,
        img : 'image/continental/glazed_ham.jpg',
        quantity : 1
    },
    
    {
        id : 61,
        name : 'Cucumber Kimchi',
        category : 'continental',
        rating : 4.2,
        price : 198,
        img : 'image/continental/cucumber_kimchi.jpeg',
        quantity : 1
    },
    
    {
        id : 62,
        name : 'Hot Cross Buns',
        category : 'continental',
        rating : 4.7,
        price : 220,
        img : 'image/continental/hot_cross_buns.jpg',
        quantity : 1
    },
    
    {
        id : 63,
        name : 'Lamb Steaks',
        category : 'continental',
        rating : 4.2,
        price : 490,
        img : 'image/continental/lamb_steaks.jpg',
        quantity : 1
    },
    
    {
        id : 64,
        name : 'Paneer Steak',
        category : 'continental',
        rating : 4.8,
        price : 260,
        img : 'image/continental/paneer_steak.jpg',
        quantity : 1
    },
    
    {
        id : 65,
        name : 'Scotch Eggs',
        category : 'continental',
        rating : 4.0,
        price : 270,
        img : 'image/continental/scotch_eggs.jfif',
        quantity : 1
    },
    
    {
        id : 66,
        name : 'Filled Jacket Potato',
        category : 'continental',
        rating : 4.3,
        price : 120,
        img : 'image/continental/filled_jacket_potato.jpg',
        quantity : 1
    },
    
    {
        id : 67,
        name : 'Corn & Cheese Pizza',
        category : 'pizza',
        rating : 4.0,
        price : 184,
        img : 'image/pizza/Corn_&_Cheese.jpg',
        quantity : 1
    },
    
    {
        id : 68,
        name : 'Deluxe Veggie Pizza',
        category : 'pizza',
        rating : 4.5,
        price : 260,
        img : 'image/pizza/Deluxe_Veggie.jpg',
        quantity : 1
    },
    
    {
        id : 69,
        name : 'Fresh Veggie Pizza',
        category : 'pizza',
        rating : 4.6,
        price : 385,
        img : 'image/pizza/Fresh_Veggie.jpg',
        quantity : 1
    },
    
    {
        id : 70,
        name : 'Farmhouse Pizza',
        category : 'pizza',
        rating : 4.2,
        price : 325,
        img : 'image/pizza/Farmhouse.jpg',
        quantity : 1
    },
    
    {
        id : 71,
        name : 'Indian Tandoori Paneer Pizza',
        category : 'pizza',
        rating : 4.3,
        price : 310,
        img : 'image/pizza/IndianTandooriPaneer.jpg',
        quantity : 1
    },
    
    {
        id : 72,
        name : 'Digital Veggie Paradise Pizza',
        category : 'pizza',
        rating : 4.1,
        price : 260,
        img : 'image/pizza/Digital_Veggie_Paradise_olo_266x265.jpg',
        quantity : 1
    },
    
    {
        id : 73,
        name : 'Veg Extravaganza Pizza',
        category : 'pizza',
        rating : 4.4,
        price : 290,
        img : 'image/pizza/Veg_Extravaganz.jpg',
        quantity : 1
    },

    {
        id : 74,
        name : 'Mexican Green Wave Pizza',
        category : 'pizza',
        rating : 4.6,
        price : 380,
        img : 'image/pizza/Mexican_Green_Wave.jpg',
        quantity : 1
    },
    
    {
        id : 75,
        name : 'Peppy Paneer Pizza',
        category : 'pizza',
        rating : 4.5,
        price : 320,
        img : 'image/pizza/Peppy_Paneer.jpg',
        quantity : 1
    },
    
    {
        id : 76,
        name : 'Paneer Makhni Pizza',
        category : 'pizza',
        rating : 4.8,
        price : 398,
        img : 'image/pizza/Paneer_Makhni.jpg',
        quantity : 1
    },
    
    
    {
        id : 77,
        name : 'Bread Omelette Sandwich',
        category : 'sandwich',
        rating : 4.5,
        price : 70,
        img : 'image/sandwich/bread_omlette_sandwich.jpg',
        quantity : 1
    },
    
    {
        id : 78,
        name : 'Chilli Cheese Sandwich',
        category : 'sandwich',
        rating : 4.6,
        price : 175,
        img : 'image/sandwich/chilli_cheese_sandwich.jpg',
        quantity : 1
    },
    
    {
        id : 79,
        name : 'Grilled Chocolate Sandwich',
        category : 'sandwich',
        rating : 4.2,
        price : 126,
        img : 'image/sandwich/grilled-chocolate-sandwich.jpg',
        quantity : 1
    },
    
    {
        id : 80,
        name : 'Veg Chutney Masala Sandwich',
        category : 'sandwich',
        rating : 4.4,
        price : 80,
        img : 'image/sandwich/masala_sandwich.jfif',
        quantity : 1
    },
    
    {
        id : 81,
        name : 'Paneer Cheese Toast Sandwich',
        category : 'sandwich',
        rating : 4.8,
        price : 120,
        img : 'image/sandwich/paneer_cheese_toast_sandwich.jpg',
        quantity : 1
    },
    
    {
        id : 82,
        name : 'Grilled Potato Sandwich',
        category : 'sandwich',
        rating : 4.1,
        price : 60,
        img : 'image/sandwich/potato_sandwich.jfif',
        quantity : 1
    },
    
    {
        id : 83,
        name : 'Spinach Corn Sandwich',
        category : 'sandwich',
        rating : 3.7,
        price : 125,
        img : 'image/sandwich/spinach_corn_sandwich.jfif',
        quantity : 1
    },
    
    {
        id : 84,
        name : 'Veg Mayonnaise Sandwich',
        category : 'sandwich',
        rating : 4.7,
        price : 160,
        img : 'image/sandwich/veg_mayonnaise_sandwich.jpg',
        quantity : 1
    },
    
    {
        id : 85,
        name : 'Veg Sandwich',
        category : 'sandwich',
        rating : 4.3,
        price : 60,
        img : 'image/sandwich/veg_sandwich.jpg',
        quantity : 1
    },
    
    {
        id : 86,
        name : 'Bikaneri Kachori',
        category : 'street',
        rating : 4.3,
        price : 40,
        img : 'image/street/bikaneri_kachori.jpg',
        quantity : 1
    },
    
    {
        id : 87,
        name : 'Pav Bhaji',
        category : 'street',
        rating : 4.2,
        price : 130,
        img : 'image/street/pav_bhaji.jpg',
        quantity : 1
    },
    
    {
        id : 88,
        name : 'Dabeli',
        category : 'street',
        rating : 4.5,
        price : 35,
        img : 'image/street/dabeli.jfif',
        quantity : 1
    },
    
    {
        id : 89,
        name : 'Idli Sambhar',
        category : 'street',
        rating : 4.0,
        price : 70,
        img : 'image/street/idli_sambhar.jpg',
        quantity : 1
    },
    
    {
        id : 90,
        name : 'Indori Poha',
        category : 'street',
        rating : 4.6,
        price : 30,
        img : 'image/street/indori_poha.jpg',
        quantity : 1
    },
    
    {
        id : 91,
        name : 'Kachori',
        category : 'street',
        rating : 4.1,
        price : 15,
        img : 'image/street/kachori.jpg',
        quantity : 1
    },
    
    {
        id : 92,
        name : 'Khaman Dhokla',
        category : 'street',
        rating : 4.7,
        price : 80,
        img : 'image/street/khaman_dhokla.jpg',
        quantity : 1
    },
    
    {
        id : 93,
        name : 'Papdi Chaat',
        category : 'street',
        rating : 4.3,
        price : 50,
        img : 'image/street/papdi_chaat.jpg',
        quantity : 1
    },
    
    {
        id : 94,
        name : 'Chole Aloo Tikki Chaat',
        category : 'street',
        rating : 4.6,
        price : 60,
        img : 'image/street/chole_aloo_tikki_chaat.jfif',
        quantity : 1
    },
    
    {
        id : 95,
        name : 'Punjabi Chole Bhature',
        category : 'street',
        rating : 4.2,
        price : 70,
        img : 'image/street/punjabi_chole_bhature.jpg',
        quantity : 1
    },
    
    {
        id : 96,
        name : 'Punjabi Samosa Chaat',
        category : 'street',
        rating : 4.9,
        price : 80,
        img : 'image/street/Punjabi_Samosa_Chaat.jpg',
        quantity : 1
    },
    
    {
        id : 97,
        name : 'Vada Pav',
        category : 'street',
        rating : 3.9,
        price : 35,
        img : 'image/street/vada_pav.jpg',
        quantity : 1
    },
]

export {foodItem};