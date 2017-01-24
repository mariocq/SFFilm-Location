##San Francisco Film Locations

This is a service that shows on a map where movies have been filmed in San Francisco, including the server and the client. 

####Server Introduction:  
It is a minimal back-end with python. With the flask framework, a simple RESTful interface is implemented. The data source is the Json data that is read from the remote when the server is started. The main RESTful API is implemented in Server/app/main/view.py

###Server install
1.setup environment
		cd /py
		easy_install pip
		mkdir flask-bb  # Create the project directory
		virtualenv venv # Create a standalone virtualenv environment
		. venv/bin/activate # Using virtualenv, note that there is a dot in front of and space
    这是一个单行的文本框,只要两个Tab再输入文字即可
	关于标题的等级表示法，共分为六个等级，显示的文本大小依次减小。不同等级之间以井号#的个数来标识。一级标题有一个#，二级标题有两个#，以此类推。
		#一级标题
		##二级标题
		###三级标题
		####四级标题
		#####五级标题
		######六级标题
### 注意!!!下面所有语法的提示我都先用小标题提醒了!!! 
### 单行文本框
    这是一个单行的文本框,只要两个Tab再输入文字即可
        
### 多行文本框  
    这是一个有多行的文本框
    你可以写入代码等,每行文字只要输入两个Tab再输入文字即可
    这里你可以输入一段代码

### 比如我们可以在多行文本框里输入一段代码,来一个Java版本的HelloWorld吧
    public class HelloWorld {

      /**
      * @param args
	    */
	    public static void main(String[] args) {
		    System.out.println("HelloWorld!");

	    }

    }
