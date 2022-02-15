const notification = ( data, classes ) => {
  return  window.M.toast( { html: data, classes: classes } )
}

export { notification }
