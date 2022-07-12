*************Read Me*****************

This project is combination of WebdriverIo with cucumber

 To Create new test case : 

1)-Go to features folder  and create your own feature file as per the existing sampleLivetest.feature file

2) Go to stepDefination folder and create your own js file that as per existing one.

Note: as per the GIVEN WHEN, and Then write the methods name in steps defination otherwise cases wont run.

---------------

How to Run. 



1) To  run the cases right click on prject folder and select open integrated terminal 

2) Now past the below command in terminal which is available on bottom of the window

"npm run wdio"


If you see below error when you hit the above command  "npm run wdio"

-----------------------------------------------------------------------------------------------------
ERROR @wdio/local-runner: Failed launching test session: Error: Couldn't find plugin "allure" reporter, neither as wdio scoped package "@wdio/allure-reporter" nor as community package "wdio-allure-reporter". Please make sure you have it installed!
------------------------------------------------------------------------------------------------------


Then Use the below command 

" npm install @wdio/allure-reporter --save-dev "

then user will see the "node_modules" folder under the features folder

Now run again below  command  
"npm run wdio"

Now you will see execution status  in terminal window when it get started.

-----------------------------------------------------------------------

How to check the Reports :

1) After execution is done run the below commands 

if there is No any Allure-report folder in your prject  then run the below command

"allure generate allure-results"

If you have already have that  "allure-reports" in your projct then run the below command

"allure generate --clean allure-results"

2) Now Open the allure-report folder 

3) Right click on index.hml file

4) Select "Open with Live server"


Now user will see the web browser with report details .
---------------------------------------------------------------------------------------------