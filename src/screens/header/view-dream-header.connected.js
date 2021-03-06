import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  Button,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native'
import { populateDreamBuilder } from '../../redux/actions/dream-builder'
import { toggleConfirmDelete } from '../../redux/actions/dream'
import Text from '../../components/common/text'
import moment from 'moment'
import Header from './header'
import HeaderButton from './header-button'
import Screen from '../internal/screen'
import TabIcon from '../internal/tab-icon'
import ViewDream from '../../components/view-dream'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const DreamBuilderHeader = props => {
  const {
    saveDream,
    toggleConfirmDelete,
    populateDreamBuilder,
    navigation,
    dream,
    nav,
  } = props
  const title = moment(dream.dreamDate).format('MMM Do')

  return (
    <Header
      title={title}
      headerLeft={() =>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backWrapper}>
            <Icon
              name="chevron-left"
              color="#fff"
              size={30}
              style={styles.backIcon}
            />
            <Text style={styles.headerText}>Back</Text>
          </View>
        </TouchableOpacity>}
      headerRight={() =>
        <View style={styles.headerBtnsWrapper}>
          <TouchableOpacity
            onPress={() => {
              toggleConfirmDelete()
            }}
          >
            <Icon name="delete" color="#f26666" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => {
              populateDreamBuilder(dream)
              navigation.navigate('DreamBuilder')
            }}
          >
            <Icon name="edit" color="#f7ff62" size={30} />
          </TouchableOpacity>
        </View>}
    />
  )
}

const mapStateToProps = ({ dream }) => ({ dream })
export default connect(mapStateToProps, {
  toggleConfirmDelete,
  populateDreamBuilder,
})(DreamBuilderHeader)
