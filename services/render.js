const axios = require("axios");

exports.usermindrender = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("admin", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.italokmindrender = (req, res) => {
  axios
    .get("http://localhost:3000/api/italok")
    .then(function (response) {
      res.render("table_1", { italok: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.italokmindrenderadmin = (req, res) => {
  axios
    .get("http://localhost:3000/api/italok")
    .then(function (response) {
      res.render("products", { italok: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.kavekmindrender = (req, res) => {
  axios
    .get("http://localhost:3000/api/kavek")
    .then(function (response) {
      res.render("table_2", { kavek: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.kavekmindrenderadmin = (req, res) => {
  axios
    .get("http://localhost:3000/api/kavek")
    .then(function (response) {
      res.render("products", { kavek: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.sutemenyekmindrender = (req, res) => {
  axios
    .get("http://localhost:3000/api/sutemenyek")
    .then(function (response) {
      res.render("table_1", { sutemenyek: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.sutemenyekmindrenderadmin = (req, res) => {
  axios
    .get("http://localhost:3000/api/sutemenyek")
    .then(function (response) {
      res.render("products", { sutemenyek: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.ordermindrender = (req, res) => {
  axios
    .get("http://localhost:3000/api/orders")
    .then(function (response) {
      res.render("orders", { orders: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.add_ital = (req, res) => {
  res.render("add_ital");
};

exports.add_kave = (req, res) => {
  res.render("add_kave");
};

exports.add_suti = (req, res) => {
  res.render("add_suti");
};

exports.update_user = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", { params: { id: req.query.id } })
    .then(function (userdata) {
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
