import { getAuth } from '@clerk/tanstack-start/server'
import { createMiddleware } from '@tanstack/start'
import { getWebRequest } from 'vinxi/http'

const authMiddleware = createMiddleware().server(async ({ next }) => {
  const user = await getAuth(getWebRequest())

})