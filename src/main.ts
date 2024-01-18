import { GoogleGenerativeAI } from '@google/generative-ai';

async function main() {
  const genAI = new GoogleGenerativeAI(
    'AIzaSyBCyrz3GwPJzK_qxtHuJbnaWnRU5GcECVw'
  );

  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  const prompt = '如何成为百万富翁';

  const { totalTokens } = await model.countTokens(prompt);
  console.log('totalTokens >>>', totalTokens);

  const result = await model.generateContentStream(prompt);

  let text = '';
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    console.log(chunkText);
    text += chunkText;
  }
}

main();
