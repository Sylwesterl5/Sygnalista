export const Test = async (e)=> {   // inny syntext dla plromisu
    //e.praventDefault();
    console.log(e.target[1].value + '   ' + e.target[2].value);
    const title = document.querySelector(e.target[1].value);
    const description = document.querySelector(e.target[2].value);
    //const a = document.querySelector('a');
    console.log(description + '   ' + title);

    const url = `http://localhost:300/?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

   //a.setAttribute('href', url); // przekazanie atrybut i przejście do url
}