# SimulOS App making guide
Hello! in this guide i will tell you how to make an app for simul OS.
## Basic Setup
As an example lets take my "about project" app, here is the code for it.
```html
<div  class="UniqueID154865729body">

<style>
.UniqueID154865729body {
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #151515;
color: #fff;
width: 100%;
height: max-content;
min-height: 100%;
padding-bottom: 16px;
padding-top: 8px;
margin: 0px;
display: block;
}
.UniqueID458621937time {
font-weight: bold;
}
.UniqueID758424889title{
margin-top: 0px;
}
.UniqueID358943927p{
margin-bottom: 0px;
}
</style>
<h1 class="UniqueID758424889title">Updates and notices board</h1>
<time class="UniqueID458621937time" datetime="2024-01-04">4th of January</time>
<p class="UniqueID358943927p">Hello, fellow internet stranger! This project is my "webOS" (not the one from LG tho) It's basically trying to mimic a real operating system like Windows or MacOS on the web. As you may notice, currently there are not a lot of apps and games to mess around with. I'm working on a few, so maybe soon there will be more, but if you would like to join our Discord server, where you will find instructions on how to make the apps and how to "upload them to the OS," By upload, I really meant to say send it over to me and wait for me to push a new update of the app library. You can also join the Discord server to ask questions and check on updates. That's all from me for now, so bye bye ;)</p>
</div>
```

First thing you may notice is that there isnt a body or the `<!DOCTYPE html>` tag that is because theese aplications get embeded into a div
[![image.png](https://i.postimg.cc/ZKmkFstv/image.png)](https://postimg.cc/G9XSbQpb)
it isnt really visible in the screenshot cuz i coloured it in green but you can see the div with a class of ``class="window-content"``  another thing you may have noticed is that the class names are strange and thats for a reason because if in the style i set styling rules for lets say ``.title`` and another app uses that same class it may get confused and both of the apps may break which is not good and that is why its important to have unique class names. I acomlished that by joining ``UniqueID`` with a random nine digit number which means i get something like this ``UniqueID953961509`` and then i just added some notes so its easier to orient myself in the code. You also can see that i have a ``<style>`` elment or idk whats it called but that ones pretty self explanotory, its basically just to set the css styles for the other elements. The same way we use the ``<style>`` tag you can also do the same with ``<sccript>`` which is the same but for javascript. And thats how you format your app code in short :3
