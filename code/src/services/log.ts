export const log = (...messages: (string | number)[]) => {
  const content = messages.join(' ');
  console.log(`[LOG] ${new Date().toISOString()} - ${content}`);
};
