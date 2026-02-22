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

module.exports = { addEmployee, getEmployees };

module.exports = {addEmployee,getEmployees}