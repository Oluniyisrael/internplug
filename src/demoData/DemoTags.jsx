// /demoData/DemoTags.js
// const DemoTags = [
//     { _id: "1", name: "laptop-repair" },
//     { _id: "2", name: "phone-repair" },
//     { _id: "3", name: "pc-repair" },
//     { _id: "4", name: "water-damage" },
//     { _id: "5", name: "battery" },
//     { _id: "6", name: "screen" },
//     { _id: "7", name: "maintenance" },
//     { _id: "8", name: "troubleshooting" },
//     { _id: "9", name: "hardware" },
//     { _id: "10", name: "data-recovery" },
//     { _id: "11", name: "emergency" },
//     { _id: "12", name: "tips" },
//     { _id: "13", name: "protection" },
//     { _id: "14", name: "prevention" },
//     { _id: "15", name: "upgrades" },

import DemoBlogs from "./DemoBlogs"

// ]
const DemoTags = Array.from(
    new Set(DemoBlogs.flatMap(item => item.tags))
)
    .sort((a, b) => a.localeCompare(b))
    .map(tag => ({ name: tag }))

export default DemoTags