import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"



const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}







document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("walker")) {

            const [, walkerId] = itemClicked.id.split("--")
            let chosenWalker = null
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    chosenWalker = walker
                }


            }

            let walkerC = []

            for (const walkerCity of walkerCities) {
                if (walkerCity.walkerId === chosenWalker.id) {

                    for (const city of cities) {

                        if (city.id === walkerCity.cityId) {
                            walkerC.push(city.name)
                        }
                    }

                }
            }

            window.alert(`${chosenWalker.name} works in ${walkerC}`)

        }

    }

)

