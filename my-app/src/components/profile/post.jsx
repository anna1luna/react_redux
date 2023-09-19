import s from './profile.module.css'

const Post = () => {
  return (
    <div className={s.post}>
            <h2 className={s.post_heading}>My posts</h2>
            <textarea type="text" placeholder="  what's new?" className={s.post_input}></textarea>
            <div className={s.post_post}>
              <button type="button" className={`${s.post_btn} btn btn-success`}> Send</button>
            </div>
          </div>
  )
}

export default Post