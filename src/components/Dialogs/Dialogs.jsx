import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message}/>);

        // task
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let testMessage = newMessageElement.current.value;
        alert(testMessage);
    }
    // task

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>

            {/* task */}
            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>

                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
            {/* task */}
        </div>
    )
}

export default Dialogs;

