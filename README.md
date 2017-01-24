San Francisco Film Locations
===================================
This is a service that shows on a map where movies have been filmed in San Francisco, including the server and the client. 

## Server Introduction:  
It is a minimal back-end with python. With the flask framework, a simple RESTful interface is implemented. The data source is the Json data that is read from the remote when the server is started. The main RESTful API is implemented in Server/app/main/view.py

### Server install
#### 1.setup environment
	cd /py
	easy_install pip
	mkdir flask-bb  # Create the project directory
	virtualenv venv # Create a standalone virtualenv environment
	. venv/bin/activate # Using virtualenv, note that there is a dot in front of and space
#### 2.setup flask
	(venv) [root@localhost flask-bb]#pip install flask   #install Flask
	(venv) [root@localhost flask-bb]#pip install flask-script    #instal Flask-Script
#### 3.upload and run
	chomd 777 manage.py
	python manage.py runserver --host 0.0.0.0
	
### Server RESTful API


### Client Introduction:
This is a single page app, using HTML5 and ccs3. Use the python server's RESTful api to query films, directors, actors, companies and other information, and use Google Maps to display query results.

The client is available at: [client demo](http://www.huicap.com/sfmovie/index.html)
### some plugins used by the client
	JQuery
	Bootstrap
	Typehead
### screenshots
Since my aliyun environment can not run python, here are some of my local runtime screenshots.
Enter at least two letters, then select a result, click the search button, the map center will target the results and show more film details.
![enter letters](http://www.huicap.com/sfmovie/search1.png)
![click search](http://www.huicap.com/sfmovie/search2.png)
