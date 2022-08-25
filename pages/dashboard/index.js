import React from 'react';
import Dash from '../../components/Dashboard/Dash';

export default function dashboard({ children }) {
    return (
        <>
            <Dash>
                <form className={'formDash'}>
                    <input placeholder='title' />
                    <textarea placeholder='Description'></textarea>
                    <button>Submit</button>
                </form>
            </Dash>
        </>
    );
};

