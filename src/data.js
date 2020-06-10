import data from './data.json'

const getTotalPrice = () => {
data.map(() => {})

}
const categories = data.map((obj) => {return obj.category} )

// Make an object where each key is a category name
const categoryObjects = categories.reduce((obj, cat) => {
    obj[cat] = 0
    return obj
  }, {}) // !!! Be sure to define the initial value as an Object!
  // Make an arr array of the keys

const categoriesUnique = Object.keys(categoryObjects)

export const categoriesCount = categories.reduce((obj, cat) => {
    if (obj[cat] === undefined) {
      obj[cat] = 1
    } else {
      obj[cat] += 1
    }

  return obj
}, {}) 
console.log('****')
export const categoriesArray = categoriesUnique.reduce((acc, cat) => {
  console.log('acc',acc)
  console.log('cat',cat)
  acc.push({name:cat,count:categoriesCount[cat]})
return acc
},[])

export default categoriesUnique
export {categories}
