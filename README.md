##San Francisco Film Locations

This is a service that shows on a map where movies have been filmed in San Francisco, including the server and the client. 

####Server Introduction:  
It is a minimal back-end with python. With the flask framework, a simple RESTful interface is implemented. The data source is the Json data that is read from the remote when the server is started. The main RESTful API is implemented in Server/app/main/view.py

###Server install
### 1.setup environment
		cd /py
		easy_install pip
		mkdir flask-bb  # Create the project directory
		virtualenv venv # Create a standalone virtualenv environment
		. venv/bin/activate # Using virtualenv, note that there is a dot in front of and space
