const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'})

        if(req.url === '/') {
            fs.readFile(path.join(__dirname, 'templates', 'index.html'), 'utf-8', (err, conten) => {
                if(err) throw err
                res.end(conten)
            })
        } else if(req.url === '/about') {
            fs.readFile(path.join(__dirname, 'templates', 'about.html'), 'utf-8', (err, conten) => {
                if(err) throw err
                res.end(conten)
            })
        } else if(req.url === '/contact') {
            fs.readFile(path.join(__dirname, 'templates', 'contact.html'), 'utf-8', (err, conten) => {
                if(err) throw err
                res.end(conten)
            })
        }

    } else if(req.method === 'POST') {
        const name = []

        req.on('data', data => {
            name.push(Buffer.from(data))
        })

        req.on('end', () => {
            const msg = name.toString().split('=')[1]
            res.end(`Name successfully added: ${msg}`)
        })

    }
})

server.listen(3000, () => {
    console.log('First server start')
})

