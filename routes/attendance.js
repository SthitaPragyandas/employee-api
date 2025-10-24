import express from "express"
import { attendanceReport, getAttendance, updateAttendance } from "../controllers/attendanceController.js"
import authMiddleWare from "../middleware/authMiddleware.js"
import defaultAttendance from "../middleware/defaultAttendance.js"

const router = express.Router()

router.get("/", authMiddleWare, defaultAttendance, getAttendance)
router.put("/update/:employeeId", authMiddleWare, updateAttendance)
router.get("/report", authMiddleWare, attendanceReport)


export default router