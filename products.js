const products = [
    {
        id: 1,
        name: "Samsung Galaxy S25 Ultra",
        price: "$1299",
        camera: "200MP",
        storage: "512GB",
        battery: "5000mAh",
        colour: "Titanium Black",
        description: "The Galaxy S25 Ultra combines sleek design with durability, featuring a titanium frame, Corning® Gorilla® Armor 2 glass, and IP68 water resistance. Powered by the Snapdragon® 8 Elite Mobile processor, it delivers exceptional performance enhanced by AI capabilities like Google Gemini for seamless multitasking and personalized daily summaries. Its advanced camera system includes a 200 MP lens, up to 100x Space Zoom, and pro-level features such as Expert RAW and Log video. With an integrated S Pen for instant search and creative tasks, robust security through Knox Vault, and a long-lasting battery, the Galaxy S25 Ultra redefines the premium smartphone experience.",
        mainImage: "/image/s25ultra.jpg",
        smallImageGroup: [
            "/image/s25ultra_img/s25ultra.1.jpg",
            "/image/s25ultra_img/s25ultra.2.jpg",
            "/image/s25ultra_img/s25ultra.3.jpg",
            "/image/s25ultra_img/s25ultra.4.jpg",
        ]
    },
    {
    id: 2,
    name: "Samsung Galaxy S25",
    price: "$799",
    camera: "50MP",
    storage: "256GB",
    battery: "4000mAh",
    colour: "Silver Shadow",
    description: "The Samsung Galaxy S25 brings advanced artificial intelligence and powerful performance in a sleek and durable design. With the integration of Google Gemini, you can easily multitask using voice commands. Equipped with the Snapdragon® 8 Elite Mobile platform for Galaxy, it offers smooth gaming, real-time Ray Tracing, and enhanced display technology with AI ProScaler. The advanced ProVisual Engine delivers stunning photography with 10-bit HDR, precise noise reduction, and customized AI-powered filters. Built with a sturdy aluminum frame, Corning® Gorilla® Glass Victus® 2, and IP68 water resistance, it’s made to last. Additionally, its long-lasting battery and enhanced security with Knox Vault make the Galaxy S25 an unparalleled smartphone in terms of performance and protection.",
    mainImage: "/image/s25.jpg",
    smallImageGroup: [
        "/image/s25_img/s25.1.jpg",
        "/image/s25_img/s25.2.jpg",
        "/image/s25_img/s25.3.jpg",
        "/image/s25_img/s25.4.jpg"
    ]
},
{
    id: 3,
    name: "Apple iPhone 16e",
    price: "$599",
    camera: "48MP",
    storage: "128GB",
    battery: "4005mAh",
    colour: "Black",
    description: "The Apple iPhone 16e combines a stunning and durable design with cutting-edge technology, including the powerful A18 chip, Apple Intelligence, and an all-day battery. The 48MP Fusion camera captures high-resolution photos and 4K videos, while the 6.1-inch Super Retina XDR display delivers captivating visuals. With Face ID for secure access, the Action button for quick controls, USB-C connectivity, and advanced AI tools, it’s built for performance and convenience. Additionally, with 5G, Wi-Fi, eSIM, satellite connectivity, and safety features like Crash Detection and Emergency SOS, the iPhone 16e keeps you connected and protected wherever you are.",
    mainImage: "/image/16e.jpg",
    smallImageGroup: [
        "/image/16e_img/16e.1.jpg",
        "/image/16e_img/16e.2.jpg",
        "/image/16e_img/16e.3.jpg",
        "/image/16e_img/16e.4.jpg"
    ]
},
{
    id: 4,
    name: "Apple iPhone 16",
    price: "$799",
    camera: "48MP",
    storage: "128GB",
    battery: "3651mAh",
    colour: "Ultramarine",
    description: "iPhone 16 introduces Apple Intelligence, a personal and private system designed to enhance productivity and creativity. It includes advanced writing tools and modes for stunning 3D photos and videos, along with a powerful 48MP camera system featuring Ultra Wide capabilities. With the powerful A18 chip, extended battery life, faster MagSafe charging, and a durable aluminum design, iPhone 16 delivers outstanding performance, privacy, and style. The new Action button provides quick access to favorite features, making everyday tasks easier and faster to complete.",
    mainImage: "/image/16.jpg",
    smallImageGroup: [
        "/image/16_img/16.1.jpg",
        "/image/16_img/16.2.jpg",
        "/image/16_img/16.3.jpg",
        "/image/16_img/16.4.jpg"
    ]
},
{
    id: 5,
    name: "Apple iPhone 16 Pro",
    price: "$1099",
    camera: "48MP",
    storage: "256GB",
    battery: "3582mAh",
    colour: "Desert Titanium",
    description: "The iPhone 16 Pro introduces remarkable innovations, including the powerful A18 Pro chip for unprecedented performance, a 48MP Ultra Wide camera for stunning photo quality, and 4K 120 fps Dolby Vision video for a cinematic experience. Its sleek Grade 5 titanium design provides durability and comes in eye-catching colors. With Camera Control, you can easily adjust settings like exposure with a swipe, while Apple Intelligence enhances personalization, privacy, and productivity. The iPhone 16 Pro also offers extended battery life, satellite messaging for emergencies, and advanced gaming capabilities with Ray Tracing technology.",
    mainImage: "/image/16pro.jpg",
    smallImageGroup: [
        "/image/16pro_img/16pro.1.jpg",
        "/image/16pro_img/16pro.2.jpg",
        "/image/16pro_img/16pro.3.jpg",
        "/image/16pro_img/16pro.4.jpg"
    ]
},
{
  "id": 6,
  "name": "Iphone 16 Pro Max",
  "price": "$1199",
  "mainImage": "image/16promax.jpg"
},
  {
    "id": 7,
    "name": "Google Pixel 9",
    "price": "$799",
    "mainImage": "image/pixel9.jpg"
  },
  {
    "id": 8,
    "name": "Google Pixel 9 Pro",
    "price": "$999",
    "mainImage": "image/pixel9pro.jpg"
  },
  {
    "id": 9,
    "name": "Google Pixel 9 Pro XL",
    "price": "$1199",
    "mainImage": "image/pixel9proxl.jpg"
  },
  {
    "id": 10,
    "name": "Google Pixel 9 Pro Fold",
    "price": "$1399",
    "mainImage": "image/pixel9profold.jpg"
  },
  {
    "id": 11,
    "name": "Iphone 11",
    "price": "$499",
    "mainImage": "image/11.jpg"
  },
  {
    "id": 12,
    "name": "Iphone 12",
    "price": "$599",
    "mainImage": "image/12.jpg"
  },
  {
    "id": 13,
    "name": "Poco X7 Pro",
    "price": "$299",
    "mainImage": "image/x7pro.jpg"
  },
  {
    "id": 14,
    "name": "Poco F7 Pro",
    "price": "$399",
    "mainImage": "image/f7pro.jpg"
  },
  {
    "id": 15,
    "name": "Poco X6 Pro",
    "price": "$249",
    "mainImage": "image/x6pro.jpg"
  },
  {
    "id": 16,
    "name": "Poco F6 Pro",
    "price": "$349",
    "mainImage": "image/f6pro.jpg"
  },
  {
    "id": 17,
    "name": "Samsung Galaxy A25",
    "price": "$199",
    "mainImage": "image/a25.jpg"
  },
  {
    "id": 18,
    "name": "Samsung Galaxy A35",
    "price": "$249",
    "mainImage": "image/a35.jpg"
  },
  {
    "id": 19,
    "name": "Samsung Galaxy A55",
    "price": "$299",
    "mainImage": "image/a55.jpg"
  },
  {
    "id": 20,
    "name": "Samsung Galaxy A26",
    "price": "$249",
    "mainImage": "image/a26.jpg"
  },
  {
    "id": 21,
    "name": "Samsung Galaxy A36",
    "price": "$299",
    "mainImage": "image/a36.jpg"
  },
  {
    "id": 22,
    "name": "Samsung Galaxy A56",
    "price": "$349",
    "mainImage": "image/a56.jpg"
  }
    
];