import { JS_CLASS_BUTTON_OPTIN, JS_CLASS_BUTTON_ADVANCED_SETTINGS, DATA_CONTEXT_ADVANCED_SETTINGS, DATA_CONTEXT_YES } from '../../core/core_constants.js';
import { getLabel, isAdvancedSettings } from '../userview_config.js';
import { OIL_LABELS } from '../userview_constants.js';
import { AdvancedSettingsButton, YesButton } from './components/oil.buttons.js';

export function oilDefaultTemplate() {
  return `
    <div class="wp-cmp-banner" data-qa="oil-full">
        <div class="wp-cmp-banner__content">
            <div class="wp-cmp-banner__heading">
                ${getLabel(OIL_LABELS.ATTR_LABEL_INTRO_HEADING)}
            </div>
            <p class="wp-cmp-banner__intro-txt">
                ${getLabel(OIL_LABELS.ATTR_LABEL_INTRO)}
            </p>
        </div>
        <div class="wp-cmp-banner__buttons">
            <button class="components-button is-link ${JS_CLASS_BUTTON_ADVANCED_SETTINGS}" data-context="${DATA_CONTEXT_ADVANCED_SETTINGS}" data-qa="oil-AdvancedSettingsButton">
                ${getLabel(OIL_LABELS.ATTR_LABEL_BUTTON_ADVANCED_SETTINGS)}
            </button>
            <button class="components-button is-button is-default" data-context="${DATA_CONTEXT_YES}" data-qa="oil-YesButton">
              ${getLabel(OIL_LABELS.ATTR_LABEL_BUTTON_YES)}
            </button>
        </div>
    </div>
`
  //${AdvancedSettingsButton(isAdvancedSettings())}
  //${YesButton(`as-oil__btn-optin ${JS_CLASS_BUTTON_OPTIN}`)}
}
