export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USER: string;
      EMAIL_PASS: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
} 