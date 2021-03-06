import {
  STAKE_SEND_START,
  STAKE_SEND_SUCCESS,
  STAKE_SEND_FAILURE
} from '../actions';

const initialState = {
  walletConnected: false,
  userAddress: '',
  usdcBalance: '0',
  usdtBalance: '0',
  busdBalance: '0',
  ethBalance: '0',
  network: '',
  errMessage: null
};

const stakeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STAKE_SEND_START:
      return {
        ...state
      };

    case STAKE_SEND_SUCCESS:
      return {
        ...state
      };

    case STAKE_SEND_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default stakeReducer;
