import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='dark:bg-very-dark-blue bg-light-gray dark:text-white text-very-dark-blue-2'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
