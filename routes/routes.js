const routes = require("express").Router();
const connection = require("../database");

// All Todo List
routes.get("/todo_list", (req, res) => {
  connection.query("Select * from todo", (error, rows) => {
    if (!error) {
      res.json(rows);
    } else {
      console.log("Can't get todo list...", error);
    }
  });
});

// Get Todo Detail
routes.get("/todo_detail/:id", (req, res) => {
  const id = req.params.id;
  connection.query("Select * from todo where id = ?", [id], (error, rows) => {
    if (!error) {
      res.json(rows);
    } else {
      console.log("Can't get todo detail...", error);
    }
  });
});

// Add Todo Details
routes.post("/todo_add", (req, res) => {
  const todo_data = req.body;
  const sql = "insert into todo set ?";
  connection.query(sql, todo_data, (error, rows) => {
    if (!error) {
      res.json(rows);
    } else {
      console.log("Todo Data not Added...", error);
    }
  });
});

// Update Todo Detail
routes.patch("/todo_update/:id", (req, res) => {
  const id = req.params.id;
  const todo_data = req.body;
  const sql = "update todo set ? where id = ?";
  connection.query(sql, [todo_data, id], (error, rows) => {
    if (!error) {
      res.json(rows);
    } else {
      console.log("Todo Data not Updated...", error);
    }
  });
});

// Delete Todo from list
routes.delete("/todo_delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = "delete from todo where id = ?";
  connection.query(sql, id, (error, rows) => {
    if (!error) {
      res.json(rows);
    } else {
      console.log("Todo not Remove from list...", error);
    }
  });
});

module.exports = routes;
