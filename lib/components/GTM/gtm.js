import React from "react"
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-XXXXXXX'}

TagManager.initialize(tagManagerArgs)

const GoogleTagManager = () => {

    window.dataLayer.push({

        event: 'MainPageView'
       
      });

return(
    <h1>Gtm by momo</h1>
)
}
export default GoogleTagManager