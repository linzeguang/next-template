import { getCsrfToken, getSession, signIn, signOut } from 'next-auth/react'
import { SiweMessage } from 'siwe'
import type {
  SIWECreateMessageArgs,
  SIWESession,
  SIWEVerifyMessageArgs
} from '@web3modal/siwe'
import { createSIWEConfig } from '@web3modal/siwe'

export const siweConfig = createSIWEConfig({
  createMessage: ({ nonce, address, chainId }: SIWECreateMessageArgs) => {
    return new SiweMessage({
      version: '1',
      domain: window.location.host,
      uri: window.location.origin,
      address,
      chainId,
      nonce,
      statement: 'Sign In With Ethereum to prove you control this wallet.'
    }).prepareMessage()
  },
  getNonce: async () => {
    const nonce = await getCsrfToken()
    if (!nonce) {
      throw new Error('Failed to get nonce!')
    }

    return nonce
  },
  getSession: async () => {
    const session = await getSession()
    console.log('>>>>>> getSession: ', session)

    if (!session) {
      throw new Error('Failed to get session!')
    }

    const { expires } = session
    const isTimeout = expires ? Date.now() > Date.parse(expires) : false

    if (isTimeout) {
      throw new Error('Expired signature!')
    }

    const { address, chainId } = session as unknown as SIWESession

    return { address, chainId }
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      const success = await signIn('credentials', {
        message,
        signature,
        redirect: false
      })

      return Boolean(success?.ok)
    } catch (error) {
      return false
    }
  },
  signOut: async () => {
    try {
      await signOut({
        redirect: false
      })

      return true
    } catch (error) {
      return false
    }
  }
})
