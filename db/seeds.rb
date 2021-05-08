# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

images = [
  {
    url: "https://i.pinimg.com/originals/9d/8c/fe/9d8cfe99f34df939d2cf4015b34fd4b0.jpg"
    # lavendar flowers
  },
  {
    url: "https://cdn.shopify.com/s/files/1/1898/1215/products/ARTPIQ_Fine-Art-Print-E03-blau_B700xH1000mm_B-1mm_RZ.jpg?v=1601475302"
    # blue paint splatters
  },
  {
    url: "https://i.pinimg.com/736x/ce/af/bb/ceafbb08f9e3907ac7f8c489c817059f.jpg"
    # abstract plant orange tones
  },
  {
    url: "https://i.pinimg.com/originals/28/2a/66/282a6663c1b94211bf5560b79a95522a.jpg"
    # abstract with pink background
  },
  {
    url: "https://desenio.com/bilder/artiklar/zoom/12695_2.jpg?imwidth=267"
    # drawn lovers, black and white
  },
  {
    url: "https://i.pinimg.com/originals/02/fe/9d/02fe9d4fb02cc0ad82515024d385fcd2.jpg"
    # woman colorful hair, bright yellow background
  },
  {
    url: "https://i.icanvas.com/list-square/technodrome-TDR230.jpg"
    # colorful rapper
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0142/8897/7984/products/hidden-in-ocho-rios-art-print-624831_600x.jpg?v=1605428407"
    # woman in plants pink background
  },
  {
    url: "https://i.pinimg.com/originals/f7/3b/d5/f73bd57e18a956d9b1b3d1645f7ae3ad.jpg"
    # watercolor blue flowers
  },
  {
    url: "https://cdn.shopify.com/s/files/1/0058/4269/8358/products/6151-White-Peony_1817e871-444d-49b6-8cb6-6e2ce1e95330_large.jpg?v=1569906376"
    # white drawn flowers
  },
  {
    url: "https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/pink-peony-watercolor-paintings-of-flowers-beverly-brown-prints.jpg?shape=square"
    # watercolor pink flower
  }
  
]

galleries = [
  {
    num_of_frames: 6,
    wall_color: "orange";
  },
  {
    num_of_frames: 5,
    wall_color: "white";
  },
  {
    num_of_frames: 5,
    wall_color: "navy blue";
  }
]


Gallery.create!(galleries)
Image.create!(images)