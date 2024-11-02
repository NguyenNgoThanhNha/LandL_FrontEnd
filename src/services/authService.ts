import { get, patchFormData, post, ResponseProps } from '@/services/root.ts'
import { UserSignInGGType, UserSignupType } from '@/schemas/userSchema.ts'

interface RegisterProps {
  data: UserSignupType
}

const register = async ({ data }: RegisterProps): Promise<ResponseProps> => {
  return await post('Auth/FirstStep', { ...data, typeAccount: 'Customer' })
}

interface VerifyProps {
  email: string
  otp: string
}

const verify = async ({ email, otp }: VerifyProps): Promise<ResponseProps> => {
  return await post('Auth/SubmitOTP', { email, otp })
}

interface LoginProps {
  email: string
  password: string
}

const login = async ({ email, password }: LoginProps): Promise<ResponseProps> => {
  return await post('Auth/login', { email, password })
}

interface ForgotPasswordProps {
  email: string
}

const forgotPassword = async ({ email }: ForgotPasswordProps): Promise<ResponseProps> => {
  return await post(`Auth/Forget-Password?email=${email}`, {})
}

interface ResendOTPProps {
  email: string
}

const resendOTP = async ({ email }: ResendOTPProps): Promise<ResponseProps> => {
  return await post(`Auth/Resend-Otp?email=${email}`, {})
}

interface UpdatePasswordProps {
  email: string
  newPassword: string
  confirmNewPassword: string
}

const updatePassword = async ({
  email,
  newPassword,
  confirmNewPassword
}: UpdatePasswordProps): Promise<ResponseProps> => {
  return await post(`Auth/Update-Password?email=${email}`, {
    password: newPassword,
    confirmPassword: confirmNewPassword
  })
}

interface LoginWithGGProps {
  data: UserSignInGGType
}

const loginWithGG = async ({ data }: LoginWithGGProps): Promise<ResponseProps> => {
  return await post('Auth/login-google', data)
}

const getUserInfo = async (): Promise<ResponseProps> => {
  return await get('User/GetProfile')
}

const getRefresh = async (): Promise<ResponseProps> => {
  return await get('Auth/refresh-token')
}
const deleteAccount = async (): Promise<ResponseProps> => {
  return await post('User/DeleteAccount', {})
}

interface UpdateUserInformationProps {
  email: string
  data: FormData
}

export const updateUserInformation = async ({ email, data }: UpdateUserInformationProps): Promise<ResponseProps> => {
  return await patchFormData(`User/UpdateInfo?email=${email}`, data)
}

export default {
  register,
  verify,
  login,
  forgotPassword,
  resendOTP,
  updatePassword,
  loginWithGG,
  getUserInfo,
  getRefresh,
  deleteAccount,
  updateUserInformation
}
