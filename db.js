const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

  // criar a tabela

  db.run(`
      CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `)

  // inserir dados na tabela
    // const query = (`
    //   INSERT INTO ideas(
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    //   ) VALUES(?,?,?,?,?);
    // `)

    // const values = [
    //   "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //   "Curso de Programação",
    //   "Estudo",
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate praesentium libero reiciendis voluptatem, molestiae dolorem incidunt error tempora ipsam reprehenderit, alias quidem deleniti? Beatae possimus quaerat officia, voluptate eos accusamus.",
    //   "https://google.com"
    // ]


    // db.run(query, values, function(err) {
    //   if (err) return console.log(err);
    //   console.log(this);
    // })
    
  // deletar um dado na tabela

    // db.run(`DELETE FROM ideas WHERE id = ?`, [1], function(err) {
    //   if (err) return console.log(err);
    //   console.log("DELETE", this);
    // })

  // consultar dados na tabela

  // db.all(`SELECT * FROM ideas`, function(err, rows){
  //   if(err) return console.log(err);
  //   console.log(rows);
  // })



})

module.exports = db