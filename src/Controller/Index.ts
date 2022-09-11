import { Request, Response } from "express"
import { isConstructorDeclaration } from "typescript"
import { getAllPost, getAllComment, getTopPost } from "../Entities/Index"

export const index = async (req: Request, res: Response) => {

    try {
        res.status(200).json("Hello from Controller")
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const getTopPostRoute = async (req: Request, res: Response) => {

    try {
        let result = await getTopPost()
        if (result === null) throw("error")
        
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const getAllCommentRoute = async (req: Request, res: Response) => {

    try {

        const result = await getAllComment()
        if (result === null) throw("error")
        // console.log(result)
        
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const getAllPostRoute = async (req: Request, res: Response) => {

    try {

        let result = await getAllPost()
        if (result === null) throw("error")
        
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json(error)
    }
}

export const getCommentRoute = async (req: Request, res: Response) => {

    try {

        let filter = req.query
        const comments = await getAllComment()
        if (comments === null) throw("error")

        const filteredResult = comments.filter((obj: any) => 
        {
            for (let key in req.query )
            {
                if(obj[key] === undefined || obj[key] != filter[key])
                {
                    return false
                }

                return true
            }

        })
        
        res.status(200).json(filteredResult)
    }
    catch (error) {
        res.status(500).json(error)
    }
}