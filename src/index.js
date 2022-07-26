import './style.css';

const scores = [

    {
        id: 1,
        name: 'name',
        score: 100,
    },
    {
        id: 2,
        name: 'name',
        score: 100,
    },
    {
        id: 3,
        name: 'name',
        score: 100,
    },
    {
        id: 4,
        name: 'name',
        score: 100,
    },
    {
        id: 5,
        name: 'name',
        score: 100,
    },
    {
        id: 6,
        name: 'name',
        score: 100,
    },
    {
        id: 7,
        name: 'name',
        score: 100,
    },
]

document.title = "Leaderboard";

const header = document.createElement('header');
const headerTitle = document.createElement('h1');
const titleText = document.createTextNode("Leaderboard");
headerTitle.appendChild(titleText);
header.appendChild(headerTitle);
document.body.appendChild(header);


const section = document.createElement('section');
section.className = "container";

const divTable = document.createElement('div');
divTable.className = "divTable";

const divTableTitle = document.createElement('h2');
const divTableText = document.createTextNode("Recent scoresss");
divTableTitle.appendChild(divTableText);
const divTableRefreshButton = document.createElement('button');
divTableRefreshButton.className = "refreshBtn";

divTableRefreshButton.innerHTML = 'Refresh';
divTable.appendChild(divTableTitle);
divTable.appendChild(divTableRefreshButton);

const divForm = document.createElement('div');
divForm.className = "divForm";

const divFormTitle = document.createElement('h2');
const divFormText = document.createTextNode("Add your score");
divFormTitle.appendChild(divFormText);

const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", "");

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "FullName");
nameInput.setAttribute("placeholder", "Your Name");

var scoreInput = document.createElement("input");
scoreInput.setAttribute("type", "text");
scoreInput.setAttribute("name", "score");
scoreInput.setAttribute("placeholder", "Your Score");


const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");

form.appendChild(nameInput);


form.appendChild(scoreInput);

form.appendChild(submitButton);


divForm.appendChild(divTableText);
divForm.appendChild(form);




const table = document.createElement("table");
table.setAttribute("id","tableId");

const tableBody = document.createElement("tbody");

scores.forEach((score) => {

    const row = document.createElement("tr");
    const td = document.createElement("td");
    td.appendChild(document.createTextNode(`${score.name} : ${score.score}`))
    row.appendChild(td);
    tableBody.appendChild(row);
})

table.appendChild(tableBody);
divTable.appendChild(table);
section.appendChild(divTable);
section.appendChild(divForm);

document.body.appendChild(section);




