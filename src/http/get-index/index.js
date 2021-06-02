const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Liam Coleman', // ←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Software Engineer',
    location: 'Philadelphia, PA',
    bio: 'I am a college student. I am originally from PA. I am currently working to become a computer scientist. I love anything that has to with technology.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'liam@megster.com',
    twitter: '_dogdroid',
    // linkedin: 'your-linkedin-name',
    instagram: 'dogdroid',
    // facebook: 'your-facebook-name',

    /**
     * Layout
     */
    // photographer: 'Ivana Cajina',
    // service: 'Unsplash',
    // credit: 'https://unsplash.com/@von_co',
    // image: staticAssetsHelper('background.jpg')

    photographer: 'Liam Coleman',
    service: 'Twitter',
    credit: 'https://twitter.com/_dogdroid',
    image: staticAssetsHelper('liam.jpg')

    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body
  }
}
