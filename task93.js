// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

angular.module('chatApp', [])

.controller('ChatController', function() {
    var vm = this;

    vm.messages = [];
    vm.newMessage = '';

    var database = firebase.database();
    var messagesRef = database.ref('messages');

    messagesRef.on('child_added', function(snapshot) {
        vm.messages.push(snapshot.val());
    });

    vm.sendMessage = function() {
        if (vm.newMessage.trim() !== '') {
            messagesRef.push({
                sender: 'User',
                text: vm.newMessage
            });
            vm.newMessage = '';
        }
    };
});
