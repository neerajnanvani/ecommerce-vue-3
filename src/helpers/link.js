/**
 * Funtion to get the exact file path for assets images
 * 
 * @param {string} imgLink - the path for the link
 * @returns {url} - the perfect path for images
 */
export const getImageUrl  = (imgLink) => {
    return new URL(`../assets/${imgLink}`, import.meta.url)
} 