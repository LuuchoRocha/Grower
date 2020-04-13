import * as React from 'react';
import {MenuIcon} from '@grower/components';

export function buildStackScreenOptions({title, colors, menuButton = true}) {
  const options = {
    headerTitle: title,
    headerTintColor: colors.headerText,
    headerTitleContainerStyle: {
      marginLeft: -20,
    },
  };
  if (menuButton) {
    options.headerLeft = () => {
      return <MenuIcon />;
    };
  }
  return options;
}
