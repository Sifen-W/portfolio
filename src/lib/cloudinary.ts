export function getOptimizedUrl(cloudinaryUrl: string, width?: number) {
  // Inserts Cloudinary transformation params into the URL
  // e.g. f_auto (best format), q_auto (best quality), w_400 (resize)
  const transformations = ['f_auto', 'q_auto', width ? `w_${width}` : ''].filter(Boolean).join(',');
  return cloudinaryUrl.replace('/upload/', `/upload/${transformations}/`);
}