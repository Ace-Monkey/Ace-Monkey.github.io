This theme is under development currently and is being used to both test new functionality and ideas that the devs come up with. When copying the theme to use it as a new website, please follow the instructions below (Note: you can use ctrl+shift+f to search and replace all occerences in the folder):

 1. Replace all occurences of <Site Name> with the sites actual name
 2. Replace all occurences of <Theme Name> and updatedtheme with the site name with no caps or spaces i.e. updatedtheme
 3. Replace Updated Theme with the theme name with space and capitsals
 4. Replace Screenshot.png with relevent image for theme (any 4:3 height:width screenshot will be fine)
 5. Replace the favicon.ico with relevant favicon, can use online favicon generator, remember to also put the favico in the root directory of the site

Plugins the are suggested for every site are as follows:
 1. CPT
 2. Mega Max Menu
 3. Block Lab
 4. ACF (if needed, can be used to make fields for the footer...)
 5. Content Aware Sidebars (if needed)
 6. Contact Form 7
 7. Yoast
 8. SVG Support (may or may not work though...)

Functions info:
To learn more about endabling, disabling or even modifying certian features and functions in the wordpress editor, follow this link.
https://developer.wordpress.org/block-editor/developers/themes/theme-support/

Template guide for pages and posts are as follows:
Depending on the design of the site, it is reccomened to copy some templates from previous wordpress sites we have created, accountsco being the best in terms of templating. In template-parts folder are content template that can beused for pages or posts, you can add more and  customise them to fit your needs.

Header:
We are using the Mega Max Menu to create the header, please refer to its documentation.

Content:
We are using guttenbergs defualt editor to build each page, using block labs for creating custom blocks if needed.

Sidebar:
Using the sidebar plugin mention above and alos the sidebar.php and sidebars in function.php you can add more sidebars for content areas.

Footer:
Moving forward, any text in the footer that can may be easier for it to be editable for the client - i.e. maybe they have links to emails, adresses, contact names nd etc - it is suggested to use ACF to create custom field on maybe the home page that can be used to control the footer content. Yuo could do this for social icons as well but there may be a good social icon plugin out there that allows you to put them in widgets, as the footer has one side bar in it that can be used with widgets. 