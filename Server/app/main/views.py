# -*- coding=utf-8 -*-
# 
# Version: 1.0
# Author: mfm@vip.qq.com
# Date£º2017-01-23
# Description£ºSFMovie Server for the Tradesift test
# 
from flask import request, jsonify
from flask import make_response
from . import main

import base64
import json

# urllib and urllib2 are included in the Python standard libraries, but must be
# imported differently depending on what version of Python you are on
try:
    # Python 3
    from urllib.request import urlopen, Request
except ImportError:
    # Fallback for Python 2
    from urllib2 import urlopen

# Define the data source
url = "https://data.sfgov.org/resource/wwmu-gmzc.json"

# The remote data is read when the server is initialized
response = urlopen(url)
movies = json.loads(response.read().decode('utf-8'))

@main.route('/')
def index():
    return 'Hello, This is a SFMovie Server.'
    	
@main.route('/sfmovie/query', methods=['POST'])
def ajax_movies():
    # get params
    searchType = request.values.get('type', 0)
    searchKey = request.values.get('key', 0)
    
    # Defines the return array
    match_list = []
    
    # Depending on the type of query
    if searchType == 'actor':    
        for countnum, item in enumerate(movies):   
            try:
                # The array index is passed to the client as an ID
                item['id'] = countnum
                
                # Merge all actor fields
                if item['actor_1'].find(searchKey) > -1:
                    match_list.append(item)  
                if item['actor_2'].find(searchKey) > -1:
                    match_list.append(item)  
                if item['actor_3'].find(searchKey) > -1:
                    match_list.append(item)  
            except KeyError:
                pass
    
    if searchType == 'writer':    
        for countnum, item in enumerate(movies):   
            try:
                item['id'] = countnum
                if item['writer'].find(searchKey) > -1:
                    match_list.append(item)  
            except KeyError:
                pass
                
    if searchType == 'director':    
        for countnum, item in enumerate(movies):   
            try:
                item['id'] = countnum
                if item['director'].find(searchKey) > -1:
                    match_list.append(item)  
            except KeyError:
                pass
                
    if searchType == 'company':    
        for countnum, item in enumerate(movies):   
            try:
                item['id'] = countnum
                if item['production_company'].find(searchKey) > -1:
                    match_list.append(item)  
            except KeyError:
                pass
                
    if searchType == 'name':    
        for countnum, item in enumerate(movies):   
            try:
                item['id'] = countnum
                if item['title'].find(searchKey) > -1:
                    match_list.append(item)  
            except KeyError:
                pass
    
    # Generate json format
    rst = make_response(jsonify({'movies': match_list, 'type':searchType}))
        
    # Resolve cross-domain issues
    rst.headers['Access-Control-Allow-Origin'] = '*'
    
    return rst, 200
    	
@main.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)