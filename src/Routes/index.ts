import express from "express"
import { getAllCommentRoute, getAllPostRoute, getCommentRoute, getTopPostRoute, index } from "../Controller/Index"

const router = express.Router()

// router.get('/', index)
router.get('/', index)
router.get('/posts', getAllPostRoute)
router.get('/topposts', getTopPostRoute)
router.get('/comments', getAllCommentRoute)
router.get('/comment', getCommentRoute)

export default router