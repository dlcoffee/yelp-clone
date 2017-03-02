import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import styles from './styles.module.css'

export class MapComponent extends React.Component {
  render() {
    return(
      <div className={styles.map}>
        Map!
      </div>
    )
  }
}

export default MapComponent
