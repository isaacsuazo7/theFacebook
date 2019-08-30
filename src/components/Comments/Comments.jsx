import React from 'react'
import PropTypes from 'prop-types'
import './Comments.css'

const Comments=({comments,addComment,changeText,valueText})=>{
    const handleChange=(event)=>{
        changeText(event.target.value)
    }

    const handlerClick =()=>{
        addComment(valueText)
    }

    const CommentList=comments.map((element,index)=>{
        return(
            <div className='Comments' key={index}>
            <div className='User'></div>
            <span className='Text'></span>
            </div>
            
        )
    })

    return(
        <div className ="CommentsContainerBox">
            <div className ='CommentsContainer'>
                <input
                onChange={(e)=> handleChange(e)}
                className ='CommentsBox'
                type='text' placeholder='Escriba un comentario'
                value={valueText}
                ></input>
                <button className ='CommentButton'monClick={()=> handlerClick()}></button>
            </div>
            {CommentList}
        </div>
    )
}

Comment.defaultProps={
    valueInput:''
}
Comments.PropTypes={
    addComment:PropTypes.func.isRequiered,
    comments:PropTypes.func.isRequiered,
    changeText:PropTypes.func.isRequiered
}

export default Comments;