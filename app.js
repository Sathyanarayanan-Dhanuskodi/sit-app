const registerServiceWorker = async () => {
    
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        'serviceWorker.js',
        {
          scope: './',
        }
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }

      registration.pushManager.subscribe().then(
      (pushSubscription) => {
        console.log("OOOOOOOOO",pushSubscription.endpoint);
        // The push subscription details needed by the application
        // server are now available, and can be sent to it using,
        // for example, the fetch() API.
      },
      (error) => {
        console.error(error);
      })


    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
   
};

registerServiceWorker()