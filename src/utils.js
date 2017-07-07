export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

/**
 * Test if device supports touch
 * @return {Boolean}
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints
}
