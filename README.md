
README
======


Repository
----------
https://github.com/sids-aquarius/appbase

**Repository Structure**
> 
   - **build** *compiled documentation*
   - <u>Makefile</u> - Makefile for sphinx documentation
   - **source** *source files*
     - **overview** *Data model and overview documentation*
     - **js**       *Javascript documentation*
     - **REST**     *REST documentation*
     - **tools/sphinxext**    *sphinx related styling*
         - **appbasetheme** *Theme configuration*
         - **static** *static assets*
         - <u>indexcontent.html</u> - *HTML template mapped to master document*
         - <u>layout.html</u>      - *Header and footer elements*
     - <u>conf.py</u> - Main sphinx configuration file
     - <u>index.txt</u> - Master document (main toc)
   
HTML Build instructions
------------------

> $ make clean & make html
  

Working with ReStructuredText
---------------------------
* http://docutils.sourceforge.net/docs/user/rst/quickstart.html
* https://docs.python.org/3/ is a good example.
