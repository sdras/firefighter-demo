self.addEventListener('install', event => {
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  if (self.clients && clients.claim) {
    clients.claim()
  }
})

self.addEventListener('sync', event => {
  let type = event.tag.split('-')[1]
  // console.log(`sync event fired: request ${type}`)
  // vm.syncInfo.fired = `sync event fired: request ${type}`
  event.waitUntil(fetchResource(type))
})

const fetchResource = (resource, event) => {
  console.log(`getting response info: ${resource}`)
  fetch('//jsonplaceholder.typicode.com/users')
    .then(function(response) {
      return response.status
    })
    .then(function(text) {
      console.log('Request successful, status:', text)
    })
    .catch(function(error) {
      console.log('Request failed', error)
    })
}

self.addEventListener('sync', event => {
  event.waitUntil(
    (async function() {
      // Exit early if we don't have access to the client.
      // Eg, if it's cross-origin.
      if (!event.clientId) return

      // Get the client.
      const client = await clients.get(event.clientId)
      // Exit early if we don't get the client.
      // Eg, if it closed.
      if (!client) return

      // Send a message to the client.
      client.postMessage({
        msg: 'Hey I just got a fetch from you!'
      })
    })()
  )
})
