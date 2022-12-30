export const env = {
  TEST: 'test',
  DEV: 'development',
  PROD: 'production',
}

export const environment = {
  env: process.env.APP_ENV || 'development',
}
