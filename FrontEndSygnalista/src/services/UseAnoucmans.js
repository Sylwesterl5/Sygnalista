import { API } from "const";

export const getAllWiadomosci = async ()=> {
    const result = await  fetch(`${API}/api/allWiadomosci`);
    const data = await result.json();
    return data
}