# X-CloneFrontend

# X-clone Project Setup 
Clone the main repo ```git clone``` https://github.com/itcentralng/X-CloneFrontend.git  
cd X-cloneFrontned to migrate to the directory   

git checkout -b X-clone-setup to create a new branch to work on  

## Project Setup with Tailwindcss and Vite steps
npm create vite@latest to create the project     
project name: X-clone    
package name: package.json    
select framework: react    
select variant: javascript    

Then cd X-clone to migrate to the directory  
```npm install``` to install all dependencies and package  
```npm run dev``` to run the project 

## How to run the project 
clone repo  
cd the folder name to migrate to the current directory  
install package using ```npm install```  
run project ```npm run dev```   

# QA Report - X-Clone project

## Setup Verification
Cloned repo, installed dependencies, and confirmed project runs succesfully.
`/` (Home) works on **main** branch.
`/login` works on **login-setup** branch.

## README Clarifications 
- Actual Vite project is inside the `X-CloneFrontend/X-clone`
- Update steps to include `cd X-CloneFrontend/X-Clone` before `npm install`

## Suggestions For improvement
- Unify `Login` and `LoginPage` naming 
- Organize structure into `src/pages` and `src/components`. 