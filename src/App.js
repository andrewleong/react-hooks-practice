import React, { Fragment, useState } from 'react';

const App = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const [posts, setPosts] = useState([
    {
      title: 'Andrew is cool',
      body: 'Some text here'
    }
  ])

  return (
    <Fragment>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Plus +</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Minus -</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>

      {
        posts.map((post, key) => {
          return (
            <div key={key}>
              <hr />
              <h3>Posts: </h3>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
          )
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
    </Fragment>
  )
}

export default App;
