import React from 'react'
import ReactDOM from 'react-dom'
import ChipInput from 'material-ui-chip-input'
import { MuiThemeProvider, createMuiTheme } from 'material-ui'

import './styles.css'

class App extends React.Component {
  state = {
    chipsValue: []
  }

  render() {
    const dataSource = ['Sofa', 'Chairs', 'Tables']

    const handleAddChip = receivedChip => {
      console.log('I was called with chip', receivedChip)
      const newChips = [...this.state.chipsValue]
      newChips.push(receivedChip)
      this.setState(
        {
          chipsValue: newChips
        },
        () => console.log('State after Adding', this.state.chipsValue)
      )
    }

    const handleDeleteChip = (chipToBeDeleted, index) => {
      console.log(index)
      const newChips = [...this.state.chipsValue]
      newChips.splice(index, 1)
      this.setState(
        {
          chipsValue: newChips
        },
        () => console.log('State after Removing', this.state.chipsValue)
      )
    }

    const beforeAdd = chip => {
      console.log('chip value', chip)
      console.log(dataSource.includes(chip))
      return dataSource.includes(chip)
    }

    return (
      <MuiThemeProvider>
        <ChipInput
          value={this.state.chipsValue}
          fullWidth={true}
          openOnFocus={true}
          onRequestAdd={chip => handleAddChip(chip)}
          onRequestDelete={(deleteChip, index) =>
            handleDeleteChip(deleteChip, index)
          }
          //chipContainerStyle={{ "backgroundColor":"blue", "margin":"100px" }}
          dataSource={dataSource}
          onBeforeRequestAdd={chip => beforeAdd(chip)}
        />
      </MuiThemeProvider>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
