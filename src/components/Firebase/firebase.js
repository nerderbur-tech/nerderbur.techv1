import app from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyDC229bILrVw_IyG230d4N8eswffRexP8w",
  authDomain: "thebusiness876-16b33.firebaseapp.com",
  databaseURL: "https://thebusiness876-16b33.firebaseio.com",
  projectId: "thebusiness876-16b33",
  storageBucket: "",
  messagingSenderId: "19829736158",
  appId: "1:19829736158:web:e96358208176816b",
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.firestore = app.firestore()
  }

  leads = () => this.firestore.collection(`users`)
}

export default Firebase
