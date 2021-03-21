const express = require("express")

const app = express();

const page = `
<html>
<head>
<title>Erik Hendrikson</title>
</head>
<body>
<h1>Did you hear about the Italian Chef that died?</h1>
<p>he pasta way</p>
</body>
</html>
`
app.get('/', function (request, response){
    response.send(page)
})

const port = process.env.PORT || 3000

app.listen(port, console.log(`listening on port ${port}`))