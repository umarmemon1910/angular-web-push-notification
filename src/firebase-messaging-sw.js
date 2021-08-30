importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyDFW2IwRK_6lIqRwu5TtAW28osCHv2Gd9w",
    authDomain: "tastio-pushnotification.firebaseapp.com",
    projectId: "tastio-pushnotification",
    storageBucket: "tastio-pushnotification.appspot.com",
    messagingSenderId: "318451349182",
    appId: "1:318451349182:web:1d5885573122f93cba50ef",
    measurementId: "G-4YQKMNH3C3"
});
const messaging = firebase.messaging();