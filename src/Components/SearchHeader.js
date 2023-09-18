import React, { useEffect, useState } from 'react'
import { FaChild } from 'react-icons/fa6'
import { MdAdd } from 'react-icons/md'
import { GoArrowSwitch } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'
import data from './data'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const SearchHeader = () => {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [date, setDate] = useState("")
    const [selects, setSelect] = useState()

    const [count, setCount] = useState(0);
    const increase = () => { setCount(count++) };
    const decrease = () => {
        if (count > 0) {
            count--;
        }
    }
  
   
    return (
        <div className='searchHeader'>
            <div className='sec1'>
                <div className='left'>
                    <select className='sel' value={selects} onChange={e => setSelect(e.target.value)}>
                        <option>Oneway</option>
                        <option>Return</option>
                        <option>MultiCity</option>
                    </select>
                    <select className='sel' value={selects} onChange={e => setSelect(e.target.value)}>
                        <option>
                            <div className='card1'>
                                <h4> <FaChild /></h4>
                                <h4>+</h4>
                                <h3>Adult Child</h3>
                                <div className='count'>
                                    <MdAdd onClick={increase} />
                                    <span>{count}</span>
                                    <FiMinus onClick={decrease} />
                                </div>
                            </div>
                        </option>
                        <option>
                            <div className='card1'>
                                <FaChild />
                                <h3>Children</h3>
                                <div className='count'>
                                    <MdAdd onClick={increase} />
                                    <span>{count}</span>
                                    <FiMinus onClick={decrease} />
                                </div>
                            </div>
                        </option>
                        <option>
                            <div className='card1'>
                                <FaChild />
                                <h3>Children</h3>
                                <div className='count'>
                                    <MdAdd onClick={increase} />
                                    <span>{count}</span>
                                    <FiMinus onClick={decrease} />
                                </div>
                            </div>
                        </option>
                    </select>
                    <select className='sel' value={selects} onChange={e => setSelect(e.target.value)}>
                        <option>Economy</option>
                        <option>Premium Economy</option>
                        <option>Business</option>
                        <option>First Class</option>
                    </select>
                    
                </div>
                <div className='right'>
                    Recent Seraches
                </div>
            </div>
            <div className='sec2'>
                <div className='input-wrapper-1'>
                    <h4>FROM</h4>
                    <input type='search' value={input1} onChange={(e) => { setInput1(e.target.value) }} />
                  
                </div>
                <h4><GoArrowSwitch /></h4>
                <div className='input-wrapper-2'>
                    <h4>TO</h4>
                    <input type='search' value={input2} onChange={(e) => { setInput2(e.target.value) }} />
                </div>
                <div className='input-wrapper-3'>
                    <h4>DEPART</h4>
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                    {/* <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"15px"}}>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} />
                    </div> */}
                    {/* <Calendar dateFormat="dd/m/yy"  value={date} onChange={(e) => setDate(e.value)} /> */}
                </div>
                <button className='btn'>Search</button>
            </div>
        </div>
    )
}

export default SearchHeader
