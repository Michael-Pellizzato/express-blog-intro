/*Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman*/

const express = require('express')
const app = express()
const port = 3000
app.use(express.static("images"))

app.get('/', (req, res) => {
    const post = [
        {
            titolo: "Ciambellone Soffice",
            contenuto: "Un dolce classico e soffice, perfetto per la colazione o la merenda. Semplice da preparare e sempre gradito.",
            immagine: "ciambellone.jpeg",
            tags: ["dolce", "colazione", "ciambellone", "tradizionale"]
          },
          {
            titolo: "Cracker alla Barbabietola",
            contenuto: "Snack croccanti e colorati grazie alla barbabietola. Perfetti per un aperitivo originale e sano.",
            immagine: "cracker_barbabietola.jpeg",
            tags: ["snack", "salato", "barbabietola", "aperitivo"]
          },
          {
            titolo: "Pane Fritto Dolce",
            contenuto: "Una ricetta semplice ma irresistibile: pane fritto dolce, croccante fuori e morbido dentro.",
            immagine: "pane_fritto_dolce.jpeg",
            tags: ["dolce", "frittura", "pane", "tradizione"]
          },
          {
            titolo: "Pasta alla Barbabietola",
            contenuto: "Un primo piatto colorato e cremoso con barbabietola e formaggio per un tocco gourmet.",
            immagine: "pasta_barbabietola.jpeg",
            tags: ["primo", "pasta", "barbabietola", "colorato"]
          },
          {
            titolo: "Torta Paesana",
            contenuto: "Un dolce tradizionale rustico a base di pane raffermo, cioccolato e latte. Una vera delizia casalinga.",
            immagine: "torta_paesana.jpeg",
            tags: ["dolce", "tradizionale", "cioccolato", "pane"]
          }
    ];
    res.type('json').send(post)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })