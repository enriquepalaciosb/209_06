const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')

app.use( express.static( "public" ) );

const movies = [
    {title: 'Wild At Heart', year: '1993' },
    {title: 'Moonstruck', year: '1994' },
    {title: 'Raising Arizona', year: '1995' }
]

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]
const user = {
    firstName: 'Good',
    lastName: 'Student',
    admin: true
}

app.get('/', (req, res) => {
    res.render('pages/index', {
        user
    })
})

app.get('/about', (req, res) => {
    res.render('pages/about', {
        user
    })
})

app.get('/movies', (req, res) => {
    res.render('pages/movies', {
        movies: movies
    })
})

app.get('/articles', (req, res) => {
    res.render('pages/articles', {
        articles: posts
    })
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})

// adding a new movies.ejs
// which uses the same footer and head files as the other pages do.
// that displays the 3 movies similar to how the articles pages
// does it.
// add a new app.get route in app.js
// extend the nav menu in footer.ejs to show a movies page.
// When you run your app, you should be able to navigate across
// 4 pages, including the new movies page.