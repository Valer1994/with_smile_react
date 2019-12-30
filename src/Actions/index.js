export const changeName = (id) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => dispatch({
        type: 'NAME',
        payload: data.name
    }))
};

export const changeSurName = (surname) => dispatch => {
    dispatch({
        type: 'SURNAME',
        payload: surname
    })
};

