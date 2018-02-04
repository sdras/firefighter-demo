# 🚨 Firefighter Offline Demo

![Firefighter Offline Demo](https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/firefighter-sm.gif 'Firefighter Offline Demo')

There’s a firehouse near where I live, and they have some sufficiently complex systems to help make sure that everything is online and functioning. I went out to their station to learn about how everything works and see if there was anything I could build that might help. Here’s what I learned:

When the fire truck goes out, it has to communicate with a dispatcher, which will help facilitate if they need more water, supplies, or backup.

The app is very simple, purposefully so- because they want everyone to be able to use it, quickly, at a glance, and there aren’t that many things they might need. For their use case, what they created is perfect.

But what happens if they're all sudden offline? What happens if they can't communicate?

Right now, currently, it fails. They’re just hosed. Get it? Hosed. `dad joke alert`

So, here’s our opportunity. What I did was make a project that uses the following technologies to solve this problem for them:

* service workers
* `backgroundSync`
* `client.postMessage`

Additionally:

* Vue.js

Live demo at
[https://sdras.github.io/firefighter-demo/](https://sdras.github.io/firefighter-demo/)

Articles explaining the demo will be available soon.
