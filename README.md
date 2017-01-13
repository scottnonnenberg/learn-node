# learn-node

This project shows a progression from the most basic [`express`](http://expressjs.com)-based [nodejs](http://nodejs.org/) app to a testable project using [`requirejs`](http://requirejs.org/) to share code between the client and the server.


## Setup

First, set up node to be in development mode:

```shell
source env_vars.sh
```

_(usually you don't want to put your environment variables in your repository, but this is an example app, with no sensitive environment variables)_

Next, install all required node modules:

```shell
npm install
```

Lastly, ensure that [`mocha`](http://mochajs.org/) is available on the command line by installing it globally:

```shell
sudo npm install -g mocha
```

## Example #1

```shell
node src/1.\ anonymous/app.js
```

Hit [http://localhost:3000](http://localhost:3000) in your browser... Note that we use `res.send` which takes the object you pass it and renders it into [JSON](http://en.wikipedia.org/wiki/JSON) for the browser. This makes it really easy to create APIs for [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming)) calls - javascript is really good at consuming JSON.


## Example #2

```shell
node src/2.\ anonymous/app.js
```

Again, hit [http://localhost:3000](http://localhost:3000) in your browser...

Now, for something new! Run its tests:

```shell
mocha src/2.\ anonymous/test.js
```

The key change in this example is that the endpoint handler has been factored into a separate file and object so that it can be tested outside of a full web server. With this method you can much more quickly test a lot of interesting cases without pulling up your web browser or another tool.

## Example #3

```shell
node src/3.\ class/app.js
```

Check out [http://localhost:3000](http://localhost:3000)... now we're using [`moment`](http://momentjs.com/) to print out the time with a nice format. We're also constructing `Routes` as a class instead of a raw object - it has a constructor and a method added to its prototype object. This is [javascript prototype inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Now let's run its tests:

```shell
mocha src/3.\ class/test.js
```

This time we're running two tests, and we're using [`sinon`](http://sinonjs.org/) to replicate error conditions by replacing the `moment` object inside of the `Routes` class. This is called [dependency injection](http://en.wikipedia.org/wiki/Dependency_injection), and is especially useful if the execution of the code would have consequences, like sending a text message or sending a request to another application.

## Example #4

First let's run tests:

```shell
mocha src/4.\ sharing\ code/both/test.js
```

Like before, we're running tests on a class. But this time, the files are organized into three categories: server, client and both. As you might expect, these folders describe where this code runs. This test will also run in the browser.

To do that, first run the server:

```shell
node src/4.\ sharing\ code/server/app.js
```

Now at [http://localhost:3000](http://localhost:3000) we're using a jade template to render an HTML page to the browser. The page uses `requirejs` to pull down a set of javascript files, and then gives you a link to run the same tests we just ran on the command line.

The keys to his configuration are:

1. we use the `amdefine` node module to replicate `requirejs` behavior on the server side.
2. we configure `requirejs` to provide javascript files when we request node modules like `moment`
3. we ensure that any relative pathing is correct. Note that test.js refers to './logic.js' in the same directory. As long as this is preserved in what is available to the browser, it will work.

For production, [`r.js`](http://requirejs.org/docs/optimization.html) and [`almond.js`](https://github.com/jrburke/almond) can be used to eliminate the `requirejs` runtime and create standalone concatenated and optimized files for the client. Maybe if someone is really nice I'll provide that example next. :0)

Happy coding!

## License

(The MIT License)

Copyright (c) 2013 Scott Nonnenberg &lt;scott@nonnenberg.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
