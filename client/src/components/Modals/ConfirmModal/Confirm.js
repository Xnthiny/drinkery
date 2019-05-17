import React, { Component } from 'react';
import './Confirm.css';


class Confirm extends React.Component {
    state = { show: false }

    showModal = () => {
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }

    render() {
        return (
            <div>
                <main>
                    <h1>React Modal</h1>
                    <Modal show={this.state.show} handleClose={this.hideModal} >
                        <p>Modal</p>
                        <p>Data</p>
                    </Modal>
                </main>
                <button type='button' onClick={this.showModal}>Open</button>

            </div>
        )
    }
}

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                {children}
                <button
                    onClick={handleClose}
                >
                    Close
        </button>
            </section>
        </div>
    );
};
export default Confirm;
