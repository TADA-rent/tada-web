import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-punch pb-[100vh] lg:pb-[60vh]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
