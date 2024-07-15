let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let colArr = await getColleges();
    console.log(colArr);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = ''; // Clear the list before adding new items
    for (let col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.textContent = col.name;
        list.appendChild(li);
    }
}

async function getColleges() {
    let country = document.querySelector("input").value;
    console.log(country);
    try {
        let res = await axios.get(url + country);
        console.log(res.data);
        return res.data;
    } catch (e) {
        console.log("Error - ", e);
        return [];
    }
}
