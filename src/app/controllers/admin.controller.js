const result = require("../model/Result.model");

class AdminController {
  index(req, res) {
    res.send("show");
  }

  create(req, res) {
    res.render("create");
  }

  qcreate(req, res) {
    result.create(req.body);
    res.redirect("/admin/result");
  }

  result(req, res) {
    result.find({}, function (err, result) {
      res.render("result", { result });
    });
  }

  qresult(req, res) {
    result.create(req.body);
    res.redirect("/admin/result");
  }

  update(req, res) {
    let id = req.params.id;
    result.findById(id, (err, result) => {
      if (err || !result) {
        res.redirect("/");
      } else {
        res.render("update", {
          result: result,
        });
      }
    });
  }
  qupdate(req, res) {
    result.findByIdAndUpdate(req.body);
    res.redirect("/admin/result");
  }

  delete(req, res) {
    const id = req.body.id;
    result
      .findByIdAndRemove(id)
      .exec()
      .then(() => res.redirect("/admin/result"));
  }
}

module.exports = new AdminController();
