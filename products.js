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
        mainImage: "/image/s25ultra_img/s25ultra.jpg",
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
    mainImage: "/image/s25_img/s25.jpg",
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
    mainImage: "/image/16e_img/16e.jpg",
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
    mainImage: "/image/16_img/16.jpg",
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
    mainImage: "/image/16pro_img/16pro.jpg",
    smallImageGroup: [
        "/image/16pro_img/16pro.1.jpg",
        "/image/16pro_img/16pro.2.jpg",
        "/image/16pro_img/16pro.3.jpg",
        "/image/16pro_img/16pro.4.jpg"
    ]
},
{
  id: 6,
  name: "Apple iPhone 16 Pro Max",
  price: "$1199",
  camera: "48MP",
  storage: "256GB",
  battery: "4685mAh",
  colour: "Natural Titanium",
  description: "The iPhone 16 Pro Max has a stunning titanium design with a 6.9-inch Super Retina XDR screen that offers exceptional lighting and clarity. It is empowered by the advanced A18 Pro chip, offering exceptional performance. The Pro camera system includes a 48MP main, ultra wide 12MP sensor and a 5x optical magnification telephony, enabling extraordinary photos and video recordings, including the 4K Dolby Vision recording. The phone also supports charging with MagSafe, offers improved water and dust resistance, and operates with the secure iOS 18 system with Apple Intelligence, providing privacy and ease in use.",
  mainImage: "image/16promax_img/16promax.jpg",
  smallImageGroup: [
    "image/16promax_img/16promax.1.jpg",
    "image/16promax_img/16promax.2.jpg",
    "image/16promax_img/16promax.3.jpg",
    "image/16promax_img/16promax.4.jpg"
  ]
},
  {
    id: 7,
    name: "Google Pixel 9",
    price: "$799",
    camera: "50MP",
    storage: "256GB",
    battery: "4700mAh",
    colour: "Black Obsidian",
    description: "Google Pixel 9 comes equipped with advanced features like Gemini, an integrated AI assistant that improves daily tasks and offers powerful photo editing with Magic Editor. Its camera system shines with a wide 50 MP camera and a 48 MP ultrawide lens for stunning photos in any light, including low-light, macro and astrophotography photos. With the Google Tensor G4 chip and 12 GB of RAM, it offers high performance, a 6.3-inch bright screen with a 120Hz refresh frequency and a long-lasting battery. In addition, it includes security features such as satellite emergency connection and 7 years of system and security updates.",
    mainImage: "image/pixel9_img/pixel9.jpg",
    smallImageGroup: [
      "image/pixel9_img/pixel9.1.jpg",
      "image/pixel9_img/pixel9.2.jpg",
      "image/pixel9_img/pixel9.3.jpg",
      "image/pixel9_img/pixel9.4.jpg"
    ]
  },
  {
    id: 8,
    name: "Google Pixel 9 Pro",
    price: "$999",
    camera: "50MP",
    storage: "256GB",
    battery: "4700mAh",
    colour: "Black Obsidian",
    description: "Google Pixel 9 Pro is the most advanced model ever, with the powerful Google Tensor G4 chip, a triple camera system with professional magnification and excellent low light performance, as well as the Super Actua screen with high lighting and refreshment up to 120Hz. With Gemini's integrated artificial intelligence, Magic Editor for photo editing and unique features such as satellite emergency and temperature gauges, this phone brings together the latest technology with 7 years of updates for a smart and reliable experience.",
    mainImage: "image/pixel9pro_img/pixel9pro.jpg",
    smallImageGroup: [
      "image/pixel9pro_img/pixel9pro.1.jpg",
      "image/pixel9pro_img/pixel9pro.2.jpg",
      "image/pixel9pro_img/pixel9pro.3.jpg",
      "image/pixel9pro_img/pixel9pro.4.jpg"
    ]
  },
  {
    id: 9,
    name: "Google Pixel 9 Pro XL",
    price: "$1199",
    camera: "50MP",
    storage: "256GB",
    battery: "5060mAh",
    colour: "Hazel",
    description: "Google Pixel 9 Pro XL is designed for maximum performance, including the powerful Google Tensor G4 chip and 16 GB of RAM, to provide creativity and uninterrupted games. The triple camera system includes a 50 MP main lens, 48 MP and ultra wide 48 MP telephoto for professional level photos in each environment. With a bright Super Actua screen of 120Hz, Pixel also offers vivid views in direct sunlight. Integrated AI assistant, Gemini, improves user experience with smarter and faster features, while the battery lasts up to 100 hours with Extreme Battery Saver.",
    mainImage: "image/pixel9proxl_img/pixel9proxl.jpg",
    smallImageGroup: [
      "image/pixel9proxl_img/pixel9proxl.1.jpg",
      "image/pixel9proxl_img/pixel9proxl.2.jpg",
      "image/pixel9proxl_img/pixel9proxl.3.jpg",
      "image/pixel9proxl_img/pixel9proxl.4.jpg"
    ]
  },
  {
    id: 10,
    name: "Google Pixel 9 Pro Fold",
    price: "$1399",
    camera: "48MP",
    storage: "256GB",
    battery: "4650mAh",
    colour: "Obsidian",
    description: "Pixel 9 Pro Fold combines a stunning 8″ folding screen with Google’s most advanced artificial intelligence functions, powered by the Tensor G4 chip and Gemini assistant. Its elegant and practical design offers perfect multitasking with the features Split Screen and Drag-and-Drop, while the triple rear camera system gives extraordinary photos, from the ultra wide angle to low light shots. Options for handless photos and advanced editing tools like Magic Editor and Best Take make capturing and improving images easier than ever. With Face Unlock, 7 years of updates and advanced online protection, Pixel 9 Pro Fold is powerful and secure.",
    mainImage: "image/pixel9profold_img/pixel9profold.jpg",
    smallImageGroup: [
      "image/pixel9profold_img/pixel9profold.1.jpg",
      "image/pixel9profold_img/pixel9profold.2.jpg",
      "image/pixel9profold_img/pixel9profold.3.jpg",
      "image/pixel9profold_img/pixel9profold.4.jpg"
    ]
  },
  {
    id: 11,
    name: "Apple iPhone 11",
    price: "$499",
    camera: "12MP",
    storage: "128GB",
    battery: "3110mAh",
    colour: "Black",
    description: "The iPhone 11 is a sleek and powerful smartphone designed by Apple, featuring a 6.1-inch Liquid Retina HD display that delivers true-to-life colors and smooth performance. It is powered by the A13 Bionic chip, offering fast processing, efficient multitasking, and excellent battery life. The dual-camera system includes a 12MP wide and 12MP ultra-wide lens, enabling high-quality photos and 4K video recording with advanced features like Night mode and Portrait mode. With durable glass and aluminum construction, water and dust resistance (IP68), and support for Face ID and wireless charging, the iPhone 11 combines performance, style, and reliability in one device. It runs on iOS, ensuring access to the latest apps and updates from Apple.",
    mainImage: "image/11_img/11.jpg",
    smallImageGroup: [
      "image/11_img/11.1.jpg",
      "image/11_img/11.2.jpg",
      "image/11_img/11.3.jpg",
      "image/11_img/11.4.jpg"
    ]
  },
  {
    id: 12,
    name: "Apple iPhone 12",
    price: "$599",
    camera: "12MP",
    storage: "128GB",
    battery: "2815mAh",
    colour: "Blue",
    description: "The iPhone 12 is a stylish and powerful smartphone from Apple, featuring a 6.1-inch Super Retina XDR OLED display that delivers sharp contrast, vibrant colors, and excellent clarity. It is powered by the A14 Bionic chip, the first 5-nanometer chip in a smartphone, offering exceptional speed and energy efficiency. The dual-camera system includes 12MP wide and ultra-wide lenses, with Night mode on both cameras, Smart HDR 3, and 4K Dolby Vision HDR recording for stunning photos and videos. With a sleek flat-edge design made from aerospace-grade aluminum and Ceramic Shield front cover, the iPhone 12 is both durable and modern. It supports 5G connectivity for faster downloads and streaming, MagSafe for easy wireless charging and accessory attachment, and runs on iOS, providing a smooth and secure user experience.",
    mainImage: "image/12_img/12.jpg",
    smallImageGroup: [
      "image/12_img/12.1.jpg",
      "image/12_img/12.2.jpg",
      "image/12_img/12.3.jpg",
      "image/12_img/12.4.jpg"
    ]
  },
  {
    id: 13,
    name: "Poco X7 Pro",
    price: "$299",
    camera: "50MP",
    storage: "512GB",
    battery: "6000mAh",
    colour: "Black",
    description: "The newest POCO X series phone has the new Dimensity 8400-Ultra processor, which offers exceptional gaming and multitasking performance. It has a powerful 6000mAh battery with 90W HyperCharge for fast and reliable charging. The 1.5K 120Hz AMOLED CrystalRes screen provides vivid views, while the main 50MP camera with OIS captures high quality photos and videos. With dust and water resistance IP68, advanced LiquidCool 4.0 cooling technology and an elegant performance-based design, this smartphone sets new standards in power, durability and style.",
    mainImage: "image/x7pro_img/x7pro.jpg",
    smallImageGroup: [
      "image/x7pro_img/x7pro.1.jpg",
      "image/x7pro_img/x7pro.2.jpg",
      "image/x7pro_img/x7pro.3.jpg",
      "image/x7pro_img/x7pro.4.jpg"
    ]
  },
  {
    id: 14,
    name: "Poco F7 Pro",
    price: "$399",
    camera: "50MP",
    storage: "512GB",
    battery: "6000mAh",
    colour: "Black",
    description: "POCO F7 Pro releases maximum power with the flagship chip Snapdragon® 8 Gen 3, the massive 6000mAh fast charging battery 90W HyperCharge and the impressive 2K 120Hz Flow AMOLED screen. The device comes with 50MP dual camera with OIS and the Light Fusion 800 sensor for exceptional photos, advanced LiquidCool 4.0 cooling technology for thermal efficiency and ultrasonic finger sign sensor. With artificial intelligence capabilities such as AI Writing, Image Improvement and real-time translation, as well as IP68 resistance to water and dust, the POCO F7 Pro offers a flagship experience created for performance, creativity and durability.",
    mainImage: "image/f7pro_img/f7pro.jpg",
    smallImageGroup: [
      "image/f7pro_img/f7pro.1.jpg",
      "image/f7pro_img/f7pro.2.jpg",
      "image/f7pro_img/f7pro.3.jpg",
      "image/f7pro_img/f7pro.4.jpg"
    ]
  },
  {
    id: 15,
    name: "Poco X6 Pro",
    price: "$249",
    camera: "64MP",
    storage: "512GB",
    battery: "5000mAh",
    colour: "Black",
    description: "The POCO X6 Pro comes with a range of impressive features, combining a powerful AI 64 MP camera system and a 6.67″ AMOLED screen with a smooth refresh speed of 120 Hz for a comprehensive visual experience. The eight-core Mediatek Dimensity 8300 Ultra processor provides smooth performance, complemented by a massive 5000mAh battery that supports fast 67W charging across the Type-C PD. The fingerprint screen sensor offers a quick and secure unlocking experience with a single touch. This phone unfects advanced functionalities with an attractive design, which is perfect for those looking for a high-performance and stylish smartphone.",
    mainImage: "image/x6pro_img/x6pro.jpg",
    smallImageGroup: [
      "image/x6pro_img/x6pro.1.jpg",
      "image/x6pro_img/x6pro.2.jpg",
      "image/x6pro_img/x6pro.3.jpg",
      "image/x6pro_img/x6pro.4.jpg"
    ]
  },
  {
    id: 16,
    name: "Poco F6 Pro",
    price: "$349",
    camera: "50MP",
    storage: "512GB",
    battery: "5000mAh",
    colour: "Black",
    description: "Poco F6 Pro is a phone created to offer premium features at an affordable price. It comes with a stunning 6.67-inch AMOLED screen with a 120 Hz refresh speed, providing vivid colors and smooth movements. The power comes from the latest Snapdragon 8 series processor, accompanied by up to 12 GB of RAM and 512 GB of UFS 4.0 storage space, offering fast performance and ability to perform many tasks. The device features a versatile configuration with triple camera with a main 50MP sensor, ultra wide 8MP lenses and macro 2MP lenses, allowing high quality photos in different conditions. Moreover, it supports the 5G connection, a large 5000 mAh fast charging battery 120 W and an elegant Gorilla Glass 5 protection design.",
    mainImage: "image/f6pro_img/f6pro.jpg",
    smallImageGroup: [
      "image/f6pro_img/f6pro.1.jpg",
      "image/f6pro_img/f6pro.2.jpg",
      "image/f6pro_img/f6pro.3.jpg",
      "image/f6pro_img/f6pro.4.jpg"
    ]
  },
  {
    id: 17,
    name: "Samsung Galaxy A25",
    price: "$199",
    camera: "50MP",
    storage: "128GB",
    battery: "5000mAh",
    colour: "Yellow",
    description: "The Galaxy A25 is a stylish and powerful smartphone with a 6.5-inch Super AMOLED screen that gives vibrating views at a 120 Hz refresh speed and lighting up to 1000 nits. Its stylish design includes a versatile camera configuration, including a 50MP main camera, 8MP ultra wide and 2MP lenses, along with a 13MP front camera for stunning selfies. Directed by an eight-core processor, the device ensures smooth performance and high speed. The 5000 mAh battery offers up to 2 days of use and supports super fast charging. Security features include a side fingerprint sensor and Samsung Knox Vault for sensitive data protection.",
    mainImage: "image/a25_img/a25.jpg",
    smallImageGroup: [
      "image/a25_img/a25.1.jpg",
      "image/a25_img/a25.2.jpg",
      "image/a25_img/a25.3.jpg",
      "image/a25_img/a25.4.jpg"
    ]
  },
  {
    id: 18,
    name: "Samsung Galaxy A35",
    price: "$249",
    camera: "50MP",
    storage: "128GB",
    battery: "5000mAh", 
    colour: "Awesome Lemon",
    description: "The Galaxy A35 5G embodies a harmonious mix of style, innovation and security. Its premium glass rear and camera configuration highlight elegance, while the advanced 50 MP camera and improved sensor technology provide stunning and detailed photos and videos even in low light conditions. With a redesigned Infinity-O Super AMOLED screen that offers vivid colors and clear details, combined with a high refresh speed and exceptional shine, any visual experience is immersive and glamorous. Security is paramount to Samsung Knox Vault, protecting sensitive information with advanced encryption, while dust and water resistance with IP67 rating provides sustainability. With strong performance, prolonged battery life and trouble-free multitasking,The Galaxy A35 5G offers a quick and reliable experience.",
    mainImage: "image/a35_img/a35.jpg",
    smallImageGroup: [
      "image/a35_img/a35.1.jpg",
      "image/a35_img/a35.2.jpg",
      "image/a35_img/a35.3.jpg",
      "image/a35_img/a35.4.jpg"
    ]
  },
  {
    id: 19,
    name: "Samsung Galaxy A55",
    price: "$299",
    camera: "50MP",
    storage: "128GB",
    battery: "5000mAh",
    colour: "Awesome Navy",
    description: "The Galaxy A55 5G offers a harmonious mix of style, innovation and security. Its premium glass rear and camera configuration highlight elegance, while the advanced 50 MP camera and improved sensor technology provide stunning and detailed photos and videos even in low light conditions. With a redesigned Infinity-O Super AMOLED screen that offers vivid colors and clear details, combined with a high refresh speed and exceptional shine, any visual experience is immersive and glamorous. Security is paramount to Samsung Knox Vault, protecting sensitive information with advanced encryption, while dust and water resistance with IP67 rating provides sustainability. With strong performance, prolonged battery life and trouble-free multitasking,The Galaxy A55 5G offers a quick and reliable experience.",
    mainImage: "image/a55_img/a55.jpg",
    smallImageGroup: [
      "image/a55_img/a55.1.jpg",
      "image/a55_img/a55.2.jpg",
      "image/a55_img/a55.3.jpg",
      "image/a55_img/a55.4.jpg"
    ]
  },
  {
    id: 20,
    name: "Samsung Galaxy A26",
    price: "$249",
    camera: "50MP",
    storage: "128GB",
    battery: "5000mAh",
    colour: "Peach Pink",
    description: "The Samsung Galaxy A26 5G is a powerful and stylish smartphone that combines high performance with advanced features. The 6.7-inch Super AMOLED screen with FHD + resolution and up to 120Hz refreshment offers an excellent visual experience for video and games. The main 50 MP camera with optical stabilization (OIS) and 13 MP selfie cameras enable the capture of clear and detailed images. The Exynos 1380 processor and the 5000 mAh battery provide stable performance and long uninterrupted use. The device has a thin design of 7.7 mm with rear glass parts and is certified with IP67 for water and dust resistance. It also offers 6 operational system updates and 6 years of security updates, keeping your device safe and updated for a long time.",
    mainImage: "image/a26_img/a26.jpg",
    smallImageGroup: [
      "image/a26_img/a26.1.jpg",
      "image/a26_img/a26.2.jpg",
      "image/a26_img/a26.3.jpg",
      "image/a26_img/a26.4.jpg"
    ]
  },
  {
    id: 21,
    name: "Samsung Galaxy A36",
    price: "$299",
    camera: "50MP",
    storage: "128GB",
    battery: "5000mAh",
    colour: "Awesome Lavender",
    description: "The Samsung Galaxy A36 5G combines style and durability with a back of premium glass, thin design and flat side frame. It has a 6.7” FHD+ Super AMOLED screen with a refresh rate of 120Hz and 1,200 nits lighting, for quiet movement and clear visibility in illuminated environments. Powered by an Octa-core processor, ensures efficient performance for games, transmissions and multitasking. The 5,000mAh battery offers up to 29 hours of battery and comes with super fast 45W charging. Stay updated with 6 operating system updates and 6 years of security updates, while Samsung Knox Vault protects your data. The 12MP front camera also captures detailed selfies in low lighting, and with Gorilla Glass Victus+ and IP67 protection, is built to lengthen.",
    mainImage: "image/a36_img/a36.jpg",
    smallImageGroup: [
      "image/a36_img/a36.1.jpg",
      "image/a36_img/a36.2.jpg",
      "image/a36_img/a36.3.jpg",
      "image/a36_img/a36.4.jpg"
    ]
  },
  {
    id: 22,
    name: "Samsung Galaxy A56",
    price: "$349",
    camera: "50MP",
    storage: "128GB",
    battery: "5000mAh",
    colour: "Awesome Graphite",
    description: "The Samsung Galaxy A56 5G combines an elegant design with powerful features, including a 6.7-inch FHD+ Super AMOLED screen with Vision Booster for stunning views, a 50 MP main camera with advanced Nightography and Object Eraser for perfect photos, as well as an improved Octa-core processor for uninterrupted performance. With a stable 5,000 mAh battery, strong Corning® Gorilla® Glass Victus®+ and IP67 water resistance, it is built to lengthen. Furthermore, it provides you with 6 years of security updates, Samsung Knox Vault for advanced privacy protection and easy file sharing with Quick Share.",
    mainImage: "image/a56_img/a56.jpg",
    smallImageGroup: [
      "image/a56_img/a56.1.jpg",
      "image/a56_img/a56.2.jpg",
      "image/a56_img/a56.3.jpg",
      "image/a56_img/a56.4.jpg"
    ]
  }
    
];