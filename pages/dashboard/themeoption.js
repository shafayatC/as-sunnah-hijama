import React from 'react';
import Dash from '../../components/Dashboard/Dash';
const themeoption = () => {
    return (

<Dash>
<form className={'formDash'}>
                                <input placeholder='title'/>
                                <textarea placeholder='Description'></textarea>
                                <button>Submit</button>
                            </form>
</Dash>
            

    );
};

export default themeoption;