import Head from 'next/head'
import { useContext, useMemo } from 'react'
import Select, { OnChangeValue } from 'react-select'

import Editor from 'components/Editor'
import { Container } from 'components/ui'
import { EthereumContext } from 'context/ethereumContext'

const PlaygroundPage = () => {
  const { forks, selectedFork, onForkChange } = useContext(EthereumContext)

  const forkOptions = useMemo(
    () =>
      forks.map((fork) => ({
        value: fork.name,
        label: fork.name,
      })),
    [forks],
  )

  const forkValue = useMemo(
    () =>
      selectedFork
        ? {
            value: selectedFork.name,
            label: selectedFork.name,
          }
        : undefined,
    [selectedFork],
  )

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
        <div className="flex justify-end mb-3">
          <div className="min-w-[160px]">
            <Select
              onChange={(option: OnChangeValue<any, any>) =>
                option?.value && onForkChange(option.value)
              }
              options={forkOptions}
              value={forkValue}
              isSearchable={false}
              classNamePrefix="select"
              menuPlacement="auto"
            />
          </div>
        </div>
        <Editor />
      </Container>
    </>
  )
}

export default PlaygroundPage
