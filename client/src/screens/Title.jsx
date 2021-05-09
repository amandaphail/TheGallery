import React from 'react'
import logo from "../images/GalleryLogo.png"
import "./CSS/title.css"

export default function Title() {
  return (
    <div id="title">
      <h1>
        Welcome to,
      </h1>
      <img id="logo" alt="The Gallery Logo" src={logo}></img>
      <p><span id = "bold">The Gallery</span> gives you the tools you need to get started on that gallery wall you’ve always wanted!</p>
    </div>
  )
}
