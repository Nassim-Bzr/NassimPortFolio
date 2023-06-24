// utils.js


export const downloadCV = () => {
  const link = document.createElement("a");
  link.href = process.env.PUBLIC_URL + "/Assets/CV_Vincent_PERON.pdf";
  link.setAttribute("download", "CV_Vincent_PERON.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
