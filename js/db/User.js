const localStorageUserKey_f = "FIRSTNAME";
const localStorageUserKey_l = "LASTNAME";
class User {

    constructor(data){
        if (User.exists) {
            return User.instance;
        } else {
            if(data && data.firstName && data.lastName){
                this._firstName = data.firstName;
                this._lastName = data.lastName;
                this.saveInLocalStorage();
                User.instance = this;
                User.exists = true;
                return this;
            }
        }
    }


    saveInLocalStorage(){
        window.localStorage.setItem(localStorageUserKey_f, this._firstName)
        window.localStorage.setItem(localStorageUserKey_l,this._lastName)
    }

    get firstName(){
        return this._data.firstName;
    }
    get lastName(){
        return this._data.lastName;
    }

    get user(){  
        const first = this._firstName || window.localStorage.getItem(localStorageUserKey_f);
        const last = this._lastName || window.localStorage.getItem(localStorageUserKey_l);

        if (first && last) {
            return new User({
                firstName:first,
                lastName: last
            })
        }
        if (!first && !last){
            return null;
        }
        return {
            firstName:first,
            lastName: last
        }
    }
    

}
