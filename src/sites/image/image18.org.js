// I don't think these sites are same
_.register({
  rule: [
    'http://image18.org/show/*',
    'http://screenlist.ru/details.php?image_id=*',
    'http://www.imagenetz.de/*/*.html',
  ],
  async ready () {
    const img = $('#picture');
    await $.openImage(img.src);
  },
});
