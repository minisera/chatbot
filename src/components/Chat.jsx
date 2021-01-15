import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AnswerAvatar from '../assets/img/answer.png';
import QuestionAvatar from '../assets/img/question.png';



const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return (
    <ListItem className={classes}> 
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={AnswerAvatar} />
          ) : (
          <Avatar alt="icon" src={QuestionAvatar} />  
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  )
}

export default Chat;