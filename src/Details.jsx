import React, { useState } from 'react';
import logo from './assets/images/png/logo.png';
import mobileIcon from './assets/images/svg/mobile-icon.svg';
import settingIcon from './assets/images/svg/setting-icon.svg';
import delteIcon from './assets/images/svg/delete-white.svg';
import thumbupIcon from './assets/images/svg/thumb-up-icon.svg';
import step1 from './assets/images/png/step1.png';
import step2 from './assets/images/png/step2.png';
import step3 from './assets/images/png/step3.png';
import step4 from './assets/images/png/step4.png';
export default function Details() {
  const [step, setStep] = useState('step1');
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="bg_green_yellow py-3">
          <div className="container">
            <div className="d-flex align-items-center">
              <img className='logo' src={logo} alt="logo" />
              <p className="fs-3sm fw-700 white ms-2 mb-0">Apna Crusher</p>
            </div>
          </div>
        </div>
        <div className="container flex-grow-1">
          <p className="fs-2sm fw-700 black mt-4 pt-1">Account Deletion Request</p>
          <p className="fs-sm fw-400 black mt-3 pt-1">
            Welcome to [Your Company] Account Deletion Page At [Your Company], we understand that
            your privacy is important. If you wish to delete your user account, please follow the
            steps below.
          </p>
          <div className="overflow-auto steps">
            <div className="d-flex align-items-center gap-2 gap-lg-4 mt-3 min_width_700 mb-1">
              <div
                onClick={() => setStep('step1')}
                className={`step_bg d-flex flex-column align-items-center w-100 ${
                  step === 'step1' ? `active_step_bg` : null
                }`}>
                <img src={mobileIcon} alt="mobile-icon" />
                <p className="fs-xs fw-700 white my-1">Step 1: </p>
                <p className="fs-xxs fw-400 mb-0 white text-center">Open the Mobile Application</p>
              </div>
              <div
                onClick={() => setStep('step2')}
                className={`step_bg d-flex flex-column align-items-center w-100 ${
                  step === 'step2' ? `active_step_bg` : null
                }`}>
                <img src={settingIcon} alt="mobile-icon" />
                <p className="fs-xs fw-700 white my-1">Step 2: </p>
                <p className="fs-xxs fw-400 mb-0 white text-center">Navigate to Account Settings</p>
              </div>
              <div
                onClick={() => setStep('step3')}
                className={`step_bg d-flex flex-column align-items-center w-100 ${
                  step === 'step3' ? `active_step_bg` : null
                }`}>
                <img src={delteIcon} alt="mobile-icon" />
                <p className="fs-xs fw-700 white my-1">Step 3: </p>
                <p className="fs-xxs fw-400 mb-0 white text-center">Open the Mobile Application</p>
              </div>
              <div
                onClick={() => setStep('step4')}
                className={`step_bg d-flex flex-column align-items-center w-100 ${
                  step === 'step4' ? `active_step_bg` : null
                }`}>
                <img src={thumbupIcon} alt="mobile-icon" />
                <p className="fs-xs fw-700 white my-1">Step 4: </p>
                <p className="fs-xxs fw-400 mb-0 white text-center">Navigate to Account Settings</p>
              </div>
            </div>
          </div>
          <div className="steps_data mt-3">
            {step === 'step1' ? (
              <div>
                <p className="fs-2sm fw-700 black mb-0">Step 1: Open the Mobile Application</p>
                <p className="fs-sm fw-400 black mb-0 mt-2">
                  Open the “Apna Crusher” mobile application on your device.
                </p>
                <img className="mt-2 w_xsm_100" src={step1} alt="step1" />
              </div>
            ) : step === 'step2' ? (
              <div>
                <div>
                  <p className="fs-2sm fw-700 black mb-0">Step 2: Navigate to Account Settings</p>
                  <p className="fs-sm fw-400 black mb-0 mt-2">
                    In the app, locate and navigate to the "Account Settings" or a similar section.
                  </p>
                  <img className="mt-2 w_xsm_100" src={step2} alt="step2" />
                </div>
              </div>
            ) : step === 'step3' ? (
              <div>
                <p className="fs-2sm fw-700 black mb-0">Step 3: Find the Deletion Feature/Button</p>
                <p className="fs-sm fw-400 black mb-0 mt-2">
                  Look for the "Delete Account" feature or button within the "Help Centre" section.
                </p>
                <img className="mt-2 w_xsm_100" src={step3} alt="step3" />
              </div>
            ) : step === 'step4' ? (
              <div>
                <p className="fs-2sm fw-700 black mb-0">Step 4: Confirm Deletion</p>
                <p className="fs-sm fw-400 black mb-0 mt-2">
                  Upon selecting the "Delete Account" feature, the app may prompt you to confirm
                  your decision. Please review the confirmation message carefully.
                </p>
                <img className="mt-2 w_xsm_100" src={step4} alt="step4" />
              </div>
            ) : null}
            <div className="d-flex align-items-center justify-content-end gap-4">
              {step !== 'step1' ? (
                <div
                  onClick={() =>
                    step === 'step4'
                      ? setStep('step3')
                      : step === 'step3'
                      ? setStep('step2')
                      : step === 'step2'
                      ? setStep('step1')
                      : null
                  }
                  className="text-end">
                  <button className="next_btn fs-sm fw-400 white">Back</button>
                </div>
              ) : null}
              {step !== 'step4' ? (
                <div
                  onClick={() =>
                    step === 'step1'
                      ? setStep('step2')
                      : step === 'step2'
                      ? setStep('step3')
                      : step === 'step3'
                      ? setStep('step4')
                      : null
                  }
                  className="text-end">
                  <button className="next_btn fs-sm fw-400 white">Next</button>
                </div>
              ) : null}
            </div>
          </div>
          <p className="fs-2sm fw-700 black mt-3">Important Notes:</p>
          <p className="fs-sm fw-400 black mt-3">
            <span className="fw-700">Data Removal:</span> Your personal data will be removed from
            our system as per our Privacy Policy.
          </p>
          <p className="fs-sm fw-400 black mt-3">
            <span className="fw-700">Irreversible Process:</span> Account deletion is irreversible.
            Make sure you have backed up any important data before proceeding.
          </p>
          <p className="fs-sm fw-400 black mt-3">
            <span className="fw-700">Contact Support:</span>
            If you encounter any issues or have questions, please contact our support team.
          </p>
          <p className="fs-sm fw-400 black mt-3">
            <span className="fw-700">Contact Support:</span>
            If you encounter any issues or have questions, please contact our support team.
          </p>
          <p className="fs-sm fw-400 black mt-3 pb-1">
            Thank you for being a part of our community!
          </p>
        </div>
        <div className="bg_green_yellow py-3">
          <div className="container">
            <p className="mb-0 white">@ All Rights Reserved at Apna Crusher</p>
          </div>
        </div>
      </div>
    </>
  );
}
