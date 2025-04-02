import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { setPrefs, setIsPrefs } from '../../store/actions/system.actions'

import { DarkModeSwitch } from '../DarkModeSwitch/DarkModeSwitch'
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch'

import CloseIcon from '@mui/icons-material/Close'
import LanguageIcon from '@mui/icons-material/Language'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import { RootState } from '../../store/store'

export function Prefs() {
  const prefs = useSelector(
    (storeState: RootState) => storeState.systemModule.prefs
  )
  const isVisible = useSelector(
    (storeState: RootState) => storeState.systemModule.isPrefs
  )

  const [darkMode, setDarkMode] = useState(prefs.isDarkMode)

  function onSetPrefs(type: string) {
    let newPrefs
    switch (type) {
      case 'lang':
        const newLang = !prefs.isEnglish
        newPrefs = { ...prefs, isEnglish: newLang }
        setPrefs(newPrefs)
        // closePrefsModal()
        return

      case 'darkMode':
        const newMode = !prefs.isDarkMode
        newPrefs = { ...prefs, isDarkMode: newMode }
        setDarkMode(newMode)
        setPrefs(newPrefs)
        // closePrefsModal()
        return

      default:
        break
    }
  }

  const closePrefsModal = () => setIsPrefs(false)
  return (
    <>
      {isVisible && <div className='overlay' onClick={closePrefsModal}></div>}
      <div
        className={`prefs-panel ${isVisible ? 'visible' : ''}`}
        // onMouseLeave={closePrefsModal}
      >
        <div className='close-container' onClick={closePrefsModal}>
          <CloseIcon />
        </div>
        <div className='prefs-control'>
          <LanguageSwitch
            onClick={() => onSetPrefs('lang')}
            checked={!prefs.isEnglish}
          />
          <DarkModeSwitch
            onClick={() => onSetPrefs('darkMode')}
            checked={prefs.isDarkMode}
          />
          {/* <button onClick={() => onSetPrefs('lang')}>
          {prefs.isEnglish ? 'Hebrew' : 'אנגלית'}
          <LanguageIcon />
        </button>
        <button onClick={() => onSetPrefs('darkMode')}>
          {prefs.isDarkMode
            ? prefs.isEnglish
              ? 'Light mode'
              : 'מסך בהיר'
            : prefs.isEnglish
            ? 'Dark mode'
            : 'מסך כהה'}
          {prefs.isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}{' '}
        </button> */}
        </div>
      </div>{' '}
    </>
  )
}
