/// <reference types="cypress"/>

const acessPage = '.fa-lock';
const RegisterName = '#user';
const RegisterEmail = '#email';
const RegisterPassword = '#password';
const btnRegister = '#btnRegister';


class RegisterPage {

    acessPageRegister(){
        cy.get(acessPage)
            .should('exist')
                .click();
    }

    FillName(name){
        cy.get(RegisterName)
            .type(name)
                .should('exist')
    };

    FillEmail(email){
        cy.get(RegisterEmail)
            .type(email)
                .should('exist')
    };

    FillPassword(password){
        cy.get(RegisterPassword)
            .type(password)
                .should('exist')
    }

    RegisterBtn(){
        cy.get(btnRegister)
            .should('exist')
                .click()        
    }



}

module.exports = new RegisterPage();