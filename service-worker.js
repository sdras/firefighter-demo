self.addEventListener('install', function(event) {
  self.skipWaiting()
})

self.addEventListener('activate', function(event) {
  if (self.clients && clients.claim) {
    clients.claim()
  }
})

self.addEventListener('sync', function(event) {
  var type = event.tag.split('-')[1]
  console.log(`sync event fired: request ${type}`)
  // vm.syncInfo.fired = `sync event fired: request ${type}`
  event.waitUntil(fetchResource(type))
})

function fetchResource(resource) {
  console.log(`getting response info: ${resource}`)
  fetch('//jsonplaceholder.typicode.com/users')
    .then(function(response) {
      return response
    })
    .then(function(text) {
      console.log('Request successful', text)
    })
    .catch(function(error) {
      console.log('Request failed', error)
    })
}
