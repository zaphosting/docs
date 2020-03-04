## Docs, and how to make them correctly!

The doc files are created in /de and /en, make sure the file exists in both, translated or not.

Doc files should always be named `category_title.md`, e.g. `account_usermanagement.md`.


### Content

doc files always start with the following text:

```
---
id: filename_without_end
title: Title of the page
sidebar_label: title in the sidebar
---
```

e.g.

```
---
id: account_usermanagement
title: User administration
sidebar_label: User administration
---
```

In order for the titles to be displayed in the right hand content display, always use h2 or h3 headers:

```
## h2 header
### h3 header 
```

h3 also show as subcategories of h2 headers

Further examples can be found in 
https://raw.githubusercontent.com/zap-docs/docs/master/de/beispiel.md


## Page Done, now what?
Now you have to insert it into the left sidebar, this is done via sidebars.json.

If you add an entry under "Gameserver", you have to change the line following:
```
old -> "Gameserver": ["gameserver_resourcelimit"]
new -> "Gameserver": ["gameserver_resourcelimit", "my_new_page"]
```

With new categories it goes like this:
```
"Game server." ["gameserver_resourcelimit"],
"New category." ["my_new_page"]
```
Always make sure that the json file is valid after the edit, this is checked when creating a pull request

**Attention: categories should be in english if possible, these can be translated manually in the language variables (de.json)!

## okay, how do i insert them here?

"Fork" the repository, you can do that from the upper right button.

After that create the changes on your fork and create a pull request from your fork to the master repository at https://github.com/zap-docs/docs/pulls, after that it can be merged.

If you change anything after you create the pull request, it will automatically be added to the PR.


## How do I set the language variables for the sidebar?

There are 2 options here, either after your PR has been merged or before, after is always easier as the system always updates the en.json language variable, but you can also add it manually, see [en.json](https://github.com/Bluethefurry/docs/blob/master/sprachvariablen/en.json) and [en.json](https://github.com/Bluethefurry/docs/blob/master/sprachvariablen/de.json).
**Note: the english file is !always! automatically generated, to translate it you have to translate the pages in the "en" folder**

Then create a PR, as above, and that's it!
