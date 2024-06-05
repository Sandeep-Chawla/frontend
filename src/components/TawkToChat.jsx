import { useEffect } from 'react';

const TawkToChat = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/665dd37f9a809f19fb388419/1hvf84arg';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // Open the chat widget when the script is loaded
    script.onload = () => {
      if (window.Tawk_API) {
        window.Tawk_API.toggle();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToChat;