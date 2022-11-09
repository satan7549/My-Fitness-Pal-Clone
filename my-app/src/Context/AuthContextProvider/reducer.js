// reducer related to auth state;

const reducer =(state , action)=>{
    switch(action.type){
        case "LOGIN_LOADIN" :{
            return {
                isLoading:true,
                isAuth:false,
                isError:false,
                token:null
            }
        }
        case "LOGIN_SUCESS" :{
            return {
                isLoading:false,
                isAuth:true,
                isError:false,
                token: action.payload
            }
        }
        case "LOGIN_FAILURE" :{
            return {
                isLoading:false,
                isAuth:false,
                isError:true,
                token: null
            }
        }
        default : {
            return state;
        }
    }

}

export default reducer;