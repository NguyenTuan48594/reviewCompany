class HomeController {
  index(req, res) {
    res.send("show");
  }
}

module.exports = new HomeController();
