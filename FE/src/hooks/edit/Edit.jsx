import styles from './Edit.module.scss';
import React, {
    ReactChild,
    ReactFragment,
    RefObject,
    useMemo,
    useState,
} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'align',
    'color',
    'background',
    'size',
    'h1',
];

export default function Edit() {



    return (
        <div className={styles.mainBg}>
            <div className={styles.topic}>
                <p>주제</p>
                <select name="" id="">
                    <option value="">주제를 선택해주세요</option>
                    <option value="">사는얘기</option>
                    <option value="">모임&스터디</option>
                </select>
            </div>
            <div className={styles.title}>
                <p>제목</p>
                <input type="text" placeholder='제목을 입력해주세요' />
                <button onClick={() => { console.log("클릭") }}>등록</button>
            </div>
            <QuillEditor />
        </div>
    )
}

function QuillEditor() {
    const [values, setValues] = useState();

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ align: [] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [
                        {
                            color: [],
                        },
                        { background: [] },
                    ],
                ],
            },
        };
    }, []);


    console.log(values);

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={setValues}
            style={{ width: '100%', height: '600px', backgroundColor: 'white' }}
        />
    );
}