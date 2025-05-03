// backend/controllers/taskController.js
const Task = require('../models/taskModel');

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.getTasks();
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const newTask = await Task.createTask(req.body);
  res.status(201).json(newTask);
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.deleteTask(id);
  res.status(204).send();
};
