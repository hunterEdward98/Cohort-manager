let cohorts = [
{
    name: `Alpha`,
    status: `In Tier 3`,
    count:10
},
{
    name: `Bravo`,
    status: `In Tier 2`,
    count:5
},
{
    name: `Charlie`,
    status: `Recruiting`,
    count:0
},
{
    name: `Delta`,
    status: `N/A`,
    count:0
}
];
debugger;

function clearTable(){
    console.log("empty table body");
    
    $('table tbody').empty();

    console.log("emptied table body");
}

function setUp(){
    clearTable();
    debugger;
    let body = $('table tbody');
    for(let cohort of cohorts){
        let tr = $(`<tr></tr>`);//What's messed up
        tr.append(`<th>${cohort.name}</th>`);
        tr.append(`<th>${cohort.status}</th>`);
        tr.append(`<th>${cohort.count}</th>`);
        tr.append(`<th><button class = "deleteButton">Delete Row</button></th>`);
        $(body).append(tr);
    }
    // delete button
    $('.deleteButton').on('click', function(event){
        const el = event.target;
        $(el).closest('tr').remove();
        console.log($(el).parent());
        console.log($(el).parent().parent());
        // $(el).parent().parent().remove();
    });

    //clear table button
    $(`.content`).append(`<button id = 'clearTable'>Clear Table</button>`);
    $(`#clearTable`).on('click', clearTable);

}
$(document).ready(setUp);
