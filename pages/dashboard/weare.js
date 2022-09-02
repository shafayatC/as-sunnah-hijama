import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
import Dash from '../../components/Dashboard/Dash'
import MenuMce from '../../components/Dashboard/MenuMce'


const Weare = () => {

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        onUpdate({ editor }) {
            setText(editor.getHTML())
        },
        content: ``,
    })

    const [getContent, setContent] = useState({
        title: '',
        description: '',
    });

    const [file, setFile] = useState(null);

    const [getText, setText] = useState();
    const [getLoadImage, setLoadImage] = useState(null);

    const onchangeTitle = (event) => {
        setContent({
            ...getContent,
            title: event.target.value,
        })
    }

    const onchangeImg = (e) => {
        const newFile = e.target.files[0];
        const showImage = document.getElementById("uploadImage");
        setFile(newFile);
        showImage.style.display = 'none';
        /*
        setLoadImage(false)

        if (file) {
            setLoadImage(true)
            showImage.style.display = 'block';
            showImage.src = URL.createObjectURL(file)
            console.log(URL.createObjectURL(file))
        }
        */
    }

    const submitEvent = (e) => {
        e.preventDefault();

        let ValidityMsg = [];
        const imgValid = /\.(jpeg|jpg|gif|png)$/.test(file.name);

        console.log(imgValid);
        !getContent.title && ValidityMsg.push("Event Title Empty");
        !getText && ValidityMsg.push("Description Empty");
        !imgValid && ValidityMsg.push("Add valide image")


        if (getContent.title && getText && imgValid) {

            const data = new FormData()
            data.append('file', file)
            data.append('title', getContent.title)
            data.append('description', getText)

            fetch('https://shrouded-eyrie-22901.herokuapp.com/addService', {
                method: 'POST',
                body: data
            })
                .then(res => res.json())
                .then(result => alert(result))
                .catch(err => console.log(err))

                document.getElementById("warningMsg").innerHTML = "";

        } else {
            const mapping = ValidityMsg.map(res => '<li>' + res + '</li>');
            document.getElementById("warningMsg").innerHTML = mapping;
        }
    }

    const myForm = (e) => {
        //   e.preventDefault();
    }
    return (
        <div>
            {/*
            <div dangerouslySetInnerHTML={{ __html: getContent.description }} />
            */}
            <h1>{getContent.title}</h1>
            <Dash title="Theme Options">
                <div className={'formDash'}>
                    <input onBlur={onchangeTitle} type="text" placeholder='input title' />
                    <MenuMce editor={editor} />
                    <EditorContent editor={editor} />
                    <div className='imageUpload'>
                        <input onBlur={onchangeImg} name="foo" id="filupload" type="file" />
                        <div className='img'>
                            {getLoadImage == false &&
                                <div className='load'><span className=' icon-spin4 animate-spin'></span></div>
                            }
                            <img src="#" id="uploadImage" />
                        </div>
                    </div>
                    <button className='button_submit' onClick={submitEvent}>Submit</button>
                    <ul id="warningMsg"></ul>
                </div>

            </Dash>

        </div>
    )
}

export default Weare; 