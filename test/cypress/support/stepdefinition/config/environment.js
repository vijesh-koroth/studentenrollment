
export function defineenv(reqtype)
{
    let url="http://localhost:3301/student/";
    Cypress.env("url",url);
    if(reqtype=='GET2')
    {
        reqtype=reqtype.replace('GET2','GET');
    }
    cy.log(reqtype);
    Cypress.env("method",reqtype);
}
