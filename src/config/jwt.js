import dotenv from 'dotenv'
dotenv.config()

export default {
  PRIVATE_KEY: process.env.JWT_PRIVATE_KEY ?? 'germancito',
  EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '1h',
}
