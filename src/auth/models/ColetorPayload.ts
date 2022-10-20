export interface ColetorPayload {
  sub: number
  email: string
  name: string
  iat?: number
  exp?: number
}