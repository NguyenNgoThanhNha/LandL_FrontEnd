import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction
} from '@/components/atoms/ui/alert-dialog.tsx'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Loading from '@/components/templates/Loading.tsx'
import authService from '@/services/authService.ts'

const DeleteConfirm = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const handleConfirm = async () => {
    setLoading(true)
    const response = await authService.deleteAccount()
    setLoading(false)
    setOpen(false)
    if (response.success) {
      toast.success(response?.result?.message as string)
    } else {
      toast.error(response?.result?.message as string)
    }
  }
  return (
    <>
      <AlertDialog open={open}>
        <AlertDialogContent className={'max-sm:w-9/12 '}>
          <AlertDialogHeader>
            <AlertDialogTitle className={'flex justify-center text-orangeTheme font-bold text-2xl '}>
              DELETE ACCOUNT
            </AlertDialogTitle>
            <AlertDialogDescription className={'text-black'}>Confirm to delete account?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className={'flex justify-end gap-4 items-center '}>
              <AlertDialogCancel
                className={'hover:bg-orangeTheme/10 text-orangeTheme hover:text-orangeTheme items-center '}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                className={'bg-orangeTheme  hover:bg-orangeTheme/90 items-center '}
                onClick={handleConfirm}
              >
                Confirm
              </AlertDialogAction>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {loading && <Loading />}
    </>
  )
}

export default DeleteConfirm
