# WhatsApp - by Mayank

A React app with WhatsApp UI and message sending capability.

## Packages/Services Used-

### @material-ui/core
For giving Flat UI to the App 🤘
### @material-ui/icons
For using Flat icons in the App 😎
### firebase
To host and use firestore from FireBase services 🚀
### react-router-dom
For adding routing to diffrent rooms 👉
### Context API (with useReducer Hook)
To maintain a global state for the logged in user 🤝
### https://avatars.dicebear.com/
For generating random avatars 👽


## Extra touches-

        Added auto scroll on chat body with just one line of code. 
        As soon as new msg arrives, chat__body is scrolled to end.
        Hidden scroll bar for better look.
        Hidden username for our own messages.

        Timestamp on text shifted to below message text and will stick to right side.
        Timestamp creation takes a split second, show ... till we dont have timestamp.
        Timestamp stripped to local time string , gives more WhatsApp-ish feel. Eg- 12:31:27 AM.
        Timestamp is not shown in chat header if room is newly created and we do not have any messages.

        Added few null checks, formatting and keys to all component maps.
        Refactored the code to be more clean and devided into small components.

        Added whatsapp icon and name for title bar.

## Coming Soon

        Will be adding Persistant layer to the State, so that we dont have to login on each refresh
        Search chat functionality
        Media sending functionality
        private Mode to expose chat room to only the allowed user 