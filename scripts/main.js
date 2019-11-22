import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import addMouseOverTipBorder from './tipBorder.js'
import { useFish } from './fishDataProvider.js'
import FishListComponent from './fishList.js'

// initializeDetailButtonEvents()
FishListComponent()
addMouseOverEventListeners()
addMouseOverTipBorder()

const allOfTheFish = useFish()



for (const fish of allOfTheFish) {
  console.log("individual fish:", fish)
}
