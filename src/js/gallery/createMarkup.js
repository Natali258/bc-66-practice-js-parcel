export const createMarkup = photos => {
  return photos
    .map(
      ({ urls, alt_description }) =>
        `<li class="gallery__item">
    <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
</li>`
    )
    .join('');
};
