import './App.css';


const App = () => {
  return (
    <div>
      <header className="header bg-info-subtle">
          <img className="header_logo" src="https://cdn.iconscout.com/icon/free/png-512/free-social-media-3660049-3094483.png?f=avif&w=512" alt="logo"></img>
          <h1 className="header_heading" > My Social Network </h1>
      </header>
      <div className="body"> 
        <nav className="side bg-info-subtle">
          <ul>
            <li> <a href="#s">Profile</a> </li>
            <li> <a href="#s">Messages</a> </li>
            <li> <a href="#s">News</a> </li>
            <li> <a href="#s">Music</a> </li>
            <br></br>
            <li> <a href="#s">Settings</a> </li>
          </ul>              
        </nav>
        <div className="info">
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
      </div>
    </div>
  );
}


export default App;
