# LOG

## 2022/05/10

* Nerea has made the pages in BEEPro from beefree. But she does not know how to add custom fonts to the tool.
* There is a page that explains how to add custom fonts -> <https://support.beefree.io/hc/en-us/articles/360004546251-Using-custom-fonts-in-BEE-Pro>

* Roche has provided some ttfs font files. To add this custom font a font-face css instructions need to be added to the styling of the pages.
* Following the instructions there seems to be two ways to do that:
  * Creating a css file with the font-face and add a link ref css on the header to that file in a relative path.
  * Store the same css file with the font-face in some URL in the cloud and link ref css on the header as an URL path.
* Initially for simplicity we'll do for the first way

