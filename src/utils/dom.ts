export const scrollToBottom = (element: Element) => {
  setTimeout(() => element.scrollTo({ top: element.scrollHeight, behavior: 'smooth' }), 0)
};
