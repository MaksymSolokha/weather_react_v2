import { Button, Typography } from '@mui/material'
import { FC, useState } from 'react'
import { CityInput, HeaderContainer, HeaderInputContainer } from './styles.ts'
import { IHeaderProps } from './types.ts'
import ErrorAlert from '../ErrorAlert'

const Header: FC<IHeaderProps> = ({ onSearch, open, setOpen }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    onSearch(searchValue)
    setSearchValue('')
  }

  return (
    <HeaderContainer>
      <Typography color={'#7284FF'} variant={'h4'}>
        Weather by Solokha
      </Typography>
      <HeaderInputContainer>
        <CityInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={'Enter city name...'}
        />
        <Button
          sx={{
            borderRadius: '10px',
          }}
          variant={'contained'}
          onClick={handleSearch}
        >
          Search
        </Button>
      </HeaderInputContainer>
      <ErrorAlert open={open} setOpen={setOpen} />
    </HeaderContainer>
  )
}

export default Header
