import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';

const Modal = ({ isShowing, hide, text }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"></div>
      <div className="modal-wrapper" aria-modal="true" aria-hidden="true" tabIndex="-1" role="dialog">
        <div className="modal modal-size-regular">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}><span aria-hidden="true">×</span></button>
                </div>
                <div className="modal-body">
                    <div className="row my-3">
                        <div className="justify-content-center">
                          <Typography variant="h6" gutterBottom>
                            DESCRIÇÃO
                          </Typography>
                          <Typography variant="subtitle1" gutterBottom>
                            {text}
                          </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </React.Fragment>, document.body
) : null;

export default Modal;