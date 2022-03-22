import { Selector } from 'testcafe';
import ChallengeFactorPageObject from './ChallengeFactorPageObject';

const FORM_INFOBOX_WARNING = '.okta-form-infobox-warning';
const FORM_INFOBOX_ERROR = '[data-se="o-form-error-container"] [data-se="callout"]';
const RESEND_NUMBER_CHALLENGE_BUTTON = '.okta-form-infobox-warning .resend-number-challenge';
const FORM_INFOBOX_ERROR_TITLE = '[data-se="o-form-error-container"] [data-se="callout"] > h3';
const FORM_SELECTOR = '.okta-verify-send-push-form';
const AUTO_CHALLENGE_CHECKBOX_SELECTOR = '[name$="autoChallenge"]';
const AUTO_CHALLENGE_CHECKBOX_LABEL_SELECTOR = '[data-se-for-name$="autoChallenge"]';
const FACTOR_BEACON = '.auth-beacon.auth-beacon-factor';
export default class ChallengeOktaVerifyPushPageObject extends ChallengeFactorPageObject {
  constructor(t) {
    super(t);
    this.beacon = new Selector('.beacon-container');
  }

  getPushButton() {
    return this.form.getElement('.send-push');
  }

  getA11ySpan() {
    return this.form.getElement('.accessibility-text');
  }

  getResendPushButton() {
    return this.form.getElement('.button-primary');
  }

  clickResendPushButton() {
    return this.form.clickSaveButton();
  }

  clickResendNumberChallenge() {
    return this.form.clickElement(RESEND_NUMBER_CHALLENGE_BUTTON);
  }

  async waitForErrorBox() {
    await this.form.el.find(FORM_INFOBOX_ERROR).exists;
  }

  getErrorBox() {
    return this.form.getElement(FORM_INFOBOX_ERROR);
  }

  getErrorTitle() {
    return this.form.getElement(FORM_INFOBOX_ERROR_TITLE);
  }

  getWarningBox() {
    return this.form.getElement(FORM_INFOBOX_WARNING);
  }

  async autoChallengeInputExists() {
    return this.form.elementExist(AUTO_CHALLENGE_CHECKBOX_SELECTOR);
  }

  getAutoChallengeCheckboxLabel() {
    return this.form.getElement(AUTO_CHALLENGE_CHECKBOX_LABEL_SELECTOR);
  }

  async clickAutoChallengeCheckbox() {
    await this.t.click(this.form.getElement(AUTO_CHALLENGE_CHECKBOX_LABEL_SELECTOR));
  }

  async  isOktaVerifySendPushForm() {
    const formCount = await Selector(FORM_SELECTOR).count;
    return formCount === 1;
  }

  async clickSendPushButton() {
    await this.form.clickSaveButton();
  }

  getBeaconClass() {
    return this.beacon.find(FACTOR_BEACON).getAttribute('class');
  }

}
