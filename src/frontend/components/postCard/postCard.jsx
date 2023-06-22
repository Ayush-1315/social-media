import postCardCSS from "./postCard.module.css";
export const PostCard=({post})=>{
const {content,likes,username,_id}=post;
return <div className={postCardCSS.card}>
    <div className={postCardCSS.cardHead}>
        <p>{username}</p>
    </div>
    <div className={postCardCSS.cardBody}>
        <p>{content?.title}</p>
        <div className={postCardCSS.imageContainer}>
        {content?.postImg && <img src={content?.postImg} alt={_id} />}
        </div>
    </div>
    <div className={postCardCSS.cardFoot}>
        <div>
        <p>{likes?.likeCount}</p>
        <button>Like</button>
        </div>
        <button>Bookmark</button>
        <button>Comment</button>
        <button>Share</button>
    </div>
</div>
}