import * as React from 'react'
import { Button } from '../lib/button'

const BlankSlateImage = `file:///${__dirname}/static/empty-no-branches.svg`

interface INoBranchesProps {
  readonly onCreateNewBranch: () => void
}

export class NoBranches extends React.Component<INoBranchesProps> {
  public render() {
    const shortcut = __DARWIN__ ? '⌘' : 'Ctrl'
    return (
      <div className="no-branches">
        <img src={BlankSlateImage} className="blankslate-image" />

        <div className="title">Sorry, I can't find that branch</div>

        <div className="subtitle">
          Do you want to create a new branch instead?
        </div>

        <Button
          className="create-branch-button"
          onClick={this.props.onCreateNewBranch}
          type="submit"
        >
          {__DARWIN__ ? 'Create New Branch' : 'Create new branch'}
        </Button>

        <div className="protip">
          ProTip! Press <kbd>{shortcut}</kbd> + <kbd>⇧</kbd> + <kbd>N</kbd> to
          quickly create a new branch from anywhere within the app
        </div>
      </div>
    )
  }
}