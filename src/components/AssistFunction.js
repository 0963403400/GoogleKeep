import React from 'react';
import '../style2.css';
import { RiPushpin2Line } from 'react-icons/ri';
import { MdOutlineNotificationImportant } from 'react-icons/md';
import { GrUserAdd } from 'react-icons/gr';
import { MdOutlineColorLens } from 'react-icons/md';
import { MdOutlineImage } from 'react-icons/md';
import { HiOutlineSaveAs } from 'react-icons/hi';
import { HiOutlineDotsVertical } from 'react-icons/hi';

export default function DivChuaChucNangPhu() {
    return (
        <div>
            <div className="ChuaImageDuoi">
                <div className='TungAnh'>
                    <MdOutlineNotificationImportant className="jshdkjasjd" />

                </div>
                <div className="TungAnh">
                    <GrUserAdd className="jshdkjasjd" />
                </div>
                <div className="TungAnh">
                    <MdOutlineColorLens className="jshdkjasjd" />
                </div>
                <div className="TungAnh">
                    <MdOutlineImage className="jshdkjasjd" />
                </div>
                <div className="TungAnh">
                    <HiOutlineSaveAs className="jshdkjasjd" />
                </div>
                <div className="TungAnh">
                    <HiOutlineDotsVertical className="jshdkjasjd" />
                </div>
            </div>
        </div>
    )
}
