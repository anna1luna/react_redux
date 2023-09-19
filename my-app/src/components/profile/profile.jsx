const Profile = () => {
  return (
    <div className="profile">
          <div>
            <img className="info_bkgrd" src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg" alt="background"></img>
          </div>
          <div className="info_data">
            <div className="info_pic">
              <img className="info_avatar" src="https://media.istockphoto.com/id/1361956153/photo/black-cat-sticking-out-tongue-funny-portrait.jpg?s=612x612&w=0&k=20&c=JtXn7BNTWl573nyjOJFsI99fXEjctnXsMz5zronzs5A=" alt="avatar"></img>
            </div>
            <div>
              <p className="info_heading h2">Dmitry K</p>
              <br></br>
              <p className="info_info">Date of Birth: 2 january</p>
              <p className="info_info">City: Minsk </p>
              <p className="info_info"> Education: BSU '11 </p>
              <p className="info_info">Web Site: <a href="https://it-kamasutra.com">https://it-kamasutra.com</a></p>
            </div>
          </div>
          <div className="post">
            <h2 className="post_heading">My posts</h2>
            <input type="text" placeholder="  what's new?" className="post_input"></input>
            <div className="post_post">
              <button type="button" className="post_btn btn btn-success"> Send</button>
            </div>
          </div>
          <div className="news">  
            <div className="news_post">
              <img className="news_avatar" src="https://media.istockphoto.com/id/1361956153/photo/black-cat-sticking-out-tongue-funny-portrait.jpg?s=612x612&w=0&k=20&c=JtXn7BNTWl573nyjOJFsI99fXEjctnXsMz5zronzs5A=" alt="avatar"></img>
              <p>Hello, World</p>
            </div>
            <div className="news_post">
              <img className="news_avatar" src="https://media.istockphoto.com/id/1361956153/photo/black-cat-sticking-out-tongue-funny-portrait.jpg?s=612x612&w=0&k=20&c=JtXn7BNTWl573nyjOJFsI99fXEjctnXsMz5zronzs5A=" alt="avatar"></img>
              <p>My name is Den</p>
            </div>
        </div>
        </div> 
  )
}

export default Profile