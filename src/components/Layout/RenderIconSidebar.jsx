import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub,
FaUserCircle,
FaClipboardList,
FaFileContract,
FaBookReader,
FaBookOpen,
FaKey,
FaHome,
FaChartLine,
FaUsers
} from 'react-icons/fa';

const IconSidebar = props => {
  switch (props.icon) {
    case 'FaUserCircle':
      return(
        <FaUserCircle className={props.class} />
      )
    break;
    case 'FaClipboardList':
      return(
        <FaClipboardList className={props.class} />
      )
    break;
    case 'FaFileContract':
      return(
        <FaFileContract className={props.class} />
      )
    break;
    case 'FaBookReader':
      return(
        <FaBookReader className={props.class} />
      )
    break;
    case 'FaBookOpen':
      return(
        <FaBookReader className={props.class} />
      )
    break;
    case 'FaKey':
      return(
        <FaKey className={props.class} />
      )
    break;
    case 'FaHome':
      return(
        <FaHome className={props.class} />
      )
    break;
    case 'FaChartLine':
      return(
        <FaChartLine className={props.class} />
      )
    break;
    case 'FaUsers':
      return(
        <FaUsers className={props.class} />
      )
    break;
    default:
    return(
      <FaGithub className={props.class} />
    )
    break;
  }
}

export default IconSidebar
