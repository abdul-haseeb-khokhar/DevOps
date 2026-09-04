const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.get('/health', (req, res) => {
    res.status(200).json({status: 'ok'})
})


app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`)
})

