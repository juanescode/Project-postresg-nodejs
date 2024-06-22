import { Project } from "../models/project.js";
import { Task } from "../models/task.js";

//Metodo para obtener todos los proyectos (findAll)
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving projects",
    });
  }
};

//Metodo para crear un proyecto (create)
export const createProject = async (req, res) => {
  const { name, priority, description } = req.body;
  try {
    const newProject = await Project.create({
      name,
      priority,
      description,
    });
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({
      message: "Error creating project",
    });
  }
};

//mEtodo para obtener un proyecto por id (findByPk)
export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({
        message: `Project with id ${id} not found`,
      });
    }

    res.json(project);
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving project",
    });
  }
};

//Metodo para actualizar un proyecto (save) Y listarlo por id (findByPk) una vez actualizado
export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description } = req.body;
  try {
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({
        message: `Project with id ${id} not found`,
      });
    }

    project.name = name;
    project.priority = priority;
    project.description = description;

    await project.save();

    res.json(project);
  } catch (error) {
    return res.status(500).json({
      message: "Error updating project",
    });
  }
};

//Metodo para eliminar un proyecto (destroy)
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const projects = await Project.destroy({
      where: {
        id,
      },
    });

    if (projects === 0) {
      return res.status(404).json({
        message: `Project with id ${id} not found`,
      });
    }

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting project",
    });
  }
};


export const getProjectTask = async (req, res) => {
  const {id} = req.params
  const task = await Task.findAll({
    where: {
      projectId: id
    }
  })
  res.json(task)
};