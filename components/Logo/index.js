import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons'

import styles from './index.module.css'

export default function Logo({ tag, className, ...rest }) {
    const Tag = `${tag}`
    return (
        <Tag className={classnames(className, styles.text)} {...rest}>
            #ldnont <br />
            Gin Club
            <span className={styles.icon}>
                <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            </span>
        </Tag>
    )
}
