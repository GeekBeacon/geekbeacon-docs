---
id: welcome
title: Welcome
sidebar_label: Welcome
---
# Welcome to the GeekBeacon Community!

![Seperator](/img/shared/separators.png)



![Intro](/img/intro/docs-flowchart.png)


This will serve as the source of truth for published public content.

Nothing is considered finalized until it exists here. If a document has a related Google Doc, it should be referenced by a link to the source material at the bottom of the page.

See [Code Of Conduct](/docs/community/code_of_conduct) for an example.


## **Tooling**

We are using docusaurus v2. You can find more info on their official documentation page [here](https://v2.docusaurus.io/docs/presets), but the directions below should get you started.

All of our Docs are written in markdown. You can get a full list of syntax on what is supported [here](https://www.markdownguide.org/basic-syntax/)

Every page needs to start with a heading similar to this:

```
---
id: welcome
title: Welcome
sidebar_label: Welcome
---
```

the id identifies the document.  title is displayed on the page, and sidebar_label is the title used for the left hand side link.

For a blog post, there more entries that are needed.  You can see an example below:

```
---
id: hola
title: Leadership Meeting
author: Gao Wei
author_title: Docusaurus Core Team
author_url: https://github.com/wgao19
author_image_url: https://avatars1.githubusercontent.com/u/2055384?v=4
tags: [meeting_notes]
---
```

The tags are comma delimited and the other metadata entries allow for the author to be defined. 


Please have a look at the [Tools](/docs/collaborators/tools) for a full list of resources you may use. The availability may vary depending on the access you have been granted.

## **Contributing**


![work flowchar](/img/intro/work-flowchart.png)


Once a document has been finalized after collaborating and editing in Google Docs, in order to publish it, please create a pull request.

The steps for creating a PR (Pull Request) are outlined [here](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

They essentially break down to.


1. Finish any creative or collab changes in Google Docs, switch to Github
2. Fork the project.
3. Make the changes on the master or feature branch of your choice.
4. Submit a PR to the original repo and wait for approval.


[Source](https://docs.google.com/document/d/1QXvsZU3ZOTcghlR7m2BEzRYoO4skVbeZRocjcperWiI/edit#heading=h.97m43cf2bjlg)