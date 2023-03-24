# Testing Framework

# Installation
Clone the repo on you local PC do the following
<br>a) npm i
<br>b) npx cypress open ==> opens cypress
<br>c) npx cypress run ==> runs all spec files
<br> **Running scripts** 
<br> npm run <follwed by 'script name'>
<br> ex : npm run cy_firefox : runs tests in firefox in headless mode
<br> ex : npm run cy_firefox_headed : runs tests in firefox in headed mode

# Description
The dependencies used for this framwork are:
<br>a) @badeball/cypress-cucumber-preprocessor
<br>b) @bahmutov/cypress-esbuild-preprocessor 
<br>c) Cypress 
<br>d) cypress-iframe
<br>e) mochawesome  
f) esbuild 

# Folder Structure
The folder structure followed is of cypress with a few changes
<br> a) cypress/e2e : contains plain cypress files (cy.js)
<br> b) cypress/e2e/BDD : contains feature files
<br> c) cypress/support/step_definitions : contains step definition files
<br>**Results are generated using mochawesome and available in cypress/results folder, videos in cypress/videos and screenshots of failed tests in cypress/screenshots**

