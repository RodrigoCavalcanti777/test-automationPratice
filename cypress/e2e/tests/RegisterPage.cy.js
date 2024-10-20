/// <reference types="cypress"/>

import { faker} from "@faker-js/faker";
import RegisterPage from "../../support/pages/RegisterPage";

beforeEach(() => {
    cy.visit('/');
    
});

const name = faker.person.fullName();
const email = faker.internet.email();
const password = faker.internet.password();

it('CT-01 : Realizar cadastro de usuario corretamene', () => {
    
    RegisterPage.acessPageRegister();
    RegisterPage.FillName(name);
    RegisterPage.FillEmail(email);
    RegisterPage.FillPassword(password);
    RegisterPage.RegisterBtn();

});


it('CT-02 : Realizar cadastro de usuario com Nome inválido', () => {
    
    RegisterPage.acessPageRegister();
    RegisterPage.FillName('1234');
    RegisterPage.FillEmail(email);
    RegisterPage.FillPassword(password);
    RegisterPage.RegisterBtn();
    
    //BUG IDENTIFICADO USUÁRIO COM NOME INVÁLIDO É ACEITO

});

