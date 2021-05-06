/// <reference types="cypress" />


context('Validation of sign up form', () => {
    beforeEach(() => {
      cy.visit('http://localhost:90/mywebFolders/signup/')
    })

    //Positive scenario 
    describe("Positive scenario",()=>{
        it.only("Sucessful submission of form for Admins",()=>{
            cy.get('#fullname').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#password').type("qwertY.899");
            cy.get('#button').click()
        })

        it.only("Sucessful submission of form for customers",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Customer");
            cy.get('#pass').type("qwertY.899");
            cy.get('#button').click()
        })
    });


     //negative scenario 
    describe("Negative Scenarios", ()=>{ 
        it.only("Should not submit when all fields are left empty",()=>{
            cy.get('#button').click();
        });
        
        it.only("Should not submit when the name field is empty",()=>{
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qwertY.899");
            cy.get('#button').click();
        })

        it.only("Should not submit when the email field is empty",()=>{
	    cy.get('#user').type("amin_gudah");
            cy.get('#name').type("Amin Hadi");
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qwertY.899");
            cy.get('#button').click();
        })

        it.only("A default account of customer should be selected unless otherwise",()=>{
	    cy.get('#user').type("amin_gudah");
            cy.get('#name').type("Amin Hadi");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get("#pass").should('have.attr','type','text')
            cy.get('#pass').type("qwertY.899");
            cy.get('#button').click();
        })

        it.only("Should not submit when password is empty",()=>{
	    cy.get('#user').type("amin_gudah");
            cy.get('#name').type("Amin Hadi");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#button').click();
        });

        it.only("Should not submit when an invalid email is inputed",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadiamiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qwertY.899");
            cy.get('#button').click();  
        });


        it.only("Should show an error message when a wrong email is inserted",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadiamiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qwertY.899");
            cy.get('#button').click();  
            cy.get('.email-container > .hidden').should("have.text","Enter a valid email");
        });
       
      

        it.only("Password should contain an error message",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qwert.899");
            cy.get('#button').click();  
            cy.get('.pass-container > p').contains("6-12");
        });

          //email requirements
          it.only("The password must be at least 6 characters long",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/er1");
            cy.get('#button').click();  
        });

        it.only("Should submit when password characters is is between 6-12",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/e1lll1");
            cy.get('#button').click();  
        });

        it.only("Should fail to submit when password is less than 6 characters",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/e1");
            cy.get('#button').click();  
        });

        it.only("Should fail to submit when password is greater than 12 characters",()=>{
            cy.get('#name').type("Amin Hadi");
	    cy.get('#user').type("amin_gudah");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/e1lll12eve");
            cy.get('#button').click();  
        });

        it.only("Should fail to submit when password does not contain atleast 1 capital letter ",()=>{
            cy.get('#name').type("Amin Hadi");
            cy.get('#email').type("amin.hadi@amiltech.org")
            cy.get('#type').select("Admin");
            cy.get('#pass').type("qY/e1lll12eve");
            cy.get('#button').click();  
        });
    });
    


   
    

})

