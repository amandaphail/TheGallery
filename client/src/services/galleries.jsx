import api from './api-config'

export const getAllGalleries = async () => {
  const resp = await api.get('/galleries');
  return resp.data
}

export const getGallery = async (id) => {
  const resp = await api.get(`/galleries/${id}`)
  return resp.data
}
// how i'll get the gallery to apply to gallerycontent and template

export const createGallery = async (galleryData) => {
  const resp = await api.post('/galleries', galleryData)
  return resp.data
}
//take from gallery form and post gallery to then find by id 

export const updateGallery = async (id, galleryData) => {
  const resp = await api.update(`/galleries/${id}`, galleryData)
  return resp.data
}
//if change color or number of frames - update button

export const deleteGallery = async (id) => {
  const resp = await api.delete(`galleries/${id}`)
  return resp.data
}
//use to keep data base from being cluttered with unused galleries - on page refresh?
// nah we're not going to use for now - can save to local storage, so person can come back and view their gallery - dont need auth for that
