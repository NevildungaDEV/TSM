const { findByIdAndDelete } = require("../models/taskModels");
const task = require("../models/taskModels");


exports.addTask = async (req, res) => {
  const { empId, projectName, taskName, assignee, startDate, endDate, description, percentage,status } = req.body
  if (!empId || !projectName || !taskName || !assignee || !startDate || !endDate || !description) {
    return res.status(401).json({ message: "plz fil the field properly" });

  }

  try {
    const newtask = new task({ empId, projectName, taskName, assignee, startDate, endDate, description, percentage,status });
    await newtask.save();
    console.log(newtask)

    return res.status(201).json({ message: "task added successfully " });


  } catch (err) {
    console.log(err);
  }
}


exports.getAllTask = async (req, res) => {
  const tasks = await task.find()
  res.status(200).json({
    success: true,
    tasks,
  });
}

// edit task
exports.editTask = async (req, res) => {
  const value = req.params.id
  // console.log(params);
  // console.log(req.body.addData);
 
  try {

    const result = await task.findByIdAndUpdate({ _id: value }, req.body.addData, {
      new: true,
    });

    if (result) {
    
      res.status(200).json({ success: true, message: "task Updated Succesfully...", result})
    }
  } catch (err) {
    console.log(err);
  }
}


exports.singleTask = async (req, res) => {
  const value = req.params.id
  // console.log("value", value);
    const result = await task.findOne({ _id: value })
     res.status(200).json({ success: true, result})
}

// exports.newUpdateData=async(req,res)=>{
//   try{
//   const newTask=await task.findByIdAndUpdate({
//      id: req.params.id

//   },)

// }


// exports.deleteTask=async(req,res)=>{
//   const id=req.params.id
//   try{
//     const result=await task.findByIdAndDelete({_id:id})
//     if (result){
//       res.status(201).json({ success: true, msg: "task Deleted Succesfully..." })

//     }
//   }catch(error){
//     console.log(error);
//   }

// }
exports.deleteTask = async (req, res) => {
  const id = req.params.id
  try {
    const result = await task.findByIdAndDelete({ _id: id })

    if (result) {
      res.status(201).json({ success: true, message: "task Deleted Succesfully..." })
    }

  } catch (error) {
    console.log(error);
  }
}