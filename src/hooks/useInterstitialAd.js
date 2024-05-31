import {useEffect, useRef} from 'react';
import {InterstitialAd, AdEventType} from 'react-native-google-mobile-ads';

const useInterstitialAd = (interstitialAdId, onAdClosed) => {
  const interstitialAd = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      interstitialAd.current = InterstitialAd.createForAdRequest(
        interstitialAdId,
        {
          requestNonPersonalizedAdsOnly: true,
        },
      );

      const adLoadedListener = interstitialAd.current.addAdEventListener(
        AdEventType.LOADED,
        () => {
          console.log('Interstitial Ad Loaded');
        },
      );

      const adClosedListener = interstitialAd.current.addAdEventListener(
        AdEventType.CLOSED,
        () => {
          console.log('Interstitial Ad Closed');
          if (onAdClosed) onAdClosed();
          interstitialAd.current.load(); // Load a new ad when the current one is closed
        },
      );

      const adErrorListener = interstitialAd.current.addAdEventListener(
        AdEventType.ERROR,
        error => {
          console.error('Interstitial Ad Error:', error);
        },
      );

      interstitialAd.current.load();

      return () => {
        if (adLoadedListener) adLoadedListener.remove();
        if (adClosedListener) adClosedListener.remove();
        if (adErrorListener) adErrorListener.remove();
        if (interstitialAd.current) interstitialAd.current.destroy();
      };
    };

    loadAd();
  }, [interstitialAdId, onAdClosed]);

  const showAd = () => {
    if (interstitialAd.current && interstitialAd.current.loaded) {
      interstitialAd.current.show();
    }
  };

  return showAd;
};

export default useInterstitialAd;
