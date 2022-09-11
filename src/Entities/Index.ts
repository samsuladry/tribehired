import axios from "axios"

export const getAllPost = async () => {
    try {
        const allPost = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return allPost.data
    }
    catch (error) {
        return null
    }
}

export const getPost = async (_id: string) => {
    try {
        // console.log(reportField)
        const singlePost = await axios.get(`https://jsonplaceholder.typicode.com/posts/` + _id)
        // if (singlePost === 0) return null

        return singlePost.data
    }
    catch (error) {
        return null
    }
}

export const getAllComment = async () => {
    try {
        const allComment = await axios.get("https://jsonplaceholder.typicode.com/comments")
        return allComment.data
    }
    catch (error) {
        return null
    }
}


export const getTopPost = async () => {
    try {
        const posts = await getAllPost()
        const comments = await getAllComment()

        let arr1: any[] = posts 
        let arr2: any[] = comments
        let posts_number_of_comments = 0

        // console.log("arr1: ", posts)

        // sort in descdending order
        posts.sort((a: any, b: any) => {            
            return a.id > b.id ? -1 : 1
        })

        let result = arr1.reduce((res: any, a:any) =>
        {
            // console.log("res: ", a)
            for (let i = 0; i < arr2.length; i++)
            {
                if(arr2[i].postId === a.id)
                {
                    posts_number_of_comments++
                }
            }
            
            res[a.id] = res[a.id] || []

            res[a.id].push({
                posts_id: a.id,
                posts_title: a.title,
                posts_body: a.body,
                posts_number_of_comments: posts_number_of_comments, 
            });

            posts_number_of_comments = 0

            return res
        }, Object.create(null)) 

        return result
    }
    catch (error) {
        return null
    }
}
