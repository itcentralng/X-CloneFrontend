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

## QA Report - Setup and Routing Debug
Setup Verification:
Cloned the repository and ran npm install
The app initially showed a blank screen at  http://localhost:5173/.
console displayed React rendering errors related to routing. 

Issued Identified:
react-router-dom was missing from package.json even though routing functions like createBrowserRouter and RouterProvider were being used.
this caused routing to fail resulting in a blank black screen on app load

## Steps taken to fix:
Installed the missing react-router-dom dependency with ```npm install react-router-dom@6```
Restarded the development server with npm run dev
The app loaded successfully, and all routes (/, /signup, /home) now work as expected

## Suggestions for Improvements:
Add react-router-dom to the dependencies in package.json

## Cleaned up node_modules Folder:
The node_modules folder was removed from version control to reduce the repository size and prevent unnecessary files from being committed.

## Updated .gitignore:
Ensured that node_modules/ is correctly listed in .gitignore to prevent future commits of the folder.
Removed Cached node_modules Files:
```Used git rm -r --cached node_modules/``` to remove the node_modules folder from the Git index while keeping it locally.
Ensured that files already tracked, such as package-lock.json and others, were preserved in the repository.

## Committed and Pushed Changes:
Successfully committed the changes and pushed them to the remote GitHub repository to sync everything.

## Troubleshooting
1. Blank Screen on App Load:

If you encounter a blank screen when running the app locally (http://localhost:5173/), follow these steps to troubleshoot:

Cause of the issue:
This issue is caused by a missing or incorrect dependency, specifically the react-router-dom package, which handles the routing in the app.

Steps to Resolve issue:

Step 1: Check if react-router-dom is installed in your package.json file under dependencies. If it's missing, run the following command to install it:

npm install react-router-dom@6

Step 2: Restart the development server by running:

npm run dev

Step 3: Refresh the page at http://localhost:5173/ in your browser. The app should now load correctly, and the routes (/, /signup, /home) should function as expected.

Additional Notes:
If you are still seeing a blank screen after following these steps, verify that your node_modules folder is correctly installed. You can do this by running:

npm install