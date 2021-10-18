const express = require("express")
const mongoose = require("mongoose")
const app = express()

const PORT = 4000

app.use(express.json())
app.use(require("./routes"))

const start = async () => {
try {
  await mongoose.connect(
    "mongodb+srv://user:code@cluster0.pyjlp.mongodb.net/twitter?retryWrites=true&w=majority")
  console.log("Успешное подключение")
  app.listen(PORT, () => {
    console.log("server has been started")
  })
  }catch (e) {
  console.log("Ошибка в подключении")
}
}
start()