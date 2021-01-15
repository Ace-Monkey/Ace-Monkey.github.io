---CUSTOM THEME INSTRUCTIONS---

This is a manuels explaining how to use and modify as well as understand each file in the customtheme.
NOTE: it is recommended for personal preferences to rename any function, variable, class or ID that has the word 'custom' in it to a name of your choosing or the theme website you are trying to create E.G. website_styles_get().


Header.php {
    This is the head of the site, the <title> is set using bloginfo() to get the name of the site and if its on the front page, the description. Every other page get the title of the page themselfs.

    Beneth that is where the pfp functions for the head are going to be generated.

    the custom classes is used to gice a specific class to the body of each page.

    Within the <header> tags are where the top header of the site is created, this will most likley be changed depending on the design of the website. It already includes a basic logo for the sites head logo, a toggle burgermenu for mobile and a defualy menu navigation using the wordpress menu.
}

index.php {
    This is how the content of the website that site inside the body is inserted. it grabs the content from the page/post that you are creating.
}

footer.php {

}

styles.css {

}

scripts.js {

}
