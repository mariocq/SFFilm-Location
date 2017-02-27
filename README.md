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
With API, accessing the system fields is as simple as including them in POST parameter. The "type" fields include "actor", "director", "writer", "company", and "film".
#### For example:
	server api:http://127.0.0.1:5000/sfmovie/query
	client post data:
	{
	   "type" : "actor" , "key" : "ab"
	}

## Client Introduction:
The client app provides an UI which is based on HTML5 and css3. It calls the python server's RESTful api to query films, directors, actors, companies and other information, and the queried results are displayed in Google Maps.

### Changelog
#### V1.1
* Rebuild client project using React, ES6, Webpack   
* Use the component to reconstruct the code   
* Added the logo text animation   
* Added the banner cloud effect   
* Added a RESTful unit test   

The client is available at:     
  version 1.1：[client host on Aliyun(React, ES6, Webpack, logo animation, banner cloud)](http://www.huicap.com/sffilm/index.html)    
  version 1.0：[client host on Aliyun](http://www.huicap.com/sfmovie/index.html)    
  
### Plugins used by the client
	JQuery
	Bootstrap
	Bootstrap-typeahead
	Bootstrap-select
	ScrollReveal
	Slippry
	Three.js
	d3-easy.js
	
### Screenshots
Since my Aliyun environment doesn't support python, here are some runtime screenshots of my local environment. Enter at least two letters, potential target results will be listed out. Select a result, click on the search button, the map will highlight the location and show more film details. 
![enter letters](http://www.huicap.com/sfmovie/search1.png)
![click search](http://www.huicap.com/sfmovie/search2.png)

	
### Test
Test RESTful API by karma and jasmide. Here are two screenshots from my local environment. It shows that API test has been passed.  
   
![enter](http://www.huicap.com/sffilm/test1.png)
![click](http://www.huicap.com/sffilm/test2.png)
