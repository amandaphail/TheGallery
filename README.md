# The Gallery

## [Check out The Gallery here!](https://thegalleryforyou.netlify.app/)

- [Overview](#overview)
- [MVP](#mvp)
- [Post-MVP](#post-mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframe](#wireframe)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**The Gallery**_

Gallery Walls are all the rage and you can enjoy one in your home too! Well, we all know that's easier said than done. Here we have a tool to help you get there. Through our gallery templates you can take your own photos and place them in our frames arrangements, allowing you to visualize the space and what it could look like in your home!

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
- More flexibility in gallery customization

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
      |__ GalleryTemplates/
            |__ Fourframes.jsx
            |__ Fiveframes.jsx
            |__ Sixframes.jsx
            |__ Sevenframes.jsx
            |__ Eightframes.jsx
            |__ CSS/
                |__ Fourframes.css
                |__ Fiveframes.css
                |__ Sixframes.css
                |__ Sevenframes.css
                |__ Eightframes.css
|__ services/
      |__ index.jsx


```

#### Time Estimates

| Task                                                    | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create models, routes, and controllers in Ruby on Rails |    M     |     3 hrs      |      TBD      |     TBD     |
| Set up boilerplate code, components, router, and axios  |    M     |     2 hrs      |      TBD      |     TBD     |
| Navbar code and CSS                                     |    M     |    1.5 hrs     |      TBD      |     TBD     |
| Footer code and CSS                                     |    M     |    1.5 hrs     |      TBD      |     TBD     |
| Title Page code and CSS                                 |    M     |     3 hrs      |      TBD      |     TBD     |
| Getting Started code and CSS                            |    M     |      1 hr      |      TBD      |     TBD     |
| Gallery Form code and CSS                               |    M     |     3 hrs      |      TBD      |     TBD     |
| Gallery Display code and CSS                            |    M     |     2 hrs      |      TBD      |     TBD     |
| Images Form code and CSS                                |    M     |     3 hrs      |      TBD      |     TBD     |
| Gallery Content                                         |          |                |               |             |
| Crating Gallery templates                               |    H     |     3 hrs      |      TBD      |     TBD     |
| Applying inputs from forms to templates                 |    H     |     3 hrs      |      TBD      |     TBD     |
| Content CSS                                             |    M     |     3 hrs      |      TBD      |     TBD     |
| Media query - Device 1                                  |    M     |     2 hrs      |      TBD      |     TBD     |
| Media query - Device 2                                  |    M     |     2 hrs      |      TBD      |     TBD     |
| TOTAL                                                   |          |     33 hrs     |      TBD      |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![The Gallery ERD Model](https://res.cloudinary.com/mandatea/image/upload/v1620400760/TheGalleryERD_kub7cs.png)
<br>

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
