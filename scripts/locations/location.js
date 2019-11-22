const LocationComponent = (location) => {
  return `
  <section class="location">
  <h3>${location.location}</h3>
  <div>
    <button id="button--location${location.num}">Details</button>
  </div>

  <dialog class="dialog--fish" id="details--location${location.num}">
    <div>Country: ${location.country}</div>
    <div>Long, Lat: ${location.long}</div>

    <button class="btn--close" id="close-location${location.num}">Close Dialog</button>
  </dialog>
  </section>
  `
}

export default LocationComponent