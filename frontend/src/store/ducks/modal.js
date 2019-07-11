export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE',
};

const INITIAL_STATE = {
  visible: false,
  immigrant: {},
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {

    case Types.SHOW:
      return {
        visible: true,
        immigrant: action.payload.immigrant,
      };

    case Types.HIDE:
      return {
        visible: false,
        immigrant: {},
      };
      
    default:
      return state;
  }
}

export const Creators = {
  showModal: immigrant => ({
    type: Types.SHOW,
    payload: { immigrant },
  }),

  hideModal: () => ({
    type: Types.HIDE,
  }),
};