# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  <!-- - [Goals](#goals) -->
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframe](#wireframe)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**The Gallery**_

Gallery Walls are all the rage and you can enjoy one in your home too! Well, that may be easier said than done. Here we have a tool to help you get there. Through our gallery templates you can take your own photos and arrange them in our frames, allowing you to visualize the space and what it could look like in your home!

<br>

## MVP

Ruby on Rails

- 3 tables
- 1 association
- Full CRUD

React

- 8 components
- full CRUD

Media queries for responsive design on 3 screen sizes

Deploy early via Surge or Netlify, and Heroku

Features

- allows you to put your own images in the picture frames
- allows you to customize the colors of the frames and wall(background)
- gives you a template to work with depending on number of picture frames

<br>

### Post-MVP

- Download feature
- Authentication allowing you to store and share your designs
- more flexibility in gallery customization

<br>

### Libraries and Dependencies

|    Library    | Description                  |
| :-----------: | :--------------------------- |
|     React     | _Front end Dom manipulation_ |
| React Router  | _Front end Dom manipulation_ |
| Ruby on Rails | _Back End Development_       |

<br>

### Client (Front End)

#### Wireframe

![The Gallery WireFrame](https://res.cloudinary.com/mandatea/image/upload/v1620367775/Gallery_tmv291.jpg)

#### Component Tree

![The Gallery Component Tree](https://res.cloudinary.com/mandatea/image/upload/v1620367934/Gallery_component_heirarchy_wcdnrt.jpg)

#### Component Architecture

```structure

src
|__ CSS/
      |__ Nav.css
      |__ Footer.css
      |__ Title.css
      |__ GettingStarted.css
      |__ GalleryDisplay.css
      |__ GalleryForm.css
      |__ ImagesForm.css
      |__ GalleryContent.css
|__ components/
      |__ Nav.jsx
      |__ Footer.jsx
      |__ Title.jsx
      |__ GettingStarted.jsx
      |__ GalleryDisplay.jsx
      |__ GalleryForm.jsx
      |__ ImagesForm.jsx
      |__ GalleryContent.jsx
|__ services/
      |__ index.jsx
|__ images/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![The Gallery ERD Model](https://res.cloudinary.com/mandatea/image/upload/v1620368059/TheGalleryERD_bao87t.png)
<br>

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
