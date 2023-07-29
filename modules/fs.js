const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, "templates"), err => {
//     if(err) throw new Error()

//     console.log("Folder was created successfull")
// })

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw new Error()

//     console.log("Notes folder created")
// })

fs.writeFile(path.join(__dirname, "notes", "july.txt"), "Learning new course NodeJS", err => {
    if(err) throw new Error()

    console.log("file was created")

    fs.appendFile(path.join(__dirname, 'notes', 'july.txt'), ' and microservice project', err => {
        if(err) throw new Error()

        console.log('Create new course')
    })
})

fs.readFile(path.join(__dirname, 'notes', 'july.txt'), (err, data) => {
    if(err) throw new Error

    console.log(data)
})