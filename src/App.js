import React, { Fragment, useState, useEffect } from 'react';
import Post from './post'

const App = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const [posts, setPosts] = useState([
    {
      title: 'Andrew is cool',
      body: 'Some text here'
    }
  ])


  //  You can have multuple useEffect to check for different prop changes
  useEffect(() => {
    console.log("Count did update", count)
  }, [count])

  useEffect(() => {
    console.log("Post did update", posts)
  }, [posts])

  return (
    <Fragment>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Plus +</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Minus -</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>

      {
        posts.map((post, key) => {
          return <Post post={post} key={key} />
        })
      }
      <button onClick={() => {
        setPosts(
          [
            ...posts,
            {
              title: 'Batman is cool',
              body: 'Another text here'
            }
          ]
        )
      }}>Add Post</button>

      <button onClick={() => {
        setPosts([])
      }}>Remove Posts</button>

    </Fragment>
  )
}

export default App;
