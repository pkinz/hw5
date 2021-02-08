function levelOfServiceFunction(ride) {
  let levelOfServiceVariable
  if (ride.length > 1) {
    levelOfServiceVariable = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfServiceVariable = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfServiceVariable = 'Noober XL'
  } else {
    levelOfServiceVariable = 'Noober X'
  }
  return levelOfServiceVariable
}

function renderRides(ridesArray) {
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfServiceFunction(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfServiceFunction(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE

    let allRidesButton = document.querySelector('#all-filter')
    allRidesButton.addEventListener('click', async function(event) {
      event.preventDefault()
      document.querySelector('.rides').innerHTML = ''
      let response = await fetch(`https://kiei451.com/api/rides.json`)
      let ridesArray = await response.json()
      renderRides(ridesArray)
      console.log(ridesArray) 
    })

    let purpleRidesButton = document.querySelector('#noober-purple-filter')
    purpleRidesButton.addEventListener('click', async function(event) {
      event.preventDefault()
      document.querySelector('.rides').innerHTML = ''
      let response = await fetch(`https://kiei451.com/api/rides.json`)
      let ridesArray = await response.json()
      let purpleArray = []
      for (z=0; z<ridesArray.length; z++){
        let ride=ridesArray[z]
        if (levelOfServiceFunction(ride) == "Noober Purple"){
          purpleArray.push(ride)
        }
      }
      renderRides(purpleArray)
    })

    let poolRidesButton = document.querySelector('#noober-pool-filter')
    poolRidesButton.addEventListener('click', async function(event) {
      event.preventDefault()
      document.querySelector('.rides').innerHTML = ''
      let response = await fetch(`https://kiei451.com/api/rides.json`)
      let ridesArray = await response.json()
      let poolArray = []
      for (y=0; y<ridesArray.length; y++){
        let ride=ridesArray[y]
        if (levelOfServiceFunction(ride) == "Noober Pool"){
          poolArray.push(ride)
        }
      }
      renderRides(poolArray)
    })

    let xlRidesButton = document.querySelector('#noober-xl-filter')
    xlRidesButton.addEventListener('click', async function(event) {
      event.preventDefault()
      document.querySelector('.rides').innerHTML = ''
      let response = await fetch(`https://kiei451.com/api/rides.json`)
      let ridesArray = await response.json()
      let xlArray = []
      for (x=0; x<ridesArray.length; x++){
        let ride=ridesArray[x]
        if (levelOfServiceFunction(ride) == "Noober XL"){
          xlArray.push(ride)
        }
      }
      renderRides(xlArray)
    })

    let xRidesButton = document.querySelector('#noober-x-filter')
    xRidesButton.addEventListener('click', async function(event) {
      event.preventDefault()
      document.querySelector('.rides').innerHTML = ''
      let response = await fetch(`https://kiei451.com/api/rides.json`)
      let ridesArray = await response.json()
      let xArray = []
      for (w=0; w<ridesArray.length; w++){
        let ride=ridesArray[w]
        if (levelOfServiceFunction(ride) == "Noober X"){
          xArray.push(ride)
        }
      }
      renderRides(xArray)
    })


})