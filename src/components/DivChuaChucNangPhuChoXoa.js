import React from 'react';
import '../style2.css';
import { RiPushpin2Line } from 'react-icons/ri';
import { MdOutlineNotificationImportant } from 'react-icons/md';
import { GrUserAdd } from 'react-icons/gr';
import { MdOutlineColorLens } from 'react-icons/md';
import { MdOutlineImage } from 'react-icons/md';
import { HiOutlineSaveAs } from 'react-icons/hi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { FaTrashRestore } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { ImBin } from 'react-icons/im';


export default function DivChuaChucNangPhuChoXoa({ onDelete, id, onSave, UnArchive }) {
    return (
        <div>
            <div className="ChuaImageDuoi2">
                
                <div class="dropdown23">
                <button className="TungAnh2" onClick={() => onDelete(id)} >
                    <ImBin className="jshdkjasjd2" />

                </button>
                    <div class="dropdown-content23">
                        <h1 >Xóa vĩnh viễn</h1>
                    </div>
                </div>
                <div class="dropdown23">
                   <button className="TungAnh2" onClick={() => UnArchive(id)} >
                        <FaTrashRestore className="jshdkjasjd2" />
                    </button>
                    <div class="dropdown-content23">
                        <h1 >Khôi phục</h1>
                    </div>
                </div>
                {/* <button className="TungAnh2">
                    <MdOutlineColorLens className="jshdkjasjd2" />
                </button>
                <button className="TungAnh2">
                    <MdOutlineImage className="jshdkjasjd2" />
                </button>
                <button className="TungAnh2" onClick={()=>onSave(id)} >
                    <HiOutlineSaveAs className="jshdkjasjd2"  />
                </button>
                <div class="dropdown">
                    
                    <button className="TungAnh2">
                        <HiOutlineDotsVertical className="jshdkjasjd2" />
                    </button>
                    <div class="dropdown-content">
                        <button onClick={()=>onDelete(id)}>Xóa ghi chú</button>
                        <button href="#">Thêm nhãn</button>
                        <button href="#">Tạo bản sao</button>
                        <button href="#">Hiển thị hộp tìm kiếm</button>
                        <button href="#" >Sao chép vào Google tài liệu</button>
                    </div>
                    
                </div> */}

            </div>
        </div>
    )
}
