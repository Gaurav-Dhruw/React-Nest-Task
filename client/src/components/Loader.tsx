import { CircularProgress } from '@mui/material'


export const Loader = () => {
  return (
    <div className='absolute top-0 w-full h-full flex justify-center items-center'><CircularProgress /></div>
  )
}
