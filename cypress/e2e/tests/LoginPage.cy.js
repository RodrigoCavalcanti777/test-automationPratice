/// <reference types="cypress" />

import LoginPage from "../../support/pages/LoginPage";

beforeEach(() => {
    cy.visit('/');
});

it.only('CT-01 : Realizar Login de usuario Corretamente', () => {

    const email = "teste@test.com.br";
    const password = "10310322"

   
    LoginPage.acessLogin();
    LoginPage.validateLoginPage();
    LoginPage.FillEmail(email);
    LoginPage.FillPassword(password);
    LoginPage.Login();
    

});

it('CT-01 : Realizar Login de usuario Corretamente', () => {

    const email = "teste@test.com.br";
    const password = "10310322"

   
    LoginPage.acessLogin();
    LoginPage.validateLoginPage();
    LoginPage.FillEmail(email);
    LoginPage.FillPassword(password);
    LoginPage.Login();
    

});