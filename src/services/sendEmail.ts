import IContact from '../models/IContact'
import IEmailResponse from '../models/IEmailResponse'

const isEmail = (email: string) => {
  return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export default async function sendEmail (contact: IContact) : Promise<IEmailResponse> {

  const { name, email , message } = contact

  if ( name === '' || email === '' || message === '') {
    return {
      ok: false,
      message: 'Por favor rellenar todos los campos (*).',
      status: 'error'
    }
  }

  if (!isEmail(email)) {
    return {
      ok: false,
      message: 'Ingresar un email valido.',
      status: 'error'
    }
  }

  try {
    const response = await fetch('https://formspree.io/f/xyyogwkw', {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Accept': 'application/json'
      }
    })

    const data = await response.json()

    return {
      ok: data.ok,
      message: 'Mensaje enviado exitosamente.',
      status: 'success'
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Hubo un error inesperado.',
      status: 'error'
    }
  }
}
