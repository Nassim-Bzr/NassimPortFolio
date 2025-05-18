// utils.js


export const downloadCV = () => {
  // Téléchargement du CV depuis les assets
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/Assets/bouzerara-nassim-cv.pdf";
  link.setAttribute("download", "bouzerara-nassim-cv.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
