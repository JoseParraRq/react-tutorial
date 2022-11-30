export async function getAllUsers() {
    const urlGetAllUsers = 'http://localhost:3000/getAllUsers';
    const response = await fetch(urlGetAllUsers);
    const responseJson = await response.json();
    const { data } = responseJson;
    console.log("here the response api in service", data[0].users);
    return await data[0].users;
}

export async function saveUser(user) {
    const urlSaveUser = 'http://localhost:3000/createUser';
    const response = await fetch(urlSaveUser);
    const responseJson = await response.json();
    // const { data } = responseJson;
    console.log("here the response api in service", responseJson);
}

// export  getAllUsers;