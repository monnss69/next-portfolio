export function logError(error: Error, context?: Record<string, any>) {
  console.error('Error:', {
    message: error.message,
    stack: error.stack,
    ...context,
  });
  
  // You can add additional error reporting services here
  // Example: Sentry, LogRocket, etc.
}

export function handleError(error: unknown) {
  if (error instanceof Error) {
    logError(error);
  } else {
    logError(new Error(String(error)));
  }
}