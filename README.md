# City of Melbourne Design System

First step towards creating an open source design system based on the DCI's internal design style guide.

See the live website at:

[https://city-of-melbourne.github.io/design-system/](https://city-of-melbourne.github.io/design-system/)

## 🚧 WARNING: this is a Proof of Concept hacked together in 4 weeks 🚧

## Index

1. [Goal](#goal)
2. [Benefits](#benefits)
3. [Road map](#road-map)
4. [Tips for updating the website](#tips-for-updating-the-website)
5. [How to change a section status](#how-to-change-a-section-status)
6. [How to manage the menu](#how-to-manage-the-menu)
5. [Suggested workflow](#suggested-workflow)
6. [Updating colours](#updating-colours)


## Goal

Make the current design style guide (system) open source.


## Benefits

- Scale: Like scalable software but for design
- Open: Increase visibility both internally and externally
- Reuse: both internally and potentially externally
- Take lead in the digital design as council (win design system race against sydney)
- Join the leader: AU government is doing this already
- Kick start a project/prototype/mockup quickly


## Road map

- [x] Static version of the current style guide from a html dump of confluence
- [x] Generate site form markdown version of the documents
- [ ] Make components live 👈 doing
- [ ] Create a front-end framework based on the design system
- [ ] Create starter packs that allows people to get up and running quickly



## Tips for updating the website

- You need to update the content with markdown, refer to [Github's markdown guide](https://guides.github.com/features/mastering-markdown/) for this.
- It takes 3-10 seconds for the code to generate and update from markdown to the HTML site, so you’ll need some patience to see changes!
- Make sure to keep the “layout” and “title” on every page.
- Reference the internal img folder only in order to retrieve image files. Don’t put the entire location in there. E.g. /img/image.png is correct, and /design-system/components/img/image.png will not work.
- Avoid tables at all costs. If you really, really have to, refer to use github’s markdown style for it, and you’ll probably have to get a dev to create a style for the website.
- Give a useful description to your commit, for version control e.g. if you change the size of the H1 to 20px, say "Changed H1 to 20px". This makes it easier to see when you changed things, and what you did.

## How to change a section status

At the top of all .md files there is a section with the following attributes:
- layout: is meant to specify which layout style the website is using.
- title: is the title that will be displayed in the menu and as the Header for that page.
- status_content: is meant to indicate either is complete or something needs attention (✅⚠️) regards content.
- status_live: is meant to indicate whether all example elements are interactive or still need updating (✅⚠️).
- status_comment: is a free comment space to leave a notes, observations or whatever that should be taken into account.

If you don't fill out all of the attributes, it will be less useful, especially on the status page.

## How to manage the menu

The menu is built using defined data from YAML file  located in the  _data folder (sections.yml). The file contains the structure and order that data is displayed in the menu.

## Suggested workflow

When adding new content, what would probably work best is if you follow these steps:
1. Designer uploads design(s) to the design system (after due diligence regarding ensuring it's the agreed standard)
2. Developer refers to the design(s) uploaded to teh design system and coes them.
3. Once code is ready to be live, replace the images with that code.
4. Profit.

## Updating colours
To update the colours:

1. Go to /style/colours.md
2. Click edit markdown button
3. Scroll to the correct category for teh colour you want to change/ add e.g. is it a Primary colour?
4. You will see the following: 
``
{% include colour_chip.liquid name="Primary Red"   hex="#E50E56" rgb="0,136,80"   %}
``
To change the name that displays, change "name", to change the colour that displays, change the hex or the rgb values.
5. Save the markdown file with a useful commit title.

