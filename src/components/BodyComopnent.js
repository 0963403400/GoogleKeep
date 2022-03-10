import React, { useState } from 'react';
import { MdOutlineLightbulb } from 'react-icons/md';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { FaPencilAlt } from 'react-icons/fa';
import { MdSaveAlt } from 'react-icons/md';
import { ImBin } from 'react-icons/im';
import CreateArea from './CreateArea';
import Isotope from 'isotope-layout';

import { display, style } from '@mui/system';
import Note from './Note';
import Masonry from 'react-masonry-css';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@mui/material';
import { ClassNames } from '@emotion/react';
import '../style.css';
// import { makeStyles } from '@mui/styles';


export default function BodyComopnent() {
    const [Status, SetStatus] = useState(false);
    const [notes, SetNote] = useState([]);
    const [notesBin, SetNotesbin] = useState([]);
    const [notesSave, SetNotesSave] = useState([]);
    const [Position, SetPosition] = useState("Note");
    function AddNote(NewNote) {
        SetNote((prevalue) => {
            return [...prevalue, NewNote];
        });
    };
    // var elem = document.querySelector('.InnerDivChuaNote');
    // var iso = new Isotope(elem, {
    //     // options
    //     itemSelector: '.NoteMain',
    //     layoutMode: 'masonry',
    // });

    // const {SaveNotes}=()
    const ImutableDiv = (<div className='LeftBody'>
        <div className='InnerLeft'>
            <div className='InnerHaveMarginTop'>
                <div className='sdbasb' onMouseEnter={() => SetStatus(true)} onMouseLeave={() => SetStatus(false)} onClick={() => SetPosition("Note")} >
                    <MdOutlineLightbulb className='hsbfhs' />
                    <span style={{ display: Status ? "flex" : "none" }} >Ghi chú</span>
                </div>
                <div className='sdbasb' onMouseEnter={() => SetStatus(true)} onMouseLeave={() => SetStatus(false)} >
                    <MdOutlineNotificationsNone className='hsbfhs' />
                    <span style={{ display: Status ? "flex" : "none" }} >Lời nhắc</span>
                </div>
                <div className='sdbasb' onMouseEnter={() => SetStatus(true)} onMouseLeave={() => SetStatus(false)} >
                    <FaPencilAlt className='hsbfhs' />
                    <span style={{ display: Status ? "flex" : "none" }} >Chỉnh sửa cá nhân</span>
                </div>
                <div className='sdbasb' onMouseEnter={() => SetStatus(true)} onMouseLeave={() => SetStatus(false)} onClick={() => SetPosition("Save")} >
                    <MdSaveAlt className='hsbfhs' />
                    <span style={{ display: Status ? "flex" : "none" }} >Lưu trữ</span>
                </div>
                <div className='sdbasb' onMouseEnter={() => SetStatus(true)} onMouseLeave={() => SetStatus(false)} onClick={() => SetPosition("Delete")} >
                    <ImBin className='hsbfhs' />
                    <span style={{ display: Status ? "flex" : "none" }} >Thùng rác</span>
                </div>


            </div>
        </div>
    </div>);
    function deleteAllInRubish() {
        SetNotesbin([]);
    }
    function deleteNote(id) {
        // const OldNOte={
        //     Title:notes.filter((note,index)=>index==id).Title,
        //     Content:notes.filter((note,index)=>index==id).Content,
        // };
        // console.log(OldNOte.Title);
        // console.log(OldNOte.Content);

        const OldNote = {
            Title: notes[id].Title,
            Content: notes[id].Content,
        }
        
        SetNotesbin((prevalue) => {
            return [...prevalue, OldNote];
        });
        SetNote((prevalue) => {
            return [...prevalue.filter((note, index) => index !== id)];
        });
    }
    function SaveNote(id)
    {
        const Savenote={
            Title: notes[id].Title,
            Content: notes[id].Content,
        }
        SetNotesSave((prevalue)=>{
            return [...prevalue,Savenote];
        });
        SetNote((prevalue) => {
            return [...prevalue.filter((note, index) => index !== id)];
        });
    }
    function deleteNoteInBin(id) {
        SetNotesbin((prevalue) => {
            return [...prevalue.filter((note, index) => index !== id)];
        });
    }
    function deleteNoteInSave(id) {
        const OldNote = {
            Title: notesSave[id].Title,
            Content: notesSave[id].Content,
        }
        
        SetNotesbin((prevalue) => {
            return [...prevalue, OldNote];
        });
        SetNotesSave((prevalue) => {
            return [...prevalue.filter((note, index) => index !== id)];
        });
    }
    function UnArchive(id){
        const NewNote={
            Title:notesBin[id].Title,
            Content:notesBin[id].Content,
        }
        SetNote((prevalue)=>{
            return [...prevalue,NewNote];
        });
        SetNotesbin((prevalue) => {
            return [...prevalue.filter((note, index) => index !== id)];
        });
    }
    function UnArchiveSave(id){
        const NewNote={
            Title:notesSave[id].Title,
            Content:notesSave[id].Content,
        }
        SetNote((prevalue)=>{
            return [...prevalue,NewNote];
        });
        SetNotesSave((prevalue) => {
            return [...prevalue.filter((note, index) => index !== id)];
        });
    }
    if (Position == "Note") {
        return (
            <div class="MainBody">
                {ImutableDiv}
                <div className='RightBody'>
                    <CreateArea onAdd={AddNote} />

                    <div className='DivChuaNote'>
                        {/* <div className='InnerDivChuaNote'>
                            {notes.map((note, index) => (
                                <Note key={index} id={index} Title={note.Title} Content={note.Content} onDelete={deleteNote} className="Tuan" />
                            ))}
                        </div> */}
                        <Grid container spacing={0} className='InnerDivChuaNote' style={{boxShadow:'none'},{paddingBottom:'150px'}}  >
                            
                                {/* <Paper  >1</Paper>
                            </Grid>
                            <Grid item xs={3} md={6}>
                                <Paper  >1</Paper> */}
                                {notes.map((note, index) => (
                                    <Grid key={index} id={index} item xs={6}  sm={4} md={2} style={{boxShadow:'none'}, {width:'auto'},{paddingBottom:'0'}} className='hdhasda'><Paper className='jhsdhadashdjahbsdj'style={{boxShadow:'none'}} ><Note key={index} id={index} Title={note.Title} Content={note.Content} onDelete={deleteNote} onSave={SaveNote} Position={Position} className="Tuan" style={{boxShadow:'none'}} /></Paper></Grid>
                                ))}
                            
                        </Grid>

                    </div>


                </div>
            </div>
        )
    }
    else if (Position == "Delete") {
        return (
            <div class="MainBody">
                {ImutableDiv}
                <div className='RightBody'>
                    <div className='DivChuaDonRac'>
                        <div className='InnerDivChuaDonRac'>
                            <h1>
                                Ghi chú trong Thùng rác sẽ bị xóa sau 7 ngày.
                            </h1>
                            <div className='gavhgAhgcv' onClick={deleteAllInRubish} >
                                <h1>Dọn sạch thùng rác</h1>
                            </div>
                        </div>
                    </div>

                    <div className='DivChuaNote'>
                        <div className='InnerDivChuaNote'>
                            {notesBin.map((note, index) => (
                                    <Grid key={index} id={index} item xs={6}  sm={4} md={2} style={{boxShadow:'none'}, {width:'auto'},{paddingBottom:'0'}} className='hdhasda'><Paper className='jhsdhadashdjahbsdj'style={{boxShadow:'none'}} ><Note key={index} id={index} Title={note.Title} Content={note.Content} onDelete={deleteNoteInBin} UnArchive={UnArchive} Position={Position} className="Tuan" style={{boxShadow:'none'}} /></Paper></Grid>
                                    ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        console.log(Position);
        return (
            <div class="MainBody">
                {ImutableDiv}
                <div className='RightBody'>
                    {/* <CreateArea onAdd={AddNote} /> */}

                    <div className='DivChuaNote'>
                        <div className='InnerDivChuaNote'>
                            {notesSave.map((note, index) => (
                                    <Grid key={index} id={index} item xs={6}  sm={4} md={2} style={{boxShadow:'none'}, {width:'auto'},{paddingBottom:'0'}} className='hdhasda'><Paper className='jhsdhadashdjahbsdj'style={{boxShadow:'none'}} ><Note key={index} id={index} Title={note.Title} Content={note.Content} onDelete={deleteNoteInSave} onSave={UnArchiveSave} Position={Position} className="Tuan" style={{boxShadow:'none'}} /></Paper></Grid>
                                    ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
