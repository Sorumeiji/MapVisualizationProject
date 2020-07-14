# Map Visualization Project

A visual of information that shows a representation of neighborhood population with tracs displaying different ways of communting in Kansas City.


## How to view the Map Visualization Project

<http://kalebberry.com/MapVisualizationProject/>


## Testing the Map Visualization Project

Testing the Map Visualization Project is done by testing the
response request before the data collection.

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
One can view the success of the response in the console. 



## Contributing to <project_name>
<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to <project_name>, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@scottydocs](https://github.com/scottydocs) 📖
* [@cainwatson](https://github.com/cainwatson) 🐛
* [@calchuchesta](https://github.com/calchuchesta) 🐛

You might want to consider using something like the [All Contributors](https://github.com/all-contributors/all-contributors) specification and its [emoji key](https://allcontributors.org/docs/en/emoji-key).

## Contact

If you want to contact me you can reach me at <kaleb.berry@outlook.com>.

## License
<!--- If you're not sure which open license to use see https://choosealicense.com/--->

This project uses the following license: [<license_name>](<link>).
