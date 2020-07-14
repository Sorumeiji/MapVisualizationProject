# :octocat: Map Visualization Project:octocat:

A visual of information that shows a representation of neighborhood population with tracs displaying different ways of communting in Kansas City.


## How to view the Map Visualization Project

<http://kalebberry.com/MapVisualizationProject/>


Testing the Map Visualization Project

<br>
<br>

Testing the Map Visualization Project is done by testing the
response request before the data collection.

<br>
<br>

```
function testReponseIsSuccessful(reponse) {
    if (reponse.ok) {
        console.log("Response for " + reponse.url + " was successful");
        console.log("Repsonse - " + reponse.statusText);


        return reponse.json();
    }
    else {
        console.log("Response for " + reponse.url + " failed");
        console.log("Response - " + reponse.statusText)
        error.innerHTML = '<h2 class="errorMessage"> ERROR: Response ' + reponse.url + ' failed.</h2>';
    }
}
```

<br>
<br>


One can view the success of the response in the console. 

<br>
<br>

![image](https://raw.githubusercontent.com/Sorumeiji/MapVisualizationProject/master/images/NrSqIRx7Ie.gif)

<br>
<br>

If the reponse fails, a error message appears in red, and a failed response is thrown in the console.

<br>
<br>

![image](https://raw.githubusercontent.com/Sorumeiji/MapVisualizationProject/master/images/DSxCHBWnv6.gif)


<br>
<br>
<br>
<br>

Using Locally

1. Download this repository.

<br>
<br>

![image](https://raw.githubusercontent.com/Sorumeiji/MapVisualizationProject/master/images/fc56THwJbH.gif)

<br>
<br>

2. Unzip the zip file into a location of choice. If you need a file archiver tool
   I recommend 7-zip (https://www.7-zip.org/)

<br>
<br>

3. In the folder, open Index.html in your favorite browser.

<br>
<br>

## Language and tools


### HTML5, CSS3/SCSS, HighCharts.JS, MapBox.JS, Vanilla JavaScript

<br>
<br>

## Contact

### If you want to contact me you can reach me at <kaleb.berry@outlook.com>.
<br>
<br>
## License

### This project uses the following license: [MIT](https://opensource.org/licenses/MIT).
<br>
<br>
