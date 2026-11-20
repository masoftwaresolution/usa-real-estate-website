// Central image registry. Every photo comes from Unsplash (free under the Unsplash License).
// VERIFIED = photo page opened and checked (real photo, free license, US location).
// UNVERIFIED = well-known Unsplash IDs I could not open from here; run `npm run verify:images`
// to HTTP-check every URL, and swap any that fail (the UI shows a labeled placeholder if one breaks).
export const u = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

/** Re-size an Unsplash URL for the slot it is shown in (smaller = faster). */
export const resize = (url, w) => url.replace(/([?&])w=\d+/, `$1w=${w}`)

export const IMG = {
  // VERIFIED
  ext1: u('photo-1757362141189-8d2f7af341b0'),   // luxury model home, New Braunfels TX (Justin Wolff)
  kitchen1: u('photo-1682888813734-b1b0a4f79385'), // white kitchen with island, South Carolina (Zac Gudakov)
  bedroom1: u('photo-1582582621959-48d27397dc69'), // master bedroom, Logan UT (Adam Winger)
  // UNVERIFIED
  ext2: u('photo-1568605114967-8130f3a36994'),
  ext3: u('photo-1600596542815-ffad4c1539a9'),
  ext4: u('photo-1600585154340-be6161a56a0c'),
  ext5: u('photo-1512917774080-9991f1c4c750'),
  ext6: u('photo-1613490493576-7fde63acd811'),
  ext7: u('photo-1583608205776-bfd35f0d9f83'),
  ext8: u('photo-1605276374104-dee2a0ed3cd6'),
  ext9: u('photo-1580587771525-78b9dba3b914'),
  ext10: u('photo-1576941089067-2de3c901e126'),
  living1: u('photo-1600607687939-ce8a6c25118c'),
  living2: u('photo-1600566753190-17f0baa2a6c3'),
  living3: u('photo-1600047509807-ba8f99d2cdde'),
  living4: u('photo-1505691938895-1758d7feb511'),
  kitchen2: u('photo-1556912172-45b7abe8b7e1'),
  bedroom2: u('photo-1560448204-e02f11c3d0e2'),
  apt1: u('photo-1502672260266-1c1ef2d93688'),
  apt2: u('photo-1493809842364-78817add7ffb'),
  interior: u('photo-1600210492486-724fe5c67fb0'),
  about: u('photo-1560518883-ce09059eeffa'),
}
