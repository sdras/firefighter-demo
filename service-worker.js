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
  console.log(
    `%c sync event fired: request ${type}`,
    'font-size: 16px; background: #00449e; color: #cdecff; border-radius: 5px; padding: 5px 25px 5px 10px; line-height: 30px;'
  )
  event.waitUntil(fetchResource(type))
})

const fetchResource = (resource, event) => {
  console.log()
  console.log(
    `%c getting response info: ${resource}`,
    'font-size: 16px; background: #5e2ca5; color: #d3b9f3; border-radius: 5px; padding: 5px 25px 5px 10px; line-height: 30px;'
  )
  fetch('//jsonplaceholder.typicode.com/users')
    .then(response => {
      return response
    })
    .then(text => {
      console.log(
        '%c Request successful:',
        'font-size: 16px; background: #137752; color: #9eebcf; border-radius: 5px; padding: 5px 25px 5px 10px; line-height: 30px;'
      )
      console.log(text)
    })
    .catch(error => {
      console.log('Request failed', error)
    })
}
