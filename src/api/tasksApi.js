import 'whatwg-fetch';

export function getTasks(){
    return get('tasks');
}

// export function deleteTask(id) {
//     return del(`users/${id}`);
// }

function get(url) {
    return fetch('http://localhost:3001/' + url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}

function del(url) {
    const request = new Request( url, {
        method: 'DELETE'
    });

    return fetch(request).then(onSuccess, onError);
}