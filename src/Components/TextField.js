import "../TextField.css";
import React from 'react';

function TextField(){
    return(
        <div className="form_group">
            <input type={input} className="form_field" placeholder="Name" />
            <label for="name" className="form_label">Name</label>
        </div>
    );
}

export default TextField;