import React, { useEffect } from 'react'

const Post = ({ post }) => {

    useEffect(() => {
        //  component did mount
        console.log("Post componentDidMount")

        //  clearEffect
        return () => {
            console.log("ComponentWillUnmount")
        }
    }, [])

    return (
        <div>
            <hr />
            <h3>Posts: </h3>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    )
}


export default Post