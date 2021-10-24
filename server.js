// TODO: Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO: Connect to database

// TODO: POST /api/movies accepts a new movie and adds it to the movies table.
app.post("/api/movies", (req, res) => {
  const{movie_name} =req.body;
  console.log(movie_name);
  db.query(`Insert into movies(movie_name)
  values(?);
  `,movie_name,(err, result) => {
    if (err) {
      console.log(err);
      res.json("ERROR");
    }else{
      res.json(result);
    }
  });
});

// TODO: GET /api/movies responds with array containing all movie data.
app.get("/api/movies", (req, res) => {});

// TODO: DELETE /api/movies/1 should delete movie where id = 1 and send a
// response to indicate if movie was removed successfully.
app.delete("/api/movies/:id", (req, res) => {});

// TODO: GET/ api/reviews should read list of all reviews and associated movie name using LEFT JOIN
app.get("/api/reviews", (req, res) => {});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
