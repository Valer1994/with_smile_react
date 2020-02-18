import React from 'react';
import classnames from 'classnames';
import { close } from '../../../images';
import Paper from '../../Atoms/Paper';
import { createPortal } from 'react-dom';

import './style.scss';

const Modal = ({
    lang,
    onClose,
    flexName,
    children,
    className,
}) => (
    createPortal(<Paper
        className={classnames('modal',{[className]: className,[flexName]: flexName})}
    >
        <Paper className='modalContent'>
            {onClose && <Paper onClick={onClose} className='closeModal'>
                <img src={close} alt="close_modal" className='closeModal_img'/>
            </Paper>}
            {children}
        </Paper>
    </Paper>,
    document.querySelector('#modal_div')
    )
);

export default Modal;