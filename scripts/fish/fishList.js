
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { mostHolyFish, soldierFish, nonHolyFish } from "./fishDataProvider.js"
import FishComponent from "./fish.js"

const FishListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishListArticle")

  const mostHoly = mostHolyFish()
  const soldier = soldierFish()
  const nonHoly = nonHolyFish()


  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="fishList">
          ${
            mostHoly.map(
              (fish) => {
              return FishComponent(fish)
            }).join("")
          }
          ${
            soldier.map(
              (fish) => {
              return FishComponent(fish)
            }).join("")
          }
          ${
            nonHoly.map(
              (fish) => {
              return FishComponent(fish)
            }).join("")
          }
      </section>
  `
}

export default FishListComponent