import React, { Component } from 'react'
import {createPortal} from 'react-dom'
//styles
import './Modal.scss'

const ModalRoot = document.querySelector('#modal-root');

class Modal extends Component   {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
         window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown= e => {
        if (e.code === "Escape") {
            this.props.onClose()
       }
    }
    
    handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose()
       }
    }

    render() {
        return createPortal(
            <div className='Overlay' onClick={this.handleBackdropClick}>
                <div className='Modal'>
                    <img src={this.props.currentLargeImage} alt={this.props.searchQuery} /></div>
            </div >
            , ModalRoot)
    }
  
}

export default Modal