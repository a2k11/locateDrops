const user = {
  _id: "1",
  name: "Adam",
  email: "adam.kaewell@gmail.com",
  picture: "https://cloudinary.com/asdf"
}

module.exports = {
  Query: {
    me: () => user
  }
}