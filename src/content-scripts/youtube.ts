function _getYTOrgLink(document: Document): string {
  const link = document.location.href;
  const titleElement = document.querySelector("#title yt-formatted-string");
  const title = titleElement ? titleElement : "";
  return `[[${link}][${title}]]`;
}

