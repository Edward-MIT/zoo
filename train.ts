function delayHelloWorld(message: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, 3000); // 3 soniya kutadi
  });
}

// Funksiyani chaqirish
delayHelloWorld("Hello World!").then(console.log);
