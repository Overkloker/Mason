/**
 * Created by Frank on 18.10.2015.
 */
$("#grid-a").mason({
  itemSelector: '.box',
  ratio: 1.2,
  sizes: [
    [1,1],
    [1,2],
    [2,1],
    [4,1],
    [3,2]
  ],
  columns: [
    [0, 480, 3],
    [480, 1920, 5]
  ],
  filler: {
    itemSelector: '.filler',
    filler_class: 'mason-filler'
  },
  gutter: 5,
  layout: 'fluid'
});