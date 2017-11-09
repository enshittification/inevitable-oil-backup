import { getConfiguration } from './../../config.js';
import { OIL_CONFIG, DATA_CONTEXT_YES_POI } from './../../constants.js';
import { CSSPrefix } from './../oil.view.config.js';

let config = getConfiguration();
let activatePoi = config[OIL_CONFIG.ATTR_ACTIVATE_POI];

/**
 * Returns html content for OIL power opt in button
 */

export const POIButtonSnippet = () => {
  if (activatePoi) {
    return (
      `
        <div class="${CSSPrefix}oil-l-item">
          <button class="${CSSPrefix}oil__btn-poi ${CSSPrefix}js-optin-poi" data-context="${DATA_CONTEXT_YES_POI}" data-qa="oil-poi-YesButton">
              ${config.label_button_yes_poi}
          </button>
        </div>
        `
    );
  }
  return '';
}
