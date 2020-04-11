import * as React from 'react';
import {MenuIcon} from '@grower/components';

export function buildStackScreenOptions(title, colors) {
  return {
    headerTitle: title,
    headerTintColor: colors.headerText,
    headerTitleContainerStyle: {
      marginLeft: -20,
    },
    headerLeft: () => {
      return <MenuIcon />;
    },
  };
}
