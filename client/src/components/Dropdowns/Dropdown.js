import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


const ddInput = (props) => {
    let title ="";
    let dropDownItem = "1";
    let dropDownValue = 0;

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {title}
        </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/" value={15}>{dropDownItem}</Dropdown.Item>
                <Dropdown.Item href="/" value={25}>{dropDownItem}</Dropdown.Item>
                <Dropdown.Item href="/" value={25}>{dropDownItem}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ddInput;