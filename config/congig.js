const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1git :27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected!'))
  .catch((err)=>{
    console.log(err)
  })