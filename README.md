# express-docker-aws-api

Example project using nodejs express to make a pretty simple todo editable list. It's really simple because it focuses on understanding the GET, PUT and POST methods of the express library.

Just clone this repo and type on your console:

> node index.js

And try on your web browser:

http://localhost:3000/

Then you can try its functionality using a console or importing this commands on Postman:

    curl --location --request GET 'localhost:3000/todos'
    curl --location --request PUT 'localhost:3000/todos/1/complete'

Optionaly, you can get pending tasks only using:

    curl --location --request GET 'localhost:3000/todos?show_pending=true'

