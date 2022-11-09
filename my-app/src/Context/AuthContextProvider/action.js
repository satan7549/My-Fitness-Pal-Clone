export const loginSucessAction = (data)=>({
    type:"LOGIN_SUCESS",
    payload: data,
  });

  export const loginFailureAction = ()=>({
    type:"LOGIN_FAILURE",
  });  