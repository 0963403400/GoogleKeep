import React from 'react'
import '../style2.css'
import AssistFunctionForSavenote from './AssistFunctionForSavenote'
import AssistFunctionForNote from './AssistFunctionForNote'
import AssistFunctionForDeleteNote from './AssistFunctionForDeleteNote'
export default function Note({Title,Content,onDelete,id,onSave,Position,UnArchive}) {

  return (
    <div className='NoteMain'>
        <div className='InnerClassName'>
            <div className='ChildElement1'>
                <h1>{Title}</h1>
            </div>
            <div className='ChildElement2'>
            <p>{Content}</p>
            </div>
            {(()=>{
              if(Position=="Note"){
                return(
                <AssistFunctionForNote onDelete={onDelete} id={id}  onSave={onSave} />)
              }
              else if(Position=="Delete")
              {
                return (
                <AssistFunctionForDeleteNote onDelete={onDelete} id={id}   UnArchive={UnArchive} />)
              }
              else
              {
                return(
                <AssistFunctionForSavenote  onDelete={onDelete} id={id}  onSave={onSave} />)
              }
            })()}
          
        </div>
    </div>
  )
}
