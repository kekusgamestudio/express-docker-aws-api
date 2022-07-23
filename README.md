# express-docker-aws-api

Example project using nodejs express to make a pretty simple todo editable list

Just clone this repo and type:
> node index.js

Try:
  http://localhost:3000/

  curl --location --request GET 'localhost:3000/todos'

  curl --location --request PUT 'localhost:3000/todos/1/complete'

Optionaly, you can get pending tasks only using:
  curl --location --request GET 'localhost:3000/todos?show_pending=true'