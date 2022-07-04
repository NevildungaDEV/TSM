const employeeRegister = require("../models/empModels")
const sendToken = require("../utils/jwtToken")


exports.empSignup = async (req, res) => {

    const { empId, empName, empEmail, username, empMobile, password } = req.body
    console.log(empId, empName, empEmail, username, empMobile, password);
    if (!empId || !empName || !empEmail || !username || !empMobile || !password) {
        return res.status(402).json({ message: "plz fil the field properly" });

    }
    try {
        const empExist = await employeeRegister.findOne({ username: username })
        if (empExist) {

            return res.status(422).json({ error: "employee alredy exits" });

        } else {
            const employee = new employeeRegister({ empId, empName, empEmail, username, empMobile, password });
            const token = await empData.generateAccessToken()
            res.cookie("jwt", token, {
                expire: new Date(Date.now + 300000000),
                httpOnly: true,

            })

            await employee.save();
            console.log(employee)
            // sendToken(await employee,201,res)


            res.status(201).json({ message: " employee details added sucessfull" });

        }
    } catch (err) {
        console.log(err);
    }
}

exports.loginEmploye = async (req, res) => {
    try {


        const { username, password } = req.body;


        if (!username || !password) {
            return res.status(400).json({ error: "pil filled the deta" })
        }
        const employee = await employeeRegister.findOne({ username: username });
        console.log(employee);
        // sendToken(await employee,201,res)


        if (!employee) {
            res.status(400).json({ error: "Invalid Credentials" })


        } else {
            const token = await employee.generateAccessToken()
            // res.cookie("jwtToken", token, {
            //     expire: new Date(Date.now + 300000000),

            //     httpOnly: true

            // })
            // res.cookie('jwtToken', token, {
            //     expires: new Date(Date.now() + 9999999),
            //     httpOnly: true,
            //     sameSite: true,
            //     signed: true
            // })
            var date = new Date();
            var tokenExpire = date.setTime(date.getTime() + (360 * 1000));
            res.status(201)
                .cookie('token', token, { maxAge: tokenExpire, httpOnly: true })

            res.status(200).json({ message: "Employee log in successful" });

        }
    } catch (err) {
        console.log(err);
    }
}

// get all employes
exports.getAllEmp = async (req, res) => {
    const emp = await employeeRegister.find()
    res.status(200).json({
        success: true,
        emp,
    });
}

// get employee details for edit
exports.geteditEmp = async (req, res) => {
    const value = req.params.id
    console.log(value);
    try {
        const emp = await employeeRegister.findById({ _id: value })
        if (emp) {
            res.status(201).json({ success: true, message: "employee found", emp })
        }
    } catch (error) {
        console.log(error);
    }
}

exports.singleEmp = async (req, res) => {
    const value = req.params.id
    console.log(value);
    const result = await employeeRegister.findOne({ _id: value })
    res.status(200).json({ success: true, result })
}



// edit employee
exports.editEmp = async (req, res) => {
    const value = req.params.id
    try {
        const newemp = await employeeRegister.findByIdAndUpdate({ _id: value }, req.body.addData,
            {
                new: true
            })
        if (newemp) {
            console.log(newemp);
            res.status(201).json({ success: true, message: "employee Updated Succesfully..." })
        }

    } catch (error) {
        console.log(error);
    }
}

// delete employees
exports.deleteEmp = async (req, res) => {
    const id = req.params.id
    try {
        const emp = await employeeRegister.findByIdAndDelete({ _id: id })
        if (emp) {
            res.status(201).json({ success: true, message: "employee Deleted Succesfully..." })
        }

    } catch (error) {
        console.log(error);
    }
}


exports.empLogout = async (req, res, next) => {
    res.clearCookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });
};