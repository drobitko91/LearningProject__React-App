let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 5},
                {id: 1, message: 'Hi, Goood!!', like: 10},
                {id: 1, message: 'try!', like: 7},
            ],
            newPostText: 'magic'
        },
        
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tom'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'Kate'},
                {id: 4, name: 'Lira'}, 
                {id: 5, name: 'Rob'},
            ],
    
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How r u?'},
                {id: 4, message: 'Great!'},
            ],
        },
        
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State was changed');
    },

    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0,
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
}



export default store;
// window.store = store;