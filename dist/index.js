export {};
/*
step to start node project with typscript:
1. Install Node.js version 18.17.1 LTS from https://nodejs.org/en.
2. to install typscript from commond prompt run:
install npm install -g typescrip
3. Open a new folder with vs code editor.
make a file index.ts.
4. tsc --init
tsc
5. make it a Node.js project by giving following commond:

npm init -y

6. install types of module for node.js project with commond on commond prompt
npm i @types/node -
7. Need to change in tsconfing.json and make a package.json files
according to documentation:
 https://www.typescriptlang.org/docs/handbook/esm-node.html
in tsconfing.json
line 14: "target": "ES2022"
line 28: "module": "NodeNext"
line 30: "moduleResolution": "NodeNext"
If using json files than uncomment the following line
line 42: "resolveJsonModules": true,

in packege.json add the following under name:
in line 3: "type": "module",
8. make gitignore file and write in it:
node_modules
*/ 
