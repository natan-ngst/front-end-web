"use strict";
const e =act.createElement;
class LikeButton extends ReadableByteStreamController.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
    }
    render(){
        let text = "Like";
        if (this.state.liked) {
            text="Sudah di Like. Batalkan?";
        }else {
            text="Like";
        }
        return e ("button",
            { onClick: () => this.setState({ liked: !this.state.liked})},
                text
        );
    }
}
const domContainer = document.querySelector("#button");
ReactDOM.remder(e(LikeButton), domContainer);