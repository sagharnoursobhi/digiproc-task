import { useState } from 'react'


const Item = (props) => {

    const [showMore, setShowMore] = useState(false);

        return(
            <div className="comment-item">
                <span className="fullName">{ props.item.fullName }: </span>
                <span className="comment">
                    {showMore ? props.item.comment : `${props.item.comment.substring(0, 40)}`}
                </span>
                <span className="dots" onClick={ () => setShowMore(!showMore) }>{ showMore ? "show less" : " . . . " }</span>
            </div>
        )
}

export default Item;