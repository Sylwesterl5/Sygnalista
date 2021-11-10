export const getData = async ()=> {
    const result = await  fetch('http://localhost:3000/api/test');
    const data = await result.json();
    return data
}