import React from 'react'
import '../style2.css'
import DiChuaChucNangPhuChoSave from './DiChuaChucNangPhuChoSave'
import DivChuaChucNangPhu2 from './DivChuaChucNangPhu2'
import DivChuaChucNangPhuChoXoa from './DivChuaChucNangPhuChoXoa'
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
                <DivChuaChucNangPhu2 onDelete={onDelete} id={id}  onSave={onSave} />)
              }
              else if(Position=="Delete")
              {
                return (
                <DivChuaChucNangPhuChoXoa onDelete={onDelete} id={id}   UnArchive={UnArchive} />)
              }
              else
              {
                return(
                <DiChuaChucNangPhuChoSave  onDelete={onDelete} id={id}  onSave={onSave} />)
              }
            })()}
          
        </div>
    </div>
  )
}
