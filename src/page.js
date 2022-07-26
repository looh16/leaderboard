export const htmlPage = () => {
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
    
    //set page title
    document.title = "Leaderboard";
    
    //page header
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    const titleText = document.createTextNode("Leaderboard");
    headerTitle.appendChild(titleText);
    header.appendChild(headerTitle);
    document.body.appendChild(header);
    
    //section
    const section = document.createElement('section');
    section.className = "container";
    
    //div for table
    const divTable = document.createElement('div');
    divTable.className = "divTable";
    
    const divTableHeader = document.createElement('div');
    divTableHeader.className = "tableHeader";
    
    const tableTitle = document.createElement('h2');
    tableTitle.className = "tableTitle";
    
    const tableTitleText = document.createTextNode("Recent score");
    tableTitle.appendChild(tableTitleText);
    const tableRefreshButton = document.createElement('button');
    tableRefreshButton.className = "refreshBtn";
    
    tableRefreshButton.innerHTML = 'Refresh';
    divTableHeader.appendChild(tableTitle);
    divTableHeader.appendChild(tableRefreshButton);
    divTable.appendChild(divTableHeader);
    
    //div for form
    const divForm = document.createElement('div');
    divForm.className = "divForm";
    
    const divFormTitle = document.createElement('h2');
    divFormTitle.className = "formTitle";
    
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
    submitButton.className = "btnSubmit";
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Submit");
    
    form.appendChild(nameInput);
    
    
    form.appendChild(scoreInput);
    
    form.appendChild(submitButton);
    
    
    divForm.appendChild(divFormTitle);
    divForm.appendChild(form);
    
    
    
    //table
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
}