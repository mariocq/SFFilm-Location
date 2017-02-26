import React, { Component } from 'react';

class MsgModule extends Component {
  render() {
    return (
      <div className="modal fade" id="infoModal" tabIndex="-1" role="dialog" aria-labelledby="Infomation" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h4 className="modal-title" id="myModalLabel">Infomation</h4>
                  </div>
                  <div className="modal-body">
                      <span id="resultMsg"></span>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal" id="btnMsgClose">Close</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default MsgModule;
