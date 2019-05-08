import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


const ddInput = (props) => {
    let title ="";
    let dropDownItem = "";
    let dropDownValue = 0;


    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {title}
        </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/" value={dropDownValue}>{dropDownItem}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ddInput;