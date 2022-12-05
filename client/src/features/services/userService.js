export async function getAllUsers() {
    const urlGetAllUsers = 'http://localhost:3000/getAllUsers';
    const response = await fetch(urlGetAllUsers);
    const responseJson = await response.json();
    const { data } = responseJson;
    return await data[0].users;
}

export async function getUserById(id) {
    console.log("here the id in request getuserById",id);

    const body = JSON.stringify({
        "userId":id
    });
    const urlGetUserById = 'http://localhost:3000/getUserById';
    const request = await fetch(urlGetUserById,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:body
    });
    const responseJson = await request.json();
    const { data } = responseJson;
    return await data[0].user;
}

export async function saveUser(user) {
    console.log("here the user in request createUser",user);
    console.log("here the user in json format", JSON.stringify(user));
    const body = JSON.stringify(user);
    const urlSaveUser = 'http://localhost:3000/createUser';
    const request = await fetch(urlSaveUser,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body:body
    });
}

export async function updateUserService(user) {
    console.log("here the user in request updateUser",user);
    console.log("here the user in json format", JSON.stringify(user));
    const body = JSON.stringify(user);
    const urlUpdateUser = 'http://localhost:3000/updateUser';
    const request = await fetch(urlUpdateUser,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body:body
    });
}

// export  getAllUsers;