import initializeDetailButtonEvents from './fish/dialogs.js'
import addMouseOverEventListeners from './fish/highlight.js'
import addMouseOverTipBorder from './tips/tipBorder.js'
import FishListComponent from './fish/fishList.js'
import TipListComponent from './tips/tipList.js'

FishListComponent()
TipListComponent()
addMouseOverEventListeners()
addMouseOverTipBorder()
initializeDetailButtonEvents()
