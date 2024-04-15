/// <reference types="next-plugin-svgr/types/svg" />

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

declare const TradingView: {
  widget: import('./public/charting_library/charting_library').ChartingLibraryWidgetConstructor
}
