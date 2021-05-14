import api from './api-config'

export const getAllGalleries = async () => {
  const resp = await api.get('/galleries');
  return resp.data
}

export const getGallery = async (id) => {
  if (id) {    
    const resp = await api.get(`/galleries/${id}`)
    return resp.data
  }
}


export const createGallery = async (galleryData) => {
  const resp = await api.post('/galleries', galleryData)
  return resp.data
}


export const updateGallery = async (id, galleryData) => {
  const resp = await api.put(`/galleries/${id}`, galleryData)
  return resp.data
}

export const deleteGallery = async (id) => {
  const resp = await api.delete(`galleries/${id}`)
  return resp.data
}

