import React, { useEffect, useState } from 'react';
import Dash from '../../components/Dashboard/Dash';
import Popup from '../../components/Popup';
import styles from '../../styles/DashForm.module.scss';

const Themeoption = () => {

    const [getPopup, setPopup] = useState({
        msg: "",
        type: "",
        bool: false
    });

    const [theme, setTheme] = useState({
        facebook: '',
        twitter: '',
        youtube: '',
        pinterest: '',
        instagram: '',
        linkedin: '',
        phone: '',
        email: '',
        copyright: '',
        themecolor: '',
        backup: ''
    })


    const onchangeFacebook = (e) => {
        setTheme({ ...theme, facebook: e.target.value, })
    }

    const onchangeTwitter = (e) => {
        setTheme({ ...theme, twitter: e.target.value, })
    }

    const onchangeYoutube = (e) => {
        setTheme({ ...theme, youtube: e.target.value, })
    }

    const onchangePinterest = (e) => {
        setTheme({ ...theme, pinterest: e.target.value, })
    }

    const onchangeInstagram = (e) => {
        setTheme({ ...theme, instagram: e.target.value, })
    }

    const onchangeLinkedin = (e) => {
        setTheme({ ...theme, linkedin: e.target.value, })
    }

    const onchangePhone = (e) => {
        setTheme({ ...theme, phone: e.target.value, })
    }

    const onchangeEmail = (e) => {
        setTheme({ ...theme, email: e.target.value, })
    }

    const onchangeCopyright = (e) => {
        setTheme({ ...theme, copyright: e.target.value, })
    }

    const onchangeThemecolor = (e) => {
        setTheme({ ...theme, themecolor: e.target.value, })
    }

    const onchangeBackup = (e) => {
        setTheme({ ...theme, backup: e.target.value, })
    }
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

        const ValidityMsg = [];

        const emailCheck = /\S+@\S+\.\S+/.test(theme.email)
        const numberCheck = /^\d+$/.test(theme.phone);

        !emailCheck && ValidityMsg.push("email is not valid or empty");
        !numberCheck && ValidityMsg.push("phone number is not valid or empty");

        console.log(ValidityMsg)

        if (emailCheck && numberCheck) {

            fetch('http://localhost:4000/theme', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(theme),
            })
                .then(res => res.json())
                .then(data => {
                    popUpOpen("Submit successfully", "success", true);
                })
                .catch((error) => {
                    popUpOpen("submit not successfully", "danger", true)
                    console.error('Error:', error);
                });

            document.getElementById("warningMsg").innerHTML = "";
        } else {
            const mapping = ValidityMsg.map(res => '<li>' + res + '</li>');
            document.getElementById("warningMsg").innerHTML = mapping;
        }
    }

    useEffect(() => {
        fetch("http://localhost:4000/getTheme")
            .then(res => res.json())
            .then(data => {
                setTheme({
                    facebook: data[0].facebook,
                    twitter: data[0].twitter,
                    youtube: data[0].youtube,
                    pinterest: data[0].pinterest,
                    instagram: data[0].instagram,
                    linkedin: data[0].linkedin,
                    phone: data[0].mobile,
                    email: data[0].email,
                    copyright: data[0].copyright,
                    themecolor: data[0].themecolor,
                    backup: data[0].backup
                })
            })

    }, [])

    return (

        <Dash title="Theme Options">
            <form className={'formDash'}>
                <div className={styles.formSeperat}>
                    <h4>Social Media {getPopup.msg}</h4>
                    <div className={styles.socialForm}>
                        <div className={styles.social}>
                            <i className='icon-facebook' />
                            <input onChange={onchangeFacebook} value={theme.facebook} placeholder='facebook page url' />
                        </div>
                        <div className={styles.social}>
                            <i className='icon-twitter' />
                            <input onChange={onchangeTwitter} value={theme.twitter} placeholder='twitter page url' />
                        </div>
                        <div className={styles.social}>
                            <i className='icon-linkedin' />
                            <input onChange={onchangeLinkedin} value={theme.linkedin} placeholder='linkedin page url' />
                        </div>

                        <div className={styles.social}>
                            <i className='icon-youtube' />
                            <input onChange={onchangeYoutube} value={theme.youtube} placeholder='youtube page url' />
                        </div>
                        <div className={styles.social}>
                            <i className='icon-instagram' />
                            <input onChange={onchangeInstagram} value={theme.instagram} placeholder='instagram page url' />
                        </div>
                    </div>

                    <div className={styles.formSeperat}>
                        <h4>Contact Information</h4>
                        <div className={styles.socialForm}>

                            <div className={styles.social}>
                                <i className=' icon-phone' />
                                <input type="number" onChange={onchangePhone} value={theme.phone} placeholder='phone number' />
                            </div>

                            <div className={styles.social}>
                                <i className='icon-mail' />
                                <input onChange={onchangeEmail} value={theme.email} placeholder='email' />
                            </div>

                        </div>
                    </div>

                    <div className={styles.formSeperat}>
                        <h4>Others Information</h4>
                        <div className={styles.socialForm}>

                            <div className={styles.social}>
                                <i className='icon-copyright' />
                                <input onChange={onchangeCopyright} value={theme.copyright} placeholder='copyright' />
                            </div>

                            <div className={styles.social}>
                                <i className='icon-water' />
                                <input type="color" onChange={onchangeThemecolor} value={theme.themecolor} placeholder='theme color' />
                            </div>
                            <div className={styles.social}>
                                <i className='icon-spin4' />
                                <textarea onChange={onchangeBackup} value={theme.backup} placeholder='backup'></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="warningMsg"></div>
                <button className='button_submit' onClick={submitBtn}>Submit</button>
            </form>

            {getPopup.bool && <Popup msg={getPopup.msg} type={getPopup.type} />}
        </Dash>
    );
};

export default Themeoption;