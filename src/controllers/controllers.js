import { connection } from "../config/database.js";
export const control = {};

control.getTasks = async (req, res) => {
  const sql = "SELECT * FROM tasks";
  try {
    const [result] = await connection.query(sql);
    if (result.length === 0) {
      return res.status(200).json({ message: "No tasks found" });
    } else {
      return res.json(result);
    }
  } catch (error) {
    console.log(error);
  }
};

control.getOneTask = async (req, res) => {
  const sql = "SELECT * FROM tasks WHERE id = ?";

  try {
    const { id } = req.params;
    const [result] = await connection.query(sql, [id]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    } else {
      return res.json(result[0]);
    }
  } catch (error) {
    console.error(error);
  }
};

control.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const sql = "INSERT INTO  tasks ( title, description) VALUES (?,?)";
    const result = await connection.query(sql, [title, description]);
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

control.updateTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;
    const [result] = await connection.query(
      "UPDATE tasks SET title = ?, description = ? WHERE id = ?",
      [title, description, id]
    );
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

control.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({ msg: "Task ID is required" });
    }

    const [result] = await connection.query("DELETE FROM tasks WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.json({ msg: "No task found with the given ID" });
    }

    res.json({ msg: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export async function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        isComplete BOOLEAN NOT NULL DEFAULT 0
    );
    `;

  try {
    await conexion.query("SELECT 1 FROM tasks LIMIT 1");

    console.log("'tasks' table exists and is accessible.");
  } catch (error) {
    console.log(
      "'tasks' table doesn't exist or couldn't be accessed. Attempting to create it..."
    );
    try {
      await connection.query(sql);
      console.log("Task table created");
    } catch (error) {
      console.log("Error creating 'tasks' table:", error);
    }
  }
}
