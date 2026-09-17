import DemoBlogs from "./DemoBlogs"

const DemoBlogCategories = DemoBlogs.map(item => { return { name: item.category} })

export default DemoBlogCategories
