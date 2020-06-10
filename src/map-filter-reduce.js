
import inventory, { categories } from './inventory'

function countCategory(items, category) {
  return items.reduce((total, item) => {
    return item.category === category ? total += 1 : total
  }, 0)
}

categories.forEach((cat) => {
  console.log(cat, countCategory(inventory, cat))
})

function filterOnCategory(items, category) {
  return items.filter((item) => {
    return item.category === category
  })
}

categories.forEach((cat) => {
  console.log(cat, filterOnCategory(inventory, cat))
})

function mapInventoryToString(items) {
  return items.map((item) => {
    return `${item.name} $${item.price}`
  })
}

mapInventoryToString(inventory).forEach((item) => {
  console.log(item)
})