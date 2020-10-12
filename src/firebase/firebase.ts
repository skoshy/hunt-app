import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseConfig } from 'src/firebase/config';

class Firebase {
  public app: typeof app;
  public auth: app.auth.Auth;
  public db: app.firestore.Firestore;

  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app;
    this.auth = app.auth();
    this.db = app.firestore();
  }
}

export const firebase = new Firebase();
