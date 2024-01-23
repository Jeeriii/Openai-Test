// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "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"
// });

// const openFun = async() => {
//   const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{"role": "user", "content": "hello World",}],
//     max_tokens:30
//   });
//   console.log(chatCompletion.choices[0].message.content);
// }

// openFun();

require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})