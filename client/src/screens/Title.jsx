import React from 'react'
import logo from "../images/GalleryLogo.png"
import "./CSS/title.css"

export default function Title() {
  return (
    <div id="title">
      <img id="logo" alt="The Gallery Logo" src={logo}></img>
      <p id="p"><span id = "span">The Gallery</span> gives you the tools you need to get started on that gallery wall you’ve always wanted!</p>
    </div>
  )
}
