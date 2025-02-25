import './UserComment.css'
import UserComponent from '../user_item/UserItem'
import ChatBubble from '../chat_bubble/ChatBubble'

 
function UserCommentComponent({text, src, userName, defaultValue, colorName, colorStar, colorRating}){
    return(
        <div className='user_comment_container'>
            <ChatBubble text={text}/>
            <UserComponent src={src} userName={userName} defaultValue={defaultValue} colorName={colorName} colorStar={colorStar} colorRating={colorRating}/>
        </div>
    )
}

export default UserCommentComponent; 