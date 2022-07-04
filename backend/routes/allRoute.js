const express =require("express")
const {loginAdmin,signupAdmin,adminLogout} = require("../controller/adminController")
const{empSignup,loginEmploye,getAllEmp,editEmp,deleteEmp,geteditEmp,empLogout,singleEmp} =require("../controller/empController")
const {addTask,getAllTask,editTask,singleTask,deleteTask}=require("../controller/taskController")
const {isAuth,authRole}=require("../middleware/auth")

const router=express.Router()

// login admin
router.route("/adminlogin").post(loginAdmin)

// register admin
router.route("/adminsignup").post(signupAdmin)

// logout
router.route("/adminlogout").get(adminLogout)

// employee signup
router.route("/empsignup").post(empSignup)

// employee login
router.route("/emplogin").post(loginEmploye)

// edit emp details and delete
router.route("/empED/:id").put(editEmp).delete(deleteEmp).get(geteditEmp)
// router.route("/empED/:id").put(isAuth,authRole("admin"),editEmp).delete(isAuth,authRole("admin"),deleteEmp).get(isAuth,authRole("admin"),geteditEmp)

// emp logout
router.route("/emplogout").get(empLogout)

// get all employes data
router.route("/empDetails").get(getAllEmp)
// router.route("/empDetails").get(isAuth,authRole("admin"),getAllEmp)

// get single employe data
router.route("/singleEmp/:id").get(singleEmp)

// task
router.route("/task").post(addTask)
// router.route("/task").post(isAuth,addTask)


// get all Task
router.route("/alltask").get(getAllTask)
// router.route("/alltask").get(isAuth,getAllTask)


// edit task
router.route('/edittask/:id').put(editTask)
router.route("/singleTaskEdit/:id").get(singleTask)
// router.route("/newUpdate").post(newUpdateData)
// router.route('/edittask/:id').put(isAuth,authRole("admin"),editTask).get(isAuth,authRole("admin"),singleTask)

// delete task
router.route("/deletetask/:id").delete(isAuth,authRole("admin"),deleteTask)




module.exports=router