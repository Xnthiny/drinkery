import React from 'react';
import ModalVideo from 'react-modal-video';
import '../Video/modal-video.scss';
import './Video.css'

class ModVid extends React.Component {
      
    constructor () {
        super()
        this.state = {
          isOpen: true
        }
        this.openModal = this.openModal.bind(this)
      }
    
      openModal () {
        this.setState({isOpen: true})
      }

      
      
    
      render () {
        return (
          <div >
            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='zpaLHwwYxE8' onClose={() => this.setState({isOpen: false})} />
            <button classname="video" id='video-button' onClick={this.openModal}>WATCH VIDEO</button>
          </div>
        )
      }
    }
        export default ModVid;