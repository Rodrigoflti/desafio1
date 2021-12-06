/// <reference types="cypress" />

var Chance = require('chance');
const { last } = require('lodash');
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando informo os dados e finalizo, o cadastro deve ser efetuado ', () => {

        cy.visit('http://automationpractice.com')

     //Clicar no botão de login 
        cy.get('.login').click()

     //Verifica se a paina contém o texto authentication para confirmar que a pagina foi redirecionada   
        cy.contains('Authentication').should('be.visible')

     //Verificação de email 
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()

     //inicio do cadastro   

     //Seleciona o radio com valor =1 
        cy.get('[type="radio"]').check("1")

        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        cy.get('input#passwd').type('A123menos')

        cy.get('#days').select('10')
        cy.get('#months').select('January')
        cy.get('#years').select('2019')

        cy.get('#newsletter').check()

        cy.get('input#firstname').type(chance.first())
        cy.get('input#lastname').type(chance.last())
        cy.get('input#company').type("Google SA ")
        cy.get('input#address1').type(chance.address())
        cy.get('input#address2').type("Complemento")

        cy.get('input#city').type(chance.city())
        cy.get('select#id_state').select('Arizona')
        cy.get('input#postcode').type("12222") 
        //cy.get('select#id_country').select()
           

        cy.get('#other').type('Sem informações')
        cy.get('input#phone').type(chance.phone())
        cy.get('input#phone_mobile').type(chance.phone())
        cy.get('input#alias').type('Batman')

    //Submetendo os dados para inserção
        cy.get('#submitAccount').click() 

     //Verifica se a pagina atual contem a informação de My account, garantindo que o cadastro foi executado 
        cy.contains(' My account').should('be.visible')

       
         



    });
});