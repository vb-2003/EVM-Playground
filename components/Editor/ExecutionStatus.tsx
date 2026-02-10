import { useContext } from 'react'

import { Tooltip } from 'react-tooltip'

import { EthereumContext } from 'context/ethereumContext'

import { Button, Icon } from 'components/ui'

const ExecutionStatus = () => {
  const { isExecuting, executionState, nextExecution, continueExecution } =
    useContext(EthereumContext)

  return (
    <div className="flex flex-grow justify-between items-center text-sm">
      <div>
        <span className="inline-block ml-1 mr-2 text-gray-400">
          <Icon name="gas-station-fill" className="text-indigo-500" />
        </span>
        <span className="inline-block mr-2 text-gray-500 dark:text-gray-300 text-sm select-none">
          Gas used:
        </span>
        <span className="inline-block mr-1 text-gray-500 dark:text-gray-400 text-sm select-none">
          Current:
        </span>
        <span
          className="inline-block mr-4 select-all cursor-help text-gray-800 dark:text-gray-100"
          data-tooltip-content="Gas consumed for the current instruction"
        >
          {executionState.currentGas || 0}
        </span>
        <span className="inline-block mr-1 text-gray-500 dark:text-gray-400 text-sm select-none">
          Total:
        </span>
        <span
          className="inline-block mr-4 select-all cursor-help text-gray-800 dark:text-gray-100"
          data-tooltip-content="Total gas consumed"
        >
          {executionState.totalGas || 0}
        </span>

        <Tooltip className="tooltip" />
      </div>

      <div className="flex items-center gap-3">
        <Button
          outline
          disabled={!isExecuting}
          onClick={nextExecution}
          size="xs"
          tooltip="Step into"
          tooltipId="step"
          className="border-gray-300 dark:border-gray-500 hover:border-indigo-400 dark:hover:border-indigo-300"
        >
          <span className="text-indigo-600 dark:text-indigo-300">Step</span>
        </Button>

        <Button
          outline
          disabled={!isExecuting}
          onClick={continueExecution}
          size="xs"
          tooltip="Continue execution"
          tooltipId="continue"
          className="border-gray-300 dark:border-gray-500 hover:border-indigo-400 dark:hover:border-indigo-300"
        >
          <span className="text-indigo-600 dark:text-indigo-300">Continue</span>
        </Button>
      </div>
    </div>
  )
}

export default ExecutionStatus
