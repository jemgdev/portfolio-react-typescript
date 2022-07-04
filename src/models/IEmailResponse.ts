export default interface IEmailResponse {
  ok: boolean
  message: string,
  status: 'error' | 'success'
}