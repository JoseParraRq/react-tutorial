export async function getAllUserTypes() {
    const urlGetAllUserTypes = 'http://localhost:3000/getAllUserTypes';
    const response = await fetch(urlGetAllUserTypes);
    const responseJson = await response.json();
    const { data } = responseJson;
    console.log("here the response api in service", data[0].users);
    return await data[0].users;
    
}
