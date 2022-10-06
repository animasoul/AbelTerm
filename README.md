# AbelTerm
A Terminal Styled Portfolio Website. 🐱‍💻

### Made Using-
- ⚛ Framework [ReactJS](https://reactjs.org/)
- 💻 Terminal [react-console-emulator](https://github.com/linuswillner/react-console-emulator)
- 🚀 Deployed using [github](https://abel.meta.mt/)

### Running Locally 🚀

Install dependencies, make sure you have `nodejs` and `npm` installed.
```sh
$ npm install
```
Run the app.
```sh
$ npm start
```

### Deploy build to github

Install dependencies gh-pages to create a branch on current git and deploy to github
```sh
npm install gh-pages --save-dev
```
In the **package.json** file, add a "homepage" property that follows this structure: 
```sh
http://{github-username}.github.io/{repo-name}
```

In the **package.json** file, scroll down to the **scripts** property and add the following commands:
```sh
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build",
```

Deploy the app
```sh
$ npm run deploy
```

### Usage 🐱
Feel free to use this project to make your own Portfolio! Just make sure you give a small credit to my own Project.\
Cheers! 🍻

### Contribution 🤝
Feel free to add Issues/Pull Requests to the Project.

### License ⚖
MIT License

