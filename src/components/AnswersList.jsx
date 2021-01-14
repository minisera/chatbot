import React from 'react';
import {Answer} from "./index";

const AnswersList = (props) => {
  return(
    <div className="c-grid_answer">
      {props.answers.map((value,index) => {
        return <Answer content={value.content} key={index.toString()} />
      })}
    </div>
  )
}

export default AnswersList