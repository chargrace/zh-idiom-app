// Import app module from parent directory using commonJS notation
import app from '../app'

const port = 4000;

// start server and listen on defined port

app.listen(port, () => {
  // log a message when server is successful
  console.log(`App listening at http://localhost:${port}`);
});
