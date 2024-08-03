# Namaste React 

App Chunking or Code Splitting or Dynamic Bundling: 

    When we bundle our app, we bundle our complete app into a single js file. This is okay with smaller 
    applications but with larger applications, a single js file with bundled code becomes large in size and 
    it takes a lot of time for the browser to fetch the file. Therefore the rendering becomes very slow. 

    So, to optimize this, we break our app into smaller logical chunks to form multiple bundles .

Lazy Loading OR on-demand loading 

        When we click on a component to be loaded/ demand a component, then only we will load the component. So it will be 
        a different chunk/ bundled file which will be loaded later. 