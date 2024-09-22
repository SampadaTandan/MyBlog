import React from 'react'

const Post = () => {
  return (
    <div className="post">
          <div className="image">
            <img src="https://imgd.aeplcdn.com/664x374/n/cw/ec/167883/750s-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80"></img>
          </div>

          <div className="texts">
            <h2>mclaren</h2>
            <p className="info"><a className="author">David Parker</a> <time>2024-01-12 16:49</time></p>
            <p className="summary">McLaren Automotive is a British luxury automotive manufacturer based at the McLaren Technology Centre in Woking, England. The main products of the company are sports cars, which are produced in-house in designated production facilities.</p>
          </div>
        </div>
  )
}

export default Post;