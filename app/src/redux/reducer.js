 let reducer = (state,action) => {
    switch(action.type){
        case 'gameId': return{
            name: action.playLoad
        }
    }
    return state
}
export default reducer