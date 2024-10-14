import { SubmitHandler, useForm } from 'react-hook-form'
import { UserLoginSchema, UserLoginType } from '@/schemas/userSchema.ts'
import { Form } from '@/components/atoms/ui/form.tsx'
import FormInput from '@/components/molecules/FormInput.tsx'
import { Button } from '@/components/atoms/ui/button.tsx'
import { Link } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Loading from '@/components/templates/Loading.tsx'
import authService from '@/services/authService.ts'

const DeleteAccountForm = ({ checkAccountDone }: { checkAccountDone: () => void }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm<UserLoginType>({
    resolver: zodResolver(UserLoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit: SubmitHandler<UserLoginType> = async (data: UserLoginType) => {
    setLoading(true)
    const response = await authService.login(data)
    setLoading(false)
    if (response.success) {
      localStorage.setItem('accessToken', response?.result?.data as string)
      const result = await authService.getUserInfo()
      if (result.success) {
        checkAccountDone()
      }
      toast.success(response?.result?.message as string)
    } else {
      toast.error(response?.result?.message as string)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={'w-full flex flex-col gap-y-3'}>
        <div className={'grid grid-cols-2  gap-x-2 gap-y-4'}>
          <FormInput
            name={'email'}
            form={form}
            placeholder={'Ex:customer@gmail.com'}
            classContent={'col-span-2'}
            autoFocus
          />
          <FormInput name={'password'} form={form} classContent={'col-span-2'} type={'password'} />
          <div className={'justify-end flex text-orangeTheme text-sm col-span-2 -mt-4 font-semibold'}>
            <Link to={'/forgot-password'}>Forgot password</Link>
          </div>
        </div>
        <div className={'flex flex-col gap-2'}>
          <Button
            className={'bg-orangeTheme w-full hover:bg-orangeTheme/90'}
            type={'submit'}
            disabled={form.formState.isSubmitting}
          >
            Login
          </Button>
        </div>
      </form>
      {loading && <Loading />}
    </Form>
  )
}

export default DeleteAccountForm
