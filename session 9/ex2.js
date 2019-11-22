const url =
  "https://reqres.in/api/users?page=2&fbclifdafnenf7fdf67sfdDJEy434235435"

const fetchPromise = new Promise((resolve, reject) => {
  resolve(fetch(url))
});
gotData = () => {}
fetchPromise
  .then(connection => {
    console.log("Connected")
    console.log(connection)
    return connection.json()
  })
  .then(respone => {
    console.log(respone.data)
  })