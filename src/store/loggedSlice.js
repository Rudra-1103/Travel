import { configureStore, createSlice, legacy_createStore } from "@reduxjs/toolkit";


const loggedSlice = createSlice({
    name:'loggedin',
    initialState:{
        logged:false,
        name:'',
        email:'',
        password:'',
        country:'',
        birthday:'',
        state:'',
        gender:'',
        marital:'',
        pincode:'',
        address:''
    },
    reducers:{
        login: (state, payload) =>{
            console.log(payload);
           state.logged = true;
           state.name = payload.payload.name;
           state.email = payload.payload.email;
           state.password = payload.payload.password;
           state.country = payload.payload.country;
           state.image = payload.payload.image;
        },
        signout: (state)=>{
            state.logged = false;
            state.name = '';
            state.email ='';
            state.password ='';
            state.country = '';
            state.image=''
        },
        updation:(state, payload)=>{
           state.name = payload.payload.name;
           state.email = payload.payload.email;
           state.password = payload.payload.password;
           state.country = payload.payload.country;
           state.image = payload.payload.image;
           state.birthday=payload.payload.birthday
           state.gender=payload.payload.gender
           state.marital=payload.payload.marital
           state.state=payload.payload.state
           state.pincode=payload.payload.pincode
           state.address=payload.payload.address
        }
    }
})

const store = configureStore({
    reducer:{loggedin:loggedSlice.reducer}
})
export const loggedinActions = loggedSlice.actions

export default store;