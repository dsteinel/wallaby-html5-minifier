# wallaby-html5-minifier
This is a grunt task which is specific designed for converting flash to html5 banner.

easy to use. Get a API key from [tinypng](https://tinypng.com/developers) and replace it in the Gruntfile.js.
- Rename your export file to: `` index.html? ``
- put all .js files in a folder named `` /js ``
- change the path of the .js files in your html
- all other files will be automatically in `` /index_assets `` (i know it sounds bad, but like that you dont have to change all folder paths in yout .html file)
- now just run `` npm install ``
- after finishing npm install you have to run `` grunt `` to minify all files and put them ready to go in `` /dist ``


- - - 

If you don't know what wallaby is  **[check this out](https://helpx.adobe.com/flash/using/creating-publishing-html5-canvas-document.html)**.

...in short: It converts a flash file (actionscript 3) to html5 with jquery. It is a very good alternative to Canvas in FlashCC. 

Download:
<br />
- OSX _ [link](http://download.macromedia.com/pub/labs/wallaby/wallaby_p1_mac_030811.dmg)
<br />
- Windows _ [link](http://download.macromedia.com/pub/labs/wallaby/wallaby_p1_win_030811.exe) 


- - - 

### long ....

###Flash to HTML5 - Banner


#####Canvas vs ActionScript 3

FlashCC gives you the opportunity to convert .fla to canvas or to directly work in canvas, which is very nice. The interface does not change but Canvas has **less filters and effects**. It supports only those effects, tools and features which are supported by HTML5. You can easily export (Flash calls it publish) your Canvas to HTML5 and you are nearly good to go. Read in section **Google Restrictions** what you have to change to be conform with google adwords restrictions.
If you have already a document which is designed in ActionScript 2 or 3, it is pretty frustrating to export it to HTML5. In my experience, it is much more work to convert this in FlashCC to Canvas than with the very nice tool **[Wallaby](https://helpx.adobe.com/flash/using/creating-publishing-html5-canvas-document.html)**.

Download:
<br />
- OSX _ [link](http://download.macromedia.com/pub/labs/wallaby/wallaby_p1_mac_030811.dmg)
<br />
- Windows _ [link](http://download.macromedia.com/pub/labs/wallaby/wallaby_p1_win_030811.exe) 


###Canvas to HTML5


#####Google Restrictions

######Unsupported SVG Tags
There are some Tags that are not allowed to use. Until now I found three of them: **tspan**, **radialgradient** and **lineargradient**. You have to convert SVG's which have a gradient with Illustrator or a similar tool to png. **tspans** are Tags used in paragraphs. The best way to get rid of those is if you select every text in FlashCC and press ``cmd + b`` (or choose ``Modify > Break Apart``) several times. You will see that the text will be converted into paths without any unsupported tags. If your text has effects like shadow or glow, it will get lost. So you have to convert it into a bitmap: ``Modify > convert to Bitmap``.

######hosted libraries

Google Adwords does only allow sources which are hosted on a google server. So if you need for example jQuery or any other library you have to either **download it** (so that is is local next to the other files) or use libraries which **already exist on the google server** (for example jQuery). You can see **[here](https://developers.google.com/speed/libraries/)** which Library is already hosted by google. 
If you export from Canvas to HTML you have to **uncheck** in ``File > Publish Settings`` the checkbox **hosted libraries**. With that Option unchecked Flash will download all neccessary libraries ([easeljs](https://github.com/createjs/easeljs/), [tweenjs](https://github.com/createjs/tweenjs/), [soundjs](https://github.com/createjs/soundjs/), [preloadjs](https://github.com/createjs/preloadjs/)), put them in your project folder and link them to your html file. These libraries make your html output look like the one you saw in Flash CC. Pretty awesome!

***IMAGE OF FLASH PUBLISH SETTING WINDOW***

If your output will be a banner, then you have to add ``<meta name="ad.size" content="width=YOUR-BANNER-WIDTH,height=YOUR-BANNER-HEIGHT">`` .
<br />
You can read more about Google Banner Specifications [here](https://support.google.com/adwordspolicy/answer/176108?hl=de).
<br />
Those libraries can make your output pretty big if you think about banner restrictions (< 60kb). Try to minify your code as good as possible. This is a [nice tool for minifying code](http://25.io/smaller/). Be careful here with libraries, sometimes the tool maxifies the code.

######minify Images
If you like to minify images without loosing quality, try: [tinyPNG](https://tinypng.com/). For those who want to use grunt, check out: [image minifier comparison](http://jamiemason.github.io/ImageOptim-CLI/comparison/all/imagealpha-and-imageoptim/asc/) and use this grunt task.


###.fla to HTML5

#####ActionScript 3
If you have a AS2 flash file, FlashCC will automatically convert it to AS3. I couldn't find any issues with that. It is highly recommended to save the document in AS3 directly after you opened it (just press ``cmd + s``).

#####AS3 to HTML5 with _ Wallaby
Wallaby will automatically convert your actionscript 3 file to html5. Wallaby uses jQuery for animations and will put the library (nice minified jQuery version) in your project folder.
If you want to convert a **banner** you will recognize, that wallaby will not replace unsupported tags. Check the section above *unsupported SVG Tags* how to get rid of them. Wallaby has also problems with blend modes such als multiply or color dodge. The best workaround is if you go back to FlashCC and edit the images which have unsupported modes with photoshop so that the effect in Flash is no longer needed.
