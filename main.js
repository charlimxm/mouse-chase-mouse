$(function () {
  var $jerry = $('img')
  var $body = $('body')

  $body.on('mousemove', chaseMouse)

  function chaseMouse (e) {
    // clientX => left rule
    // clientY => top rule
    var clientX = e.clientX
    var clientY = e.clientY
    var jerryWidth = Number($jerry.css('width').replace('px', ''))
    var jerryHeight = Number($jerry.css('height').replace('px', ''))

    var jerryPoint = midPoint(clientX, clientY, jerryWidth, jerryHeight)

    $jerry.css(jerryPoint)
  }

  function midPoint (mouseX, mouseY, objWidth, objHeight) {
    var bodyWidth = Number($body.css('width').replace('px', ''))

    return {
      top: `${mouseY - (objHeight / 2)}px`,
      left: `${mouseX - (objWidth / 2)}px`,
      transform: (mouseX > bodyWidth / 2) ? 'scaleX(-1)' : 'scaleX(1)'
    }
  }
})
