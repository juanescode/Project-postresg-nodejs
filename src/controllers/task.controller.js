import { Task } from "../models/task.js";

export const createTask = async (req, res) => {
  const { name, projectId, done } = req.body;
  try {
    const task = await Task.create({
      name,
      projectId,
      done,
    });
    res.json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Error creating task",
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving tasks",
    });
  }
};

export const getTaskById = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }
    res.json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving task",
    });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, projectId, done } = req.body;
  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    task.name = name;
    task.projectId = projectId;
    task.done = done;

    await task.save();

    res.json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Error updating task",
    });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.destroy({
      where: {
        id,
      },
    });

    if (task === 0) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting task",
    });
  }
};
