// Great Lakes outline data (simplified coordinates)
const greatLakes = [
    {
        name: "Lake Superior",
        coordinates: [
            [220, 80], [380, 60], [480, 100], [520, 150], [500, 200],
            [420, 220], [320, 210], [240, 180], [180, 140], [220, 80]
        ]
    },
    {
        name: "Lake Michigan",
        coordinates: [
            [280, 250], [320, 230], [350, 260], [370, 320], [380, 400],
            [360, 480], [320, 520], [280, 500], [260, 450], [250, 380],
            [260, 320], [280, 250]
        ]
    },
    {
        name: "Lake Huron",
        coordinates: [
            [420, 240], [500, 220], [550, 250], [580, 300], [570, 360],
            [540, 400], [500, 420], [460, 400], [440, 360], [430, 320],
            [420, 280], [420, 240]
        ]
    },
    {
        name: "Lake Erie",
        coordinates: [
            [500, 440], [540, 430], [620, 445], [700, 460], [740, 470],
            [740, 490], [680, 500], [600, 495], [520, 485], [500, 470],
            [500, 440]
        ]
    },
    {
        name: "Lake Ontario",
        coordinates: [
            [740, 490], [820, 480], [880, 485], [900, 500], [890, 520],
            [840, 530], [780, 525], [740, 515], [740, 490]
        ]
    }
];

// Major ports
const ports = [
    // Lake Superior
    { name: "Duluth", x: 240, y: 180, lake: "Superior" },
    { name: "Thunder Bay", x: 360, y: 90, lake: "Superior" },
    { name: "Sault Ste. Marie", x: 500, y: 210, lake: "Superior" },
    { name: "Marquette", x: 340, y: 200, lake: "Superior" },

    // Lake Michigan
    { name: "Milwaukee", x: 300, y: 410, lake: "Michigan" },
    { name: "Chicago", x: 290, y: 500, lake: "Michigan" },
    { name: "Green Bay", x: 310, y: 290, lake: "Michigan" },
    { name: "Traverse City", x: 320, y: 320, lake: "Michigan" },

    // Lake Huron
    { name: "Alpena", x: 460, y: 340, lake: "Huron" },
    { name: "Port Huron", x: 510, y: 430, lake: "Huron" },
    { name: "Mackinaw City", x: 430, y: 280, lake: "Huron" },

    // Lake Erie
    { name: "Detroit", x: 520, y: 460, lake: "Erie" },
    { name: "Toledo", x: 560, y: 475, lake: "Erie" },
    { name: "Cleveland", x: 640, y: 485, lake: "Erie" },
    { name: "Buffalo", x: 730, y: 480, lake: "Erie" },
    { name: "Erie", x: 690, y: 475, lake: "Erie" },

    // Lake Ontario
    { name: "Rochester", x: 800, y: 510, lake: "Ontario" },
    { name: "Toronto", x: 770, y: 505, lake: "Ontario" },
    { name: "Kingston", x: 880, y: 505, lake: "Ontario" }
];

// Historical voyages with routes
const voyages = [
    // 1850s - Early steamship era
    { id: 1, year: 1852, vessel: "Northern Indiana", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain" },
    { id: 2, year: 1855, vessel: "Lady Elgin", from: "Milwaukee", to: "Chicago", type: "passenger", cargo: "passengers" },
    { id: 3, year: 1858, vessel: "Western Metropolis", from: "Detroit", to: "Chicago", type: "cargo", cargo: "manufactured goods" },

    // 1870s - Expansion era
    { id: 4, year: 1871, vessel: "Alpena", from: "Alpena", to: "Chicago", type: "cargo", cargo: "lumber" },
    { id: 5, year: 1873, vessel: "City of Detroit", from: "Detroit", to: "Cleveland", type: "passenger", cargo: "passengers" },
    { id: 6, year: 1875, vessel: "Riverside", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "iron ore" },
    { id: 7, year: 1878, vessel: "Marquette", from: "Marquette", to: "Toledo", type: "cargo", cargo: "iron ore" },

    // 1890s - Golden age
    { id: 8, year: 1891, vessel: "Western Reserve", from: "Duluth", to: "Cleveland", type: "cargo", cargo: "iron ore" },
    { id: 9, year: 1893, vessel: "Milwaukee", from: "Milwaukee", to: "Sault Ste. Marie", type: "cargo", cargo: "grain" },
    { id: 10, year: 1895, vessel: "Chicora", from: "Milwaukee", to: "Sault Ste. Marie", type: "passenger", cargo: "passengers" },
    { id: 11, year: 1898, vessel: "Pennsylvania", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain" },

    // 1900s-1910s
    { id: 12, year: 1902, vessel: "Bannockburn", from: "Port Huron", to: "Duluth", type: "cargo", cargo: "coal" },
    { id: 13, year: 1905, vessel: "Iosco", from: "Cleveland", to: "Duluth", type: "cargo", cargo: "general freight" },
    { id: 14, year: 1909, vessel: "Clarion", from: "Chicago", to: "Buffalo", type: "cargo", cargo: "grain" },
    { id: 15, year: 1913, vessel: "Charles S. Price", from: "Milwaukee", to: "Kingston", type: "cargo", cargo: "coal" },
    { id: 16, year: 1913, vessel: "James Carruthers", from: "Duluth", to: "Toronto", type: "cargo", cargo: "wheat" },

    // 1920s-1930s
    { id: 17, year: 1924, vessel: "Senator", from: "Port Huron", to: "Chicago", type: "cargo", cargo: "automobiles" },
    { id: 18, year: 1927, vessel: "Kamloops", from: "Thunder Bay", to: "Toledo", type: "cargo", cargo: "grain" },
    { id: 19, year: 1929, vessel: "Milwaukee Clipper", from: "Milwaukee", to: "Cleveland", type: "passenger", cargo: "passengers" },
    { id: 20, year: 1933, vessel: "George M. Cox", from: "Duluth", to: "Buffalo", type: "cargo", cargo: "iron ore" },

    // 1940s-1950s
    { id: 21, year: 1940, vessel: "Anna C. Minch", from: "Chicago", to: "Detroit", type: "cargo", cargo: "coal" },
    { id: 22, year: 1942, vessel: "Cedarville", from: "Sault Ste. Marie", to: "Chicago", type: "cargo", cargo: "limestone" },
    { id: 23, year: 1945, vessel: "Noronic", from: "Detroit", to: "Toronto", type: "passenger", cargo: "passengers" },
    { id: 24, year: 1949, vessel: "Eastcliffe Hall", from: "Duluth", to: "Cleveland", type: "cargo", cargo: "iron ore" },
    { id: 25, year: 1950, vessel: "Carl D. Bradley", from: "Marquette", to: "Buffalo", type: "cargo", cargo: "limestone" }
];

// Historical shipwrecks
const wrecks = [
    { name: "Edmund Fitzgerald", year: 1975, x: 360, y: 150, lake: "Superior", casualties: 29, cause: "Storm" },
    { name: "Lady Elgin", year: 1860, x: 305, y: 380, lake: "Michigan", casualties: 300, cause: "Collision" },
    { name: "Eastland", year: 1915, x: 292, y: 502, lake: "Michigan", casualties: 844, cause: "Capsized" },
    { name: "Carl D. Bradley", year: 1958, x: 330, y: 250, lake: "Michigan", casualties: 33, cause: "Storm" },

    { name: "Alpena", year: 1880, x: 470, y: 350, lake: "Huron", casualties: 60, cause: "Storm" },
    { name: "Daniel J. Morrell", year: 1966, x: 490, y: 320, lake: "Huron", casualties: 28, cause: "Broke in half" },
    { name: "Cedarville", year: 1965, x: 445, y: 270, lake: "Huron", casualties: 10, cause: "Collision" },

    { name: "Atlantic", year: 1852, x: 670, y: 465, lake: "Erie", casualties: 250, cause: "Collision" },
    { name: "G.P. Griffith", year: 1850, x: 620, y: 470, lake: "Erie", casualties: 286, cause: "Fire" },
    { name: "Marquette & Bessemer No. 2", year: 1909, x: 705, y: 472, lake: "Erie", casualties: 36, cause: "Storm" },
    { name: "Steamship Erie", year: 1841, x: 650, y: 480, lake: "Erie", casualties: 175, cause: "Fire" },

    { name: "Bay State", year: 1862, x: 830, y: 495, lake: "Ontario", casualties: 0, cause: "Grounded" },
    { name: "Comet", year: 1861, x: 860, y: 510, lake: "Ontario", casualties: 15, cause: "Collision" },
    { name: "Noronic", year: 1949, x: 775, y: 508, lake: "Ontario", casualties: 119, cause: "Fire" }
];
