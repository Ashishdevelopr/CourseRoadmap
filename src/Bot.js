import React from 'react'

export const Bot = () => {
  return (
    <div>
      {(function (d, m) {
        var kommunicateSettings =
          { "appId": "2e30ecc2c1375b16d93b27f6d597eab7b", "popupWidget": true, "automaticChatOpenOnNavigation": true };
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {})
      }
    </div>
  )
}
