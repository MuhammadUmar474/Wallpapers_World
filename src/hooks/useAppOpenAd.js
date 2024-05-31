import {useEffect, useRef} from 'react';
import {AppOpenAd, AdEventType} from 'react-native-google-mobile-ads';

const useAppOpenAd = appOpenAdId => {
  const appOpenAd = useRef(null);

  useEffect(() => {
    const loadAd = () => {
      appOpenAd.current = AppOpenAd.createForAdRequest(appOpenAdId, {
        requestNonPersonalizedAdsOnly: true,
      });

      const adEventListener = appOpenAd.current.addAdEventListener(
        AdEventType.LOADED,
        () => {
          appOpenAd.current.show();
        },
      );

      appOpenAd.current.addAdEventListener(AdEventType.ERROR, error => {
        console.error('App Open Ad Error:', error);
      });

      appOpenAd.current.load();

      return () => {
        if (adEventListener) {
          adEventListener.remove();
        }
        if (appOpenAd.current) {
          appOpenAd.current.destroy();
        }
      };
    };

    loadAd();
  }, [appOpenAdId]);

  return null;
};

export default useAppOpenAd;
