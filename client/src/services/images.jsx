import api from "./api-config"

export const getAllImages = async () => {
  const resp = await api.get('/images')
  return resp.data
}

export const getImage = async (gallery_id, id) => {
  const resp = await api.get(`galleries/${gallery_id}/images/${id}`)
  return resp.data
}


export const postImage = async (gallery_id, imageData) => {
  const resp = await api.post(`/galleries/${gallery_id}/images`, imageData)
  return resp.data
}

export const updateImage = async(gallery_id, id, imageData) => {
  const resp = await api.put(`/galleries/${gallery_id}/images/${id}`, imageData)
  return resp.data
}

export const deleteImage = async (gallery_id, id) => {
  const resp = await api.delete(`/galleries/${gallery_id}/images/${id}`)
  return resp.data
}