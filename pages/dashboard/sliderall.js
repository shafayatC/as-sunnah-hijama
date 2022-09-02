import React, { useEffect, useState } from 'react';
import Dash from '../../components/Dashboard/Dash';
import Image from 'next/image';
import styles from '../../styles/DashForm.module.scss';
import Popup from '../../components/Popup';

const Sliderall = () => {

    const [srvImage, setSrvImage] = useState([]);
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

    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }

    const selectAll = () => {

        const parrent = document.querySelector("#img_form");
        const status = document.querySelector("#makrStatus")
        const checkBox = document.querySelector("#checkBox")

        for (let i = 0; i < parrent.childElementCount; i++) {
            const check = document.querySelector("#ck_" + i);
            check.checked = checkBox.checked;
        }

        if (checkBox.checked == true)
            status.innerText = "Unmark all";
        else
            status.innerText = "Mark all";
    }

    const submitBtn = (e) => {
        e.preventDefault();

        const parrent = document.querySelector("#img_form");

        const getImageId = [];

        for (let i = 0; i < parrent.childElementCount; i++) {
            const check = document.querySelector("#ck_" + i);
            if (check.checked) {
                getImageId.push(check.value);
                check.parentElement.style.display = "none";
            }
        }

        console.log(getImageId);

        fetch('http://localhost:4000/delete_slide', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(getImageId),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                popUpOpen("Successfully remove", "success", true);
            })
            .catch((error) => {
                popUpOpen("Slider image not remove", "danger", true)
                console.error('Error:', error);
            });
    }
    useEffect(() => {

        fetch("http://localhost:4000/allsld")
            .then(res => res.json())
            .then(data => {
                setSrvImage(data)
            })

    }, [])

    return (
        <>
            <Dash title="All Slide">
                <form className={'formDash'}>
                    <div className={styles.formHeading}>
                        <input id="checkBox" onClick={selectAll} type="checkbox" name="vehicle1" /><span id="makrStatus">Mark All</span>
                    </div>
                    <div id="img_form" className={styles.img_form} >
                        {srvImage.map((data, index) =>
                            <div className={styles.imgWrap} key={index}>
                                <input id={"ck_" + index} type="checkbox" name="vehicle1" value={data.id} />
                                <div className={styles.img}>
                                    <Image
                                        loader={myLoader}
                                        src={"http://" + data.url}
                                        alt="Picture of the author"
                                        width={65}
                                        height={70}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <button className='button_submit' onClick={submitBtn}>Delete</button>

                </form>
                {getPopup.bool && <Popup msg={getPopup.msg} type={getPopup.type} />}

            </Dash>
        </>
    );
};

export default Sliderall;