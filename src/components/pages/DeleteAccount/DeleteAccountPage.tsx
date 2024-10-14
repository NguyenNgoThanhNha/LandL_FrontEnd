import DeleteAccountForm from '@/components/organisms/DeleteAccount/DeleteAccountForm.tsx'
import { useState } from 'react'
import DeleteConfirm from '@/components/organisms/DeleteAccount/DeleteConfirm.tsx'

const DeleteAccountPage = () => {
  const [ok, setOk] = useState(false)
  const checkAccountDone = () => {
    setOk(true)
  }
  return (
    <div className={'min-h-screen flex flex-col items-center justify-center'}>
      {!ok ? (
        <div className={'md:w-2/3 max-sm:w-full flex flex-col items-center justify-center gap-4'}>
          <p className={'font-medium text-4xl'}>LOGIN FORM</p>
          <p>You need login to confirm account before you delete</p>
          <DeleteAccountForm checkAccountDone={checkAccountDone} />
        </div>
      ) : (
        <DeleteConfirm open={ok} setOpen={setOk} />
      )}
    </div>
  )
}

export default DeleteAccountPage
