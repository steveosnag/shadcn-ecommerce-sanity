// all Sanity queries

// *[_type == 'heroImage'][0]

// *[_type == 'product'][0...4] | order(_createdAt asc) {
//   _id,
//     price,
//     name,
//     'slug': slug.current,
//     'categoryName': category->name,
//     'imageUrl': images[0].asset->url
// }

// *[_type == 'product' && slug.current == 'nike-zegama'][0] {
//   _id,
//     images,
//     price,
//     name,
//     description,
//     "slug": slug.current,
//     "categoryName": category->name,
//      price_id,    // added after linking stripe and adding price_id from stripe
// }

// *[_type == 'product' && category->name == 'Men'] {
//   _id,
//     "imageUrl": images[0].asset->url,
//     price,
//     name,
//     "slug": slug.current,
//     "categoryName": category->name,
// }

