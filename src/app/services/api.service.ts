import { Injectable } from '@angular/core'
import { initializeApp, database, auth } from 'firebase'

@Injectable()
export class ApiService {
    auth: auth.Auth
    database: database.Database

    constructor() {
        (window as any).apiService = this 

        initializeApp({
            apiKey: "AIzaSyDUOwdGKIjlQjGEdR05rs4HjZJwIEKrI4M",
            authDomain: "ng-chat-3b411.firebaseapp.com",
            databaseURL: "https://ng-chat-3b411.firebaseio.com",
            projectId: "ng-chat-3b411",
            storageBucket: "ng-chat-3b411.appspot.com",
            messagingSenderId: "48163204275",
            appId: "1:48163204275:web:af7875dcd16610ede4d4c6"
        })

        this.database = database()
        this.auth = auth()
    }

    watch = (path: string, handler: (data: any) => void): { unsubscribe: () => void } => {
        const wrappedHandler = snapshot => handler(snapshot.val())
        const ref = this.database.ref(path)
        ref.on('value', wrappedHandler)
        const unsubscribe = () => ref.off('value', wrappedHandler)
        return { unsubscribe }
    }

    // fetch = () => {}

    // update = (path: string, data: ) => 

}