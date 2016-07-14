import {receiveLogin, validateProfile} from '../../common/actions/user';
componentWillMount() {
    this.props.store.dispatch(validateProfile());
}
handleChange() {
    // behavior on store change would happen here
}
