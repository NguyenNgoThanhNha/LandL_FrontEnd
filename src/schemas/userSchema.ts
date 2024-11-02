import { z } from 'zod'
//signup
export const UserSignupSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required'
    })
    .min(1, 'Email is required')
    .email({ message: 'Email is not a valid email' }),
  userName: z
    .string({
      required_error: 'Username is required'
    })
    .min(1, 'Username is required'),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(1, 'Password is required'),
  confirmPassword: z
    .string({
      required_error: 'Confirm password is required'
    })
    .min(1, 'Confirm password is required'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .length(10, 'Phone number must be exactly 10 digits')
    .regex(/^\d+$/, 'Phone number must contain only digits')
    .refine((val) => val.length === 10, { message: 'Phone number must be exactly 10 digits' }),
  policy: z.boolean()
})

export type UserSignupType = z.infer<typeof UserSignupSchema>
//login
export const UserLoginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required'
    })
    .min(1, 'Email is required')
    .email({ message: 'Email is not a valid email' }),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(1, 'Password is required')
})
export type UserLoginType = z.infer<typeof UserLoginSchema>
//forgot-password
export const UserForgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required'
    })
    .min(1, 'Email is required')
})
export type UserForgotPasswordType = z.infer<typeof UserForgotPasswordSchema>
//verify-code
export const UserVerifyCodeSchema = z.object({
  otp: z
    .string({
      required_error: 'Code is required'
    })
    .min(1, 'Code is required')
})
export type UserVerifyCodeType = z.infer<typeof UserVerifyCodeSchema>
//set password
export const UserSetPasswordSchema = z.object({
  newPassword: z
    .string({
      required_error: 'Password is required'
    })
    .min(1, 'Password is required'),
  confirmNewPassword: z
    .string({
      required_error: 'Confirm password is required'
    })
    .min(1, 'Confirm password is required')
})
export type UserSetPasswordType = z.infer<typeof UserSetPasswordSchema>
//get promote code
export const UserGetPromoteCodeSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required'
    })
    .min(1, 'Email is required'),
  username: z
    .string({
      required_error: 'Username is required'
    })
    .min(1, 'Username is required'),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .length(10, 'Phone number must be exactly 10 digits')
    .regex(/^\d+$/, 'Phone number must contain only digits')
    .refine((val) => val.length === 10, { message: 'Phone number must be exactly 10 digits' })
})

export type UserGetPromoteCodeType = z.infer<typeof UserGetPromoteCodeSchema>

//SignInGG
export const UserSignInGGSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required'
    })
    .min(1, 'Email is required')
    .email({ message: 'Email is not a valid email' }),
  userName: z
    .string({
      required_error: 'Username is required'
    })
    .min(1, 'Username is required'),
  fullName: z
    .string({
      required_error: 'FullName is required'
    })
    .min(1, 'FullName is required'),
  avatar: z
    .string({
      required_error: 'Avatar is required'
    })
    .min(1, 'Avatar is required'),
  typeAccount: z
    .string({
      required_error: 'TypeAccount is required'
    })
    .min(1, 'TypeAccount is required')
})

export type UserSignInGGType = z.infer<typeof UserSignInGGSchema>

export const UpdateInfoSchema = z.object({
  senderName: z.string({}).min(1, 'Sender name is required'),
  senderPhone: z.string({}).min(10, 'Sender phone number is required'),
  receiverName: z.string({}).min(1, 'Receiver name is required'),
  receiverPhone: z.string({}).min(10, 'Receiver phone number is required'),
  orderDetailId: z.string(),
  deliveryInfoId: z.string()
})

export type UpdateInfoType = z.infer<typeof UpdateInfoSchema>

// update user info
export const UpdateUserInfoSchema = z.object({
  userName: z.string().min(1, 'User name is required'),
  fullName: z.string().min(1, 'Full name is required'),
  phoneNumber: z.string().max(10, "Phone number is required and max length 10"),
  city: z.string().min(1, 'City is required'),
  address: z.string().min(1, 'Address is required'),
  gender: z.string().min(1, 'Gender is required'),
  birthDate: z.date().refine((birthDate) => {
    const currentDate = new Date();
    return birthDate <= currentDate;
  }, {
    message: 'Birth date must not be in the future',
  }),
  avatar: z.instanceof(File).optional(), // Make avatar optional
})
  .refine((data) => !data.avatar || data.avatar instanceof File, {
    message: 'Avatar must be a valid file format',
    path: ['avatar'],
  });

export type UpdateUserInfoType = z.infer<typeof UpdateUserInfoSchema>;


