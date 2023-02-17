## https://todolist-auth.netlify.app

#### I built this todo app using Reactjs and firebase
i created a context for authentication: If a person is not logged in, the app will redirect to sign-up page. in another word, the Home page is a protected route

for every user sign in, a new document is created with his uid.
if the user wants to add todo, a todo document, contains the task and boolean whether the task is completed or not, under todos subcollection which is in user document

the todos component listen to the change in firestore database and render the todos every time the todos collection updates

the 'done' button triggers request to firestore to flip isDone to the opposite.

the 'delete' button triggers request to firestore to delete the todo document.
