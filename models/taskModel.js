const pool = require('../db');

const getTasks = async () => {
  const res = await pool.query('SELECT * FROM tasks ORDER BY id DESC');
  return res.rows;
};

const createTask = async (task) => {
  const { title, description, due_date, recurrence } = task;
  const res = await pool.query(
    'INSERT INTO tasks (title, description, due_date, recurrence) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, due_date, recurrence]
  );
  return res.rows[0];
};

const deleteTask = async (id) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
