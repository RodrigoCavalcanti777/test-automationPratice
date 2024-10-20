/// <reference types="cypress" />

const acessLoginPage = '.fa-user';
const email = '#user';
const senha = '#password';
const btnLogin = '#btnLogin';
const validatePage = '.account_form>h3';


class LoginPage {

    acessLogin(){
        cy.get(acessLoginPage)
            .should('exist')
                .click();
    }
    
    FillEmail (mail){
        cy.get(email)
            .type(mail)
                .should('exist');
    }

    FillPassword(password){
        cy.get(senha)
            .type(password)
                .should('exist');
    }

    Login(){
        cy.get(btnLogin)
            .should('exist')
                .click();
    }

    validateLoginPage(){
        cy.get(validatePage)
            .should('exist');
    }
}

module.exports = new LoginPage();