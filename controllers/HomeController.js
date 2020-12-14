
exports.index = (req, res) => {
    // res.send('HomeCOntroller index')
    res.render('home/index.ejs')

    let data = {
        title: 'Index Page',
        message: 'Welcome to Homepage',

    }

    req.render('home/index.ejs', data)


}


exports.about = (req, res) => {
    // res.send('HomeCOntroller index')
    res.render('home/index.ejs')

    let data = {
        title: 'Index Page',
        message: 'Welcome to Homepage',
        name: 'Tokyo Taro'

    }

    req.render('home/index.ejs', data)


}

exports.items = (req, res) => {
    // res.send('HomeCOntroller index')

    let items = [
        { neme: 'apple', price: 150 },
        { neme: 'apple', price: 150 },
        { neme: 'apple', price: 150 },
    ]

    let data = {
        items: items,

    }
    // res.render('home/index.ejs')

    // // let data ={
    // //     title: 'Index Page',
    // //     message: 'Welcome to Homepage',
    // //     name: 'Tokyo Taro'

    // }

    req.render('home/index.ejs', data)


}

