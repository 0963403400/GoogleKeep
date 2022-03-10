import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import '../style.css'
import hdbf from '../keep_2020q4_48dp.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { VscChromeClose } from 'react-icons/vsc'
import {MdOutlineRefresh} from 'react-icons/md'
import {RiSettings4Line}from 'react-icons/ri'
import {IoApps} from 'react-icons/io5'
import {IoReorderThreeOutline} from 'react-icons/io5'
import {FaUser} from 'react-icons/fa'
import {AiTwotoneAppstore} from 'react-icons/ai'
import {BsViewStacked} from 'react-icons/bs'

export default function Header() {
  return (
    <div className='header'>
      <div class="FirstDivHeader">
        <div className='All3soc'>
          <div className="hbdfhd">
            <IoReorderThreeOutline style={{ width: '24px', height: '24px' }} />
          </div>
          <div className="Beside3Soc">
            <a className='sssasasas' href="#">
              <img className='hvsdja' src={hdbf}></img>
              <span className='djbfsd'>Keep</span>
            </a>
          </div>
        </div>
        <div class="hsbjhvsdjh">
          <div className='DicChuaThanhSearch'>
            <form className='hbfsbdfhb'>
              <button className='ButtonLeft'>
                <AiOutlineSearch style={{
                  padding: '8px',
                  margin: '3px',
                  width: '24px',
                  height: '24px'
                }} className='djfhsdh' />
              </button>
              <div className='hdv_TimKiem'>
                <input className='jhvhsdjbfd' placeholder='Tìm kiếm'>
                </input>
              </div>

              <button className='ButtonRight'>
                <VscChromeClose style={{
                  padding: '8px',
                  margin: '3px',
                  width: '24px',
                  height: '24px',
                  
                }} className='djfhsdh' />

              </button>
            </form>

          </div>
          <div className='DivChuaRefreshAnhSetting'>
            <div class='refreshButton'>
              <MdOutlineRefresh className='jbsfha' />

            </div>
            <div className='refreshButton' >
              <BsViewStacked className='jbsfha' /> 

            </div>
            <div className='refreshButton'>
              <RiSettings4Line className='jbsfha' /> 

            </div>
            
          </div>
          <div className='shdbjhs'>

          </div>


        </div>
        <div className='LastDivInHeader'>
          <div className='refreshButton'>
            <IoApps className='jbsfha' />

          </div>
          <div className='refreshButton'>
            <FaUser className='jbsfha' />

          </div>
        </div>

    </div>

    </div>
  )
}
