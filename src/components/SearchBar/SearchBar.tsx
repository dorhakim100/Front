import * as React from 'react'

import { useSelector } from 'react-redux'

import { RootState } from '../../store/store'

import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

import SettingsIcon from '@mui/icons-material/Settings'

import { PrefsButton } from '../PrefsButton/PrefsButton'
import { setIsHeader, setIsPrefs } from '../../store/actions/system.actions'

export function SearchBar() {
  const prefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.prefs
  )
  const isPrefs = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.isPrefs
  )

  const isHeader = useSelector(
    (stateSelector: RootState) => stateSelector.systemModule.isHeader
  )

  const onToggleMenu = () => {
    setIsHeader(!isHeader)
  }

  return (
    <div className='search-bar-container'>
      <Paper
        component='form'
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          //   width: '100%',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: prefs.isDarkMode ? '#333' : '#fff',
        }}
      >
        <IconButton
          sx={{
            p: '10px',
            color: prefs.isDarkMode ? '#fff' : '#000',
            '&:focus': {
              outline: 'none',
            },
          }}
          aria-label='menu'
          onClick={onToggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            p: '10px',
            color: prefs.isDarkMode ? '#fff' : '#000',
            '&:focus': {
              outline: 'none',
            },
          }}
          placeholder='Search Google Maps'
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type='button'
          sx={{
            p: '10px',
            color: prefs.isDarkMode ? '#fff' : '#000',
            '&:focus': {
              outline: 'none',
            },
          }}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
        <IconButton
          color='primary'
          className='prefs-button'
          sx={{
            p: '10px',
            '&:focus': {
              outline: 'none',
            },
          }}
          aria-label='directions'
          onClick={() => {
            setIsPrefs(!isPrefs)
          }}
        >
          <SettingsIcon className='settings-btn' />
        </IconButton>
      </Paper>
    </div>
  )
}
