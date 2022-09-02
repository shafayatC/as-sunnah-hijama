import React, { useState } from 'react';
import Dash from '../../components/Dashboard/Dash';
import Popup from '../../components/Popup';

const Slideroption = () => {

    const [getPopup, setPopup] = useState({
        msg: "",
        type: "",
        bool: false
    })

    const popUpOpen = (msg, type, bl) => {
        setPopup({
            msg: msg,
            type: type,
            bool: bl
        })
        setTimeout(() => setPopup({
            ...getPopup,
            bool: false
        }), 4000)
    }


    const submitBtn = (e) => {
        e.preventDefault();
        let input = document.querySelector('input[type="file"]')

        let data = new FormData()
        data.append('file', input.files[0])
        data.append('user', 'hubot')

        fetch('http://localhost:4000/postSlider', {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
            .then(result => {
                result && popUpOpen("submit successfully", "success", true)
                input.value = ""; 
            })
            .catch(err => {
                if (err) {
                    popUpOpen("submit not successfully", "danger", true)
                }
            })

    }

    return (
        <>
            <Dash title="Theme Options">
                <form className={'formDash'}>
                    <input name="foo" id="filupload" type="file" />
                    <button className='button_submit' onClick={submitBtn}>Submit</button>
                </form>
                {getPopup.bool && <Popup msg={getPopup.msg} type={getPopup.type} />}
            </Dash>
        </>
    );
};

export default Slideroption;