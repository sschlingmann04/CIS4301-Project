# CIS4301-Project

Contains all code and related files for CIS4301 (Information and Database Management Systems I) final project at UF.

## Install 💻

1. Clone GitHub repository to desired directory on your computer

```bash
# find the github url on the repo page
# exclude the {} when pasting the url

git clone {url here}
```

2. In the terminal, navigate to the folder you cloned the GitHub repository in (this folder is called "CIS4301-Project")

### Frontend Setup 🖥️

1. Inside of the CIS4301-Project folder, navigate to the "gaming-history-frontend" folder

```bash
# inside the terminal
cd gaming-history-frontend
```

2. Inside the gaming-history-frontend folder within the terminal, run the command:

```bash
npm i
```

This will install the required packages specified in the package.json file.

### Backend Setup ⚙️

1. Inside of the CIS4301-Project folder, navigate to the "gaming-history-backend" folder

```bash
# inside the terminal
cd gaming-history-backend
```

2. Inside the gaming-history-backend folder within the terminal, run the command:

```bash
npm i
```

This will install the required packages specified in the package.json file.

3. Inside the main directory of the gaming-history-backend folder, duplicate the file ".env.sample" as ".env"

Inside the .env file, fill in the required information.

## Run 🚀

1. To run, make sure you have the program fully cloned and have run the npm i command to install the required packages for both the frontend and backend folders.

2. Running this program will require two instances of the terminal running. This can be done with two terminal windows (Powershell, CMD, Terminal, etc), or within VSCode, using the split terminals at the bottom of the screen.

3. Within the terminal and inside the "COP4301-Project/gaming-history-frontend" directory, run the command:

```bash
npm run dev
```

This will start a live server for the website frontend at the url: **https://localhost:3000**

4. Within the terminal and inside the "COP4301-Project/gaming-history-backend" directory, run the command:

```bash
npm run dev
```

This will start a live server for the website backend at the url: **https://localhost:8000**

All api requests will be made to this url, followed by the desired path for the call based on the file created and the endpoint within the request function.

For example, the get request for "Hello World" is called with the url **https://localhost:8000/helloworld**
