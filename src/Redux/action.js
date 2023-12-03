export const ADD_RESULT = "ADD_RESULT";

export const add_result = (payload) => {
    return ({
        type:ADD_RESULT,
        payload:payload
    })
}