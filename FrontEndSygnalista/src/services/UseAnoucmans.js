export const getAllWiadomosci = async ()=> {
    const result = await  fetch('http://localhost:3000/api/allWiadomosci');
    const data = await result.json();
    return data
}