# Books Advisor

A Books Advisor is a web application where you can list and visualize the NY Times' best sellers books.
The project is a mono repo and contains 2 apps; the React Web front-end and Python API back-end.

## Getting started


### Clone repo
```
$ git clone https://github.com/juanesquintero/books-advisor.git
```
or via SSH
```
$ git clone git@github.com:juanesquintero/books-advisor.git
```


## Run it

Docker helps us to remove the OS dependencies on software development this is why we use it here, please install it to run this project https://docs.docker.com/engine/install/

After having Docker and Docker Compose Installed please notice that we have a docker-compose.yml that defines the running parameters for the respective containers needed, you just need to run one unique command:

```
$ docker-compose up -d
````

This command will start the front-end and back-end for the whole project.

React UI on http://localhost:3000
Python API on http://localhost:8000



## Tech Stack

Since the suggested technologies are React and Python, I decided to use the latest stable versions of the frameworks (React 18.2) (FastAPI 0.96) and languages (Typescript 4.9) (Python 3.11), to benefit from the latest features and fixes.


### Python 3.11
Python has increased the support and functionality for types hints (typing library and native features), in each new version launched, so this is a good reason to use this version, also it improves error tracebacks, async programming, exception groups, regular expressions and is up to 10-60% faster than Python 3.10.
https://www.python.org/downloads/release/python-3111/

### FastAPI 0.96
This modern, fast high-performance, web framework help me to build the API based on standard Python type hints.
I choose it because of its fast performance, fast code, intuitive short and easy, also robust, and production-ready server, and OpenAPI auto-documentation.
https://fastapi.tiangolo.com/

### React 18.2
This last version of React 
https://legacy.reactjs.org/versions/
https://github.com/facebook/react/blob/main/CHANGELOG.md#1820-june-14-2022



## External API 
NY Times best seller books service 
https://developer.nytimes.com/docs/books-product/1/overviewC
Create an account and get API key 
Then set the API_KEY as an env variable of the api project folder
