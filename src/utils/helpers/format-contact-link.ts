export const formatContactLink = (link: string): string => {
  if (link.includes("wa.me")) {
    const phoneRegex = /(?:55)(\d{2})(9\d{4})(\d{4})/;
    const match = link.match(phoneRegex);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  }
  if (link.includes("instagram.com")) {
    const usernameRegex = /instagram\.com\/([^/]+)/;
    const match = link.match(usernameRegex);
    if (match) {
      return `@${match[1]}`;
    }
  }
  return link;
};
