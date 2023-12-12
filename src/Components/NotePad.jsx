import React, { useRef } from 'react'
import '../Styles/NotePad.css'

const NotePad = () => {
    const userin = useRef();
    const resText = useRef();

    const upperCase =()=>{
        const inText = userin.current.value
        const uppertext = inText.toUpperCase()
        resText.current.value=uppertext
    }
    const lowerCase =()=>{
        const inText = userin.current.value
        const uppertext = inText.toLowerCase()
        resText.current.value=uppertext
    }

    const capetlize =()=>{
        const inText = userin.current.value
         const word = inText.split(" ");
         
         const toCapitalize = word.map((e) => {
            return  e[0].toUpperCase() + e.substring(1)
         }).join(" ")
         resText.current.value=toCapitalize

    }

    const toCopy =()=>{
         navigator.clipboard.writeText(resText.current.value )
         
    }
    return (
        <div className='container w-100  my-5'>
            <textarea name="" id="" className='w-100 p-2' ref={userin}></textarea>
            <div className=" row  d-flex align-items-center justify-content-center my-2 ">
                <div className="col-sm btn btn-danger mx-2 px-3" onClick={upperCase}>UpperCase</div>
                <div className="col-sm btn btn-danger mx-2 px-3" onClick={lowerCase}>LowerCase</div>
                <div className="col-sm btn btn-danger px-3" onClick={capetlize}>Capetlize</div>
            </div>
            <textarea name="" id="" className='w-100 my-2 p-2' readOnly  ref={resText}></textarea>
            <button className='btn btn-danger mx-2 px-3' onClick={toCopy}>Copy</button>
        </div>
    )
}

export default NotePad
