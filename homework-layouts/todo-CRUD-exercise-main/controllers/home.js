const TodoTask = require('../models/TodoTask')

module.exports = {
    getIndex: async (req, res) => {
        try {
          TodoTask.find({}, (err, tasks) => {
            res.render("index.ejs", { todoTasks: tasks });
          });
        } catch (err) {
          if (err) return res.status(500).send(err);
        }
      }
}