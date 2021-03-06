import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Button,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native'
import { populateDreamBuilder } from '../../redux/actions/dream-builder'
import Text from '../../components/common/text'
import moment from 'moment'
import Header from './header'
import ViewDream from '../../components/view-dream'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DreamBuilderHeader = props => {
  const { populateDreamBuilder, navigation, title } = props

  return (
    <Header
      title={title}
      headerRight={() =>
        <View style={styles.headerBtnsWrapper}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              populateDreamBuilder()
              navigation.navigate('DreamBuilder')
            }}
          >
            <Icon name="add-circle" color="#f7ff62" size={26} />
          </TouchableOpacity>
        </View>}
    />
  )
}

const mapStateToProps = ({ dream }) => ({ dream })
export default connect(mapStateToProps, {
  populateDreamBuilder,
})(DreamBuilderHeader)
