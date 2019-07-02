const holdingMessage = () => {
    console.log('Waiting...')
  }
  
  const swingAxe = () => {
    setTimeout(() => {
      console.log("This is a sharp Medicine, but it is a Physician for all diseases and miseries.")
      holdingMessage()
      console.log('Finished.')
    }, 100)
    holdingMessage()
  }
  
  swingAxe()

