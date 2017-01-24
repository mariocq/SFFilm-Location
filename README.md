San Francisco Film Locations
===================================
This is a service that shows on a map where movies have been filmed in San Francisco, including the server and the client. 

## Server Introduction:  
It is a lightweight backend server implemented by python. Based on the flask framework, a simple RESTful interface has been implemented. The data source is a piece of JSON data read remotely when the server is up, and database is not needed. The main RESTful API is implemented as Server/app/main/view.py

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


## Client Introduction:
The client app provides an UI which is based on HTML5 and css3. It calls the python server's RESTful api to query films, directors, actors, companies and other information, and the queried results are displayed in Google Maps.

The client is available at: [client demo host on Aliyun](http://www.huicap.com/sfmovie/index.html)
### Plugins used by the client
	JQuery
	Bootstrap
	Bootstrap-typeahead
	Bootstrap-select
	ScrollReveal
	Slippry
	
### Screenshots
Since my aliyun environment can not run python, here are some of my local runtime screenshots.
Enter at least two letters, then select a result, click the search button, the map center will target the results and show more film details.
![enter letters](http://www.huicap.com/sfmovie/search1.png)
![click search](http://www.huicap.com/sfmovie/search2.png)
