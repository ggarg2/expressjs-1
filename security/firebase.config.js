//Firebase Starts
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./my-proj12-firebase-adminsdk-4izho-a23f4031ea.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://my-proj12.firebaseio.com"
});

module.exports = (req, res, next)=>{ 
    let idToken = req.headers['authorization'];
    firebaseAdmin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      let uid = decodedToken.uid;
      let email = decodedToken.email;
      console.log("UID is ", uid)
      console.log("email is ", email)
      next();
    })
    .catch((error) => {
        console.log("inside catch")
        console.log(error)
        res.status(403).send(error.message)
    });     
};