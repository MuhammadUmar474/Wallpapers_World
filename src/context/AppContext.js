import React, {useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import {getItemFromAsyncStorage} from '../utils/storage/asyncStorage';

const colorScheme = Appearance.getColorScheme();

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedColor, setSelectedColor] = useState(
    colorScheme === 'dark' ? true : false,
  );

  const loadFontAndColorFromStorage = async () => {
    try {
      const font = await getItemFromAsyncStorage('selectedFont');
      const color = await getItemFromAsyncStorage('selectedColor');
      if (font !== null) {
        setSelectedFont(font);
      }
      if (JSON?.parse(color) !== null) {
        setSelectedColor(JSON?.parse(color));
      }
    } catch (error) {
      console.error('Error loading  from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    loadFontAndColorFromStorage();
  }, []);

  const updateFont = async font => {
    await saveItemInAsyncStorage('selectedFont', font);
    setSelectedFont(font);
  };

  const updateColor = async color => {
    // console.log('color is',color)
    await saveItemInAsyncStorage('selectedColor', JSON?.stringify(color));
    setSelectedColor(color);
  };

  return (
    <AppContext.Provider
      value={{
        selectedFont,
        updateFont,
        updateColor,
        selectedColor,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
