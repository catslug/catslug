console.log('loaded')

$(document).on('load', function() {
  console.log('I get to this page');

  const scene = document.getElementById('scene');
  const parallaxInstance = new Parallax(scene, {pointerEvents: true});
  parallaxInstance.friction(0.2, 0.2)

  $('.more-content').on('click', function() {
    console.log('hi I get to this page')
  })
})