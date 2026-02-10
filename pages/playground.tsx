import Head from 'next/head'

import Editor from 'components/Editor'
import { Container } from 'components/ui'

const PlaygroundPage = () => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <title>EVM Playground</title>
        <meta
          name="description"
          content="EVM Playground is an interactive tool for learning how to use opcodes, the stack behind smart contracts."
        />
      </Head>

      <Container className="py-10">
        <Editor />
      </Container>
    </>
  )
}

export default PlaygroundPage
