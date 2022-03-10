import React, { useState } from "react";
import '../style2.css';
import { RiPushpin2Line } from 'react-icons/ri';
import { MdOutlineNotificationImportant } from 'react-icons/md';
import { GrUserAdd } from 'react-icons/gr';
import { MdOutlineColorLens } from 'react-icons/md';
import { MdOutlineImage } from 'react-icons/md';
import { HiOutlineSaveAs } from 'react-icons/hi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import DivChuaChucNangPhu from './DivChuaChucNangPhu'



function CreateArea({ HandleSubmit, onAdd }) {
    const InitialValue = {
        Title: "",
        Content: "",
    };
    const [note, SetNote] = useState(InitialValue);


    const HanleChange = (e) => {
        const { name, value } = e.target;
        SetNote({
            ...note,
            [name]: value,
        });
        console.log(note);

    };
    function HandleSubmit(event) {
        if (note.Title != "" || note.Content != "") {
            onAdd(note);
        }
        SetNote({
            Title: "",
            Content: "",
        })
        event.preventDefault();
    }
    return (
        <div className="hsbdhabsdh">
            <form className="djfsjkh">
                <input type="text" placeholder="Tiêu đề"
                    name="Title" className="hbajsfhsa"
                    value={note.Title} onChange={HanleChange} />
                <div class="ChuaPin">
                    <RiPushpin2Line className="habsdjhabdh" />
                </div>
                <input type="text" placeholder="Tạo ghi chú..."
                    name="Content" className="hbajsfhsa2"
                    value={note.Content} onChange={HanleChange} />
                <div className="hsdfhsdfhdhf">
                    <div className="ChuaImageDuoi">
                        <div class="dropdown23">
                            <div className="TungAnh"  >
                                <MdOutlineNotificationImportant className="jshdkjasjd" />
                            </div>
                            <div class="dropdown-content23" >
                                <h1 style={{marginTop:'-3px'}}>Nhắc tôi</h1>
                            </div>
                        </div>
                        {/* <div className='TungAnh'>
                            <MdOutlineNotificationImportant className="jshdkjasjd" />
                        </div> */}
                        <div class="dropdown23">
                            <div className="TungAnh"  >
                                <GrUserAdd className="jshdkjasjd" />
                            </div>
                            <div class="dropdown-content23" >
                                <h1 style={{marginTop:'-3px'}}>Cộng tác viên</h1>
                            </div>
                        </div>
                        {/* <div className="TungAnh">
                            <GrUserAdd className="jshdkjasjd" />
                        </div> */}
                        <div class="dropdown23">
                            <div className="TungAnh"  >
                                <MdOutlineColorLens className="jshdkjasjd" />
                            </div>
                            <div class="dropdown-content23" >
                                <h1 style={{marginTop:'-3px'}}>Lựa chọn nền</h1>
                            </div>
                        </div>
                        {/* <div className="TungAnh">
                            <MdOutlineColorLens className="jshdkjasjd" />
                        </div> */}
                        <div class="dropdown23">
                            <div className="TungAnh"  >
                                <MdOutlineImage className="jshdkjasjd" />
                            </div>
                            <div class="dropdown-content23" >
                                <h1 style={{marginTop:'-3px'}}>Thêm hình ảnh</h1>
                            </div>
                        </div>
                        <div class="dropdown23">
                            <div className="TungAnh"  >
                                <HiOutlineSaveAs className="jshdkjasjd" />
                            </div>
                            <div class="dropdown-content23" >
                                <h1 style={{marginTop:'-3px'}}>Lưu trữ</h1>
                            </div>
                        </div>
                        {/* <div className="TungAnh">
                            <MdOutlineImage className="jshdkjasjd" />
                        </div> */}
                        {/* <div className="TungAnh">
                            <HiOutlineSaveAs className="jshdkjasjd" />
                        </div> */}
                        <div class="dropdown23">
                            <div className="TungAnh"  >
                                <HiOutlineDotsVertical className="jshdkjasjd" />
                            </div>
                            <div class="dropdown-content23">
                                <h1 style={{marginTop:'-3px'}}>Lưu trữ</h1>
                            </div>
                        </div>
                        {/* <div className="TungAnh">
                            <HiOutlineDotsVertical className="jshdkjasjd" />
                        </div> */}
                    </div>
                    <button className="DivChuaNutDong" onClick={HandleSubmit} >
                        <h1 >Đóng</h1>
                    </button>
                </div>

            </form>
            {/* <div className="dfjdjfsjdfbjk" >
                
            </div> */}

        </div>
    );
}

export default CreateArea;