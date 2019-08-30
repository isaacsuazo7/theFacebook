import React,{Component} from 'react'
import UserProfile from './components/UserProfile/UserProfile'
import Heart from './components/Heart/Heart'
import Comments from './components/Comments/Comments'
import './App.css'

class App extends Component{
  state={
    LikesNumber=0,
    CommentsNumber:1,
    Comments:[{
      value:'REACTTTT'
    }]
  }

clickHeart=()=>{
  const like = this.state.LikesNumber
  this.setState({LikesNumber:like+1})
}

addComment = (newValue)=>{
  const comments=this.state.CommentsNumber
  const arrayComments = this.state.Comments
  const newComment = {
    value:newValue
  }

  arrayComments.push(newComment)
  this.setState({CommentsNumber:comments+1})
  this.setState({Comments:arrayComments})
  this.setState({valueText:''})
}

changeText=(value)=>{
  this.setState({valueText:value})
}

render(){
  return(<div className="Container">
    <UserProfile img='https://pbs.twimg.com/profile_images/836333218924277760/iVzLr4c-.jpg'
    Name='Monoku'
    Likes={this.state.LikesNumber}
    Comments={this.state.CommentsNumber}/>
    <Heart clickHeart={this.clickHeart}/>
    <Comments comments ={this.state.Comments}
    addComment={this.addComment}
    changeText={this.changeText}
    value={this.valueText}/>
  </div>

  )
}
}
export default App;