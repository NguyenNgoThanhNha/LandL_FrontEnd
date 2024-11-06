import { useAuth } from '@/context/authContext'
import { UpdateUserInfoSchema, UpdateUserInfoType } from '@/schemas/userSchema.ts'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '@/components/molecules/FormInput.tsx'
import { Button } from '@/components/atoms/ui/button.tsx'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/atoms/ui/form.tsx'
import { Input } from '@/components/atoms/ui/input.tsx'
import FormDatePicker from '@/components/molecules/FormDatePicker'
import { updateUserInformation } from '@/services/authService'
import { useEffect, useState } from 'react'
import Loading from '@/components/templates/Loading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/atoms/ui/select'
import toast from 'react-hot-toast'

const ProfilePage = () => {
  const { auth } = useAuth()
  const [loading, setLoading] = useState(false)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null) // State to hold the avatar preview

  console.log(auth?.user?.phoneNumber)

  const form = useForm<UpdateUserInfoType>({
    resolver: zodResolver(UpdateUserInfoSchema),
    defaultValues: {
      userName: auth?.user?.userName || '',
      fullName: auth?.user?.fullName || '',
      city: auth?.user?.city || '',
      address: auth?.user?.address || '',
      gender: auth?.user?.gender || '',
      birthDate: auth?.user?.birthDate ? new Date(auth.user.birthDate) : new Date(),
      phoneNumber: auth?.user?.phoneNumber || '',
      avatar: undefined
    }
  })

  useEffect(() => {
    if (auth?.user) {
      form.reset({
        userName: auth.user.userName,
        fullName: auth.user.fullName,
        city: auth.user.city,
        address: auth.user.address,
        gender: auth.user.gender,
        birthDate: auth.user.birthDate ? new Date(auth.user.birthDate) : new Date(),
        phoneNumber: auth.user.phoneNumber,
        avatar: undefined
      })

      // Set avatar preview if available
      if (auth.user.avatar) {
        setAvatarPreview(auth.user.avatar)
      }
    }
  }, [auth, form])

  const onSubmit: SubmitHandler<UpdateUserInfoType> = async (data) => {
    try {
      setLoading(true)
      const formData = new FormData()
      formData.append('userName', data.userName)
      formData.append('fullName', data.fullName)
      formData.append('phoneNumber', data.phoneNumber.toString())
      formData.append('city', data.city)
      formData.append('address', data.address)
      formData.append('gender', data.gender)

      const birthDateISO = new Date(data.birthDate).toISOString()
      formData.append('birthDate', birthDateISO)

      if (data.avatar) {
        formData.append('avatar', data.avatar)
      }

      const response = await updateUserInformation({
        email: auth?.user?.email || '', // Use the email from auth context
        data: formData
      })

      if (response.success) {
        toast.success(response.result?.message || 'test')
      }

      if (data.avatar) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setAvatarPreview(reader.result as string)
        }
        reader.readAsDataURL(data.avatar)
      }
    } catch (error) {
      console.error('Error updating user info:', error)
      // Handle error (e.g., display error message)
    } finally {
      setLoading(false) // Kết thúc loading
    }
  }

  if (loading) return <Loading />

  if (!auth?.user)
    return (
      <p>
        <Loading />
      </p>
    ) // Display loading message until auth data is available

  return (
    <div className='container flex flex-col mt-6 px-4'>
      <h2 className='text-2xl font-bold mb-4'>User Profile</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-y-3'>
          <FormInput name='userName' form={form} placeholder='User Name' />
          <FormInput name='fullName' form={form} placeholder='Full Name' />
          <FormInput name='phoneNumber' form={form} placeholder='Phone Number' type='number' />
          <FormInput name='city' form={form} placeholder='City' />
          <FormInput name='address' form={form} placeholder='Address' />
          {/* Birth Date Field */}
          <FormDatePicker
            name='birthDate'
            form={form}
            addDay={0} // Restrict future dates for birth date
            subDay={365 * 100} // Allow selection of dates up to 100 years back
          />
          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(value)}
                    value={field.value || ''} // Ensure value is set correctly
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Select Gender' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Male'>Male</SelectItem>
                      <SelectItem value='Female'>Female</SelectItem>
                      <SelectItem value='Other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Avatar Upload Field */}
          <div className='flex gap-10'>
            <div className='flex-1'>
              <FormField
                control={form.control}
                name='avatar'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Avatar</FormLabel>
                    <FormControl>
                      <Input
                        type='file'
                        accept='image/*'
                        onChange={(e) => {
                          field.onChange(e.target.files ? e.target.files[0] : undefined)
                          // Update avatar preview when a new file is selected
                          if (e.target.files) {
                            const file = e.target.files[0]
                            const reader = new FileReader()
                            reader.onloadend = () => {
                              setAvatarPreview(reader.result as string)
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* Hiển thị ảnh đại diện nếu có */}
            {avatarPreview && (
              <div className='mb-4'>
                <img src={avatarPreview} alt='Avatar Preview' className='w-24 h-24 rounded-full object-cover' />
              </div>
            )}
          </div>

          <Button type='submit'>Update Profile</Button>
        </form>
      </Form>
    </div>
  )
}

export default ProfilePage
