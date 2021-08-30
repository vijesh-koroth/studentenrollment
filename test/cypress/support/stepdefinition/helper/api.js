export function definepostbody(firstname,classname,lastname,nationality,studentid)
{
        let body={
        "firstname":firstname,
        "class":classname,
        "lastname":lastname,
        "nationality":nationality,
        "studentid":studentid
    }    
    Cypress.env('body',body);
}

export function defineputbody(classname)
{
    let body={
        "class":classname
    }
    Cypress.env('body',body);
}

export function sendRequest(apiurl)
{
    cy.request({
        method: Cypress.env("method"),
        url: apiurl,
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json',
        },
        body: Cypress.env('body'),
    }).then((response) => {
        // if (response.status === 200) {
        //     Cypress.env('dynData', dynData);
        // }
        Cypress.env('response', response);
    });
}
