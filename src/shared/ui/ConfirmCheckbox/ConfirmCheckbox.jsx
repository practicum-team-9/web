import React from "react";
import './ConfirmCheckbox.css';

function ConfirmCheckbox({isChecked, setIsChecked}) {

    function toggleCheckbox() {
        setIsChecked(!isChecked);
    }

    return (
                <div className="checkbox-container">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        className="hidden-checkbox"
                        checked={isChecked}
                    />
                    <span tabIndex={0}
                          role="checkbox"
                          aria-checked={isChecked}
                          onClick={toggleCheckbox}
                          onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  toggleCheckbox();
                              }
                          }}
                          className={`custom-checkbox ${isChecked ? 'custom-checkbox_checked' : 'custom-checkbox_unchecked'}`}></span>
                </label>
                    <p className="checkbox-text">Принимаю&nbsp;
                        <a className="checkbox-link"
                           href="https://invatur-nn.ru/polzovatelskoe-soglashenie"
                           target='_blank'
                           title="условия обработки персональных данных">
                            условия обработки персональных данных</a>
                    </p>
                </div>
            )
}

export default ConfirmCheckbox;