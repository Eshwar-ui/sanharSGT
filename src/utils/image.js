export const optimizeImage = (src, width = 900) => {
  if (!src?.includes("res.cloudinary.com") || !src.includes("/image/upload/")) {
    return src
  }

  return src.replace(
    "/image/upload/",
    `/image/upload/f_auto,q_auto:eco,w_${width},c_limit/`
  )
}
