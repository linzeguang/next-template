import { SIWESession } from 'siwe'

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_PROJECT_ID: string
  }
}

declare module 'next-auth' {
  interface Session extends SIWESession {
    address: string
    chainId: number
  }
}
