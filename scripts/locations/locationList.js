import { useLocations } from "./locationDataProvider.js";
import LocationComponent from "./location.js";



const LocationListComponent = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".locationsArticle")
  const locations = useLocations()

  let allLocationsHTML = ""

  for (const location of locations) {
    const locationHTML = LocationComponent(location)
    allLocationsHTML += locationHTML
  }

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
      <section class="locations">
          ${allLocationsHTML}
      </section>
  `
}

export default LocationListComponent