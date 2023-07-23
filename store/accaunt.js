

export const state =()=>({
  me:{},
  loginIn:false,
})
export const mutations = {
  set_login(state,data){
    state.me = data
  },
  set_tokken(state,valid){
    state.loginIn = valid
  },
}
