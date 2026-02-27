const Employee = require('../models/Employee');

const addEmployee = async(req,res)=>{
    try{
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    }
    catch(err){
        res.status(500).json({ message: "Error adding employee" });
    }
}
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: "Error fetching employees" });
  }
};

const deleteEmployee = async (req,res)=>{
  try{
     const {id} = req.params;
     await Employee.findByIdAndDelete(id);
     res.status(200).json({message: "Employee deleted"})
  }
  catch(err){
    res.status(500).json({message: "Error in deleting"});
  }
}

const updateEmployee = async (req,res)=>{
  try{
    const{id} = req.params;
    const updated = await Employee.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(updated);
  }
  catch (err){
    res.status(500).json({message:"Error to update"});
  }
}


module.exports = {addEmployee,getEmployees,deleteEmployee,updateEmployee}