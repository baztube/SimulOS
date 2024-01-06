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

The first thing you may notice is that there isn't a body or the `<!DOCTYPE html>` tag that is because these applications get embeded into a div
[![image.png](https://i.postimg.cc/ZKmkFstv/image.png)](https://postimg.cc/G9XSbQpb)
it isn't really visible in the screenshot cuz I coloured it in green but you can see the div with a class of ``class="window-content"``  another thing you may have noticed is that the class names are strange and that's for a reason because if in the style I set styling rules for let's say ``.title`` and another app uses that same class it may get confused and both of the apps may break which is not good and that is why its important to have unique class names. I accomplished that by joining ``UniqueID`` with a random nine-digit number which means I get something like this ``UniqueID953961509`` and then I just added some notes so it's easier to orient myself in the code. You also can see that I have a ``<style>``element or idk whats it called but that one's pretty self-explanatory, it's just to set the CSS styles for the other elements. The same way we use the ``<style>`` tag you can also do the same with ``<sccript>`` which is the same but for javascript. And that's how you format your app code in short :3 . I will be updating this guide to provide more guidance but that's all for now byeee.
